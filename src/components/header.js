import React from "react"
import PropTypes from "prop-types"
import "./header.scss";

const Header = ({text, isCenter}) => {
    const className = `header ${(isCenter) ? "header--center" : ""}`;
    return (
        <header className={className}>
            <h1 className="header__h1">{text}</h1>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    isCenter: PropTypes.bool,
}

export default Header;