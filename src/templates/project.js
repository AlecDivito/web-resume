import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import Img from "gatsby-image";
import Header from "../components/header";
import Layout from "../components/layout";
import "./project.scss";

export const query = graphql`
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                startDate
                endDate
                totalTime
                title
                next
                previous
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

const Navigation = ({ textRight, textLeft }) => (
    <div className="project__nav">
        {(textRight !== "")
            ? <Link className="project__nav--link link" to={`/personal/${textRight}`}>
                <img className="img" src="/svgs/left-arrow.svg" alt="left arrow" />
                {textRight}
            </Link>
            : <div />
        }
        {(textLeft !== "")
            ? <Link className="project__nav--link link" to={`/personal/${textLeft}`}>
                {textLeft}
                <img className="img" src="/svgs/right-arrow.svg" alt="right arrow" />
            </Link>
            : <div />
        }
    </div>
)

const ProjectTemplate = ({data}) => {    
    const project = data.mdx;
    let images = {};
    if (project.frontmatter.images) {
        project.frontmatter.images.forEach((image, i) => {
            const { childImageSharp, publicURL } = image;
            // public urls normally look like: "/static/gradient_bicubic-676f728568c6798ea9686d6a6ef2c3e8.bmp"
            // we want to try and get "gradient_bicubic"
            let publicUrlName = publicURL.split("/");
            let name = publicUrlName[publicUrlName.length - 1].split("-")[0];
            // if we have a childImageShape, we can just get the name normally
            if (childImageSharp != null) {
                name = childImageSharp.fluid.originalName.split(".")[0];
            }
            images[name] = ({ alt, caption }) => (
                <figure>
                {(childImageSharp != null)
                    ? <Img fluid={childImageSharp.fluid} alt={alt} />
                    : <img className="image--child" src={publicURL} alt={alt}/>
                }
                {(caption && caption.length > 0)
                    ? <figcaption>{caption}</figcaption>
                    : null
                }
                </figure>
            )
        });
    }

    return (
        <Layout>
            <SEO title={project.frontmatter.title} />
            <section className="project layout--max-width">
                {/* <Navigation textRight={project.frontmatter.next} textLeft={project.frontmatter.previous} /> */}
                <Header text={project.frontmatter.title} isCenter={true} />
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
                </h3>
                <article className="project__content">
                    <MDXRenderer images={images} >{project.body}</MDXRenderer>
                </article>
                <Navigation textRight={project.frontmatter.next} textLeft={project.frontmatter.previous} />
            </section>
        </Layout>
    );
};

export default ProjectTemplate;