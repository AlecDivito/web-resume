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
            // public urls normally look like: "/static/gradient_bicubic-676f728568c6798ea9686d6a6ef2c3e8.bmp"
            // we want to try and get "gradient_bicubic"
            let publicUrlName = publicURL.split("/");
            let name = publicUrlName[publicUrlName.length - 1].split("-")[0];
            // if we have a childImageShape, we can just get the name normally
            if (childImageSharp != null) {
                name = childImageSharp.fluid.originalName.split(".")[0];
            }
            images[name] = ({ alt, caption }) =>
                (childImageSharp != null)
                    ? <Img fluid={childImageSharp.fluid} alt={alt} />
                    : <img className="image--child" src={publicURL} alt={alt}/>;
        });
    }

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