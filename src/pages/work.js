import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby";
import "./work.scss"
import Header from "../components/header";

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query SiteWorkQuery {
      site {
        siteMetadata {
          work {
            startDate
            endDate
            company
            position
            description
          }
        }
      }
    }
  `);

  const options = { year: 'numeric', month: 'short'}
  const endDate = new Date();
  const endFormat = new Intl.DateTimeFormat('default', options).format(endDate);
  const startDate = new Date(2015, 8);
  const startFormat = new Intl.DateTimeFormat('default', options).format(startDate);
  
  return (
    <Layout>
      <SEO title="Professional Work" />
      <section className="work layout--max-width">
        <Header text="Professional Work" isCenter={true} />
        <p className="work__description">
          I've been fortunate enough to work with some companies amazing companies
          and I'm proud that I have helped them exceed their expectations of sheridan students.
        </p>
        <ul className="work__timeline" endyear={endFormat} startyear={startFormat}>
          <li className="work__timeline__event--circle--top"></li>
          {data.site.siteMetadata.work.map( (w, i) => (
            <li key={i} className="work__timeline__event">
              <div className="work__timeline__event--circle"></div>
              <div className="work__timeline__event__details">
                <h3 className="event__header">{w.position} <small>at</small> {w.company}</h3>
                <p className="event__dates">{w.startDate} - {w.endDate}</p>
                <p className="event__description">{w.description}</p>
              </div>
            </li>
          ))}
          <li className="work__timeline__event--circle--bottom"></li>
        </ul>
      </section>
      <section className="work layout--max-width">
        <Header text="Resume Download" isCenter={true} />
        <p className="work__description">
          If you're a digital or design agency, recruiter or just interested in
          a hard copy of my resume as a PDF you can download it clicking the
          button below.
        </p>
        <div className="work__btn">
          <a className="link" href="AlecDivito-resume.pdf">Download PDF</a>
        </div>
      </section>
    </Layout>
  );
}

export default WorkPage;
