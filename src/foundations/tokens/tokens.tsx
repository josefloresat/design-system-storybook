import css from '../../index.css?raw';
import styles from './tokens.module.css';

/* Every token is read from src/index.css so the docs can't drift from it. */

interface Token {
  name: string;
  value: string;
}

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

const titleCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/* ------------------------------------------------------------------ Color */

const Swatch = ({ token, label }: { token: Token; label?: string }) => (
  <div className={styles.tokens__swatch}>
    <div className={[styles['tokens__swatch-color'], styles['tokens__swatch-color--checker']].join(' ')}>
      <div className={styles['tokens__swatch-fill']} style={{ background: `var(${token.name})` }} />
    </div>
    <div className={styles['tokens__swatch-label']}>
      {label ?? token.name}
      <code>{token.name}</code>
      <code>{token.value}</code>
    </div>
  </div>
);

const SwatchGroup = ({ title, tokens }: { title: string; tokens: Token[] }) => (
  <div>
    <h3>{title}</h3>
    <div className={styles['tokens__swatch-grid']}>
      {tokens.map((token) => (
        <Swatch key={token.name} token={token} label={token.name.replace('--color-', '')} />
      ))}
    </div>
  </div>
);

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
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Primitive color</h2>
      {primitiveColorGroups.map(([title, prefix]) => (
        <SwatchGroup key={prefix} title={title} tokens={byPrefix(prefix)} />
      ))}
    </section>
  </div>
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
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Semantic color</h2>
      <SwatchGroup title="Overlay" tokens={byPrefix('--color-overlay-')} />
      {semanticColorSections.map(([title, prefix]) =>
        groupBySegment(byPrefix(prefix), prefix).map(([segment, tokens]) => (
          <SwatchGroup key={prefix + segment} title={`${title} / ${titleCase(segment)}`} tokens={tokens} />
        )),
      )}
    </section>
  </div>
);

/* ------------------------------------------------------------- Typography */

const typeGroups: [string, RegExp][] = [
  ['Headings', /^(h\d|main)/],
  ['Subtitles', /^subtitle/],
  ['Bodies', /^body/],
  ['Buttons', /^button/],
  ['Captions', /^caption/],
  ['Links', /^link/],
];

const typeStyles = byPrefix('--type-')
  .filter(({ name }) => name.endsWith('-size'))
  .map(({ name }) => name.slice('--type-'.length, -'-size'.length));

export const FontFamilies = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Font family &amp; weight</h2>
      <div className={styles['tokens__swatch-grid']}>
        {byPrefix('--font-family-').map(({ name, value }) => (
          <div className={styles.tokens__swatch} key={name}>
            <div className={styles['tokens__font-sample']} style={{ fontFamily: `var(${name})` }}>
              Aa
            </div>
            <div className={styles['tokens__swatch-label']}>
              {value}
              <code>{name}</code>
            </div>
          </div>
        ))}
        {byPrefix('--font-weight-').map(({ name, value }) => (
          <div className={styles.tokens__swatch} key={name}>
            <div className={styles['tokens__font-sample']} style={{ fontWeight: `var(${name})` }}>
              Aa
            </div>
            <div className={styles['tokens__swatch-label']}>
              {name.replace('--font-weight-', '')}
              <code>{name}</code>
              <code>{value}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const TypeScale = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Semantic typography (Desktop / Small Device)</h2>
      {typeGroups.map(([title, pattern]) => (
        <div key={title}>
          <h3>{title}</h3>
          {typeStyles
            .filter((style) => pattern.test(style))
            .map((style) => (
              <div className={styles['tokens__type-row']} key={style}>
                <span>
                  {style}
                  <code>
                    {rootVars.get(`--type-${style}-size`)?.value} /{' '}
                    {rootVars.get(`--type-${style}-line-height`)?.value}
                  </code>
                </span>
                <span
                  style={{
                    fontSize: `var(--type-${style}-size)`,
                    fontWeight: `var(--type-${style}-weight)`,
                    lineHeight: `var(--type-${style}-line-height)`,
                    letterSpacing: `var(--type-${style}-letter-spacing)`,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            ))}
        </div>
      ))}
    </section>
  </div>
);


/* ---------------------------------------------------------- Layout & Shape */

const TokenTable = ({ tokens }: { tokens: Token[] }) => (
  <table className={styles.tokens__table}>
    <tbody>
      {tokens.map(({ name, value }) => (
        <tr key={name}>
          <td>
            <code>{name}</code>
          </td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Spacing = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Spacing</h2>
      {byPrefix('--spacing-').map(({ name, value }) => (
        <div className={styles['tokens__spacing-row']} key={name}>
          <span>{name.replace('--spacing-', '')}</span>
          <div className={styles['tokens__spacing-bar']} style={{ width: `var(${name})` }} />
          <span>{value}</span>
        </div>
      ))}
    </section>
  </div>
);

export const Radius = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Border radius</h2>
      <div className={styles['tokens__radius-grid']}>
        {byPrefix('--radius-').map(({ name, value }) => (
          <div className={styles['tokens__radius-item']} key={name}>
            <div className={styles['tokens__radius-box']} style={{ borderRadius: `var(${name})` }} />
            <span>{name.replace('--radius-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const IconSize = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Icon size</h2>
      <div className={styles['tokens__radius-grid']}>
        {byPrefix('--icon-size-').map(({ name, value }) => (
          <div className={styles['tokens__radius-item']} key={name}>
            <div
              className={styles['tokens__radius-box']}
              style={{ width: `var(${name})`, height: `var(${name})` }}
            />
            <span>{name.replace('--icon-size-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const Grid = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Grid system</h2>
      <TokenTable tokens={byPrefix('--grid-')} />
    </section>
  </div>
);

/* --------------------------------------------------------- Effects & Borders */

export const Borders = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Border width</h2>
      <div className={styles['tokens__radius-grid']}>
        {byPrefix('--border-width-').map(({ name, value }) => (
          <div className={styles['tokens__radius-item']} key={name}>
            <div
              className={[styles['tokens__radius-box'], styles['tokens__radius-box--border']].join(' ')}
              style={{ borderWidth: `var(${name})` }}
            />
            <span>{name.replace('--border-width-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

/* The export only ships shadow offsets, blur and spread (no color), so the
   demo pairs y/blur by size and tints them with the neutral overlay. */
const shadowSizes = ['s', 'm', 'l', 'xl'];

export const Shadows = () => (
  <div className={styles.tokens}>
    <section className={styles.tokens__section}>
      <h2>Shadow system</h2>
      <p className={styles.tokens__note}>
        Los tokens definen desplazamiento, blur y spread; el color de la muestra es solo ilustrativo
        (<code>--color-overlay-20</code>).
      </p>
      <div className={[styles['tokens__radius-grid'], styles['tokens__radius-grid--shadow']].join(' ')}>
        {shadowSizes.map((size) => (
          <div className={styles['tokens__radius-item']} key={size}>
            <div
              className={[styles['tokens__radius-box'], styles['tokens__radius-box--shadow']].join(' ')}
              style={{
                boxShadow: `var(--shadow-x-s) var(--shadow-y-${size}) var(--shadow-blur-${size}) var(--shadow-spread-s) var(--color-overlay-20)`,
              }}
            />
            <span>{size}</span>
            <span>
              y {rootVars.get(`--shadow-y-${size}`)?.value} / blur{' '}
              {rootVars.get(`--shadow-blur-${size}`)?.value}
            </span>
          </div>
        ))}
      </div>
      <TokenTable tokens={byPrefix('--shadow-')} />
    </section>
  </div>
);
