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
        "gatsby-plugin-remove-trailing-slashes",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: "./src/data"
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    pages: require.resolve("./src/templates/markdown.tsx")
                },
                gatsbyRemarkPlugins: [
                    "gatsby-remark-prismjs"
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
