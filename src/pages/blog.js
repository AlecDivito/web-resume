import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Box from "../components/simple/box";
import Widget from "../components/widget";
import Title from "../components/simple/title";
import "./blog.scss";
import SocialLinks from "../components/data/socialLinks"

const BlogDirectoryPage = ({ data }) => (
  <Layout>
    <SEO title="Alec Di Vito Blog" />
    <Hero
      title="Blog"
      subTitle="I thought it, so I wrote it"
      tags={["Thesis", "Interests", "Rabit Holes"]} />
    <div className="common common--max-width">
      <div className="common__content common--content--max-width">
        <Title variant="h2">2020</Title>
        <section className="home__section home--projects">
          {data.blogs.edges.map(b =>
            <Widget title={b.node.frontmatter.title}
              key={b.node.id}
              tags={b.node.frontmatter.tags}
              readMore={b.node.fields.slug}
              description={b.node.frontmatter.description}
              date={b.node.frontmatter.publishedDate}
            />
          )}
        </section>
        <section>
          <Title variant="h2">More coming soon!!</Title>
        </section>
      </div>
      <div className="common--box">
        <Box className="common--box--sticky">
          <SocialLinks />
        </Box>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
query BlogPageData {
  blogs: allMdx(filter: {slug: {regex: "/blogs/"}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          totalTime
          tags
          description
          publishedDate
        }
        id
      }
    }
  }
}
`

export default BlogDirectoryPage
