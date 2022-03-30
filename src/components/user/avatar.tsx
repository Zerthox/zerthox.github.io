import React from "react";
import classNames from "classnames";
import * as styles from "./avatar.module.scss";

export interface AvatarProps {
    url: string;
    size?: number;
    className?: string;
}

export const Avatar = ({url, size = 30, className}: AvatarProps): JSX.Element => (
    <div
        className={classNames(className, styles.avatar)}
        style={{
            backgroundImage: `url(${url})`,
            width: size,
            height: size
        }}
    />
);
