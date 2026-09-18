import './tokens.css';

const colorGroups: Record<string, string[]> = {
  Brand: [
    '--color-bg-brand-default',
    '--color-bg-brand-hover',
    '--color-bg-brand-pressed',
    '--color-bg-brand-comp-amarillo-2',
    '--color-bg-brand-comp-azul-2',
    '--color-bg-brand-comp-verde-2',
  ],
  Feedback: [
    '--color-bg-feedback-bold-success',
    '--color-bg-feedback-bold-alert',
    '--color-bg-feedback-bold-informative',
    '--color-bg-feedback-bold-error',
  ],
  Neutral: [
    '--color-bg-neutral-primary',
    '--color-bg-neutral-secondary',
    '--color-bg-neutral-gris-1',
    '--color-bg-neutral-disabled',
    '--color-bg-neutral-inverse',
  ],
};

const typeStyles: { name: string; sizeVar: string; weightVar: string; lineHeightVar: string }[] = [
  { name: 'H1', sizeVar: '--type-h1-size', weightVar: '--type-h1-weight', lineHeightVar: '--type-h1-line-height' },
  { name: 'H2', sizeVar: '--type-h2-size', weightVar: '--type-h2-weight', lineHeightVar: '--type-h2-line-height' },
  { name: 'H3', sizeVar: '--type-h3-size', weightVar: '--type-h3-weight', lineHeightVar: '--type-h3-line-height' },
  {
    name: 'Subtitle1',
    sizeVar: '--type-subtitle1-size',
    weightVar: '--type-subtitle1-weight',
    lineHeightVar: '--type-subtitle1-line-height',
  },
  {
    name: 'Body1 Regular',
    sizeVar: '--type-body1-regular-size',
    weightVar: '--type-body1-regular-weight',
    lineHeightVar: '--type-body1-regular-line-height',
  },
  {
    name: 'Body2 Regular',
    sizeVar: '--type-body2-regular-size',
    weightVar: '--type-body2-regular-weight',
    lineHeightVar: '--type-body2-regular-line-height',
  },
  {
    name: 'Caption1 Bold',
    sizeVar: '--type-caption1-bold-size',
    weightVar: '--type-caption1-bold-weight',
    lineHeightVar: '--type-caption1-bold-line-height',
  },
];

const spacingTokens = [
  'xs',
  '2xs',
  's',
  '2s',
  '3s',
  'm',
  'l',
  '2l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];

const radiusTokens = ['xs', '2xs', 's', 'm', 'l', 'xl', 'full'];

const Swatch = ({ varName }: { varName: string }) => (
  <div className="tokens-swatch">
    <div className="tokens-swatch-color" style={{ background: `var(${varName})` }} />
    <div className="tokens-swatch-label">
      {varName.replace('--color-bg-', '')}
      <code>{varName}</code>
    </div>
  </div>
);

export const Tokens = () => (
  <div className="tokens-page">
    <section className="tokens-section">
      <h2>Color</h2>
      {Object.entries(colorGroups).map(([group, vars]) => (
        <div key={group}>
          <h3>{group}</h3>
          <div className="tokens-swatch-grid">
            {vars.map((varName) => (
              <Swatch key={varName} varName={varName} />
            ))}
          </div>
        </div>
      ))}
    </section>

    <section className="tokens-section">
      <h2>Typography</h2>
      {typeStyles.map(({ name, sizeVar, weightVar, lineHeightVar }) => (
        <div className="tokens-type-row" key={name}>
          <span>{name}</span>
          <span
            style={{
              fontSize: `var(${sizeVar})`,
              fontWeight: `var(${weightVar})`,
              lineHeight: `var(${lineHeightVar})`,
            }}
          >
            The quick brown fox jumps over the lazy dog
          </span>
        </div>
      ))}
    </section>

    <section className="tokens-section">
      <h2>Spacing</h2>
      {spacingTokens.map((token) => (
        <div className="tokens-spacing-row" key={token}>
          <span>{token}</span>
          <div className="tokens-spacing-bar" style={{ width: `var(--spacing-${token})` }} />
        </div>
      ))}
    </section>

    <section className="tokens-section">
      <h2>Radius</h2>
      <div className="tokens-radius-grid">
        {radiusTokens.map((token) => (
          <div className="tokens-radius-item" key={token}>
            <div
              className="tokens-radius-box"
              style={{ borderRadius: `var(--radius-${token})` }}
            />
            <span>{token}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);
