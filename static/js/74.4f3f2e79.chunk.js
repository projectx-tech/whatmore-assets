"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[74],{5380:function(e,t,i){i.d(t,{Z:function(){return g}});var n=i(4959),o=i(7313),a=i(4892),r=i(6805),s=i(7753),d=i(9821);var l=function(e){const[t,i,n,o,a]=(0,d.Z)(),[l]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),p=a[r.YP]===r.$w?c/100:l/100*1.2;return[t*p,i*p,a]},c=i(9723),p=i(9461),u=i.n(p),h=i(1195),w=i(7108),f=(i(7244),i(123),i(9854)),x=i(9039),v=i(6417);var g=function(e){var t;const i=o.useRef(null);var[d,p,g]=l();const{whatmoreUITheme:m}=(0,o.useContext)(x.I),[y]=(0,s.j1)("whatmoreEmbedAppVideoTitle"),[b]=(0,s.j1)("whatmoreEmbedAppPositionPortrait"),[j]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[I]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,s.j1)("whatmoreEmbedAppPositionLandscape"),[E]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[L]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,s.MO)("whatmoreShopId");var z=b,_=j,k=I;g[r.YP]===r.$w&&(z=S,_=E,k=L);const[T,C]=(0,o.useState)(["initial",window.pageYOffset]),[D,M]=(0,o.useState)(!1),A=null!==(t=e.isSpotlight)&&void 0!==t&&t,V=g[r.YP]===r.$w?.7*(0,f.zGA)(P):(0,f.zGA)(P),O=A?V:1;d*=O,p*=O;const B=A?(0,f.G0o)(P):z,F=A?(0,f.X8j)(P):(0,f.lVn)(P),[Z,R]=(0,o.useState)(!A&&(0,f.eXi)(P));function N(e,t){C(e),e[1]<=100?M(!1):t!=D&&(M(t),R(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(N([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[T]),(0,n.O3)({ref:i,handler:()=>{N(["scrolled-up",T[1]],!0)}});const G=e.event,W=e.inVideoClick,Y=e.closeClick,K=.3*p,U=.6*p,$=.1*p,H=.1*(.5*p),J="round"==m?"10px":"0px",X=(0,f.Z$A)(P);var q=!1,Q=0,ee=0;function te(e){q=e}return(0,v.jsx)("div",{children:Z&&!F?(0,v.jsx)(v.Fragment,{}):D&&F?(0,v.jsx)("div",{style:"left"===B?{left:"1px",bottom:A?(0,f.vnu)(P)+"px":k+"px",position:"fixed",zIndex:X}:{right:"5px",bottom:A?(0,f.vnu)(P)+"px":k+"px",position:"fixed",zIndex:X},children:(0,v.jsxs)("div",{onClick:()=>{N(["initial",T[1]],!1)},style:{margin:"1px",width:p+"px",height:d+"px"},className:"left"===B?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,v.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:J,overflow:"hidden"},children:(0,v.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,v.jsx)(a.Z,{url:G.thumbnail_image,isPlaying:!1,event:G})})}),(0,v.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,v.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,v.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,v.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,v.jsx)(h.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:K+"px"},style:{position:"relative",zIndex:1,left:H+"px",bottom:H+"px"},onClick:Y})})}),(0,v.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(w.Z,{sx:{color:"white",fontSize:2*K+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,v.jsx)(u(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,Q=i,ee=n},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{q&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):W(G)},children:(0,v.jsx)("div",{ref:i,style:"left"===B?{left:A?(0,f.$II)(P)+"px":_+"px",bottom:A?(0,f.vnu)(P)+"px":k+"px",position:"fixed",zIndex:X}:{right:A?(0,f.$II)(P)+"px":_+"px",bottom:A?(0,f.vnu)(P)+"px":k+"px",position:"fixed",zIndex:X},children:(0,v.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:p+"px",height:d+"px"}),className:"left"===B?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,v.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:J,overflow:"hidden",position:"relative"},children:(0,v.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,v.jsx)(a.Z,{url:G.thumbnail_image,isMuted:!0,isPlaying:!0,event:G})})}),(0,v.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,v.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,v.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,v.jsx)(h.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:K+"px"},onClick:Y,style:{position:"relative",zIndex:1,left:$+"px",bottom:$+"px"}})}),(0,v.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,v.jsx)(c.Z,{sx:{color:(0,f.Ya_)(P),fontSize:U+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,v.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:J,borderBottomRightRadius:J,backgroundImage:y?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,v.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*K+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",y]})})]})})]})})})})}},4284:function(e,t,i){i.r(t);var n=i(7313),o=i(9854),a=i(2860),r=i(7753),s=i(5160),d=i(6967),l=i(5380),c=i(58),p=i(8984),u=i(4669),h=i(941),w=i(9302),f=i(2575),x=i(7300),v=i(6524),g=i(9039),m=i(7376),y=i(778),b=i(7643),j=i(7008),I=i(7381),S=i(6417);const E=(0,f.Z)({key:"whatmore-css-ppv"}),L=n.lazy((()=>Promise.all([i.e(819),i.e(576),i.e(210),i.e(955),i.e(926),i.e(303),i.e(209),i.e(903)]).then(i.bind(i,4209))));function P(e){return e.split(/[?#]/)[0]}t.default=function(e){const[t,i]=(0,n.useState)(),[f,z]=(0,n.useState)(),[_]=(0,r.j1)("isInDesignMode"),[k]=(0,r.j1)("isDemoBrand"),[T]=(0,r.j1)("whatmoreEmbedAppUseVariant"),[C,D]=(0,n.useState)(-2),[M]=(0,r.j1)("whatmoreVariantId"),[A]=(0,r.j1)("whatmoreShopId");var[V]=(0,r.j1)("whatmoreProductId");const O=(0,r.MO)("isLandingSharedLink"),B=(0,r.MO)("whatmoreShareTemplateId"),F=(0,r.MO)("whatmoreShareEventId");V=(0,o.iXA)(A)?P(window.location.href):V;const[Z,R]=(0,n.useState)((()=>"true"===T?M:V));var N=a.Gc+"/v2/brand/"+A+"/product-events";const{whatmoreWidgetSourceDetails:G}=(0,n.useContext)(g.I);(0,n.useEffect)((()=>{(0,I.Oo)("Video shopping powered by Whatmore!"),(0,d.hb)();const e=()=>{const e="_whatmore_bulk_events",t=JSON.parse(localStorage.getItem(e))||[];t&&t.length>0&&((0,j.K)(t),localStorage.removeItem(e))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,n.useEffect)((()=>{(0,u.ll)(A)}),[]),(0,n.useEffect)((()=>{null==t||0==t.length||f||!(0,p.KE)()||(0,r.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,n.useEffect)((()=>{D(-1),fetch(N.toString()+"?client_product_id="+Z.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>e.events)).then((e=>(i(e),e))).then((e=>((0,o.yoE)(A)&&function(e,t){setTimeout((async()=>{const i=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!i||i.product_link==P(window.location.href))return;const n={product_id:i.product_id,product_link:P(window.location.href)};fetch(a.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})}),500)}(e,Z),e))).catch((e=>{z(e.message)}))}),[Z]),(0,n.useEffect)((()=>{var e,i;D(-2),(t&&t.length>0||(0,o.uO6)(A))&&(0,m.PB)({userInteractionType:y.K.PDP_VISITED,widgetSourceDetails:G,event:null===t||void 0===t?void 0:t[0],productList:null===t||void 0===t||null===(e=t[0])||void 0===e?void 0:e.products,ctaList:null===t||void 0===t||null===(i=t[0])||void 0===i?void 0:i.cta})}),[t]),(0,n.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){if("true"===T){const e=function(e){for(var t=window.location.search.substring(1).split("&"),i=0;i<t.length;i++){var n=t[i].split("=");if(n[0]==e)return n[1]}return!1}("variant");e&&""!==e&&R(e)}}))}),[]),(0,n.useEffect)((()=>{null==t||0==t.length||f||O&&"template-embed"==(0,v.zv)(B)&&null!=F&&t.forEach(((e,t)=>{F==e.event_id&&W(e,!0,t)}))}),[t]);const W=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,p.KE)()&&!t&&(0,c.QV)(),(0,x.B6)(e)||(0,x.WJ)(e))return _||k||(async()=>{(0,s.wh)(e),(0,u.Tc)(A,a.h7,a.dU),(0,d.H4)(e.event_id,e.products,"product_page","video_popup")})(),void D(i)};function Y(){return(0,S.jsx)(S.Fragment,{})}return null==t||0==t.length||f?(0,S.jsx)("div",{}):(0,S.jsx)(w.C,{value:E,children:"no-product"===Z||-1===C||0===t.length?(0,S.jsx)(Y,{}):-2===C&&t.length>0?(0,S.jsx)("div",{children:(0,S.jsx)(b.u,{userInteractionType:y.K.PDP_POPUP_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!k,children:(0,S.jsx)(l.Z,{event:t[0],inVideoClick:W,closeClick:e=>{e.stopPropagation(),D(-1)}})})}):(0,S.jsx)("div",{children:(0,S.jsx)(n.Suspense,{children:(0,S.jsx)(b.u,{userInteractionType:y.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!k,children:(0,S.jsx)(L,{events:t,index:C,onBack:function(){(0,o.n2L)(A)&&(0,r.MO)("whatmoreAddedToCart")&&(0,h.D)(A,(()=>{}),100,window.location.hostname),D(-2)},template:"template-product-page"})})})})})}},7376:function(e,t,i){i.d(t,{GF:function(){return o},PB:function(){return s},Z2:function(){return a},y4:function(){return r}});var n=i(733);function o(e){let{userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,n.s)({userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function a(e){let{userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,n.s)({userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function r(e){let{userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,n.s)({userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function s(e){let{userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,n.s)({userInteractionType:t,userInteractionMetadata:i,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}}}]);