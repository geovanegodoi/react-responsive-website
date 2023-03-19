import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Shared/Button',
};
export default Story;

export const Primary = {
  args: { variant: 'primary' } as ButtonProps,
};

export const Secondary = {
  args: { variant: 'secondary' } as ButtonProps,
};

export const Light = {
  args: { variant: 'light' } as ButtonProps,
};

export const Dark = {
  args: { variant: 'dark' } as ButtonProps,
};

export const Outline = {
  args: { variant: 'outline' } as ButtonProps,
};
