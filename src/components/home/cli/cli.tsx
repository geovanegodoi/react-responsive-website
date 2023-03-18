import styles from './cli.module.css';

/* eslint-disable-next-line */
export interface CliProps {}

export function Cli(props: CliProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cli!</h1>
    </div>
  );
}

export default Cli;
