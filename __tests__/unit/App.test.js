import '@testing-library/jest-dom';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from '../../src/App';

describe('Render App component', () => {
  it('should render the app component', async () => {
    const { findByTestId } = render(<Router><App /></Router>);
    const app = await findByTestId('app');
    expect(app).toBeVisible();
  })
})
