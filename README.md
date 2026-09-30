# @apuesta-total/design-system

Design system oficial de Apuesta Total: los tokens de diseño y los componentes oficiales de React, construidos 1:1 desde Figma. Esta guía es para los equipos que consumen el paquete desde su propia app de Next.js. La última sección, *Publicar y desplegar*, es para el Owner team.

El catálogo visual de cada componente (variantes, tamaños y estados) está en el Storybook de este mismo repositorio.

## Instalación

El paquete está publicado en GitHub Packages como `@josefloresat/design-system`. Ese nombre es temporal, mientras no exista la organización de la empresa en GitHub. En tu app se instala con un alias, así que siempre lo importas como `@apuesta-total/design-system` y tu código no cambia cuando el paquete pase a su nombre final.

### 1. Token de lectura

GitHub Packages pide autenticación incluso para instalar. Crea un token **classic** (los fine-grained no sirven para el registro npm) en GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic), solo con el permiso `read:packages`.

Guárdalo como variable de entorno `GITHUB_PACKAGES_TOKEN`. En Windows (PowerShell):

```powershell
[Environment]::SetEnvironmentVariable('GITHUB_PACKAGES_TOKEN', '<token>', 'User')
```

Reinicia la terminal para que se tome. En CI o en Cloudflare Workers Builds, crea una variable de build con el mismo nombre.

### 2. `.npmrc`: registro en el proyecto, token en tu usuario

En la raíz de tu proyecto, un `.npmrc` que se commitea y solo dice de dónde sale el scope:

```ini
@josefloresat:registry=https://npm.pkg.github.com
```

La línea del token va en tu `.npmrc` de usuario (`~/.npmrc`, en Windows `C:\Users\<tu usuario>\.npmrc`), fuera de cualquier repo:

