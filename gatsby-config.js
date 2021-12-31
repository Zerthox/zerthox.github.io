/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: "Zerthox",
        description: "Just a small page.",
        author: "Zerthox"
    },
    pathPrefix: "/blog",
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: "./src/pages/blog"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: "./src/data"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    blog: require.resolve("./src/templates/blog.tsx"),
                    default: require.resolve("./src/templates/page.tsx")
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 500,
                            wrapperStyle: "margin-left: unset; margin-right: unset;"
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                allExtensions: true
            }
        },
        "gatsby-plugin-typescript-checker",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    includePaths: [`${__dirname}/src/styles`]
                }
            }
        },
        {
            resolve: "gatsby-plugin-dts-css-modules",
            options: {
                dropEmptyFile: true
            }
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                stages: ["develop"],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", ".cache", "public"],
                emitWarning: true,
                failOnError: false
            }
        }
    ]
};
