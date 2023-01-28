import React from "react";
import clsx from "clsx";
import {Center} from "../components/general";
import {Title, SEO} from "../components/layout";
import * as styles from "./404.module.scss";

const Home = (): JSX.Element => {
    const goBack = typeof window !== "undefined" && window.history.length > 1;

    return (
        <Center>
            <Title>...</Title>
            <Title sub>Nothing here (yet)</Title>
            <span
                className={clsx(styles.link, {
                    [styles.disabled]: !goBack
                })}
                onClick={goBack ? () => window.history.back() : null}
            >Go back</span>
        </Center>
    );
};

export default Home;

export const Head = (): JSX.Element => <SEO title="Home"/>;
