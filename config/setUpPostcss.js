

const setupPostcss = () => {
  const path = require('path')
  const isExclude = path.join('src', 'module', 'pc')
  return require('customize-cra').addPostcssPlugins(
    [require('postcss-pxtorem')({
        rootValue: 75,
        // unitPrecision: 5,
        // propList: ['*', '!font-size'],
        propList: ['*'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 1,
        exclude: isExclude,
   }),]
  )
};
module.exports = setupPostcss;
