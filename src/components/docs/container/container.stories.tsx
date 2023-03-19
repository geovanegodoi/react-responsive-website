import type { Meta } from '@storybook/react';
import { Alert, Code, CodeStories } from '@website/components/shared';
import Container, { ContainerProps } from './container';

const Story: Meta<typeof Container> = {
  component: Container,
  title: 'Components/Docs Page/Container',
};
export default Story;

export const Primary = {
  args: {
    children: [
      <>
        <h2>
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          quisquam iure animi hic omnis inventore, beatae voluptates unde
          maxime! Nesciunt suscipit labore ullam in quam recusandae deleniti
          ratione doloribus natus.
        </p>

        <h3 style={{ margin: '1em 0em' }}>Example of Alerts</h3>
        <Alert variant="success" message="Success" />
        <Alert variant="error" message="Error" />

        <h3 style={{ marginTop: '1em' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          quisquam iure animi hic omnis inventore, beatae voluptates unde
          maxime! Nesciunt suscipit labore ullam in quam recusandae deleniti
          ratione doloribus natus.
        </p>

        <h3 style={{ margin: '1em 0em' }}>Example of Code</h3>
        <Code {...CodeStories.Mac.args} />
        <br />
        <Code {...CodeStories.NPM.args} />

        <h3 style={{ marginTop: '1em' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          quisquam iure animi hic omnis inventore, beatae voluptates unde
          maxime! Nesciunt suscipit labore ullam in quam recusandae deleniti
          ratione doloribus natus.
        </p>
      </>,
    ],
  } as ContainerProps,
};
