import styles from './cloud.module.css';

/* eslint-disable-next-line */
export interface CloudProps {}

export function Cloud(props: CloudProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cloud!</h1>
    </div>
  );
}

export default Cloud;
