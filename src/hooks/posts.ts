import {useStaticQuery, graphql} from "gatsby";

export interface Frontmatter {
    title: string;
    author?: string;
    date?: string;
    tags?: string[];
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
    query Posts {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                slug
                frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                    author
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

export const trimSlashes = (path: string): string => path.replace(/(^\/|\/$)/g, "");

export const usePosts = (): Post[] => usePostData().allMdx.nodes;

export const usePost = (path: string): Post | null => usePosts().find(({slug}) => trimSlashes(slug) === trimSlashes(path)) ?? null;

export const usePostsIn = (prefix: string): Post[] => usePosts().filter(({slug}) => slug.startsWith(prefix));
