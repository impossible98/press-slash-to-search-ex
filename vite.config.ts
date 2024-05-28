import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'impossible98/press-slash-to-search',
        match: ['https://www.bilibili.com/*'],
        name: 'Press / to Search',
        description: 'Press Slash to Search',
        author: 'impossible98',
        license: 'MIT',
        version: '0.1.0',
      },
    }),
  ],
});
