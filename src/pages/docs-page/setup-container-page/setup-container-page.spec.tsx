import { render } from '@testing-library/react';

import SetupContainerPage from './setup-container-page';

describe('SetupContainerPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SetupContainerPage />);
    expect(baseElement).toBeTruthy();
  });
});
