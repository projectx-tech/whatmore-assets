"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[530],{8675:function(n,t,e){e.d(t,{Z:function(){return v}});var i,o,r=e(3271),a=e(5098),l=e(7313),s=e(9821),c=e(2634),d=e(5180),h=e(168),u=e(686);const m=(0,u.F4)(i||(i=(0,h.Z)(["\n    0% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(1.05);\n    }\n"]))),f=(0,u.F4)(o||(o=(0,h.Z)(["\n    0% {\n        transform: scale(1.05);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]))),x="\n    ".concat(m,"; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n"),g="\n    ".concat(f,"; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n");var p=e(7753),j=e(7129),w=e(6417);var v=function(n){var t,e,[i,o]=(0,s.Z)();const[h]=(0,p.j1)("whatmorePrimaryFont");var u=(0,l.useContext)(j.V);const m=n.event,f=n.onClick,v=null===(t=n.isOnFocus)||void 0===t||t,C=(n.playOnUnfocus,null!==(e=n.animateOnFocus)&&void 0!==e&&e);return(0,w.jsxs)(r.xu,{animation:C?v?x:g:"none",marginTop:u.tileTopMargin,marginBottom:u.tileBottomMMargin,marginLeft:u.tileLeftMargin,marginRight:u.tileRightMargin,width:o,height:i,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{f(m)},cursor:"pointer",children:[(0,w.jsx)(a.Ee,{width:"full",height:"full",src:m.thumbnail_image,objectFit:"cover",fallback:(0,w.jsx)(d.Z,{width:o,height:i}),borderRadius:"lg"}),(0,w.jsx)(r.xu,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,w.jsxs)(r.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,w.jsx)(r.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,w.jsx)(r.Kq,{direction:"column",justifyContent:"flex-start",children:(0,w.jsx)(r.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,w.jsx)(r.Kq,{direction:"row",justifyContent:"space-between",children:(0,w.jsx)(c.Z,{event:m,fontSize:.05*i+"px",maxWidth:.8*o})})})})}),(0,w.jsx)(r.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,w.jsx)(r.Kq,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,w.jsx)(r.xu,{width:"full",borderRadius:"lg",children:(0,w.jsxs)(r.Kq,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,w.jsx)(r.xv,{color:"white",fontSize:.08*o+"px",fontWeight:"normal",align:"left",children:"         "}),(0,w.jsx)(r.xv,{fontSize:.08*o+"px",fontWeight:"normal",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:m.title.substring(0,40)}),(0,w.jsx)(r.xv,{fontSize:.08*o+"px",fontWeight:"bold",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:m.presenter_name.substring(0,15)})]})})})})]})})]})}},5523:function(n,t,e){e.r(t);var i=e(7313),o=e(8675),r=e(6090),a=e(7616),l=(e(6143),e(7244),e(123),e(9302)),s=e(2575),c=e(3271),d=e(9821),h=e(8866),u=e(7753),m=e(9316),f=e(7129),x=e(9854),g=e(8811),p=e(7300),j=e(4920),w=e(6417);const v=(0,s.Z)({key:"whatmore-css-hv"});function C(n,t){var e=[];const i=t;for(let o=0;o<n.length;o+=i){const t=n.slice(o,o+i);e.push(t)}return e}function b(n){var t;const[e,o]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),[l]=(0,u.j1)("whatmoreSecondaryColorShade600"),[s]=(0,u.j1)("whatmoreSecondaryColorShade300"),[d]=(0,u.j1)("whatmorePrimaryFont"),h=null!==(t=n.baseFontSize)&&void 0!==t?t:10,f=n.onClick;return(0,w.jsx)(c.xu,{width:"fit-content",height:"fit-content",paddingY:"4px",boxShadow:"lg",borderRadius:"md",backgroundColor:e?s:l,animation:r?m.mT:null,onClick:n=>{n.stopPropagation(),a(!0),f()},sx:{cursor:"pointer"},onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:(0,w.jsx)(c.Kq,{direction:"row",width:"fit-content",alignContent:"center",children:(0,w.jsxs)(c.xv,{fontSize:h,fontWeight:"normal",sx:{fontFamily:d+" !important",color:"white !important"},children:["\xa0"," view more ","\xa0"]})})})}function y(n){var t;const[e,r,a]=(0,d.Z)();var[l,s]=(0,i.useState)(0);const h=n.events,u=n.onClick,m=null!==(t=n.seeMoreIncrement)&&void 0!==t?t:1,f=C(h,Math.floor(Math.min(a,h.length)));return(0,w.jsx)(c.M5,{children:(0,w.jsxs)(c.Kq,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:f.map(((n,t)=>t>l?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:n.map(((n,t)=>(0,w.jsx)(c.xu,{style:{margin:"10px"},children:(0,p.B6)(n)||(0,p.WJ)(n)?(0,w.jsx)(j.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{u(n)}}):(0,w.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{u(n)}})},"event-"+t)))},"event-stack-"+t)))}),(0,w.jsx)(w.Fragment,{children:l<f.length-1?(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(b,{baseFontSize:.1*r,onClick:()=>{l>=f.length-1||s((n=>n+m))}})}):(0,w.jsx)(w.Fragment,{})})]})})}function F(n){var t;const[e,r,a,l]=(0,d.Z)();var[s,h]=(0,i.useState)(0);const u=n.events,m=n.onClick,f=null!==(t=n.seeMoreIncrement)&&void 0!==t?t:1,x=C(u,Math.floor(Math.min(a,u.length)));return(0,w.jsx)(c.M5,{paddingLeft:l+"px",paddingRight:l+"px",children:(0,w.jsxs)(c.Kq,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:x.map(((n,t)=>t>s?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:n.map(((n,t)=>(0,w.jsx)(c.xu,{style:{margin:"10px"},children:(0,p.B6)(n)||(0,p.WJ)(n)?(0,w.jsx)(j.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{m(n)}}):(0,w.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{m(n)}})},"event-"+t)))},"event-stack-"+t)))}),(0,w.jsx)(w.Fragment,{children:s<x.length-1?(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(b,{baseFontSize:.1*r,onClick:()=>{s>=x.length-1||h((n=>n+f))}})}):(0,w.jsx)(w.Fragment,{})})]})})}t.default=function(n){var t;const[e,o,s]=(0,h.Z)(),[d]=(0,u.j1)("whatmoreShopId"),[m]=(0,u.j1)("whatmorePrimaryColor"),[p]=(0,u.j1)("whatmoreSecondaryColor"),[j]=(0,u.j1)("whatmoreTitleFont"),C="portrait"==e?(0,u.MO)("whatmoreTitleFontSizePortrait"):(0,u.MO)("whatmoreTitleFontSize"),{whatmoreRootId:b}=(0,i.useContext)(g.I),k=n.events,S=n.onClick,M=null!==(t=(0,x.aRS)(d))&&void 0!==t?t:j;function Z(n){S(n)}return delete a.ZP.styles.global,(0,w.jsx)(l.C,{value:v,children:(0,w.jsx)("div",{className:"whatmore-carousel-events-view-more",children:(0,w.jsx)(r.x,{theme:a.ZP,cssVarsRoot:b,resetCSS:!1,children:(0,w.jsxs)(f.V.Provider,{value:{tileTopMargin:3,tileBottomMMargin:3,tileLeftMargin:3,tileRightMargin:3,showPlayButton:!1},children:[n.heading.trim().length>0?(0,w.jsx)(c.M5,{children:(0,w.jsx)(c.xv,{bgColor:m,bgClip:"text",fontSize:C,sx:{fontFamily:M+" !important"},align:"center",children:n.heading})}):(0,w.jsx)(w.Fragment,{}),"landscape"===e?(0,w.jsx)(F,{events:k,onClick:Z,seeMoreIncrement:1}):(0,w.jsx)(y,{events:k,onClick:Z,seeMoreIncrement:2})]})})})})}},9316:function(n,t,e){e.d(t,{mT:function(){return c}});var i,o,r,a=e(168),l=e(686);const s=(0,l.F4)(i||(i=(0,a.Z)(["\n    0% { transform: scale(1); }\n    50%, { transform: scale(0.95); }\n    100% { transform: scale(1); }\n"]))),c="\n    ".concat(s," 0.2s linear;\n"),d=(0,l.F4)(o||(o=(0,a.Z)(["\n    100% { \n        -webkit-transform: rotate(360deg); \n        transform:rotate(360deg); \n    }\n"]))),h=("\n    ".concat(d," 0.5s infinite linear;\n"),(0,l.F4)(r||(r=(0,a.Z)(["\n    0% { \n        opacity: 1;\n        transform: translateY(100%);\n    }\n    10%{\n        transform: translateY(0%);\n    }\n    12%{\n        transform: translateY(-5%);\n    }\n    20%{\n        transform: translateY(0%);\n    }\n    95%{\n        opacity: 1;\n        transform: scale(1);\n    }\n    100%{\n        opacity: 0;\n    }\n"]))));"\n    ".concat(h," ").concat(3,"s ease-in-out;\n")},2634:function(n,t,e){var i=e(3271),o=e(4897),r=e(499),a=e(6417);t.Z=function(n){var t,e=n.event,l=n.fontSize,s=null!==(t=n.maxWidth)&&void 0!==t?t:"100%",{status:c,bannerText:d,timeToStartInMins:h}=o.Z.getEventStatus(e);return c.name===r.Z.LIVE.name?(0,a.jsx)(i.xu,{maxWidth:s,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:c.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"bold",color:"white",children:d})})}):(0,a.jsx)(i.xu,{maxWidth:s,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:c.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"medium",children:d})})})}},5945:function(n,t,e){e.d(t,{s:function(){return o}});var i=e(7753);function o(n){const t=(0,i.MO)("whatmoreShopId");return"undefined"==typeof n||"undefined"==n||null==n?"":"6873415750"==t||"72442478904"==t?n:n.replace(/\w\S*/g,(function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()}))}},6143:function(){}}]);