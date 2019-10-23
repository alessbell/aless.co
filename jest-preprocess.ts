const babelOptions = {
  plugins: ['emotion'],
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
