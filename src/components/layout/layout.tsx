import React from "react";
import {Header} from "./header";
import {Footer} from "./footer";
import {SEO} from "./seo";
import {User} from "../user";
import {useSiteMeta} from "../../hooks";
import "normalize.css";
import * as styles from "./layout.module.scss";

// TODO: move to site config?
const navBar = {
    Home: "/",
    Blog: "/blog",
    About: "/about"
};

const footerLinks = {
    left: [
        {
            text: "Copyright 2021 Zerthox"
        }
    ],
    right: [
        {
            text: "GitHub",
            link: "https://github.com/zerthox"
        },
        {
            text: "Source",
            link: "https://github.com/zerthox/zerthox.github.io"
        }
    ]
};

export interface LayoutProps {
    children?: React.ReactNode;
    title: string;
    fullTitle?: string;
    pageTitle?: string;
    author?: string;
    date?: string;
    description?: string;
    noTitle?: boolean;
    noContent?: boolean;
}

export const Layout = ({title, fullTitle, pageTitle, author, date, description, noTitle, noContent, children}: LayoutProps) => {
    const siteMeta = useSiteMeta();

    return (
        <>
            <SEO
                title={fullTitle ? fullTitle : `${title} - ${siteMeta.title}`}
                description={description ?? siteMeta.description}
                author={author ?? siteMeta.author}
            />
            <div className={styles.main}>
                <Header links={navBar}></Header>
                <div className={styles.body}>
                    {!noTitle ? (
                        <div className={styles.title}>
                            <div className={styles.heading}>{pageTitle ?? title}</div>
                            {author || date ? (
                                <div className={styles.info}>
                                    {author ? (
                                        <div className={styles.author}>
                                            by <User name={author}/>
                                        </div>
                                    ): null}
                                    {date ? <div className={styles.date}>{date}</div> : null}
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {noContent ? children : (
                        <div className={styles.container}>
                            <div className={styles.content}>{children}</div>
                        </div>
                    )}
                </div>
                <Footer {...footerLinks}/>
            </div>
        </>
    );
};
