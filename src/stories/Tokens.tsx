import type { CSSProperties } from 'react';

import css from '../index.css?raw';
import './tokens.css';

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

const darkOverrides = readVars(/:root\[data-theme='dark'\]\s*\{([^}]*)\}/.exec(css)?.[1] ?? '');

const byPrefix = (prefix: string) => allTokens.filter(({ name }) => name.startsWith(prefix));

const titleCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/* ------------------------------------------------------------------ Color */

const Swatch = ({ token, label }: { token: Token; label?: string }) => (
  <div className="tokens-swatch">
    <div className="tokens-swatch-color tokens-checker">
      <div className="tokens-swatch-fill" style={{ background: `var(${token.name})` }} />
    </div>
    <div className="tokens-swatch-label">
      {label ?? token.name}
      <code>{token.name}</code>
      <code>{token.value}</code>
    </div>
  </div>
);

const SwatchGroup = ({ title, tokens }: { title: string; tokens: Token[] }) => (
  <div>
    <h3>{title}</h3>
    <div className="tokens-swatch-grid">
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
  <div className="tokens-page">
    <section className="tokens-section">
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

const SemanticColors = ({ dark = false }: { dark?: boolean }) => {
  const overrides = Object.fromEntries(darkOverrides.map(({ name, value }) => [name, value]));
  return (
    <div className="tokens-page" style={dark ? (overrides as CSSProperties) : undefined}>
      <section className="tokens-section">
        <h2>Semantic color ({dark ? 'Dark' : 'Light'})</h2>
        {dark && (
          <p className="tokens-note">
            Only the neutral surface/text pair flips: {darkOverrides.map(({ name }) => name).join(', ')}.
          </p>
        )}
        <SwatchGroup title="Overlay" tokens={byPrefix('--color-overlay-')} />
        {semanticColorSections.map(([title, prefix]) =>
          groupBySegment(byPrefix(prefix), prefix).map(([segment, tokens]) => (
            <SwatchGroup key={prefix + segment} title={`${title} / ${titleCase(segment)}`} tokens={tokens} />
          )),
        )}
      </section>
    </div>
  );
};

export const SemanticColorsLight = () => <SemanticColors />;
export const SemanticColorsDark = () => <SemanticColors dark />;

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

export const Typography = () => (
  <div className="tokens-page">
    <section className="tokens-section">
      <h2>Font family &amp; weight</h2>
      <div className="tokens-swatch-grid">
        {byPrefix('--font-family-').map(({ name, value }) => (
          <div className="tokens-swatch" key={name}>
            <div className="tokens-font-sample" style={{ fontFamily: `var(${name})` }}>
              Aa
            </div>
            <div className="tokens-swatch-label">
              {value}
              <code>{name}</code>
            </div>
          </div>
        ))}
        {byPrefix('--font-weight-').map(({ name, value }) => (
          <div className="tokens-swatch" key={name}>
            <div className="tokens-font-sample" style={{ fontWeight: `var(${name})` }}>
              Aa
            </div>
            <div className="tokens-swatch-label">
              {name.replace('--font-weight-', '')}
              <code>{name}</code>
              <code>{value}</code>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="tokens-section">
      <h2>Semantic typography (Desktop / Small Device)</h2>
      {typeGroups.map(([title, pattern]) => (
        <div key={title}>
          <h3>{title}</h3>
          {typeStyles
            .filter((style) => pattern.test(style))
            .map((style) => (
              <div className="tokens-type-row" key={style}>
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

/* ------------------------------------------------------------------ Units */

const TokenTable = ({ tokens }: { tokens: Token[] }) => (
  <table className="tokens-table">
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

export const Units = () => (
  <div className="tokens-page">
    <section className="tokens-section">
      <h2>Spacing</h2>
      {byPrefix('--spacing-').map(({ name, value }) => (
        <div className="tokens-spacing-row" key={name}>
          <span>{name.replace('--spacing-', '')}</span>
          <div className="tokens-spacing-bar" style={{ width: `var(${name})` }} />
          <span>{value}</span>
        </div>
      ))}
    </section>

    <section className="tokens-section">
      <h2>Icon size</h2>
      <div className="tokens-radius-grid">
        {byPrefix('--icon-size-').map(({ name, value }) => (
          <div className="tokens-radius-item" key={name}>
            <div
              className="tokens-radius-box"
              style={{ width: `var(${name})`, height: `var(${name})` }}
            />
            <span>{name.replace('--icon-size-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="tokens-section">
      <h2>Border width</h2>
      <div className="tokens-radius-grid">
        {byPrefix('--border-width-').map(({ name, value }) => (
          <div className="tokens-radius-item" key={name}>
            <div
              className="tokens-radius-box tokens-border-box"
              style={{ borderWidth: `var(${name})` }}
            />
            <span>{name.replace('--border-width-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="tokens-section">
      <h2>Radius</h2>
      <div className="tokens-radius-grid">
        {byPrefix('--radius-').map(({ name, value }) => (
          <div className="tokens-radius-item" key={name}>
            <div className="tokens-radius-box" style={{ borderRadius: `var(${name})` }} />
            <span>{name.replace('--radius-', '')}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="tokens-section">
      <h2>Grid system</h2>
      <TokenTable tokens={byPrefix('--grid-')} />
    </section>

    <section className="tokens-section">
      <h2>Shadow system</h2>
      <TokenTable tokens={byPrefix('--shadow-')} />
    </section>
  </div>
);

/* --------------------------------------------------------------- Overview */

export const Tokens = () => (
  <>
    <PrimitiveColors />
    <SemanticColorsLight />
    <Typography />
    <Units />
  </>
);
