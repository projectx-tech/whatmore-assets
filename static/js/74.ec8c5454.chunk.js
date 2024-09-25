"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[74],{8181:function(e,t,n){var i=n(7313),o=n(8866),r=n(7753),a=n(6417);const s=i.memo((()=>{if(!(0,r.MO)("isLandingSharedLink"))return(0,a.jsx)(a.Fragment,{});const[e]=(0,o.Z)();return(0,a.jsxs)("div",{className:`shimmer-container ${e}`,children:["portrait"===e?(0,a.jsx)("div",{className:"shimmer-item portrait-full",children:(0,a.jsx)("div",{className:"shimmer-effect"})}):Array(3).fill().map(((e,t)=>(0,a.jsx)("div",{className:"shimmer-item landscape-item "+(1===t?"center-item":""),children:(0,a.jsx)("div",{className:"shimmer-effect"})},t))),(0,a.jsx)("style",{children:"\n                    .shimmer-container {\n                        display: flex;\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100vw;\n                        height: 100vh;\n                        overflow-x: scroll;\n                        scroll-snap-type: x mandatory;\n                        scroll-behavior: smooth;\n                        z-index: 1000;\n                    }\n\n                    .portrait {\n                        justify-content: center;\n                        align-items: center;\n                        background: rgba(0, 0, 0, 0.6);\n                    }\n\n                    .landscape {\n                        justify-content: center;\n                        align-items: center;\n                        background: rgba(0, 0, 0, 0.8);\n                    }\n\n                    .shimmer-item {\n                        scroll-snap-align: start;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        position: relative;\n                        transition: transform 0.3s ease;\n                    }\n\n                    .portrait-full {\n                        width: 100vw;\n                        height: 100vh;\n                        margin: 0; \n                    }\n\n                    .landscape-item {\n                        width: 250px;\n                        height: 450px;\n                        background: #D3D3D3;\n                        border-radius: 8px;\n                        margin-left: -50px; \n                    }\n\n                    .center-item {\n                        width: 360px;\n                        height: 620px;\n                        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5); \n                        z-index: 10; \n                    }\n\n                    .shimmer-effect {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background: linear-gradient(90deg, rgba(0, 0, 0, 0.3) 25%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 75%);\n                        animation: shimmer 2s infinite;\n                        background-size: 200% 100%;\n                    }\n\n                    @keyframes shimmer {\n                        0% {\n                            background-position: -200% 0;\n                        }\n                        100% {\n                            background-position: 200% 0;\n                        }\n                    }\n                "})]})}));t.Z=s},5380:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(4959),o=n(7313),r=n(4892),a=n(6805),s=n(7753),d=n(9821);var l=function(e){const[t,n,i,o,r]=(0,d.Z)(),[l]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),u=r[a.YP]===a.$w?c/100:l/100*1.2;return[t*u,n*u,r]},c=n(9723),u=n(9461),p=n.n(u),h=n(1195),v=n(7108),m=(n(7244),n(123),n(9854)),f=n(6417);var g=function(e){var t;const n=o.useRef(null);var[d,u,g]=l();const w=(0,s.MO)("whatmoreUITheme"),[x]=(0,s.j1)("whatmoreEmbedAppVideoTitle"),[_]=(0,s.j1)("whatmoreEmbedAppPositionPortrait"),[y]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[b]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[j]=(0,s.j1)("whatmoreEmbedAppPositionLandscape"),[I]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[E]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),S=(0,s.MO)("whatmoreShopId");var L=_,C=y,D=b;g[a.YP]===a.$w&&(L=j,C=I,D=E);const[P,O]=(0,o.useState)(["initial",window.pageYOffset]),[T,k]=(0,o.useState)(!1),K=null!==(t=e.isSpotlight)&&void 0!==t&&t,z=g[a.YP]===a.$w?.7*(0,m.zGA)(S):(0,m.zGA)(S),A=K?z:1;d*=A,u*=A;const V=K?(0,m.G0o)(S):L,M=K?(0,m.X8j)(S):(0,m.lVn)(S),[N,W]=(0,o.useState)(!K&&(0,m.eXi)(S));function R(e,t){O(e),e[1]<=100?k(!1):t!=T&&(k(t),W(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(R([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},i=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[P]),(0,i.O3)({ref:n,handler:()=>{R(["scrolled-up",P[1]],!0)}});const Z=e.event,F=e.inVideoClick,H=e.closeClick,U=.3*u,$=.6*u,B=.1*u,Y=.1*(.5*u),G="round"==w?"10px":"0px",q=(0,m.Z$A)(S);var J=!1,X=0,Q=0;function ee(e){J=e}return(0,f.jsx)("div",{children:N&&!M?(0,f.jsx)(f.Fragment,{}):T&&M?(0,f.jsx)("div",{style:"left"===V?{left:"1px",bottom:K?(0,m.vnu)(S)+"px":D+"px",position:"fixed",zIndex:q}:{right:"5px",bottom:K?(0,m.vnu)(S)+"px":D+"px",position:"fixed",zIndex:q},children:(0,f.jsxs)("div",{onClick:()=>{R(["initial",P[1]],!1)},style:{margin:"1px",width:u+"px",height:d+"px"},className:"left"===V?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,f.jsx)(r.Z,{url:Z.thumbnail_image,isPlaying:!1,event:Z})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,f.jsx)(h.Z,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:U+"px"},style:{position:"relative",zIndex:1,left:Y+"px",bottom:Y+"px"},onClick:H})})}),(0,f.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)(v.Z,{sx:{color:"white",fontSize:2*U+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,f.jsx)(p(),{nodeRef:n,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,i;n=t.x,i=t.y,X=n,Q=i},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{J&&(Math.abs(t.x-X)>5||Math.abs(t.y-Q)>5)?ee(!1):F(Z)},children:(0,f.jsx)("div",{ref:n,style:"left"===V?{left:K?(0,m.$II)(S)+"px":C+"px",bottom:K?(0,m.vnu)(S)+"px":D+"px",position:"fixed",zIndex:q}:{right:K?(0,m.$II)(S)+"px":C+"px",bottom:K?(0,m.vnu)(S)+"px":D+"px",position:"fixed",zIndex:q},children:(0,f.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==S?d+"px":u+"px",height:e.isSpotlight&&"60122562760"==S?u+"px":d+"px"}),className:"left"===V?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==S?16/9:9/16},children:(0,f.jsx)(r.Z,{url:Z.thumbnail_image,isMuted:!0,isPlaying:!0,event:Z})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)(h.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:U+"px"},onClick:H,style:{position:"relative",zIndex:1,left:B+"px",bottom:B+"px"}})}),(0,f.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,f.jsx)(c.Z,{sx:{color:(0,m.Ya_)(S),fontSize:$+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,f.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:G,borderBottomRightRadius:G,backgroundImage:x?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,f.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*U+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",x]})})]})})]})})})})}},4284:function(e,t,n){n.r(t);var i=n(7313),o=n(9854),r=n(2860),a=n(7753),s=n(5160),d=n(6967),l=n(5380),c=n(58),u=n(8984),p=n(4669),h=n(513),v=n(9302),m=n(2575),f=n(7300),g=n(6524),w=n(364),x=n(4522),_=n(778),y=n(7643),b=n(7008),j=n(7381),I=n(8181),E=n(6095),S=n(6417);const L=(0,m.Z)({key:"whatmore-css-ppv"}),C=i.lazy((()=>Promise.all([n.e(819),n.e(577),n.e(351),n.e(587),n.e(926),n.e(688),n.e(818),n.e(836)]).then(n.bind(n,3818))));function D(e){return e.split(/[?#]/)[0]}t.default=function(e){const[t,n]=(0,i.useState)(),[m,P]=(0,i.useState)(),{whatmoreIsPreviewMode:O}=(0,i.useContext)(w.I),[T]=(0,a.j1)("isInDesignMode"),[k]=(0,a.j1)("isDemoBrand"),[K]=(0,a.j1)("whatmoreEmbedAppUseVariant"),[z,A]=(0,i.useState)(-2),[V]=(0,a.j1)("whatmoreVariantId"),[M]=(0,a.j1)("whatmoreShopId");var[N]=(0,a.j1)("whatmoreProductId");const W=(0,a.MO)("isLandingSharedLink"),R=(0,a.MO)("whatmoreShareTemplateId"),Z=(0,a.MO)("whatmoreShareEventId"),F=W&&"template-embed"===(0,g.zv)(R),[H,U]=(0,i.useState)(F);N=(0,o.iXA)(M)?D(window.location.href):N;const[$,B]=(0,i.useState)((()=>"true"===K?V:N));var Y=r.Gc+"/v2/brand/"+M+"/product-events";const{whatmoreWidgetSourceDetails:G}=(0,i.useContext)(w.I);(0,i.useEffect)((()=>{(0,j.Oo)("Video shopping powered by Whatmore!"),(0,d.hb)();const e=()=>{const e="_whatmore_bulk_events",t=JSON.parse(localStorage.getItem(e))||[];t&&t.length>0&&((0,b.K)(t),localStorage.removeItem(e))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,i.useEffect)((()=>{(0,p.ll)(M)}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||m||!(0,u.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,i.useEffect)((()=>{if(A(-1),(0,o.ly4)(M)||"57708314789"==M&&O){const e=`${r.Gc}/v2/brand/${M}/product-events/recommendation`;fetch(`${e}?client_product_id=${$}&limit=10&origin=${window.location.hostname}&status=live,upcoming&event_type=video`).then((e=>e.json())).then((e=>{var t;if((null===(t=e.events)||void 0===t?void 0:t.length)>0){const t=e=>{var t;return null===(t=e.products)||void 0===t?void 0:t.some((e=>"oos"!=(null===e||void 0===e?void 0:e.product_status)))},i=e.related_events.filter((e=>t(e)));(null===i||void 0===i?void 0:i.length)>0&&e.product_info.length>0?n([...e.events,...i,{event_type:"recommended_images",product_list:[...e.product_info]}]):n([...e.events,...i])}else n([])})).catch((e=>P(e.message)))}else fetch(Y.toString()+"?client_product_id="+$.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>e.events)).then((e=>(null!=e&&0!=e.length&&(0,o.Htz)(M)&&(0,o.d0x)(e),n(e),e))).then((e=>((0,o.yoE)(M)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==D(window.location.href))return;const i={product_id:n.product_id,product_link:D(window.location.href)};fetch(r.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)})}),500)}(e,$),e))).catch((e=>{P(e.message)}))}),[$]),(0,i.useEffect)((()=>{var e,n;A(-2),(t&&t.length>0||(0,o.uO6)(M))&&(0,x.PB)({userInteractionType:_.K.PDP_VISITED,widgetSourceDetails:G,event:null===t||void 0===t?void 0:t[0],productList:null===t||void 0===t||null===(e=t[0])||void 0===e?void 0:e.products,ctaList:null===t||void 0===t||null===(n=t[0])||void 0===n?void 0:n.cta})}),[t]),(0,i.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){if("true"===K){const e=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]==e)return i[1]}return!1}("variant");e&&""!==e&&B(e)}}))}),[]),(0,i.useEffect)((()=>{if(null!=t&&0!==t.length&&!m&&F&&((0,E.A)("whatmore-video-player",(()=>{U(!1)})),null!=Z)){const e=t.find((e=>Z==e.event_id));if(e)return void X(e,!0,t.indexOf(e))}}),[t]);const q=G.landingLocationType,J=G.templateType,X=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,u.KE)()&&!t&&(0,c.QV)(),(0,f.B6)(e)||(0,f.WJ)(e))return T||k||(async()=>{const t=(0,g.NY)(q)+(0,g.dS)(J)+"_"+(null===e||void 0===e?void 0:e.event_id);(0,s.wh)(e),(0,p.Tc)(M,r.h7,r.dU),(0,d.H4)(e.event_id,e.products,"product_page","video_popup",t)})(),void A(n)};function Q(){return(0,S.jsx)(S.Fragment,{})}return null==t||0==t.length||m?(0,S.jsx)("div",{}):(0,S.jsxs)(v.C,{value:L,children:[H&&(0,S.jsx)(I.Z,{}),"no-product"===$||-1===z||0===t.length?(0,S.jsx)(Q,{}):-2===z&&t.length>0?(0,S.jsx)("div",{children:(0,S.jsx)(y.u,{userInteractionType:_.K.PDP_POPUP_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!T&&!k,children:(0,S.jsx)(l.Z,{event:t[0],inVideoClick:X,closeClick:e=>{e.stopPropagation(),A(-1)}})})}):(0,S.jsx)("div",{children:(0,S.jsx)(i.Suspense,{children:(0,S.jsx)(y.u,{userInteractionType:_.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!T&&!k,children:(0,S.jsx)(C,{events:t,index:z,onBack:function(e){(0,o.n2L)(M)&&(0,a.MO)("whatmoreAddedToCart")&&(0,h.D)(M,(()=>{}),100,window.location.hostname,e),A(-2),U(!1)},template:"template-product-page"})})})})]})}},6095:function(e,t,n){function i(e,t){let n=0;let i=new MutationObserver((function(){document.querySelector("."+e)?(t(),i.disconnect()):0==n&&(n=1,setTimeout((()=>{t(),i.disconnect()}),8e3))}));i.observe(document.body,{childList:!0,subtree:!0})}n.d(t,{A:function(){return i}})},4522:function(e,t,n){n.d(t,{gW:function(){return s},GF:function(){return d},y4:function(){return c},PB:function(){return u},Z2:function(){return l}});var i=n(9854),o=n(7753),r=n(778);var a=n(733);const s={[r.K.EVENT_VIEW]:"whatmore_video_click_event",[r.K.VIDEO_LIKED]:"whatmore_video_like_event",[r.K.VIDEO_SHARE_CTA_CLICKED]:"whatmore_video_share_event",[r.K.PRODUCT_TILE_ATC_CLICKED]:"whatmore_video_atc_event",[r.K.SHOPNOW_ATC_CLICKED]:"whatmore_video_atc_event",[r.K.SHOPNOW_CLICKED]:"whatmore_product_tile_click_event",[r.K.PRODUCT_TILE_SHOPNOW_CLICKED]:"whatmore_product_tile_click_event"};function d(e){var t;let{userInteractionType:n,userInteractionMetadata:d,widgetSourceDetails:l,event:c,productList:u,ctaList:p}=e;(0,a.s)({userInteractionType:n,userInteractionMetadata:d,widgetSourceDetails:l,event:c,productList:u,ctaList:p}),n in s&&function(e,t){const n=(0,o.MO)("whatmoreShopId");(e!=r.K.EVENT_VIEW||(0,i.UAB)(n))&&(e!=r.K.SHOPNOW_ATC_CLICKED&&e!=r.K.PRODUCT_TILE_ATC_CLICKED||(0,i.Tn_)(n))&&(e!=r.K.VIDEO_LIKED||(0,i.sKB)(n))&&(e!=r.K.VIDEO_SHARE_CTA_CLICKED||(0,i.YOU)(n))&&(e!=r.K.PRODUCT_TILE_SHOPNOW_CLICKED&&e!=r.K.SHOPNOW_CLICKED||(0,i.ejq)(n))&&"function"==typeof fbq&&(async()=>{fbq("trackCustom",s[e],{id:null===t||void 0===t?void 0:t.client_product_id,product_url:null===t||void 0===t?void 0:t.product_link})})()}(n,null!==(t=null===u||void 0===u?void 0:u[1])&&void 0!==t?t:null===u||void 0===u?void 0:u[0])}function l(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s}=e;(0,a.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s})}function c(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s}=e;(0,a.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s})}function u(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s}=e;(0,a.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:i,event:o,productList:r,ctaList:s})}}}]);