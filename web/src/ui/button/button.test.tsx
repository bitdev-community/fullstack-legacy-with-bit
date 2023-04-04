import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  test('renders button with provided class and children', () => {
    const className = 'custom-class';
    const buttonText = 'Click me';
    render(<Button className={className}>{buttonText}</Button>);
    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toHaveClass(className);
    expect(button.textContent).toBe(buttonText);
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click me';
    render(<Button onClick={handleClick}>{buttonText}</Button>);
    const button = screen.getByRole('button', { name: buttonText });
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
