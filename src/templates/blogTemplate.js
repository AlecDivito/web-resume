import React from 'React';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/hero";
import { graphql } from 'gatsby';
import "./blogTemplate.scss"

export const query = graphql`
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                publishedDate
                title
                subTitle
                tags
                description
                images {
                    publicURL
                    childImageSharp {
                        fluid {
                            base64
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
            fields {
                slug
            }
            body
        }
    }
`;

const BlogTemplate = ({ data }) => {
    const blog = data.mdx;
    if (blog.frontmatter.images) {
        // if there are images, oh well. Right now i'm not handling that
        // Checkout project template to learn how to do it.
    }

    return (
        <Layout>
            <SEO title={blog.frontmatter.title}
                description={blog.frontmatter.description} />
            <section className="article">
                <Hero title={blog.frontmatter.title}
                    subTitle={blog.frontmatter.subTitle}
                    tags={blog.frontmatter.tags}
                    date={blog.frontmatter.publishedDate}
                />
                <article className="article__content common--max-width">
                    <MDXRenderer>{blog.body}</MDXRenderer>
                </article>
            </section>
        </Layout>
    )
}

export default BlogTemplate;