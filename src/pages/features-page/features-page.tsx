import styles from './features-page.module.css';
import { Head } from 'src/components/shared';
import { FeaturesList, SubHead } from '../../components/features';
import * as Stories from '../../components/shared/head/head.stories';
/* eslint-disable-next-line */
export interface FeaturesPageProps {}

export function FeaturesPage(props: FeaturesPageProps) {
  return (
    <div className={styles['features-page']}>
      <Head {...Stories.Features.args} />
      <SubHead />
      <FeaturesList />
    </div>
  );
}

export default FeaturesPage;
