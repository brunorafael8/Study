import React from 'react';
import { render } from '@testing-library/react';

import 'jest-styled-components';
import Header from '..';
import { ThemeProvider } from '../../../context/ThemeContext';

test('renders a Header', () => {
  const { container } = render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
