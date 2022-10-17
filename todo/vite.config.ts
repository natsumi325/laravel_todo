import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // <- 追加

export default defineConfig({
    plugins: [
        laravel({
            refresh: true,
            input: [
                'resources/react/src/main.tsx'
            ],
        }),
        react(), // <- 追加
    ],
});