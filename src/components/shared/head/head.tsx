import styles from './head.module.css';
import ServerImg from '../../../assets/server.png';

/* eslint-disable-next-line */
export interface HeadProps {
  title: string;
  subTitle: string;
  image: string;
}

export function Head({ title, subTitle, image }: HeadProps) {
  return (
    <section className={styles['head']}>
      <div className={styles['text-container']}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <img src={image} alt="head" />
    </section>
  );
}

export default Head;
