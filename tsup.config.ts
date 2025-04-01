import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  // shims: true,
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  treeshake: true,
})
