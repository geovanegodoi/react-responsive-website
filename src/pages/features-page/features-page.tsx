import styles from './features-page.module.css';

/* eslint-disable-next-line */
export interface FeaturesPageProps {}

export function FeaturesPage(props: FeaturesPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Features!</h1>
    </div>
  );
}

export default FeaturesPage;
