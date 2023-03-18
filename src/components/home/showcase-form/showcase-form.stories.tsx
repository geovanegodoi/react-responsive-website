import type { Meta, Story } from '@storybook/react';
import { ShowcaseForm } from './showcase-form';

const Story: Meta<typeof ShowcaseForm> = {
  component: ShowcaseForm,
  title: 'Components/Home Page/Showcase Form',
};
export default Story;

export const Primary = {
  args: {},
};
