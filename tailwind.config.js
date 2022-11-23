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
    },
  },
  plugins: [],
}
