"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[806,939,956],{3278:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(9950),i=n(9769),o=n(9108),a=(n(3997),n(9130),n(4669),n(9733),n(4365),n(7229),n(6042),n(2682)),s=n(4910),l=n(7509),d=n(4737),m=(n(4826),n(664)),c=n(7575),u=n(2257),h=n(1348),p=n(6649),v=n(7300),g=n(3788),f=n(6493),y=n(4895),x=n(5375),$=n(4833),b=n(4414);var w=function(e){var t;const n=e.isMuted,{whatmoreWidgetSourceDetails:i}=(0,r.useContext)(d.B),o=i.templateType,a=(0,$.l2)(o),s=null!==(t=e.iconSize)&&void 0!==t?t:30;function l(t){e.onToggle(t)}return(0,b.jsx)("div",{style:{cursor:"pointer"},children:n?(0,b.jsx)(x.A,{sx:{color:"white",fontSize:a?1.3*s:s,backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:"50%",padding:"10px"},onClick:e=>{l(e)}}):(0,b.jsx)(y.A,{sx:{color:"white",fontSize:a?1.3*s:s,backgroundColor:"rgba(0, 0, 0, 0.4)",borderRadius:"50%",padding:"10px"},onClick:e=>{l(e)}})})},j=n(3771),_=n(6613),C=n(1085),A=n(1079),I=n(5873),k=n(1351),P=n(6157),S=n(3294),M=n(9879),z=n(9821),R=n(69);function N(e){const[t,n]=(0,r.useState)(e.initialMuteState),i=e.events,o=e.activeEventIndex,a=e.setActiveEventIndex,s=(0,m.Xd)("whatmoreShopId"),l="portrait"===e.mode;function d(r){r.stopPropagation(),n(!t),(0,_.MN)()&&((0,z._)()?(0,C.bo)():(0,R.bi)()),e.onMuteToggle()}const p=e.event;return(0,b.jsx)("div",{style:{position:(0,h.D7t)(s)?"absolute":"relative",top:(0,h.D7t)(s)?0:"",zIndex:1,bottom:(0,h.D7t)(s)?"":"100%",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,b.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsxs)("div",{className:"banner-event-overlay",style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",width:"100%",paddingRight:"1%",paddingLeft:"1%",paddingTop:"1%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:["video"==p.event_type&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:{width:"100%",height:"100%"},onClick:e=>{d(e)}}),(0,b.jsx)(w,{isMuted:t,onToggle:e=>{d(e)}})]}),i.length>1&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{classname:"banner-navigation-overlay-left",style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",backgroundColor:"transparent",borderRadius:"50%",zIndex:2,border:"2px solid white",padding:"2px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),a(0===o?i.length-1:o-1)},children:(0,b.jsx)("div",{style:{backgroundColor:"#fff",borderRadius:"50%",padding:"6px"},children:(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"20px",color:"#252525",height:"20px"},children:(0,b.jsx)(c.A,{})})})}),(0,b.jsx)("div",{classname:"banner-navigation-overlay-right",style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",backgroundColor:"transparent",borderRadius:"50%",zIndex:2,border:"2px solid white",padding:"2px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),a(o===i.length-1?0:o+1)},children:(0,b.jsx)("div",{style:{backgroundColor:"#fff",borderRadius:"50%",padding:"6px"},children:(0,b.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"20px",color:"#252525",height:"20px",textAlign:"center"},children:(0,b.jsx)(u.A,{})})})}),(0,h.JiT)(s)&&(0,b.jsx)("div",{style:{display:"flex",position:"absolute",bottom:"7%",left:"50%",transform:"translateX(-50%)",gap:"24px",zIndex:1},children:i.map(((e,t)=>{const n=t===o;return(0,b.jsx)("button",{onClick:e=>{e.stopPropagation(),a(t)},style:{width:n?"25px":l?"12px":"14px",height:l?"12px":"14px",borderRadius:n?"10px":"50%",backgroundColor:n?(0,h.z1s)(s):"#f8eeec",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.3)"}},t)}))})]})]}),!(0,h.OC6)(s)&&(0,b.jsx)("div",{style:{width:"100%",height:"100%"},onClick:d})]})})}var E=function(e){var t,n,i,o;const[a,s,l]=(0,v.A)(),[c,u]=(0,r.useState)(!0),y=(0,m.Xd)("whatmoreVideoTileSize"),[x,$,w]=(0,p.A)({triggerOnce:!1}),{whatmoreWidgetSourceDetails:_}=(0,r.useContext)(d.B),C=(0,m.Xd)("whatmoreShopId"),z=e.events,R=e.activeEventIndex,E=e.setActiveEventIndex,F=z[R],D=(0,f.lP)(F),T=(0,f.cb)(F);if((0,r.useEffect)((()=>{I.Sn.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-banner-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-banner-a"]')))return;e&&(e.style.minHeight="0px")}))}),[]),"portrait"===a&&!D)return(0,b.jsx)(b.Fragment,{});if("landscape"===a&&!T)return(0,b.jsx)(b.Fragment,{});const L=(0,g.s)("portrait"===a?D:T),B=y/100*(0,h.igk)(C),W=y/100*(0,h.Y_l)(C),X="portrait"===a?(0,h.G0Q)(C):(0,h.ga9)(C),O="portrait"===a?l*B:l*W,V=O*X,H=null!=(null===(t=F.cta)||void 0===t||null===(n=t[1])||void 0===n?void 0:n.cta_link);return(0,b.jsxs)("div",{ref:x,onClick:()=>{var e,t;(0,k.kz)({userInteractionType:P.O.BANNER_WIDGET_CLICKED,widgetSourceDetails:_,event:z[R]}),(0,h.OC6)(C)&&H&&window.open(null===(e=F.cta)||void 0===e||null===(t=e[1])||void 0===t?void 0:t.cta_link,"_self")},style:{position:"relative",margin:"0 auto",width:(0,h.D7t)(C)?"100%":O,minHeight:(0,h.D7t)(C)?l*X:"",height:(0,h.D7t)(C)?"auto":V,borderWidth:(0,h.YcK)(C),borderColor:(0,h.Fwt)(C),overflow:"hidden",cursor:"pointer"},children:["28273541192"===C?(0,b.jsx)(M.A,{height:"100%",width:"100%",url:L,isPlaying:$,event:F,isVideoMuted:!$||c,source:S.N.BANNER}):(0,b.jsx)(j.A,{height:"100%",width:"100%",url:L,isPlaying:$,event:F,isVideoMuted:!$||c,setDuration:e.setDuration,source:S.N.BANNER}),(0,b.jsx)(N,{isCTAPresent:H,events:z,activeEventIndex:R,setActiveEventIndex:E,event:F,mode:a,onMuteToggle:()=>u(!c),initialMuteState:c}),(0,h.XYM)(C)&&(null===F||void 0===F||null===(i=F.cta)||void 0===i?void 0:i.length)>1&&(0,b.jsx)("div",{style:{position:"absolute",zIndex:1,bottom:"10%",left:"50%",transform:"translateX(-50%)"},className:"whatmore-ios-css-relative-fix",children:(0,b.jsx)(A.A,{isBanner:!0,event:F,cta:null===F||void 0===F||null===(o=F.cta)||void 0===o?void 0:o[1],fontFactor:.6})})]})};const F=(0,s.A)({key:"whatmore-css-bv"});var D=function(e){const{whatmoreRootId:t}=(0,r.useContext)(d.B),[n,s]=(0,r.useState)(0),m=e.events,[c,u]=(0,r.useState)(-1);let h;return(0,r.useEffect)((()=>{h&&clearInterval(h);const e="video"===m[n].event_type,t=e?1e3*c:6e3;return e?-1!=c&&(h=setInterval((()=>{s((e=>e===m.length-1?0:e+1))}),t)):h=setInterval((()=>{s((e=>e===m.length-1?0:e+1))}),t),()=>{clearInterval(h)}}),[c,n]),delete o.Ay.styles.global,(0,b.jsx)(a.C,{value:F,children:(0,b.jsx)("div",{className:"whatmore-banner-events",children:(0,b.jsx)(i.s,{theme:o.Ay,cssVarsRoot:t,resetCSS:!1,children:(0,b.jsx)(l.h.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,b.jsx)(E,{activeEventIndex:n,events:m,setActiveEventIndex:s,setDuration:u})})})})})}},2835:function(e,t,n){var r=n(7891),i=n(8454),o=n(3781),a=n(664),s=n(4414);t.A=function(e){var t;const n=(0,a.Xd)("whatmoreUITheme"),[l]=(0,a.QN)("whatmoreSecondaryColor"),[d,m]=(0,a.QN)("productRatings"),c=(0,a.Xd)("whatmorePrimaryFont"),u=e.productId,h=e.fontSize,p=null!==(t=e.fontColor)&&void 0!==t?t:"gray";if(null===d||"undefined"==typeof d||!(u in d)||d[u].avgRating>5)return(0,s.jsx)(s.Fragment,{});const v=d[u].avgRating,g=d[u].totalRatings;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(v))].map(((e,t)=>(0,s.jsx)(r.A,{sx:{color:l,fontSize:h+"px"}},"star-icon"+t))),v-Math.floor(v)>.2?(0,s.jsx)(i.A,{sx:{color:l,fontSize:h+"px"}},"star-half-icon"):v-Math.floor(v)==0?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(o.A,{sx:{color:l,fontSize:h+"px"}},"star-outline-icon"),[...Array(Math.floor(5-v))].map(((e,t)=>(0,s.jsx)(o.A,{sx:{color:l,fontSize:h+"px"}},"star-outline-icon-"+t))),(0,s.jsx)("div",{children:(0,s.jsx)("div",{width:"2px"})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{backgroundColor:l,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,s.jsxs)("p",{ref:e=>{e&&(e.style.setProperty("color","white","important"),e.style.setProperty("font-size",.8*h+"px","important"),e.style.setProperty("font-family",c,"important"),e.style.setProperty("-webkit-line-clamp",2,"important"),e.style.setProperty("line-clamp",2,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",v,"\xa0"]})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{ref:e=>{e&&(e.style.setProperty("color",p,"important"),e.style.setProperty("font-size",.8*h+"px","important"),e.style.setProperty("font-family",c,"important"),e.style.setProperty("-webkit-line-clamp",2,"important"),e.style.setProperty("line-clamp",2,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+g+")"]})})]})})}},7509:function(e,t,n){n.d(t,{h:function(){return r}});const r=(0,n(9950).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},16:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(9950),i=(n(5410),n(664)),o=n(4459),a=n(4414);var s=function(e){return(0,r.useEffect)((()=>{const e=(0,o.E2)((0,i.Xd)("whatmoreSecondaryColor"));!function(e,t,n,r){const i=`rgba(${e},${t},${n},${r})`,o=`\n    @keyframes whatmore-loading-indicator-keyframe {\n      0%,\n      100% {\n        box-shadow: 0em -2.6em 0em 0em ${i}, 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7);\n      }\n      12.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.7), 1.8em -1.8em 0 0em ${i}, 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5);\n      }\n      25% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.5), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 2.5em 0em 0 0em ${i}, 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      37.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 1.75em 1.75em 0 0em ${i}, 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      50% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 0em 2.5em 0 0em ${i}, -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      62.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -1.8em 1.8em 0 0em ${i}, -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      75% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -2.6em 0em 0 0em ${i}, -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      87.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -1.8em -1.8em 0 0em ${i};\n      }\n    }\n  `,a=document.createElement("style");a.type="text/css",a.innerHTML=o,document.head.appendChild(a)}(e[0],e[1],e[2],.2)}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:"whatmore-loading-indicator"})})},l=n(8781);var d=function(e){var t,n;const r=null!==(t=e.height)&&void 0!==t?t:"100%",i=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,a.jsxs)("div",{style:{width:i,height:r,overflow:"hidden",minHeight:r,minWidth:i},children:[(0,a.jsx)(l.A,{height:r,width:i}),(0,a.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,a.jsx)(s,{})})})]})}},8781:function(e,t,n){var r=n(4414);t.A=function(e){var t,n,i;const o=null!==(t=e.height)&&void 0!==t?t:"100%",a=null!==(n=e.width)&&void 0!==n?n:"100%",s=null!==(i=e.borderRadius)&&void 0!==i?i:"10px";return(0,r.jsx)("div",{style:{height:o,width:o,borderRadius:s,overflow:"hidden",minHeight:o,minWidth:a,maxHeight:o,maxWidth:a},children:(0,r.jsx)("div",{style:{minHeight:o,minWidth:a},height:"100%",width:"100%",className:"whatmore-shimmer"})})}},4033:function(e,t,n){n.d(t,{n:function(){return r}});const r=()=>{if("undefined"!==typeof window){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&navigator.vendor.includes("Apple")}return!1}},69:function(e,t,n){n.d(t,{Ij:function(){return o},bi:function(){return a}});let r,i=!1;function o(){return r?r.play().then((()=>{i=!0,console.debug("iOS autoplay restrictions bypassed."),r.pause()})).catch((e=>{console.error("Failed to bless videos:",e.message)})):Promise.reject(new Error("Blessing video not initialized."))}function a(){r||(r=document.createElement("video"),r.src="https://whatmore-other-assets.b-cdn.net/whatmore/dummy_for_video_pool_3s_muted_11kb.mp4",r.muted=!0,r.playsInline=!0,r.style.display="none",document.body.appendChild(r));const e=()=>{i||o()};document.addEventListener("click",e,{once:!0}),document.addEventListener("touchstart",e,{once:!0})}},9098:function(e,t,n){var r=n(9950),i=n(16),o=n(4414);t.A=function(e){var t,n,a;const[s,l]=(0,r.useState)(!1),d=r.useRef(0),m=(0,r.useRef)(null),c=null!==(t=e.timeUpdateCallback)&&void 0!==t?t:()=>{},u=null!==(n=e.height)&&void 0!==n?n:"100%",h=null!==(a=e.width)&&void 0!==a?a:"100%";return(0,r.useEffect)((()=>{d.current=0;const e=setInterval((()=>{d.current=d.current+.03,m.current&&c(d.current,5),d.current>=5&&(d.current=0)}),30);return()=>{clearInterval(e)}}),[e.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:h,height:"100%",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:s?"100%":"0px",height:s?"100%":"0px"},children:(0,o.jsx)("img",{ref:m,src:e.url,style:{objectFit:"cover",height:"100%",width:h,backgroundColor:"white"},alt:"image player",onLoad:()=>{l(!0)}})}),s?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.A,{width:h,height:u})]})}},9879:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(9950),i=n(6649),o=n(3788),a=n(6613),s=n(2039),l=n(9098),d=n(4033),m=n(664),c=n(6493),u=n(4414);var h=function(e){var t,n,o,s;const l=(0,r.useRef)(null),[h,p,v]=(0,i.A)({triggerOnce:!0}),g=(0,m.Xd)("whatmoreShopId"),f=null!==(t=e.height)&&void 0!==t?t:"100%",y=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,r.useEffect)((()=>{l.current&&(e.isPlaying?l.current.play():(((0,d.n)()||(0,a.At)())&&l.current.play(),"57939755089"==g?setTimeout((()=>{l.current.pause()}),300):l.current.pause()))}),[e.isPlaying,p]),(0,u.jsx)("div",{ref:h,style:{width:f,height:y,overflow:"hidden",display:"flex",alignItems:"center"},children:p||"51394281658"==g||"8968077397"==g?(0,u.jsxs)("video",{ref:l,className:"whatmore-video-player-muted",width:y,height:f,preload:"metadata",loop:!0,src:"86878257455"!=g?e.url:(0,c.yD)(e.url),playsInline:!0,poster:e.isPlaying&&1!=(null===(o=e.event)||void 0===o?void 0:o.index)&&"STRTFEDEDAP"!==g&&"STRY2V4XO5L"!==g?e.url:e.poster,muted:null===(s=e.isVideoMuted)||void 0===s||s,style:{backgroundColor:"white",borderRadius:e.borderRadius,objectFit:"cover"},children:[(0,u.jsx)("source",{src:e.url,type:"video/mp4"}),(0,u.jsx)("source",{src:(0,c.yD)(e.url),type:"video/mp4"})]}):(0,u.jsx)("div",{width:y,height:f,ref:e=>{e&&e.style.setProperty("display","block","important")}})})};var p=function(e){var t,n,d,p,v,g,f,y,x;const[$,b,w]=(0,i.A)({triggerOnce:!0}),j=(0,m.Xd)("whatmoreShopId"),_=(0,r.useRef)(null);if((0,r.useEffect)((()=>{_.current&&(e.isPlaying?_.current.play():_.current.pause())}),[e.isPlaying,b]),(0,s.Il)(e.event))return(0,u.jsx)(l.A,{height:e.height,width:e.width,url:e.url,isPlaying:e.isPlaying,timeUpdateCallback:e.timeUpdateCallback});const C=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200,A=null!==e&&void 0!==e&&null!==(n=e.event)&&void 0!==n&&null!==(d=n.poster_image)&&void 0!==d&&d.startsWith("https://cdn.shopify.com")?(null===e||void 0===e||null===(p=e.event)||void 0===p||null===(v=p.poster_image)||void 0===v?void 0:v.split("?")[0])+"?width=400&height=400":null===e||void 0===e||null===(g=e.event)||void 0===g?void 0:g.poster_image;if((0,a.MN)())return(0,u.jsx)(h,{isVideoMuted:e.isVideoMuted,event:null===e||void 0===e?void 0:e.event,borderRadius:e.borderRadius,height:"100%",width:"100%",poster:A,url:(0,o.s)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:C});const I=null!==(f=e.height)&&void 0!==f?f:"100%",k=null!==(y=e.width)&&void 0!==y?y:"100%";return(0,u.jsx)("div",{ref:$,style:{width:I,height:k,overflow:"hidden",display:"flex",alignItems:"center"},children:b||"51394281658"==j||"8968077397"==j?(0,u.jsxs)("video",{ref:_,className:"whatmore-video-player-muted",width:k,height:I,preload:"metadata",loop:!0,playsInline:!0,muted:null===(x=e.isVideoMuted)||void 0===x||x,poster:"57939755089"==j?"":A,style:{backgroundColor:"white",objectFit:"cover"},children:[(0,u.jsx)("source",{src:(0,o.s)(e.url),type:"video/mp4"}),(0,u.jsx)("source",{src:(0,c.yD)(e.url),type:"video/mp4"})]}):(0,u.jsx)("div",{width:k,height:I,ref:e=>{e&&e.style.setProperty("display","block","important")}})})}},3788:function(e,t,n){n.d(t,{s:function(){return s}});var r=n(1348),i=n(664);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},a={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},s=function(e){const t=(0,i.Xd)("whatmoreShopId");if(!e)return e;if(e.startsWith("https://cdn.shopify.com"))return e;if("AWSCDN"==(0,r.CfJ)(t))return e;if("AZURECDN"==(0,r.CfJ)(t)){if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(o))if(e.includes(t))return e.replace(t,o[t]);return e}}if("BUNNYCDN"==(0,r.CfJ)(t)){if(e.includes(".b-cdn.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(a))if(e.includes(t))return e.replace(t,a[t]);return e}}return e}},6493:function(e,t,n){n.d(t,{Cr:function(){return s},cb:function(){return a},lP:function(){return o},yD:function(){return l}});var r=n(1348);const i=(0,n(664).Xd)("whatmoreShopId"),o=function(e){var t,n;return"event_media_urls"in e?"image"===e.event_type?e.event_media_urls.primary.portrait.content_image_original:"secondary"in e.event_media_urls&&e.event_media_urls.secondary.portrait.content_video_1080p?e.event_media_urls.secondary.portrait.content_video_1080p:null!==(t=e.event_media_urls.primary.portrait.content_video_1080p)&&void 0!==t?t:null===(n=e.event_media_urls.primary.landscape)||void 0===n?void 0:n.content_video_1080p:e.event_hls_url},a=function(e){var t;return"event_media_urls"in e?"image"===e.event_type?e.event_media_urls.primary.landscape.content_image_original:"secondary"in e.event_media_urls&&e.event_media_urls.secondary.landscape.content_video_1080p?e.event_media_urls.secondary.landscape.content_video_1080p:null!==(t=e.event_media_urls.primary.landscape.content_video_1080p)&&void 0!==t?t:e.event_media_urls.primary.portrait.content_video_1080p:e.event_hls_url},s=function(e){if(e.startsWith("https://cdn.shopify.com")&&e.includes("whatmore_")){const t=(0,r.ath)(i);if(!t)return e;return`https://whatmore-brand-video-assets-720p.b-cdn.net/${t}/${e.split("whatmore_")[1].split("?")[0]}`}return e},l=function(e){if(e.startsWith("https://cdn.shopify.com")&&e.includes("whatmore_")){const t=(0,r.ath)(i);if(!t)return e;return`https://whatmore-brand-thumbnail-video-assets.b-cdn.net/${t}/${e.split("whatmore_")[1].split("?")[0]}`}return e}},7973:function(e,t,n){n.d(t,{B:function(){return a},b:function(){return o}});var r=n(1348),i=n(664);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,i.Xd)("whatmoreShopId");return"shopify"!=(0,r.NCy)(n)?"STRNV8MHJTF"==n?e+"?format=webp":e:e+t}function a(e){var t;if(null!==e&&void 0!==e&&e.includes("https://w-media.b-cdn.net/process-media"))return"image";const n=null===e||void 0===e||null===(t=e.trim())||void 0===t?void 0:t.split("?")[0],r=/\.(jpeg|jpg|gif|png|svg|webp)$/i,i=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==r&&void 0!==r&&r.test(n)?"image":null!==i&&void 0!==i&&i.test(n)?"video":void 0}},7458:function(e,t,n){n.d(t,{P:function(){return r}});const r=function(e,t){return!(isNaN(t)||!t||("string"===typeof t||t instanceof String)&&!t.trim().length)&&!(parseInt(t)<=parseInt(e))}},2209:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},7575:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore")},2257:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},5727:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82"}),"PlayArrowRounded")},7891:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},8454:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarHalf")},3781:function(e,t,n){var r=n(4994);t.A=void 0;var i=r(n(9526)),o=n(4414);t.A=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarOutline")},5410:function(){},4826:function(){},4365:function(){},9733:function(){},7229:function(){},4669:function(){},6042:function(){},9130:function(){}}]);