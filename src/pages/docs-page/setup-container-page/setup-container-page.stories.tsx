import type { Meta } from '@storybook/react';
import { SetupContainerPage } from './setup-container-page';

const Story: Meta<typeof SetupContainerPage> = {
  component: SetupContainerPage,
  title: 'Pages/Docs/Setup Container',
};
export default Story;

export const Primary = {
  args: {},
};
