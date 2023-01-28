import React from "react";
import {Link} from "gatsby";
import {Avatar} from "../user";
import {useSiteMeta} from "../../hooks/site";
import {useUser} from "../../hooks/users";
import * as styles from "./header.module.scss";

export interface LinkEntry {
    text: string;
    link: string;
}

export interface HeaderProps {
    links: LinkEntry[];
}

export const Header = ({links}: HeaderProps): JSX.Element => {
    const siteMeta = useSiteMeta();
    const {avatar} = useUser(siteMeta.author);

    return (
        <div className={styles.header}>
            <Link className={styles.title} to="/">
                <Avatar url={avatar} size={40}/>
                <span className={styles.name}>Zerthox</span>
            </Link>
            <div className={styles.bar}>
                {links.map(({text, link}, i) => (
                    <Link key={i} to={link} className={styles.item} activeClassName={styles.active} partiallyActive={link !== "/"}>{text}</Link>
                ))}
            </div>
        </div>
    );
};
