import React from 'react';
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from 'gatsby';
import { HorizontalList } from '../components/simple/list';
import Hero from "../components/hero";
import TableOfContents from '../components/complex/tableOfContents';
import Img from "gatsby-image";
import Layout from "../components/layout";
import Article from '../components/simple/article';
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import LinkedArticle from '../components/simple/linkedArticle';

export const query = graphql`
    query($slug: String!, $articles: [String!]) {
        allMdx(filter: { slug: {in: $articles}}) {
            nodes {
                slug
                frontmatter {
                    title
                    subTitle
                }
            }
        }        
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                publishedDate
                title
                subTitle
                tags
                description
                images {
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
    const articles = data.allMdx;
    let images = {};
    if (blog.frontmatter.images) {
        blog.frontmatter.images.forEach((image, i) => {
            const { childImageSharp } = image;
            let name = childImageSharp.fluid.originalName.split(".")[0];
            let component = ({ alt, caption }) => (
                <figure>
                    <Img fluid={childImageSharp.fluid} alt={alt} />
                    {(caption && caption.length > 0)
                        ? <figcaption>{caption}</figcaption>
                        : null
                    }
                </figure>
            )
            // if we have a childImageShape, we can just get the name normally
            images[name] = component;
        });
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
                        <MDXRenderer images={images}>{blog.body}</MDXRenderer>
                    </Article>
                    <Section title="Continue Reading More..." className="section--tm">
                        <HorizontalList>
                            {articles.nodes.map(item =>
                                <LinkedArticle to={`/${item.slug}`}
                                    key={item.slug}
                                    title={item.frontmatter.title}
                                    description={item.frontmatter.subTitle} />
                            )}
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