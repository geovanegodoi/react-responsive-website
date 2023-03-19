import React from 'react';
import { RouterProviderDecorator } from '../src/routes';

export const decorators = [
  (Story: () => JSX.Element) => (
    <RouterProviderDecorator>{Story()}</RouterProviderDecorator>
  ),
];
