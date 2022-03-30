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

export const useUsers = (): User[] => useUserData().allUsersJson.nodes;

export const useUser = (name: string): User | null => useUsers().find((user) => user.name === name) ?? null;
