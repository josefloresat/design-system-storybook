import './toast.css';

export type ToastState = 'information' | 'success' | 'warning' | 'error';

export interface ToastProps {
  /** Visual variant of the toast */
  state?: ToastState;
  /** Message shown to the user */
  label?: string;
  /** Show the leading status icon */
  showIcon?: boolean;
  /** Show the trailing close button */
  showClose?: boolean;
  /** Optional close handler */
  onClose?: () => void;
}

const StatusIcon = ({ state }: { state: ToastState }) => {
  switch (state) {
    case 'information':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.755 7H9.746C9.332 7 8.996 6.664 8.996 6.25C8.996 5.836 9.332 5.5 9.746 5.5C10.16 5.5 10.501 5.836 10.501 6.25C10.501 6.664 10.169 7 9.755 7ZM10.5 13.645C10.5 14.059 10.164 14.395 9.75 14.395C9.336 14.395 9 14.059 9 13.645V9.75003C9 9.33603 9.336 9.00003 9.75 9.00003C10.164 9.00003 10.5 9.33603 10.5 9.75003V13.645ZM9.75 0C2.552 0 0 2.552 0 9.75003C0 16.948 2.552 19.5 9.75 19.5C16.948 19.5 19.5 16.948 19.5 9.75003C19.5 2.552 16.948 0 9.75 0Z"
            fill="#0088FF"
          />
        </svg>
      );
    case 'success':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.841 7.90703L9.091 12.653C8.95 12.794 8.76 12.873 8.561 12.873C8.362 12.873 8.171 12.794 8.03 12.653L5.659 10.28C5.366 9.98703 5.366 9.51203 5.659 9.21903C5.953 8.92603 6.428 8.92803 6.72 9.21903L8.561 11.062L12.78 6.846C13.073 6.553 13.548 6.554 13.841 6.846C14.134 7.139 14.134 7.61403 13.841 7.90703ZM9.75 0C2.552 0 0 2.552 0 9.75003C0 16.948 2.552 19.5 9.75 19.5C16.948 19.5 19.5 16.948 19.5 9.75003C19.5 2.552 16.948 0 9.75 0Z"
            fill="#000000"
          />
        </svg>
      );
    case 'warning':
      return (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2624 9.88496C10.2624 10.299 9.92639 10.635 9.51239 10.635C9.09839 10.635 8.76239 10.299 8.76239 9.88496V6.87296C8.76239 6.459 9.09839 6.123 9.51239 6.123C9.92639 6.123 10.2624 6.459 10.2624 6.87296V9.88496ZM9.5104 13.656C9.0964 13.656 8.7604 13.344 8.7604 12.93V12.881C8.7604 12.467 9.0964 12.131 9.5104 12.131C9.9244 12.131 10.2604 12.467 10.2604 12.881C10.2604 13.295 9.9244 13.656 9.5104 13.656ZM18.6714 13.475L11.7114 1.259C11.2624 0.473 10.4544 0.002 9.54939 0H9.54439C8.64339 0 7.83639 0.467 7.38637 1.248L0.338375 13.463C-0.112625 14.243 -0.112625 15.176 0.337375 15.956C0.787375 16.737 1.59537 17.202 2.49637 17.202H16.5044C17.4034 17.202 18.2084 16.739 18.6604 15.961C19.1124 15.185 19.1164 14.255 18.6714 13.475Z"
            fill="#000000"
          />
        </svg>
      );
    case 'error':
      return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.364 12.358C12.218 12.504 12.026 12.578 11.834 12.578C11.642 12.578 11.45 12.504 11.303 12.358L9.497 10.551L7.696 12.353C7.403 12.646 6.928 12.646 6.635 12.353C6.343 12.06 6.343 11.586 6.635 11.293L8.436 9.491L6.634 7.688C6.341 7.395 6.341 6.921 6.634 6.628C6.927 6.335 7.401 6.335 7.694 6.628L9.497 8.43L11.298 6.629C11.591 6.337 12.065 6.337 12.358 6.629C12.651 6.922 12.651 7.397 12.358 7.69L10.558 9.491L12.364 11.297C12.657 11.59 12.657 12.065 12.364 12.358ZM13.717 0H5.282C2.122 0 0 2.22 0 5.526V13.474C0 16.779 2.122 19 5.282 19H13.716C16.876 19 19 16.779 19 13.474V5.526C19 2.22 16.877 0 13.717 0Z"
            fill="#000000"
          />
        </svg>
      );
  }
};

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M0.75 0.75L10.75 10.75M10.75 0.75L0.75 10.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Feedback message used to notify the user about something happening in the app */
export const Toast = ({
  state = 'information',
  label = 'Used to notify the user about something happening in the app',
  showIcon = true,
  showClose = true,
  onClose,
}: ToastProps) => (
  <div
    className={`storybook-toast storybook-toast--${state}`}
    role={state === 'error' ? 'alert' : 'status'}
  >
    {showIcon && (
      <span className="storybook-toast__icon">
        <StatusIcon state={state} />
      </span>
    )}
    <p className="storybook-toast__label">{label}</p>
    {showClose && (
      <button type="button" className="storybook-toast__close" aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </button>
    )}
  </div>
);
