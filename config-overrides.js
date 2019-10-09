const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy,addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  // 动态加载antd文件
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
  }),
  // css样式设置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  // 添加装饰器
  addDecoratorsLegacy(),
  // 配别名
  addWebpackAlias({
    '@pages': resolve(__dirname, 'src/pages'),
    '@components': resolve(__dirname, 'src/components'),
    '@api': resolve(__dirname, 'src/api'),
    '@config': resolve(__dirname, 'src/config'),
  })
);