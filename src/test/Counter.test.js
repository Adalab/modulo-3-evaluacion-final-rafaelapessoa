import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import { suma } from '../components/function';

describe('Componente de Home', () => {
  test('Incrementar variable counter al hacer click en el boton', () => {
    render(<Home />);
    const incrementButton = screen.getByText('Incrementar');
    fireEvent.click(incrementButton); //  simula el click en el boton
    const countElement = screen.getAllByText(/Contador: 1/);
    expect(countElement.length).toBe(1);
  });
  test('comprobar  la funcion suma', () => {
    const num1 = 10;
    const num2 = 25;
    const result = suma(num1, num2);
    expect(result).toBe(35);
  });
});
