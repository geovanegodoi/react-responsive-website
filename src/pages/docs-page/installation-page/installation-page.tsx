import styles from './installation-page.module.css';
import Container from '../../../components/docs/container/container';
import * as Stories from '../../../components/docs/container/container.stories';

/* eslint-disable-next-line */
export interface InstallationPageProps {}

export function InstallationPage(props: InstallationPageProps) {
  return (
    <div className={styles['installation-page']}>
      <Container {...Stories.Installation.args} />
    </div>
  );
}

export default InstallationPage;
