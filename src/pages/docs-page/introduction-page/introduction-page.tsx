import styles from './introduction-page.module.css';
import Container from '../../../components/docs/container/container';
import * as Stories from '../../../components/docs/container/container.stories';

/* eslint-disable-next-line */
export interface IntroductionPageProps {}

export function IntroductionPage(props: IntroductionPageProps) {
  return (
    <div className={styles['introduction-page']}>
      <Container {...Stories.Introduction.args} />
    </div>
  );
}

export default IntroductionPage;
