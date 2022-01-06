import React from "react";
import {Link} from "../general";
import * as styles from "./anchor.module.scss";

export interface AnchorProps {
    href?: string;
    children?: React.ReactNode;
}

export const Anchor = ({href, children}: AnchorProps) => (
    <Link className={styles.anchor} to={href}>{children}</Link>
);
