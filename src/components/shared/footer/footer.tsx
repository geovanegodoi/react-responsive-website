import { Link } from 'react-router-dom';
import SocialMedia from '../social-media/social-media';
import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className={styles['footer']}>
      <div className={styles['copyright']}>
        <h1>GGodoi</h1>
        <p>Copyright © 2023</p>
      </div>
      <div className={styles['menu']}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/docs">Docs</Link>
      </div>
      <div className={styles['social-medias']}>
        <SocialMedia variant="github" color="light" />
        <SocialMedia variant="facebook" color="light" />
        <SocialMedia variant="instagram" color="light" />
        <SocialMedia variant="twitter" color="light" />
      </div>
    </footer>
  );
}

export default Footer;
