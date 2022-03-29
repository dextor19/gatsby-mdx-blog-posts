const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allMdx(filter: {fileAbsolutePath: {regex: "/content/posts/"}}) {
      edges {
        node {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `);

  const posts = result.data.allMdx.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/components/postsPageLayout.jsx'),
      context: { id: node.id },
    });
  });
};
