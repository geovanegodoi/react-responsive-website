import styles from './stats.module.css';

/* eslint-disable-next-line */
export interface StatsProps {}

const statItems: { icon: string; value: string; subtitle: string }[] = [
  {
    icon: 'fas fa-server fa-3x',
    value: '10,349,405',
    subtitle: 'Deployments',
  },
  {
    icon: 'fas fa-upload fa-3x',
    value: '987 TB',
    subtitle: 'Published',
  },
  {
    icon: 'fas fa-project-diagram fa-3x',
    value: '2,343,265',
    subtitle: 'Projects',
  },
];

export function Stats(props: StatsProps) {
  return (
    <section className={styles['stats']}>
      <h3>
        Welcome to the best platform for building applications of all types with
        modern architecture and scaling
      </h3>
      <div className={styles['stats-container']}>
        {statItems.map((item, index) => {
          return (
            <div key={index} className={styles['stat-item']}>
              <i className={item.icon}></i>
              <h3>{item.value}</h3>
              <p>{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
