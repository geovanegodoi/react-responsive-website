import styles from './about-page.module.css';
import Container from '../../../components/docs/container/container';
import * as Stories from '../../../components/docs/container/container.stories';

/* eslint-disable-next-line */
export interface AboutPageProps {}

export function AboutPage(props: AboutPageProps) {
  return (
    <section className={styles['about-page']}>
      <Container {...Stories.About.args} />
    </section>
  );
}

export default AboutPage;
