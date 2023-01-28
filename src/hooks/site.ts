import {useStaticQuery, graphql} from "gatsby";

export interface SiteMeta {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
}

interface SiteData {
    site: {
        siteMetadata: SiteMeta;
    };
}

const useSiteData = () => useStaticQuery<SiteData>(graphql`
    query SiteMeta{
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`);

export const useSiteMeta = (): SiteMeta => useSiteData().site.siteMetadata;
