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
        'amiri': ['Amiri'],
        'oswald': ['Oswald'],
        'work-sans': ['"Work Sans"'],
        'dm-serif-display': ['"DM Serif Display"'],
        'dm-serif-text': ['"DM Serif Text"'],
        'liberata': ['Liberata'],
        'noto-serif': ['Noto Serif'],
        'spectral': ['Spectral'],
        'unna': ['Unna'],
        'lora': ['Lora'],
        'roboto-serif': ['Roboto Serif'],
        'times': ['Times']
      },
    },
  },
  plugins: []
}
