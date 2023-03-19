import styles from './layout-docs-page.module.css';
import { Head } from '../../../components/shared';
import { Outlet } from 'react-router';
import { Summary } from 'src/components/docs';
import * as Stories from '../../../components/shared/head/head.stories';

/* eslint-disable-next-line */
export interface LayoutDocsPageProps {}

export function LayoutDocsPage(props: LayoutDocsPageProps) {
  return (
    <div className={styles['docs-page']}>
      <Head {...Stories.Docs.args} />
      <div className={styles['docs-page-grid']}>
        <Summary />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutDocsPage;
