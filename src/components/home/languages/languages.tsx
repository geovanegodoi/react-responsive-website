import styles from './languages.module.css';
import {
  node,
  python,
  csharp,
  ruby,
  php,
  scala,
  clojure,
} from '@website/assets';
import { Card } from '@website/components/shared';

/* eslint-disable-next-line */
export interface LanguagesProps {}

export function Languages(props: LanguagesProps) {
  return (
    <section className={styles['languages']}>
      <h2>Supported Languages</h2>
      <div className={styles['languages-container']}>
        {supportedLanguages.map((language, index) => (
          <Card
            key={index}
            text={language.name}
            image={language.image}
            variant="image"
            display="column"
          />
        ))}
      </div>
    </section>
  );
}

export default Languages;

const supportedLanguages: { name: string; image: string }[] = [
  { name: 'Node', image: node },
  { name: 'Python', image: python },
  { name: 'C#', image: csharp },
  { name: 'Ruby', image: ruby },
  { name: 'PHP', image: php },
  { name: 'Scala', image: scala },
  { name: 'Clojure', image: clojure },
];
