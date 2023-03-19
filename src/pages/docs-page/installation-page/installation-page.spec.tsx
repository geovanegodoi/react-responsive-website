import { render } from '@testing-library/react';

import InstallationPage from './installation-page';

describe('InstallationPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InstallationPage />);
    expect(baseElement).toBeTruthy();
  });
});
