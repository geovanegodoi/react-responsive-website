import type { Meta } from '@storybook/react';
import { Introduction } from './introduction';

const Story: Meta<typeof Introduction> = {
  component: Introduction,
  title: 'Components/Docs Page/Introduction',
};
export default Story;

export const Primary = {
  args: {},
};
