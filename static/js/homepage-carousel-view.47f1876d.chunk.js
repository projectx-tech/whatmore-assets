"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[760],{8289:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var i=n(5830),o=n(9950),a=n(964),r=n(140),l=n(1348),s=n(4533),d=n(6613),c=n(1085),u=n(3330),h=n(852),m=n(4737),p=n(2039),v=n(4833),g=n(2979),S=n(6157),_=n(5100),y=n(8945),w=n(9821),f=n(4414);const I=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(296),n.e(987),n.e(669),n.e(665)]).then(n.bind(n,8582)))),x=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(437),n.e(296),n.e(620),n.e(116)]).then(n.bind(n,7144)))),E=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(879),n.e(296),n.e(987),n.e(920),n.e(423)]).then(n.bind(n,517)))),O=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(879),n.e(296),n.e(987),n.e(920),n.e(412)]).then(n.bind(n,7646)))),T=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(879),n.e(296),n.e(987),n.e(221)]).then(n.bind(n,5451)))),C=o.lazy((()=>Promise.all([n.e(572),n.e(491)]).then(n.bind(n,3319)))),j=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(437),n.e(181),n.e(987),n.e(669),n.e(650),n.e(956)]).then(n.bind(n,8650)))),L=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(296),n.e(987),n.e(669),n.e(620),n.e(474)]).then(n.bind(n,6945)))),D=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(296),n.e(669),n.e(485)]).then(n.bind(n,9418)))),b=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(296),n.e(987),n.e(676)]).then(n.bind(n,3369)))),q=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(296),n.e(987),n.e(669),n.e(891)]).then(n.bind(n,7178)))),N=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(437),n.e(296),n.e(669),n.e(933)]).then(n.bind(n,6989)))),P=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(378),n.e(437),n.e(181),n.e(987),n.e(669),n.e(650),n.e(806)]).then(n.bind(n,3278)))),k=o.lazy((()=>Promise.all([n.e(572),n.e(714),n.e(526),n.e(879),n.e(296),n.e(987),n.e(1)]).then(n.bind(n,4596))));var W=function(e){const[t]=(0,i.QN)("isInDesignMode"),[n]=(0,i.QN)("isDemoBrand"),[W]=(0,i.QN)("whatmoreTopBottomPadding"),[A]=(0,i.QN)("whatmoreStoriesTopBottomPadding"),{whatmoreIsStoriesTemplate:F}=(0,o.useContext)(m.B),[$]=(0,i.QN)("whatmoreShopId"),{whatmoreEventsBrowsingTemplate:M}=(0,o.useContext)(m.B),B=(0,i.Xd)("isLandingSharedLink"),V=(0,i.Xd)("whatmoreShareTemplateId"),G=(0,i.Xd)("whatmoreShareStoryId"),R=(0,i.Xd)("whatmoreShareEventId"),{whatmoreWidgetSourceDetails:z,whatmoreUserInfo:K}=(0,o.useContext)(m.B),H=B&&M===(0,v.Mm)(V),[J,Q]=(0,o.useState)(H),[X,U]=(0,o.useState)(-1),[Y,Z]=(0,o.useState)(null);let ee=e.events,te=null===e||void 0===e?void 0:e.allEvents,ne=[],ie=[];if("template-banner-a"!==M){let e=0;for(let t=0;t<(null===ee||void 0===ee?void 0:ee.length);t++){var oe,ae;((0,p.ij)(ee[t])||(0,p.Il)(ee[t]))&&(null===(oe=null===(ae=ee[t])||void 0===ae?void 0:ae.in_stock)||void 0===oe||oe||(0,l.xku)($))&&(ne.push({...null===ee||void 0===ee?void 0:ee[t],index:e}),e++)}for(let t=0;t<(null===te||void 0===te?void 0:te.length);t++){var re,le;!(0,p.ij)(null===te||void 0===te?void 0:te[t])&&!(0,p.Il)(null===te||void 0===te?void 0:te[t])||null!==(re=null===te||void 0===te||null===(le=te[t])||void 0===le?void 0:le.in_stock)&&void 0!==re&&!re||(ie.push({...null===te||void 0===te?void 0:te[t],index:e}),e++)}}let se=[...ne,...ie];var de=null;F&&!de&&(de=function(e){var t=e.reduce(((e,t,n)=>{var i,o=t.storyset_id;return o in e?(e[o].total_events=e[o].total_events+1,e[o].events.push(t)):e[o]={id:t.storyset_id,title:t.storyset_name,thumbnail_image:t.storyset_thumbnail_image,total_events:1,start_event_index:n,storyset_dynamic_thumbnail:null!==(i=null===t||void 0===t?void 0:t.storyset_dynamic_thumbnail)&&void 0!==i&&i,events:[t]},e}),{}),n=Object.values(t);return n.sort(((e,t)=>e.start_event_index-t.start_event_index)),n}(ne));const ce=z.landingLocationType,ue=z.templateType;function he(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,d.MN)()&&(0,w._)()&&!i&&(0,c.bo)(),t||n||(async()=>{const t=de[e].events[0],n=(0,v.Wd)(ce)+(0,v.gf)(ue)+(null!==t&&void 0!==t&&t.isRelatedEvent?"R":"E")+"_"+(null===t||void 0===t?void 0:t.event_id);(0,r.lB)(t),(0,u.Si)($,a.TB,a.OL),(0,s.Ch)(t.event_id,t.products,"homepage","stories",n,null===t||void 0===t?void 0:t.location,null===K||void 0===K?void 0:K.userType)})();var l=0;null!=o&&de[e].events.map(((e,t)=>{e.event_id==o&&(l=t)})),U(l),Z(e)}async function me(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,d.MN)()&&(0,w._)()&&!i&&await(0,c.bo)(),U(e.index),((0,p.ij)(e)||(0,p.Il)(e))&&(t||n||(async()=>{const t=(0,v.Wd)(ce)+(0,v.gf)(ue)+(null!==e&&void 0!==e&&e.isRelatedEvent?"R":"E")+"_"+(null===e||void 0===e?void 0:e.event_id);(0,r.lB)(e),(0,u.Si)($,a.TB,a.Dk),(0,s.Ch)(e.event_id,e.products,"homepage","carousel",t)})())}function pe(e){return(0,f.jsx)(f.Fragment,{})}return(0,o.useEffect)((()=>{if(H)if((0,y.H)("whatmore-video-player",(()=>{Q(!1)})),null!=G&&F){const e=de.find((e=>G==e.id));if(e)return void he(de.indexOf(e),!0,R)}else if(null!=R){const e=ne.find((e=>R==e.event_id));if(e)return void me(e,!0)}}),[]),(0,f.jsxs)(f.Fragment,{children:[J&&(0,f.jsx)(_.A,{}),(0,f.jsx)("div",{className:"whatmore-widget-container",style:{height:"100%",marginTop:(F?A:W)+"px",marginBottom:(F?A:W)+"px"},children:"template-b"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(I,{events:ne,onClick:me,heading:e.heading})})}):"template-a-1"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(x,{events:ne,onClick:me,heading:e.heading})}):"template-feed-a"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(N,{events:ne,onClick:me,heading:e.heading})}):"template-collections-a"===M||"template-c"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(E,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-collections-b"===M||"template-d"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(O,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-collections-c"===M||"template-e"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(T,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-collections-d"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(I,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-collections-e"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(L,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-collections-stories"===M||"template-stories"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(k,{events:ne,index:X,setScreen:U,onClick:me,heading:e.heading})})}):"template-f"===M||"template-collections-f"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(D,{events:ne,onClick:me,heading:e.heading})})}):"template-g"===M||"template-collections-g"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(b,{events:ne,onClick:me,heading:e.heading})})}):"template-h"===M||"template-collections-h"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(q,{events:ne,onClick:me,heading:e.heading})})}):"template-banner-a"===M?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.BANNER_WIDGET_VIEW,event:ee[0],triggerFlag:!t&&!n,children:(0,f.jsx)(P,{events:ee})})}):F?(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.STORIES_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(C,{eventsStories:de,onClick:he,template:M})})}):(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,f.jsx)(L,{events:ne,onClick:me,heading:e.heading})})})}),-1==X||-2==X?(0,f.jsx)(pe,{}):(0,f.jsx)(o.Suspense,{children:(0,f.jsx)(g.S,{userInteractionType:S.O.EVENT_VIEW,event:ee[X],productList:ee[X].products,cta:ee[X].cta,triggerFlag:!t&&!n,children:(0,f.jsx)(j,{events:se,index:X,onBack:function(e){(0,l.ei)($)&&(0,i.Xd)("whatmoreAddedToCart")&&(0,h.H)($,(()=>{}),100,window.location.hostname,e),U(-1),Q(!1)},slideDirection:F||"horizontal"===(0,l.br0)($)?"horizontal":"vertical",eventsStories:de,initialStoryIndex:Y,template:M})})})]})};const A=function(e,t,n){const o=(0,i.Xd)("whatmoreShopId");var a=t.reduce(((e,t,n)=>(t.products.map((e=>e.client_product_id)).forEach((t=>{t in e||(e[t]=!0)})),e)),{}),r=Object.keys(a);if("60960964855"==o&&"undefined"!=typeof fera&&"function"===typeof fera.getRatings){var l={};fera.getRatings(r,(e=>{new Promise(((t,n)=>{e.forEach((e=>{l[e.external_product_id]={avgRating:e.average,totalRatings:e.count}})),t(l)})).then((e=>n(e)))}))}if("23114481744"==o){const e="1e6MQXxzYR19mpw9Km6Dcm86";l={};fetch("https://api.juniphq.com/v1/products?filter[remote_ids]="+r.toString(),{headers:{"Junip-Store-Key":e}}).then((e=>e.json())).then((e=>(e.products.forEach((e=>{l[e.remote_id]={avgRating:parseFloat(e.rating_average).toFixed(1),totalRatings:e.rating_count}})),l))).then((e=>n(e))).catch((e=>console.error(e)))}};var F=n(7802),$=n(6641),M=n(1351),B=n(4820),V=n(5873),G=n(6018);var R=function(e){const[t,n]=(0,o.useState)(),[r,u]=(0,o.useState)([]),[h,p]=(0,o.useState)(),{whatmoreIsStoriesTemplate:g}=(0,o.useContext)(m.B),{whatmoreIsCollectionsTemplate:_}=(0,o.useContext)(m.B),{whatmoreIsBannerTemplate:y}=(0,o.useContext)(m.B),[I]=(0,i.QN)("whatmoreShopId"),[x]=(0,i.QN)("whatmoreCollectionId"),E=(0,i.Xd)("whatmoreLandingLocationType"),O=(0,i.Xd)("whatmoreLoggingActive"),{whatmoreWidgetSourceDetails:T}=(0,o.useContext)(m.B),{whatmoreUserInfo:C,whatmoreIsPreviewMode:j}=(0,o.useContext)(m.B),L=(0,i.Xd)("whatmoreCollectionUrl"),[D]=(0,i.QN)("isInDesignMode"),[b]=(0,i.QN)("isDemoBrand"),q=(0,l.mJ$)(I)?(0,l.jLA)(I)?L:window.location.href.split(/[?#]/)[0]:x,[N,P]=(0,i.QN)("productRatings"),[k,R]=(0,o.useState)(!1);var z=(0,l.SOt)(I)?a.aD+"/v2/events/":a.$$+"/v2/events/",K=(0,l.SOt)(I)?a.aD+"/v3/events/":a.$$+"/v3/events/",H=(0,l.SOt)(I)?a.aD+"/v4/events/":a.$$+"/v4/events/",J=(0,l.SOt)(I)?a.aD+"/v5/events/":a.$$+"/v5/events/",Q=(0,l.SOt)(I)?a.aD+"/v6/events/":a.$$+"/v6/events/",X=(0,l.SOt)(I)?a.aD+"/get_eventset/":a.$$+"/get_eventset/",U=(0,l.SOt)(I)?a.aD+"/v2/collection":a.$$+"/v2/collection",Y=(0,l.SOt)(I)?a.aD+"/v3/collection":a.$$+"/v3/collection",Z=(0,l.SOt)(I)?a.aD+"/v4/collection":a.$$+"/v4/collection",ee=(0,l.SOt)(I)?a.aD+"/v2/brand/"+I+"/product-events":a.$$+"/v2/brand/"+I+"/product-events",te=e.shopId,ne="live,upcoming",ie="true";return(0,o.useEffect)((()=>{(0,s.wm)();const e=()=>{const e="_whatmore_bulk_events",t=JSON.parse(localStorage.getItem(e))||[];t&&t.length>0&&((0,B.u)(t),localStorage.removeItem(e))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,o.useEffect)((()=>{null!=t&&0!=t.length&&!h&&(0,d.MN)()&&!(0,i.Xd)("whatmoreVideoPlayerPoolInitiated")&&(0,w._)()&&(0,c.Pc)(c.F5)}),[t]),(0,o.useEffect)((()=>{var e;if(E.startsWith("product"))if((0,l.vvU)(I))e=z.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString()+(g?"&template_type=stories":"");else{var t=(0,i.Xd)("whatmoreProductId");t=(0,l.BcY)(I)?function(e,t){return"STRQMPNF7QK"==t?encodeURIComponent(e):e.split(/[?#]/)[0]}(window.location.href,I):t,e=ee.toString()+"?client_product_id="+t.toString()+"&status="+ne.toString()+"&event_type=video"}else if(_||"invalid-url"!==L)e=(0,l.JwJ)(I)?`${Y.toString()}?store_id=${te.toString()}&client_collection_id=${"index"==E&&(0,l.FKG)(I).length>0?(0,l.FKG)(I)[0]:q}`:"78232846646"==I?`${Z.toString()}?store_id=${te.toString()}&client_collection_id=${"index"==E&&(0,l.FKG)(I).length>0?(0,l.FKG)(I)[0]:q}`:`${U.toString()}?store_id=${te.toString()}&client_collection_id=${"index"==E&&(0,l.FKG)(I).length>0?(0,l.FKG)(I)[0]:q}`;else if(y){const t=v.Jh,n=(0,v.t6)(E);e=X.toString()+te.toString()+"?eventset_type="+t+"&source="+n+"&source_id="+I}else{var o,a,r,d;if(("72201044272"==I||"2665447536"==I&&j)&&!g)e=K.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString()+"&latitude="+(null!==(o=null===(a=JSON.parse(localStorage.getItem("_user_wh_lc")))||void 0===a?void 0:a.latitude)&&void 0!==o?o:"")+"&longitude="+(null!==(r=null===(d=JSON.parse(localStorage.getItem("_user_wh_lc")))||void 0===d?void 0:d.longitude)&&void 0!==r?r:"")+"&user_type="+(null!==C&&void 0!==C&&C.userType?"olduser":"newuser");else if((0,l.JwJ)(I)&&!g)e=H.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString();else if("78232846646"==I&&j){var c,h,m,S;e=Q.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString()+"&latitude="+(null!==(c=null===(h=JSON.parse(localStorage.getItem("_user_wh_lc")))||void 0===h?void 0:h.latitude)&&void 0!==c?c:"")+"&longitude="+(null!==(m=null===(S=JSON.parse(localStorage.getItem("_user_wh_lc")))||void 0===S?void 0:S.longitude)&&void 0!==m?m:"")+"&user_type="+(null!==C&&void 0!==C&&C.userType?"olduser":"newuser")}else e="78232846646"==I?J.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString():z.toString()+te.toString()+"?status="+ne.toString()+"&is_active="+ie.toString()+(g?"&template_type=stories":"")}fetch(e).then((e=>e.json())).then((e=>{var t;if(y){const t=v.Jh;return(0,F.Po)(e,t)}return(0,l.JwJ)(I)&&(null===e||void 0===e||null===(t=e.questions)||void 0===t?void 0:t.length)>0&&(null==localStorage.getItem("_whatmore_qview_index")&&localStorage.setItem("_whatmore_qview_index",0),(0,s.d3)(null===e||void 0===e?void 0:e.questions)),(null===e||void 0===e?void 0:e.all_events)&&u(null===e||void 0===e?void 0:e.all_events),(0,F.Np)(e,_||"invalid-url"!==L)})).then((e=>(O&&console.debug("initial received events size : "+e.length),g||_||y?e:(0,F.zJ)(e,te)))).then((e=>(("28849832033"===I||"85317058852"===I&&Array.isArray(e))&&(e=function(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}(e)),null!=e&&0!=e.length&&(0,l.WiD)(I)&&function(e,t,n){const o=setInterval((()=>{null===(0,i.Xd)("productRatings")&&A(e,t,n)}),1e3);setTimeout((()=>{clearInterval(o)}),1e4)}(I,e,(e=>{P(e)})),e))).then((e=>{(b||D)&&(null==e||e&&0==(null===e||void 0===e?void 0:e.length))?n(g?G.Yo:y?G.N9:G.uG):n(e),R(!0)})).catch((e=>{p(e.message),R(!0)}))}),[]),(0,o.useEffect)((()=>{"index"===E?t&&t.length>0&&(0,M.yP)({userInteractionType:S.O.HOMEPAGE_VISITED,widgetSourceDetails:T}):"collection"===E&&(t&&t.length>0||(0,l.BZ$)(I))&&(0,M.yP)({userInteractionType:S.O.COLLECTION_PAGE_VISITED,widgetSourceDetails:T})}),[t]),k&&(null==t||0==t.length||h)&&V.Sn.forEach((e=>{var t,n,i,o;const a=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-stories-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-stories-a"]'),r=null!==(n=e.querySelector('.whatmore-template-type[data-wh="template-a"]')||e.querySelector('.whatmore-template-type[data-wh="template-feed-a"]')||e.querySelector('.whatmore-template-type[data-wh="template-b"]')||e.querySelector('.whatmore-template-type[data-wh="template-f"]')||e.querySelector('.whatmore-template-type[data-wh="template-stories"]')||e.querySelector('.whatmore-template-type[data-wh="template-e"]')||e.querySelector('.whatmore-template-type[data-wh="template-a-1"]')||e.querySelector('.whatmore-template-type[data-wh="template-g"]')||e.querySelector('.whatmore-template-type[data-wh="template-h"]'))&&void 0!==n?n:e.querySelector('.whatmore-template-type[data="template-a"]')||e.querySelector('.whatmore-template-type[data="template-b"]')||e.querySelector('.whatmore-template-type[data="template-f"]')||e.querySelector('.whatmore-template-type[data="template-stories"]')||e.querySelector('.whatmore-template-type[data="template-e"]')||e.querySelector('.whatmore-template-type[data="template-a-1"]')||e.querySelector('.whatmore-template-type[data="template-g"]')||e.querySelector('.whatmore-template-type[data="template-h"]'),l=null!==(i=e.querySelector('.whatmore-template-type[data-wh="template-collections-a"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-b"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-c"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-d"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-e"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-f"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-g"]')||e.querySelector('.whatmore-template-type[data-wh="template-collections-h"]'))&&void 0!==i?i:e.querySelector('.whatmore-template-type[data="template-collections-a"]')||e.querySelector('.whatmore-template-type[data="template-collections-b"]')||e.querySelector('.whatmore-template-type[data="template-collections-c"]')||e.querySelector('.whatmore-template-type[data="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data="template-collections-e"]')||e.querySelector('.whatmore-template-type[data="template-collections-d"]')||e.querySelector('.whatmore-template-type[data="template-collections-f"]')||e.querySelector('.whatmore-template-type[data="template-collections-g"]')||e.querySelector('.whatmore-template-type[data="template-collections-h"]'),s=null!==(o=e.querySelector('.whatmore-template-type[data-wh="template-banner-a"]'))&&void 0!==o?o:e.querySelector('.whatmore-template-type[data="template-banner-a"]'),d=e;if(g){const t=e.querySelector(".whatmore-shimmer-stories");t&&(t.style.display="none")}else if(!_){const t=e.querySelector(".loading-skeleton-wrapper");t&&(t.style.display="none")}(s||l||r||a)&&(r&&d||a&&d||s&&d||l&&d)&&(d.style.minHeight="0px")})),null==t||0==t.length||h?(0,f.jsx)("div",{}):(O&&(0,$.xv)(t),function(e){if(null!=e){var t=0;e.forEach((e=>{e.index=t++}))}}(t),O&&console.debug("final transformed events data : "+JSON.stringify(t)),O&&console.debug("valid events size : "+t.length),(0,f.jsx)(W,{heading:e.heading,events:t,allEvents:r}))},z=n(6649);var K=function(e){const[t]=(0,i.QN)("whatmoreShopId"),[n]=(0,i.QN)("whatmoreHeading"),[a,r]=(0,o.useState)(["initial",window.pageYOffset]),[s,d]=(0,o.useState)(!1),c="2665447536"==t?30:10,h=(0,i.Xd)("isLandingSharedLink");(0,o.useEffect)((()=>{if((0,u.hr)(t),!(0,l.FlM)(t))return;const e=c;let n=window.pageYOffset,i=!1;const o=()=>{const t=window.pageYOffset;var o,a;Math.abs(t-n)<e?i=!1:(a=!0,r(o=[t>n?"scrolled-down":"scrolled-up",t]),o[1]>c&&d(a),n=t>0?t:0,i=!1)},a=()=>{i||(window.requestAnimationFrame(o),i=!0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)}),[]);const[m,p,v]=(0,z.A)({triggerOnce:!0});return(0,f.jsx)("div",{ref:m,style:{display:"block",height:"100%"},children:s||p||h||!(0,l.FlM)(t)||(0,l.wQ2)(t)?(0,f.jsx)(R,{heading:n,shopId:t}):(0,f.jsx)("div",{})})}},5100:function(e,t,n){var i=n(9950),o=n(1941),a=n(5830),r=n(4414);const l=i.memo((()=>{if(!(0,a.Xd)("isLandingSharedLink"))return(0,r.jsx)(r.Fragment,{});const[e]=(0,o.A)();return(0,r.jsxs)("div",{className:`shimmer-container ${e}`,children:["portrait"===e?(0,r.jsx)("div",{className:"shimmer-item portrait-full",children:(0,r.jsx)("div",{className:"shimmer-effect"})}):Array(3).fill().map(((e,t)=>(0,r.jsx)("div",{className:"shimmer-item landscape-item "+(1===t?"center-item":""),children:(0,r.jsx)("div",{className:"shimmer-effect"})},t))),(0,r.jsx)("style",{children:"\n                    .shimmer-container {\n                        display: flex;\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100vw;\n                        height: 100vh;\n                        overflow-x: scroll;\n                        scroll-snap-type: x mandatory;\n                        scroll-behavior: smooth;\n                        z-index: 1000;\n                    }\n\n                    .portrait {\n                        justify-content: center;\n                        align-items: center;\n                        background: rgba(0, 0, 0, 0.6);\n                    }\n\n                    .landscape {\n                        justify-content: center;\n                        align-items: center;\n                        background: rgba(0, 0, 0, 0.8);\n                    }\n\n                    .shimmer-item {\n                        scroll-snap-align: start;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        position: relative;\n                        transition: transform 0.3s ease;\n                    }\n\n                    .portrait-full {\n                        width: 100vw;\n                        height: 100vh;\n                        margin: 0; \n                    }\n\n                    .landscape-item {\n                        width: 250px;\n                        height: 450px;\n                        background: #D3D3D3;\n                        border-radius: 8px;\n                        margin-left: -50px; \n                    }\n\n                    .center-item {\n                        width: 360px;\n                        height: 620px;\n                        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); \n                        z-index: 10; \n                    }\n\n                    .shimmer-effect {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 75%);\n                        animation: shimmer 2s infinite;\n                        background-size: 200% 100%;\n                    }\n\n                    @keyframes shimmer {\n                        0% {\n                            background-position: -200% 0;\n                        }\n                        100% {\n                            background-position: 200% 0;\n                        }\n                    }\n                "})]})}));t.A=l},8945:function(e,t,n){function i(e,t){let n=0;let i=new MutationObserver((function(){document.querySelector("."+e)?(t(),i.disconnect()):0==n&&(n=1,setTimeout((()=>{t(),i.disconnect()}),8e3))}));i.observe(document.body,{childList:!0,subtree:!0})}n.d(t,{H:function(){return i}})},1351:function(e,t,n){n.d(t,{Qj:function(){return s},kz:function(){return d},UM:function(){return u},yP:function(){return h},DG:function(){return c}});var i=n(1348),o=n(5830),a=n(6157);function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=(0,o.Xd)("whatmoreShopId");(e!=a.O.EVENT_VIEW||(0,i.NFF)(r))&&(e!=a.O.VIDEO_PLAYBACK||(0,i.Eel)(r))&&(e!=a.O.SHOPNOW_ATC_CLICKED&&e!=a.O.PRODUCT_TILE_ATC_CLICKED||(0,i.T9r)(r))&&(e!=a.O.VIDEO_LIKED||(0,i.Mz3)(r))&&(e!=a.O.VIDEO_SHARE_CTA_CLICKED||(0,i.OLZ)(r))&&(e!=a.O.PRODUCT_TILE_SHOPNOW_CLICKED&&e!=a.O.SHOPNOW_CLICKED||(0,i.nEf)(r))&&"function"==typeof fbq&&(async()=>{fbq("trackCustom",s[e],{id:null===t||void 0===t?void 0:t.client_product_id,product_url:null===t||void 0===t?void 0:t.product_link,...e===a.O.VIDEO_PLAYBACK?{watch_time:n.watch_time,video_duration:n.video_duration}:{}})})()}var l=n(7145);const s={[a.O.EVENT_VIEW]:"whatmore_video_click_event",[a.O.VIDEO_LIKED]:"whatmore_video_like_event",[a.O.VIDEO_SHARE_CTA_CLICKED]:"whatmore_video_share_event",[a.O.PRODUCT_TILE_ATC_CLICKED]:"whatmore_video_atc_event",[a.O.SHOPNOW_ATC_CLICKED]:"whatmore_video_atc_event",[a.O.SHOPNOW_CLICKED]:"whatmore_product_tile_click_event",[a.O.PRODUCT_TILE_SHOPNOW_CLICKED]:"whatmore_product_tile_click_event",[a.O.VIDEO_PLAYBACK]:"whatmore_video_watch_event"};function d(e){var t;let{userInteractionType:n,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:d,ctaList:c}=e;(0,l.B)({userInteractionType:n,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:d,ctaList:c}),n in s&&r(n,null!==(t=null===d||void 0===d?void 0:d[1])&&void 0!==t?t:null===d||void 0===d?void 0:d[0])}function c(e){var t;let{userInteractionType:n,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:d,ctaList:c}=e;(0,l.B)({userInteractionType:n,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:d,ctaList:c}),n in s&&r(n,null!==(t=null===d||void 0===d?void 0:d[1])&&void 0!==t?t:null===d||void 0===d?void 0:d[0],i)}function u(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:a,ctaList:r}=e;(0,l.B)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:a,ctaList:r})}function h(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:a,ctaList:r}=e;(0,l.B)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:a,ctaList:r})}}}]);