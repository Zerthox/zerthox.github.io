import {PrismTheme} from "prism-react-renderer";

// colors based on oceanic next from https://github.com/FormidableLabs/prism-react-renderer
export const colors = {
    char: "#d8dee9",
    comment: "#3a454d",
    keyword: "#c595c5",
    lineHighlight: "#14161a",
    primitive: "#5a9bcf",
    string: "#c3e88d",
    variable: "#d7deea",
    boolean: "#ff8b50",
    punctuation: "#89ddff",
    tag: "#f07178",
    function: "#79b6f2",
    className: "#fac863",
    method: "#6699cc",
    operator: "#89ddff",
    this: "#ff5370"
};

export const theme: PrismTheme = {
    plain: {
        backgroundColor: "#0f1010",
        color: "#fff"
    },
    styles: [
        {
            types: ["script"],
            style: {
                color: "#fff"
            }
        },
        {
            types: ["attr-name"],
            style: {
                color: colors.keyword
            }
        },
        {
            types: ["attr-value"],
            style: {
                color: colors.boolean
            }
        },
        {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
            style: {
                color: colors.comment
            }
        },
        {
            types: ["property", "function-name", "constant", "symbol", "deleted"],
            style: {
                color: colors.primitive
            }
        },
        {
            types: ["number", "boolean"],
            style: {
                color: colors.boolean
            }
        },
        {
            types: ["string"],
            style: {
                color: colors.string
            }
        },
        {
            types: ["punctuation"],
            style: {
                color: colors.punctuation
            }
        },
        {
            types: ["selector", "char", "builtin", "inserted"],
            style: {
                color: colors.char
            }
        },
        {
            types: ["function"],
            style: {
                color: colors.function
            }
        },
        {
            types: ["entity", "url", "variable"],
            style: {
                color: colors.variable
            }
        },
        {
            types: ["operator"],
            style: {
                color: colors.operator
            }
        },
        {
            types: ["keyword"],
            style: {
                color: colors.keyword
            }
        },
        {
            types: ["at-rule", "class-name"],
            style: {
                color: colors.className
            }
        },
        {
            types: ["parameter"],
            style: {
                color: colors.boolean
            }
        },
        {
            types: ["this"],
            style: {
                color: colors.this
            }
        },
        {
            types: ["global"],
            style: {
                color: colors.className
            }
        },
        {
            types: ["tag"],
            style: {
                color: colors.tag
            }
        },
        {
            types: ["important"],
            style: {
                fontWeight: "400"
            }
        },
        {
            types: ["bold"],
            style: {
                fontWeight: "700"
            }
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic"
            }
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7
            }
        }
    ]
};
