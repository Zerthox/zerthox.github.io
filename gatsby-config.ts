import path from "path";
import {GatsbyConfig} from "gatsby";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface FluidResult {
    base64: string;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcSetType: string;
    sizes: string;
    originalImg: string;
    originalName: string;
    density: number;
    presentationWidth: number;
    presentationHeight: number;
    tracedSVG: unknown;
}

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Zerthox",
        description: "Just a little page.",
        author: "Zerthox",
        siteUrl: "https://zerthox.github.io"
    },
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Zerthox",
                icon: path.resolve("./src/assets/icon.png")
            }
        },
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: path.resolve("./src/pages")
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: path.resolve("./src/data")
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                            wrapperStyle: `
                                margin-top: 10px;
                                margin-bottom: 10px;
                                margin-left: unset;
                                margin-right: unset;
                            `
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
                    includePaths: [
                        path.resolve("./src/styles")
                    ]
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

export default config;
