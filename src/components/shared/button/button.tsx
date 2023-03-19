import { OneOrMany } from 'src/models';
import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: string | OneOrMany<JSX.Element>;
  variant: 'primary' | 'secondary' | 'light' | 'dark' | 'outline';
}

export function Button({ children, variant }: ButtonProps) {
  const classBtn = styles['btn'];
  const classVariant = styles[`btn-${variant}`];
  return (
    <button className={`${classBtn} ${classVariant}`}>
      {children || 'Button'}
    </button>
  );
}

export default Button;
