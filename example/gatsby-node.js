module.exports = {
  createPages: require('./gatsby-node/createPages'),
  onCreateNode: require('./gatsby-node/onCreateNode'),
  // onCreatePage: require('./gatsby-node/onCreatePage')
  onCreateWebpackConfig: require('./gatsby-node/onCreateWebpackConfig'),
};
