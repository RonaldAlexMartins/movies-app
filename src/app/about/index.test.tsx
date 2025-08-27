import { render, screen } from '@testing-library/react';
import AboutPage from './index'; // <-- Isso vai dar erro, pois o arquivo não existe
import '@testing-library/jest-dom';

describe('About Page', () => {
    it('should render the main heading', () => {
        // 1. Renderizamos o componente
        render(<AboutPage />);

        // 2. Buscamos por um elemento de título (h1, h2, etc.) com o texto "Sobre o Movie App"
        const heading = screen.getByRole('heading', { name: /sobre o movie app/i });

        // 3. Verificamos se o elemento está no documento
        expect(heading).toBeInTheDocument();
    });
});