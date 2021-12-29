import React from "react";
import {Link} from "../general";
import * as styles from "./footer.module.scss";

const processLinks = (links: FooterEntry[]) => links.map(({text, link}, i) => (
    <React.Fragment key={i}>
        {i !== 0 && " | "}
        {link ? <Link className={styles.link} to={link}>{text}</Link> : text}
    </React.Fragment>
));

export interface FooterEntry {
    text: string;
    link?: string;
}

export interface FooterProps {
    left: FooterEntry[];
    right: FooterEntry[];
}

export const Footer = ({left, right}: FooterProps) => (
    <div className={styles.footer}>
        <div className={styles.left}>{processLinks(left)}</div>
        <div className={styles.right}>{processLinks(right)}</div>
    </div>
);
