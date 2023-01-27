const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
        Gilroy: "Gilroy",
    },
    extend: {
        fontFamily: {
            sans: [
                'Gilroy', ...defaultTheme.fontFamily.sans
            ]
        },
        colors: {
            dakgray: "#7C7C7C",
            secondary: "#00D6C9",
            textPrimary: "#1E1E1E",
            primary: "#E58411",
            accent: "#0D1B39"
        }
    },
  },
  plugins: [],
}
