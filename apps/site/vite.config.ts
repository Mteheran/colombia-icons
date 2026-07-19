import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoRoot = fileURLToPath(new URL('../..', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://<user>.github.io/colombia-icons/.
  base: '/colombia-icons/',
  plugins: [react()],
  server: {
    // The gallery reads icons/svg and icons/manifest.json straight from the
    // repo root, which lives outside this workspace.
    fs: { allow: [repoRoot] },
  },
})
