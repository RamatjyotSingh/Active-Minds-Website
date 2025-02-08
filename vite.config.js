import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for assets
  build: {
    outDir: 'dist', // Ensure the output directory matches your desired structure
    rollupOptions: {
        input: {
            main: 'public/index.html',  // Main entry point
            events: 'public/events.html',  // Events page
            resources: 'public/resources.html', // Resources page
            teams: 'public/teams.html',  // Teams page
          },
    },
  },
});
