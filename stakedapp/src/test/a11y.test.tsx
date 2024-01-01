import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

import App from '../App.tsx';

expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)
  
  expect(results).toHaveNoViolations()
})