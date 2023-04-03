import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { GreetingsProvider } from './providers/greetings-provider';

test('renders "Hello World" text', async () => {

  render(
    <BrowserRouter>
      <GreetingsProvider baseURL="/">
        <App />
      </GreetingsProvider>
    </BrowserRouter>
  );

  const helloElement = await screen.findByText(/Hello World/i);
  expect(helloElement).toBeInTheDocument();
});
