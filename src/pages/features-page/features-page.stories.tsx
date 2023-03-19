import type { Meta } from '@storybook/react';
import { Footer, Navbar } from '@website/components/shared';
import { FeaturesPage } from './features-page';

const Story: Meta<typeof FeaturesPage> = {
  component: FeaturesPage,
  title: 'Pages/Features',
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
