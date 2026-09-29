import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(dirname, 'src');

const libPaths = {
  entry: path.join(srcDir, 'index.ts'),
  tokensSource: path.join(srcDir, 'index.css'),
  tokensOutput: 'tokens.css',
};

const toCompiledCssName = (fileName: string) =>
  fileName.replace(/\.module\.css$/, '.css');

const injectComponentCss = (): Plugin => ({
  name: 'inject-component-css',
  apply: 'build',
  enforce: 'post',
  generateBundle(_options, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.type !== 'chunk') continue;
      const importedCss = chunk.viteMetadata?.importedCss;
      if (!importedCss?.size) continue;
      const chunkDir = path.posix.dirname(chunk.fileName);
      const cssImports = [...importedCss]
        .map((cssFile) => {
          const relative = path.posix.relative(chunkDir, toCompiledCssName(cssFile));
          const specifier = relative.startsWith('.') ? relative : `./${relative}`;
          return `import '${specifier}';\n`;
        })
        .join('');
      chunk.code = cssImports + chunk.code;
    }
    for (const asset of Object.values(bundle)) {
      if (asset.type !== 'asset') continue;
      const compiledName = toCompiledCssName(asset.fileName);
      if (compiledName === asset.fileName) continue;
      delete bundle[asset.fileName];
      this.emitFile({ type: 'asset', fileName: compiledName, source: asset.source });
    }
  },
});

const emitTokens = (): Plugin => ({
  name: 'emit-tokens',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: libPaths.tokensOutput,
      source: readFileSync(libPaths.tokensSource, 'utf8'),
    });
  },
});

export default defineConfig({
  plugins: [react(), injectComponentCss(), emitTokens()],
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      entry: libPaths.entry,
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^react(-dom)?(\/.*)?$/],
      output: {
        preserveModules: true,
        preserveModulesRoot: srcDir,
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
