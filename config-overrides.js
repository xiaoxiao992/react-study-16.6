const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    disableEsLint,
    useBabelRc,
    addWebpackAlias
} = require('customize-cra')

const path = require('path')

// override生成webpack配置对象
module.exports = override(
    // antd按需加载配置
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    // 添加修饰器， 根目录下创建.babelrc
    useBabelRc(),
    // 禁用默认eslint，使用自定义eslint，根目录下创建.eslintrc.js
    disableEsLint(),
    // 装饰器 类似@
    // 在传统模式下添加修饰器，一定要@babel/plugin-proposal-decorators安装
    addDecoratorsLegacy(),
    // 添加less-loader配置
    addLessLoader(),
    // 配置简化路径
    addWebpackAlias({
        '@style': path.resolve(__dirname, 'src/style'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@resource': path.resolve(__dirname, 'src/resource'),
        '@components':path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@utils': path.resolve(__dirname, 'src/utils')
    })
)