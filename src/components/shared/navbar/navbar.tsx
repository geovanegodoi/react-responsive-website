import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className={styles['navbar']}>
      <h1>GGodoi</h1>
      <div className="flex-grow"></div>
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/docs">Docs</Link>
    </nav>
  );
}

export default Navbar;
