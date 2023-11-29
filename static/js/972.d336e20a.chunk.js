"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[972],{3972:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var i=n(7753),r=n(7313),a=n(2860),s=n(499),o=n(4897),c=n(5160),l=n(9854),u=n(6967),d=n(8984),h=n(58),g=n(4669),v=n(941),m=n(4136),p=n(7300),I=n(6524),f=n(7643),T=n(778),E=n(6417);const S=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(240),n.e(210),n.e(926),n.e(950),n.e(303),n.e(891)]).then(n.bind(n,4095)))),x=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(240),n.e(576),n.e(950),n.e(364),n.e(530)]).then(n.bind(n,5523)))),_=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(926),n.e(950),n.e(358)]).then(n.bind(n,3827)))),j=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(926),n.e(950),n.e(607)]).then(n.bind(n,6071)))),y=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(926),n.e(950),n.e(986)]).then(n.bind(n,1291)))),w=r.lazy((()=>Promise.all([n.e(302),n.e(580)]).then(n.bind(n,3580)))),M=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(240),n.e(210),n.e(576),n.e(803),n.e(926),n.e(303),n.e(660),n.e(68)]).then(n.bind(n,1660)))),C=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(240),n.e(210),n.e(926),n.e(950),n.e(959)]).then(n.bind(n,4048)))),O=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(210),n.e(926),n.e(950),n.e(303),n.e(554)]).then(n.bind(n,9085)))),L=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(367),n.e(240),n.e(576),n.e(950),n.e(303),n.e(364),n.e(67)]).then(n.bind(n,4362)))),D=r.lazy((()=>Promise.all([n.e(302),n.e(819),n.e(13),n.e(240),n.e(210),n.e(576),n.e(803),n.e(926),n.e(303),n.e(660),n.e(334)]).then(n.bind(n,4658))));var b=function(e){const[t]=(0,i.j1)("isInDesignMode"),[n]=(0,i.j1)("isDemoBrand"),[b]=(0,i.j1)("whatmoreTopBottomPadding"),[P]=(0,i.j1)("whatmoreStoriesTopBottomPadding"),{whatmoreIsStoriesTemplate:G}=(0,r.useContext)(m.I),[W]=(0,i.j1)("whatmoreShopId"),{whatmoreEventsBrowsingTemplate:V}=(0,r.useContext)(m.I),k=(0,i.MO)("isLandingSharedLink"),U=(0,i.MO)("whatmoreShareTemplateId"),z=(0,i.MO)("whatmoreShareStoryId"),N=(0,i.MO)("whatmoreShareEventId"),[F,Z]=(0,r.useState)(-1),[K,A]=(0,r.useState)(null);var R=e.events,B=null;function H(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,d.KE)()&&!i&&(0,h.QV)(),t||n||(async()=>{const t=B[e].events[0];(0,c.wh)(t),(0,g.Tc)(W,a.Xh,a.OW),(0,u.H4)(t.event_id,t.products,"homepage","stories")})();var s=0;null!=r&&B[e].events.map(((e,t)=>{e.event_id==r&&(s=t)})),Z(s),A(e)}function X(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,d.KE)()&&!i&&(0,h.QV)(),(0,p.B6)(e)||(0,p.WJ)(e))return t||n||(async()=>{(0,c.wh)(e),(0,g.Tc)(W,a.Xh,a.pR),(0,u.H4)(e.event_id,e.products,"homepage","carousel")})(),void Z(e.index);const r=20;var{status:l,bannerText:v,timeToStartInMins:m}=o.Z.getEventStatus(e);m<=r&&l.name!==s.Z.LIVE.name?console.debug(" TODO : show toast on upcoming live event."):Z(e.index)}function J(e){return(0,E.jsx)(E.Fragment,{})}return G&&!B&&(B=function(e){var t=e.reduce(((e,t,n)=>{var i=t.storyset_id;return i in e?(e[i].total_events=e[i].total_events+1,e[i].events.push(t)):e[i]={id:t.storyset_id,title:t.storyset_name,thumbnail_image:t.storyset_thumbnail_image,total_events:1,start_event_index:n,events:[t]},e}),{}),n=Object.values(t);return n.sort(((e,t)=>e.start_event_index-t.start_event_index)),n}(R)),(0,r.useEffect)((()=>{k&&V==(0,I.zv)(U)&&(null!=z&&G?B.forEach(((e,t)=>{z==e.id&&H(t,!0,N)})):null!=N&&R.forEach(((e,t)=>{N==e.event_id&&X(e,!0)})))}),[]),(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{style:{marginTop:(G?P:b)+"px",marginBottom:(G?P:b)+"px"},children:"template-b"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(S,{events:R,onClick:X,heading:e.heading})}):"template-a-1"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(x,{events:R,onClick:X,heading:e.heading})}):"template-feed-a"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(L,{events:R,onClick:X,heading:e.heading})}):"template-collections-a"===V||"template-c"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(_,{events:R,onClick:X,heading:e.heading})})}):"template-collections-b"===V||"template-d"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(j,{events:R,onClick:X,heading:e.heading})})}):"template-collections-c"===V||"template-e"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.COLLECTION_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(y,{events:R,onClick:X,heading:e.heading})})}):"template-collections-d"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(S,{events:R,onClick:X,heading:e.heading})})}):"template-collections-e"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(C,{events:R,onClick:X,heading:e.heading})})}):"template-f"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(O,{events:R,onClick:X,heading:e.heading})})}):"template-banner-a"===V?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.BANNER_WIDGET_VIEW,event:R[0],triggerFlag:!t&&!n,children:(0,E.jsx)(D,{events:R})})}):G?(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.STORIES_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(w,{eventsStories:B,onClick:H,template:V})})}):(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.HOMEPAGE_CAROUSEL_WIDGET_VIEW,triggerFlag:!t&&!n,children:(0,E.jsx)(C,{events:R,onClick:X,heading:e.heading})})})}),-1==F?(0,E.jsx)(J,{}):(0,E.jsx)(r.Suspense,{children:(0,E.jsx)(f.u,{userInteractionType:T.K.EVENT_VIEW,event:R[F],productList:R[F].products,cta:R[F].cta,triggerFlag:!t&&!n,children:(0,E.jsx)(M,{events:R,index:F,onBack:function(e){(0,l.n2)(W)&&(0,i.MO)("whatmoreAddedToCart")&&(0,v.D)(W,(()=>{}),100,window.location.hostname),Z(-1)},slideDirection:G||"horizontal"===(0,l.e8)(W)?"horizontal":"vertical",eventsStories:B,initialStoryIndex:K,template:V})})})]})};const P=function(e,t,n){const r=(0,i.MO)("whatmoreShopId");var a=t.reduce(((e,t,n)=>(t.products.map((e=>e.client_product_id)).forEach((t=>{t in e||(e[t]=!0)})),e)),{}),s=Object.keys(a);if("60960964855"==r&&"undefined"!=typeof fera&&"function"===typeof fera.getRatings){var o={};fera.getRatings(s,(e=>{new Promise(((t,n)=>{e.forEach((e=>{o[e.external_product_id]={avgRating:e.average,totalRatings:e.count}})),t(o)})).then((e=>n(e)))}))}if("23114481744"==r){const e="1e6MQXxzYR19mpw9Km6Dcm86";o={};fetch("https://api.juniphq.com/v1/products?filter[remote_ids]="+s.toString(),{headers:{"Junip-Store-Key":e}}).then((e=>e.json())).then((e=>(e.products.forEach((e=>{o[e.remote_id]={avgRating:parseFloat(e.rating_average).toFixed(1),totalRatings:e.rating_count}})),o))).then((e=>n(e))).catch((e=>console.error(e)))}};var G=n(3388),W=n(7381),V=n(7376);var k=function(e){const[t,n]=(0,r.useState)(),[s,o]=(0,r.useState)(),{whatmoreIsStoriesTemplate:c}=(0,r.useContext)(m.I),{whatmoreIsCollectionsTemplate:g}=(0,r.useContext)(m.I),{whatmoreIsBannerTemplate:v}=(0,r.useContext)(m.I),[p]=(0,i.j1)("whatmoreShopId"),[f]=(0,i.j1)("whatmoreCollectionId"),S=(0,i.MO)("whatmoreLandingLocationType"),x=(0,i.MO)("whatmoreLoggingActive"),{whatmoreWidgetSourceDetails:_}=(0,r.useContext)(m.I),{whatmoreCollectionUrl:j}=(0,r.useContext)(m.I),y=(0,l.cZ)(p)?(0,l._u)(p)?j:window.location.href.split(/[?#]/)[0]:f,[w,M]=(0,i.j1)("productRatings");var C=(0,l.ef)(p)?a.Dm+"/v2/events/":a.Gc+"/v2/events/",O=(0,l.ef)(p)?a.Dm+"/get_eventset/":a.Gc+"/get_eventset/",L=(0,l.ef)(p)?a.Dm+"/v2/collection":a.Gc+"/v2/collection",D=(0,l.ef)(p)?a.Dm+"/v2/brand/"+p+"/product-events":a.Gc+"/v2/brand/"+p+"/product-events",k=e.shopId,U="live,upcoming";return(0,r.useEffect)((()=>{(0,u.hb)()}),[]),(0,r.useEffect)((()=>{null==t||0==t.length||s||!(0,d.KE)()||(0,i.MO)("whatmoreVideoPlayerPoolInitiated")||(0,h.b5)(h.UD)}),[t]),(0,r.useEffect)((()=>{var e;if(S.startsWith("product")){var t=(0,i.MO)("whatmoreProductId");t=(0,l.iX)(p)?function(e){return e.split(/[?#]/)[0]}(window.location.href):t,e=D.toString()+"?client_product_id="+t.toString()+"&status="+U.toString()+"&event_type=video"}else if(g||"invalid-url"!==j)e=L.toString()+"?store_id="+k.toString()+"&client_collection_id="+y;else if(v){const t=I.ls,n=(0,I.H1)(S);e=O.toString()+k.toString()+"?eventset_type="+t+"&source="+n+"&source_id="+p}else e=C.toString()+k.toString()+"?status="+U.toString()+"&is_active="+"true".toString()+(c?"&template_type=stories":"");fetch(e).then((e=>e.json())).then((e=>{if(v){const t=I.ls;return(0,G.OC)(e,t)}return(0,G.kW)(e,g||"invalid-url"!==j)})).then((e=>(x&&console.debug("initial received events size : "+e.length),c||v?e:(0,G.e8)(e,k)))).then((e=>(null!=e&&0!=e.length&&(0,l.LU)(p)&&function(e,t,n){const r=setInterval((()=>{null===(0,i.MO)("productRatings")&&P(e,t,n)}),1e3);setTimeout((()=>{clearInterval(r)}),1e4)}(p,e,(e=>{M(e)})),e))).then((e=>{null==e||0==e.length||c||(0,l.NO)(k,e),n(e)})).catch((e=>{o(e.message)}))}),[]),(0,r.useEffect)((()=>{"index"===S?t&&t.length>0&&(0,V.PB)({userInteractionType:T.K.HOMEPAGE_VISITED,widgetSourceDetails:_}):"collection"===S&&t&&t.length>0&&(0,V.PB)({userInteractionType:T.K.COLLECTION_PAGE_VISITED,widgetSourceDetails:_})}),[t]),null==t||0==t.length||s?(0,E.jsx)("div",{}):(x&&(0,W.EI)(t),function(e,t){if(null!=e){var n=0;e.forEach((e=>{e.index=n++}))}}(t),x&&console.debug("final transformed events data : "+JSON.stringify(t)),x&&console.debug("valid events size : "+t.length),(0,E.jsx)("div",{children:(0,E.jsx)(b,{heading:e.heading,events:t})},"whatmore-main-coponent"))};var U=function(e){const[t]=(0,i.j1)("isInDesignMode"),[n]=(0,i.j1)("isDemoBrand"),[s]=(0,i.j1)("whatmoreShopId"),[o]=(0,i.j1)("whatmoreHeading"),[c]=(0,i.j1)("whatmorePrimaryColor"),[l]=(0,i.j1)("whatmoreSecondaryColor");return(0,r.useEffect)((()=>{(0,g.ll)(s)}),[]),(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{children:t||n?(0,E.jsx)("div",{children:(0,E.jsx)(k,{heading:o,shopId:a.aA})}):(0,E.jsx)("div",{children:(0,E.jsx)(k,{heading:o,shopId:s})})})})}},499:function(e,t){t.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(e,t,n){var i=n(499);t.Z=class{static getEventStatus(e){e.time_zone="GMT+5:30";var t=e.start_time+":00",n=e.end_time,r=e.scheduled_date,a=e.status,s=e.time_zone;if(a.toUpperCase()==i.Z.LIVE.name)return{status:i.Z.LIVE,bannerText:" "+i.Z.LIVE.name+" ",timeToStartInMins:0};if(a.toUpperCase()==i.Z.UPCOMING.name){var o=new Date(r+" "+t+" "+s),c=(new Date(r+" "+n+" "+s),function(e){var t=new Date,n=(e.getTime()-t.getTime())/1e3,r=n/60,a=r/60,s=a/24;return n<=0?{status:i.Z.COMPLETED,bannerText:" "+i.Z.COMPLETED.name+" ",timeToStartInMins:0}:n>=1&&n<=30?{status:i.Z.UPCOMING,bannerText:"Starts in "+Math.round(n)+" sec ",timeToStartInMins:n/60}:r<60?{status:i.Z.UPCOMING,bannerText:"Starts in "+Math.round(r)+" min ",timeToStartInMins:r}:a<24?{status:i.Z.UPCOMING,bannerText:"Starts in "+Math.round(a)+" hr ",timeToStartInMins:60*a}:s<7?{status:i.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" ",timeToStartInMins:60*s*24}:{status:i.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(o));return{status:c.status,bannerText:c.bannerText,timeToStartInMins:c.timeToStartInMins}}return console.error("invalid status for event :: id : "+e.event_id+", status : "+e.status),{status:i.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},3388:function(e,t,n){n.d(t,{OC:function(){return o},e8:function(){return a},kT:function(){return i},kW:function(){return s},xg:function(){return r}});const i=function(e,t){return!((void 0==e.products||0==e.products.length)&&(void 0==e.cta||0==e.cta.length))},r=function(e,t){return!(void 0==e.products||0==e.products.length)},a=function(e,t){if(null!=e)return e.filter((e=>1==i(e)))},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e)return t?e.events[0].events:e.events};const o=function(e,t){var n;if(null==e)return[];if(!("eventsets"in e))return[];const i=null!==(n=e.eventsets[t])&&void 0!==n?n:null;return i?function(e){if(null==e||0==e.length)return[];let t=[];return e.forEach((e=>{e.events.forEach((e=>{t.push(e)}))})),t}(i):[]}},7376:function(e,t,n){n.d(t,{GF:function(){return r},PB:function(){return o},Z2:function(){return a},y4:function(){return s}});var i=n(795);function r(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o})}function a(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o})}function s(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o})}function o(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:r,event:a,productList:s,ctaList:o})}}}]);