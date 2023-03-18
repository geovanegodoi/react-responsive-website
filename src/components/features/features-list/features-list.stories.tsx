import type { Meta } from '@storybook/react';
import { FeaturesList } from './features-list';

const Story: Meta<typeof FeaturesList> = {
  component: FeaturesList,
  title: 'Components/Features Page/Features List',
};
export default Story;

export const Primary = {
  args: {},
};
