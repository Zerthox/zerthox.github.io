import React from "react";
import clsx from "clsx";
import * as styles from "./avatar.module.scss";

export interface AvatarProps {
    url: string;
    size?: number;
    className?: string;
}

export const Avatar = ({url, size = 30, className}: AvatarProps): JSX.Element => (
    <div
        className={clsx(className, styles.avatar)}
        style={{
            backgroundImage: `url(${url})`,
            width: size,
            height: size
        }}
    />
);
