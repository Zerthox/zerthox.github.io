import React from "react";
import {Center, Link} from "../components/general";
import {SEO, Title} from "../components/layout";
import * as styles from "./404.module.scss";

const PageNotFound = (): JSX.Element => (
    <Center>
        <Title>404</Title>
        <Title sub>Page not found</Title>
        <Link className={styles.link} to="/">Return to home</Link>
    </Center>
);

export default PageNotFound;

export const Head = (): JSX.Element => <SEO title="404 Page not found"/>;
