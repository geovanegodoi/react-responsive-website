import styles from './introduction-page.module.css';

/* eslint-disable-next-line */
export interface IntroductionPageProps {}

export function IntroductionPage(props: IntroductionPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IntroductionPage!</h1>
    </div>
  );
}

export default IntroductionPage;
