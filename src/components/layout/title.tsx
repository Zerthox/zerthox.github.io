import React from "react";
import * as styles from "./title.module.scss";

export interface TitleProps {
    sub?: boolean;
    children?: React.ReactNode;
}

export const Title = ({sub = false, children}: TitleProps): JSX.Element => (
    <span className={sub ? styles.subtitle : styles.title}>
        {children}
    </span>
);
