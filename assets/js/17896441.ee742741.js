(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{294:function(e,t,l){"use strict";var a=l(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement("div",null,n.default.createElement(m.default,{component:"fieldset",mb:3,borderColor:"transparent"},n.default.createElement(s.default,{component:"legend"},"Was this guide useful?"),n.default.createElement(d.default,{name:"customized-icons",defaultValue:2,getLabelText:e=>v[e].label,IconContainerComponent:E})))};var n=a(l(0)),u=a(l(1)),d=a(l(333)),r=a(l(295)),f=a(l(296)),o=a(l(297)),c=a(l(298)),i=a(l(299)),s=a(l(334)),m=a(l(332));const v={1:{icon:n.default.createElement(r.default,null),label:"Very Dissatisfied"},2:{icon:n.default.createElement(f.default,null),label:"Dissatisfied"},3:{icon:n.default.createElement(o.default,null),label:"Neutral"},4:{icon:n.default.createElement(c.default,null),label:"Satisfied"},5:{icon:n.default.createElement(i.default,null),label:"Very Satisfied"}};function E(e){const{value:t,...l}=e;return n.default.createElement("span",l,v[t].icon)}E.propTypes={value:u.default.number.isRequired}},300:function(e,t,l){"use strict";var a=l(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{content:t}=e,{frontMatter:{theme:l}}=t;switch(l){case"twocol":return n.default.createElement(d.default,e);case"codeview":return n.default.createElement(r.default,e);default:return n.default.createElement(u.default,e)}};var n=a(l(0)),u=a(l(194)),d=a(l(306)),r=a(l(307))},306:function(e,t,l){"use strict";var a=l(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.content.frontMatter.hide_table_of_contents=!0,n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:d.default.row},n.default.createElement("div",{className:d.default.column},n.default.createElement(u.default,e)),n.default.createElement("div",{className:d.default.column},n.default.createElement("div",null,"Second Col"))))};var n=a(l(0)),u=a(l(194)),d=a(l(122))},307:function(e,t,l){"use strict";var a=l(4).default,n=l(21).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{content:t}=e,{frontMatter:{code:l}}=t,[a,n]=(0,u.useState)("Loading..."),c=(0,u.useRef)(!0),i=(0,o.default)(l);return(0,u.useEffect)((()=>(l?async function(){const e=await fetch(i),t=await e.text();if(!c.current)return null;n(t)}():n("No `code` front matter specified."),()=>c.current=!1)),[]),e.content.frontMatter.hide_table_of_contents=!0,u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:r.default.row},u.default.createElement("div",{className:[r.default.column,r.default.doc].join(" ")},u.default.createElement(d.default,e)),u.default.createElement("div",{className:[r.default.column,r.default.editor].join(" ")},u.default.createElement(f.default,{value:a}))))};var u=n(l(0)),d=a(l(194)),r=a(l(123)),f=a(l(308)),o=a(l(179));l(309)},308:function(e,t,l){"use strict";var a=l(21).default,n=l(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(l(3)),d=a(l(0)),r=n(l(183)),f=n(l(11));const o=(0,d.lazy)((()=>Promise.all([l.e(0),l.e(35)]).then(l.bind(null,331)))),c={minimap:{enabled:!1},fontSize:"13px",wordWrap:"off",scrollBeyondLastLine:!1,smoothScrolling:!0,fontFamily:"Menlo, Monaco, Consolas, 'Courier New', monospace",scrollbar:{alwaysConsumeMouseWheel:!1}};var i=function(e){const{isDarkTheme:t}=(0,r.default)(),l=(0,d.useRef)(null),a=(0,d.useCallback)((t=>{l.current=t,e.editorDidMount&&e.editorDidMount()}));return f.default.canUseDOM?d.default.createElement(d.Suspense,{fallback:d.default.createElement("h1",null,"Loading...")},d.default.createElement(o,(0,u.default)({},e,{options:Object.assign({},c,e.options),editorDidMount:a,theme:t?"vs-dark":"vs-light"}))):d.default.createElement("h1",null,"Monaco Editor Unsupported with Server Side Rendering")};t.default=i},40:function(e,t,l){"use strict";var a=l(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.default.createElement(n.default.Fragment,null,n.default.createElement(d.default,e),n.default.createElement(u.default,null))};var n=a(l(0)),u=a(l(294)),d=a(l(300))}}]);