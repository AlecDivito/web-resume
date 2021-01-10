import React from 'react';
import PropTypes from 'prop-types';
import { VerticalList } from "../simple/list";
import Title from '../simple/title';
import Paragraph from '../simple/paragraph';
import "./statstic.scss"

const Statistic = ({ image, bigImage, title, subTitle, link }) => (
    <VerticalList className="statistic">
        {image ? <img className={`statistic__img ${bigImage ? "statistic__img--big" : ""}`} src={image} alt={title} /> : null}
        {title ? <Title variant="h5" className="statistic__title">
            {link ? <a className="statistic__title" href={link}>{title}</a> : title}
        </Title> : null
        }
        <Paragraph>{subTitle}</Paragraph>
    </VerticalList>
)

Statistic.prototype = {
    image: PropTypes.string,
    bigImage: PropTypes.bool,
    title: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default Statistic;