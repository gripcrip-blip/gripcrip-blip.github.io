/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070708',
          900: '#0B0B0D',
          800: '#121214',
          700: '#1A1A1E',
        },
        mist: {
          50: '#F5F5F4',
          200: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
        },
        accent: {
          DEFAULT: '#8FCBB3',
          dim: '#6FA892',
          glow: 'rgba(143, 203, 179, 0.14)',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
      boxShadow: {
        glow: '0 0 80px rgba(143, 203, 179, 0.08)',
      },
    },
  },
  plugins: [],
}
