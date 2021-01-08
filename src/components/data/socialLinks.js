import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SocialLink from "../simple/socialLink";
import { VerticalList } from '../simple/list';
import "./socialLinks.scss";

const query = graphql`
    query SocialLinks {
        external: allExternalNavJson {
            nodes {
                id
                image
                link
                type
                alt
            }
        }
    }
`

const SocialLinks = () => (
    <StaticQuery query={query} render={data =>
        <VerticalList>
            {data.external.nodes.map((e) =>
                <SocialLink key={e.id} {...e} className="social__link--item" />
            )}
        </VerticalList>
    } />
);

export default SocialLinks;