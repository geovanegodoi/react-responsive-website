import type { Meta } from '@storybook/react';
import { Alert, Code } from '../../../components/shared';
import { Container, ContainerProps } from './container';
import * as Stories from '../../shared/code/code.stories';

const Story: Meta<typeof Container> = {
  component: Container,
  title: 'Components/Docs Page/Container',
};
export default Story;

export const Introduction = {
  args: {
    children: (
      <>
        <h2>
          <strong>Introduction</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          illo facere perferendis laborum? Similique recusandae incidunt eos
          dolorum aliquam ipsam unde perspiciatis laudantium totam quam laborum
          velit, at maxime minus?
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
      </>
    ),
  } as ContainerProps,
};

export const Installation = {
  args: {
    children: (
      <>
        <h2>
          <strong>Installation</strong>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          accusantium debitis eveniet quod vel omnis, reiciendis aliquid minima
          odio! Eos animi culpa ducimus dolorum dolores rerum possimus sed
          laborum perferendis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <Alert
          variant="success"
          message="Ratione non tempore accusantium delectus enim doloribus
          blanditiis, atque quae error, aliquid mollitia laudantium deleniti."
        />
        <h3>Install</h3>
        <p>Mac (Homebrew)</p>
        <Code {...Stories.Mac.args} />
        <p>NPM</p>
        <Code {...Stories.NPM.args} />
        <p>YARN</p>
        <Code {...Stories.Yarn.args} />
      </>
    ),
  } as ContainerProps,
};

export const About = {
  args: {
    children: (
      <>
        <h2>
          <strong>About</strong>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veniam
          qui assumenda delectus officia quidem, esse cum velit minus impedit
          aspernatur ad architecto aperiam mollitia odio. Necessitatibus, amet
          impedit. Nulla?
        </p>
        <img
          src="https://image.ibb.co/kYJK8x/showcase.jpg"
          alt="about"
          style={{ objectFit: 'cover', height: '250px' }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ut obcaecati, ipsa placeat quis similique in voluptatum aspernatur
          quam, odit itaque ullam. Asperiores quos placeat accusantium ipsam ex
          culpa consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis ut obcaecati, ipsa placeat quis similique in
          voluptatum aspernatur quam, odit itaque ullam. Asperiores quos placeat
          accusantium ipsam ex culpa consequuntur!
        </p>
        <Alert
          variant="success"
          message="Ratione non tempore accusantium delectus enim doloribus
          blanditiis, atque quae error, aliquid mollitia laudantium deleniti."
        />
      </>
    ),
  } as ContainerProps,
};
