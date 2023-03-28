import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World text', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello World/i);
  expect(helloElement).toBeInTheDocument();
});
