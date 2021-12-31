import React, {useRef, useEffect} from "react";
import {kebabCase} from "lodash";

import {ScrollTarget, scrollTo} from "../general";

import * as styles from "./heading.module.scss";

export interface HeadingProps {
    type: 1 | 2 | 3 | 4 | 6;
    noLink?: boolean;
    children: string;
}

// TODO: highlight selected heading
export const Heading = ({type, noLink, children}: HeadingProps) => {
    const id = kebabCase(children);
    const Element = `h${type}` as keyof JSX.IntrinsicElements;
    const ref = useRef();
    useEffect(() => {
        if (window.location.hash === `#${id}`) {
            scrollTo(ref);
        }
    }, [id, ref]);

    return noLink ? (
        <Element className={styles.heading}>{children}</Element>
    ) : (
        <ScrollTarget ref={ref} id={id} type={Element} className={styles.heading}>
            <div
                className={styles.link}
                onClick={() => {
                    window.location.hash = `#${id}`;
                    scrollTo(ref);
                }}
            >#</div>
            {children}
        </ScrollTarget>
    );
};
