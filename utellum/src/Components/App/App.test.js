import { render, screen } from '@testing-library/react';
import Header from '../Header'

test('renders Utellum in header', () => {
  render(<Header />);
  const linkElement = screen.getByText("Utellum");
  expect(linkElement).toBeInTheDocument();
});
