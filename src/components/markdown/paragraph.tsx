import React from "react";
import * as styles from "./paragraph.module.scss";

export interface ParagraphProps {
    children?: React.ReactNode;
}

export const Paragraph = ({children}: ParagraphProps) => (
    <div className={styles.paragraph}>{children}</div>
);
