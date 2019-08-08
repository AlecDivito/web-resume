import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image";
import ProfilePicture from "../components/profilePicture";
import "./about.scss";
import Header from "../components/header";

const query = graphql`
query AboutMeQuery {
  allAboutJson {
    nodes {
      id
      details
      link
      section
    }
  }
}
`;

const AboutPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About Me" />
      <section className="about layout--max-width">
        <div className="about__greetings">
          <ProfilePicture />
          <div className="about__greetings__intro">
            <Header text="Nice to meet you" isCenter={true} />
            <p className="about__intro">
              My name is <strong>Alec Di Vito</strong>. I'm a creative ambitious and enterprising software engineer.
            </p>
            <p className="about__intro">
              Currently I'm looking for possible co-op opportunities for the 2020 Winter
              and Summer semesters. If you like what you see and want to work with me
              <strong><Link className="link" to="/contact">please get in touch.</Link></strong>
            </p>
          </div>
        </div>
        {data.allAboutJson.nodes.map( ({id, details, link, section}) => (
          <div key={id} className="about__me">
            <h3 className="about__me__header">{section}</h3>
            <ul className="about__me__details">
              {details.map( (description, i) =>
                <li key={i} className="about__me__details__item">
                  {description}
                </li>
              )}
            </ul>
            <div className="about__me__link">
              {(link) ?
                <Link to={link} className="about__me__link link">
                  Learn More
                </Link>
                : null
              }
            </div>
          </div>
        ))}
        <div className="about__greetings">
          <div className="about__greetings__intro">
            <Header text="That's not all I do" isCenter={true} />
            <p className="about__intro">
              I Also really really really enjoy riding my bike and helping out
              around the community. Just this summer I helped out a bike shop
              in mississauga that is run parnell with sheridan and the city of
              mississauga.
            </p>
            <p className="about__intro">
              Also I love skating and was head skate patrol at multiple different
              rinks around mississauga growing up. Really love the GTA and can't wait to
              do more.
            </p>
          </div>
          <Image />
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage
