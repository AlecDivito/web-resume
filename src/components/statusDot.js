import React from "react";
import PropTypes from "prop-types"
import "./statusDot.scss"

const StatusDot = ({ completed }) => (
    <div className="status--container">
        <div className={`status--ringring ${completed}`}></div>
        <div className={`status--circle ${completed}`}></div>
    </div>
)

StatusDot.propTypes = {
    completed: PropTypes.bool
}

export default StatusDot;