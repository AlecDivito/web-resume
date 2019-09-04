import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import HeaderLayout from "../components/headerLayout";
import SEO from "../components/seo"
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
         || particle.y > this.height + particle.radius)
      {
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
  allWorkJson {
    nodes {
      id
      company
      position
      startDate
      endDate
      logo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  allVolunteerJson {
    nodes {
      description
      job
      location
      time
    }
  }
  allSchoolJson {
    nodes {
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
      siteLink
      shortDescription
      title
      githubLink
      blogPost
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;

const IndexPage = () => {

  let particles = null;

  const update = () => {
    // get context
    if (!particles) {
      let canvas = document.getElementById('bg-canvas');
      if (canvas) {
        particles = new Particles(canvas, 25);
      } else {
        if (typeof window !== 'undefined') {
          window.requestAnimationFrame(update);
        }
        return;
      }
    }
    particles.update();
    particles.render();
    if (typeof window !== 'undefined') {

      window.requestAnimationFrame(update);
    }
  }
  if (typeof window !== 'undefined') {
    window.requestAnimationFrame(update);
  }

  const data = useStaticQuery(query);

  return (
    <HeaderLayout>
      <SEO title="Home" />
      <canvas id="bg-canvas" className="home--background"></canvas>
      <div className="home layout--max-width">

        <header className="home__header">
          <h1 className="home__header--name">
            Alec Di<span className="home__header--name--space">Vito</span>
          </h1>
          <h3 className="home__header--title">Full Stack Web Developer</h3>
          <p className="home__header__description">
            Aspiring Designer and Machine Learning Engineer
          </p>
          <Link className="home__header--learn link" to="/about">Learn More</Link>
        </header>
        
        <section className="home__section home--work">
          <h1>Work</h1>
          <ul>
            {data.allWorkJson.nodes.map(p => 
            <li key={p.id}>
                <Img fluid={p.logo.childImageSharp.fluid} alt={p.company} />
                <span>{p.position} at {p.company}</span>
                <small>({p.startDate} - {p.endDate})</small>
            </li>  
            )}
          </ul>
        </section>

        <section className="home__section home--projects">
          <h1>Projects</h1>
          <ul>
            {data.allProjectsJson.nodes.map((p, id) => 
              <li key={id}>
                <Img fluid={p.image.childImageSharp.fluid} alt={p.company} />
                <span>{p.title} - {p.shortDescription}</span>
                {/* {(p.blogPost)
                  ? <Link link={p.blogPost} className="link--button">Read More</Link>
                  : null
                } */}
                {/* <IconLink type="site" link={p.siteLink} />
                <IconLink type="github" link={p.githubLink} /> */}
              </li>  
            )}
          </ul>
        </section>

        <section className="home__section home--school">
          <h1>School</h1>
          <ul>
            {data.allSchoolJson.nodes.map((p, id) => 
              <li key={id}>
                <Img fluid={p.logo.childImageSharp.fluid} alt={`${p.program} at ${p.school}`} />
                <span>{p.program} at {p.school} ({p.startDate} - {p.endDate}, {p.gpa})</span>
              </li>  
            )}
          </ul>
        </section>

        <section className="home__section home--volunteer">
          <h1>Volunteer</h1>
          <ul>
            {data.allVolunteerJson.nodes.map((p, id) => 
            <li key={id}>{p.job} during {p.time} - {p.description}</li>  
            )}
          </ul>
        </section>
      </div>
    </HeaderLayout>
  )
}

export default IndexPage
