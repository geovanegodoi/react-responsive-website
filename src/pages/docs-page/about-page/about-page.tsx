import styles from './about-page.module.css';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AboutPage!</h1>
    </div>
  );
}

export default AboutPage;
