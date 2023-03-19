import type { Meta } from '@storybook/react';
import { Footer, Navbar } from '@website/components/shared';
import { HomePage } from './home-page';

const Story: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
  decorators: [
    (Story) => (
      <div>
        <Navbar />
        {Story()}
        <Footer />
      </div>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {},
};
