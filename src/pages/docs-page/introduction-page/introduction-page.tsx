import { Container as Doc } from '@website/components/docs';
import { Alert } from '@website/components/shared';

/* eslint-disable-next-line */
export interface IntroductionPageProps {}

export function IntroductionPage(props: IntroductionPageProps) {
  return (
    <Doc>
      <h2>
        <strong>Introduction</strong>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo
        facere perferendis laborum? Similique recusandae incidunt eos dolorum
        aliquam ipsam unde perspiciatis laudantium totam quam laborum velit, at
        maxime minus?
      </p>
      <Alert
        variant="error"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, animi?"
      />
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima totam
        magni eius vitae velit id, atque veritatis! At, vero porro.
      </p>
      <h3>Requirements</h3>
      <ul>
        <li>- Windows 10</li>
        <li>- Mac OSX</li>
        <li>- Linux</li>
        <li>- Node.js v12 or higher</li>
      </ul>
    </Doc>
  );
}

export default IntroductionPage;
