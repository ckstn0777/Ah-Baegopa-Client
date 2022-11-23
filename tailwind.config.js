/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7272',
        'primary-hover': '#FF6767',
        'primary-active': '#FF5959',

        gray2: '#F4F4F4',
      },
      fontSize: {
        heading2: '1.313rem',
        heading3: '1.125rem',
        body2: '0.875rem',
        caption1: '0.75rem',
        caption2: '0.688rem',
      },
    },
  },
  plugins: [],
}
