const babelOptions = {
  plugins: ['styled-components'],
  presets: ['next/babel'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
