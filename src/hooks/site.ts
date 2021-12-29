import {useStaticQuery, graphql} from "gatsby";

export interface SiteMeta {
    title: string;
    description: string;
    author: string;
}

interface SiteData {
    site: {
        siteMetadata: SiteMeta;
    }
}

const useSiteData = () => useStaticQuery<SiteData>(graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`);

export const useSiteMeta = () => useSiteData().site.siteMetadata;
