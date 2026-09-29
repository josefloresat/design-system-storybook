import type { CSSProperties, HTMLAttributes } from 'react';

import styles from './toast.module.css';

export type ToastVariant = 'default' | 'club';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: ToastVariant;
  title: string;
  description?: string;
  crestSrc?: string;
  crestAlt?: string;
  progress?: number;
  onClose?: () => void;
}

const labels = {
  close: 'Cerrar notificación',
};

export const Toast = ({
  variant = 'default',
  title,
  description,
  crestSrc,
  crestAlt = '',
  progress,
  onClose,
  className,
  style,
  ...rest
}: ToastProps) => (
  <div
    role="status"
    className={[styles.toast, styles[`toast--${variant}`], className].filter(Boolean).join(' ')}
    style={
      progress === undefined
        ? style
        : ({ ...style, '--toast-progress': `${Math.min(Math.max(progress, 0), 100)}%` } as CSSProperties)
    }
    {...rest}
  >
    <div className={styles.toast__content}>
      <span className={styles.toast__media}>
        {variant === 'club' && crestSrc ? (
          <img className={styles.toast__crest} src={crestSrc} alt={crestAlt} />
        ) : (
          <span
            className={[styles.toast__icon, styles['toast__icon--info']].join(' ')}
            aria-hidden="true"
          />
        )}
      </span>
      <div className={styles.toast__text}>
        <p className={styles.toast__title}>{title}</p>
        {description && <p className={styles.toast__description}>{description}</p>}
      </div>
    </div>
    {progress !== undefined && <span className={styles.toast__progress} aria-hidden="true" />}
    <button
      type="button"
      className={styles.toast__close}
      aria-label={labels.close}
      onClick={onClose}
    >
      <span
        className={[styles.toast__icon, styles['toast__icon--close']].join(' ')}
        aria-hidden="true"
      />
    </button>
  </div>
);
