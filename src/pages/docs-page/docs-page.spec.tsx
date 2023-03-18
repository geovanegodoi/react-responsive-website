import { render } from '@testing-library/react';

import DocsPage from './docs-page';

describe('Docs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocsPage />);
    expect(baseElement).toBeTruthy();
  });
});
