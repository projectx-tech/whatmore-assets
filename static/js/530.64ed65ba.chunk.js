"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[530],{8675:function(n,t,e){e.d(t,{Z:function(){return p}});var i=e(3271),o=e(5098),r=e(7313),a=e(9821),l=e(2634),s=e(5180),c=e(686);const d=c.F4`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`,h=c.F4`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`,u=`\n    ${d}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`,m=`\n    ${h}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`;var f=e(7753),x=e(7129),g=e(6417);var p=function(n){var t,e,[c,d]=(0,a.Z)();const[h]=(0,f.j1)("whatmorePrimaryFont");var p=(0,r.useContext)(x.V);const j=n.event,w=n.onClick,v=null===(t=n.isOnFocus)||void 0===t||t,C=(n.playOnUnfocus,null!==(e=n.animateOnFocus)&&void 0!==e&&e);return(0,g.jsxs)(i.xu,{animation:C?v?u:m:"none",marginTop:p.tileTopMargin,marginBottom:p.tileBottomMMargin,marginLeft:p.tileLeftMargin,marginRight:p.tileRightMargin,width:d,height:c,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{w(j)},cursor:"pointer",children:[(0,g.jsx)(o.Ee,{width:"full",height:"full",src:j.thumbnail_image,objectFit:"cover",fallback:(0,g.jsx)(s.Z,{width:d,height:c}),borderRadius:"lg"}),(0,g.jsx)(i.xu,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,g.jsxs)(i.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,g.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,g.jsx)(i.Kq,{direction:"column",justifyContent:"flex-start",children:(0,g.jsx)(i.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,g.jsx)(i.Kq,{direction:"row",justifyContent:"space-between",children:(0,g.jsx)(l.Z,{event:j,fontSize:.05*c+"px",maxWidth:.8*d})})})})}),(0,g.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,g.jsx)(i.Kq,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,g.jsx)(i.xu,{width:"full",borderRadius:"lg",children:(0,g.jsxs)(i.Kq,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,g.jsx)(i.xv,{color:"white",fontSize:.08*d+"px",fontWeight:"normal",align:"left",children:"         "}),(0,g.jsx)(i.xv,{fontSize:.08*d+"px",fontWeight:"normal",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:j.title.substring(0,40)}),(0,g.jsx)(i.xv,{fontSize:.08*d+"px",fontWeight:"bold",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:j.presenter_name.substring(0,15)})]})})})})]})})]})}},5523:function(n,t,e){e.r(t);var i=e(7313),o=e(8675),r=e(6090),a=e(7616),l=(e(6143),e(7244),e(123),e(9302)),s=e(2575),c=e(3271),d=e(9821),h=e(8866),u=e(7753),m=e(9316),f=e(7129),x=e(9854),g=e(8811),p=e(7300),j=e(4920),w=e(6417);const v=(0,s.Z)({key:"whatmore-css-hv"});function C(n,t){var e=[];const i=t;for(let o=0;o<n.length;o+=i){const t=n.slice(o,o+i);e.push(t)}return e}function b(n){var t;const[e,o]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),[l]=(0,u.j1)("whatmoreSecondaryColorShade600"),[s]=(0,u.j1)("whatmoreSecondaryColorShade300"),[d]=(0,u.j1)("whatmorePrimaryFont"),h=null!==(t=n.baseFontSize)&&void 0!==t?t:10,f=n.onClick;return(0,w.jsx)(c.xu,{width:"fit-content",height:"fit-content",paddingY:"4px",boxShadow:"lg",borderRadius:"md",backgroundColor:e?s:l,animation:r?m.mT:null,onClick:n=>{n.stopPropagation(),a(!0),f()},sx:{cursor:"pointer"},onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:(0,w.jsx)(c.Kq,{direction:"row",width:"fit-content",alignContent:"center",children:(0,w.jsxs)(c.xv,{fontSize:h,fontWeight:"normal",sx:{fontFamily:d+" !important",color:"white !important"},children:["\xa0"," view more ","\xa0"]})})})}function y(n){var t;const[e,r,a]=(0,d.Z)();var[l,s]=(0,i.useState)(0);const h=n.events,u=n.onClick,m=null!==(t=n.seeMoreIncrement)&&void 0!==t?t:1,f=C(h,Math.floor(Math.min(a,h.length)));return(0,w.jsx)(c.M5,{children:(0,w.jsxs)(c.Kq,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:f.map(((n,t)=>t>l?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:n.map(((n,t)=>(0,w.jsx)(c.xu,{style:{margin:"10px"},children:(0,p.B6)(n)||(0,p.WJ)(n)?(0,w.jsx)(j.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{u(n)}}):(0,w.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{u(n)}})},"event-"+t)))},"event-stack-"+t)))}),(0,w.jsx)(w.Fragment,{children:l<f.length-1?(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(b,{baseFontSize:.1*r,onClick:()=>{l>=f.length-1||s((n=>n+m))}})}):(0,w.jsx)(w.Fragment,{})})]})})}function F(n){var t;const[e,r,a,l]=(0,d.Z)();var[s,h]=(0,i.useState)(0);const u=n.events,m=n.onClick,f=null!==(t=n.seeMoreIncrement)&&void 0!==t?t:1,x=C(u,Math.floor(Math.min(a,u.length)));return(0,w.jsx)(c.M5,{paddingLeft:l+"px",paddingRight:l+"px",children:(0,w.jsxs)(c.Kq,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:x.map(((n,t)=>t>s?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:n.map(((n,t)=>(0,w.jsx)(c.xu,{style:{margin:"10px"},children:(0,p.B6)(n)||(0,p.WJ)(n)?(0,w.jsx)(j.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{m(n)}}):(0,w.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:n,onClick:()=>{m(n)}})},"event-"+t)))},"event-stack-"+t)))}),(0,w.jsx)(w.Fragment,{children:s<x.length-1?(0,w.jsx)(c.Kq,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(b,{baseFontSize:.1*r,onClick:()=>{s>=x.length-1||h((n=>n+f))}})}):(0,w.jsx)(w.Fragment,{})})]})})}t.default=function(n){var t;const[e,o,s]=(0,h.Z)(),[d]=(0,u.j1)("whatmoreShopId"),[m]=(0,u.j1)("whatmorePrimaryColor"),[p]=(0,u.j1)("whatmoreSecondaryColor"),[j]=(0,u.j1)("whatmoreTitleFont"),C="portrait"==e?(0,u.MO)("whatmoreTitleFontSizePortrait"):(0,u.MO)("whatmoreTitleFontSize"),{whatmoreRootId:b}=(0,i.useContext)(g.I),k=n.events,S=n.onClick,M=null!==(t=(0,x.aRS)(d))&&void 0!==t?t:j;function R(n){S(n)}return delete a.ZP.styles.global,(0,w.jsx)(l.C,{value:v,children:(0,w.jsx)("div",{className:"whatmore-carousel-events-view-more",children:(0,w.jsx)(r.x,{theme:a.ZP,cssVarsRoot:b,resetCSS:!1,children:(0,w.jsxs)(f.V.Provider,{value:{tileTopMargin:3,tileBottomMMargin:3,tileLeftMargin:3,tileRightMargin:3,showPlayButton:!1},children:[n.heading.trim().length>0?(0,w.jsx)(c.M5,{children:(0,w.jsx)(c.xv,{bgColor:m,bgClip:"text",fontSize:C,sx:{fontFamily:M+" !important"},align:"center",children:n.heading})}):(0,w.jsx)(w.Fragment,{}),"landscape"===e?(0,w.jsx)(F,{events:k,onClick:R,seeMoreIncrement:1}):(0,w.jsx)(y,{events:k,onClick:R,seeMoreIncrement:2})]})})})})}},9316:function(n,t,e){e.d(t,{mT:function(){return o}});var i=e(686);const o=`\n    ${i.F4`
    0% { transform: scale(1); }
    50%, { transform: scale(0.95); }
    100% { transform: scale(1); }
