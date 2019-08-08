import React from "react";
import PropTypes from "prop-types"
import "./socialFooter.scss"

const SocialFooter = ({ external, email }) => (
  <div className="footer--social">
    {(email) ?
      <a href={`mailto:${email}`} className="footer--social__email">
        <span>Let's Talk</span>
        <span>{email}</span>
      </a>
      : null
    }
    {external.map(e =>
      <a key={e.id} href={e.link} className="footer--social__icon">
        <img src={e.image} alt={e.alt} className="footer--social__icon" />
      </a>
    )}
  </div>
)

SocialFooter.propTypes = {
  external: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })).isRequired,
  email: PropTypes.string
}

export default SocialFooter;

