import {useStaticQuery, graphql} from "gatsby";

export interface LinkEntry {
    text: string;
    link: string;
}

export interface TextEntry {
    text: string;
    link?: string;
}

export interface SiteMeta {
    title: string;
    description: string;
    author: string;
    header: LinkEntry[];
    footer: {
        left: TextEntry[];
        right: TextEntry[];
    }
}

interface SiteData {
    site: {
        siteMetadata: SiteMeta;
    }
}

const useSiteData = () => useStaticQuery<SiteData>(graphql`
    query SiteMeta{
        site {
            siteMetadata {
                title
                description
                author
                header {
                    text
                    link
                }
                footer {
                    left {
                        text
                        link
                    }
                    right {
                        text
                        link
                    }
                }
            }
        }
    }
`);

export const useSiteMeta = () => useSiteData().site.siteMetadata;
