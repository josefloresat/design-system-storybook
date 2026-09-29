import { useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import css from '../../index.css?raw';
import styles from './tokens.module.css';

interface Token {
  name: string;
  value: string;
}

interface Row {
  key: string;
  names: string[];
  values: ReactNode[];
  preview?: ReactNode;
}

const labels = {
  name: 'Nombre',
  value: 'Valor',
  preview: 'Vista previa',
  families: 'Familias',
  weights: 'Pesos',
  fontSample: 'Aa',
  shadowNote: 'Los tokens definen desplazamiento, blur y spread; el color de la muestra es solo ilustrativo',
  typeSample: 'The quick brown fox jumps over the lazy dog',
} as const;

const readVars = (source: string): Token[] =>
  [...source.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(([, name, value]) => ({
    name,
    value: value.trim(),
  }));

const rootVars = new Map<string, Token>();
readVars(css).forEach((token) => {
  if (!rootVars.has(token.name)) rootVars.set(token.name, token);
});
const allTokens = [...rootVars.values()];

const byPrefix = (prefix: string) => allTokens.filter(({ name }) => name.startsWith(prefix));

const valueOf = (name: string) => rootVars.get(name)?.value ?? '';

const titleCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const classes = (...names: string[]) => names.join(' ');

const tokenRow = (token: Token, preview?: ReactNode): Row => ({
  key: token.name,
  names: [token.name],
  values: [token.value],
  preview,
});

interface TokenTableProps {
  rows: Row[];
  variant?: 'text' | 'shadow';
}

const TokenTable = ({ rows, variant }: TokenTableProps) => (
  <table className={classes(styles.tokens__table, variant ? styles[`tokens__table--${variant}`] : '')}>
    <thead>
      <tr>
        <th>{labels.name}</th>
        <th>{labels.value}</th>
        <th className={styles['tokens__table-preview']}>{labels.preview}</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(({ key, names, values, preview }) => (
        <tr key={key}>
          <td>
            <div className={styles.tokens__stack}>
              {names.map((name) => (
                <code className={styles.tokens__chip} key={name}>
                  {name}
                </code>
              ))}
            </div>
          </td>
          <td>
            <div className={styles.tokens__stack}>
              {values.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </div>
          </td>
          <td className={styles['tokens__table-preview']}>{preview}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TokenGroup = ({ title, ...tableProps }: TokenTableProps & { title: string }) => (
  <div className={styles.tokens__group}>
    <h3>{title}</h3>
    <TokenTable {...tableProps} />
  </div>
);

const Page = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>{title}</h2>
      {children}
    </section>
  </div>
);

const ResolvedValue = ({ name }: { name: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [resolved, setResolved] = useState('');

  useLayoutEffect(() => {
    const read = () => {
      if (ref.current) setResolved(getComputedStyle(ref.current).getPropertyValue(name).trim());
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [name]);

  return <span ref={ref}>{resolved}</span>;
};

const ColorPreview = ({ name }: { name: string }) => (
  <div className={classes(styles.tokens__preview, styles['tokens__preview--checker'])}>
    <div className={styles['tokens__preview-fill']} style={{ background: `var(${name})` }} />
  </div>
);

const colorRow = (token: Token): Row => ({
  key: token.name,
  names: [token.name],
  values: token.value.startsWith('var(')
    ? [token.value, <ResolvedValue key="resolved" name={token.name} />]
    : [token.value],
  preview: <ColorPreview name={token.name} />,
});

const primitiveColorGroups: [string, string][] = [
  ['Brand', '--color-brand-'],
  ['Green', '--color-green-'],
  ['Yellow', '--color-yellow-'],
  ['Blue', '--color-blue-'],
  ['Red', '--color-red-'],
  ['Neutral', '--color-neutral-'],
  ['Opacity (overlay)', '--color-overlay-'],
];

export const PrimitiveColors = () => (
  <Page title="Primitive color">
    {primitiveColorGroups.map(([title, prefix]) => (
      <TokenGroup key={prefix} title={title} rows={byPrefix(prefix).map(colorRow)} />
    ))}
  </Page>
);

const semanticColorSections: [string, string][] = [
  ['Background', '--color-bg-'],
  ['Border', '--color-border-'],
  ['Text', '--color-text-'],
];

const groupBySegment = (tokens: Token[], prefix: string) => {
  const groups = new Map<string, Token[]>();
  tokens.forEach((token) => {
    const [segment] = token.name.slice(prefix.length).split('-');
    groups.set(segment, [...(groups.get(segment) ?? []), token]);
  });
  return [...groups];
};

export const SemanticColors = () => (
  <Page title="Semantic color">
    <TokenGroup title="Overlay" rows={byPrefix('--color-overlay-').map(colorRow)} />
    {semanticColorSections.map(([title, prefix]) =>
      groupBySegment(byPrefix(prefix), prefix).map(([segment, tokens]) => (
        <TokenGroup key={prefix + segment} title={`${title} / ${titleCase(segment)}`} rows={tokens.map(colorRow)} />
      )),
    )}
    <TokenGroup title="Components" rows={byPrefix('--color-components-').map(colorRow)} />
  </Page>
);

const typeGroups: [string, RegExp][] = [
  ['Headings', /^(h\d|main)/],
  ['Subtitles', /^subtitle/],
  ['Bodies', /^body/],
  ['Buttons', /^button/],
  ['Captions', /^caption/],
  ['Links', /^link/],
];

const typeProperties = ['weight', 'size', 'line-height', 'letter-spacing'];

const typeStyles = byPrefix('--type-')
  .filter(({ name }) => name.endsWith('-size'))
  .map(({ name }) => name.slice('--type-'.length, -'-size'.length));

const typeRow = (style: string): Row => {
  const names = typeProperties.map((property) => `--type-${style}-${property}`);
  return {
    key: style,
    names,
    values: names.map(valueOf),
    preview: (
      <span
        style={{
          fontSize: `var(--type-${style}-size)`,
          fontWeight: `var(--type-${style}-weight)`,
          lineHeight: `var(--type-${style}-line-height)`,
          letterSpacing: `var(--type-${style}-letter-spacing)`,
        }}
      >
        {labels.typeSample}
      </span>
    ),
  };
};

const FontSample = ({ style }: { style: CSSProperties }) => (
  <span className={styles.tokens__sample} style={style}>
    {labels.fontSample}
  </span>
);

export const FontFamilies = () => (
  <Page title="Font family &amp; weight">
    <TokenGroup
      title={labels.families}
      rows={byPrefix('--font-family-').map((token) =>
        tokenRow(token, <FontSample style={{ fontFamily: `var(${token.name})` }} />),
      )}
    />
    <TokenGroup
      title={labels.weights}
      rows={byPrefix('--font-weight-').map((token) =>
        tokenRow(token, <FontSample style={{ fontWeight: `var(${token.name})` }} />),
      )}
    />
  </Page>
);

export const TypeScale = () => (
  <Page title="Semantic typography (Desktop / Small Device)">
    {typeGroups.map(([title, pattern]) => (
      <TokenGroup key={title} title={title} variant="text" rows={typeStyles.filter((style) => pattern.test(style)).map(typeRow)} />
    ))}
  </Page>
);

export const Spacing = () => (
  <Page title="Spacing">
    <TokenTable
      rows={byPrefix('--spacing-').map((token) =>
        tokenRow(token, <div className={styles.tokens__bar} style={{ width: `var(${token.name})` }} />),
      )}
    />
  </Page>
);

export const Radius = () => (
  <Page title="Border radius">
    <TokenTable
      rows={byPrefix('--radius-').map((token) =>
        tokenRow(token, <div className={styles.tokens__box} style={{ borderRadius: `var(${token.name})` }} />),
      )}
    />
  </Page>
);

export const IconSize = () => (
  <Page title="Icon size">
    <TokenTable
      rows={byPrefix('--icon-size-').map((token) =>
        tokenRow(
          token,
          <div className={styles.tokens__box} style={{ width: `var(${token.name})`, height: `var(${token.name})` }} />,
        ),
      )}
    />
  </Page>
);

export const Grid = () => (
  <Page title="Grid system">
    <TokenTable rows={byPrefix('--grid-').map((token) => tokenRow(token))} />
  </Page>
);

export const Borders = () => (
  <Page title="Border width">
    <TokenTable
      rows={byPrefix('--border-width-').map((token) =>
        tokenRow(
          token,
          <div
            className={classes(styles.tokens__box, styles['tokens__box--border'])}
            style={{ borderWidth: `var(${token.name})` }}
          />,
        ),
      )}
    />
  </Page>
);

const shadowSizes = ['s', 'm', 'l', 'xl'];

const shadowRow = (size: string): Row => {
  const names = ['--shadow-x-s', `--shadow-y-${size}`, `--shadow-blur-${size}`, '--shadow-spread-s'];
  return {
    key: size,
    names,
    values: names.map(valueOf),
    preview: (
      <div
        className={classes(styles.tokens__box, styles['tokens__box--shadow'])}
        style={{
          boxShadow: `var(--shadow-x-s) var(--shadow-y-${size}) var(--shadow-blur-${size}) var(--shadow-spread-s) var(--color-overlay-20)`,
        }}
      />
    ),
  };
};

export const Shadows = () => (
  <Page title="Shadow system">
    <p className={styles.tokens__note}>
      {labels.shadowNote} (<code>--color-overlay-20</code>).
    </p>
    <TokenTable variant="shadow" rows={shadowSizes.map(shadowRow)} />
  </Page>
);
