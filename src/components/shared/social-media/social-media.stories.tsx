import type { Meta } from '@storybook/react';
import { SocialMedia, SocialMediaProps } from './social-media';

const Story: Meta<typeof SocialMedia> = {
  component: SocialMedia,
  title: 'Components/Shared/Social Media',
};
export default Story;

export const Github = {
  args: { variant: 'github' } as SocialMediaProps,
};

export const Facebook = {
  args: { variant: 'facebook' } as SocialMediaProps,
};

export const Instagram = {
  args: { variant: 'instagram' } as SocialMediaProps,
};

export const Twitter = {
  args: { variant: 'twitter' } as SocialMediaProps,
};
