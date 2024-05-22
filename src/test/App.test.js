import App from '../components/App';
import { render, screen } from '@testing-library/react';

describe('Pruebas para el componente App', () => {
  test('Buscar anacleta en el componente', () => {
    //desarrollar el test
    //preparación
    render(<App />);
    // actuación
    const arrayAnacleta = screen.getAllByText(/anacleta/i);
    //asercion
    expect(arrayAnacleta.length).toBe(1);
  });

  test('ver que hay un titulo en App', () => {
    // buscar el titulo en app
    const texto = 'Mi web';
    render(<App />);
    screen.getByRole('heading', { name: texto });
  });
});
