import styles from './sub-head.module.css';

/* eslint-disable-next-line */
export interface SubHeadProps {}

export function SubHead(props: SubHeadProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SubHead!</h1>
    </div>
  );
}

export default SubHead;
