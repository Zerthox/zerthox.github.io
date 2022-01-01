import React from "react";
import {PageProps} from "gatsby";
import {Layout} from "../components/layout";
import {Markdown} from "../components/markdown";
import {usePost, Frontmatter} from "../hooks";

interface PageContext {
    frontmatter: Frontmatter;
}

const MarkdownPage = ({path, children}: PageProps<never, PageContext>) => {
    const {frontmatter, excerpt} = usePost(path);

    return (
        <Layout
            title={frontmatter.title}
            author={frontmatter.author}
            date={frontmatter.date}
            description={excerpt}
        >
            <Markdown>{children}</Markdown>
        </Layout>
    );
};

export default MarkdownPage;
