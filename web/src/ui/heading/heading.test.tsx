import { render, screen } from '@testing-library/react';
import { Heading } from './heading';

describe('Heading', () => {
  test('renders the heading with provided text', () => {
    const headingText = 'Welcome to my app';
    render(<Heading>{headingText}</Heading>);
    const heading = screen.getByRole('heading', { level: 1, name: headingText });
    expect(heading).toBeInTheDocument();
  });

  test('renders the heading with custom class', () => {
    const headingText = 'Welcome to my app';
    const customClass = 'custom-class';
    render(<Heading className={customClass}>{headingText}</Heading>);
    const heading = screen.getByRole('heading', { level: 1, name: headingText });
    expect(heading).toHaveClass(customClass);
  });
});
