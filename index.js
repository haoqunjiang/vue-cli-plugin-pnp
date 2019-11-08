const PnpWebpackPlugin = require('pnp-webpack-plugin')

module.exports = (api) => {
  api.chainWebpack(config => {
    config.resolve
      .plugin('pnp')
        .use(PnpWebpackPlugin)

    config.resolveLoader
      .plugin('pnp')
        .use(PnpWebpackPlugin.moduleLoader(module))
  })
}
