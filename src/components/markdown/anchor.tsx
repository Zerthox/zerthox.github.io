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
    <Link className={clsx(className, styles.anchor, {
        [styles.text]: typeof children === "string"
    })} to={href}>{children}</Link>
);
