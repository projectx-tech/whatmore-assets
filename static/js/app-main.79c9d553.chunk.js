(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[590],{7220:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return _}});var n=o(5830),i=o(9950),r=o(1348),a=o(1745);const l=function(t){new PerformanceObserver((e=>{for(const o of e.getEntries()){[`${window.location.origin}/cart/add.js`,`${window.location.origin}/cart/add`].includes(o.name)&&(console.debug("Whatmore :: Fetch request detected to",o.name),(0,r.dnh)(whatmoreShopId)&&setTimeout((()=>{(0,a.sw)(t)}),1e3))}})).observe({entryTypes:["resource"]})};var c=o(7740),s=o(4737),u=o(4833);var d,f=o(5491),h=o.n(f),p=o(964),m=o(4414);const g=i.lazy((()=>Promise.all([o.e(286),o.e(461),o.e(760)]).then(o.bind(o,1746)))),v=i.lazy((()=>Promise.all([o.e(572),o.e(526),o.e(879),o.e(286),o.e(296),o.e(461),o.e(774)]).then(o.bind(o,3389)))),w=i.lazy((()=>Promise.all([o.e(572),o.e(526),o.e(879),o.e(286),o.e(296),o.e(461),o.e(717)]).then(o.bind(o,8154)))),S=null!==(d="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==d&&d;let y=h()((t=>{fetch(p.$$+"/customization/frontend/"+t).then((t=>t.json())).then((e=>{(0,r.Tzr)(e,t),(0,n.t2)("brandCustomizationsLoaded",!0)})).catch((t=>{console.error("Whatmore : Error while fetching brandCustomizations : "+t)}))}),100,{leading:!0,trailing:!1});var _=function(){var t;const[e]=(0,n.QN)("whatmoreLandingLocationType"),[d]=(0,n.QN)("whatmoreShopId"),f=(0,n.Xd)("isInDesignMode"),[h,p]=(0,n.QN)("brandCustomizationsLoaded"),[_]=(0,n.QN)("whatmoreEmbedAppUseVariant"),{whatmoreEventsBrowsingTemplate:b}=(0,i.useContext)(s.B),[j]=null===(t=performance)||void 0===t?void 0:t.getEntriesByType("navigation");if((0,i.useEffect)((()=>{if(!h){const t=3e5;(0,r.tVc)(t)&&"reload"!=(null===j||void 0===j?void 0:j.type)?p(!0):y(d)}null==localStorage.getItem("_user_wh_lc")&&"72201044272"==d&&o.e(259).then(o.bind(o,3446)).then((t=>{let{getLocationDetails:e}=t;return e()})).then((t=>(localStorage.setItem("_user_wh_lc",JSON.stringify(t)),{}))).catch((t=>{localStorage.setItem("_user_wh_lc",JSON.stringify({latitude:"",longitude:""})),console.error(`Error: ${t}`)}))}),[]),(0,i.useEffect)((()=>{l("true"===_),(0,r.WmJ)(d)&&function(t){let e=document.createElement("style");e.innerHTML=t,document.head.appendChild(e)}((0,r.WmJ)(d))}),[h]),!h)return(0,m.jsx)(m.Fragment,{});if((0,c.U)()){if((0,u.Ig)(b))return(0,m.jsx)(m.Fragment,{});if("index"===e||"collection"===e||e.startsWith("collection")||e.startsWith("page")){if(!(0,u.io)(b))return S&&console.debug("Whatmore : Shopify, rendering index/collection page carousels : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(g,{})})});if(function(){var t,e,o,i,a,l,c,s,u,h,p,m;const g=(0,n.Xd)("whatmoreCollectionId");return f||(null===(t=window)||void 0===t||null===(e=t.Shopify)||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.role)&&"main"!==(null===(i=window)||void 0===i||null===(a=i.Shopify)||void 0===a||null===(l=a.theme)||void 0===l?void 0:l.role)||(0,r.hbj)(d)&&(null===(c=window)||void 0===c||null===(s=c.Shopify)||void 0===s||null===(u=s.theme)||void 0===u?void 0:u.role)&&"main"===(null===(h=window)||void 0===h||null===(p=h.Shopify)||void 0===p||null===(m=p.theme)||void 0===m?void 0:m.role)&&((0,r.R2w)(d)||g&&(0,r.Idi)(d).includes(g))}())return S&&console.debug("Whatmore : Shopify, rendering index/collection page spotlight : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(w,{})})})}var x,I,T,O,N,$,W,E,P,J,k,F;return e.startsWith("product")?(0,u.io)(b)?(null!==(x=window)&&void 0!==x&&null!==(I=x.Shopify)&&void 0!==I&&null!==(T=I.theme)&&void 0!==T&&T.role&&"main"===(null===(O=window)||void 0===O||null===(N=O.Shopify)||void 0===N||null===($=N.theme)||void 0===$?void 0:$.role)||window.location.href.includes("localhost:"))&&(0,r.fDZ)(d)?(S&&console.debug("Whatmore : Shopify, rendering PDP-page popup : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(v,{})})})):(null!==(W=window)&&void 0!==W&&null!==(E=W.Shopify)&&void 0!==E&&null!==(P=E.theme)&&void 0!==P&&P.role&&"main"!==(null===(J=window)||void 0===J||null===(k=J.Shopify)||void 0===k||null===(F=k.theme)||void 0===F?void 0:F.role)||f)&&(0,r.C1J)(d)?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(v,{})})}):(S&&console.debug("Whatmore : Shopify, PDP-page popup disabled."),(0,m.jsx)(m.Fragment,{})):(S&&console.debug("Whatmore : Shopify, rendering PDP-page carousels : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(g,{})})})):((0,r.dnh)(d)&&(0,r.bQo)(d)&&"cart"===e&&(S&&console.debug("Whatmore : initiating whatmore attribution from cart page."),(0,a.sw)("true"===_)),(0,m.jsx)(m.Fragment,{}))}return"index"===e||"collection"===e?(0,u.io)(b)?(S&&console.debug("Whatmore : External, rendering index/collection page popup : "+b),(0,m.jsx)(m.Fragment,{})):(S&&console.debug("Whatmore : External, rendering index/collection page carousels : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(g,{})})})):e.startsWith("product")||"embed"===e?(0,u.Ig)(b)||(0,u.io)(b)?(0,r.fDZ)(d)?(S&&console.debug("Whatmore : External, rendering PDP-page popup : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(v,{})})})):(S&&console.debug("Whatmore : External, PDP-page popup disabled."),(0,m.jsx)(m.Fragment,{})):(S&&console.debug("Whatmore : External, rendering PDP-page carousels : "+b),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Suspense,{children:(0,m.jsx)(g,{})})})):(0,m.jsx)(m.Fragment,{})}},7740:function(t,e,o){"use strict";function n(){return!(void 0==window.Shopify&&!window.location.href.includes("shopify")&&!window.location.href.includes("localhost:"))}o.d(e,{U:function(){return n}})},6641:function(t,e,o){"use strict";o.d(e,{Fk:function(){return s},gv:function(){return c},xv:function(){return l}});var n=o(5830);const i="Whatmore : ",r=(0,n.Xd)("whatmoreShopId");function a(t){console.debug(i+t)}function l(t){var e;null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e&&(a("total events received : "+(t&&t.length)),a("events data : "+JSON.stringify(t)))}function c(t){var e;null!==(e="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==e&&e&&a(t)}const s=t=>{"STR60LW4WMA"!=r&&console.log(`%c ${t}`,"background: #D53F8C; color: white; font-size: 19px; padding: 5px; font-weight: semibold;","\n\nFind us here -> https://www.whatmore.ai")}},1745:function(t,e,o){"use strict";o.d(e,{RX:function(){return d},sw:function(){return u},iL:function(){return h},oV:function(){return f},Lt:function(){return c},js:function(){return s},tN:function(){return p},_N:function(){return m}});var n=o(1348);const i="_whatmore-tracking-id";var r=o(2089),a=o(4533),l=o(5830);function c(){const t="https://"+window.location.hostname+"/cart.json";return fetch(t,{method:"GET"})}async function s(){const t="https://"+window.location.hostname+"/cart.json";return await fetch(t,{method:"GET"})}async function u(t){var e;let o,n=(0,r.Ak)(),c=null,u=null,d={},f=null,h=null,p=null,m={};const g=(0,l.Xd)("whatmoreShopId");let v=(0,a.CK)(),w=null===(e=localStorage)||void 0===e?void 0:e.wht_is_impression,S=v.length>0;v.forEach((t=>{m.hasOwnProperty(null===t||void 0===t?void 0:t.product_id)||(m[null===t||void 0===t?void 0:t.product_id]={widgetInfo:null===t||void 0===t?void 0:t.widget_info,location:null===t||void 0===t?void 0:t.location,userType:null===t||void 0===t?void 0:t.user_type})})),await s().then((t=>t.json())).then((e=>{n=e.token,o=e.attributes;let r=[];if(r=!0===t?e.items.map((t=>{const e=m[null===t||void 0===t?void 0:t.variant_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})):e.items.map((t=>{const e=m[null===t||void 0===t?void 0:t.product_id];return{...t,location:null===e||void 0===e?void 0:e.location,userType:null===e||void 0===e?void 0:e.userType,widget_info:null===e||void 0===e?void 0:e.widgetInfo}})),0==r.length)return console.debug("Whatmore :: no cart items available for view products"),null;r.map(((e,n)=>{c=e.key,u=e.quantity,d=e.properties,f=e.widget_info,h=e.location,p=e.userType,null!==d&&i in d||!m.hasOwnProperty(JSON.stringify(!0===t?e.variant_id:e.product_id))?!w&&!S||0!=n||"25427564"!=g&&"63330517149"!=g||async function(t,e,o){const n=t?"_wvs":"_wvi",i={...e,[n]:(null!==e&&void 0!==e&&e[n],[o])},r=await fetch("https://"+window.location.hostname+"/cart/update.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({attributes:i})}).then((t=>t.json())).catch((t=>{console.error("Whatmore :: Error while updating cart attribute.",t)}))}(S,o,null===e||void 0===e?void 0:e.product_id):async function(t,e,o,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",c=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,d=arguments.length>8?arguments[8]:void 0;const f=(0,l.Xd)("whatmoreShopId"),h=s?(0,a.wm)()+("72201044272"==f?`#${n}#${r}#${c?"olduser":"newuser"}`:`#${n}`):d?"_wt_vs":u?"_wt_vi":"";if(""==h||"_wt_vs"==h||"_wt_vi"==h)return;let p={id:t,quantity:e,properties:{...h?{[i]:h}:{},...o}};const m=await fetch("https://"+window.location.hostname+"/cart/change.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then((t=>t.json())).catch((t=>{console.error("Whatmore :: Error while updating cart line item properties.",t)}))}(c,u,d,f,h,p,!0,w,S)}))})).catch((t=>{console.error("Whatmore :: Error while fetching cart_token for cart attribute update.",t)}))}async function d(t,e,o,r){let l,c,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",u=arguments.length>5?arguments[5]:void 0,d=arguments.length>6?arguments[6]:void 0;if((0,n.dnh)(o)){const n=(0,a.wm)()+("72201044272"==o?`#${r}#${s}#${u?"olduser":"newuser"}:direct`:`#${r}:direct`);if(l={items:[{id:t,quantity:e,properties:{[i]:n}}]},"77105758517"==o){c=new URLSearchParams,c.append("product-id",null===d||void 0===d?void 0:d.client_product_id),c.append("id",t),c.append("quantity",e);return await fetch("https://"+window.location.hostname+"/cart/add.js",{method:"POST",body:c})}}else l={items:[{id:t,quantity:e}]};return await fetch("https://"+window.location.hostname+"/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}function f(t,e,o,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",a=arguments.length>5?arguments[5]:void 0;const l="https://"+window.location.hostname;var c;const s="72201044272"==o?`came-from-whatmore-live_${i}_${r}_${a?"olduser":"newuser"}`:`came-from-whatmore-live_${i}`;(0,n.BLb)(o)?(c=`${l}/cart/${t}:${e}?`+(0,n.VCz)(o)+"&"+(0,n.Spk)(o)+"&"+(0,n.KMo)(o),(0,n.dnh)(o)&&(c=`${c}&ref=`+s)):(c=`${l}/cart/${t}:${e}`,(0,n.dnh)(o)&&(c=`${c}?ref=`+s)),window.location.href=c}function h(t){const e="https://"+window.location.hostname+"/cart";(0,n.BLb)(t)?window.location.href=e+"?"+(0,n.VCz)(t)+"&"+(0,n.Spk)(t)+"&"+(0,n.yD5)(t):window.location.href=e}async function p(t){let e;if("27303477337"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")){var o,n;const i="https://"+window.location.hostname,r=window.location.pathname.split("/");e=i+"/"+(null!==r&&void 0!==r&&null!==(o=r[1])&&void 0!==o&&o.startsWith("en-")?(null===r||void 0===r?void 0:r[1])+"/":"")+(null===t||void 0===t||null===(n=t.product_link)||void 0===n?void 0:n.split(".co")[1])+".js"}else e=(null===t||void 0===t?void 0:t.product_link)+".js";const i=await fetch(e,{method:"GET"});if(!i.ok)throw new Error(`Error! status: ${i.status}`);return await i.json()}async function m(t){const e=t.product_link+".json",o=await fetch(e,{method:"GET"});if(!o.ok)throw new Error(`Error! status: ${o.status}`);return await o.json()}},4533:function(t,e,o){"use strict";o.d(e,{CK:function(){return j},Ch:function(){return b},Fu:function(){return _},Hm:function(){return x},d3:function(){return I},wm:function(){return S},zv:function(){return y}});var n=o(2089),i=o(5830),r=o(4820);const a="_whatmore_user_id",l="_whatmore_session_id",c="_whatmore_viewed_products",s="_whatmore_add_to_cart_products",u="_whatmore_session_time",d="_whatmore_store_id",f="_whatmore_qview_index",h="_whatmore_brand_questions",p=(0,i.Xd)("whatmoreShopId"),m=18e5,g=2592e5,v=6e5,w="_whatmore_bulk_events";function S(){return localStorage.getItem(d)!=p&&localStorage.setItem(d,p),null==localStorage.getItem(a)&&function(){new Date;const t=(0,n.Ak)();localStorage.setItem(a,t)}(),localStorage.getItem(a)}function y(){const t=new Date,e=JSON.parse(localStorage.getItem(w))||[],o=localStorage.getItem(u);return(null==localStorage.getItem(l)||null==o||t.getTime()>o)&&(localStorage.removeItem(l),localStorage.removeItem(u),function(){const t=(0,n.Ak)(),e=(new Date).getTime()+m;localStorage.setItem(l,t),localStorage.setItem(u,e)}(),e&&e.length>0&&((0,r.u)(e),localStorage.removeItem(w))),localStorage.getItem(l)}function _(t,e,o,n,i){const r=(new Date).getTime(),a={event_id:t.event_id,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:r,widget_info:o,location:n,user_type:i?"olduser":"newuser",variants:[]};if(null===localStorage.getItem(s))localStorage.setItem(s,JSON.stringify([a]));else{let t=JSON.parse(localStorage.getItem(s)).filter((t=>t.timestamp+g>r));localStorage.setItem(s,JSON.stringify([...t,a]))}}function b(t,e,o,n,i){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default",a=arguments.length>6?arguments[6]:void 0;const l=[],s=(new Date).getTime();if(e.map((e=>{const c={event_id:t,product_id:e.client_product_id,product_title:e.title,price:e.price,timestamp:s,variants:[],page:o,widget_type:n,widget_info:i,location:r,user_type:a?"olduser":"newuser"};l.push(c)})),null===localStorage.getItem(c))console.debug("viewed Products",JSON.stringify(l)),localStorage.setItem(c,JSON.stringify(l));else{let e=JSON.parse(localStorage.getItem(c)),o=!1;e.map((e=>{let n=Object.assign({},e);return e.event_id===t&&(e.timestamp=s,o=!0),n})),o?localStorage.setItem(c,JSON.stringify(e)):localStorage.setItem(c,JSON.stringify([...e,...l]))}}function j(){const t=(new Date).getTime();let e=JSON.parse(localStorage.getItem(c));if(!e)return[];let o=e.filter((e=>e.timestamp+g>t));return localStorage.setItem(c,JSON.stringify(o)),o}function x(){if(null!=localStorage.getItem(f)){const t=parseInt(localStorage.getItem(f))+1;localStorage.setItem(f,t)}}function I(t){const e=(new Date).getTime();if(null==localStorage.getItem(h)){const o={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(o))}else{const o=JSON.parse(localStorage.getItem(h));if((null===o||void 0===o?void 0:o.timestamp)+v>e){const o={questionList:null===t||void 0===t?void 0:t.filter((t=>1==(null===t||void 0===t?void 0:t.is_active))),timestamp:e};localStorage.setItem(h,JSON.stringify(o))}}}},4820:function(t,e,o){"use strict";o.d(e,{u:function(){return r}});var n=o(964),i=o(6641);const r=function(t){let e={};const o=t.length<10;e.metric_event_list=t,(async()=>{!function(t,e){const o="ingesting analytis-event";(0,i.gv)(o);const r=t;fetch(n.qW+"/event_metrics/bulk",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r),keepalive:e}).then((t=>t.json())).then((t=>{})).catch((t=>{console.error("error "+o,t)}))}(e,o)})()}},4635:function(t,e,o){var n=o(4759).Symbol;t.exports=n},2022:function(t,e,o){var n=o(4635),i=o(1581),r=o(5336),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):r(t)}},6914:function(t,e,o){var n=o(8798),i=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(i,""):t}},6658:function(t,e,o){var n="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;t.exports=n},1581:function(t,e,o){var n=o(4635),i=Object.prototype,r=i.hasOwnProperty,a=i.toString,l=n?n.toStringTag:void 0;t.exports=function(t){var e=r.call(t,l),o=t[l];try{t[l]=void 0;var n=!0}catch(c){}var i=a.call(t);return n&&(e?t[l]=o:delete t[l]),i}},5336:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},4759:function(t,e,o){var n=o(6658),i="object"==typeof self&&self&&self.Object===Object&&self,r=n||i||Function("return this")();t.exports=r},8798:function(t){var e=/\s/;t.exports=function(t){for(var o=t.length;o--&&e.test(t.charAt(o)););return o}},5491:function(t,e,o){var n=o(4567),i=o(4378),r=o(2588),a=Math.max,l=Math.min;t.exports=function(t,e,o){var c,s,u,d,f,h,p=0,m=!1,g=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var o=c,n=s;return c=s=void 0,p=e,d=t.apply(n,o)}function S(t){var o=t-h;return void 0===h||o>=e||o<0||g&&t-p>=u}function y(){var t=i();if(S(t))return _(t);f=setTimeout(y,function(t){var o=e-(t-h);return g?l(o,u-(t-p)):o}(t))}function _(t){return f=void 0,v&&c?w(t):(c=s=void 0,d)}function b(){var t=i(),o=S(t);if(c=arguments,s=this,h=t,o){if(void 0===f)return function(t){return p=t,f=setTimeout(y,e),m?w(t):d}(h);if(g)return clearTimeout(f),f=setTimeout(y,e),w(h)}return void 0===f&&(f=setTimeout(y,e)),d}return e=r(e)||0,n(o)&&(m=!!o.leading,u=(g="maxWait"in o)?a(r(o.maxWait)||0,e):u,v="trailing"in o?!!o.trailing:v),b.cancel=function(){void 0!==f&&clearTimeout(f),p=0,c=h=s=f=void 0},b.flush=function(){return void 0===f?d:_(i())},b}},4567:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},9248:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},184:function(t,e,o){var n=o(2022),i=o(9248);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==n(t)}},4378:function(t,e,o){var n=o(4759);t.exports=function(){return n.Date.now()}},2588:function(t,e,o){var n=o(6914),i=o(4567),r=o(184),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var o=l.test(t);return o||c.test(t)?s(t.slice(2),o?2:8):a.test(t)?NaN:+t}},2089:function(t,e,o){"use strict";o.d(e,{Ak:function(){return n}});let n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}}]);