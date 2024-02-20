import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/src/styles/main.scss";`, // Опционально, чтобы импортировать глобальные переменные или миксины
            },
        },
    },
});
