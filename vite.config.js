// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',  // Specify the project root directory
  build: {
    outDir: 'dist', // Output directory for the build files
    minify: true,  // Enable minification for production
    rollupOptions: {
      input: {
        main: './public/index.html',
        events: './public/events.html',
        resources: './public/resources.html',
        teams: './public/teams.html',
       
      }
    }
  }
});