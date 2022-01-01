import React from "react";
import {Layout} from "../../components/layout";
import {List} from "../../components/list";
import {useBlogPosts} from "../../hooks";

const Blog = () => {
    const posts = useBlogPosts();
    console.log(posts);

    return (
        <Layout title="Blog">
            {posts.length > 0 ? (
                <List
                    entries={posts.map(({slug, frontmatter, excerpt}) => ({
                        name: frontmatter.title,
                        to: `/${slug}`,
                        date: frontmatter.date,
                        author: frontmatter.author,
                        description: excerpt
                    }))}
                />
            ) : "Nothing here (yet)."}
        </Layout>
    );
};

export default Blog;
