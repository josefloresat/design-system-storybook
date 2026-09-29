import type { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}

export const Button = ({
  size = 'md',
  variant = 'primary',
  label = 'Button',
  iconLeft = true,
  iconRight = true,
  className,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={[
      styles.button,
      styles[`button--${variant}`],
      styles[`button--${size}`],
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...rest}
  >
    {iconLeft && (
      <span
        className={[styles.button__icon, styles['button__icon--left']].join(' ')}
        aria-hidden="true"
      />
    )}
    <span className={styles.button__label}>{label}</span>
    {iconRight && (
      <span
        className={[styles.button__icon, styles['button__icon--right']].join(' ')}
        aria-hidden="true"
      />
    )}
  </button>
);
