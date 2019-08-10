import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from "../components/header";
import Layout from "../components/layout";
import "./project.scss";

const ProjectTemplate = ({data}) => {
    const project = data.mdx;
    return (
        <Layout>
            <section className="project layout--max-width">
                <Header text={project.frontmatter.title} isCenter={true} />
                <h3>{project.frontmatter.author}</h3> - {project.frontmatter.date}
                <div className="project__content">
                    <MDXRenderer  >{project.body}</MDXRenderer>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                date
                title
            }
            fields {
                slug
            }
            body
        }
    }
`;

export default ProjectTemplate;