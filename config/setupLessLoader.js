const setupLessLoader = () =>
  require('customize-cra').addLessLoader({
    javascriptEnabled: true,
  });

module.exports = setupLessLoader;
