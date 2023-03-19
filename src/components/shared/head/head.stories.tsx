import type { Meta } from '@storybook/react';
import { Head } from './head';
import ImgServer from '../../../assets/server.png';
import ImgDocs from '../../../assets/docs.png';

const Story: Meta<typeof Head> = {
  component: Head,
  title: 'Components/Shared/Head',
};
export default Story;

export const Features = {
  args: {
    title: 'Features',
    subTitle:
      'Check out the features of Loruki that separate us from the competition',
    image: ImgServer,
  },
};

export const Docs = {
  args: {
    title: 'Docs',
    subTitle: 'Learn how to work with the infrastructure platform',
    image: ImgDocs,
  },
};
