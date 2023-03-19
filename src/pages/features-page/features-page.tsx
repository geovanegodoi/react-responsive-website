import { FeaturesList, Head, SubHead } from '../../components/features';
import styles from './features-page.module.css';

/* eslint-disable-next-line */
export interface FeaturesPageProps {}

export function FeaturesPage(props: FeaturesPageProps) {
  return (
    <div className={styles['features-page']}>
      <Head />
      <SubHead />
      <FeaturesList />
    </div>
  );
}

export default FeaturesPage;
