import styles from './cloud.module.css';
import { cloud } from '@website/assets';
import { Button } from '@website/components/shared';

/* eslint-disable-next-line */
export interface CloudProps {}

export function Cloud(props: CloudProps) {
  return (
    <section className={styles['cloud']}>
      <div className={styles['text-center']}>
        <h1>Extreme Cloud Hosting</h1>
        <p>
          Cloud hosting like you've never seen. Fast, efficient and scalable
        </p>
        <Button variant="dark">Read More</Button>
      </div>
      <img src={cloud} alt="cloud" />
    </section>
  );
}

export default Cloud;
