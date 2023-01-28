import React from "react";
import {Center} from "../components/general";
import {Title, SEO} from "../components/layout";

const Home = (): JSX.Element => (
    <Center>
        <Title>Nothing here</Title>
        <Title sub>(yet)</Title>
    </Center>
);

export default Home;

export const Head = (): JSX.Element => <SEO title="Home"/>;
