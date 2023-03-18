import type { Meta } from '@storybook/react';
import { Navbar } from './navbar';
import { BrowserRouter } from 'react-router-dom';

const Story: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Components/Shared/Navbar',
};
export default Story;

export const Primary = {
  args: {},
};
