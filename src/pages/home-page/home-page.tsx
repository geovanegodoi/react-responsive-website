import styles from './home-page.module.css';
import { Cli, Cloud, Languages, Showcase, Stats } from '../../components/home';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['home-page']}>
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
    </div>
  );
}

export default HomePage;
