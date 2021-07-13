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
              I'm Alec, a developer first and a student second. I'm very experinced
              in full stack web development and have an interest in cloud computing.
              Thank you for visiting my website. I've spent a lot of time and a
              lot of love trying to get things right so I hope you enjoy the
              experince. If you want to see some of my work check out some of
              my <Link to="/devlog">projects</Link>, if you want to learn more
              about me and my interests checkout my <Link to="blog">blog</Link> and
              if you are intrested in hiring me then you can checkout my <a target="_blank" rel="nofollow" href="/2021-Jan-AlecDivito-Resume.pdf">resume</a>.
            </Paragraph>
            <Paragraph>
              If you are not sure about what to read first, I would recommed reading
              about how I <Link to="/devlog/website-update-1">updated this website.</Link>
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
                readMore={p.blogPost.map(b => b.content)[0] ?? null}
                boxed={true}
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
          <Section title="School">
            {data.school.nodes.map(w =>
              <Widget title={w.program}
                key={w.id}
                subTitle={w.school}
                description={w.description}
                // tags={w.utilized}
                date={`${w.startDate}-${w.endDate}`}
                logo={<Img fixed={w.logo.childImageSharp.fixed} style={{ borderRadius: '100%' }} alt={w.school} />}
              />
            )}
          </Section>
          <Section title="Volunteer">
            {data.volunteer.nodes.map(w =>
              <Widget title={w.job}
                key={w.id}
                subTitle={w.location}
                description={w.description}
                date={w.time}
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
    volunteer: allVolunteerJson {
      nodes {
        id
        description
        job
        location
        time
      }
    }
    school: allSchoolJson {
      nodes {
        id
        achievement
        endDate
        gpa
        startDate
        school
        program
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
        blogPost {
          content
          year
          month
          day
        }
        logo {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    blogs: allMdx(filter: {slug: {regex: "/blogs/"}}, sort: {order: DESC, fields: frontmatter___publishedDate}) {
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

export default IndexPage
