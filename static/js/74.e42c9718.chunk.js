"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[74],{5380:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(4959),o=n(7313),a=n(4892),r=n(6805),s=n(7753),d=n(9821);var l=function(e){const[t,n,i,o,a]=(0,d.Z)(),[l]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),p=a[r.YP]===r.$w?c/100:l/100*1.2;return[t*p,n*p,a]},c=n(9723),p=n(9461),u=n.n(p),h=n(1195),w=n(7108),f=(n(7244),n(123),n(9854)),x=n(9039),g=n(6417);var v=function(e){var t;const n=o.useRef(null);var[d,p,v]=l();const{whatmoreUITheme:m}=(0,o.useContext)(x.I),[y]=(0,s.j1)("whatmoreEmbedAppVideoTitle"),[b]=(0,s.j1)("whatmoreEmbedAppPositionPortrait"),[j]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[I]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,s.j1)("whatmoreEmbedAppPositionLandscape"),[E]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[L]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,s.MO)("whatmoreShopId");var z=b,_=j,k=I;v[r.YP]===r.$w&&(z=S,_=E,k=L);const[T,C]=(0,o.useState)(["initial",window.pageYOffset]),[D,M]=(0,o.useState)(!1),V=null!==(t=e.isSpotlight)&&void 0!==t&&t,O=v[r.YP]===r.$w?.7*(0,f.zG)(P):(0,f.zG)(P),A=V?O:1;d*=A,p*=A;const B=V?(0,f.G0)(P):z,F=V?(0,f.X8)(P):(0,f.lV)(P),[Z,R]=(0,o.useState)(!V&&(0,f.eX)(P));function N(e,t){C(e),e[1]<=100?M(!1):t!=D&&(M(t),R(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(N([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},i=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[T]),(0,i.O3)({ref:n,handler:()=>{N(["scrolled-up",T[1]],!0)}});const G=e.event,W=e.inVideoClick,Y=e.closeClick,K=.3*p,U=.6*p,$=.1*p,H=.1*(.5*p),J="round"==m?"10px":"0px",X=(0,f.Z$)(P);var q=!1,Q=0,ee=0;function te(e){q=e}return(0,g.jsx)("div",{children:Z&&!F?(0,g.jsx)(g.Fragment,{}):D&&F?(0,g.jsx)("div",{style:"left"===B?{left:"1px",bottom:V?(0,f.vn)(P)+"px":k+"px",position:"fixed",zIndex:X}:{right:"5px",bottom:V?(0,f.vn)(P)+"px":k+"px",position:"fixed",zIndex:X},children:(0,g.jsxs)("div",{onClick:()=>{N(["initial",T[1]],!1)},style:{margin:"1px",width:p+"px",height:d+"px"},className:"left"===B?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,g.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:J,overflow:"hidden"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,g.jsx)(a.Z,{url:G.thumbnail_image,isPlaying:!1,event:G})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,g.jsx)(h.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:K+"px"},style:{position:"relative",zIndex:1,left:H+"px",bottom:H+"px"},onClick:Y})})}),(0,g.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)(w.Z,{sx:{color:"white",fontSize:2*K+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,g.jsx)(u(),{nodeRef:n,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,i;n=t.x,i=t.y,Q=n,ee=i},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{q&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):W(G)},children:(0,g.jsx)("div",{ref:n,style:"left"===B?{left:V?(0,f.$I)(P)+"px":_+"px",bottom:V?(0,f.vn)(P)+"px":k+"px",position:"fixed",zIndex:X}:{right:V?(0,f.$I)(P)+"px":_+"px",bottom:V?(0,f.vn)(P)+"px":k+"px",position:"fixed",zIndex:X},children:(0,g.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:p+"px",height:d+"px"}),className:"left"===B?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,g.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:J,overflow:"hidden",position:"relative"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,g.jsx)(a.Z,{url:G.thumbnail_image,isMuted:!0,isPlaying:!0,event:G})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)(h.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:K+"px"},onClick:Y,style:{position:"relative",zIndex:1,left:$+"px",bottom:$+"px"}})}),(0,g.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,g.jsx)(c.Z,{sx:{color:(0,f.Y)(P),fontSize:U+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,g.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:J,borderBottomRightRadius:J,backgroundImage:y?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,g.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*K+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",y]})})]})})]})})})})}},4284:function(e,t,n){n.r(t);var i=n(7313),o=n(9854),a=n(2860),r=n(7753),s=n(5160),d=n(6967),l=n(5380),c=n(58),p=n(8984),u=n(4669),h=n(941),w=n(9302),f=n(2575),x=n(7300),g=n(6524),v=n(9039),m=n(7376),y=n(778),b=n(7643),j=n(7008),I=n(7381),S=n(6417);const E=(0,f.Z)({key:"whatmore-css-ppv"}),L=i.lazy((()=>Promise.all([n.e(819),n.e(576),n.e(210),n.e(803),n.e(926),n.e(303),n.e(209),n.e(108)]).then(n.bind(n,4209))));function P(e){return e.split(/[?#]/)[0]}t.default=function(e){const[t,n]=(0,i.useState)(),[f,z]=(0,i.useState)(),[_]=(0,r.j1)("isInDesignMode"),[k]=(0,r.j1)("isDemoBrand"),[T]=(0,r.j1)("whatmoreEmbedAppUseVariant"),[C,D]=(0,i.useState)(-2),[M]=(0,r.j1)("whatmoreVariantId"),[V]=(0,r.j1)("whatmoreShopId");var[O]=(0,r.j1)("whatmoreProductId");const A=(0,r.MO)("isLandingSharedLink"),B=(0,r.MO)("whatmoreShareTemplateId"),F=(0,r.MO)("whatmoreShareEventId");O=(0,o.iX)(V)?P(window.location.href):O;const[Z,R]=(0,i.useState)((()=>"true"===T?M:O));var N=a.Gc+"/v2/brand/"+V+"/product-events";const{whatmoreWidgetSourceDetails:G}=(0,i.useContext)(v.I);(0,i.useEffect)((()=>{(0,I.Oo)("Video shopping powered by Whatmore!"),(0,d.hb)();const e=()=>{const e="_whatmore_bulk_events",t=JSON.parse(localStorage.getItem(e))||[];t&&t.length>0&&((0,j.K)(t),localStorage.removeItem(e))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,i.useEffect)((()=>{(0,u.ll)(V)}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||f||!(0,p.KE)()||(0,r.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,i.useEffect)((()=>{D(-1),fetch(N.toString()+"?client_product_id="+Z.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>e.events)).then((e=>(n(e),e))).then((e=>((0,o.yo)(V)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==P(window.location.href))return;const i={product_id:n.product_id,product_link:P(window.location.href)};fetch(a.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)})}),500)}(e,Z),e))).catch((e=>{z(e.message)}))}),[Z]),(0,i.useEffect)((()=>{D(-2),t&&t.length>0&&(0,m.PB)({userInteractionType:y.K.PDP_VISITED,widgetSourceDetails:G,event:t[0],productList:t[0].products,ctaList:t[0].cta})}),[t]),(0,i.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){if("true"===T){const e=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]==e)return i[1]}return!1}("variant");e&&""!==e&&R(e)}}))}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||f||A&&"template-embed"==(0,g.zv)(B)&&null!=F&&t.forEach(((e,t)=>{F==e.event_id&&W(e,!0,t)}))}),[t]);const W=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,p.KE)()&&!t&&(0,c.QV)(),(0,x.B6)(e)||(0,x.WJ)(e))return _||k||(async()=>{(0,s.wh)(e),(0,u.Tc)(V,a.h7,a.dU),(0,d.H4)(e.event_id,e.products,"product_page","video_popup")})(),void D(n)};function Y(){return(0,S.jsx)(S.Fragment,{})}return null==t||0==t.length||f?(0,S.jsx)("div",{}):(0,S.jsx)(w.C,{value:E,children:"no-product"===Z||-1===C||0===t.length?(0,S.jsx)(Y,{}):-2===C&&t.length>0?(0,S.jsx)("div",{children:(0,S.jsx)(b.u,{userInteractionType:y.K.PDP_POPUP_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!k,children:(0,S.jsx)(l.Z,{event:t[0],inVideoClick:W,closeClick:e=>{e.stopPropagation(),D(-1)}})})}):(0,S.jsx)("div",{children:(0,S.jsx)(i.Suspense,{children:(0,S.jsx)(b.u,{userInteractionType:y.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!k,children:(0,S.jsx)(L,{events:t,index:C,onBack:function(){(0,o.n2)(V)&&(0,r.MO)("whatmoreAddedToCart")&&(0,h.D)(V,(()=>{}),100,window.location.hostname),D(-2)},template:"template-product-page"})})})})})}},7376:function(e,t,n){n.d(t,{GF:function(){return o},PB:function(){return s},Z2:function(){return a},y4:function(){return r}});var i=n(733);function o(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function a(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function r(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}function s(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:a,productList:r,ctaList:s})}}}]);