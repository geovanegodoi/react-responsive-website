import type { Meta } from '@storybook/react';
import { Showcase } from './showcase';

const Story: Meta<typeof Showcase> = {
  component: Showcase,
  title: 'Components/Home Page/Showcase',
};
export default Story;

export const Primary = {
  args: {},
};
