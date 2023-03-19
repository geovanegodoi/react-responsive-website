import type { Meta } from '@storybook/react';
import { InstallationPage } from './installation-page';

const Story: Meta<typeof InstallationPage> = {
  component: InstallationPage,
  title: 'Pages/Docs/Installation',
};
export default Story;

export const Primary = {
  args: {},
};
