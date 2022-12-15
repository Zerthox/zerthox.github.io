import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";
import {User} from "../user";
import {useSiteMeta} from "../../hooks/site";
import "normalize.css";
import * as styles from "./layout.module.scss";

export interface LayoutProps {
    title?: string;
    author?: string;
    date?: string;
    updated?: string;
    readTime?: number;
    noContent?: boolean;
    children?: React.ReactNode;
}

export const Layout = ({title, author, date, updated, readTime, noContent = false, children}: LayoutProps): JSX.Element => {
    const siteMeta = useSiteMeta();
    const hasInfo = author || date || readTime;

    return (
        <>
            <div className={styles.main}>
                <Header links={siteMeta.header}></Header>
                <div className={styles.body}>
                    {title ? (
                        <div className={styles.title}>
                            <div className={styles.heading}>{title}</div>
                            {hasInfo ? (
                                <div className={styles.info}>
                                    {author ? (
                                        <div className={styles.author}>
                                            by <User name={author}/>
                                        </div>
                                    ): null}
                                    {date ? (
                                        <div className={styles.date}>
                                            {date}
                                            {updated ? <span className={styles.updated}> (Updated: {updated})</span> : null}
                                            {readTime ? (
                                                <>
                                                    <span className={styles.separator}>|</span>
                                                    <span>{readTime}min read</span>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {noContent ? children : (
                        <div className={styles.content}>{children}</div>
                    )}
                </div>
                <Footer {...siteMeta.footer}/>
            </div>
        </>
    );
};
