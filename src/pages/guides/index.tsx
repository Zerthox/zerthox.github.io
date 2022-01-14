import React from "react";
import {Layout} from "../../components/layout";
import {List} from "../../components/list";
import {usePostsIn} from "../../hooks";

const Blog = () => {
    const posts = usePostsIn("guides");

    return (
        <Layout title="Guides">
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
