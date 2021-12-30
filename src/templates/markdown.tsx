import React from "react";
import {PageProps} from "gatsby";
import {MDXProvider, MDXProviderComponents} from "@mdx-js/react";
import {Layout} from "../components/layout";
import {Anchor, Paragraph, Heading, Codeblock, InlineCode} from "../components/markdown";
import {List} from "../components/list";
import {Banner} from "../components/banner";
import {useSiteMeta, usePosts, Frontmatter} from "../hooks";

interface PageContext {
    frontmatter: Frontmatter;
}

const components: MDXProviderComponents = {
    a: Anchor,
    p: Paragraph,
    h1: (props) => <Heading type={1} {...props}/>,
    h2: (props) => <Heading type={2} {...props}/>,
    h3: (props) => <Heading type={3} {...props}/>,
    h4: (props) => <Heading type={4} {...props}/>,
    h5: (props) => <Heading type={5} {...props}/>,
    h6: (props) => <Heading type={6} {...props}/>,
    pre: (props) => <div {...props}/>,
    code: (props) => <Codeblock language={props.className?.replace(/^language-/, "")} {...props}/>,
    inlineCode: InlineCode,
    Anchor,
    Paragraph,
    Heading,
    Codeblock,
    InlineCode,
    List,
    Banner
};

const Markdown = ({children, pageContext}: PageProps<never, PageContext>) => {
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
            <MDXProvider components={components}>
                {children}
            </MDXProvider>
        </Layout>
    );
};

export default Markdown;
