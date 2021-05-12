(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||h[u]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},39:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(168)),i={sidebar_position:0},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Welcome",description:"This is work in progress and is not an official ressource. The purpose of this is to get feedback on the structure of this guidebook and to create new content to replace Recipes. Read the Guidelines below to better understand the general approach.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/substrate-how-to-guides/docs/intro",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/how-to-substrate/docs/intro.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Basic pallet integration",permalink:"/substrate-how-to-guides/docs/basics/basic-pallet-integration"}},c=[{value:"Content structure",id:"content-structure",children:[{value:"Tags",id:"tags",children:[]}]},{value:"Guidelines",id:"guidelines",children:[]},{value:"FAQ",id:"faq",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"This is work in progress and is not an official ressource. The purpose of this is to get feedback on the structure of this guidebook and to create new content to replace Recipes. Read the Guidelines below to better understand the general approach.")),Object(a.mdx)("h2",{id:"content-structure"},"Content structure"),Object(a.mdx)("p",null,"The structure aims to group HTGs into categories by tagging each guide. For example:"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},Object(a.mdx)("strong",{parentName:"p"},"Simple crowdfund."),"\ntags: runtime, intermediate, pallet design")),Object(a.mdx)("p",null,"The current groupings are to help organize the repository of HTG content. They reflect the different\nareas of development within Substrate:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Basics"),". Where the really simple guides live, those that can be referenced by more complex ones."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Pallet design"),". Everything to do with building custom pallets with or without FRAME."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Weights"),". Any content that covers configuring weights for specific use cases."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Testing"),". A collection of guides for testing."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Storage migrations"),". Anything to do with storage migrations."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Consensus"),". Client stuff, bridging, node configurations."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("strong",{parentName:"li"},"Parachains.")," ",Object(a.mdx)("em",{parentName:"li"},"WIP"))),Object(a.mdx)("h3",{id:"tags"},"Tags"),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"basics, beginner, intermediate, advanced, FRAME v1, runtime, pallet design, weights, fees, currency, testing,\nstorage migration, node, client, consensus, proof-of-work")," "),Object(a.mdx)("h2",{id:"guidelines"},"Guidelines"),Object(a.mdx)("p",null,"Each guide contains various links to ",Object(a.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Knowledgebase")," key terms and other ",Object(a.mdx)("a",{parentName:"p",href:"https://substrate.dev/en/"},"Developer hub")," ressources. Most beginner guides link to other intermediate or advanced guides that use the foundations from the more basic guides they build on. In this way, this book aims to become a modular and extensible framework that:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Can expand overtime, by virtue of the ease for contributors to integrate new content that follows these linking guidelines and structure."),Object(a.mdx)("li",{parentName:"ul"},"Provides an indispensible collection of guides for developers of all levels building with Substrate."),Object(a.mdx)("li",{parentName:"ul"},"Connects related resources from the developer hub, including documentation and knowledgebase article.")),Object(a.mdx)("p",null,"The following points touch on the approach for building content for the Substrate How-to Guides ressource."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"\u25fc\ufe0f ",Object(a.mdx)("strong",{parentName:"li"},"Modularity"),". This means that devhub ressources need to be linked in a way that they can adapt to change: each piece needs to be a standalone guide that has a well-defined and useful focus. Last, they need to be able to handle changes to Substrate in a way that offers a path of least resistance when implementing those changes."),Object(a.mdx)("li",{parentName:"ul"},"\ud83d\udd17 ",Object(a.mdx)("strong",{parentName:"li"},"Linking"),". ",Object(a.mdx)("em",{parentName:"li"},'TBD how exactly each "link type" is differentiated from one another.')," What matters is where ever there's a link, it's clear where it will take the reader, whether colors or marked, for e.g. \"this link (Knowledgebase)\"."),Object(a.mdx)("li",{parentName:"ul"},"\u23ef\ufe0f ",Object(a.mdx)("strong",{parentName:"li"},"Examples"),'. Here\'s the part for "examples on how to actually put this guide to use". Each example links to the "Substrate How-to Guide" codebase hosted in Playground, which contains a collection of pallets and runtimes showing eacg guides\' implemention in practise.'),Object(a.mdx)("li",{parentName:"ul"},"\ud83d\udef0\ufe0f ",Object(a.mdx)("strong",{parentName:"li"},"References.")," At the end of each recipe, developers can see a list of related ressources. Here is where all related Knowledgebase links go; Rust docs; as well as links to any other related guides."),Object(a.mdx)("li",{parentName:"ul"},"\u23f9\ufe0f ",Object(a.mdx)("strong",{parentName:"li"},"Avoid repetition.")," If there's something that needs to be included in one guide and can be abstracted to a completely separate guide, abstract it and link to it instead of repeating that content. This ties into the modularity aspect too.")),Object(a.mdx)("h2",{id:"faq"},"FAQ"),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},'What is the difference between a "how-to guide" and a tutorial?')),Object(a.mdx)("p",null,"A ",Object(a.mdx)("strong",{parentName:"p"},"how-to guide")," is an in-depth guide intended for someone who is assumed to have prior Substrate knowledge on how to achieve a specific goal. Information inside a guide is only pertinent to achieving that goal. Anything else is irrelevant."),Object(a.mdx)("p",null,"A ",Object(a.mdx)("strong",{parentName:"p"},"tutorial")," is a lesson to teach someone how to achieve something assuming they have no prior knowledge on the subject. They contain more details on the subject; cover breadth (vs. how-to guides which cover depth); and can repeat information across other tutorials."))}d.isMDXComponent=!0}}]);