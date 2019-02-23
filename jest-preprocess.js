const babelOptions = {
  plugins: ['@babel/plugin-transform-flow-strip-types', 'emotion'],
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
