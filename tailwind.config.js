/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Nunito', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      colors: {
        bkOrange: '#F5871F',
        bkBrown: '#502314',
        bkRed: '#C8102E',
        bkCream: '#FFF5E4',
        bkYellow: '#FFCD00',
        bkDark: '#1C0A00',
        bkWhite: '#FFFDF9',
      },
    },
  },
  plugins: [],
}
