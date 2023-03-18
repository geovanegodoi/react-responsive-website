import type { Meta } from '@storybook/react';
import { HomePage } from './home-page';

const Story: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
};
export default Story;

export const Primary = {
  args: {},
};
