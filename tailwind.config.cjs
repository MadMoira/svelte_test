/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './routes/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['"Proxima Nova"']
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
