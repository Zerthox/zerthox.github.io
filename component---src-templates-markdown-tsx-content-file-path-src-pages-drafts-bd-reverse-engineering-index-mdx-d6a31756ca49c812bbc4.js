"use strict";(self.webpackChunkzerthox_github_io=self.webpackChunkzerthox_github_io||[]).push([[957],{5085:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},default:function(){return u}});var o=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",h4:"h4",em:"em"},(0,o.ah)(),e.components),{Banner:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Banner",!0),l.createElement(l.Fragment,null,l.createElement(n,{type:"warn",bold:!0},"This is still a DRAFT with parts being subject to change!"),"\n",l.createElement(t.p,null,"This guide will focus on reverse engineering in a context of Discord modifications, which means parts of it will be specific to webpack.\nHowever, some of the points discussed here can be applied to other web applications as well."),"\n",l.createElement(t.h2,null,"Toolchains"),"\n",l.createElement(t.p,null,"In modern web development code often goes through a non-trivial toolchain before it lands in a user's browser in production.\nThese toolchains may include:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Type checking (e.g. ",l.createElement(t.a,{href:"https://www.typescriptlang.org/"},"TypeScript"),", ",l.createElement(t.a,{href:"https://flow.org/"},"Flow"),")"),"\n",l.createElement(t.li,null,"Transpiling code (e.g. ",l.createElement(t.a,{href:"https://babeljs.io/"},"Babel"),", ",l.createElement(t.a,{href:"https://github.com/alangpierce/sucrase"},"sucrase"),", ",l.createElement(t.a,{href:"https://www.typescriptlang.org/"},"TypeScript"),", ",l.createElement(t.a,{href:"https://coffeescript.org/"},"CoffeeScript"),")"),"\n",l.createElement(t.li,null,"Bundling modules (e.g. ",l.createElement(t.a,{href:"https://webpack.js.org/"},"webpack"),", ",l.createElement(t.a,{href:"https://rollupjs.org/"},"rollup"),", ",l.createElement(t.a,{href:"https://esbuild.github.io/"},"esbuild"),", ",l.createElement(t.a,{href:"https://parceljs.org/"},"Parcel"),", ",l.createElement(t.a,{href:"https://browserify.org/"},"Browserify"),")"),"\n",l.createElement(t.li,null,'Optimizations like "tree-shaking" (JavaScript slang for dead code elimination)'),"\n",l.createElement(t.li,null,"Minification (size optimizations to save bandwith)"),"\n"),"\n",l.createElement(t.p,null,"The resulting code often looks very different from what any human would write and can be difficult to understand without experience."),"\n",l.createElement(t.h2,null,"Bundling with webpack"),"\n",l.createElement(t.p,null,"When bundling production code with webpack, the modules are converted for webpack's runtime module system - no matter which module system the source code makes use of.\nFor example let us take this very simple ES module with a single import and two exports:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'import {foo} from "./other-module";\n\nexport default foo;\n\nexport const bar = 2;\n')),"\n",l.createElement(t.p,null,"After being transformed by webpack & the rest of the toolchain, it could look roughly something like:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},'12345: (m, e, r) => {\n    "use strict";\n    Object.defineProperty(e, "__esModule", {\n        value: !0\n    });\n    var f = r(67890);\n    e.default = f;\n    e.bar = 2\n},\n')),"\n",l.createElement(t.p,null,"Besides some added boilerplate code and minification, we can see the ES5 and ES6 syntax has been removed completely.\nThe ",l.createElement(t.code,null,"import")," statement has been transformed into a simple call ",l.createElement(t.code,null,"r(67890)"),".\nIn this case the ",l.createElement(t.code,null,"r")," parameter is webpack's internally used ",l.createElement(t.code,null,"require()")," function, which allows importing exports from other modules.\nThe passed number is the internal ID of the imported module.\nWe can find the ID of our module at the start, it is the ",l.createElement(t.code,null,"12345")," key of our module function.\nIt is important to note that these module IDs can not be expected to be stable across multiple versions of the codebase."),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"export")," statements have been transformed into simple assignments to the ",l.createElement(t.code,null,"e")," parameter.\nWhen evaluating a module, webpack will pass ",l.createElement(t.code,null,"m = module"),", ",l.createElement(t.code,null,"e = module.exports")," and ",l.createElement(t.code,null,"r = require")," to the module function.\nAfter the module function has finished, webpack will take ",l.createElement(t.code,null,"module.exports")," and return it to whatever other module was requiring ours.\nIt will also store the exports in a cache in order to avoid having to evaluate the module again."),"\n",l.createElement(t.h2,null,"Production code patterns"),"\n",l.createElement(t.p,null,"We have already seen one commonly used minification pattern in our example above.\nUnderstanding what these sometimes weird patterns are equivalent to is helpful for reverse engineering.\nHere is a table of some of the most commonly seen minification patterns:"),"\n",l.createElement(t.p,null,"| Dist | Source | Explanation\n| --- | --- | --- |\n| ",l.createElement(t.code,null,"!0")," | ",l.createElement(t.code,null,"true")," | Converting a falsy number using the not operator yields ",l.createElement(t.code,null,"true"),".\n| ",l.createElement(t.code,null,"!1")," | ",l.createElement(t.code,null,"false")," | Converting a truthy number using the not operator yields ",l.createElement(t.code,null,"false"),".\n| ",l.createElement(t.code,null,"void 0")," | ",l.createElement(t.code,null,"undefined")," | Using the uncommon ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void"},l.createElement(t.code,null,"void"))," operator yields ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"},l.createElement(t.code,null,"undefined")),".\n| ",l.createElement(t.code,null,"for (;;)")," | ",l.createElement(t.code,null,"while (true)")," | Use of the uncommon endless ",l.createElement(t.code,null,"for")," loop."),"\n",l.createElement(t.p,null,"Besides minification there is some other weird patterns found in production code.\nThe otherwise rarely seen ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator"},"comma operator")," may see more use.\nIt evaluates all expressions and returns the result of the last expression."),"\n",l.createElement(t.p,null,"One special case where it is used is function calls.\nYou may stumble on cases where a function ",l.createElement(t.code,null,"obj.foo")," is called as ",l.createElement(t.code,null,"(0, obj.foo)(arg1, arg2)")," rather than ",l.createElement(t.code,null,"obj.foo(arg1, arg2)"),".\nThis seems counterintuitive as the resulting code is longer, right?\nThe reason for this is ",l.createElement(t.code,null,"this"),", as in the actual ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"language keyword"),".\nBy doing ",l.createElement(t.code,null,"(0, obj.foo)"),' we are "stripping the context" from the function.\nUse of ',l.createElement(t.code,null,"this")," within the function will now evaluate to the global ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window"},l.createElement(t.code,null,"Window"))," rather than the ",l.createElement(t.code,null,"obj")," it is defined on."),"\n",l.createElement(t.h2,null,"Tips & tricks"),"\n",l.createElement(t.p,null,"I will conclude this guide with a handful of tips for reverse engineering.\nSome of these are specific to whatever technologies are used in the web application."),"\n",l.createElement(t.h4,null,"1. Learn the dev tools"),"\n",l.createElement(t.p,null,"This is the most generic advice to give, but also important.\nThe dev tools are your best friend for any kind of reverse engineering.\nLearning how to properly use them will improve your reverse engineering process a lot."),"\n",l.createElement(t.h4,null,"2. Use domain-specific dev tools extensions"),"\n",l.createElement(t.p,null,"When reverse engineering for example a ",l.createElement(t.a,{href:"https://react.dev"},"React")," application, you should also make use of the ",l.createElement(t.a,{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/"},"React Developer Tools extension"),".\nThey will give you easier and extra insight into the application.\nA bonus tip specific to React: data for the component selected in dev tools is accessible via the ",l.createElement(t.code,null,"$r")," global."),"\n",l.createElement(t.h4,null,"3. Use breakpoints for arguments"),"\n",l.createElement(t.p,null,'You can put breakpoints on functions and then attempt to trigger a "regular" call to them in order to reverse engineer their arguments.\nThe dev tools will show what arguments have been passed.\nThis can be extended to investigating local variables within a specific function you are trying to understand.'),"\n",l.createElement(t.h4,null,"4. Use scopes for captured variables"),"\n",l.createElement(t.p,null,"In Chrome's dev tools function values display a ",l.createElement(t.code,null,"[[FunctionLocation]]")," as well as a ",l.createElement(t.code,null,"[[Scopes]]")," attribute.\nThe ",l.createElement(t.code,null,"[[Scopes]]")," attribute is a list of scopes sorrounding the functions and can help quickly figure out what value captured variables have."),"\n",l.createElement(t.h4,null,"5. Also look at use cases"),"\n",l.createElement(t.p,null,"When reverse engineering a part, also look into how it is used in or interacts with other parts of the codebase.\nIt may help understanding that part as well as building a broader understanding of sections of the application.\n",l.createElement(t.em,null,"(Of course this does not necessarily apply to libraries bundled in the application.)")),"\n",l.createElement(t.h4,null,"6. Aim to understand"),"\n",l.createElement(t.p,null,'Your utmost goal when reverse engineering usually should be understanding what is happening behind the scenes.\nYou do not need to actually reverse engineer the source of every single little piece of code when you feel like you understand what its purpose is.\nHowever, be careful with attempting to just "make it work", skipping parts, trial and error etc.\nThis may lead to unwanted side effects and more problems down the road.'),"\n",l.createElement(t.p,null,"As with most things, experience is key.\nWhile working with the production code of a given application, you get more and more familiar with the structure and how things are typically done.\nAfter some time, you may even build a mindset that enables you to fairly reliably predict the purpose and usage of parts of the codebase without having to reverse engineer them."))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var i=n(5632),s=n(6587);const c=e=>{let{children:t,data:n}=e;const{frontmatter:o,fields:r}=n.mdx,{title:a,author:c,date:u,updated:d}=o;return l.createElement(i.Ar,{title:a,author:c,date:u,updated:d,readTime:Math.round(r.timeToRead)},l.createElement(s.UG,null,t))};function u(e){return l.createElement(c,e,l.createElement(a,e))}const d=e=>{let{data:t}=e;const{frontmatter:n,excerpt:o}=t.mdx,{title:r,author:a}=n;return l.createElement(i.HJ,{title:r,author:a,description:o})}}}]);
//# sourceMappingURL=component---src-templates-markdown-tsx-content-file-path-src-pages-drafts-bd-reverse-engineering-index-mdx-d6a31756ca49c812bbc4.js.map