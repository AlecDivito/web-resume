import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/hero";
import Box from "../components/simple/box"
import Layout from "../components/layout";
import SEO from "../components/seo"
import Title from "../components/simple/title";
import Widget from "../components/widget";
import SocialLink from "../components/simple/socialLink";
import "./index.scss";

const query = graphql`
  query HomePageData {
    work: allWorkJson {
      nodes {
        id
        company
        position
        startDate
        endDate
        utilized
        description
        logo {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
        achievement
        endDate
        gpa
        startDate
        school
        program
        logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allProjectsJson {
      nodes {
        id
        siteLink
        shortDescription
        title
        stage
        status
        githubLink
        technologies
        blogPost
        logo {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
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
    external: allExternalNavJson {
      nodes {
        id
        image
        link
        type
        alt
      }
    }
    file (relativePath: { eq: "images/index/alec.png" }) {
      childImageSharp {
        fluid(maxWidth: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Alec Di Vito"
        subTitle="You dream it, And I'll build it"
        tags={["Wasm Expert", "Cloud", "Full stack"]}
        readMoreLink="/about"
        readMoreText="Learn about me"
      >
        <Img fluid={data.file.childImageSharp.fluid}
          alt="Alec Divito 3D Profile Picture" />
      </Hero>
      <div className="common common--max-width">
        <div className="common__content common--content--max-width">
          <Title varient="h2" className="home__section__title">Projects</Title>
          <section className="home__section home--projects">
            {data.allProjectsJson.nodes.map(p =>
              <Widget title={p.title}
                key={p.id}
                subTitle={p.shortDescription}
                tags={p.technologies}
                status={p.status}
                logo={<Img fixed={p.logo.childImageSharp.fixed} style={{ borderRadius: '100%' }} alt={p.company} />}
                readMore={(p.blogPost) ? p.blogPost : `/personal#${p.id}`}
              />
            )}
          </section>

          <Title varient="h2" className="home__section__title">Blog Posts</Title>
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

          <Title varient="h2" className="home__section__title">Work</Title>
          <section className="home__section home--projects">
            {data.work.nodes.map(w =>
              <Widget title={w.position}
                key={w.id}
                subTitle={w.company}
                description={w.description}
                tags={w.utilized}
                date={`${w.startDate}-${w.endDate}`}
                logo={<Img fixed={w.logo.childImageSharp.fixed} style={{ borderRadius: '100%' }} alt={w.company} />}
              />
            )}
          </section>
        </div>
        <div className="common--box">
          <Box className="common--box--sticky">
            <div className="home__section__list">
              {data.external.nodes.map((e) =>
                <SocialLink key={e.id} {...e} className="home__section__list__item" />
              )}
            </div>
          </Box>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
