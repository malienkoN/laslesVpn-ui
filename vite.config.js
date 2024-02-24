import { defineConfig } from 'vite';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
    plugins: [
        createSvgSpritePlugin({
            symbolId: 'icon-[name]-[hash]',
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: ``,
            },
        },
    },
});
