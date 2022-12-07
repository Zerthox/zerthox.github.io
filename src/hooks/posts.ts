import {useStaticQuery, graphql} from "gatsby";

export interface Frontmatter {
    title: string;
    author?: string;
    date?: string;
    updated?: string;
    tags?: string[];
    slug?: string;
}

export interface Fields {
    slug: string;
    timeToRead: number;
}

export interface Post {
    frontmatter: Frontmatter;
    fields: Fields;
    excerpt: string;
}

interface PostData {
    allMdx: {
        nodes: Post[];
    };
}

const usePostData = () => useStaticQuery<PostData>(graphql`
    query Posts {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
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
    }
`);

export const usePosts = (): Post[] => usePostData().allMdx.nodes;

export const usePostsIn = (prefix: string): Post[] => usePosts().filter(({fields}) => fields.slug.startsWith("/" + prefix));
