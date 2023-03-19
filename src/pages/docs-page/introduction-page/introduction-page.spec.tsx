import { render } from '@testing-library/react';

import IntroductionPage from './introduction-page';

describe('IntroductionPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IntroductionPage />);
    expect(baseElement).toBeTruthy();
  });
});
