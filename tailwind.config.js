module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "240px",
      xs: "350px",
      '2xs': '580px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        lg: "1124px",
        xl: "1124px",
        '2xl': "1124px",
      },
    },
    extend: {
      colors: {
        "b-purpule" : {
          50: '#5267DF',
        },
        "b-red" : {
          50: "#FA5959",
        },
        "b-blue" : {
          50: "#242a45",
        },
        "b-grey" : {
          50: "#9194A2",
        },
        "b-white" : {
          50: "#f7f7f7",
        },
      },
    },
  },
  plugins: [],
}
