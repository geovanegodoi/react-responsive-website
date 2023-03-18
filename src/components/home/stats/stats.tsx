import styles from './stats.module.css';

/* eslint-disable-next-line */
export interface StatsProps {}

export function Stats(props: StatsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stats!</h1>
    </div>
  );
}

export default Stats;
