import React from 'react';
import Proptypes from 'prop-types';
import './section.scss';
import Title from './title';

const Section = ({ title, varient, children }) => (
    <>
        <Title varient={varient ?? "h2"}>{title}</Title>
        <section className="section">{children}</section>
    </>
);

Section.prototype = {
    children: Proptypes.node,
    title: Proptypes.string.isRequired,
    varient: Proptypes.string,
}

export default Section;