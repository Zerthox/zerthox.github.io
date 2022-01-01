import {useStaticQuery, graphql} from "gatsby";

export interface User {
    name: string;
    avatar: string;
    links: {
        github: string;
    }
}

interface UserData {
    allUsersJson: {
        nodes: User[]
    }
}

const useUserData = () => useStaticQuery<UserData>(graphql`
    query UserData {
        allUsersJson {
            nodes {
                name
                avatar
                links {
                    github
                }
            }
        }
    }
`);

export const useUsers = () => useUserData().allUsersJson.nodes;

export const useUser = (name: string) => useUsers().find((user) => user.name === name);
