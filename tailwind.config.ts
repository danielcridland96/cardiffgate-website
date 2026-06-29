import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e4f0',
          600: '#1a4a7a',
          700: '#0f3660',
          800: '#0a2545',
          900: '#071830',
        },
        gold: {
          50: '#fdf8ec',
          400: '#e8c44a',
          500: '#d4a843',
          600: '#b8902e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
