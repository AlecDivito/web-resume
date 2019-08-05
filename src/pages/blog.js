import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.scss";
import Header from "../components/header";

const BlogDirectoryPage = () => (
  <Layout>
    <SEO title="Alec's Personal Blog" />
    <section className="blog">
      <Header text="Hey, The blog is under construction!" isCenter={true} />
      <p>
        Sorry for the inconvenience, currently the site is still being built
        and all the main small kinks are still being worked out. I'm hopping to
        have it operational before september 2019.
      </p>
      <p>
        If you wondering what will be written in the blog, I'll mostly be focusing
        on mathematic topic I learn (which will probably be basic and used as a
        way to keep me studying) and on case studies of some of my web designs
        and the steps I take to make my web pages look good or at least decent.
      </p>
    </section>
  </Layout>
)

export default BlogDirectoryPage
