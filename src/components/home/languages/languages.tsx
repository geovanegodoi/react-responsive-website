import styles from './languages.module.css';

/* eslint-disable-next-line */
export interface LanguagesProps {}

export function Languages(props: LanguagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Languages!</h1>
    </div>
  );
}

export default Languages;
