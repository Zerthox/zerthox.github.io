import {promises as fs} from "fs";
import path from "path";
import {GatsbyNode} from "gatsby";
import {FileSystemNode} from "gatsby-source-filesystem";
import {IMdxNode} from "gatsby-plugin-mdx/dist/types";
import {getPathToContentComponent} from "gatsby-core-utils/parse-component-path";
import readingTime from "reading-time";
import {Post} from "./src/hooks/posts";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({actions}) => {
    const types = await fs.readFile(path.resolve("./src/data/types.gql"), "utf8");
    actions.createTypes(types);
};

type MdxNode = IMdxNode & Post;

export const onCreateNode: GatsbyNode["onCreateNode"] = ({node, actions, getNode}) => {
    if (node.internal.type === "Mdx") {
        const mdx = node as MdxNode;
        const {name, relativeDirectory: dir} = getNode(node.parent as string) as FileSystemNode;

        const slug = mdx.frontmatter.slug ?? `${dir ? "/" + dir : ""}/${name !== "index" ? name : ""}`;

        actions.createNodeField({
            node,
            name: "slug",
            value: slug
        });
        actions.createNodeField({
            node,
            name: "timeToRead",
            value: readingTime(node.body as string).minutes
        });
    }
};

const mdxTemplate = path.resolve("./src/templates/markdown.tsx");

export const onCreatePage: GatsbyNode["onCreatePage"] = ({page, actions, getNode, getNodesByType}) => {
    const contentPath = getPathToContentComponent(page.component);
    if (path.extname(contentPath) === ".mdx") {
        const file = getNodesByType("File").find((node) => node.absolutePath === contentPath) as FileSystemNode;
        const mdx = getNode(file.children[0]) as MdxNode;

        actions.deletePage(page);
        actions.createPage({
            ...page,
            path: mdx.fields.slug,
            component: `${mdxTemplate}?__contentFilePath=${page.component}`,
            context: {
                ...page.context,
                parentId: mdx.id
            }
        });
    }
};
