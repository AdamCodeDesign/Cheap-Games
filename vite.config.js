import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    proxy:{
      "/moby/":" https://api.mobygames.com/v1/games?api_key=moby_NDAotuC9wPRKn4wK1sflQnViLYc"
    }
  }
})
