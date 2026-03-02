import build from '@hono/vite-build/netlify-functions'
import buildCF from '@hono/vite-build/cloudflare-pages'
import { defineConfig } from 'vite'

const isNetlify = process.env.BUILD_TARGET === 'netlify'

export default defineConfig({
  plugins: [
    isNetlify
      ? build({
          entry: 'src/index.tsx',
          outputDir: './netlify/edge-functions',
          output: 'index.js'
        })
      : buildCF({
          entry: 'src/index.tsx'
        })
  ]
})
