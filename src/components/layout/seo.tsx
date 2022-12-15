import React from "react";
import {useSiteMeta} from "../../hooks/site";

export type MetaProps = JSX.IntrinsicElements["meta"];

export interface SEOProps {
    title?: string;
    fullTitle?: boolean;
    description?: string;
    author?: string;
    meta?: MetaProps[];
    children?: React.ReactNode;
}

export const SEO = ({fullTitle = false, meta = [], children, ...props}: SEOProps): JSX.Element => {
    const siteMeta = useSiteMeta();
    const title = [props.title, !fullTitle ? siteMeta.title : null].join(" - ");
    const description = props.description ?? siteMeta.description;
    const author = props.author ?? siteMeta.author;

    return (
        <>
            <title>{title}</title>
            {[
                {name: "description", content: description},
                {property: "og:title", content: title},
                {property: "og:description", content: description},
                {property: "og:type", content: "website"},
                {name: "twitter:card", content: "summary"},
                {name: "twitter:creator", content: author},
                {name: "twitter:title", content: title},
                {name: "twitter:description", content: description},
                ...meta
            ].map((props, i) => <meta key={i} {...props}/>)}
            {children}
        </>
    );
};
