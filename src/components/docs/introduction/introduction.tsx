import styles from './introduction.module.css';

/* eslint-disable-next-line */
export interface IntroductionProps {}

export function Introduction(props: IntroductionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Introduction!</h1>
    </div>
  );
}

export default Introduction;
