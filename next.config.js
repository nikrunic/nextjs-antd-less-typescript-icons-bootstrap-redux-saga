const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/antd-custom.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {},
  webpack(config) {
    return config;
  },
  i18n: i18n
});
