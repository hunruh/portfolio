import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '700'],
    },
  ],
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerWeight: 700,
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyWeight: 300,
})

export default typography
