import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";
import {SEO} from "./seo";
import {User} from "../user";
import {useSiteMeta} from "../../hooks/site";
import "normalize.css";
import * as styles from "./layout.module.scss";

export interface LayoutProps {
    children?: React.ReactNode;
    title: string;
    fullTitle?: string;
    pageTitle?: string;
    author?: string;
    date?: string;
    updated?: string;
    readTime?: number;
    description?: string;
    noTitle?: boolean;
    noContent?: boolean;
}

export const Layout = ({title, fullTitle, pageTitle, author, date, updated, readTime, description, noTitle, noContent, children}: LayoutProps): JSX.Element => {
    const siteMeta = useSiteMeta();
    const hasInfo = author || date || readTime;

    return (
        <>
            <SEO
                title={fullTitle ? fullTitle : `${title} - ${siteMeta.title}`}
                description={description ?? siteMeta.description}
                author={author ?? siteMeta.author}
            />
            <div className={styles.main}>
                <Header links={siteMeta.header}></Header>
                <div className={styles.body}>
                    {!noTitle ? (
                        <div className={styles.title}>
                            <div className={styles.heading}>{pageTitle ?? title}</div>
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
