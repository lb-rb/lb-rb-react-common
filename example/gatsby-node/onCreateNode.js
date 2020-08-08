const path = require('path');

module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'Mdx') {
    const {slug} = node.frontmatter;
    const {relativePath, sourceInstanceName} = getNode(node.parent);

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'path',
      value: path.join(sourceInstanceName, relativePath),
    });
  }
};
