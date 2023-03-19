import type { Meta } from '@storybook/react';
import { IntroductionPage } from './introduction-page';

const Story: Meta<typeof IntroductionPage> = {
  component: IntroductionPage,
  title: 'Pages/Docs/Introduction',
};
export default Story;

export const Primary = {
  args: {},
};
