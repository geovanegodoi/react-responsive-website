import styles from './head.module.css';
import ServerImg from '../../../assets/server.png';

/* eslint-disable-next-line */
export interface HeadProps {}

export function Head(props: HeadProps) {
  return (
    <section className={styles['head']}>
      <div className={styles['text-container']}>
        <h1>Features</h1>
        <p>
          Check out the features of Loruki that separate us from the competition
        </p>
      </div>
      <img src={ServerImg} alt="server" />
    </section>
  );
}

export default Head;
