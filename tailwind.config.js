/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  content: [],
  theme: {
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'border-color': 'var(--border-color)',
        'content-color': 'var(--content-color)',
        'cat-color': 'var(--cat-color)',
      },
    },
  },
  plugins: [],
};
