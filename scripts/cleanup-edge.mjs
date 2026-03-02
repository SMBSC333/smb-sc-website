// Post-build cleanup: remove non-JS files from netlify/edge-functions
import { readdirSync, rmSync } from 'fs'

const dir = 'netlify/edge-functions'
try {
  readdirSync(dir).forEach(f => {
    if (!f.endsWith('.js') && f !== '.gitkeep') {
      rmSync(`${dir}/${f}`, { recursive: true, force: true })
      console.log(`Removed: ${dir}/${f}`)
    }
  })
  console.log('Edge functions cleanup done.')
} catch (e) {
  // dir may not exist yet
}
