import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
    ],
    base: '/bengtong-fe/',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use 'tailwindcss/base';
                    @use 'tailwindcss/components';
                    @use 'tailwindcss/utilities';
                `,
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', // Laravel 後端的 API 位址
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        outDir: 'dist', // 打包輸出目錄
        assetsDir: 'static', // 靜態資源目錄
    },
});
