import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/hero";
import { graphql } from 'gatsby';
import Box from '../components/simple/box';
import TableOfContents from '../components/complex/tableOfContents';
import { HorizontalList } from '../components/simple/list';
import Title from '../components/simple/title';
import "./blogTemplate.scss";

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
            tableOfContents
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
                description={blog.frontmatter.description}>
                <script defer={true} src="/scripts/toc.js" />
            </SEO>
            <Hero title={blog.frontmatter.title}
                subTitle={blog.frontmatter.subTitle}
                tags={blog.frontmatter.tags}
                date={blog.frontmatter.publishedDate}
            />
            <div className="common common--max-width">
                <div className="common__content common--content--max-width">
                    <section className="article">
                        <article className="article__content">
                            <MDXRenderer>{blog.body}</MDXRenderer>
                        </article>
                    </section>
                    <section>
                        <Title alignment="left">Continue Reading More...</Title>
                        <HorizontalList>
                        </HorizontalList>
                    </section>
                </div>
                <div className="common--box">
                    <Box className="common--box--sticky">
                        <TableOfContents contents={blog.tableOfContents.items} />
                    </Box>
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate;