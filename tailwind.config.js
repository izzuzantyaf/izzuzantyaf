const { socialMedias } = require('./constants/social-media')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    ...socialMedias.map(socmed => socmed.hoverColor),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-heebo)', ...fontFamily.sans]
      },
    },
  },
}
