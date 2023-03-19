import styles from './layout-docs-page.module.css';
import { Outlet } from 'react-router';
import { Head, HeadStories } from '@website/components/shared';
import { Summary } from '@website/components/docs';

/* eslint-disable-next-line */
export interface LayoutDocsPageProps {}

export function LayoutDocsPage(props: LayoutDocsPageProps) {
  return (
    <div className={styles['docs-page']}>
      <Head {...HeadStories.Docs.args} />
      <div className={styles['docs-page-grid']}>
        <Summary />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutDocsPage;
