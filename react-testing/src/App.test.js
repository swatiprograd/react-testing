import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "This is a React Testing Application" text in the document', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a React Testing Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Login Component in the document', () => {
  const component=render(<App />);
  const childElement = component.getByLabelText("Email");
  expect(childElement).toBeTruthy();
});