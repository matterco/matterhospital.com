const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        seagreen: {
          100: '#e7f0ef',
          200: '#d8edeb',
          300: '#e0ebe9',
          400: '#70cfc5',
          600: '#009688',
          900: '#003636'
        }
      },
      fontFamily: {
        'times-now': ['Times Now']
      },
    },
  },
  plugins: []
}
