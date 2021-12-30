import React from "react";
import classNames from "classnames";
import Highlight, {defaultProps, Language} from "prism-react-renderer";
import {theme} from "./theme";
import * as styles from "./code.module.scss";

interface Token {
    types: string[];
    content: string;
    empty?: boolean;
}

const processToken = (language: Language, token: Token) => {
    const {types, content} = token;

    // js/ts
    if (language === "javascript" || language === "jsx" || language === "typescript" || language === "tsx") {
        if (types.includes("operator") && content === "=>") {
            // change arrow function to keyword
            types.splice(types.indexOf("operator"), 1, "keyword");
        } else if (types.includes("keyword") && content.match(/\b(this|super)\b/)) {
            // color this & super keywords
            types.push("this");
        } else if (types.includes("plain") && content.match(/\b(module|global|window|document)\b/)) {
            // color globals
            types.push("global");
        } else if (types.includes("spread") && types.includes("attr-value")) {
            // fix prop spreads in jsx
            types.splice(types.indexOf("attr-value"), 1, "plain");
        }
    }

    return token;
};

export interface CodeblockProps {
    language: Language;
    className?: string;
    children?: string;
}

export const Codeblock = ({language, className, children}: CodeblockProps) => (
    <div className={classNames(className, styles.codeblock)}>
        <Highlight
            {...defaultProps}
            code={children.trim()}
            language={language}
            theme={theme}
        >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <div className={classNames(className, styles.content)} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({line, key: i})}>
                            <span className={styles.number}>{i + 1}</span>
                            {line.map((token, i) => (
                                <span key={i} {...getTokenProps({token: processToken(language, token), key: i})}/>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </Highlight>
    </div>
);

export interface InlineCodeProps {
    className?: string;
    children?: string;
}

export const InlineCode = ({className, children}: InlineCodeProps) => (
    <span className={classNames(className, styles.inline)}>{children}</span>
);
