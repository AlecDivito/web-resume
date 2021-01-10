import React from 'react';
import SEO from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import { HorizontalList } from '../components/simple/list';
import Hero from "../components/hero";
import TableOfContents from '../components/complex/tableOfContents';
import Img from "gatsby-image";
import Title from '../components/simple/title';
import Layout from "../components/layout";
import Article from '../components/simple/article';
import Section from '../components/simple/section';
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import LinkedArticle from '../components/simple/linkedArticle';
import "./blog.styles.scss";


export const query = graphql`
    query($slug: String!, $articles: [String!]) {
        allMdx(filter: { slug: {in: $articles}}) {
            nodes {
                slug
                frontmatter {
                    project
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
                startDate
                endDate
                totalTime
                articles
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

const ProjectTemplate = ({ data }) => {
    const project = data.mdx;
    const articles = data.allMdx;
    let images = {};
    if (project.frontmatter.images) {
        project.frontmatter.images.forEach((image, i) => {
            const { childImageSharp, publicURL } = image;
            // public urls normally look like: "/static/gradient_bicubic-676f728568c6798ea9686d6a6ef2c3e8.bmp"
            // we want to try and get "gradient_bicubic"
            let name = "";
            let component;
            if (childImageSharp != null) {
                name = childImageSharp.fluid.originalName.split(".")[0];
                component = ({ alt, caption }) => (
                    <figure>
                        <Img fluid={childImageSharp.fluid} alt={alt} />
                        {(caption && caption.length > 0)
                            ? <figcaption>{caption}</figcaption>
                            : null
                        }
                    </figure>
                )
            } else {
                let publicUrlName = publicURL.split("/");
                let filename = publicUrlName[publicUrlName.length - 1].split("-")[0];
                // Remove the filename extensen
                name = filename.split(".")[0];
                component = ({ alt, caption }) => (
                    <figure>
                        <img className="image--child" src={publicURL} alt={alt} />
                        {(caption && caption.length > 0)
                            ? <figcaption>{caption}</figcaption>
                            : null
                        }
                    </figure>
                )
            }
            // if we have a childImageShape, we can just get the name normally
            images[name] = component;
        });
    }

    return (
        <Layout>
            <SEO title={project.frontmatter.title}>
                <script defer={true} src="/scripts/toc.js" />
            </SEO>
            <Hero title={project.frontmatter.title}
                subTitle={project.frontmatter.subTitle}
                tags={project.frontmatter.tags}
                date={project.frontmatter.publishedDate}
                className="post"
            />
            <Common>
                <CommonRight>
                    <Article>
                        {/* <Header text={project.frontmatter.title} isCenter={true} />
                        <h3 className="project__header">
                            <span className="project__header--text">
                                <img src="/svgs/time.svg" alt="time icon" />
                                <span>{project.frontmatter.startDate}</span>
                                <img src="/svgs/right-arrow.svg" alt="right arrow" />
                                <span>{project.frontmatter.endDate}</span>
                            </span>
                            <span className="project__header--text left">
                                {project.frontmatter.totalTime}
                            </span>
                        </h3> */}
                        <MDXRenderer images={images} >{project.body}</MDXRenderer>
                    </Article>
                    <Section title="Continue Reading More...">
                        <Title className="common--bm" alignment="left"></Title>
                        <HorizontalList>
                            {articles.nodes.map(item =>
                                <LinkedArticle to={`/${item.slug}`}
                                    title={item.frontmatter.project} description={item.frontmatter.subTitle} />
                            )}
                        </HorizontalList>
                    </Section>
                </CommonRight>
                <CommonLeft>
                    <TableOfContents contents={project.tableOfContents.items} />
                </CommonLeft>
            </Common>
        </Layout>
    );
};

export default ProjectTemplate;