import { render } from '@testing-library/react';

import FeaturesPage from './features-page';

describe('Features', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPage />);
    expect(baseElement).toBeTruthy();
  });
});
