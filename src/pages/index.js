import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/hero";
import Layout from "../components/layout";
import SEO from "../components/seo"
import Widget from "../components/widget";
import SocialLinks from "../components/data/socialLinks";
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import Paragraph from "../components/simple/paragraph";

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
      <Common>
        <CommonRight>
          <Section title="Hi There...">
            <Paragraph>
              I'm Alec, a developer first and a student second. I'm very experinced in
              in full stack web development and have an interest in cloud computing.
              Thank you for visiting my website. I've spent a lot of time and a
              lot of love trying to get things right so I hope you enjoy the
              experince. If you want to see some of my work check out some of
              my <Link to="/devlog">projects</Link>, if you want to learn more
              about me and my interests checkout my<Link to="blog">blog</Link>
              and if you are intrested in highering me then you can checkout my
              <a target="_blank" rel="nofollow" href="/2021-Jan-AlecDivito-Resume.pdf">resume</a>.
            </Paragraph>
            <Paragraph>
              This website was made for me to keep better tabs on my projects
              and to learn how to track my work and desisions better. Basically
              its for documentation. Hope you enjoy it.
            </Paragraph>
          </Section>
          <Section title="Projects">
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
          </Section>
          <Section title="Blog">
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
          <Section title="Work">
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
          </Section>
        </CommonRight>
        <CommonLeft>
          <SocialLinks />
        </CommonLeft>
      </Common>
    </Layout >
  )
}

export default IndexPage
