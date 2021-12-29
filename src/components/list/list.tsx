import React from "react";
import {Link} from "../general";
import {User} from "../user";
import * as styles from "./list.module.scss";

export interface ListItemProps {
    name: string;
    to: string;
    description?: string;
    date?: string;
    author?: string;
}

export const ListItem = ({name, description, date, author, to}: ListItemProps) => (
    <div className={styles.item}>
        <Link className={styles.link} to={to}>
            <div className={styles.title}>
                <div className={styles.name}>{name}</div>
                {date ? (
                    <div className={styles.date}>{date}</div>
                ) : null}
            </div>
            {description ? <div className={styles.description}>{description}</div> : null}
        </Link>
        {author ? (
            <div className={styles.author}>
                by <User name={author}/>
            </div>
        ) : null}
    </div>
);

export interface ListProps {
    entries: ListItemProps[];
}

export const List = ({entries}: ListProps) => (
    <div className={styles.list}>
        {entries.map((props, i) => (
            <ListItem key={i} {...props}/>
        ))}
    </div>
);
