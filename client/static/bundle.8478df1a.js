!function(e){function t(t){for(var o,a,l=t[0],i=t[1],s=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([0,1]),n()}({"./src/client/index.tsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),c=n("./node_modules/react-dom/index.js"),a=n("./node_modules/react-router-dom/index.js"),l=n("./node_modules/@apollo/react-common/lib/react-common.esm.js"),i=n("./node_modules/apollo-client/bundle.esm.js"),s=n("./node_modules/apollo-link-http/lib/bundle.esm.js"),u=n("./node_modules/apollo-cache-inmemory/lib/bundle.esm.js"),d=n("./node_modules/@emotion/core/dist/core.browser.esm.js");var p=n("./node_modules/graphql-tag/src/index.js"),b=n.n(p),m=n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js"),f=n("./node_modules/react-helmet/es/Helmet.js");const j=b.a`
  {
    users {
      id
      name
      email
    }
  }
`,h={container:d.b`
    background-color: transparent;
    padding: 20px;
    font-family: 'Open Sans';
  `,link:d.b`
    text-decoration: none;
    font-weight: 900;
  `,buttonContainer:d.b`
    margin-top: 20px;
  `,articleContainer:d.b`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  `,articleTitle:d.b`
    text-decoration: none;
    line-height: 30px;
  `};var g=()=>{const{data:e}=Object(m.a)(j);return Object(d.c)("div",{css:h.container},Object(d.c)(f.a,null,Object(d.c)("title",null,e?e.users[0].name:"example")),Object(d.c)("h1",null,"Home Page"),Object(d.c)(a.Link,{to:"/about",css:h.link},"Go to About Page"),Object(d.c)("div",{css:h.buttonContainer},(()=>{const{loading:e,error:t,data:n}=Object(m.a)(j);return e?Object(d.c)("p",null,"Loading..."):t?Object(d.c)("p",null,"Error :("):n?Object(d.c)("div",{css:h.articleContainer},n.users.map(({name:e,email:t})=>Object(d.c)("div",{key:e},e," : ",t))):Object(d.c)("div",null,"There are no users")})()))};const O={container:d.b`
    font-family: 'Open Sans';
    background-color: transparent;
    padding: 20px;
  `,button:d.b`
    background-color: pink;
    &:hover {
      background-color: red;
    }
  `,link:d.b`
    text-decoration: none;
  `,buttonContainer:d.b`
    margin-top: 20px;
  `};var y=[{path:"/",component:g,exact:!0},{path:"/about",component:()=>Object(d.c)("div",{css:O.container},Object(d.c)(f.a,null,Object(d.c)("title",null,"Hello, World! This is the about page!"),Object(d.c)("meta",{name:"description",content:"hello, meta!"})),Object(d.c)("h1",null,"About Page"),Object(d.c)(a.Link,{to:"/",css:O.link},"Go to Home Page"),Object(d.c)("p",null,"If you do the refresh in this page and then navigate to home page, you will see the client side fetching.")),exact:!0}];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var x=()=>Object(d.c)("div",null,Object(d.c)(d.a,{styles:d.b`
          body {
            margin: 0;
          }
        `}),Object(d.c)("div",{css:d.b`
          padding: 20px;
          color: #fff;
          box-shadow: 0 5px 11px rgba(1, 1, 1, 0.3);
          background-color: #101e52;
          font-family: 'Open Sans';
        `},Object(d.c)("h1",null,"React SSR Apollo Boilerplate")),Object(d.c)(a.Switch,null,y.map(e=>Object(d.c)(a.Route,v({key:e.path},e)))));const _="https://admiring-ride-859b78.netlify.com/api";Object(c.hydrate)(r.a.createElement((function(){const e=new i.a({link:Object(s.a)({uri:_,credentials:"same-origin"}),cache:(new u.a).restore(window.__APOLLO_STATE__)});return r.a.createElement(l.a,{client:e},r.a.createElement(a.BrowserRouter,null,r.a.createElement(x,null)))}),null),document.getElementById("app"))},0:function(e,t,n){n("./node_modules/core-js/stable/index.js"),n("./node_modules/regenerator-runtime/runtime.js"),e.exports=n("./src/client/index.tsx")}});
//# sourceMappingURL=bundle.8478df1a.js.map