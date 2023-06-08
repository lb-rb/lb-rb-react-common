const path = require('path');

module.exports = exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      date: String,
      redirect_to: String
    }
  `;
  createTypes(typeDefs);
};
