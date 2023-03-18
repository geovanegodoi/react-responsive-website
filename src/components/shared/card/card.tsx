import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  animateHover?: boolean;
  text?: string;
  image?: string;
  display?: 'row' | 'column';
  orientation?: 'image-text' | 'text-image';
}

export function Card({
  text,
  image,
  display = 'row',
  orientation = 'image-text',
}: CardProps) {
  const reverse = orientation === 'text-image' ? '-reverse' : '';
  const classCard = styles['card'];
  const classDisplay = styles[`display-${display}${reverse}`];
  return (
    <div className={`${classCard} ${classDisplay}`}>
      {image && <img src={image} alt="card" />}
      {text && <h4>{text}</h4>}
    </div>
  );
}

export default Card;
