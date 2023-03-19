import styles from './features-page.module.css';
import { Head, HeadStories } from '@website/components/shared';
import { FeaturesList, SubHead } from '@website/components/features';

/* eslint-disable-next-line */
export interface FeaturesPageProps {}

export function FeaturesPage(props: FeaturesPageProps) {
  return (
    <div className={styles['features-page']}>
      <Head {...HeadStories.Features.args} />
      <SubHead />
      <FeaturesList />
    </div>
  );
}

export default FeaturesPage;
