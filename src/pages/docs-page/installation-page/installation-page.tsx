import styles from './installation-page.module.css';

/* eslint-disable-next-line */
export interface InstallationPageProps {}

export function InstallationPage(props: InstallationPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to InstallationPage!</h1>
    </div>
  );
}

export default InstallationPage;
