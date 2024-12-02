import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
    plugins: [
        babel(), // Prosta wtyczka bez potrzeby ręcznego podawania konfiguracji Babela
    ],
});
