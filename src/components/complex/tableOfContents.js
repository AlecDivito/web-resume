import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./tableOfContents.scss";

const TableOfContents = ({ contents }) => {
    // const motionQuery = window.matchMedia('(prefers-reduced-motion)');
    // const links = contents.reduce((p, c, i) => ({ ...p, ...{ [c.url.slice(1)]: i } }), {});
    // let [activeSections, setActiveSections] = useState([]);

    // const observe = (entries, observer) => {
    //     let newSections = activeSections ?? [];
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting && entry.intersectionRatio >= 1 && !newSections.contain(links[entry.target.id])) {
    //             console.log(entry, links[entry.target.id])
    //             newSections.push(links[entry.target.id]);
    //         } else {
    //             newSections = newSections.filter(l => l !== links[entry.target.id])
    //         }
    //     });
    //     console.log(newSections);
    //     setActiveSections(newSections);
    // }

    // useEffect(() => {
    //     if (activeSections.length > 0) {
    //         console.log(activeSections);
    //         setActiveIndex(activeSections[0]);
    //     }
    // }, [activeSections, setActiveIndex])

    useEffect(() => {
        const content = document.querySelector('.article');
        let nodes = content.querySelectorAll("h2");
        nodes.forEach((node, index) => {
            try {
                let item = contents[index];
                let id = item.url.slice(1);
                // let tocLink = document.createElement('div');
                // tocLink.className = "toc__anchor";
                // tocLink.id = id;
                node.id = id;
                // node.appendChild(tocLink);
            } catch (e) {
                console.log(e);
            }
        })
    }, [contents]);

    // const scroll = (event) => {
    //     event.preventDefault()
    //     let id = event.target.getAttribute('href').replace('#', '')

    //     let section = document.getElementById(id).parentElement;

    //     section.setAttribute('tabindex', -1)
    //     section.focus()

    //     window.scroll({
    //         behavior: 'smooth',
    //         top: section.offsetTop - 140,
    //         block: 'start'
    //     })
    // }

    return <ol className="toc">
        {contents.map((item) =>
            <li key={item.url} className="toc__item">
                <a className="toc__link" href={item.url}>
                    {item.title}
                </a>
            </li>
        )}
    </ol>
}

TableOfContents.prototype = {
    contents: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }))
}

export default TableOfContents;