import styles from './languages.module.css';
import Node from '../../../assets/node.png';
import Python from '../../../assets/python.png';
import CSharp from '../../../assets/csharp.png';
import Ruby from '../../../assets/ruby.png';
import Php from '../../../assets/php.png';
import Scala from '../../../assets/scala.png';
import Clojure from '../../../assets/clojure.png';
import { Card } from 'src/components/shared';

/* eslint-disable-next-line */
export interface LanguagesProps {}

const supportedLanguages: { name: string; image: string }[] = [
  { name: 'Node', image: Node },
  { name: 'Python', image: Python },
  { name: 'C#', image: CSharp },
  { name: 'Ruby', image: Ruby },
  { name: 'PHP', image: Php },
  { name: 'Scala', image: Scala },
  { name: 'Clojure', image: Clojure },
];

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
