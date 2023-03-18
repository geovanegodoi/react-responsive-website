import type { Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './footer';

const Story: Meta<typeof Footer> = {
  component: Footer,
  title: 'Components/Shared/Footer',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default Story;

export const Primary = {
  args: {},
};
