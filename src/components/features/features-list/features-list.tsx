import styles from './features-list.module.css';

/* eslint-disable-next-line */
export interface FeaturesListProps {}

export function FeaturesList(props: FeaturesListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeaturesList!</h1>
    </div>
  );
}

export default FeaturesList;
