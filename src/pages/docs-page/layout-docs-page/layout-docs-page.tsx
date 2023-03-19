import styles from './layout-docs-page.module.css';

/* eslint-disable-next-line */
export interface LayoutDocsPageProps {}

export function LayoutDocsPage(props: LayoutDocsPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Docs!</h1>
    </div>
  );
}

export default LayoutDocsPage;
