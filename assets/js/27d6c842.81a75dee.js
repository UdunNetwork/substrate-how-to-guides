(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return d})),a.d(t,"MDXProvider",(function(){return b})),a.d(t,"mdx",(function(){return x})),a.d(t,"useMDXComponents",(function(){return o})),a.d(t,"withMDXComponents",(function(){return p}));var c=a(0),i=a.n(c);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,c,i=function(e,t){if(null==e)return{};var a,c,i={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),p=function(e){return function(t){var a=o(t.components);return i.a.createElement(e,n({},t,{components:a}))}},o=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},b=function(e){var t=o(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,s=e.originalType,n=e.parentName,r=l(e,["components","mdxType","originalType","parentName"]),d=o(a),p=c,b=d["".concat(n,".").concat(p)]||d[p]||u[p]||s;return a?i.a.createElement(b,m(m({ref:t},r),{},{components:a})):i.a.createElement(b,m({ref:t},r))}));function x(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=a.length,n=new Array(s);n[0]=h;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:c,n[1]=r;for(var l=2;l<s;l++)n[l]=a[l];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},44:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return d}));var c=a(3),i=a(8),s=(a(0),a(168)),n={},r={type:"mdx",permalink:"/substrate-how-to-guides/todo",source:"@site/src/pages/todo.md"},m=[{value:"A list of Recipes to port over to the new &quot;how-to&quot; structure",id:"a-list-of-recipes-to-port-over-to-the-new-how-to-structure",children:[]},{value:"Advanced (based off now existing HTGs)",id:"advanced-based-off-now-existing-htgs",children:[]},{value:"Other",id:"other",children:[{value:"Beginner",id:"beginner",children:[]},{value:"Intermediate",id:"intermediate",children:[]},{value:"Advanced",id:"advanced",children:[]},{value:"Misc",id:"misc",children:[]},{value:"Queue",id:"queue",children:[]}]}],l={toc:m};function d(e){var t=e.components,a=Object(i.default)(e,["components"]);return Object(s.mdx)("wrapper",Object(c.default)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h2",{id:"a-list-of-recipes-to-port-over-to-the-new-how-to-structure"},'A list of Recipes to port over to the new "how-to" structure'),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Charity (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/charity.html"},"https://substrate.dev/recipes/charity.html"),")"),Object(s.mdx)("ul",{parentName:"li",className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a pallet that absorbs imbalances (",Object(s.mdx)("a",{parentName:"li",href:"https://substrate.dev/recipes/currency-imbalances.html"},"https://substrate.dev/recipes/currency-imbalances.html"),")"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a piggy bank"))),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","OCW (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/off-chain-workers/index.html"},"https://substrate.dev/recipes/off-chain-workers/index.html")," x3)")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Collective coin flipping (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/randomness.html"},"https://substrate.dev/recipes/randomness.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a Custom Runtime API for RPC Calls (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/runtime-api.html"},"https://substrate.dev/recipes/runtime-api.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","How to use the Kitchen Node (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/kitchen-node.html"},"https://substrate.dev/recipes/kitchen-node.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add 3 Custom RPCs to Interact with the Polkadot JS API (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/custom-rpc.html"},"https://substrate.dev/recipes/custom-rpc.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create Hybrid Consensus for a Substrate Chain (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/hybrid-consensus.html"},"https://substrate.dev/recipes/hybrid-consensus.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Efficiently manage a crowdfund using child tries for managing data storage (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/crowdfund.html"},"https://substrate.dev/recipes/crowdfund.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Require Nodes to Follow A Custom Mining Algorithm (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/basic-pow.html"},"https://substrate.dev/recipes/basic-pow.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Configurable Constants (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/constants.html"},"https://substrate.dev/recipes/constants.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Basic instantiable pallets (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/instantiable.html"},"https://substrate.dev/recipes/instantiable.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Computational ressources and weights (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/weights.html"},"https://substrate.dev/recipes/weights.html"),")")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("p",{parentName:"li"},Object(s.mdx)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Schedule locking and unlocking with the currency trait (",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/recipes/currency.html"},"https://substrate.dev/recipes/currency.html"),")"))),Object(s.mdx)("h2",{id:"advanced-based-off-now-existing-htgs"},"Advanced (based off now existing HTGs)"),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Using Quadratic Conversion to Calculate Fees in the Democracy Pallet"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Collecting Fees to An Instantiable Treasury Pallet "),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use configurable constant to use as static base value for dynamic fee calculation")),Object(s.mdx)("h2",{id:"other"},"Other"),Object(s.mdx)("h3",{id:"beginner"},"Beginner"),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Error checking"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to configure session keys"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to create a custom origin"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Configure Genesis with Multi-sig instead of Sudo"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setting up a bi-cameral governance model"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to create a proxy account"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to configure relay chain validators"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Interacting with a Pallet using Apps (see ",Object(s.mdx)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-developer-hub.github.io/issues/639"},"#639")," )")),Object(s.mdx)("h3",{id:"intermediate"},"Intermediate"),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Debugging using ",Object(s.mdx)("inlineCode",{parentName:"li"},"println!")," and breakpoints")),Object(s.mdx)("h3",{id:"advanced"},"Advanced"),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Storage migrations",Object(s.mdx)("ul",{parentName:"li",className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Schedule a storage migration"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Trigger a migration from an extrinsic"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Incremental migrations"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Migrations with off-chain storage"))),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to configure parachain collators"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Storage costs best practices"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","benchmarking a single function that returns a weight (like on init)"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","benchmark estimating by putting bounded amount for every loop (see: ",Object(s.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking"},"https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking"),")"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","event triggers"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","patterns with hooks"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","converting to parachain"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","unbounded on_finale calculations")),Object(s.mdx)("h3",{id:"misc"},"Misc"),Object(s.mdx)("ul",{className:"contains-task-list"},Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Security sanity checks"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Enforcing origins"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Understanding commonly used Rust methods in Substrate and others and why (e.g. .into(), clone(), copy(), Ok(), block",Object(s.mdx)("em",{parentName:"li"},"number(), on_initialize, saturating_add()..) _likely better suited to emerge out of a KB article")),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Benchmarking and testing"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How to compile to native runtime + use cases for it"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Recipes for building with Substrate Node (using JSON file)"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Recipes for building with Substrate Core (compiling whatever to WASM)"),Object(s.mdx)("li",{parentName:"ul",className:"task-list-item"},Object(s.mdx)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","How and where to use hooks ",Object(s.mdx)("em",{parentName:"li"},"likely more on the KB side"))),Object(s.mdx)("h3",{id:"queue"},"Queue"))}d.isMDXComponent=!0}}]);