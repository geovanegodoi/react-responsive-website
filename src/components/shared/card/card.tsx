import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  text?: string;
  image?: string;
  variant?: 'image' | 'icon';
  display?: 'row' | 'column';
  orientation?: 'default' | 'reverse';
}

export function Card({
  text,
  image,
  variant,
  display = 'row',
  orientation = 'default',
}: CardProps) {
  const reverse = orientation === 'reverse' ? '-reverse' : '';
  const classCard = styles['card'];
  const classDisplay = styles[`display-${display}${reverse}`];
  return (
    <div className={`${classCard} ${classDisplay}`}>
      {variant === 'icon' && image && <i className={image}></i>}
      {variant === 'image' && image && <img src={image} alt="card" />}
      {text && <h4>{text}</h4>}
    </div>
  );
}

export default Card;
