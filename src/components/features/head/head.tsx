import styles from './head.module.css';

/* eslint-disable-next-line */
export interface HeadProps {}

export function Head(props: HeadProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Head!</h1>
    </div>
  );
}

export default Head;
