import React from "react";
import {Link} from "../components/general";
import {Layout, SEO} from "../components/layout";
import * as styles from "./404.module.scss";

const PageNotFound = (): JSX.Element => (
    <Layout noContent>
        <div className={styles.container}>
            <div className={styles.title}>404</div>
            <div className={styles.subtitle}>Page not found</div>
            <Link className={styles.link} to="/">Return to home</Link>
        </div>
    </Layout>
);

export default PageNotFound;

export const Head = (): JSX.Element => <SEO title="404 Page not found"/>;
