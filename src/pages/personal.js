import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import githubIcon from "../images/github-square.svg";
import "./personal.scss";
import Header from "../components/header";

const PersonalsPage = () => {
    const data = useStaticQuery(graphql`
        query SitePersonalPageQuery {
            site {
                siteMetadata {
                    personalProjects {
                        picId
                        title
                        stage
                        technologies
                        githubLink
                    }
                }
            }
            budgetise: file(relativePath: { eq: "budgetise.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bombFinder: file(relativePath: { eq: "bomb-finder.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bitmap: file(relativePath: { eq: "bitmap_logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tetris: file(relativePath: { eq: "tetris.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            personalWebsite: file(relativePath: { eq: "PersonalWebsite.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <SEO title="Projects" />
            <div className="personal">
                <Header text="Featured Personal Projects" isCenter={true} />
                <p>These are the projects that I'm most proud of and like to show off!</p>
                <div>
                {data.site.siteMetadata.personalProjects.map((t, i) =>
                    <div className="card" key={i} >
                        <Img
                            css={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            style={{ position: `absolute`, borderRadius: "10px", filter: `blur(1px) brightness(30%)`, width: `100%`, height: `100%`}}
                            fluid={data[t.picId].childImageSharp.fluid}
                        />
                        <div className="card__content">
                            <div className="card__header">
                                <h3>{t.title}</h3>
                                <h5>{t.stage}</h5>
                            </div>
                            <div className="card__footer">
                                <div className="card__footer__tags">
                                    {t.technologies.map((t, i) => <span className="tag" key={i} >{t}</span>)}
                                </div>
                                {(t.githubLink)
                                    ? <a href={t.githubLink} target="_blank" rel="noopener noreferrer">
                                        <img className="card__footer__link" alt="Github Url for title" src={githubIcon} />
                                    </a>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <Header text="Other Personal Project" isCenter={true} />
                <p>
                    These are projects I worked on when I was younger and less experienced
                    or just weren't able to fully finish
                </p>
            </div>
        </Layout>
    )
};

export default PersonalsPage;