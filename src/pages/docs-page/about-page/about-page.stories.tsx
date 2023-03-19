import type { Meta } from '@storybook/react';
import { AboutPage } from './about-page';

const Story: Meta<typeof AboutPage> = {
  component: AboutPage,
  title: 'Pages/Docs/About',
};
export default Story;

export const Primary = {
  args: {},
};
