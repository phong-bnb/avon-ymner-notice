import { defineConfig } from 'vite'
import sass from 'sass'
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/avon-ymner-notice/",
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
