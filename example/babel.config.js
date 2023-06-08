/**
 * This is override for https://github.com/lodash/babel-plugin-lodash/issues/259.
 * babel-plugin-lodash is using deprecated babel API, which causes generation of many
 * console.trace calls.
 */

//const consoleTrace = console.trace.bind(console);
//console.trace = (message, ...optionalParams) => {
//  if (
//    typeof message === 'string' &&
//    message.startsWith('`isModuleDeclaration` has been deprecated')
//  ) {
//    return undefined; // noop
//  }

//  return consoleTrace(message, ...optionalParams);
//};

module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3.30.2',
        shippedProposals: true,
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        pragma: 'React.createElement',
      },
    ],
    '@babel/preset-flow',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-macros',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true,
      },
    ],
  ],
};
