// vite.config.js
export default {
    root: './',  // Specify the project root directory
    build: {
      outDir: 'dist', // Output directory for the build files
      minify: true,  // Enable minification for production
      rollupOptions: {
        input: '/public/index.html' // Specify your custom entry point here
      }
    },
  }
  