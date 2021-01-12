import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders todos title', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const titleElement = screen.getByText(/todos/i);
  expect(titleElement).toBeInTheDocument();
});
