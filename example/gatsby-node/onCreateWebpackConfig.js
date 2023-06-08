const {resolve} = require('path');
const webpack = require('webpack');

module.exports = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        resolve(__dirname, '../../src'),
        resolve(__dirname, '../src'),
        resolve(__dirname, '../node_modules'),
      ],
      // https://github.com/auth0/node-auth0/issues/657#issuecomment-928083729
      // https://github.com/auth0/node-auth0/issues/798
      alias: {
        formidable: false, //  node-auth0 build warning
        'coffee-script': false, //  node-auth0 build fail
        vm2: false, // node-auth0 build fail
        yargs: false, // auth0-deploy-cli build warning
        colors: false, // auth0-deploy-cli build warning
        keyv: false, // openid-client build warning
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'global.GENTLY': false,
      }),
    ],
  });
};
