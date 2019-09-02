import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby";
import "./work.scss"
import Header from "../components/header";

const query = graphql`
query GetWorkData {
  allWorkJson {
    nodes {
      company
      description
      endDate
      id
      position
      startDate
    }
  }
  allSkillsJson {
    nodes {
      id
      skills
      section
    }
  }
}
`;

const WorkPage = () => {
  const data = useStaticQuery(query);

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
          I've been fortunate enough to work with some amazing companies, and my experiences with them helped
          to broaden my skills set and knowledge base. I'm proud that I have helped them raise their expectations of what Sheridan students are capable of.
        </p>
        <ul className="work__timeline" endyear={endFormat} startyear={startFormat}>
          <li className="work__timeline__event--circle--top"></li>
          {data.allWorkJson.nodes.map( w => (
            <li key={w.id} className="work__timeline__event">
              <div className="work__timeline__event--circle"></div>
              <div className="work__timeline__event__details event">
                <h3 className="event__header">{w.position} <small>at</small> {w.company}</h3>
                <p className="event__dates">{w.startDate} - {w.endDate}</p>
                <p className="event__description">{w.description}</p>
              </div>
            </li>
          ))}
          <li className="work__timeline__event--circle--bottom"></li>
        </ul>
      </section>
      
      <section className="skills--section layout--max-width">
        <Header text="Skills" isCenter={true} />
        <div className="skills">
          {data.allSkillsJson.nodes.map(t =>
            <div className="skills__type" key={t.id}>
              <h3 className="skills__type__header">{t.section}</h3>
              <ul className="skills__type__list">
                {t.skills.map((s, index) =>
                  <li key={index}>{s}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="work layout--max-width">
        <Header text="Resume Download" isCenter={true} />
        <p className="work__description work__description--resume">
          If you're a digital or design agency, recruiter or just interested in
          a hard copy of my resume as a PDF you can download it clicking the
          button below.
        </p>
        <p className="work__description work__description--resume">
            If you want to know who I am as a person check out my
            <Link className="link link--default-color" to="/about"> about page.</Link>
        </p>
        <div className="work__btn">
          <a className="link link--default-color"
            rel="noopener noreferrer"
            href="AlecDivito-resume.pdf" target="_blank">
              Download PDF
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default WorkPage;
