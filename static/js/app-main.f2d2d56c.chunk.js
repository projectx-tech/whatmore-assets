(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[590],{7220:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return y}});var n=o(5830),i=o(9950),r=o(1348),l=o(1745);const a=function(t){new PerformanceObserver((e=>{for(const o of e.getEntries()){[`${window.location.origin}/cart/add.js`,`${window.location.origin}/cart/add`].includes(o.name)&&(console.debug("Whatmore :: Fetch request detected to",o.name),(0,r.dnh)(whatmoreShopId)&&setTimeout((()=>{(0,l.sw)(t)}),1e3))}})).observe({entryTypes:["resource"]})};var c=o(7740),s=o(4737),u=o(4833);var d,f=o(5491),h=o.n(f),m=o(964),g=o(4414);const p=i.lazy((()=>Promise.all([o.e(286),o.e(94),o.e(387),o.e(760)]).then(o.bind(o,8289)))),v=i.lazy((()=>Promise.all([o.e(572),o.e(526),o.e(879),o.e(286),o.e(296),o.e(94),o.e(774)]).then(o.bind(o,3389)))),w=i.lazy((()=>Promise.all([o.e(572),o.e(526),o.e(879),o.e(286),o.e(296),o.e(94),o.e(387),o.e(717)]).then(o.bind(o,8154)))),S=null!==(d="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==d&&d;let _=h()((t=>{fetch(m.$$+"/customization/frontend/"+t).then((t=>t.json())).then((e=>{(0,r.Tzr)(e,t),(0,n.t2)("brandCustomizationsLoaded",!0)})).catch((t=>{console.error("Whatmore : Error while fetching brandCustomizations : "+t)}))}),100,{leading:!0,trailing:!1});var y=function(){var t;const[e]=(0,n.QN)("whatmoreLandingLocationType"),[d]=(0,n.QN)("whatmoreShopId"),f=(0,n.Xd)("isInDesignMode"),[h,m]=(0,n.QN)("brandCustomizationsLoaded"),[y]=(0,n.QN)("whatmoreEmbedAppUseVariant"),b=(0,n.Xd)("isWhatmorePreviewMode"),{whatmoreEventsBrowsingTemplate:j}=(0,i.useContext)(s.B),[x]=null===(t=performance)||void 0===t?void 0:t.getEntriesByType("navigation");if((0,i.useEffect)((()=>{if(!h){const t=3e5;(0,r.tVc)(t)&&"reload"!=(null===x||void 0===x?void 0:x.type)||b?m(!0):_(d)}null==localStorage.getItem("_user_wh_lc")&&"72201044272"==d&&o.e(259).then(o.bind(o,3446)).then((t=>{let{getLocationDetails:e}=t;return e()})).then((t=>(localStorage.setItem("_user_wh_lc",JSON.stringify(t)),{}))).catch((t=>{localStorage.setItem("_user_wh_lc",JSON.stringify({latitude:"",longitude:""})),console.error(`Error: ${t}`)}))}),[]),(0,i.useEffect)((()=>{a("true"===y),(0,r.WmJ)(d)&&function(t){let e=document.createElement("style");e.innerHTML=t,document.head.appendChild(e)}((0,r.WmJ)(d))}),[h]),!h)return(0,g.jsx)(g.Fragment,{});if((0,c.U)()){if((0,u.Ig)(j))return(0,g.jsx)(g.Fragment,{});if("index"===e||"collection"===e||e.startsWith("collection")||e.startsWith("page")){if(!(0,u.io)(j))return S&&console.debug("Whatmore : Shopify, rendering index/collection page carousels : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(p,{})})});if(function(){var t,e,o,i,l,a,c,s,u,h,m,g;const p=(0,n.Xd)("whatmoreCollectionId");return f||(null===(t=window)||void 0===t||null===(e=t.Shopify)||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.role)&&"main"!==(null===(i=window)||void 0===i||null===(l=i.Shopify)||void 0===l||null===(a=l.theme)||void 0===a?void 0:a.role)||(0,r.hbj)(d)&&(null===(c=window)||void 0===c||null===(s=c.Shopify)||void 0===s||null===(u=s.theme)||void 0===u?void 0:u.role)&&"main"===(null===(h=window)||void 0===h||null===(m=h.Shopify)||void 0===m||null===(g=m.theme)||void 0===g?void 0:g.role)&&((0,r.R2w)(d)||p&&(0,r.Idi)(d).includes(p))}())return S&&console.debug("Whatmore : Shopify, rendering index/collection page spotlight : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(w,{})})})}var I,T,O,N,W,$,E,J,P,k,F,C;return e.startsWith("product")?(0,u.io)(j)?(null!==(I=window)&&void 0!==I&&null!==(T=I.Shopify)&&void 0!==T&&null!==(O=T.theme)&&void 0!==O&&O.role&&"main"===(null===(N=window)||void 0===N||null===(W=N.Shopify)||void 0===W||null===($=W.theme)||void 0===$?void 0:$.role)||window.location.href.includes("localhost:"))&&(0,r.fDZ)(d)?(S&&console.debug("Whatmore : Shopify, rendering PDP-page popup : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(v,{})})})):(null!==(E=window)&&void 0!==E&&null!==(J=E.Shopify)&&void 0!==J&&null!==(P=J.theme)&&void 0!==P&&P.role&&"main"!==(null===(k=window)||void 0===k||null===(F=k.Shopify)||void 0===F||null===(C=F.theme)||void 0===C?void 0:C.role)||f)&&(0,r.C1J)(d)?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(v,{})})}):(S&&console.debug("Whatmore : Shopify, PDP-page popup disabled."),(0,g.jsx)(g.Fragment,{})):(S&&console.debug("Whatmore : Shopify, rendering PDP-page carousels : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(p,{})})})):((0,r.dnh)(d)&&(0,r.bQo)(d)&&"cart"===e&&(S&&console.debug("Whatmore : initiating whatmore attribution from cart page."),(0,l.sw)("true"===y)),(0,g.jsx)(g.Fragment,{}))}return"index"===e||"collection"===e?(0,u.io)(j)?(S&&console.debug("Whatmore : External, rendering index/collection page popup : "+j),(0,g.jsx)(g.Fragment,{})):(S&&console.debug("Whatmore : External, rendering index/collection page carousels : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(p,{})})})):e.startsWith("product")||"embed"===e?(0,u.Ig)(j)||(0,u.io)(j)?(0,r.fDZ)(d)?(S&&console.debug("Whatmore : External, rendering PDP-page popup : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(v,{})})})):(S&&console.debug("Whatmore : External, PDP-page popup disabled."),(0,g.jsx)(g.Fragment,{})):(S&&console.debug("Whatmore : External, rendering PDP-page carousels : "+j),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Suspense,{children:(0,g.jsx)(p,{})})})):(0,g.jsx)(g.Fragment,{})}},7740:function(t,e,o){"use strict";function n(){return!!(void 0!=window.Shopify||window.location.href.includes("shopify")||window.location.href.includes("localhost:")||window.location.href.includes("dashboard.whatmore.live")||window.location.href.includes("app.whatmore.live")||window.location.href.includes("trycloudflare.com"))}o.d(e,{U:function(){return n}})},6641:function(t,e,o){"use strict";o.d(e,{Fk:function(){return s},gv:function(){return c},xv:function(){return a}});var n=o(5830);const i="Whatmore : ",r=(0,n.Xd)("whatmoreShopId");function l(t){console.debug(i+t)}function a(t){var e;null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e&&(l("total events received : "+(t&&t.length)),l("events data : "+JSON.stringify(t)))}function c(t){var e;null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e&&l(t)}const s=t=>{"STR60LW4WMA"!=r&&console.log(`%c ${t}`,"background: #D53F8C; color: white; font-size: 19px; padding: 5px; font-weight: semibold;","\n\nFind us here -> https://www.whatmore.ai")}},1745:function(t,e,o){"use strict";o.d(e,{RX:function(){return d},sw:function(){return u},iL:function(){return h},oV:function(){return f},Lt:function(){return c},js:function(){return s},tN:function(){return m},_N:function(){return g}});var n=o(1348);const i="_whatmore-tracking-id";var r=o(2089),l=o(4533),a=o(5830);function c(){const t="https://"+window.location.hostname+"/cart.json";return fetch(t,{method:"GET"})}async function s(){const t="https://"+window.location.hostname+"/cart.json";return await fetch(t,{method:"GET"})}async function u(t){var e;let o,c=(0,r.Ak)(),u=null,d=null,f={},h=null,m=null,g=null,p={};const v=(0,a.Xd)("whatmoreShopId");let w=(0,l.CK)(),S=null===(e=localStorage)||void 0===e?void 0:e.wht_is_impression,_=w.length>0;w.forEach((t=>{p.hasOwnProperty(null===t||void 0===t?void 0:t.product_id)||(p[null===t||void 0===t?void 0:t.product_id]={widgetInfo:null===t||void 0===t?void 0:t.widget_info,location:null===t||void 0===t?void 0:t.location,userType:null===t||void 0===t?void 0:t.user_type})})),await s().then((t=>t.json())).then((e=>{c=e.token,o=e.attributes;let r=[];if(r=!0===t?e.items.map((t=>{const e=p[null===t||void 0===t?void 0:t.variant_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})):e.items.map((t=>{const e=p[null===t||void 0===t?void 0:t.product_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})),0==r.length)return console.debug("Whatmore :: no cart items available for view products"),null;r.map(((e,c)=>{if(u=e.key,d=e.quantity,f=e.properties,h=e.widget_info,m=e.location,g=e.userType,null!==f&&i in f||!p.hasOwnProperty(JSON.stringify(!0===t?e.variant_id:e.product_id))){if((S||_)&&0==c&&!(0,n.tSy)(v)){let t=o;if(1===r.length){const{_wvi:e,_wvs:n,...i}=o;t=i}!async function(t,e){const o=t?"__wvs":"__wvi",n={...e,[o]:"1"},i=await fetch("https://"+window.location.hostname+"/cart/update.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({attributes:n})}).then((t=>t.json())).catch((t=>{console.error("Whatmore :: Error while updating cart attribute.",t)}))}(_,t,null===e||void 0===e||e.product_id)}}else!async function(t,e,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",c=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,d=arguments.length>8?arguments[8]:void 0;const f=(0,a.Xd)("whatmoreShopId"),h=s?(0,l.wm)()+("72201044272"==f?`#${n}#${r}#${c?"olduser":"newuser"}`:`#${n}`):d?"_wt_vs":u?"_wt_vi":"";if(""==h||"_wt_vs"==h||"_wt_vi"==h||"77604192550"==f||"80856187185"==f||"86486974743"==f)return;let m={id:t,quantity:e,properties:{...h?{[i]:h}:{},...o}};const g=await fetch("https://"+window.location.hostname+"/cart/change.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)}).then((t=>t.json())).catch((t=>{console.error("Whatmore :: Error while updating cart line item properties.",t)}))}(u,d,f,h,m,g,!0,S,_)}))})).catch((t=>{console.error("Whatmore :: Error while fetching cart_token for cart attribute update.",t)}))}async function d(t,e,o,r){let a,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",s=arguments.length>5?arguments[5]:void 0;if((0,n.dnh)(o)){const n=(0,l.wm)()+("72201044272"==o?`#${r}#${c}#${s?"olduser":"newuser"}:direct`:`#${r}:direct`);a={items:t.map((t=>({id:t,quantity:e,properties:{[i]:n}})))}}else a={items:t.map((t=>({id:t,quantity:e})))};return await fetch("https://"+window.location.hostname+"/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}function f(t,e,o,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",l=arguments.length>5?arguments[5]:void 0;const a="https://"+window.location.hostname;var c;const s="72201044272"==o?`came-from-whatmore-live_${i}_${r}_${l?"olduser":"newuser"}`:`came-from-whatmore-live_${i}`;(0,n.BLb)(o)?(c=`${a}/cart/${t}:${e}?`+(0,n.VCz)(o)+"&"+(0,n.Spk)(o)+"&"+(0,n.KMo)(o),(0,n.dnh)(o)&&(c=`${c}&ref=`+s)):(c=`${a}/cart/${t}:${e}`,(0,n.dnh)(o)&&(c=`${c}?ref=`+s)),window.location.href=c}function h(t){const e="https://"+window.location.hostname+"/cart";(0,n.BLb)(t)?window.location.href=e+"?"+(0,n.VCz)(t)+"&"+(0,n.Spk)(t)+"&"+(0,n.yD5)(t):window.location.href=e}async function m(t){let e;if("27303477337"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")){var o,n;const i="https://"+window.location.hostname,r=window.location.pathname.split("/");e=i+"/"+(null!==r&&void 0!==r&&null!==(o=r[1])&&void 0!==o&&o.startsWith("en-")?(null===r||void 0===r?void 0:r[1])+"/":"")+(null===t||void 0===t||null===(n=t.product_link)||void 0===n?void 0:n.split(".co")[1])+".js"}else e=(null===t||void 0===t?void 0:t.product_link)+".js";const i=await fetch(e,{method:"GET"});if(!i.ok)throw new Error(`Error! status: ${i.status}`);return await i.json()}async function g(t){const e=t.product_link+".json",o=await fetch(e,{method:"GET"});if(!o.ok)throw new Error(`Error! status: ${o.status}`);return await o.json()}},4533:function(t,e,o){"use strict";o.d(e,{CK:function(){return j},Ch:function(){return b},Fu:function(){return y},Hm:function(){return x},d3:function(){return I},wm:function(){return S},zv:function(){return _}});var n=o(2089),i=o(5830),r=o(4820);const l="_whatmore_user_id",a="_whatmore_session_id",c="_whatmore_viewed_products",s="_whatmore_add_to_cart_products",u="_whatmore_session_time",d="_whatmore_store_id",f="_whatmore_qview_index",h="_whatmore_brand_questions",m=(0,i.Xd)("whatmoreShopId"),g=18e5,p=2592e5,v=6e5,w="_whatmore_bulk_events";function S(){return localStorage.getItem(d)!=m&&localStorage.setItem(d,m),null==localStorage.getItem(l)&&function(){new Date;const t=(0,n.Ak)();localStorage.setItem(l,t)}(),localStorage.getItem(l)}function _(){const t=new Date,e=JSON.parse(localStorage.getItem(w))||[],o=localStorage.getItem(u);return(null==localStorage.getItem(a)||null==o||t.getTime()>o)&&(localStorage.removeItem(a),localStorage.removeItem(u),function(){const t=(0,n.Ak)(),e=(new Date).getTime()+g;localStorage.setItem(a,t),localStorage.setItem(u,e)}(),e&&e.length>0&&((0,r.u)(e),localStorage.removeItem(w))),localStorage.getItem(a)}function y(t,e,o,n,i){const r=(new Date).getTime(),l={event_id:t.event_id,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:r,widget_info:o,location:n,user_type:i?"olduser":"newuser",variants:[]};if(null===localStorage.getItem(s))localStorage.setItem(s,JSON.stringify([l]));else{let t=JSON.parse(localStorage.getItem(s)).filter((t=>t.timestamp+p>r));localStorage.setItem(s,JSON.stringify([...t,l]))}}function b(t,e,o,n,i){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default",l=arguments.length>6?arguments[6]:void 0;const a=[],s=(new Date).getTime();if(e.map((e=>{const c={event_id:t,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:s,variants:[],page:o,widget_type:n,widget_info:i,location:r,user_type:l?"olduser":"newuser"};a.push(c)})),null===localStorage.getItem(c))console.debug("viewed Products",JSON.stringify(a)),localStorage.setItem(c,JSON.stringify(a));else{let e=JSON.parse(localStorage.getItem(c)),o=!1;e.map((e=>{let n=Object.assign({},e);return e.event_id===t&&(e.timestamp=s,o=!0),n})),o?localStorage.setItem(c,JSON.stringify(e)):localStorage.setItem(c,JSON.stringify([...e,...a]))}}function j(){const t=(new Date).getTime();let e=JSON.parse(localStorage.getItem(c));if(!e)return[];let o=e.filter((e=>e.timestamp+p>t));return localStorage.setItem(c,JSON.stringify(o)),o}function x(){if(null!=localStorage.getItem(f)){const t=parseInt(localStorage.getItem(f))+1;localStorage.setItem(f,t)}}function I(t){const e=(new Date).getTime();if(null==localStorage.getItem(h)){const o={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(o))}else{const o=JSON.parse(localStorage.getItem(h));if((null===o||void 0===o?void 0:o.timestamp)+v>e){const o={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(o))}}}},4820:function(t,e,o){"use strict";o.d(e,{u:function(){return r}});var n=o(964),i=o(6641);const r=function(t){let e={};const o=t.length<10;e.metric_event_list=t,(async()=>{!function(t,e){const o="ingesting analytis-event";(0,i.gv)(o);const r=t;fetch(n.qW+"/event_metrics/bulk",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r),keepalive:e}).then((t=>t.json())).then((t=>{})).catch((t=>{console.error("error "+o,t)}))}(e,o)})()}},4635:function(t,e,o){var n=o(4759).Symbol;t.exports=n},2022:function(t,e,o){var n=o(4635),i=o(1581),r=o(5336),l=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?i(t):r(t)}},6914:function(t,e,o){var n=o(8798),i=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(i,""):t}},6658:function(t,e,o){var n="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;t.exports=n},1581:function(t,e,o){var n=o(4635),i=Object.prototype,r=i.hasOwnProperty,l=i.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=r.call(t,a),o=t[a];try{t[a]=void 0;var n=!0}catch(c){}var i=l.call(t);return n&&(e?t[a]=o:delete t[a]),i}},5336:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},4759:function(t,e,o){var n=o(6658),i="object"==typeof self&&self&&self.Object===Object&&self,r=n||i||Function("return this")();t.exports=r},8798:function(t){var e=/\s/;t.exports=function(t){for(var o=t.length;o--&&e.test(t.charAt(o)););return o}},5491:function(t,e,o){var n=o(4567),i=o(4378),r=o(2588),l=Math.max,a=Math.min;t.exports=function(t,e,o){var c,s,u,d,f,h,m=0,g=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var o=c,n=s;return c=s=void 0,m=e,d=t.apply(n,o)}function S(t){var o=t-h;return void 0===h||o>=e||o<0||p&&t-m>=u}function _(){var t=i();if(S(t))return y(t);f=setTimeout(_,function(t){var o=e-(t-h);return p?a(o,u-(t-m)):o}(t))}function y(t){return f=void 0,v&&c?w(t):(c=s=void 0,d)}function b(){var t=i(),o=S(t);if(c=arguments,s=this,h=t,o){if(void 0===f)return function(t){return m=t,f=setTimeout(_,e),g?w(t):d}(h);if(p)return clearTimeout(f),f=setTimeout(_,e),w(h)}return void 0===f&&(f=setTimeout(_,e)),d}return e=r(e)||0,n(o)&&(g=!!o.leading,u=(p="maxWait"in o)?l(r(o.maxWait)||0,e):u,v="trailing"in o?!!o.trailing:v),b.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=h=s=f=void 0},b.flush=function(){return void 0===f?d:y(i())},b}},4567:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},9248:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},184:function(t,e,o){var n=o(2022),i=o(9248);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==n(t)}},4378:function(t,e,o){var n=o(4759);t.exports=function(){return n.Date.now()}},2588:function(t,e,o){var n=o(6914),i=o(4567),r=o(184),l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var o=a.test(t);return o||c.test(t)?s(t.slice(2),o?2:8):l.test(t)?NaN:+t}},2089:function(t,e,o){"use strict";o.d(e,{Ak:function(){return n}});let n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}}]);