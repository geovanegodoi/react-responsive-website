import { render } from '@testing-library/react';

import FeaturesList from './features-list';

describe('FeaturesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesList />);
    expect(baseElement).toBeTruthy();
  });
});
