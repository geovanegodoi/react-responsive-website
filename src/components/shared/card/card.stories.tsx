import type { Meta } from '@storybook/react';
import { Card, CardProps } from './card';
import node from '../../../assets/node.png';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Shared/Card',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
export default Story;

export const OnlyText = {
  args: {
    animateHover: true,
    text: 'Easy to use, cross platform CLI',
  } as CardProps,
};

export const WithImage = {
  args: {
    animateHover: true,
    text: 'Node.js',
    image: node,
    display: 'row',
    orientation: 'image-text',
  } as CardProps,
};
