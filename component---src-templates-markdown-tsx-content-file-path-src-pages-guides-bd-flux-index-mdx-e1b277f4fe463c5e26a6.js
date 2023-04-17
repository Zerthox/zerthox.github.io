"use strict";(self.webpackChunkzerthox_github_io=self.webpackChunkzerthox_github_io||[]).push([[175],{883:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},default:function(){return u}});var a=n(1151),r=n(7294);function o(e){const t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",img:"img",em:"em",strong:"strong",pre:"pre"},(0,a.ah)(),e.components),{Banner:n,CodeTabs:o}=t;return n||l("Banner",!0),o||l("CodeTabs",!0),r.createElement(r.Fragment,null,r.createElement(t.h2,null,"State management in React"),"\n",r.createElement(t.p,null,"When working with ",r.createElement(t.a,{href:"https://react.dev"},"React"),", the UI has a state, which determines the elements rendered onscreen.\nChanging said state will cause React to rerender the affected UI components.\nReact itself already comes with some tools to manage state:\nthe ",r.createElement(t.a,{href:"https://react.dev/learn/state-a-components-memory"},"State API"),",\nwhich can be used via the ",r.createElement(t.a,{href:"https://react.dev/reference/react/Component#setstate"},r.createElement(t.code,null,"this.setState()"))," method in class components\nand via the newer ",r.createElement(t.a,{href:"https://react.dev/reference/react/useState"},r.createElement(t.code,null,"useState()"))," hook in function components.\nFor managing global state React also features a lesser known ",r.createElement(t.a,{href:"https://react.dev/learn/passing-data-deeply-with-context"},"Context API")," out of the box."),"\n",r.createElement(t.p,null,"However, in large applications state management can prove more difficult or inefficient.\nThat's what resulted in the ",r.createElement(t.a,{href:"https://facebook.github.io/flux/"},"Flux")," architecture for managing data flow and application state in React.\nWhile the original Flux project by Facebook themselves is no longer actively developed, the architecture has proven useful.\nPopular state management libraries of today like ",r.createElement(t.a,{href:"https://redux.js.org/"},"Redux")," are built upon it."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"https://i.stack.imgur.com/vHOJB.png",alt:"Flux architecture"}),"\n",r.createElement(t.em,null,"Source: Facebook's Flux docs")),"\n",r.createElement(t.p,null,"The Flux pattern traditionally consists of central ",r.createElement(t.strong,null,"Dispatcher"),"(s), which can receive so-called Actions.\nAn ",r.createElement(t.strong,null,"Action")," represents a modification of the application's state and has an identifying type (kind) as well as a potential payload of additional data.\nActions may also be viewed as events, which happen within the application.\nThe dispatcher is responsible for forwarding the received data to the relevant ",r.createElement(t.strong,null,"Stores"),".\nEach store is used to store state information relevant to a specific part of the application.\nThis allows to separate for example which application language the user has selected from which chatroom they are currently viewing."),"\n",r.createElement(t.p,null,"You can read more about the architecture in the ",r.createElement(t.a,{href:"https://facebook.github.io/flux/docs/in-depth-overview/"},"In-Depth Overview")," within the Flux Docs."),"\n",r.createElement(t.p,null,'The store data as well as the ability to dispatch actions now has to be made available for UI components.\nFor the classic class-based components, this used to be typically done with wrapper components,\nwhich take care of updating and give the inner component access to store data via props or custom methods.\nThis API is sometimes also referred to as "Connect" since the name of the function used to wrap a component usually includes the word connect.\nThe alternative API for function component would be realized via the newer concept of ',r.createElement(t.a,{href:"https://react.dev/reference/react"},"hooks"),"."),"\n",r.createElement(n,{type:"info"},r.createElement(t.p,null,"The React community has been moving more and more towards ",r.createElement(t.strong,null,"function components and hooks"),".\nThey make it easy to use data within a component and have it update automatically.\nLibraries like ",r.createElement(t.a,{href:"https://react-redux.js.org/"},"React Redux")," are now recommending usage of their hooks API over older class component APIs.")),"\n",r.createElement(t.h2,null,"Discord's Flux implementation"),"\n",r.createElement(t.p,null,"Discord uses a (as far as we know) custom implementation of the Flux architecture.\nIt forms a large part of the data layer behind the UI layer."),"\n",r.createElement(n,{type:"warn",bold:!0},"Named exports have been mangled, which also affects the hooks mentioned below."),"\n",r.createElement(t.p,null,"Their implementation has both a newer hooks API they are transitioning to as well as an old connect API, which is still used in parts of the codebase.\nBoth APIs require the relevant stores in an array and a callback which computes the data and is invoked whenever a change has been detected.\nAll hooks also take an optional dependency array.\nIn the case of ",r.createElement(t.code,null,"useStateFromStores()")," a comparator function can be passed as 4th argument to customize update behaviour.\nThe ",r.createElement(t.code,null,"useStateFromStoresArray()")," and ",r.createElement(t.code,null,"useStateFromStoresObject()")," hooks come with a predefined comparator for arrays and objects respectively."),"\n",r.createElement(o,{names:["Hooks","Connect"]},r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"const MyComponent = () => {\n    const currentUser = useStateFromStores([UserStore], () => UserStore.getCurrentUser());\n\n    return (\n        <div>Current user is: {currentUser.username}</div>\n    );\n};\n")),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"const MyComponent = (props) => (\n    <div>Current user is: {props.currentUser.username}</div>\n);\n\nconst ConnectedMyComponent = Flux.connectStores([UserStore], () => ({\n    currentUser: UserStore.getCurrentUser()\n}))(MyComponent);\n"))),"\n",r.createElement(t.p,null,"Their stores as well as their central dispatcher also allow for listeners, which are notified of any incoming actions/events.\nThis can be useful when you want to use store updates somewhere outside of the UI layer."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},'const listener = (action) => console.log("Dispatcher received:", action);\n\nDispatcher.subscribe("ACTION_TYPE", listener);\n\nDispachter.unsubscribe("ACTION_TYPE", listener);\n')),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},'const listener = () => console.log("UserStore was updated");\n\nUserStore.addChangeListener(listener);\n\nUserStore.removeChangeListener(listener);\n')),"\n",r.createElement(t.p,null,"Besides using the intended functions for dispatching specific actions, actions can also be dispatched directly on the dispatcher using ",r.createElement(t.code,null,"Dispatcher.dispatch()"),"."),"\n",r.createElement(t.p,null,"There is a massive amount of different actions.\nIn May 2022 nearly 1500 entries were listed within Discord's internal ",r.createElement(t.code,null,"ActionType")," TypeScript enum.\nThe enum has since been removed (most likely turned into a ",r.createElement(t.code,null,"const enum"),") in August 2022."),"\n",r.createElement(t.h2,null,"Finding Stores"),"\n",r.createElement(t.p,null,"As with all other internals, stores need to be found within the webpack exports cache and have to be reverse engineered.\nYou can find more information in my ",r.createElement(t.a,{href:"../getting-started"},"Getting started with BetterDiscord Plugin development")," guide.\nIn 2022 Discord added a ",r.createElement(t.code,null,"getName()")," method to their store class.\nThe name is also present as ",r.createElement(t.code,null,"displayName")," property on the store constructors.\n",r.createElement(t.em,null,"(Note: BetterDiscord's ",r.createElement(t.code,null,"byDisplayName")," filter does not search constructors as of now.)"),"\nTheoretically you can now find stores using their name rather than interface or other characteristics.\nStore names can also prove useful when figuring out a store's purpose."),"\n",r.createElement(o,{names:["Props","Name"]},r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},'const GuildStore = getModule(Filters.byProps("getGuild"));\nconst ChannelStore = getModule(Filters.byProps("getChannel", "hasChannel"));\nconst UserStore = getModule(Filters.byProps("getUser", "getCurrentUser"));\n')),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},'const GuildStore = getModule((exports) => exports?.constructor?.displayName === "GuildStore");\nconst ChannelStore = getModule((exports) => exports?.constructor?.displayName === "ChannelStore");\nconst UserStore = getModule((exports) => exports?.constructor?.displayName === "UserStore");\n'))),"\n",r.createElement(t.p,null,'Usually a good way to start is to look at a part of the UI where data from the store you are searching for is supposedly used.\nGo up the parent chain and try to find the first "normal" component whose props do not include the data itself or children with the data already "rendered".\nThe relevant stores are most likely accessed within this component.'),"\n",r.createElement(t.p,null,"Alternatively you can attempt taking educated guesses regarding the store's name or methods - either complete or partial, like ",r.createElement(t.code,null,'name.toLowerCase().includes("guild")'),"."),"\n",r.createElement(t.p,null,"A list of all stores can be retreived by either checking the name or by making sure it is an instance of ",r.createElement(t.code,null,"Flux.Store"),":"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},'getModule(\n    (exports) => typeof exports?.getName === "function" && exports.getName().endsWith("Store"),\n    { first: false }\n)\n')),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js"},"getModule((exports) => exports instanceof Flux.Store, { first: false })\n")),"\n",r.createElement(t.p,null,"Note that the first version will be missing a couple of stores which have no name set."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=n(5632),i=n(6587);const h=e=>{let{children:t,data:n}=e;const{frontmatter:a,fields:o}=n.mdx,{title:s,author:l,date:h,updated:u}=a;return r.createElement(c.Ar,{title:s,author:l,date:h,updated:u,readTime:Math.round(o.timeToRead)},r.createElement(i.UG,null,t))};function u(e){return r.createElement(h,e,r.createElement(s,e))}const d=e=>{let{data:t}=e;const{frontmatter:n,excerpt:a}=t.mdx,{title:o,author:s}=n;return r.createElement(c.HJ,{title:o,author:s,description:a})}}}]);
//# sourceMappingURL=component---src-templates-markdown-tsx-content-file-path-src-pages-guides-bd-flux-index-mdx-e1b277f4fe463c5e26a6.js.map