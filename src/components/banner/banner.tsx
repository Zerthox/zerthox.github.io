import React from "react";
import classNames from "classnames";
import * as styles from "./banner.module.scss";

export const enum BannerType {
    Info = "info",
    Warn = "warn"
}

export interface BannerProps {
    type: BannerType;
    bold?: boolean;
    children?: React.ReactNode;
}

export const Banner = ({type, bold = false, children}: BannerProps) => (
    <div className={classNames(styles.banner, {
        [styles.info]: type === BannerType.Info,
        [styles.warn]: type === BannerType.Warn
    })}>
        {type === BannerType.Info ? (
            <div className={styles.icon}>i</div>
        ) : type === BannerType.Warn ? (
            <div className={styles.icon}>!</div>
        ) : null}
        <div className={classNames(styles.content, {
            [styles.bold]: bold
        })}>{children}</div>
    </div>
);
