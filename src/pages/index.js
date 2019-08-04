import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <header className="home__header">
          <h1 className="home__header--name">Alec Di Vito</h1>
          <h3 className="home__header--title">Full Stack Web Developer</h3>
        </header>
        <section className="home__section">
          <p className="home__section__description">
            Hi there! I produce elegant, performance and accessible digital
            experiences
          </p>
          <div className="home__header__links">
            <Link to="/projects/">explore projects</Link>
            <Link to="/about/">view profile</Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
