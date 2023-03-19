import { Card } from '../../../components/shared';
import styles from './features-list.module.css';

/* eslint-disable-next-line */
export interface FeaturesListProps {}

const features: { icon: string; text: string }[] = [
  {
    icon: 'fas fa-server fa-3x',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!',
  },
  {
    icon: 'fas fa-network-wired fa-3x',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a itaque debitis qui vel dignissimos ipsum!',
  },
  {
    icon: 'fas fa-laptop-code fa-3x',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.',
  },
  {
    icon: 'fas fa-database fa-3x',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!',
  },
  {
    icon: 'fas fa-power-off fa-3x',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.',
  },
  {
    icon: 'fas fa-upload fa-3x',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.',
  },
];

export function FeaturesList(props: FeaturesListProps) {
  return (
    <section className={styles['features-list']}>
      {features.map((feature, index) => (
        <Card text={feature.text} image={feature.icon} variant="icon" />
      ))}
    </section>
  );
}

export default FeaturesList;
