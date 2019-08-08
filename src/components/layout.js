/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

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
      alt
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
}
`;

const Layout = ({ children }) => {
  const [navActive, setNavActive] = useState(false);

  let isHome = false;
  if (window.location.pathname === "/") {
    isHome = true;
  }

  return (
    <StaticQuery query={navData} render={ data => (
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
        {(!isHome) ?
          <Footer siteLinks={data.allInternalNavJson.nodes}>
            <SocialFooter
              external={data.allExternalNavJson.nodes}
            />
          </Footer>
          : null
        }
      </div>
    )} />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
