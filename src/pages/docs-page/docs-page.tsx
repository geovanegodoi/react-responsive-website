import styles from './docs-page.module.css';

/* eslint-disable-next-line */
export interface DocsPageProps {}

export function DocsPage(props: DocsPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Docs!</h1>
    </div>
  );
}

export default DocsPage;
