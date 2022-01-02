/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const types = fs.readFileSync(require.resolve("./src/data/types.gql"), "utf8");

/** @type {import("gatsby").GatsbyNode["createSchemaCustomization"]} */
exports.createSchemaCustomization = ({actions}) => {
    actions.createTypes(types);
};
