import {useStaticQuery, graphql} from "gatsby";

export interface Frontmatter {
    title: string;
    author?: string;
    date: string;
    tags: string[];
}

export interface Post {
    slug: string;
    frontmatter: Frontmatter;
    excerpt: string;
    timeToRead: number;
    wordCount: {
        paragraphs: number;
        sentences: number;
        words: number;
    }
}

interface PostData {
    allMdx: {
        nodes: Post[]
    }
}

const usePostData = () => useStaticQuery<PostData>(graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                slug
                frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                    tags
                }
                excerpt
                timeToRead
                wordCount {
                    paragraphs
                    sentences
                    words
                }
            }
        }
    }
`);

export const usePosts = () => usePostData().allMdx.nodes;
