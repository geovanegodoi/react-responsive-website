import type { Meta } from '@storybook/react';
import { NotFoundPage } from './not-found-page';

const Story: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  title: 'Pages/Not Found',
};
export default Story;

export const Primary = {
  args: {},
};
