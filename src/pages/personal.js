import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./personal.scss";
import Header from "../components/header";

const query = graphql`
query GetPersonalProjectsData {
    allProjectsJson {
        nodes {
            id
            githubLink
            picId
            siteLink
            stage
            technologies
            title
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`

const PersonalsPage = () => {
    const data = useStaticQuery(query)
    console.log(data);
    return (
        <Layout>
            <SEO title="Projects" />
            <section className="personal layout--max-width">
                <Header text="Featured Personal Projects" isCenter={true} />
                <p className="personal__description">These are the projects that I'm most proud of and like to show off!</p>
                <div className="personal__cards">
                {data.allProjectsJson.nodes.map((t) =>
                    <div className="card" key={t.id} >
                        <Img className="card__image" fluid={t.image.childImageSharp.fluid} />
                        <div className="card__content">
                            <div className="card__header">
                                <h3>{t.title}</h3>
                                <h5>{t.stage}</h5>
                            </div>
                            <div className="card__footer">
                                <div className="card__footer__tags">
                                    {t.technologies.map((tag, i) => <span className="tag" key={i} >{tag}</span>)}
                                </div>
                                <div className="card__footer__links">
                                    {(t.siteLink)
                                        ? <a href={t.siteLink} target="_blank" rel="noopener noreferrer">
                                            <img className="card__footer__links__link" alt="Site Url for title" src="/svgs/link.svg" />
                                        </a>
                                        : null
                                    }
                                    {(t.githubLink)
                                        ? <a href={t.githubLink} target="_blank" rel="noopener noreferrer">
                                            <img className="card__footer__links__link" alt="Github Url for title" src="/svgs/github-square.svg" />
                                        </a>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                    <div className="card">
                        View Work
                    </div>
                </div>
            </section>
            <section className="personal layout--max-width">
                <Header text="Other Personal Project" isCenter={true} />
                <p className="personal__description">
                    These are projects I worked on when I was younger and less experienced
                    or just weren't able to fully finish
                </p>
            </section>
        </Layout>
    )
};

export default PersonalsPage;