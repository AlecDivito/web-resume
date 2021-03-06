import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./nav.scss";

const Nav = ({ links, navActive, onNavClick, children }) => (
  <nav className="nav">
    <div className="nav--border-shadow">
      <div className="nav--container common--max-width">
        <div className="nav--header">
          <Link to="/" className="nav__logo">
            Alec Di Vito
          </Link>

          <div className="burger--wrapper">
            <div
              aria-hidden="true"
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
                className="nav__list__link link"
                activeClassName="active"
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
