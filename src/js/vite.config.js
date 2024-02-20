import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
    plugins: [
        createVuePlugin(), // Если вы используете Vue.js
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/path/to/your/variables.scss";`, // Опционально, чтобы импортировать глобальные переменные или миксины
            },
        },
    },
});
