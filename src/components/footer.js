import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import "./footer.scss";

const Footer = ({ siteLinks, projectPosts, children }) => (
  <footer className="footer">
      <div className="footer__top layout--max-width">
        <div className="footer__top__about">
          <h3>Alec Di Vito</h3>
          <p>
            I'm a creative, ambitious, and enterprising software engineer as well as
            an aspiring designer and machine learning engineer.
          </p>
        </div>
        <div className="footer__top__site">
          <h3>Projects</h3>
          <ul className="footer__top__site__list">
            {projectPosts.filter(p => p.blogPost).map(p => (
              <li key={p.id} >
                <Link className="link" to={p.blogPost}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__top__site">
          <h3>Site Links</h3>
          <ul className="footer__top__site__list">
            {siteLinks.filter(s => s.ready).map((s, i) => (
              <li key={i}>
                <Link className="link" to={s.link}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom layout--max-width">
        <div className="footer__bottom__copyright">
          Alec Di Vito © {new Date().getFullYear()}, Built with
          {` `}
          <a className="link" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </div>
        {children}
      </div>
  </footer>
)

Footer.propTypes = {
  siteLinks: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    ready: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  projectPosts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    blogPost: PropTypes.string,
  })).isRequired,
  children: PropTypes.node
}

export default Footer;