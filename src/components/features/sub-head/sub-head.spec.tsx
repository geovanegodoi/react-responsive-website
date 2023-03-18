import { render } from '@testing-library/react';

import SubHead from './sub-head';

describe('SubHead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubHead />);
    expect(baseElement).toBeTruthy();
  });
});
