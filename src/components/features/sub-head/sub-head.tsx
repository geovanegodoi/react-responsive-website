import styles from './sub-head.module.css';
import { server2 } from '@website/assets';

/* eslint-disable-next-line */
export interface SubHeadProps {}

export function SubHead(props: SubHeadProps) {
  return (
    <section className={styles['sub-head']}>
      <div className={styles['text-container']}>
        <h1>The Platform</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
          consectetur ea consequatur, doloribus repellendus quasi, aut corporis
          nam alias culpa. Nostrum, inventore accusantium!
        </p>
      </div>
      <img src={server2} alt="server" />
    </section>
  );
}

export default SubHead;
