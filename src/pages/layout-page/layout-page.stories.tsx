import type { Meta } from '@storybook/react';
import { LayoutPage } from './layout-page';

const Story: Meta<typeof LayoutPage> = {
  component: LayoutPage,
  title: 'Pages/Layout Page',
};
export default Story;

export const Primary = {
  args: {},
};
