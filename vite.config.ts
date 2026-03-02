import build from '@hono/vite-build/netlify-functions'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      entry: 'src/index.tsx',
      outputDir: './netlify/edge-functions',
      output: 'index.js'
    })
  ]
})
