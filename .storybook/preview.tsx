import React from 'react';
import { RouterProviderDecorator } from '../src/routes';

export const decorators = [
  (Story) => (
    <RouterProviderDecorator>
      <Story />
    </RouterProviderDecorator>
  ),
];
