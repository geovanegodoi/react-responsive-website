import { render } from '@testing-library/react';

import UsingCliPage from './using-cli-page';

describe('UsingCliPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsingCliPage />);
    expect(baseElement).toBeTruthy();
  });
});
