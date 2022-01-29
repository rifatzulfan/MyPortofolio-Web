module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'sm': ['14px', '20px'],
      'base': ['18px', '24px'],
      'lg': ['20px', '28px'],
      'xl': ['24px', '32px'],
      '2xl': ['28px', '36px'],
      '3xl': ['32px', '40px'],
      '4xl': ['36px', '44px'],
      '5xl': ['42px', '54px'],
      '6xl': ['54px', '70px'],
      '7xl': ['84px', '112px'],
    },
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'open-sans': ["Open Sans", 'sans-serif']
    },
    dropShadow: {
      'xl': '0 5px 15px rgba(252, 211, 77, 0.5)',
    },
    container : {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1320px",
        xl: "1320px",
        "2xl": "1320px",
      },
    },
    extend: {},
  },
  plugins: [],
}