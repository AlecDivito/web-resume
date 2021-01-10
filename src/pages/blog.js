import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Widget from "../components/widget";
import SocialLinks from "../components/data/socialLinks";
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";


const BlogDirectoryPage = ({ data }) => (
  <Layout>
    <SEO title="Alec Di Vito Blog" />
    <Hero
      title="Blog"
      subTitle="I thought it, so I wrote it"
      tags={["Thesis", "Interests", "Rabit Holes"]} />
    <Common>
      <CommonRight>
        <Section title="2020">
          {data.blogs.edges.map(b =>
            <Widget title={b.node.frontmatter.title}
              key={b.node.id}
              tags={b.node.frontmatter.tags}
              readMore={b.node.fields.slug}
              description={b.node.frontmatter.description}
              date={b.node.frontmatter.publishedDate}
            />
          )}
        </Section>
        <Section title="More coming soon!!" />
      </CommonRight>
      <CommonLeft>
        <SocialLinks />
      </CommonLeft>
    </Common>
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
