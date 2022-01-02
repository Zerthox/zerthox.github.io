import React from "react";
import {Link} from "../general";
import {TextEntry} from "../../hooks";
import * as styles from "./footer.module.scss";

const processEntries = (links: TextEntry[]) => links.map(({text, link}, i) => (
    <React.Fragment key={i}>
        {i !== 0 && " | "}
        {link ? <Link className={styles.link} to={link}>{text}</Link> : text}
    </React.Fragment>
));

export interface FooterProps {
    left: TextEntry[];
    right: TextEntry[];
}

export const Footer = ({left, right}: FooterProps) => (
    <div className={styles.footer}>
        <div className={styles.left}>{processEntries(left)}</div>
        <div className={styles.right}>{processEntries(right)}</div>
    </div>
);
