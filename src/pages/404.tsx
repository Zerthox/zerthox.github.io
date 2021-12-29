import React from "react";
import {Link} from "gatsby";
import {Layout} from "../components/layout";
import * as styles from "./404.module.scss";

const PageNotFound = () => (
    <Layout title="Page not Found" noTitle noContent>
        <div className={styles.container}>
            <div className={styles.title}>404</div>
            <div className={styles.subtitle}>Page not found</div>
            <Link className={styles.link} to="/">Return to home</Link>
        </div>
    </Layout>
);

export default PageNotFound;
