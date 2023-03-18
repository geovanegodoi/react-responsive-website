import styles from './layout-page.module.css';

/* eslint-disable-next-line */
export interface LayoutPageProps {}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutPage!</h1>
    </div>
  );
}

export default LayoutPage;
