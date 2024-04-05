(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>h});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),d=t.n(s),c=new URL(t(415),t.b),l=new URL(t(449),t.b),m=a()(r()),p=d()(c),u=d()(l);m.push([n.id,`@font-face {\n  font-family: 'Roboto Slab';\n  src: url(${p}) format('truetype');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(${u}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --font1: 'Roboto Slab', serif;\n  --font2: 'Roboto', sans-serif;\n  --white: #f0f1f3;\n  --mainColor: #542b18;\n  --secondaryColor: #85746c;\n  --highlightColor: #ed6256;\n  font-size: 16px;\n}\n\n::selection {\n  background-color: var(--highlightColor);\n  color: var(--white);\n}\n\n* {\n  box-sizing: border-box;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  background: var(--white);\n  color: var(--mainColor);\n  font-family: var(--font2);\n  height: 100vh;\n  line-height: 1.61;\n}\n\na {\n  color: var(--white);\n}\n\nbutton {\n  cursor: pointer;\n}\n\na, button {\n  font-family: var(--font2);\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 8% 1fr 5%;\n  height: 100vh;\n  text-align: center;\n\n  header {\n    align-items: center;\n    display: grid;\n    justify-content: center;\n\n    nav {\n      align-items: center;\n      display: inline-flex;\n\n      h1 {\n        color: var(--highlightColor);\n        cursor: pointer;\n        display: inline-block;\n        font-family: var(--font1);\n        font-size: clamp(1.3rem, 3.6vw, 1.8rem);\n        line-height: 1;\n        text-transform: lowercase;\n      }\n\n      button {\n        background: none;\n        border: 0;\n        color: var(--secondaryColor);\n        font-family: var(--font1);\n        font-size: clamp(.65rem, 1.8vw, .9rem);\n        font-weight: 600;\n        line-height: 1;\n        padding-top: 4px;\n        text-transform: lowercase;\n  \n        &:hover {\n          color: #52ad9d;\n        }\n      }\n\n      span {\n        color: var(--secondaryColor);\n        font-family: var(--font1);\n        font-weight: 600;\n        line-height: 1;\n        padding: 2px 1rem 0;\n      }\n    }\n  }\n\n  #content {\n    .home, .about, .featured, .menu-item {\n      img {\n        transition: opacity 1s ease;\n\n        &.hidden {\n          opacity: 0;\n        }\n      }\n\n      img:not(.hidden) {\n        opacity: 1;\n      }\n    }\n\n    .home {\n      display: grid;\n      gap: 1rem;\n      grid-template-rows: 80% 20%;\n      height: 100vh;\n\n      .img-wrap {\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        position: relative;\n\n        .tagline {\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: clamp(2rem, 5vw, 3rem);\n          font-weight: 600;\n          letter-spacing: 1px;\n          margin: auto;\n          position: absolute;\n          transition: opacity 1s ease;\n          text-shadow: 1px 1px 10px rgba(0,0,0, 0.5);\n          z-index: 1;\n\n          &.hidden {\n            opacity: 0;\n          }\n        }\n\n        tagline:not(.hidden) {\n          opacity: 1;\n        }\n  \n        img {\n          height: 100%;\n          margin: 0 auto;\n          object-fit: cover;\n          width: 100%;\n        }\n      }\n\n      .content-wrap {\n        padding-top: .7rem;\n\n        button {\n          background: var(--highlightColor);\n          border: 0;\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: 1rem;\n          letter-spacing: 1px;\n          padding: 0 1.2rem 0 1.5rem;\n          text-transform: lowercase;\n          width: 200px;\n          height: 40px;\n          position: relative;\n\n          &:before {\n            content: "";\n            position: absolute;\n            right: -20px;\n            bottom: 0;\n            width: 0;\n            height: 0;\n            border-left: 20px solid var(--highlightColor);\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n          }\n\n          &:after {\n            content: "";\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            width: 0;\n            height: 0;\n            border-left: 10px solid var(--white);\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n          }\n        }\n      }\n    }\n\n    .menu {\n      .featured {\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        position: relative;\n\n        p {\n          background: #52ad9d;\n          color: var(--white);\n          font-family: var(--font1);\n          font-size: clamp(1.5rem, 3.5vw, 2.5rem);\n          font-weight: 600;\n          letter-spacing: 1px;\n          margin: auto;\n          padding: 0 1rem;\n          position: absolute;\n          transition: opacity 1s ease;\n          z-index: 1;\n\n          &.hidden {\n            opacity: 0;\n          }\n        }\n\n        p:not(.hidden) {\n          opacity: 1;\n        }\n\n        img {\n          border: 1px solid #dbdbdb;\n          margin-bottom: 1.5rem;\n          padding: 2px;\n          width: min(100%, 1000px);\n        }\n      }\n      h2 {\n        color: #52ad9d;\n        font-size: 1.1rem;\n        margin-bottom: 1rem;\n      }\n\n      .menu-items {\n        display: grid;\n        gap: 1rem;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        padding-bottom: 3rem;\n\n        .menu-item {\n          background: #fff;\n          border: 1px solid #dddad8;\n          border-radius: 3px;\n          padding: 5px;\n\n          img {\n            border-radius: 3px 3px 0 0;\n            cursor: pointer;\n            width: 100%;\n          }\n\n          h3 {\n            font-size: 1rem;\n          }\n        }\n      }\n    }\n\n    .about, .menu {\n      margin: 0 auto;\n      max-width: 1000px;\n      width: 95%;\n    }\n\n    .about {\n      .img-container {\n        margin-bottom: 1rem;\n      }\n\n      img {\n        border: 1px solid #dbdbdb;\n        padding: 2px;\n        width: min(100%, 1000px);\n      }\n\n      .bottom {\n        align-items: center;\n        display: grid;\n        grid-template-columns: 20% 1fr;\n        gap: 1rem;\n\n        .about-bc {\n          h3 {\n            font-family: var(--font1);\n            font-size: clamp(1.3rem, 3.6vw, 1.8rem);\n          }\n\n          p {\n            color: var(--secondaryColor);\n            font-size: clamp(.5rem, 2.8vw, 1rem);\n            margin-top: 1rem;\n            padding: 0 1.1rem;\n          }\n        }\n      }\n    }\n  }\n}\n\n#footer {\n  p {\n    color: #a3a3a3;\n    font-size: .7rem;\n    text-align: center;\n\n    a {\n      color: #a3a3a3;\n      border-bottom: 1px dashed;\n      text-decoration: none;\n\n      &:hover {\n        color: var(--highlightColor);\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 900px) {\n\n  .about {\n    .bottom {\n      grid-template-columns: 1fr !important;\n  \n      .shop {\n        display: none;\n      }\n    }\n  }\n\n}`,""]);const h=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,m="".concat(c," ").concat(l);i[c]=l+1;var p=t(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:m,updater:h,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},449:(n,e,t)=>{n.exports=t.p+"fonts/Roboto-Regular.ttf"},415:(n,e,t)=>{n.exports=t.p+"fonts/Roboto-Slab.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{j:()=>L});var n=t(72),e=t.n(n),r=t(825),i=t.n(r),a=t(659),s=t.n(a),d=t(56),c=t.n(d),l=t(540),m=t.n(l),p=t(113),u=t.n(p),h=t(208),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=m(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;const g=t.p+"img/hero.jpg",v=t.p+"img/party.jpg",b={menuItem0:{title:"Chocoberry Bonanza",price:"$2.50",image:t.p+"img/menu-item-0.jpg"},menuItem1:{title:"Berry Bliss Bites",price:"$2.50",image:t.p+"img/menu-item-1.jpg"},menuItem2:{title:"Strawberry Surprise",price:"$3.50",image:t.p+"img/menu-item-2.jpg"},menuItem3:{title:"Chocolate Dreams",price:"$3.50",image:t.p+"img/menu-item-3.jpg"},menuItem4:{title:"Cocoa Berry Blast",price:"$2.50",image:t.p+"img/menu-item-4.jpg"},menuItem5:{title:"Plain Jane",price:"$1.50",image:t.p+"img/menu-item-5.jpg"},menuItem6:{title:"Coconut Cocoa",price:"$3.50",image:t.p+"img/menu-item-6.jpg"},menuItem7:{title:"Frosted Blueberry",price:"$4.25",image:t.p+"img/menu-item-7.jpg"}},y=t.p+"img/about.jpg",x=t.p+"img/about2.jpg",w=document.getElementById("content");function C(){const n=function(){const n=document.createElement("div");n.classList.add("home");const e=document.createElement("div");e.classList.add("img-wrap");const t=document.createElement("p");t.classList.add("tagline","hidden"),t.textContent="Sweet, not sugary.",e.appendChild(t);const o=new Image;o.src=g,o.alt="Hero Image",o.width="auto",o.classList.add("hidden"),e.appendChild(o),o.complete?(o.classList.remove("hidden"),t.classList.remove("hidden")):o.addEventListener("load",(function(){o.classList.remove("hidden"),t.classList.remove("hidden")}));const r=document.createElement("div");r.classList.add("content-wrap");const i=document.createElement("button");return i.classList.add("view-menu"),i.textContent="See our creations!",i.addEventListener("click",(()=>{L()})),r.appendChild(i),n.appendChild(e),n.appendChild(r),n}();w.innerHTML="",w.appendChild(n)}function L(){const n=function(){const n=document.createElement("div");n.classList.add("featured");const e=document.createElement("p");e.classList.add("hidden"),e.textContent="We do parties, too.",n.appendChild(e);const t=new Image;t.src=v,t.alt="Party Image",t.width="auto",t.classList.add("hidden"),n.appendChild(t);const o=document.createElement("h2");o.classList.add("favorites"),o.textContent="Try some of our customer favorites!";const r=document.createElement("div");r.classList.add("menu-items"),Object.keys(b).forEach((n=>{const o=document.createElement("div");o.classList.add("menu-item");const i=b[n],a=document.createElement("img");a.src=i.image,a.alt=i.title,a.classList.add("hidden"),o.appendChild(a);const s=document.createElement("h3");s.textContent=i.title;const d=document.createElement("p");d.textContent=i.price,o.appendChild(s),o.appendChild(d),r.appendChild(o),a.complete?(a.classList.remove("hidden"),t.classList.remove("hidden"),e.classList.remove("hidden")):a.addEventListener("load",(function(){a.classList.remove("hidden"),t.classList.remove("hidden"),e.classList.remove("hidden")}))}));const i=document.createElement("div");return i.classList.add("menu"),i.appendChild(n),i.appendChild(o),i.appendChild(r),i}();w.innerHTML="",w.appendChild(n)}document.querySelector("h1").addEventListener("click",(()=>{C()})),document.querySelector("button#menu").addEventListener("click",(()=>{L()})),document.querySelector("button#about").addEventListener("click",(()=>{!function(){const n=function(){const n=document.createElement("div");n.classList.add("about");const e=document.createElement("div");e.classList.add("img-container"),n.appendChild(e);const t=new Image;t.src=y,t.alt="Hero Image",t.width="auto",t.classList.add("hidden"),e.appendChild(t);const o=new Image;o.src=x,o.alt="Shop Image",o.width="auto",o.classList.add("hidden"),t.complete?(t.classList.remove("hidden"),o.classList.remove("hidden")):t.addEventListener("load",(function(){t.classList.remove("hidden"),o.classList.remove("hidden")}));const r=document.createElement("h3");r.textContent="We love what we do.";const i=document.createElement("p");i.textContent="At Breadcrumbs, we're dedicated to crafting irresistible treats using only the freshest, finest ingredients sourced from trusted suppliers. Our commitment to quality ensures that every bite is not only delicious but also nourishing for the body and soul. From organic flours and grains to locally sourced fruits and nuts, our carefully curated selection reflects our passion for providing a healthier option for indulging in baked goods. Join us in savoring the goodness of wholesome ingredients and experience the difference that quality makes in every bite.";const a=document.createElement("div");a.classList.add("shop"),a.appendChild(o);const s=document.createElement("div");s.classList.add("about-bc"),s.appendChild(r),s.appendChild(i);const d=document.createElement("div");return d.classList.add("bottom"),d.appendChild(a),d.appendChild(s),n.appendChild(d),n}();w.innerHTML="",w.appendChild(n)}()})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".container").style.display="grid",C()}))})()})();