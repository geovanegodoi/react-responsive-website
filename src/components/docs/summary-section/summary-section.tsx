import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './summary-section.module.css';

/* eslint-disable-next-line */
export interface SummarySectionProps {
  title: string;
  options: NavLinkProps[];
}

export function SummarySection({ title, options }: SummarySectionProps) {
  return (
    <div className={styles['summary-section']}>
      <h3>{title}</h3>
      <nav>
        {options.map((item, index) => (
          <NavLink key={index} {...item} />
        ))}
      </nav>
    </div>
  );
}

export default SummarySection;
