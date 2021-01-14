import React from 'react';
import "./lists.scss";

const HorizontalList = ({ children, className }) => (
    <ul className={`list list--h ${className ? className : ""}`}>
        {children}
    </ul>
);

const VerticalList = ({ children, className }) => (
    <ul className={`list list--v ${className ? className : ""}`}>
        {children}
    </ul>
);

export {
    HorizontalList,
    VerticalList,
}
