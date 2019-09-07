import React from "react";
import PropTypes from "prop-types"
import "./statusDot.scss"

const StatusDot = ({ status }) => (
    <div className="status--container">
        <div className={`status--ringring ${status}`}></div>
        <div className={`status--circle ${status}`}></div>
    </div>
)

StatusDot.propTypes = {
    status: PropTypes.oneOf(['completed', 'active', 'archived'])
}

export default StatusDot;