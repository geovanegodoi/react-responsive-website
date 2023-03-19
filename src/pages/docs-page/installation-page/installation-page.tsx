import { Container as Doc } from '@website/components/docs';
import { Alert, Code, CodeStories } from '@website/components/shared';

/* eslint-disable-next-line */
export interface InstallationPageProps {}

export function InstallationPage(props: InstallationPageProps) {
  return (
    <Doc>
      <h2>
        <strong>Installation</strong>
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        accusantium debitis eveniet quod vel omnis, reiciendis aliquid minima
        odio! Eos animi culpa ducimus dolorum dolores rerum possimus sed laborum
        perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Alert
        variant="success"
        message="Ratione non tempore accusantium delectus enim doloribus
          blanditiis, atque quae error, aliquid mollitia laudantium deleniti."
      />
      <h3>Install</h3>
      <p>Mac (Homebrew)</p>
      <Code {...CodeStories.Mac.args} />
      <p>NPM</p>
      <Code {...CodeStories.NPM.args} />
      <p>YARN</p>
      <Code {...CodeStories.Yarn.args} />
    </Doc>
  );
}

export default InstallationPage;
