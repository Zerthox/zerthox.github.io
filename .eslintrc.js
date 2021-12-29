/* eslint-disable @typescript-eslint/no-var-requires */
const rulesDirPlugin = require("eslint-plugin-rulesdir");
rulesDirPlugin.RULES_DIR = `${__dirname}/node_modules/gatsby/dist/utils/eslint-rules`;

module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        node: true
    },
    plugins: [
        "rulesdir",
        "@typescript-eslint",
        "node",
        "import",
        "react",
        "react-hooks"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "google"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "indent": "off",
        "max-len": "off",
        "quotes": ["error", "double"],
        "no-multiple-empty-lines": ["error", {max: 1}],
        "operator-linebreak": ["error", "before"],
        "unused-vars": "off",
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
        "import/extensions": ["error", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            scss: "always",
            json: "always"
        }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/indent": ["error", 4],
        "rulesdir/no-anonymous-exports-page-templates": "warn",
        "rulesdir/limited-exports-page-templates": "warn"
    }
};
