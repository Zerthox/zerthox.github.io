import React from "react";
import * as styles from "./center.module.scss";

export interface CenterProps {
    children?: React.ReactNode;
}

export const Center = ({children}: CenterProps): JSX.Element => (
    <div className={styles.container}>{children}</div>
);
