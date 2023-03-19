import { render } from '@testing-library/react';

import LayoutDocsPage from './layout-docs-page';

describe('Docs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutDocsPage />);
    expect(baseElement).toBeTruthy();
  });
});
