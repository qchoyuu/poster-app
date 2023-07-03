const setupWebpackAlias = () => {
  const path = require('path');
  return require('customize-cra').addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['@components']: path.resolve(__dirname, 'src/components'),
  });
};

module.exports = setupWebpackAlias;
