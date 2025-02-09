const {resolve, join} = require('path');

module.exports = async ({graphql, actions}) => {
  const templatePath = '../src/templates';
  const templates = {
    articles: resolve(__dirname, join(templatePath, 'articles.js')),
  };

  const entriesQuery = await graphql(`
    {
      allMdx(limit: 10000) {
        nodes {
          id
          frontmatter {
            slug
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (entriesQuery.errors) {
    console.error(entriesQuery.errors);
    throw Error(entriesQuery.errors);
  }

  entriesQuery.data.allMdx.nodes.forEach((node) => {
    const slug = node.fields.slug;

    Object.entries(templates)
      .filter(([key]) => slug.includes(`${key}/`))
      .forEach(([key, template]) => {
        actions.createPage({
          path: slug,
          component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
          context: {
            slug,
          },
        });
      });
  });
};
