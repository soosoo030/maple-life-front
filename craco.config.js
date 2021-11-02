const emotionPresetOptions = {};

// eslint-disable-next-line import/no-extraneous-dependencies
const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
);

module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
      // your other plugins
    ],
  },
};