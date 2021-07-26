const path = require('path');
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    // addBundleVisualizer,
    addWebpackAlias,
    // adjustWorkbox 
  } = require("customize-cra");

// const { injectBabelPlugin } = require('react-app-rewired');
// 老式用法
// module.exports = function override(config, env) {
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname,'src')

//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);
    
//     return config;
// }

// react-app-rewired@2.x后的配置
module.exports = override(
    // 支持装饰器
    // addDecoratorsLegacy(),

    // webpack alias
    addWebpackAlias({
        '@':path.join(__dirname,'src')
    }),

    // 禁用eslit
    disableEsLint()
)
