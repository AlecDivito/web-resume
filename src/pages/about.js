import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import Box from "../components/simple/box";
import { HorizontalList } from "../components/simple/list";
import Title from "../components/simple/title";
import Widget from "../components/widget";
import "./about.scss";
import Statistic from "../components/complex/statistic";

const query = graphql`
query AboutMeQuery {
  dataJson {
    about {
      info {
        title
        items {
          bigImage
          image
          link
          subTitle
          title
        }
      }
      widgets {
        description
        title
      }
      favoriteLang {
        title
        items {
          bigImage
          image
          subTitle
        }
      }
      interested {
        title
        items {
          bigImage
          image
          subTitle
        }
      }
    }
  }
  file( relativePath: { eq: "images/about/Profile_Pic_Alec_Divito.png" } ) {
    childImageSharp {
      fixed(width: 220, height: 220) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

const AboutPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About Me" />
      <Hero
        title="About Alec"
        subTitle="Professional and Personal"
        tags={["Programmer", "Wannabe Pro Cyclist", "Expert Canoist"]}
      >
        <Img style={{ borderRadius: '100%' }} fixed={data.file.childImageSharp.fixed} alt="Alec Divito Profile Picture" />
      </Hero>
      <div className="common common--max-width">
        <div className="common__content common--content--max-width">
          <Title varient="h2" className="">About Me</Title>
          <section>
            {data.dataJson.about.widgets.map(w =>
              <Widget title={w.title} description={w.description} key={w.title} />
            )}
          </section>
          {data.dataJson.about.info.map(w =>
            <section key={w.title}>
              <Title varient="h3" className="about__statistic--title">{w.title}</Title>
              <HorizontalList>
                {w.items.map(item =>
                  <Statistic key={item.link} {...item} />
                )}
              </HorizontalList>
            </section>
          )}
          <section>
            <Title className="about__statistic--title" varient="h2">{data.dataJson.about.favoriteLang.title}</Title>
            <HorizontalList>
              {data.dataJson.about.favoriteLang.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </section>
          <section>
            <Title className="about__statistic--title" varient="h2">{data.dataJson.about.interested.title}</Title>
            <HorizontalList>
              {data.dataJson.about.interested.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </section>
          <section>
            <Title varient="h2">And there is more coming soon!</Title>
          </section>
        </div>
        <div className="common--box">
          <Box className="common--box--sticky">
            <ul>
              <li>This is it's own component. Will impl later</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </ul>
          </Box>
        </div>
      </div>
    </Layout>
  );
}
// spaces are better then tabs

export default AboutPage
