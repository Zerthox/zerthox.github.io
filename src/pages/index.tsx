import React from "react";
import {Center} from "../components/general";
import {Title, SEO} from "../components/layout";
import * as styles from "./404.module.scss";

const Home = (): JSX.Element => (
    <Center>
        <Title>...</Title>
        <Title sub>Nothing here (yet)</Title>
        <span className={styles.link} onClick={() => history.back()}>Go back</span>
    </Center>
);

export default Home;

export const Head = (): JSX.Element => <SEO title="Home"/>;
