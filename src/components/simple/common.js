import React from 'react';
import Proptypes from 'prop-types';
import './common.scss';
import Box from './box';

const Common = ({ children }) => (
    <div className="common common--max-width">
        {children}
    </div>
);

const CommonRight = ({ children }) => (
    <div className="common__right common__right--max-width">
        {children}
    </div>
);

const CommonLeft = ({ children }) => (
    <aside className="common__left">
        <Box className="common__left--sticky">
            {children}
        </Box>
    </aside>
);

Common.prototype = {
    children: Proptypes.node.isRequired,
}


CommonRight.prototype = {
    children: Proptypes.node.isRequired,
}


CommonLeft.prototype = {
    children: Proptypes.node.isRequired,
}

export {
    Common,
    CommonRight,
    CommonLeft
};