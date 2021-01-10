import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero";
import { HorizontalList } from "../components/simple/list";
import Widget from "../components/widget";
import Statistic from "../components/complex/statistic";
import SocialLinks from "../components/data/socialLinks";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import Section from "../components/simple/section";

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
        tags={["Programmer", "Engineer", "Cyclist"]}
      >
        <Img style={{ borderRadius: '100%' }} fixed={data.file.childImageSharp.fixed} alt="Alec Divito Profile Picture" />
      </Hero>
      <Common>
        <CommonRight>
          <Section title="About me">
            {data.dataJson.about.widgets.map(w =>
              <Widget title={w.title} description={w.description} key={w.title} />
            )}
          </Section>

          {data.dataJson.about.info.map(w =>
            <Section varient="h3" title={w.title} key={w.title}>
              <HorizontalList>
                {w.items.map(item =>
                  <Statistic key={item.link} {...item} />
                )}
              </HorizontalList>
            </Section>
          )}

          <Section title={data.dataJson.about.favoriteLang.title}>
            <HorizontalList>
              {data.dataJson.about.favoriteLang.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </Section>

          <Section title={data.dataJson.about.interested.title}>
            <HorizontalList>
              {data.dataJson.about.interested.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </Section>

          <Section title="And there is more coming soon!" />
        </CommonRight>
        <CommonLeft>
          <SocialLinks />
        </CommonLeft>
      </Common>
    </Layout>
  );
}

export default AboutPage
