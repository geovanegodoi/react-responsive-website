import type { Meta } from '@storybook/react';
import { Cli } from './cli';

const Story: Meta<typeof Cli> = {
  component: Cli,
  title: 'Components/Home Page/Cli',
};
export default Story;

export const Primary = {
  args: {},
};
