import { Outlet } from 'react-router';
import { Footer, Navbar } from '@website/components/shared';
import styles from './layout-page.module.css';

/* eslint-disable-next-line */
export interface LayoutPageProps {}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LayoutPage;
