import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  // 让 CSS 拷贝到 dist
  onSuccess: 'cp src/index.css dist/index.css',
});