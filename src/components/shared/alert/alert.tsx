import styles from './alert.module.css';

/* eslint-disable-next-line */
export interface AlertProps {
  variant: 'success' | 'error';
  message: string;
}

export function Alert({ variant, message }: AlertProps) {
  const class1 = styles['alert'];
  const class2 = styles[`alert-${variant}`];
  return (
    <div className={`${class1} ${class2}`}>
      <i className="fas fa-info"></i>
      {message}
    </div>
  );
}

export default Alert;
