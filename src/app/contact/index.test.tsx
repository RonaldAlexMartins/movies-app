import { render, screen } from '@testing-library/react';
import ContactPage from './index'; // <-- Isso vai dar erro, pois o arquivo não existe
import '@testing-library/jest-dom';

describe('Contact Page', () => {
    it('should render the main heading', () => {
        // 1. Renderizamos o componente
        render(<ContactPage />);

        // 2. Buscamos por um elemento de título (h1, h2, etc.) com o texto "Contate nos Movie App"
        const heading = screen.getByRole('heading', { name: /Contate nos Movie App/i });

        // 3. Verificamos se o elemento está no documento
        expect(heading).toBeInTheDocument();
    });
});