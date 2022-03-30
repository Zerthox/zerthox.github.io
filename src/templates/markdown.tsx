import React from "react";
import {PageProps} from "gatsby";
import {Layout} from "../components/layout";
import {Markdown} from "../components/markdown";
import {usePost, Frontmatter} from "../hooks";

interface PageContext {
    frontmatter: Frontmatter;
}

const MarkdownPage = ({location, children}: PageProps<never, PageContext>): JSX.Element => {
    const {frontmatter, excerpt, timeToRead} = usePost(location.pathname);

    return (
        <Layout
            title={frontmatter.title}
            author={frontmatter.author}
            date={frontmatter.date}
            readTime={timeToRead}
            description={excerpt}
        >
            <Markdown>{children}</Markdown>
        </Layout>
    );
};

export default MarkdownPage;
