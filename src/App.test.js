import { render, screen } from '@testing-library/react';
import App from './App';

describe('buttons working', () => {
  test('complete button exist', () => {
    render(<App />);
    const completeBtn = screen.getByText(/Complete/i);
    expect(completeBtn).toBeInTheDocument();
  });

  test('delete button exist', () => {
    render(<App/>);
    const deleteBtn = screen.getAllByText(/Create/i);

    expect(deleteBtn).toBeInTheDocument();
  });
  
})
