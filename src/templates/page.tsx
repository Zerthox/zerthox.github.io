import React from "react";
import {PageProps} from "gatsby";
import {Layout} from "../components/layout";
import {Markdown} from "../components/markdown";
import {Frontmatter} from "../hooks";

interface PageContext {
    frontmatter: Frontmatter;
}

const Page = ({children, pageContext}: PageProps<never, PageContext>) => (
    <Layout title={pageContext.frontmatter.title}>
        <Markdown>{children}</Markdown>
    </Layout>
);

export default Page;
