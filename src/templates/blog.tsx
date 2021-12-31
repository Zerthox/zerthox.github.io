import React from "react";
import {PageProps} from "gatsby";
import {Layout} from "../components/layout";
import {Markdown} from "../components/markdown";
import {useSiteMeta, usePosts, Frontmatter} from "../hooks";

interface PageContext {
    frontmatter: Frontmatter;
}

const BlogPage = ({children, pageContext}: PageProps<never, PageContext>) => {
    const siteMeta = useSiteMeta();
    const posts = usePosts();
    const {frontmatter, excerpt} = posts.find(({frontmatter}) => frontmatter.title === pageContext.frontmatter.title);

    return (
        <Layout
            title={frontmatter.title}
            author={frontmatter.author ?? siteMeta.author}
            date={frontmatter.date}
            description={excerpt}
        >
            <Markdown>{children}</Markdown>
        </Layout>
    );
};

export default BlogPage;
