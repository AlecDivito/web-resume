import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Box from "../components/simple/box";
import Hero from "../components/hero";
import SocialLinks from "../components/data/socialLinks";
import Card from '../components/complex/card';
import "./devlog.scss";

const DevlogPage = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <Hero
            title="Development Log"
            subTitle="Public document that keeps tabs on my current projects"
            tags={["Development", "Problems", "Challeneges"]} />
        <div className="common common--max-width">
            <div className="personal common__content common--content--max-width">
                {data.allProjectsJson.nodes.map((p) =>
                    <div className="personal__section">
                        <Card
                            image={<Img className="card__image" fluid={p.image.childImageSharp.fluid} />}
                            title={p.title}
                            description={p.description}
                            status={p.status}
                            tags={p.technologies}
                            site={p.siteLink}
                            github={p.githubLink}
                            readMore={p.blogPost}
                        />
                    </div>
                )}
            </div>
            <div className="common--box">
                <Box className="common--box--sticky">
                    <SocialLinks />
                </Box>
            </div>
        </div>
    </Layout>
);

export const query = graphql`
query GetPersonalProjectsData {
    allProjectsJson {
        nodes {
            id
            status
            title
            status
            technologies
            description
            blogPost
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            logo {
                childImageSharp {
                  fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            githubLink
            siteLink
        }
    }
}
`

export default DevlogPage;