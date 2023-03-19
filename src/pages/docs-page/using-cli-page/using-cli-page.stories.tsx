import type { Meta } from '@storybook/react';
import { UsingCliPage } from './using-cli-page';

const Story: Meta<typeof UsingCliPage> = {
  component: UsingCliPage,
  title: 'pages/Docs/Using CLI',
};
export default Story;

export const Primary = {
  args: {},
};
