import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/hero";
import Box from "../components/simple/box"
import Layout from "../components/layout";
import SEO from "../components/seo"
import Title from "../components/simple/title";
import Widget from "../components/widget";
import SocialLinks from "../components/data/socialLinks";
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
          <Title varient="h2" className="home__section__title">Hi There...</Title>
          <section className="home__section home--projects home__section--bm">
            <p>
              I'm Alec, a student and developer. I'm interested in full stack
              web development but also want to do some app development one day.
              I believe the web is the future and web based apps will one day
              be the only technology people use. I've used Kubernetes and can
              say that I don't see it as the future. Serverless technology is
              here and it's here to stay. Once stateful, open source serverless
              frameworks are cheap and here, people will slowly move over all new
              applications.
            </p>
            <p>
              This website is for me to keep better tabs on my projects and keep
              my history of all my work projects. Basically its for documentation.
              Hope you enjoy reading some of the content.
            </p>
          </section>

          <Title varient="h2" className="home__section__title">Projects</Title>
          <section className="home__section home--projects">
            {data.allProjectsJson.nodes.map(p =>
              <Widget title={p.title}
                key={p.id}
                subTitle={p.shortDescription}
                tags={p.technologies}
                status={p.status}
                logo={<Img fixed={p.logo.childImageSharp.fixed} style={{ borderRadius: '100%' }} alt={p.company} />}
                readMore={p.blogPost}
              />
            )}
          </section>

          <Title varient="h2" className="home__section__title">Blog</Title>
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
            <SocialLinks />
          </Box>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
