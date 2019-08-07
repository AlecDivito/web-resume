import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import "./footer.scss";

const Footer = ({ siteLinks, children }) => (
  <footer className="footer">
      <div className="footer__top layout--max-width">
        <div className="footer__top__about">
          <h3>About</h3>
          <p>
            Hey I'm Alec and this is my footer, this is just supposed to say
            something about how cool I amm that I ride a bike, but thats all you
            need to know. Thanks for visiting :)
          </p>
        </div>
        <div className="footer__top__blog">
          {/* <h3>Latest Blogs</h3>
          <ul></ul> */}
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
          Alec Divito © {new Date().getFullYear()}, Built with
          {` `}
          <a className="link" href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        {children}
      </div>
  </footer>
)

Footer.propTypes = {
  siteLinks: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    ready: PropTypes.bool.isRequired
  })).isRequired,
  children: PropTypes.node
}

export default Footer;