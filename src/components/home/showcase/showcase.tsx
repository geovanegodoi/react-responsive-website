import styles from './showcase.module.css';

/* eslint-disable-next-line */
export interface ShowcaseProps {}

export function Showcase(props: ShowcaseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Showcase!</h1>
    </div>
  );
}

export default Showcase;
