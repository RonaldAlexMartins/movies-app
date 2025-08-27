import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Forneça o caminho para sua aplicação Next.js para carregar next.config.js e .env no ambiente de teste
    dir: './',
})

// Adicione qualquer configuração customizada do Jest aqui
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig é exportado desta forma para garantir que next/jest possa carregar a configuração do Next.js
export default createJestConfig(customJestConfig)