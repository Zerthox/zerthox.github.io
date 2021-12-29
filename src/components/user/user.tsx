import React from "react";
import {Link} from "../general";
import {Avatar} from "./avatar";
import {useUser} from "../../hooks";
import * as styles from "./user.module.scss";

export interface UserProps {
    name: string;
}

export const User = ({name}: UserProps) => {
    const {avatar, links} = useUser(name);

    return (
        <Link className={styles.container} to={`https://github.com/${links.github}`}>
            <Avatar className={styles.avatar} url={avatar} size={30} />
            <div className={styles.name}>{name}</div>
        </Link>
    );
};
