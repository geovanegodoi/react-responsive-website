import { render } from '@testing-library/react';

import ShowcaseForm from './showcase-form';

describe('ShowcaseForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowcaseForm />);
    expect(baseElement).toBeTruthy();
  });
});
