import styles from './cli.module.css';
import CliPng from '../../../assets/cli.png';
import { Card } from '../../../components/shared';

/* eslint-disable-next-line */
export interface CliProps {}

export function Cli(props: CliProps) {
  return (
    <section className={styles['cli']}>
      <div className={styles['cli-grid']}>
        <img src={CliPng} alt="cli" />
        <Card text="Easy to use, cross platform CLI" />
        <Card text="Deploy in seconds" />
      </div>
    </section>
  );
}

export default Cli;
