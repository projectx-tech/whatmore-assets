"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[61,191,465],{4658:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}});var o=n(7313),r=n(6090),i=n(7616),a=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),l=n(2575),s=n(7129),d=n(8811),c=(n(3439),n(7753)),p=n(7931),u=n(9018),v=n(9854),x=n(3933),h=n(8866),f=n(868),g=n(342),m=n(3437),y=n(3455),w=n(6417);var j=function(t){var e;const n=t.isMuted,o=null!==(e=t.iconSize)&&void 0!==e?e:30;function r(){t.onToggle()}return(0,w.jsx)("div",{style:{cursor:"pointer"},children:n?(0,w.jsx)(y.Z,{sx:{color:"white",fontSize:o,filter:"drop-shadow(0 0 5px black);"},onClick:()=>{r()}}):(0,w.jsx)(m.Z,{sx:{color:"white",fontSize:o,filter:"drop-shadow(0 0 5px black);"},onClick:()=>{r()}})})},b=n(1896),C=n(8984),I=n(58),S=n(6119),M=n(4522),k=n(778),P=n(3433);function Z(t){const[e,n]=(0,o.useState)(t.initialMuteState),r=t.events,i=t.activeEventIndex,a=t.setActiveEventIndex,l=(0,c.MO)("whatmoreShopId"),s="portrait"===t.mode;function d(){(0,v.hr)(l)&&t.isCTAPresent||(n(!e),(0,C.KE)()&&(0,I.QV)(),t.onMuteToggle())}const x=t.event;return(0,w.jsx)("div",{style:{position:(0,v.SJ)(l)?"absolute":"relative",top:(0,v.SJ)(l)?0:"",zIndex:1,bottom:(0,v.SJ)(l)?"":"100%",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,w.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,w.jsxs)("div",{className:"banner-event-overlay",style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"1%",paddingLeft:"1%",paddingTop:"1%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:[!(t.isCTAPresent&&(0,v.hr)(l)||"video"!==x.event_type)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{style:{width:"100%",height:"100%"},onClick:()=>d()}),(0,w.jsx)(j,{isMuted:e,onToggle:()=>{d()}})]}),r.length>1&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{classname:"banner-navigation-overlay",style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",backgroundColor:"transparent",borderRadius:"50%",zIndex:2,border:"2px solid white",padding:"2px",cursor:"pointer"},onClick:t=>{t.stopPropagation(),a(0===i?r.length-1:i-1)},children:(0,w.jsx)("div",{style:{backgroundColor:"#fff",borderRadius:"50%",padding:"6px"},children:(0,w.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"20px",color:"#252525",height:"20px"},children:(0,w.jsx)(p.Z,{})})})}),(0,w.jsx)("div",{style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",backgroundColor:"transparent",borderRadius:"50%",zIndex:2,border:"2px solid white",padding:"2px",cursor:"pointer"},onClick:t=>{t.stopPropagation(),a(i===r.length-1?0:i+1)},children:(0,w.jsx)("div",{style:{backgroundColor:"#fff",borderRadius:"50%",padding:"6px"},children:(0,w.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"20px",color:"#252525",height:"20px",textAlign:"center"},children:(0,w.jsx)(u.Z,{})})})}),(0,v.cRS)(l)&&(0,w.jsx)("div",{style:{display:"flex",position:"absolute",bottom:"7%",left:"50%",transform:"translateX(-50%)",gap:"24px",zIndex:1},children:r.map(((t,e)=>{const n=e===i;return(0,w.jsx)("button",{onClick:t=>{t.stopPropagation(),a(e)},style:{width:n?"25px":s?"12px":"14px",height:s?"12px":"14px",borderRadius:n?"10px":"50%",backgroundColor:n?(0,v.YFz)(l):"#f8eeec",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.3)"}},e)}))})]})]}),(0,w.jsx)("div",{style:{width:"100%",height:"100%"},onClick:()=>d()})]})})}var z=function(t){var e,n,r;const[i,a,l]=(0,h.Z)(),[s,p]=(0,o.useState)(!0),{whatmoreUITheme:u}=(0,o.useContext)(d.I),m=(0,c.MO)("whatmoreVideoTileSize"),{ref:y,inView:j,entry:C}=(0,x.YD)({triggerOnce:!1}),{whatmoreWidgetSourceDetails:I}=(0,o.useContext)(d.I),z=(0,c.MO)("whatmoreShopId"),L=t.events,R=t.activeEventIndex,T=t.setActiveEventIndex,E=L[R],A=((0,v.nzC)(z),(0,g.uv)(E)),F=(0,g.WN)(E);if("portrait"===i&&!A)return(0,w.jsx)(w.Fragment,{});if("landscape"===i&&!F)return(0,w.jsx)(w.Fragment,{});const N=(0,f.V)("portrait"===i?A:F),_=m/100*(0,v.b4p)(z),V=m/100*(0,v.GmU)(z),B="portrait"===i?(0,v.oOc)(z):(0,v.snl)(z),D="portrait"===i?l*_:l*V,O=D*B,J=null!=(null===(e=E.cta)||void 0===e||null===(n=e[1])||void 0===n?void 0:n.cta_link);return(0,o.useEffect)((()=>{d.$.forEach((t=>{var e;if(!(null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-banner-a"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-banner-a"]')))return;const n=t.querySelector(".whatmore-base");n&&(n.style.minHeight="0px")}))}),[]),(0,w.jsxs)("div",{ref:y,onClick:()=>{var t,e;(0,M.GF)({userInteractionType:k.K.BANNER_WIDGET_CLICKED,widgetSourceDetails:I,event:L[R]}),(0,v.hr)(z)&&J&&!(0,v.j1_)(z)&&window.open(null===(t=E.cta)||void 0===t||null===(e=t[1])||void 0===e?void 0:e.cta_link,"_self")},style:{position:"relative",margin:"0 auto",width:(0,v.SJ)(z)?"100%":D,minHeight:(0,v.SJ)(z)?l*B:"",height:(0,v.SJ)(z)?"auto":O,borderWidth:(0,v.alU)(z),borderColor:(0,v.qPe)(z),overflow:"hidden",cursor:"pointer"},children:[(0,w.jsx)(b.Z,{height:"100%",width:"100%",url:N,isPlaying:j,event:E,isVideoMuted:s,setDuration:t.setDuration,source:P.j.BANNER}),(0,w.jsx)(Z,{isCTAPresent:J,events:L,activeEventIndex:R,setActiveEventIndex:T,event:E,mode:i,onMuteToggle:()=>p(!s),initialMuteState:s}),(0,v.j1_)(z)&&(0,w.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"portrait"===i?"12%":"20%"},className:"whatmore-ios-css-relative-fix",children:(0,w.jsx)("div",{children:(0,w.jsx)(S.Z,{event:E,cta:null===E||void 0===E||null===(r=E.cta)||void 0===r?void 0:r[1],fontFactor:.6})})})]})};const L=(0,l.Z)({key:"whatmore-css-bv"});var R=function(t){const{whatmoreRootId:e}=(0,o.useContext)(d.I),[n,l]=(0,o.useState)(0),c=t.events,[p,u]=(0,o.useState)(-1);let v;return(0,o.useEffect)((()=>{v&&clearInterval(v);const t="video"===c[n].event_type,e=t?1e3*p:6e3;return t?-1!=p&&(v=setInterval((()=>{l((t=>t===c.length-1?0:t+1))}),e)):v=setInterval((()=>{l((t=>t===c.length-1?0:t+1))}),e),()=>{clearInterval(v)}}),[p,n]),delete i.ZP.styles.global,(0,w.jsx)(a.C,{value:L,children:(0,w.jsx)("div",{className:"whatmore-banner-events",children:(0,w.jsx)(r.x,{theme:i.ZP,cssVarsRoot:e,resetCSS:!1,children:(0,w.jsx)(s.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,w.jsx)(z,{activeEventIndex:n,events:c,setActiveEventIndex:l,setDuration:u})})})})})}},3867:function(t,e,n){var o=n(8816),r=n(417),i=n(4885),a=n(7753),l=n(8811),s=n(7313),d=n(6417);e.Z=function(t){var e;const{whatmoreUITheme:n}=(0,s.useContext)(l.I),[c]=(0,a.j1)("whatmoreSecondaryColor"),[p,u]=(0,a.j1)("productRatings"),v=(0,a.MO)("whatmorePrimaryFont"),x=(t.storeId,t.productId),h=(t.productLink,t.fontSize),f=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===p||"undefined"==typeof p||!(x in p)||p[x].avgRating>5)return(0,d.jsx)(d.Fragment,{});const g=p[x].avgRating,m=p[x].totalRatings;return(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,d.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(g))].map(((t,e)=>(0,d.jsx)(o.Z,{sx:{color:c,fontSize:h+"px"}},"star-icon"+e))),g-Math.floor(g)>.2?(0,d.jsx)(r.Z,{sx:{color:c,fontSize:h+"px"}},"star-half-icon"):g-Math.floor(g)==0?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(i.Z,{sx:{color:c,fontSize:h+"px"}},"star-outline-icon"),[...Array(Math.floor(5-g))].map(((t,e)=>(0,d.jsx)(i.Z,{sx:{color:c,fontSize:h+"px"}},"star-outline-icon-"+e))),(0,d.jsx)("div",{children:(0,d.jsx)("div",{width:"2px"})}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{style:{backgroundColor:c,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,d.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*h+"px","important"),t.style.setProperty("font-family",v,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",g,"\xa0"]})})}),(0,d.jsx)("div",{children:(0,d.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",f,"important"),t.style.setProperty("font-size",.8*h+"px","important"),t.style.setProperty("font-family",v,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+m+")"]})})]})})}},7129:function(t,e,n){n.d(e,{V:function(){return o}});const o=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},9363:function(t,e,n){n.d(e,{$:function(){return a},s:function(){return i}});var o=n(9854),r=n(7753);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,r.MO)("whatmoreShopId");return"shopify"!=(0,o.Ipo)(n)?"STRNV8MHJTF"==n?t+"?format=webp":t:t+e}function a(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const n=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],o=/\.(jpeg|jpg|gif|png|svg|webp)$/i,r=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==o&&void 0!==o&&o.test(n)?"image":null!==r&&void 0!==r&&r.test(n)?"video":void 0}},5456:function(t,e,n){n.d(e,{B:function(){return o}});const o=function(t,e){return!(isNaN(e)||!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},1195:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");e.Z=a},7931:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");e.Z=a},9018:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");e.Z=a},9723:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");e.Z=a},8816:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=a},417:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=a},4885:function(t,e,n){var o=n(4836);e.Z=void 0;var r=o(n(5045)),i=n(6417),a=(0,r.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=a},3439:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);