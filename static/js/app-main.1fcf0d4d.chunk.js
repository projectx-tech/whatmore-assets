(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[180],{3440:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var o=n(7753),i=n(7313),r=n(9854),l=n(4844);const a=function(t){new PerformanceObserver((e=>{for(const n of e.getEntries()){[`${window.location.origin}/cart/add.js`,`${window.location.origin}/cart/add`].includes(n.name)&&(console.debug("Whatmore :: Fetch request detected to",n.name),(0,r.qcZ)(whatmoreShopId)&&setTimeout((()=>{(0,l.Cj)(t)}),1e3))}})).observe({entryTypes:["resource"]})};var c=n(5416),s=n(364),u=n(6524);var d,f=n(2279),h=n.n(f),m=n(2860),p=n(6417);const g=i.lazy((()=>Promise.all([n.e(548),n.e(766),n.e(428)]).then(n.bind(n,5582)))),v=i.lazy((()=>Promise.all([n.e(302),n.e(13),n.e(240),n.e(423),n.e(548),n.e(145),n.e(766),n.e(281)]).then(n.bind(n,4284)))),w=i.lazy((()=>Promise.all([n.e(302),n.e(13),n.e(240),n.e(423),n.e(548),n.e(145),n.e(766),n.e(312)]).then(n.bind(n,2209)))),S=null!==(d="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==d&&d;let y=h()((t=>{fetch(m.Gc+"/customization/frontend/"+t).then((t=>t.json())).then((e=>{(0,r.TZM)(e,t),(0,o.bU)("brandCustomizationsLoaded",!0)})).catch((t=>{console.error("Whatmore : Error while fetching brandCustomizations : "+t)}))}),100,{leading:!0,trailing:!1});var _=function(){var t;const[e]=(0,o.j1)("whatmoreLandingLocationType"),[d]=(0,o.j1)("whatmoreShopId"),f=(0,o.MO)("isInDesignMode"),[h,m]=(0,o.j1)("brandCustomizationsLoaded"),[_]=(0,o.j1)("whatmoreEmbedAppUseVariant"),{whatmoreEventsBrowsingTemplate:j}=(0,i.useContext)(s.I),[x]=null===(t=performance)||void 0===t?void 0:t.getEntriesByType("navigation");if((0,i.useEffect)((()=>{if(!h){const t=3e5;(0,r.fmD)(t)&&"reload"!=(null===x||void 0===x?void 0:x.type)?m(!0):y(d)}null==localStorage.getItem("_user_wh_lc")&&"72201044272"==d&&n.e(897).then(n.bind(n,3488)).then((t=>{let{getLocationDetails:e}=t;return e()})).then((t=>(localStorage.setItem("_user_wh_lc",JSON.stringify(t)),{}))).catch((t=>{localStorage.setItem("_user_wh_lc",JSON.stringify({latitude:"",longitude:""})),console.error(`Error: ${t}`)}))}),[]),(0,i.useEffect)((()=>{a("true"===_),(0,r.cEH)(d)&&function(t){let e=document.createElement("style");e.innerHTML=t,document.head.appendChild(e)}((0,r.cEH)(d))}),[h]),!h)return(0,p.jsx)(p.Fragment,{});if((0,c.G)()){if((0,u.yK)(j))return(0,p.jsx)(p.Fragment,{});if("index"===e||"collection"===e||e.startsWith("collection")||e.startsWith("page")){if(!(0,u.ru)(j))return S&&console.debug("Whatmore : Shopify, rendering index/collection page carousels : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(g,{})})});if(function(){var t,e,n,i,l,a,c,s,u,h,m,p;const g=(0,o.MO)("whatmoreCollectionId");return f||(null===(t=window)||void 0===t||null===(e=t.Shopify)||void 0===e||null===(n=e.theme)||void 0===n?void 0:n.role)&&"main"!==(null===(i=window)||void 0===i||null===(l=i.Shopify)||void 0===l||null===(a=l.theme)||void 0===a?void 0:a.role)||(0,r.ZKt)(d)&&(null===(c=window)||void 0===c||null===(s=c.Shopify)||void 0===s||null===(u=s.theme)||void 0===u?void 0:u.role)&&"main"===(null===(h=window)||void 0===h||null===(m=h.Shopify)||void 0===m||null===(p=m.theme)||void 0===p?void 0:p.role)&&((0,r.$i1)(d)||g&&(0,r.x6U)(d).includes(g))}())return S&&console.debug("Whatmore : Shopify, rendering index/collection page spotlight : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(w,{})})})}var b,I,O,T,E,N,$,P,W,J,F,D;return e.startsWith("product")?(0,u.ru)(j)?(null!==(b=window)&&void 0!==b&&null!==(I=b.Shopify)&&void 0!==I&&null!==(O=I.theme)&&void 0!==O&&O.role&&"main"===(null===(T=window)||void 0===T||null===(E=T.Shopify)||void 0===E||null===(N=E.theme)||void 0===N?void 0:N.role)||window.location.href.includes("localhost:"))&&(0,r.Nbw)(d)?(S&&console.debug("Whatmore : Shopify, rendering PDP-page popup : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(v,{})})})):(null!==($=window)&&void 0!==$&&null!==(P=$.Shopify)&&void 0!==P&&null!==(W=P.theme)&&void 0!==W&&W.role&&"main"!==(null===(J=window)||void 0===J||null===(F=J.Shopify)||void 0===F||null===(D=F.theme)||void 0===D?void 0:D.role)||f)&&(0,r.v6T)(d)?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(v,{})})}):(S&&console.debug("Whatmore : Shopify, PDP-page popup disabled."),(0,p.jsx)(p.Fragment,{})):(S&&console.debug("Whatmore : Shopify, rendering PDP-page carousels : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(g,{})})})):((0,r.qcZ)(d)&&(0,r.Jy1)(d)&&"cart"===e&&(S&&console.debug("Whatmore : initiating whatmore attribution from cart page."),(0,l.Cj)("true"===_)),(0,p.jsx)(p.Fragment,{}))}return"index"===e||"collection"===e?(0,u.ru)(j)?(S&&console.debug("Whatmore : External, rendering index/collection page popup : "+j),(0,p.jsx)(p.Fragment,{})):(S&&console.debug("Whatmore : External, rendering index/collection page carousels : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(g,{})})})):e.startsWith("product")||"embed"===e?(0,u.yK)(j)||(0,u.ru)(j)?(0,r.Nbw)(d)?(S&&console.debug("Whatmore : External, rendering PDP-page popup : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(v,{})})})):(S&&console.debug("Whatmore : External, PDP-page popup disabled."),(0,p.jsx)(p.Fragment,{})):(S&&console.debug("Whatmore : External, rendering PDP-page carousels : "+j),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.Suspense,{children:(0,p.jsx)(g,{})})})):(0,p.jsx)(p.Fragment,{})}},5416:function(t,e,n){"use strict";function o(){return!(void 0==window.Shopify&&!window.location.href.includes("shopify")&&!window.location.href.includes("localhost:"))}n.d(e,{G:function(){return o}})},7381:function(t,e,n){"use strict";n.d(e,{EI:function(){return l},Oo:function(){return c},fs:function(){return a}});var o=n(7753);const i=(0,o.MO)("whatmoreShopId");function r(t){console.debug("Whatmore : "+t)}function l(t){var e;const n=null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e;n&&(r("total events received : "+(t&&t.length)),r("events data : "+JSON.stringify(t)))}function a(t){var e;null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e&&r(t)}const c=t=>{"STR60LW4WMA"!=i&&console.log(`%c ${t}`,"background: #D53F8C; color: white; font-size: 19px; padding: 5px; font-weight: semibold;","\n\nFind us here -> https://whatmore.live")}},4844:function(t,e,n){"use strict";n.d(e,{wW:function(){return d},Cj:function(){return u},JL:function(){return h},bj:function(){return f},Bi:function(){return c},Mj:function(){return s},bN:function(){return m},m3:function(){return p}});var o=n(9854);const i="_whatmore-tracking-id";var r=n(2751),l=n(6967),a=n(7753);function c(){const t="https://"+window.location.hostname+"/cart.json";return fetch(t,{method:"GET"})}async function s(){const t="https://"+window.location.hostname+"/cart.json";return await fetch(t,{method:"GET"})}async function u(t){let e=(0,r.x0)(),n=null,o=null,c={},u=null,d=null,f=null,h={};(0,l.MU)().forEach((t=>{h.hasOwnProperty(null===t||void 0===t?void 0:t.product_id)||(h[null===t||void 0===t?void 0:t.product_id]={widgetInfo:null===t||void 0===t?void 0:t.widget_info,location:null===t||void 0===t?void 0:t.location,userType:null===t||void 0===t?void 0:t.user_type})})),await s().then((t=>t.json())).then((r=>{e=r.token;let s=[];if(s=!0===t?r.items.filter((t=>h.hasOwnProperty(JSON.stringify(t.variant_id)))).map((t=>{const e=h[null===t||void 0===t?void 0:t.variant_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})):r.items.filter((t=>h.hasOwnProperty(JSON.stringify(t.product_id)))).map((t=>{const e=h[null===t||void 0===t?void 0:t.product_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})),0==s.length)return console.debug("Whatmore :: no cart items available for view products"),null;s.map((t=>{if(n=t.key,o=t.quantity,c=t.properties,u=t.widget_info,d=t.location,f=t.userType,null===c||!(i in c)){const t=async function(t,e,n,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",c=arguments.length>5?arguments[5]:void 0;const s=(0,a.MO)("whatmoreShopId"),u=(0,l.hb)()+("72201044272"==s?`#${o}#${r}#${c?"olduser":"newuser"}`:`#${o}`);let d={id:t,quantity:e,properties:{[i]:u,...n}};return await fetch("https://"+window.location.hostname+"/cart/change.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((t=>t.json())).catch((t=>{console.error("Whatmore :: Error while updating cart attribute.",t)}))}(n,o,c,u,d,f);return t}}))})).catch((t=>{console.error("Whatmore :: Error while fetching cart_token for cart attribute update.",t)}))}async function d(t,e,n,r){let a,c,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",u=arguments.length>5?arguments[5]:void 0,d=arguments.length>6?arguments[6]:void 0;if((0,o.qcZ)(n)){const o=(0,l.hb)()+("72201044272"==n?`#${r}#${s}#${u?"olduser":"newuser"}:direct`:`#${r}:direct`);if(a={items:[{id:t,quantity:e,properties:{[i]:o}}]},"77105758517"==n){c=new URLSearchParams,c.append("product-id",null===d||void 0===d?void 0:d.client_product_id),c.append("id",t),c.append("quantity",e);return await fetch("https://"+window.location.hostname+"/cart/add.js",{method:"POST",body:c})}}else a={items:[{id:t,quantity:e}]};const f=await fetch("https://"+window.location.hostname+"/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});return f}function f(t,e,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",l=arguments.length>5?arguments[5]:void 0;const a="https://"+window.location.hostname;var c;const s="72201044272"==n?`came-from-whatmore-live_${i}_${r}_${l?"olduser":"newuser"}`:`came-from-whatmore-live_${i}`;(0,o.lj5)(n)?(c=`${a}/cart/${t}:${e}?`+(0,o.awP)(n)+"&"+(0,o.n9s)(n)+"&"+(0,o.Uch)(n),(0,o.qcZ)(n)&&(c=`${c}&ref=`+s)):(c=`${a}/cart/${t}:${e}`,(0,o.qcZ)(n)&&(c=`${c}?ref=`+s)),window.location.href=c}function h(t){const e="https://"+window.location.hostname+"/cart";(0,o.lj5)(t)?window.location.href=e+"?"+(0,o.awP)(t)+"&"+(0,o.n9s)(t)+"&"+(0,o.poG)(t):window.location.href=e}async function m(t){let e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("27303477337"===n){var o,i;const n="https://"+window.location.hostname,r=window.location.pathname.split("/");e=n+"/"+(null!==r&&void 0!==r&&null!==(o=r[1])&&void 0!==o&&o.startsWith("en-")?(null===r||void 0===r?void 0:r[1])+"/":"")+(null===t||void 0===t||null===(i=t.product_link)||void 0===i?void 0:i.split(".co")[1])+".js"}else e=(null===t||void 0===t?void 0:t.product_link)+".js";const r=await fetch(e,{method:"GET"});if(!r.ok)throw new Error(`Error! status: ${r.status}`);const l=await r.json();return l}async function p(t){const e=t.product_link+".json",n=await fetch(e,{method:"GET"});if(!n.ok)throw new Error(`Error! status: ${n.status}`);return await n.json()}},6967:function(t,e,n){"use strict";n.d(e,{FF:function(){return y},H4:function(){return _},MU:function(){return j},hb:function(){return w},sQ:function(){return S},xV:function(){return b},xw:function(){return x}});var o=n(2751),i=n(7753),r=n(7008);const l="_whatmore_user_id",a="_whatmore_session_id",c="_whatmore_viewed_products",s="_whatmore_add_to_cart_products",u="_whatmore_session_time",d="_whatmore_store_id",f="_whatmore_qview_index",h="_whatmore_brand_questions",m=(0,i.MO)("whatmoreShopId"),p=18e5,g=2592e5,v="_whatmore_bulk_events";function w(){return localStorage.getItem(d)!=m&&localStorage.setItem(d,m),null==localStorage.getItem(l)&&function(){new Date;const t=(0,o.x0)();localStorage.setItem(l,t)}(),localStorage.getItem(l)}function S(){const t=new Date,e=JSON.parse(localStorage.getItem(v))||[],n=localStorage.getItem(u);return(null==localStorage.getItem(a)||null==n||t.getTime()>n)&&(localStorage.removeItem(a),localStorage.removeItem(u),function(){const t=(0,o.x0)(),e=(new Date).getTime()+p;localStorage.setItem(a,t),localStorage.setItem(u,e)}(),e&&e.length>0&&((0,r.K)(e),localStorage.removeItem(v))),localStorage.getItem(a)}function y(t,e,n,o,i){const r=(new Date).getTime(),l={event_id:t.event_id,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:r,widget_info:n,location:o,user_type:i?"olduser":"newuser",variants:[]};if(null===localStorage.getItem(s))localStorage.setItem(s,JSON.stringify([l]));else{let t=JSON.parse(localStorage.getItem(s)).filter((t=>t.timestamp+g>r));localStorage.setItem(s,JSON.stringify([...t,l]))}}function _(t,e,n,o,i){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default",l=arguments.length>6?arguments[6]:void 0;const a=[],s=(new Date).getTime();if(e.map((e=>{const c={event_id:t,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:s,variants:[],page:n,widget_type:o,widget_info:i,location:r,user_type:l?"olduser":"newuser"};a.push(c)})),null===localStorage.getItem(c))console.debug("viewed Products",JSON.stringify(a)),localStorage.setItem(c,JSON.stringify(a));else{let e=JSON.parse(localStorage.getItem(c)),n=!1;e.map((e=>{let o=Object.assign({},e);return e.event_id===t&&(e.timestamp=s,n=!0),o})),n?localStorage.setItem(c,JSON.stringify(e)):localStorage.setItem(c,JSON.stringify([...e,...a]))}}function j(){const t=(new Date).getTime();let e=JSON.parse(localStorage.getItem(c));if(!e)return[];let n=e.filter((e=>e.timestamp+g>t));return localStorage.setItem(c,JSON.stringify(n)),n}function x(){if(null!=localStorage.getItem(f)){const t=parseInt(localStorage.getItem(f))+1;localStorage.setItem(f,t)}}function b(t){const e=(new Date).getTime();if(null==localStorage.getItem(h)){const n={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(n))}else{const n=JSON.parse(localStorage.getItem(h));if((null===n||void 0===n?void 0:n.timestamp)+6e5>e){const n={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(n))}}}},7008:function(t,e,n){"use strict";n.d(e,{K:function(){return r}});var o=n(2860),i=n(7381);const r=function(t){let e={};const n=t.length<10;e.metric_event_list=t,(async()=>{!function(t,e){const n="ingesting analytis-event";(0,i.fs)(n);const r=t;fetch(o.DG+"/event_metrics/bulk",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r),keepalive:e}).then((t=>t.json())).then((t=>{})).catch((t=>{console.error("error "+n,t)}))}(e,n)})()}},8624:function(t,e,n){var o=n(7289).Symbol;t.exports=o},8665:function(t,e,n){var o=n(8624),i=n(3596),r=n(8186),l=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?i(t):r(t)}},2306:function(t,e,n){var o=n(5510),i=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(i,""):t}},2692:function(t,e,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=o},3596:function(t,e,n){var o=n(8624),i=Object.prototype,r=i.hasOwnProperty,l=i.toString,a=o?o.toStringTag:void 0;t.exports=function(t){var e=r.call(t,a),n=t[a];try{t[a]=void 0;var o=!0}catch(c){}var i=l.call(t);return o&&(e?t[a]=n:delete t[a]),i}},8186:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},7289:function(t,e,n){var o=n(2692),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();t.exports=r},5510:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},2279:function(t,e,n){var o=n(1845),i=n(6170),r=n(7923),l=Math.max,a=Math.min;t.exports=function(t,e,n){var c,s,u,d,f,h,m=0,p=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var n=c,o=s;return c=s=void 0,m=e,d=t.apply(o,n)}function S(t){return m=t,f=setTimeout(_,e),p?w(t):d}function y(t){var n=t-h;return void 0===h||n>=e||n<0||g&&t-m>=u}function _(){var t=i();if(y(t))return j(t);f=setTimeout(_,function(t){var n=e-(t-h);return g?a(n,u-(t-m)):n}(t))}function j(t){return f=void 0,v&&c?w(t):(c=s=void 0,d)}function x(){var t=i(),n=y(t);if(c=arguments,s=this,h=t,n){if(void 0===f)return S(h);if(g)return clearTimeout(f),f=setTimeout(_,e),w(h)}return void 0===f&&(f=setTimeout(_,e)),d}return e=r(e)||0,o(n)&&(p=!!n.leading,u=(g="maxWait"in n)?l(r(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=h=s=f=void 0},x.flush=function(){return void 0===f?d:j(i())},x}},1845:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},9752:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},2060:function(t,e,n){var o=n(8665),i=n(9752);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==o(t)}},6170:function(t,e,n){var o=n(7289);t.exports=function(){return o.Date.now()}},7923:function(t,e,n){var o=n(2306),i=n(1845),r=n(2060),l=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=a.test(t);return n||c.test(t)?s(t.slice(2),n?2:8):l.test(t)?NaN:+t}},2751:function(t,e,n){"use strict";n.d(e,{x0:function(){return o}});let o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}}]);