import type { Meta } from '@storybook/react';
import { Alert, AlertProps } from './alert';

const Story: Meta<typeof Alert> = {
  component: Alert,
  title: 'Components/Shared/Alert',
};
export default Story;

export const Success = {
  args: {
    variant: 'success',
    message: 'Example success message',
  } as AlertProps,
};

export const Error = {
  args: {
    variant: 'error',
    message: 'Example error message',
  } as AlertProps,
};
