"use strict";(self.webpackChunkzerthox_github_io=self.webpackChunkzerthox_github_io||[]).push([[946],{8043:function(e,t,a){a.d(t,{M5:function(){return l},rU:function(){return c},_V:function(){return u},BC:function(){return i}});var n=a(7294);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"center-module--container--d71dc"},t)};var r=a(1883);const c=e=>{let{to:t,className:a,onClick:l,children:c}=e;return t&&t.match(/^[/.#]/)&&!t.match(/\.(png|jpg|jpeg)$/)?n.createElement(r.Link,{to:t,className:a,onClick:l},c):n.createElement("a",{href:t,className:a,onClick:l,target:"_blank",rel:"noopener noreferrer"},c)},o=e=>window.scrollTo(0,e.offsetTop),i=e=>o(e.current),s=(e,t)=>{let{type:a,id:l,className:r,children:c}=e;const o=a;return(0,n.useEffect)((()=>{window.location.hash==="#"+l&&i(t)}),[l,t]),n.createElement(o,{className:r,id:l,ref:t},c)},u=(0,n.forwardRef)(s)},5632:function(e,t,a){a.d(t,{Ar:function(){return d},HJ:function(){return h},Dx:function(){return E}});var n=a(7294),l=a(1883),r=a(5770);const c=()=>(0,l.useStaticQuery)("3326286525").site.siteMetadata;var o=a(6554);const i=e=>{let{links:t}=e;const a=c(),{avatar:i}=(0,o.a)(a.author);return n.createElement("div",{className:"header-module--header--a0daf"},n.createElement(l.Link,{className:"header-module--title--78ab6",to:"/"},n.createElement(r.q,{url:i,size:40}),n.createElement("span",{className:"header-module--name--70fa5"},"Zerthox")),n.createElement("div",{className:"header-module--bar--d4a44"},t.map(((e,t)=>{let{text:a,link:r}=e;return n.createElement(l.Link,{key:t,to:r,className:"header-module--item--e3e25",activeClassName:"header-module--active--583af",partiallyActive:"/"!==r},a)}))))};var s=a(8043);const u=e=>e.map(((e,t)=>{let{text:a,link:l}=e;return n.createElement(n.Fragment,{key:t},0!==t&&" | ",l?n.createElement(s.rU,{className:"footer-module--link--06b40",to:l},a):a)})),m=e=>{let{left:t,right:a}=e;return n.createElement("div",{className:"footer-module--footer--d155e"},n.createElement("div",{className:"footer-module--left--d6390"},u(t)),n.createElement("div",{className:"footer-module--right--83036"},u(a)))};const d=e=>{let{title:t,author:a,date:l,updated:c,readTime:o,noContent:s=!1,children:u}=e;const d=a||l||o;return n.createElement("div",{className:"layout-module--main--3f0fd"},n.createElement(i,{links:[{text:"Home",link:"/"},{text:"Guides",link:"/guides"}]}),n.createElement("div",{className:"layout-module--body--a3b83"},t?n.createElement("div",{className:"layout-module--title--c05ab"},n.createElement("div",{className:"layout-module--heading--dd2ea"},t),d?n.createElement("div",{className:"layout-module--info--8110f"},a?n.createElement("div",{className:"layout-module--author--34e41"},"by ",n.createElement(r.n,{name:a})):null,l?n.createElement("div",{className:"layout-module--date--211e7"},l,c?n.createElement("span",{className:"layout-module--updated--8118a"}," (Updated: ",c,")"):null,o?n.createElement(n.Fragment,null,n.createElement("span",{className:"layout-module--separator--3ea5b"},"|"),n.createElement("span",null,o,"min read")):null):null):null):null,s?u:n.createElement("div",{className:"layout-module--content--ba793"},u)),n.createElement(m,{left:[{text:"Copyright 2021 Zerthox"}],right:[{text:"GitHub",link:"https://github.com/zerthox"},{text:"Source",link:"https://github.com/zerthox/zerthox.github.io"}]}))};var f=a(5785);const h=e=>{var t,a;let{fullTitle:l=!1,meta:r=[],children:o,...i}=e;const s=c(),u=[i.title,l?null:s.title].join(" - "),m=null!==(t=i.description)&&void 0!==t?t:s.description,d=null!==(a=i.author)&&void 0!==a?a:s.author;return n.createElement(n.Fragment,null,n.createElement("title",null,u),[{name:"description",content:m},{property:"og:title",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d},{name:"twitter:title",content:u},{name:"twitter:description",content:m}].concat((0,f.Z)(r)).map(((e,t)=>n.createElement("meta",Object.assign({key:t},e)))),o)};const E=e=>{let{sub:t=!1,children:a}=e;return n.createElement("span",{className:t?"title-module--subtitle--ec44c":"title-module--title--87401"},a)}},1867:function(e,t,a){a.d(t,{a:function(){return o}});var n=a(7294),l=a(8043),r=a(5770);const c=e=>{let{name:t,description:a,date:c,author:o,to:i}=e;return n.createElement("div",{className:"list-module--item--2ff2e"},n.createElement(l.rU,{className:"list-module--link--a777c",to:i},n.createElement("div",{className:"list-module--title--83b07"},n.createElement("div",{className:"list-module--name--27e7d"},t),c?n.createElement("div",{className:"list-module--date--f1eea"},c):null),a?n.createElement("div",{className:"list-module--description--64b4a"},a):null),o?n.createElement("div",{className:"list-module--author--82ff7"},"by ",n.createElement(r.n,{name:o})):null)},o=e=>{let{entries:t}=e;return n.createElement("div",{className:"list-module--list--48ac1"},t.map(((e,t)=>n.createElement(c,Object.assign({key:t},e)))))}},5770:function(e,t,a){a.d(t,{q:function(){return c},n:function(){return i}});var n=a(7294),l=a(8043),r=a(512);const c=e=>{let{url:t,size:a=30,className:l}=e;return n.createElement("div",{className:(0,r.Z)(l,"avatar-module--avatar--9b73c"),style:{backgroundImage:"url("+t+")",width:a,height:a}})};var o=a(6554);const i=e=>{let{name:t}=e;const{avatar:a,links:r}=(0,o.a)(t);return n.createElement(l.rU,{className:"user-module--container--b30bb",to:"https://github.com/"+r.github},n.createElement(c,{className:"user-module--avatar--3d0a3",url:a,size:30}),n.createElement("div",{className:"user-module--name--d5384"},t))}},6554:function(e,t,a){a.d(t,{a:function(){return r}});var n=a(1883);const l=()=>(0,n.useStaticQuery)("1119256196").allUsersJson.nodes,r=e=>{var t;return null!==(t=l().find((t=>t.name===e)))&&void 0!==t?t:null}},4528:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s},default:function(){return i}});var n=a(7294),l=a(5632),r=a(1867),c=a(1883);const o=()=>(0,c.useStaticQuery)("3580753508").allMdx.nodes;var i=()=>{const e=(t="guides",o().filter((e=>{let{fields:a}=e;return a.slug.startsWith("/"+t)})));var t;return n.createElement(l.Ar,{title:"Guides"},e.length>0?n.createElement(r.a,{entries:e.map((e=>{let{frontmatter:t,fields:a,excerpt:n}=e;return{name:t.title,to:a.slug,date:t.date,author:t.author,description:n}}))}):"Nothing here (yet).")};const s=()=>n.createElement(l.HJ,{title:"Guides"})},512:function(e,t,a){function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.Z=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}}}]);
//# sourceMappingURL=component---src-pages-guides-index-tsx-d59bba6d1d7ec36e3c77.js.map