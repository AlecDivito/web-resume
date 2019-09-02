import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"

const Nav = ({ links, navActive, onNavClick, children }) => (
  <nav className="nav">
    <div className="nav--border-shadow layout--max-width">
      <div className="nav--header">
          <Link to="/" className="nav__logo">
            <Logo />
          </Link>

          <div className="burger--wrapper">
          <div
              className={`burger ${navActive ? "burger--active" : ""}`}
              onClick={onNavClick}
          />
          </div>
      </div>

      <div className={`nav__mobile ${navActive ? "nav__list--dropdown" : ""}`}>
        <div className="nav__list">
          {(links) ? links.filter(item => item.ready).map((item, index) => (
          <Link
              key={item.id}
              to={item.link}
              className="nav__list__item"
              activeClassName="nav__list__item--active"
          >
              {item.title}
          </Link>
          )) : null}
        </div>
        <div className="nav__children">
          {children}
        </div>
    </div>
    </div>
  </nav>
)

Nav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        ready: PropTypes.bool.isRequired
    })).isRequired,
    navActive: PropTypes.bool.isRequired,
    onNavClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Nav;
