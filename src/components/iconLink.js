import React from 'react';

const IconLink = ({link, type}) => {
    if (type === "site" && link) {
        return <a href={link} className="icon" target="_blank" rel="noopener noreferrer">
            <img src="/svgs/link.svg" alt="link to site" className="icon" />
        </a>
    } else if (type === "github" && link) {
        return <a href={link} className="icon" target="_blank" rel="noopener noreferrer">
            <img src="/svgs/github-square.svg" alt="link to github" className="icon" />
        </a>
    } else if (type === "linkedin") {
        return <a href={link} className="icon" target="_blank" rel="noopener noreferrer">
            <img src="/svgs/linkedin-square.svg" alt="link to linkedin" className="icon" />
        </a>        
    } else {
        return null;
    }

}

export default IconLink;