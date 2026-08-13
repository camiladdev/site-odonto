/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3F8',
          100: '#D7E3EF',
          300: '#7FA0C0',
          400: '#5A7FA6',
          500: '#3A6183',
          700: '#123456',
          900: '#0F2D4E',
          950: '#081C34',
        },
        mint: {
          50: '#F1FDFB',
          100: '#E3F9F5',
          300: '#8FE3D3',
          400: '#4FD6C0',
          500: '#2EC4B6',
          600: '#25A697',
        },
        offwhite: '#FAF9F6',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
