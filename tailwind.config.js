/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        black: '#050505',
        void: '#0A0A0A', // Deep background
        graphene: '#141414', // Structural
        vector: '#222222', // Lines
        mist: '#444444', // Low contrast text
        silver: '#E0E0E0',
        laser: '#D70000', // Vector Pulse Red
        cold: '#0033FF', // Singularity Blue (Rare accent)
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #E0E0E0 0%, #707070 100%)',
        'void-gradient': 'radial-gradient(circle at center, #141414 0%, #000000 100%)',
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
