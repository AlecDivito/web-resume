import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Hero from "../components/hero";
import SocialLinks from "../components/data/socialLinks";
import Card from '../components/complex/card';
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";

const DevlogPage = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <Hero
            title="Dev Log"
            subTitle="Public documents on past and present projects"
            tags={["Development", "Problems", "Challeneges"]} />
        <Common>
            <CommonRight>
                <Section title="Projects">
                    {data.allProjectsJson.nodes.map((p) =>
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
                    )}
                </Section>
            </CommonRight>
            <CommonLeft>
                <SocialLinks />
            </CommonLeft>
        </Common>
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