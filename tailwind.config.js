/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter'],
        mitr: ['Mitr'],
        indie: ['Indie Flower'],
        Styro: ['Styro'],
        kola: ['Kola'],
        alpino: ['Alpino'],
        chillax: ['Chillax'],
        cus: ["custom"],
        custhin: ["custom-thin"],
      },
    },
  },
  variants: {
    display: ['responsive', 'dropdown']
  },
  plugins: [require('tailwindcss-dropdown')],
}

