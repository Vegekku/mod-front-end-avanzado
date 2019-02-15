const Autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    Autoprefixer({
      flexbox: true,
      grid: 'autoplace',
      browsers: ['>1%', 'last 4 versions'],
    }),
  ],
};
