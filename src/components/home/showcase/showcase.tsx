import { Button } from '../../../components/shared';
import ShowcaseForm from '../showcase-form/showcase-form';
import styles from './showcase.module.css';

/* eslint-disable-next-line */
export interface ShowcaseProps {}

export function Showcase(props: ShowcaseProps) {
  return (
    <section className={styles['showcase']}>
      <div className={styles['showcase-text']}>
        <h1>Easier Deployment</h1>
        <p>
          Deploy web apps of all kinds, from large scale enterprise APIs to
          static websites for individuals. Fill out the form to try a demo of
          our platform
        </p>
        <Button variant="outline">Read More</Button>
      </div>
      <ShowcaseForm />
    </section>
  );
}

export default Showcase;
