// * 1. 安装postcss
const setupPostcss = require('./config/setupPostcss.js');
// * 2. 安装less-loader
const setupLessLoader = require('./config/setupLessLoader.js');

// * 3. 安装webpack路径别名
const setupWebpackAlias = require('./config/setupWebpackAlias.js');

// 只在【生产环境】下生成map文件
process.env.GENERATE_SOURCEMAP = process.env.NODE_ENV === 'development';

module.exports = require('customize-cra').override(
  setupLessLoader(),
  setupWebpackAlias(),
  setupPostcss()
);
