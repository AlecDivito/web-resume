/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({ node, name: `slug`, value: slug });
    }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const results = await graphql(`
    {
        projects: allMdx(filter: {slug: {regex: "\/personal\/"}}) {
            edges {
                node {
                    fields {
                        slug
                    }
              }
            }
        }
        blogs: allMdx(filter: {slug: {regex: "\/blogs\/"}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `);

    results.data.projects.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            }
        })
    })

    results.data.blogs.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blogTemplate.js`),
            context: {
                slug: node.fields.slug,
            }
        })
    })
}