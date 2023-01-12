import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactMD from 'vite-plugin-react-md'

const md = reactMD.default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), md()]
})
