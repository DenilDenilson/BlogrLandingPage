module.exports = {
  content: [
    "./src/**/*.{html, js}",
    "./**/*.{html, js}",
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },
    extend: {
      colors: {
        // Primary
        'Light-red': 'hsl(356, 100%, 66%)',
        'Very-light-red': 'hsl(355, 100%, 74%)',
        'Very-dark-blue': 'hsl(208, 49%, 24%)',
        // Neutral
        'White': 'hsl(0, 0%, 100%)',
        'Grayish-blue': 'hsl(240, 2%, 79%)',
        'Very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'Very-dark-black-blue': 'hsl(240, 10%, 16%)',
        // Gradiente
        'Very-light-red': 'hsl(13, 100%, 72%)',
        'Light-red': 'hsl(353, 100%, 62%)',
        'Very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
      },
      
      fontFamily: {
        Overpass: ['Overpass', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans'],
      },

      backgroundImage: {
        'bg-pattern-circles': "url('../images/bg-pattern-circles.svg')", //Circulo azul con circulo exterior cocentrico
        'bg-pattern-intro-desktop': "url('../images/bg-pattern-intro-desktop.svg')", //Circulos naranja a la izquierda de la pantalla
        'bg-pattern-intro-mobile': "url('../images/bg-pattern-intro-mobile.svg')", //Circulo y dos cuadrados a la izquierda " " " "
        'icon-arrow-dark': "url('../images/icon-arrow-dark.svg')", //Flecha naranja hacia abajo
        'icon-arrow-light': "url('../images/icon-arrow-light.svg')", //Flecha blanca hacia abajo
        'icon-close': "url('../images/icon-close.svg')", //Y bueno, ícono de cerrar
        'icon-hamburger': "url('../images/icon-hamburger.svg')", //Hamburguesita
        'illustration-editor-desktop': "url('../images/illustration-editor-desktop.svg')", // La tipo radio para desktop
        'illustration-editor-mobile': "url('../images/illustration-editor-mobile.svg')", // " " " " mobile
        'illustration-laptop-desktop': "url('../images/illustration-laptop-desktop.svg')", // Laptop to desktop
        'illustration-laptop-mobile': "url('../images/illustration-laptop-mobile.svg')", // " " " " to mobile
        'illustration-phones': "url('../images/illustration-phones.svg')", // Teléfonos
        'logo': "url('../images/logo.svg')", //Logo -> "BLORG"
      },
    },
  },
  plugins: [],
}
