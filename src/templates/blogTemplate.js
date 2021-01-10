import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Hero from "../components/hero";
import { graphql } from 'gatsby';
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import TableOfContents from '../components/complex/tableOfContents';
import { HorizontalList } from '../components/simple/list';
import Article from '../components/simple/article';
import "./blog.styles.scss";

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
                className="post"
            />
            <Common>
                <CommonRight>
                    <Article>
                        <MDXRenderer>{blog.body}</MDXRenderer>
                    </Article>
                    <Section title="Continue Reading More...">
                        <HorizontalList>
                        </HorizontalList>
                    </Section>
                </CommonRight>
                <CommonLeft>
                    <TableOfContents contents={blog.tableOfContents.items} />
                </CommonLeft>
            </Common>
        </Layout>
    )
}

export default BlogTemplate;