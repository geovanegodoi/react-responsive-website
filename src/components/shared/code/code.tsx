import styles from './code.module.css';

/* eslint-disable-next-line */
export interface CodeProps {
  children: string;
}

export function Code({ children }: CodeProps) {
  return (
    <pre className={styles['code-container']}>
      <code>{children || 'code undefined'}</code>
    </pre>
  );
}

export default Code;
