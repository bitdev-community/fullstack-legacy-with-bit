import { render, screen, fireEvent } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import { LandingPage } from './landing-page';

describe('LandingPage', () => {

  afterEach(() => {
    fetchMock.reset();
  });

  test('displays Load Data button', async () => {
    await fetchMock.mock('http://localhost:4000/api/hello', 'Hello World!');
    render(<LandingPage />);
     // After viewing the page you should find a Load Data button
    expect(await screen.findByText('Load Data')).toBeInTheDocument();
  });

  test('button should get hidden after clicking it', async () => {
     await fetchMock.mock('http://localhost:4000/api/hello', 'Hello World!');
    render(<LandingPage />);
  
    const button = screen.getByText('Load Data');
    fireEvent.click(button);
  
    // After clicking the button, it should get hidden
    expect(screen.queryByText('Load Data')).not.toBeInTheDocument();
  });
});
