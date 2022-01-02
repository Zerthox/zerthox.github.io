/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: "Zerthox",
        description: "Just a little page.",
        author: "Zerthox",
        siteUrl: "https://zerthox.github.io",
        header: [
            {
                text: "Home",
                link: "/"
            },
            {
                text: "Blog",
                link: "/blog"
            },
            {
                text: "About",
                link: "/about"
            }
        ],
        footer: {
            left: [
                {
                    text: "Copyright 2021 Zerthox"
                }
            ],
            right: [
                {
                    text: "GitHub",
                    link: "https://github.com/zerthox"
                },
                {
                    text: "Source",
                    link: "https://github.com/zerthox/zerthox.github.io"
                }
            ]
        }
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
                name: "pages",
                path: "./src/pages"
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
                    default: require.resolve("./src/templates/markdown.tsx")
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
