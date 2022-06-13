import {promises as fs} from "fs";
import path from "path";
import {GatsbyNode} from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = async ({actions}) => {
    const types = await fs.readFile(path.resolve("./src/data/types.gql"), "utf8");

    actions.createTypes(types);
};
