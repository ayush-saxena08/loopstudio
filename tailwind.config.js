module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sn: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}
