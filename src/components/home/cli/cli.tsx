import styles from './cli.module.css';
import cli from '/assets/cli.png';
import { Card } from '@website/components/shared';

/* eslint-disable-next-line */
export interface CliProps {}

export function Cli(props: CliProps) {
  return (
    <section className={styles['cli']}>
      <div className={styles['cli-grid']}>
        <img src={cli} alt="cli" />
        <Card text="Easy to use, cross platform CLI" />
        <Card text="Deploy in seconds" />
      </div>
    </section>
  );
}

export default Cli;
