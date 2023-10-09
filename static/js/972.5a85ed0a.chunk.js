"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[972],{7381:function(e,t,n){n.d(t,{E:function(){return r}});function o(e){console.debug("Whatmore : "+e)}function r(e){var t;const n=null!==(t="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==t&&t;n&&(o("total events received : "+(e&&e.length)),o("events data : "+JSON.stringify(e)))}},3972:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var o=n(7753),r=n(7313),i=n(2860),a=n(499),s=n(4897),c=n(5160),u=n(9854),d=n(6967),l=n(8984),h=n(58),p=n(4669),v=n(941),m=n(4136),g=n(7300),f=n(6524),y=n(6417);const b=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(240),n.e(210),n.e(926),n.e(950),n.e(303),n.e(891)]).then(n.bind(n,4095)))),S=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(240),n.e(576),n.e(950),n.e(364),n.e(530)]).then(n.bind(n,5523)))),_=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(926),n.e(950),n.e(358)]).then(n.bind(n,3827)))),T=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(926),n.e(950),n.e(870)]).then(n.bind(n,6071)))),w=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(926),n.e(950),n.e(708)]).then(n.bind(n,1291)))),j=r.lazy((()=>Promise.all([n.e(302),n.e(580)]).then(n.bind(n,3580)))),I=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(240),n.e(576),n.e(210),n.e(803),n.e(926),n.e(303),n.e(607),n.e(68)]).then(n.bind(n,2607)))),x=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(240),n.e(210),n.e(926),n.e(950),n.e(959)]).then(n.bind(n,4048)))),C=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(367),n.e(240),n.e(576),n.e(950),n.e(303),n.e(364),n.e(67)]).then(n.bind(n,4362)))),E=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(319),n.e(240),n.e(576),n.e(210),n.e(803),n.e(926),n.e(303),n.e(607),n.e(334)]).then(n.bind(n,4658))));var O=function(e){const[t]=(0,o.j1)("isInDesignMode"),[n]=(0,o.j1)("isDemoBrand"),[O]=(0,o.j1)("whatmoreTopBottomPadding"),[P]=(0,o.j1)("whatmoreStoriesTopBottomPadding"),{whatmoreIsStoriesTemplate:M}=(0,r.useContext)(m.I),[k]=(0,o.j1)("whatmoreShopId"),{whatmoreEventsBrowsingTemplate:D}=(0,r.useContext)(m.I),L=(0,o.MO)("isLandingSharedLink"),N=(0,o.MO)("whatmoreShareTemplateId"),A=(0,o.MO)("whatmoreShareStoryId"),G=(0,o.MO)("whatmoreShareEventId"),[J,Z]=(0,r.useState)(-1),[z,H]=(0,r.useState)(null);var U=e.events,B=null;function R(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,l.KE)()&&!o&&(0,h.QV)(),t||n||(async()=>{const t=B[e].events[0];(0,c.wh)(t),(0,p.Tc)(k,i.Xh,i.OW),(0,d.H4)(t.event_id,t.products,"homepage","stories")})();var a=0;null!=r&&B[e].events.map(((e,t)=>{e.event_id==r&&(a=t)})),Z(a),H(e)}function V(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,l.KE)()&&!o&&(0,h.QV)(),(0,g.B6)(e)||(0,g.WJ)(e))return t||n||(async()=>{(0,c.wh)(e),(0,p.Tc)(k,i.Xh,i.pR),(0,d.H4)(e.event_id,e.products,"homepage","carousel")})(),void Z(e.index);const r=20;var{status:u,bannerText:v,timeToStartInMins:m}=s.Z.getEventStatus(e);m<=r&&u.name!==a.Z.LIVE.name?console.debug(" TODO : show toast on upcoming live event."):Z(e.index)}function W(e){return(0,y.jsx)(y.Fragment,{})}return M&&!B&&(B=function(e){var t=e.reduce(((e,t,n)=>{var o=t.storyset_id;return o in e?(e[o].total_events=e[o].total_events+1,e[o].events.push(t)):e[o]={id:t.storyset_id,title:t.storyset_name,thumbnail_image:t.storyset_thumbnail_image,total_events:1,start_event_index:n,events:[t]},e}),{}),n=Object.values(t);return n.sort(((e,t)=>e.start_event_index-t.start_event_index)),n}(U)),(0,r.useEffect)((()=>{L&&D==(0,f.zv)(N)&&(null!=A&&M?B.forEach(((e,t)=>{A==e.id&&R(t,!0,G)})):null!=G&&U.forEach(((e,t)=>{G==e.event_id&&V(e,!0)})))}),[]),(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{style:{marginTop:(M?P:O)+"px",marginBottom:(M?P:O)+"px"},children:"template-b"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(b,{events:U,onClick:V,heading:e.heading})}):"template-a-1"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(S,{events:U,onClick:V,heading:e.heading})}):"template-feed-a"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(C,{events:U,onClick:V,heading:e.heading})}):"template-collections-a"===D||"template-c"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(_,{events:U,onClick:V,heading:e.heading})}):"template-collections-b"===D||"template-d"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(T,{events:U,onClick:V,heading:e.heading})}):"template-collections-c"===D||"template-e"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(w,{events:U,onClick:V,heading:e.heading})}):"template-collections-d"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(b,{events:U,onClick:V,heading:e.heading})}):"template-collections-e"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(x,{events:U,onClick:V,heading:e.heading})}):"template-banner-a"===D?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(E,{events:U})}):M?(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(j,{eventsStories:B,onClick:R,template:D})}):(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(x,{events:U,onClick:V,heading:e.heading})})}),-1==J?(0,y.jsx)(W,{}):(0,y.jsx)(r.Suspense,{children:(0,y.jsx)(I,{events:U,index:J,onBack:function(e){(0,u.n2)(k)&&(0,o.MO)("whatmoreAddedToCart")&&(0,v.D)(k,(()=>{}),100,window.location.hostname),Z(-1)},slideDirection:M||"horizontal"===(0,u.e8)(k)?"horizontal":"vertical",eventsStories:B,initialStoryIndex:z,template:D})})]})};const P=function(e,t,n){const r=(0,o.MO)("whatmoreShopId");var i=t.reduce(((e,t,n)=>(t.products.map((e=>e.client_product_id)).forEach((t=>{t in e||(e[t]=!0)})),e)),{}),a=Object.keys(i);if("60960964855"==r&&"undefined"!=typeof fera&&"function"===typeof fera.getRatings){var s={};fera.getRatings(a,(e=>{new Promise(((t,n)=>{e.forEach((e=>{s[e.external_product_id]={avgRating:e.average,totalRatings:e.count}})),t(s)})).then((e=>n(e)))}))}if("23114481744"==r){const e="1e6MQXxzYR19mpw9Km6Dcm86";s={};fetch("https://api.juniphq.com/v1/products?filter[remote_ids]="+a.toString(),{headers:{"Junip-Store-Key":e}}).then((e=>e.json())).then((e=>(e.products.forEach((e=>{s[e.remote_id]={avgRating:parseFloat(e.rating_average).toFixed(1),totalRatings:e.rating_count}})),s))).then((e=>n(e))).catch((e=>console.error(e)))}};var M=n(3388),k=n(7381);var D=function(e){const[t,n]=(0,r.useState)(),[a,s]=(0,r.useState)(),{whatmoreIsStoriesTemplate:c}=(0,r.useContext)(m.I),{whatmoreIsCollectionsTemplate:p}=(0,r.useContext)(m.I),{whatmoreIsBannerTemplate:v}=(0,r.useContext)(m.I),[g]=(0,o.j1)("whatmoreShopId"),[b]=(0,o.j1)("whatmoreCollectionId"),S=(0,o.MO)("whatmoreLandingLocationType"),_=(0,o.MO)("whatmoreLoggingActive"),T=(0,u.cZ)(g)?window.location.href.split(/[?#]/)[0]:b,[w,j]=(0,o.j1)("productRatings");var I=(0,u.ef)(g)?i.Dm+"/v2/events/":i.Gc+"/v2/events/",x=(0,u.ef)(g)?i.Dm+"/get_eventset/":i.Gc+"/get_eventset/",C=(0,u.ef)(g)?i.Dm+"/v2/collection":i.Gc+"/v2/collection",E=(0,u.ef)(g)?i.Dm+"/v2/brand/"+g+"/product-events":i.Gc+"/v2/brand/"+g+"/product-events",D=e.shopId,L="live,upcoming";return(0,r.useEffect)((()=>{(0,d.hb)()}),[]),(0,r.useEffect)((()=>{null==t||0==t.length||a||!(0,l.KE)()||(0,o.MO)("whatmoreVideoPlayerPoolInitiated")||(0,h.b5)(h.UD)}),[t]),(0,r.useEffect)((()=>{var e;if(S.startsWith("product")){const t=(0,o.MO)("whatmoreProductId");e=E.toString()+"?client_product_id="+t.toString()+"&status="+L.toString()+"&event_type=video"}else if(p)e=C.toString()+"?store_id="+D.toString()+"&client_collection_id="+T;else if(v){const t=f.ls,n=(0,f.H1)(S);e=x.toString()+D.toString()+"?eventset_type="+t+"&source="+n+"&source_id="+g}else e=I.toString()+D.toString()+"?status="+L.toString()+"&is_active="+"true".toString()+(c?"&template_type=stories":"");fetch(e).then((e=>e.json())).then((e=>{if(v){const t=f.ls;return(0,M.OC)(e,t)}return(0,M.kW)(e,p)})).then((e=>(_&&console.debug("initial received events size : "+e.length),c||v?e:(0,M.e8)(e,D)))).then((e=>(null!=e&&0!=e.length&&(0,u.LU)(g)&&function(e,t,n){const r=setInterval((()=>{null===(0,o.MO)("productRatings")&&P(e,t,n)}),1e3);setTimeout((()=>{clearInterval(r)}),1e4)}(g,e,(e=>{j(e)})),e))).then((e=>{null==e||0==e.length||c||(0,u.NO)(D,e),n(e)})).catch((e=>{s(e.message)}))}),[]),null==t||0==t.length||a?(0,y.jsx)("div",{}):(_&&(0,k.E)(t),function(e,t){if(null!=e){var n=0;e.forEach((e=>{e.index=n++}))}}(t),_&&console.debug("final transformed events data : "+JSON.stringify(t)),_&&console.debug("valid events size : "+t.length),(0,y.jsx)("div",{children:(0,y.jsx)(O,{heading:e.heading,events:t})},"whatmore-main-coponent"))};var L=function(e){const[t]=(0,o.j1)("isInDesignMode"),[n]=(0,o.j1)("isDemoBrand"),[a]=(0,o.j1)("whatmoreShopId"),[s]=(0,o.j1)("whatmoreHeading"),[c]=(0,o.j1)("whatmorePrimaryColor"),[u]=(0,o.j1)("whatmoreSecondaryColor");return(0,r.useEffect)((()=>{(0,p.ll)(a)}),[]),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("div",{children:t||n?(0,y.jsx)("div",{children:(0,y.jsx)(D,{heading:s,shopId:i.aA})}):(0,y.jsx)("div",{children:(0,y.jsx)(D,{heading:s,shopId:a})})})})}},499:function(e,t){t.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(e,t,n){var o=n(499);t.Z=class{static getEventStatus(e){e.time_zone="GMT+5:30";var t=e.start_time+":00",n=e.end_time,r=e.scheduled_date,i=e.status,a=e.time_zone;if(i.toUpperCase()==o.Z.LIVE.name)return{status:o.Z.LIVE,bannerText:" "+o.Z.LIVE.name+" ",timeToStartInMins:0};if(i.toUpperCase()==o.Z.UPCOMING.name){var s=new Date(r+" "+t+" "+a),c=(new Date(r+" "+n+" "+a),function(e){var t=new Date,n=(e.getTime()-t.getTime())/1e3,r=n/60,i=r/60,a=i/24;return n<=0?{status:o.Z.COMPLETED,bannerText:" "+o.Z.COMPLETED.name+" ",timeToStartInMins:0}:n>=1&&n<=30?{status:o.Z.UPCOMING,bannerText:"Starts in "+Math.round(n)+" sec ",timeToStartInMins:n/60}:r<60?{status:o.Z.UPCOMING,bannerText:"Starts in "+Math.round(r)+" min ",timeToStartInMins:r}:i<24?{status:o.Z.UPCOMING,bannerText:"Starts in "+Math.round(i)+" hr ",timeToStartInMins:60*i}:a<7?{status:o.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" ",timeToStartInMins:60*a*24}:{status:o.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(s));return{status:c.status,bannerText:c.bannerText,timeToStartInMins:c.timeToStartInMins}}return console.error("invalid status for event :: id : "+e.event_id+", status : "+e.status),{status:o.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},941:function(e,t,n){n.d(t,{D:function(){return o}});const o=async function(e,t,n,o){if("STRNV8MHJTF"!=e&&"STR6HU283UZ"!=e&&"STR9T3LLEJB"!=e&&"STRWJMIOJNX"!=e&&"STRUDQ36YAC"!=e&&"STR1D5ONOZX"!=e){var r=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("27358003275"==e||"63748341981"==e||"68237558034"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:r,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(r),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e||"4243849314"==e||"57708314789"==e){(new theme.CartDrawer).open()}else if("62602182872"==e||"57362710572"==e)CartJS.getCart(),$(".block-cart").addClass("active");else if("60492578980"==e||"12183765088"==e||"58546946211"==e||"42070737058"==e||"71321583919"==e||"68492624171"==e||"74541891876"==e)document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}));else if("2665447536"==e)fetch("/?section_id=cart-drawer").then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"text/html").getElementById("cart-drawer").innerHTML;$("#cart-drawer").html(t),$('[aria-controls="cart-drawer"]')[0].click(),$(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity",1)}));else if("57824805033"==e||"59504656436"==e||"58112966749"==e)fetch("/cart.json").then((e=>e.json())).then((e=>{fetch("/cart?view=item").then((e=>e.text())).then((t=>{const n=(new DOMParser).parseFromString(t,"text/html"),o=n.getElementById("CartDrawer"),r=document.getElementById("CartDrawer");o&&r&&(r.innerHTML=o.innerHTML),n.querySelector("#CartDrawer .totals__subtotal-value");const i=document.querySelector("cart-drawer");i&&i.classList.remove("is-empty");const a=document.querySelector("cart-drawer-items");a&&a.classList.remove("is-empty");const s=document.getElementById("cart-icon-bubble");if(s.querySelector(".cart-count-bubble"))s.querySelectorAll('.cart-count-bubble span[aria-hidden="true"]').forEach((t=>{t.textContent=e.item_count}));else{const t=document.createElement("div");t.className="cart-count-bubble",t.innerHTML='\n                            <span aria-hidden="true">'.concat(e.item_count,'</span>\n                            <span class="visually-hidden">').concat(e.item_count," items</span>\n                        "),s.appendChild(t)}s.click(),document.getElementById("CartDrawer-Overlay").addEventListener("click",(()=>{const e=document.querySelector("cart-drawer");e&&e.classList.remove("active"),document.body.classList.remove("overflow-hidden")}))}))}));else if("61094723750"==e)SLIDECART&&(SLIDECART_UPDATE(),SLIDECART_OPEN());else if("10272035"==e){const e=document.querySelector(".cart-drawer"),t=e.parentNode;t.classList.add("menu-opening"),t.setAttribute("open","open"),e.style.visibility="visible",e.style.transform="translate(0)"}else document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}else{console.log("Executing cart refresh script..");document.getElementById("whatsmorecart").value=Math.random()}}},3388:function(e,t,n){n.d(t,{OC:function(){return s},e8:function(){return i},kT:function(){return o},kW:function(){return a},xg:function(){return r}});const o=function(e,t){return!((void 0==e.products||0==e.products.length)&&(void 0==e.cta||0==e.cta.length))},r=function(e,t){return!(void 0==e.products||0==e.products.length)},i=function(e,t){if(null!=e)return e.filter((e=>1==o(e)))},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e)return t?e.events[0].events:e.events};const s=function(e,t){var n;if(null==e)return[];if(!("eventsets"in e))return[];const o=null!==(n=e.eventsets[t])&&void 0!==n?n:null;return o?function(e){if(null==e||0==e.length)return[];let t=[];return e.forEach((e=>{e.events.forEach((e=>{t.push(e)}))})),t}(o):[]}},7300:function(e,t,n){n.d(t,{B6:function(){return o},WJ:function(){return r},yC:function(){return i}});const o=function(e){return"video"===e.event_type},r=function(e){return"image"===e.event_type},i=function(e){return"livestream"===e.event_type}},5160:function(e,t,n){n.d(t,{$L:function(){return l},JX:function(){return d},Z6:function(){return s},rp:function(){return h},wh:function(){return a},wz:function(){return u},x0:function(){return c}});var o,r=n(2860);n(7753);const i=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o;function a(e){i&&console.debug("updating user view count for event.");const t={event_id:e.event_id,increase_by:1};fetch(r.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(i&&console.debug("updating user view count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating user view count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating user view count user for event : ",e)}))}function s(e,t){i&&console.debug("updating like count for event.");const n={event_id:e.event_id,increase_by:t};fetch(r.Gc+"/event/metrics/like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(i&&console.debug("updating like count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating like count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating like count user for event : ",e)}))}function c(e){i&&console.debug("updating share count for event.");const t={event_id:e.event_id,increase_by:1};fetch(r.Gc+"/event/metrics/share",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(i&&console.debug("updating share count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating share count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating share count user for event : ",e)}))}function u(e,t){i&&console.debug("updating event-product click count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(r.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(i&&console.debug("updating user event-product click count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating user event-product click count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product click count for event {} : ",e.event_id,t)}))}function d(e,t,n){i&&console.debug("updating event-product add to cart count for event {} and product {}.",e.event_id,t.product_id);const o={event_id:e.event_id,product_id:t.product_id,increase_by:n};fetch(r.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>(i&&console.debug("updating user event-product add to cart count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating user event-product add to cart count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product add to cart count for event {} : ",e.event_id,t)}))}function l(e,t){i&&console.debug("updating event-product buy now count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(r.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(i&&console.debug("updating user event-product buy now count response : HTTP "+e.status),e.json()))).then((e=>{i&&console.debug("updating user event-product buy now count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product buy now count for event {} : ",e.event_id,t)}))}async function h(){let{storeId:e="",eventId:t=0,productId:n="",variantId:o="",cartToken:a="",checkoutToken:s="",quantity:c=0,price:u="",actionType:d="",trackingId:l=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},h={event_id:t,product_id:n,cart_token:a,checkout_token:s,quantity:c,price:u,variant_id:o,action_type:d,tracking_id:l};i&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",t,n,o);const p=await fetch(r.Gc+"/cart-metadata/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(h)}).then((e=>(i&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+e.status),e.json()))).catch((e=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",t,n,o)}));return p}},4669:function(e,t,n){n.d(t,{Tc:function(){return p},ll:function(){return h}});var o,r=n(1824),i=n(7786),a=n(9854);n(7753);const s="Whatmore Video Shopping",c=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o,u="Video View",d={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},l={homepage:"Home Page",product_page:"Product Page"};async function h(e){if((0,a.Dv)(e)&&null!==(0,a.hf)(e)&&(i.ZP.initialize((0,a.hf)(e)),c&&console.debug("Whatmore: initialized GA4")),(0,a.hv)(e)&&null!==(0,a.BH)(e)){const t=(0,a.OQ)(e);r.ZP.initialize((0,a.BH)(e),{useExistingGa:t}),c&&console.debug("Whatmore: initialized GA3")}}async function p(e,t,n){(0,a.hv)(e)&&null!==(0,a.BH)(e)&&(r.ZP.event({category:s,action:u,label:l[t]+":"+d[n]}),c&&console.debug("Whatmore: pushed view event to GA3")),(0,a.Dv)(e)&&null!==(0,a.hf)(e)&&(i.ZP.event({category:s,action:u+":"+l[t]+":"+d[n],value:1,nonInteraction:!1}),c&&console.debug("Whatmore: pushed view event to GA4"))}}}]);