import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "./work.scss"
import Header from "../components/header";
import Tag from "../components/tag";

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
      utilized
    }
  }
  allSkillsJson {
    nodes {
      id
      skills
      section
    }
  }
  allVolunteerJson {
    nodes {
      id
      description
      job
      location
      time
    }
  }
  allSchoolJson {
    nodes {
      id
      description
      achievement
      endDate
      gpa
      startDate
      school
      program
      joiningWord
      relevantCourses
      logo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;

const WorkPage = () => {
  const data = useStaticQuery(query);

  const options = { year: 'numeric', month: 'short' }
  const endDate = new Date();
  const endFormat = new Intl.DateTimeFormat('default', options).format(endDate);
  const startDate = new Date(2015, 8);
  const startFormat = new Intl.DateTimeFormat('default', options).format(startDate);

  return (
    <Layout>
      <SEO title="Professional Work" />
      <section className="work common--max-width">
        <Header text="Professional Work" isCenter={true} />
        <p className="work__description">
          I've been fortunate enough to work with some amazing companies, and my experiences with them helped
          to broaden my skills set and knowledge base. I'm proud that I have helped them raise their expectations of what Sheridan students are capable of.
        </p>
        <ul className="work__timeline" endyear={endFormat} startyear={startFormat}>
          <li className="work__timeline__event--circle--top"></li>
          {data.allWorkJson.nodes.map(w => (
            <li key={w.id} className="work__timeline__event" id={w.id}>
              <div className="work__timeline__event--circle"></div>
              <div className="work__timeline__event__details event">
                <h3 className="event__header">{w.position} <small>at</small> {w.company}</h3>
                <p className="event__dates">{w.startDate} - {w.endDate}</p>
                <p className="event__description">{w.description}</p>
                <div className="event__tags">
                  {w.utilized.map((text, i) => <Tag text={text} key={i} />)}
                </div>
              </div>
            </li>
          ))}
          <li className="work__timeline__event--circle--bottom"></li>
        </ul>
      </section>

      <section className="school--section common--max-width">
        <Header text="School" isCenter={true} />
        <ul>
          {data.allSchoolJson.nodes.map(n =>
            <li key={n.id} id={n.id} className="school--section__item">
              <Img fluid={n.logo.childImageSharp.fluid} alt={`${n.school} logo`} />
              <span className="school--section__item__name">
                <span>{n.achievement} {n.joiningWord} {n.program} at {n.school}</span>
                <br />
                <small>({n.startDate} - {n.endDate}, {n.gpa})</small>
              </span>
              <div className="school--section__item__description">
                {n.relevantCourses.map((t, i) => <Tag text={t} key={i} />)}
              </div>
              {/* <span className="school--section__item__description">{n.description}</span> */}
            </li>
          )}
        </ul>
      </section>

      <section className="skills--section common--max-width">
        <Header text="Skills" isCenter={true} />
        <div className="skills">
          {data.allSkillsJson.nodes.map(t =>
            <div className="skills__type" key={t.id}>
              <h3 className="skills__type__header">{t.section}</h3>
              <div className="skills__type__list">
                {t.skills.map((s, index) => <Tag key={index} text={s} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="volunteer--section common--max-width">
        <Header text="Volunteer" isCenter={true} />
        <ul>
          {data.allVolunteerJson.nodes.map(n =>
            <li key={n.id} className="volunteer--section__item" id={n.id}>
              <span>{n.time}</span>
              <span>{n.location}</span>
              <span className="volunteer--section__item__job">{n.job}</span>
              <span className="volunteer--section__item__description">{n.description}</span>
            </li>
          )}
        </ul>
      </section>

      <section className="work common--max-width">
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
