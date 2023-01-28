import React from "react";
import clsx from "clsx";
import {Link} from "../general";
import * as styles from "./anchor.module.scss";

export interface AnchorProps {
    href?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Anchor = ({href, className, children}: AnchorProps): JSX.Element => (
    <Link
        className={clsx(className, styles.anchor, {
            [styles.text]: typeof children === "string"
        })}
        to={href}
    >{children}</Link>
);

export interface AnchorButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: React.EventHandler<React.MouseEvent>;
}

export const AnchorButton = ({className, children, onClick}: AnchorButtonProps): JSX.Element => (
    <span
        className={clsx(className, styles.anchor, {
            [styles.text]: typeof children === "string"
        })}
        onClick={onClick}
    >{children}</span>
);
