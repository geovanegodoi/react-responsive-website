import type { Meta } from '@storybook/react';
import { Footer, Navbar } from '@website/components/shared';
import { LayoutDocsPage } from './layout-docs-page';

const Story: Meta<typeof LayoutDocsPage> = {
  component: LayoutDocsPage,
  title: 'Pages/Docs/Layout',
  decorators: [
    (Story) => (
      <div>
        <Navbar />
        <Story />
        <Footer />
      </div>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {},
};
