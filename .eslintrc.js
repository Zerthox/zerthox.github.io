module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        node: true
    },
    plugins: [
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
        indent: "off",
        semi: "off",
        "comma-dangle": "off",
        "max-len": "off",
        quotes: ["error", "double"],
        "quote-props": ["error", "as-needed"],
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
        "@typescript-eslint/indent": ["error", 4, {SwitchCase: 1}],
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/comma-dangle": ["error", "never"],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_"
        }],
        "@typescript-eslint/explicit-module-boundary-types": "error"
    }
};
