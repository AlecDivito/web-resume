import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Nav from "./nav";
import Footer from "./footer";
import SocialFooter from "./socialFooter";
import "./layout.scss";

const navData = graphql`
query GetNavData {
  allExternalNavJson {
    nodes {
      id
      image
      link
      type
      alt
    }
  }
  allProjectsJson {
    nodes {
      id
      title
      blogPost
    }
  }
  allInternalNavJson {
    nodes {
      id
      link
      ready
      title
    }
  }
  site {
    siteMetadata {
      email
      title
    }
  }
  file (relativePath: { eq: "images/footer/alec-head.png" }) {
    childImageSharp {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

const Layout = ({ children }) => {
  const [navActive, setNavActive] = useState(false);

  return (
    <StaticQuery query={navData} render={data => (
      <div className="page">
        <Nav
          links={data.allInternalNavJson.nodes}
          navActive={navActive}
          onNavClick={() => setNavActive(!navActive)}
        >
          <SocialFooter
            external={data.allExternalNavJson.nodes}
            email={data.site.siteMetadata.email}
          />
        </Nav>
        <main className="page--content">{children}</main>
        <Footer
          externalLinks={data.allExternalNavJson.nodes}
          alecHead={<Img fixed={data.file.childImageSharp.fixed} />}
        />
      </div>
    )} />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
