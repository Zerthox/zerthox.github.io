import React, {useState} from "react";
import classNames from "classnames";
import {CodeblockProps} from "../markdown";
import * as styles from "./codetabs.module.scss";
import * as codeblockStyles from "../markdown/code.module.scss";

export interface CodeTabsProps {
    names: Record<number, string>;
    children: React.ReactElement<CodeblockProps>[];
}

export const CodeTabs = ({names, children}: CodeTabsProps): JSX.Element => {
    const [current, setCurrent] = useState(0);
    const tab = children[current];

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {children.map((_, i) => (
                    <div
                        key={i}
                        className={classNames(styles.item, {[styles.active]: current === i})}
                        onClick={() => setCurrent(i)}
                    >{names?.[i] ?? `Tab ${i}`}</div>
                ))}
            </div>
            <div className={classNames(styles.content, codeblockStyles.noMargin)}>
                {tab}
            </div>
        </div>
    );
};

export interface CodeTabProps {
    name: string;
    children: JSX.Element;
}
