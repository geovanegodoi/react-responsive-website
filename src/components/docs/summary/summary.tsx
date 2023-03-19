import SummarySection from '../summary-section/summary-section';
import styles from './summary.module.css';
import * as Stories from '../summary-section/summary-section.stories';

/* eslint-disable-next-line */
export interface SummaryProps {}

export function Summary(props: SummaryProps) {
  return (
    <menu className={styles['summary']}>
      <SummarySection {...Stories.Essentials.args} />
      <SummarySection {...Stories.Deployment.args} />
    </menu>
  );
}

export default Summary;
