import React from "react";
import {Link as GatsbyLink} from "gatsby";

export interface LinkProps {
    to: string;
    className?: string;
    children?: React.ReactNode;
}

export const Link = ({className, to, children}: LinkProps) => {
    if (!to || to.match(/\.(png|jpg|jpeg)$/)) {
        return (
            <a className={className} href={to} target="_blank" rel="noopener noreferrer">{children}</a>
        );
    } else if (to.match(/^\//)) {
        return (
            <GatsbyLink className={className} to={to}>{children}</GatsbyLink>
        );
    } else if (to.match(/^[.#]/)) {
        const {pathname} = window.location;
        return (
            <GatsbyLink className={className} to={pathname + (pathname.endsWith("/") ? "" : "/") + to}>{children}</GatsbyLink>
        );
    } else {
        return (
            <a className={className} href={to} target="_blank" rel="noopener noreferrer">{children}</a>
        );
    }
};
