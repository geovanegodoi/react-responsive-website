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
    variant: 'image',
    display: 'row',
    orientation: 'default',
  } as CardProps,
};

export const WithIcon = {
  args: {
    animateHover: true,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam',
    image: 'fas fa-server fa-3x',
    variant: 'icon',
    display: 'row',
    orientation: 'default',
  } as CardProps,
};
