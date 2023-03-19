import { Form } from 'react-router-dom';
import { Button } from '@website/components/shared';
import styles from './showcase-form.module.css';

/* eslint-disable-next-line */
export interface ShowcaseFormProps {}

export function ShowcaseForm(props: ShowcaseFormProps) {
  return (
    <div className={styles['showcase-form']}>
      <h2>Request a Demo</h2>
      <Form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="company" placeholder="Company Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <Button variant="primary">Send</Button>
      </Form>
    </div>
  );
}

export default ShowcaseForm;
