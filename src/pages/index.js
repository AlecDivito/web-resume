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

/**
 * Render a storm of particles that are really pretty
 */
class Particles {

  /**
   * Create a class to handle particle updating and rendering
   * 
   * @param {HTMLCanvasElement} canvas to render
   * @param {int} maxParticles number of particles to render
   */
  constructor(canvas, maxParticles) {
    if (!canvas) {
      throw new Error('Couldn\'t create particles because canvas doesn\'t exist');
    }
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = maxParticles;
    this.width = canvas.clientWidth;
    this.height = canvas.clientHeight;
    canvas.height = this.height;
    canvas.width = this.width;
    this.angle = 0;
    this.deltaTime = 1 / 60;

    for (let i = 0; i < maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 5 + 1,
        density: Math.random() * maxParticles,
        red: Math.floor((Math.random() * 255)),
        green: Math.floor((Math.random() * 255)),
        blue: Math.floor((Math.random() * 255)),
        alpha: 1.0,
      });
    }

    // on resize, resize height and width
    window.addEventListener('resize', () => {
      this.width = canvas.clientWidth;
      this.header = canvas.clientHeight;
      canvas.height = this.height;
      canvas.width = this.width;
    });
  }

  /**
   * Update the particles in the canvas
   */
  update() {
    this.angle += 0.01;
    for (let i = 0; i < this.maxParticles; i++) {
      let particle = this.particles[i];
      // update coordinates
      // density calculates how much the angle influences the flake
      //// y is always going down so its the acceleration
      const x = this.angle + particle.density;
      particle.y += (Math.cos(x) + particle.radius / 2);
      // particle.y += Math.sin(x);// + 1 + particle.radius / 2;
      //// x is what makes the particles sway from left to right
      particle.x += Math.sin(x);

      // Send particles to opposite sides of the screen if threshold is crossed
      if (particle.x > this.width + particle.radius
        || particle.y < -1 * particle.radius
        || particle.y > this.height + particle.radius) {
        particle.x = Math.random() * this.width;
        particle.y = 0;
        particle.alpha = 1.0;
      }
      // if (particle.y > this.height - 100) {
      const unitVector = (this.height - particle.y) / this.height
      particle.alpha = -1 * Math.pow(unitVector, 3) + Math.pow(unitVector, 2) + 3 * unitVector;
      // }
    }
  }

  /**
   * Render the particles on the canvas
   */
  render() {
    this.context.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.maxParticles; i++) {
      let particle = this.particles[i];
      this.context.beginPath();
      this.context.fillStyle = `rgba(${this.particles[i].red},${this.particles[i].green},${this.particles[i].blue},${this.particles[i].alpha})`;
      this.context.moveTo(particle.x, particle.y);
      this.context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
      this.context.fill();
    }
  }

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

  // let particles = null;

  // const update = () => {
  //   // get context
  //   if (!particles) {
  //     let canvas = document.getElementById('bg-canvas');
  //     if (canvas) {
  //       particles = new Particles(canvas, 25);
  //     } else {
  //       if (typeof window !== 'undefined') {
  //         window.requestAnimationFrame(update);
  //       }
  //       return;
  //     }
  //   }
  //   particles.update();
  //   particles.render();
  //   if (typeof window !== 'undefined') {

  //     window.requestAnimationFrame(update);
  //   }
  // }
  // if (typeof window !== 'undefined') {
  //   window.requestAnimationFrame(update);
  // }

  const data = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />
      {/* <canvas id="bg-canvas" className="home--background"></canvas> */}
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
      <div className="home layout--max-width">
        <div className="home__content layout--content--max-width">
          <section className="home__section home--projects">
            <Title varient="h2" className="home__section__title">Projects</Title>
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

          <section className="home__section home--projects">
            <Title varient="h2" className="home__section__title">Blog Posts</Title>
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

          <section className="home__section home--projects">
            <Title varient="h2" className="home__section__title">Work</Title>
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
        <div className="home--box">
          <Box className="home--box--sticky">
            <div className="home__section__list">
              {data.external.nodes.map((e) =>
                <SocialLink {...e} className="home__section__list__item" />
              )}
            </div>
          </Box>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
