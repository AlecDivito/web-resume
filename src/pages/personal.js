import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./personal.scss";
import Header from "../components/header";
import StatusDot from "../components/statusDot";
import Tag from "../components/tag";

const query = graphql`
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
            githubLink
            siteLink
        }
    }
}
`

const PersonalsPage = () => {
    const data = useStaticQuery(query)

    return (
        <Layout>
            <SEO title="Projects" />
            <section className="personal layout--max-width">
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
                    {/* <div className="card">
                        View Work
                    </div> */}
                </div>
            </section>
            {/* <section className="personal layout--max-width">
                <Header text="Other Personal Project" isCenter={true} />
                <p className="personal__description">
                    These are projects I worked on when I was younger and less experienced
                    or just weren't able to fully finish
                </p>
            </section> */}
        </Layout>
    )
};

export default PersonalsPage;