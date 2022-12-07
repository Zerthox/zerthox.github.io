import React from "react";
import {graphql, PageProps} from "gatsby";
import {Layout} from "../components/layout";
import {Markdown} from "../components/markdown";
import {Frontmatter, Fields} from "../hooks/posts";

export interface PostData {
    frontmatter: Frontmatter;
    fields: Fields;
    excerpt: string;
}

export type MarkdownPageProps = React.PropsWithChildren<Omit<PageProps<{mdx: PostData}>, "children">>;

const MarkdownPage = ({children, data}: MarkdownPageProps): JSX.Element => {
    const {frontmatter, fields, excerpt} = data.mdx;
    const {title, author, date, updated} = frontmatter;

    return (
        <Layout
            title={title}
            author={author}
            date={date}
            updated={updated}
            readTime={fields.timeToRead}
            description={excerpt}
        >
            <Markdown>{children}</Markdown>
        </Layout>
    );
};

export default MarkdownPage;

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
