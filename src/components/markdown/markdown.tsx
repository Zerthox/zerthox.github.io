import React from "react";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from "mdx/types";
import {Language} from "prism-react-renderer";
import {Anchor} from "./anchor";
import {Paragraph} from "./paragraph";
import {Heading, HeadingProps} from "./heading";
import {Codeblock, CodeblockProps, InlineCode} from "./code";
import {List} from "../list";
import {Banner} from "../banner";
import {CodeTabs} from "../codetabs";

export const mdxComponents: MDXComponents = {
    a: Anchor,
    p: Paragraph,
    h1: (props) => <Heading type={1} {...props as HeadingProps}/>,
    h2: (props) => <Heading type={2} {...props as HeadingProps}/>,
    h3: (props) => <Heading type={3} {...props as HeadingProps}/>,
    h4: (props) => <Heading type={4} {...props as HeadingProps}/>,
    h5: (props) => <Heading type={5} {...props as HeadingProps}/>,
    h6: (props) => <Heading type={6} {...props as HeadingProps}/>,
    pre: (props) => <div {...props as unknown as React.ComponentProps<"div">}/>,
    code: (props) => <Codeblock language={props.className?.replace(/^language-/, "") as Language} {...props as CodeblockProps}/>,
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
