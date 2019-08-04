import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./logo"

const Nav = ({ links, navActive, onNavClick, children }) => (
  <nav className="nav">
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
        {links.map((item, index) => (
        <Link
            key={index}
            to={item.link}
            className="nav__list__item"
            activeClassName="nav__list__item--active"
        >
            {item.title}
        </Link>
        ))}
      </div>
      {children}
    </div>
  </nav>
)

Nav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
    })).isRequired,
    navActive: PropTypes.bool.isRequired,
    onNavClick: PropTypes.func,
    children: PropTypes.node.isRequired
}

export default Nav;
