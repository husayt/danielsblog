const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // purge: ['./dist/**/*.css'],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./index.html",
      // "./App.vue",
      // "./components/**/*.vue",
      // "./views/**/*.vue",
      // "./main.js",
      // "./routes.js",      
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
  // purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
}
