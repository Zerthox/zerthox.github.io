import React from "react";
import {Link as GatsbyLink} from "gatsby";

export interface LinkProps {
    to: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Link = ({to, className, onClick, children}: LinkProps): JSX.Element => {
    if (to && to.match(/^[/.#]/) && !to.match(/\.(png|jpg|jpeg)$/)) {
        return (
            <GatsbyLink
                to={to}
                className={className}
                onClick={onClick}
            >{children}</GatsbyLink>
        );
    } else {
        return (
            <a
                href={to}
                className={className}
                onClick={onClick}
                target="_blank"
                rel="noopener noreferrer"
            >{children}</a>
        );
    }
};
