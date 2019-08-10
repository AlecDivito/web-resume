
import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"

import Nav from "./nav";
import SocialFooter from "./socialFooter";
import "./layout.scss";

const navData = graphql`
query GetHeaderNavData {
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

const HeaderLayout = ({ children }) => {
    const [navActive, setNavActive] = useState(false);

    return <StaticQuery query={navData} render={data => (
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
        </div>
    )} />
}

export default HeaderLayout;