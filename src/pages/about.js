import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "Profile_Pic_Alec_Divito.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <SEO title="You... wanna know more about... me :)" />
      <h1>So I try my best and I guess this is my best.</h1>
      <p>About my you say. I go to school and bike. That sums up my life.</p>
    </Layout>
  );
}

export default AboutPage
