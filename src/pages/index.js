import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss";

const IndexPage = () => {

  const update = () => {

  }

  requestAnimationFrame(update);

  return (
    <Layout>
      <SEO title="Home" />
      <canvas className="home--background"></canvas>
      <div className="home">
        <div></div>
        <header className="home__header">
          <h1 className="home__header--name">
            Alec Di<span className="home__header--name--space">Vito</span>
          </h1>
          <h3 className="home__header--title">Full Stack Web Developer</h3>
          <p className="home__section__description">
            Hi there! I produce elegant, performance and accessible digital
            experiences
          </p>
        </header>
        <section className="home__section">
          <div className="home__section__links">
            <Link className="home__section__links--link link" to="/personal/">explore projects</Link>
            <Link className="home__section__links--link link" to="/about/">view profile</Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
