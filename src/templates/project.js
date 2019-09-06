import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image";
import Header from "../components/header";
import Layout from "../components/layout";
import "./project.scss";

export const query = graphql`
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                date
                title
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

const ProjectTemplate = ({data}) => {    
    const project = data.mdx;
    let images = {};
    if (project.frontmatter.images) {
        project.frontmatter.images.forEach((image, i) => {
            const { childImageSharp, publicURL } = image;
            const { fluid } = childImageSharp;
            const name = fluid.originalName.split(".");
            console.log(name);
            images[name[0]] = () =>
               fluid ? (
                <Img fluid={fluid} />
                ) : (
                <img src={publicURL || ''} />
            );
        });
    }
    console.log(images);

    return (
        <Layout>
            <section className="project layout--max-width">
                <Header text={project.frontmatter.title} isCenter={true} />
                <h3>{project.frontmatter.author}</h3> - {project.frontmatter.date}
                <div className="project__content">
                    <MDXRenderer images={images} >{project.body}</MDXRenderer>
                </div>
            </section>
        </Layout>
    );
};

export default ProjectTemplate;