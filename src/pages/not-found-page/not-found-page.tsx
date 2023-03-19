import { Link } from 'react-router-dom';
import { Button } from '../../components/shared';
import styles from './not-found-page.module.css';
import ImgRobot from '../../assets/robot.png';

/* eslint-disable-next-line */
export interface NotFoundPageProps {}

export function NotFoundPage(props: NotFoundPageProps) {
  return (
    <div className={styles['not-found-page']}>
      <img src={ImgRobot} alt="robot" />
      <div className={styles['not-found-text']}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>
          We're sorry, the page you request could not be found. <br />
          Please go back to the homepage.
        </p>
        <Link to="/">
          <Button variant="primary">Go back</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
