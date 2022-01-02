/* eslint-disable @typescript-eslint/no-var-requires */
const {promises: fs} = require("fs");

/** @type {import("gatsby").GatsbyNode["createSchemaCustomization"]} */
exports.createSchemaCustomization = async ({actions}) => {
    const types = await fs.readFile(require.resolve("./src/data/types.gql"), "utf8");

    actions.createTypes(types);
};
