import React from "react";
import {MDXProvider, MDXProviderComponents} from "@mdx-js/react";
import {Anchor} from "./anchor";
import {Paragraph} from "./paragraph";
import {Heading} from "./heading";
import {Codeblock, InlineCode} from "./code";
import {List} from "../list";
import {Banner} from "../banner";
import {CodeTabs} from "../codetabs";

export const mdxComponents: MDXProviderComponents = {
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
    Banner,
    CodeTabs
};

export interface MarkdownProps {
    children?: React.ReactNode;
}

export const Markdown = ({children}: MarkdownProps): JSX.Element => (
    <MDXProvider components={mdxComponents}>
        {children}
    </MDXProvider>
);
