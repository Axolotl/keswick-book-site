/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve(`src/templates/template.js`);

  const timeframes = [
    {
      year: "pre-1912 through 1947",
      slug: "timeframes/pre-1912_through_1947"
    },
    {
      year: "1947-1965",
      slug: "timeframes/1947-1965"
    },
    {
      year: "1965-1972",
      slug: "timeframes/1965-1972"
    },
    {
      year: "1972-1990",
      slug: "timeframes/1972-1990"
    },
    {
      year: "1990-1999",
      slug: "timeframes/1990-1999"
    },
    {
      year: "1999-present",
      slug: "timeframes/1999-present"
    }
  ];

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___year] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              path
              year
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: "src/templates/paginate.js",
      pageLength: 10,
      // this generates the page in place of pages/ongoing-conversation.js
      pathPrefix: "ongoing-conversation"
    });

    timeframes.forEach(timeframe => {
      const filteredData = result.data.allMarkdownRemark.edges.filter(
        ({ node }) => {
          return node.frontmatter.year == timeframe.year;
        }
      );
      createPaginatedPages({
        edges: filteredData,
        createPage: createPage,
        pageTemplate: "src/templates/paginate.js",
        pageLength: 10,
        pathPrefix: timeframe.slug
      });
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
