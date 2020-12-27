import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todos title', () => {
  render(<App />);
  const titleElement = screen.getByText(/todos/i);
  expect(titleElement).toBeInTheDocument();
});
