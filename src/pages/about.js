import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePicture from "../components/profilePicture";
import "./about.scss";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
      query SiteAboutMeQuery {
        site {
          siteMetadata {
            aboutMe {
              details
              link
              section
            }
          }
        }
      }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
      <section className="about">
        <ProfilePicture />
        <header className="about__header">
          <h1>Nice to meet you</h1>
        </header>
        <p className="about__intro">
          My name is <strong>Alec Di Vito</strong>. I'm a creative ambitious and enterprising software engineer.
        </p>
        <p className="about__intro">
          Currently I'm looking for possible co-op opportunities for the 2020 Winter
          and Summer semesters. If you like what you see and want to work with me
          <strong><Link className="link" to="/contact">please get in touch</Link></strong>.
        </p>
        {data.site.siteMetadata.aboutMe.map( ({details, link, section}, index) => (
          <div key={index} className="about__me">
            <h3 className="about__me__header">{section}</h3>
            <ul className="about__me__details">
              {details.map( (description, i) =>
                <li key={i} className="about__me__details__item">
                  {description}
                </li>
              )}
            </ul>
            <div>
              <Link to={link} className="about__me__link link">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default AboutPage
