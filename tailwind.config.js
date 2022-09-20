module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#FFD34E",
      secondary: "#FFA742",
      tertiary: "#FFE69C",
      cuarto: "#EC36FF",
      quinto: "#4F6FFF",
      sexto: "#9CAEFF",
      septimo: "#8642FF",
    },
    extend: {
      backgroundImg: {
        // sanFrancisco: "url('../img/sanFrancisco.jpg')", -> ejemplo
        logo: 'url(../img/logo.png)',
        fotoPortada: 'url(../img/foto-portada.png)'
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Indie: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};
