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
        projects: allMdx(filter: {slug: {regex: "\/devlog\/"}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        articles
                    }
                }
            }
        }
        blogs: allMdx(filter: {slug: {regex: "\/blogs\/"}}, sort: {order: DESC, fields: frontmatter___publishedDate}) {
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
                articles: node.frontmatter.articles.map(a => `devlog/${a}`)
            }
        })
    })

    results.data.blogs.edges.forEach(({ node }, index) => {
        let articles = [];
        // console.log(`${results.data.blogs.edges.length} > ${index + 1} = ${results.data.blogs.edges.length < index + 1}`)
        if (results.data.blogs.edges.length > index + 1) {
            articles.push(results.data.blogs.edges[index + 1].node.fields.slug.slice(1, -1))
        }
        // console.log(articles);
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blogTemplate.js`),
            context: {
                slug: node.fields.slug,
                articles: articles,
            }
        })
    })
}