import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        servicos: resolve(__dirname, 'servicos/index.html'),
        desenvolvimentoWeb: resolve(__dirname, 'servicos/desenvolvimento-web/index.html'),
        sistemasWeb: resolve(__dirname, 'servicos/sistemas-web/index.html'),
        aplicativosMobile: resolve(__dirname, 'servicos/aplicativos-mobile/index.html'),
        ecommerce: resolve(__dirname, 'servicos/ecommerce/index.html'),
        outsourcing: resolve(__dirname, 'servicos/outsourcing/index.html'),
        projetos: resolve(__dirname, 'projetos/index.html'),
        sobre: resolve(__dirname, 'sobre/index.html'),
        contato: resolve(__dirname, 'contato/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
