import React, {useRef} from "react";
import {kebabCase} from "lodash";
import {Link, ScrollTarget, scrollToRef} from "../general";
import * as styles from "./heading.module.scss";

export interface HeadingProps {
    type: 1 | 2 | 3 | 4 | 5 | 6;
    noLink?: boolean;
    children: string;
}

// TODO: highlight selected heading
export const Heading = ({type, noLink, children}: HeadingProps) => {
    const id = kebabCase(children);
    const Element: keyof JSX.IntrinsicElements = `h${type}`;
    const ref = useRef();

    return noLink ? (
        <Element className={styles.heading}>{children}</Element>
    ) : (
        <ScrollTarget ref={ref} id={id} type={Element} className={styles.heading}>
            <Link
                to={`#${id}`}
                className={styles.link}
                onClick={() => scrollToRef(ref)}
            >#</Link>
            {children}
        </ScrollTarget>
    );
};
