import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    base: '',
    build: {
        minify: true,
        cssMinify: true,
        outDir: '../dist'
    },
    server: {
        watch: {
            include: ['src/main.js', 'src/main.scss']
        }
    }
});