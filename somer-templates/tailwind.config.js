/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Somer brand colors
        'somer': {
          DEFAULT: '#08A0CA',     // Primary brand color
          50: '#E6F7FC',
          100: '#CCF0F8', 
          200: '#99E0F2',
          300: '#66D1EB',
          400: '#33C1E5',
          500: '#08A0CA',         // Primary
          600: '#0680A2',         // Darker secondary
          700: '#05607A',
          800: '#044052',
          900: '#02202A'
        },
        // Newsletter specific colors
        'newsletter': {
          'primary': '#08A0CA',
          'secondary': '#0680A2',
          'accent': '#CCF0F8',
          'text': '#1F2937',
          'muted': '#6B7280',
          'border': '#E5E7EB'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    }
  }
}
