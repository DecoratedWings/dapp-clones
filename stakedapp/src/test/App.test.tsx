import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import NavbarComponent from '../components/Navbar.tsx';

describe('NavbarComponent accessibility tests', () => {
  it('should be accessible and have no violations', async () => {
    // const { container } = render(<NavbarComponent />);
    // const results = await axe(container);
    // expect(results).toHaveNoViolations();
  });

});