import type { Meta } from '@storybook/react';
import { SummarySection, SummarySectionProps } from './summary-section';

const Story: Meta<typeof SummarySection> = {
  component: SummarySection,
  title: 'Components/Docs Page/Summary Section',
};
export default Story;

export const Essentials = {
  args: {
    title: 'Essentials',
    options: [
      { to: '.', children: 'Introduction', end: true },
      { to: 'about', children: 'About' },
      { to: 'Installation', children: 'Installation' },
    ],
  } as SummarySectionProps,
};

export const Deployment = {
  args: {
    title: 'Deployment',
    options: [
      { to: 'setup-container', children: 'Setting up a container' },
      { to: 'using-cli', children: 'Using the CLI' },
      { to: 'managing-resources', children: 'Managing resources' },
      { to: 'updagre-downgrade', children: 'Upgrade & downgrade' },
    ],
  } as SummarySectionProps,
};
