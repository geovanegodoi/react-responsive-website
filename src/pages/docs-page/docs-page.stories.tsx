import type { Meta } from '@storybook/react';
import { DocsPage } from './docs-page';

const Story: Meta<typeof DocsPage> = {
  component: DocsPage,
  title: 'Pages/Docs',
};
export default Story;

export const Primary = {
  args: {},
};
