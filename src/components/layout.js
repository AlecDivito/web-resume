/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav";
import SocialFooter from "./socialFooter";
// import Header from "./header";
import Footer from  "./footer";
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          email
          linkedinLink
          githubLink
          resumePdfLink
          siteLinks {
            link
            title
          }
        }
      }
    }
  `);

  const [navActive, setNavActive] = useState(0);

  return (
    <div className="page">
      <Nav
        links={data.site.siteMetadata.siteLinks}
        navActive={navActive}
        onNavClick={() => setNavActive(!navActive)}
      >
        <SocialFooter
          github={data.site.siteMetadata.githubLink}
          linkedin={data.site.siteMetadata.linkedinLink}
          resumePdf={data.site.siteMetadata.resumePdfLink}
          email={data.site.siteMetadata.email}
        />
      </Nav>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <main className="page--content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
