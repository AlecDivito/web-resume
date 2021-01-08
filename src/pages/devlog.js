import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Title from "../components/simple/title";
import Box from "../components/simple/box";
import Hero from "../components/hero";
import "./devlog.scss";
import Widget from "../components/widget";
import SocialLinks from "../components/data/socialLinks";

const DevlogPage = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <Hero
            title="Development Log"
            subTitle="Public document that keeps tabs on my current projects"
            tags={["Development", "Problems", "Challeneges"]} />
        <div className="common common--max-width">
            <div className="common__content common--content--max-width">
                <Title variant="h2">2020</Title>
                {data.allProjectsJson.nodes.map((p) =>
                    <section>
                        <Img className="card__image" fluid={p.image.childImageSharp.fluid} />
                        <Widget title={p.title}
                            key={p.id}
                            description={p.description}
                            tags={p.technologies}
                            status={p.status}
                            logo={<Img fixed={p.logo.childImageSharp.fixed} style={{ borderRadius: '100%' }} alt={p.company} />}
                            readMore={(p.blogPost) ? p.blogPost : `/personal#${p.id}`}
                        />
                    </section>
                )}
            </div>
            <div className="common--box">
                <Box className="common--box--sticky">
                    <SocialLinks />
                </Box>
            </div>
        </div>
        {/* <section className="personal common--max-width">
            <Header text="Personal Projects" isCenter={true} />
            <p className="personal__description">These are the projects that I'm most proud of and like to show off!</p>
            <div className="personal__cards">
                {data.allProjectsJson.nodes.map((t) =>
                    <div className="card" key={t.id} >
                        {(t.blogPost) ?
                            <a href={t.blogPost}>
                                <Img className="card__image" fluid={t.image.childImageSharp.fluid} />
                            </a>
                            :
                            <span className="card__image--no-link">
                                <Img className="card__image" fluid={t.image.childImageSharp.fluid} />
                            </span>
                        }
                        <div className="card__content">
                            <div className="card__content__header">
                                <h3>{t.title}</h3>
                                <div className="card__content__header--flex">
                                    <StatusDot status={t.status} />
                                    <h5>{t.stage}</h5>
                                </div>
                            </div>
                            <p>
                                {t.description}
                            </p>
                            <h5 className="card__content__title--secondary">Technologies</h5>
                            <div className="card__content__tags">
                                {t.technologies.map((tag, i) => <Tag text={tag} key={i} />)}
                            </div>
                            <div className="card__content__footer">
                                {(t.blogPost) ?
                                    <Link className="link--button" to={t.blogPost}>Learn more...</Link>
                                    : <span></span>
                                }
                                <div className="card__content__footer__links">
                                    {(t.siteLink)
                                        ? <a href={t.siteLink} target="_blank" rel="noopener noreferrer">
                                            <img className="card__content__footer__links__link" alt="Site Url for title" src="/svgs/link.svg" />
                                        </a>
                                        : null
                                    }
                                    {(t.githubLink)
                                        ? <a href={t.githubLink} target="_blank" rel="noopener noreferrer">
                                            <img className="card__content__footer__links__link" alt="Github Url for title" src="/svgs/github-square.svg" />
                                        </a>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )} 
            </div>
        </section>*/}
        {/* <section className="personal common--max-width">
                <Header text="Other Personal Project" isCenter={true} />
                <p className="personal__description">
                    These are projects I worked on when I was younger and less experienced
                    or just weren't able to fully finish
                </p>
            </section> */}
    </Layout>

);

export const query = graphql`
query GetPersonalProjectsData {
    allProjectsJson {
        nodes {
            id
            stage
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