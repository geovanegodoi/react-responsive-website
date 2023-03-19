import { render } from '@testing-library/react';

import SummarySection from './summary-section';

describe('SummarySection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummarySection />);
    expect(baseElement).toBeTruthy();
  });
});
