import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Main App View text', () => {
  render(<App />);
  const textElement = screen.getByText(/Main App View/);
  expect(textElement).toBeInTheDocument();
});
