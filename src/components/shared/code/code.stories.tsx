import type { Meta } from '@storybook/react';
import { Code, CodeProps } from './code';

const Story: Meta<typeof Code> = {
  component: Code,
  title: 'Components/Shared/Code',
};
export default Story;

export const Mac = {
  args: { children: '$ brew install loruki-cli' } as CodeProps,
};

export const NPM = {
  args: { children: '$ npm install loruki-cli' } as CodeProps,
};

export const Yarn = {
  args: { children: '$ yarn install loruki-cli' } as CodeProps,
};