`} 0.2s linear;\n`;i.F4`
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    }
`,i.F4`
    0% { 
        opacity: 1;
        transform: translateY(100%);
    }
    10%{
        transform: translateY(0%);
    }
    12%{
        transform: translateY(-5%);
    }
    20%{
        transform: translateY(0%);
    }
    95%{
        opacity: 1;
        transform: scale(1);
    }
    100%{
        opacity: 0;
    }
`},2634:function(n,t,e){var i=e(3271),o=e(4897),r=e(499),a=e(6417);t.Z=function(n){var t,e=n.event,l=n.fontSize,s=null!==(t=n.maxWidth)&&void 0!==t?t:"100%",{status:c,bannerText:d,timeToStartInMins:h}=o.Z.getEventStatus(e);return c.name===r.Z.LIVE.name?(0,a.jsx)(i.xu,{maxWidth:s,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:c.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"bold",color:"white",children:d})})}):(0,a.jsx)(i.xu,{maxWidth:s,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:c.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"medium",children:d})})})}},5945:function(n,t,e){e.d(t,{s:function(){return o}});var i=e(7753);function o(n){const t=(0,i.MO)("whatmoreShopId");return"undefined"==typeof n||"undefined"==n||null==n?"":"6873415750"==t||"72442478904"==t?n:n.replace(/\w\S*/g,(function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()}))}},6143:function(){}}]);