```ini
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

Así el token nunca se escribe en un archivo: se lee de la variable de entorno. pnpm 11 ignora esa línea si está en el `.npmrc` del proyecto, porque no expande variables de entorno en credenciales de un archivo commiteado.

En CI (por ejemplo Cloudflare Workers Builds), antes de instalar:

```sh
pnpm config set "//npm.pkg.github.com/:_authToken" "$GITHUB_PACKAGES_TOKEN"
```

### 3. Dependencia con alias

```sh
pnpm add @apuesta-total/design-system@npm:@josefloresat/design-system@^0.3.0
```

Eso deja en tu `package.json`:

```json
"@apuesta-total/design-system": "npm:@josefloresat/design-system@^0.3.0"
```

Si tu proyecto usa la política `minimumReleaseAge` de pnpm, agrega `@josefloresat/*` a `minimumReleaseAgeExclude` en `pnpm-workspace.yaml`; si no, pnpm rechaza las versiones recién publicadas.

Para actualizar a una versión nueva: `pnpm update @apuesta-total/design-system`.

El paquete usa el React de tu app (`react` y `react-dom` `^19` son `peerDependencies`), así que nunca vas a tener dos copias de React.

## Configuración del layout raíz

Importa los tokens **una sola vez**, en `app/layout.tsx`, y fija el tema claro en `<html>`:

```tsx
import '@apuesta-total/design-system/tokens.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
```

- `tokens.css` define todos los tokens como custom properties de CSS y un reset base (`box-sizing`, tipografía y colores de `body`). Todos los módulos de la web comparten esa misma base.
- `data-theme="light"` es obligatorio: sin él, los tokens siguen la preferencia del sistema operativo y tu módulo podría verse en modo oscuro mientras el resto de la web se ve en claro. Por ahora solo se usa el tema claro.

## Uso de componentes

```tsx
import { Button } from '@apuesta-total/design-system';

export default function Page() {
  return <Button variant="primary" size="md" label="Apostar" />;
}
```

El CSS de cada componente se carga automáticamente al importarlo: no hay hojas de estilo por componente que importar a mano. Los componentes funcionan en Server Components.

El paquete incluye los tipos de TypeScript de cada componente y sus props, así que el editor autocompleta `variant` y `size` y rechaza valores inválidos.

## Fuentes

El paquete **no carga fuentes**: eso le toca a tu app. Los tokens declaran las familias por su nombre literal, así que tu app debe registrarlas exactamente con estos nombres:

| Familia  | Pesos              | Uso                                   |
| -------- | ------------------ | ------------------------------------- |
| `Rubik`  | 400, 500, 600, 700 | Fuente oficial (`--font-family-primary`) |
| `Inter`  | 400, 500, 600, 700 | Token `--font-family-inter`           |

Recomendamos `@fontsource`, que registra las fuentes con su nombre literal:

```sh
pnpm add @fontsource/rubik @fontsource/inter
```

```tsx
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@apuesta-total/design-system/tokens.css';
```

> **Ojo con `next/font`:** genera nombres de familia con hash (por ejemplo `__Rubik_a1b2c3`), que no coinciden con `'Rubik'` ni `'Inter'`. Por sí solo no sirve para este paquete.

No necesitas ninguna otra fuente. El token de display (`--font-family-display`) declara una fuente que el paquete no distribuye y cae automáticamente a Rubik.

## Tokens Contract

Si construyes componentes propios (los de tu Team library o los de tu app), sus valores de diseño salen **solo de los tokens semánticos** de `tokens.css`:

```css
.promo-card {
  background-color: var(--color-bg-neutral-primary);
  color: var(--color-text-neutral-primary);
  padding: var(--spacing-l);
  border-radius: var(--radius-s);
}
```

- Nunca uses los tokens primitivos (por ejemplo `--color-brand-rojo-principal` o `--color-neutral-900`): son valores crudos sin propósito y pueden cambiar sin aviso.
- Nunca escribas valores fijos (`#fb3333`, `16px`): así tu componente sigue alineado con el sistema cuando cambian los tokens.
- Los componentes oficiales solo se personalizan con sus props (`variant`, `size`, atributos HTML nativos). No se copian ni se editan por dentro.

## Versionado

El paquete sigue semver:

- **Major:** renombrar o eliminar un token, o cambiar o eliminar una prop o un valor de `variant`/`size`.
- **Minor:** un componente, variante o token nuevo.
- **Patch:** una corrección visual para ajustarse a Figma.

La versión empieza en `0.1.0` y pasa a `1.0.0` cuando el primer equipo salga a producción. Todos los módulos de la web deben converger a la última versión dentro del plazo acordado, para que la misma web no muestre dos versiones de un componente.

## Publicar y desplegar (Owner team)

Un cambio en este repositorio llega a dos lugares, y cada uno se dispara por separado:

| Qué | Cómo se dispara | Dónde queda |
| --- | --- | --- |
| **Paquete** `@josefloresat/design-system` | Subir un tag `vX.Y.Z` | GitHub Packages (lo publica GitHub Actions) |
| **Storybook** (catálogo y documentación) | Subir cualquier commit a `main` | Cloudflare Workers (lo despliega Workers Builds) |

Nunca se publica el paquete desde una laptop: `publishConfig.registry` apunta a GitHub Packages, así que `npm publish` local no puede llegar a npmjs.com, y el workflow es la única vía oficial.

### 1. Antes de subir nada

Corre todo desde la carpeta `sportbook-storybook` y no sigas si algo falla:

```sh
npm run typecheck
npm run lint
npx vitest run          # cada story es un test en Chromium
npm run build           # arma el paquete en dist/
npm run build-storybook # arma el Storybook en storybook-static/
```

Para ver qué archivos saldrían en el paquete sin publicar nada: `npm publish --dry-run`.

Si cambiaste tokens o componentes, revisa también en Storybook (`npm run storybook`, puerto 6006) el switch «Tema oscuro» y los Foundations. Los documentos `DESIGN.md` y `CONTEXT.md` viven fuera de este repositorio, un nivel arriba; se actualizan a mano y no viajan con el paquete.

### 2. Elegir la versión

Aplica las reglas de la sección *Versionado*:

| Cambio | Comando |
| --- | --- |
| Corrección visual para ajustarse a Figma | `npm version patch` |
| Componente, variante o token nuevo (también cambios de valores de color visibles) | `npm version minor` |
| Renombrar o eliminar un token, o cambiar una prop o un valor de `variant`/`size` | `npm version major` |

Cambios solo de documentación o de Storybook (por ejemplo, las tablas de Foundations) no necesitan versión nueva: basta el push a `main`.

### 3. Publicar el paquete y desplegar Storybook

Con el árbol de trabajo limpio (todo commiteado):

```sh
npm version minor                     # o patch / major: sube package.json, crea el commit y el tag vX.Y.Z
git push origin main --follow-tags    # sube los commits y el tag
```

Ese único push hace dos cosas:

1. **El tag `vX.Y.Z`** dispara `.github/workflows/publish.yml`: verifica que el tag coincida con la `version` de `package.json`, corre `npm ci` y `npm run build`, y ejecuta `npm publish` hacia GitHub Packages.
2. **El commit en `main`** dispara el deploy de Storybook en Cloudflare.

Si solo cambiaste documentación y no quieres versión nueva, haz `git push origin main` sin tag.

### 4. Verificar

- **Paquete:** pestaña *Actions* del repositorio en GitHub, workflow *Publish package*, en verde. La versión aparece en *Packages* del repositorio. Desde una app consumidora: `pnpm update @apuesta-total/design-system` y revisa la versión resuelta en el lockfile.
- **Storybook:** Cloudflare dashboard → *Workers & Pages* → `design-system-storybook` → *Deployments*, con el último build en verde. Abre la URL `workers.dev` del proyecto y revisa la página que cambiaste.

### 5. Cloudflare (Storybook)

El repositorio ya trae la configuración: `wrangler.jsonc` sirve la carpeta `./storybook-static` como archivos estáticos (Worker `design-system-storybook`, con `workers_dev` y `preview_urls` activos).

- **Cada push a `main`** redespliega la URL de producción.
- **Cada push a otra rama** genera una *preview URL* propia, útil para revisar un cambio antes de mezclarlo.

Está conectado con **Workers Builds**. Si hay que volver a conectarlo: Cloudflare dashboard → *Workers & Pages* → *Create* → *Import a repository* → `sportbook-storybook`, rama de producción `main`, con:

- Build command: `npm run build-storybook`
- Deploy command: `npx wrangler deploy`

**Plan B, desde tu laptop** (si Workers Builds está caído o necesitas desplegar sin pasar por Git):

```sh
npx wrangler login    # una sola vez por máquina
npm run deploy        # build-storybook + wrangler deploy
```

Esto despliega lo que tengas en tu carpeta, aunque no esté commiteado. Úsalo solo en una emergencia y sube después el mismo código a `main`, para que Git y el sitio no queden desalineados.

### 6. Si algo sale mal

- **El workflow falla por «Tag … does not match package.json version»:** borra el tag (`git tag -d vX.Y.Z` y `git push origin :refs/tags/vX.Y.Z`), corrige la versión y vuelve a crear el tag.
- **Una versión ya publicada tiene un error:** no se puede republicar ni sobrescribir. Corrige y publica la siguiente (`patch`). Los equipos pueden fijar la versión anterior mientras tanto (`@josefloresat/design-system@0.2.0` en su `package.json`, sin `^`).
- **Storybook quedó mal en Cloudflare:** dashboard → *Deployments* → elige el deploy anterior → *Rollback*. Luego corrige en `main`.
- **El build de Cloudflare falla:** revisa el log del build en *Deployments*. Casi siempre es lo mismo que falla en local con `npm run build-storybook`, así que reprodúcelo ahí primero.
