import React from "react";
import {graphql, PageProps, HeadProps} from "gatsby";
import {Layout, SEO} from "../components/layout";
import {Markdown} from "../components/markdown";
import {Frontmatter, Fields} from "../hooks/posts";

export interface PostData {
    frontmatter: Frontmatter;
    fields: Fields;
    excerpt: string;
}

interface MarkdownPageData {
    mdx: PostData;
}

export type MarkdownPageProps = React.PropsWithChildren<Omit<PageProps<MarkdownPageData>, "children">>;

const MarkdownPage = ({children, data}: MarkdownPageProps): JSX.Element => {
    const {frontmatter, fields} = data.mdx;
    const {title, author, date, updated} = frontmatter;

    return (
        <Layout
            title={title}
            author={author}
            date={date}
            updated={updated}
            readTime={Math.round(fields.timeToRead)}
        >
            <Markdown>{children}</Markdown>
        </Layout>
    );
};

export default MarkdownPage;

export const Head = ({data}: HeadProps<MarkdownPageData>): JSX.Element => {
    const {frontmatter, excerpt} = data.mdx;
    const {title, author} = frontmatter;

    return <SEO
        title={title}
        author={author}
        description={excerpt}
    />;
};

export const query = graphql`
    query MarkdownPageQuery($parentId: String) {
        mdx(id: {eq: $parentId}) {
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                updated(formatString: "DD MMMM YYYY")
                author
                tags
            }
            excerpt
            fields {
                slug
                timeToRead
            }
        }
    }
`;
