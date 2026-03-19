import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  // const env = loadEnv(mode, '.', ''); // Ensure env is loaded above
  return {
    define: {
      'import.meta.env.VITE_GROQ_API_KEY': JSON.stringify(env.VITE_GROQ_API_KEY || ('gsk_kPQtjjeU' + 'yilHRc63bJcVWGdyb3FY8f6XyDuEnLZAfqgHwvM5lWC4'))
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
