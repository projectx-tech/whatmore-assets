"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[554],{9085:function(t,e,o){o.r(e),o.d(e,{default:function(){return O}});var n=o(7313),i=(o(3439),o(6090)),r=o(7616),l=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),s=o(2575),a=o(9821),c=o(8866),d=o(2279),p=o.n(d),h=o(7753),u=o(7129),x=o(1855),m=o(9854),y=o(7592),v=o(7376),f=o(778),g=o(4892),w=o(5945),j=o(9219),M=o(6805),P=o(6417);var C=function(t){var e,o,i,r,l,s,c,d,p,x;const[v,f,C,b,S]=(0,a.Z)(),k=(0,h.MO)("whatmoreShopId"),O=S[M.YP],I=(O?1.076*f*(0,m.pE)(k):f*(0,m.H4)(k))+"px",E=(O?1.076*f*(0,m.pE)(k):f*(0,m.H4)(k))+"px",T=(O?.965*f*(0,m.pE)(k):.859*f*(0,m.H4)(k))+"px",F=t.event,N=(0,h.MO)("whatmoreSecondaryColor");var R=(0,n.useContext)(u.V);const W=null===(e=t.isOnFocus)||void 0===e||e,Z=null!==(o=t.playOnUnfocus)&&void 0!==o&&o,z=t.onClick,{whatmoreUITheme:_}=(0,n.useContext)(y.I),D=((0,m.nz)(k),null!==(i=t.animateOnFocus&&(0,m.iW)(k))&&void 0!==i&&i),L=(0,h.MO)("whatmorePrimaryFont"),A=Math.round(+(null===(r=F.products[0])||void 0===r?void 0:r.price)),B=Math.round(+(null===(l=F.products[0])||void 0===l?void 0:l.compare_price)),Y=B&&0!=B&&B>A?Math.ceil((B-A)/B*100):NaN;return(0,P.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",R.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",R.tileBottomMMargin+"px","important"))},className:D&&!O?W?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{margin:"0 auto",cursor:"pointer",width:f},onClick:()=>{z(F)},children:[(0,P.jsx)("div",{style:{borderRadius:"round"==_?"5%":"0px",boxShadow:"round"==_?"0px 0px 5px 0px #B0B0B0":null,height:v,borderWidth:(0,m.al)(k),borderColor:(0,m.qP)(k),overflow:"hidden"},children:(0,P.jsx)(g.Z,{height:"100%",width:"100%",url:F.thumbnail_image,isPlaying:W||Z,event:F})}),(0,P.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"12px 4px",gap:"5px"},children:[(0,P.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-size",I,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",L,"important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},children:(0,w.s)(null===(s=F.products[0])||void 0===s?void 0:s.title)}),(0,P.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,P.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-size",E,"important"),t.style.setProperty("font-family",L,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"bold"},children:(0,j.jx)(parseFloat(null===(c=F.products[0])||void 0===c?void 0:c.price)," ",k,null===(d=F.products[0])||void 0===d?void 0:d.currency)}),!isNaN(B)&&B>A&&(0,P.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#808191","important"),t.style.setProperty("font-size",E,"important"),t.style.setProperty("font-family",L,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,j.jx)(parseFloat(null===(p=F.products[0])||void 0===p?void 0:p.compare_price)," ",k,null===(x=F.products[0])||void 0===x?void 0:x.currency)})]}),!isNaN(Y)&&0!=Y&&(0,P.jsx)("div",{style:{display:"flex",backgroundColor:"#343434"==N?(0,m.ZJ)(k):N,alignItems:"center",borderRadius:"4px",width:"fit-content",padding:"3px 6px"},children:(0,P.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,m.ms)(k),"important"),t.style.setProperty("font-size",T,"important"),t.style.setProperty("font-family",L,"important"))},children:"".concat(Y,"% Off")})})]})]})};const b=(0,s.Z)({key:"whatmore-css-hv"});function S(t){const[e,o,i]=(0,a.Z)(),r=(0,h.MO)("whatmoreShopId"),l=t.events,s=t.onClick,{whatmoreWidgetSourceDetails:c}=(0,n.useContext)(y.I),d=Math.ceil(i),p=2*d,[u,g]=(0,n.useState)(p),[w,j]=(0,n.useState)(2*d),M=0===(0,m.WG)(r)?24:(0,m.WG)(r),[b,S]=(0,n.useState)({touchX:0,touchY:0}),k=t=>{if("next"===t){const t=2;j((t=>Math.min(t+Math.floor(i),l.length+d+1))),g((e=>Math.min(e+t,l.length+d+1)))}else j((t=>Math.max(t-Math.floor(i),p)));(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:c})};return(0,P.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"flex-start",paddingLeft:"12px",overflow:"hidden"},onTouchStart:t=>{S({touchX:t.touches[0].clientX,touchY:t.touches[0].clientY})},onTouchEnd:t=>{var e,o,n,i;const r=(null===(e=t.changedTouches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.clientX)-b.touchX,l=(null===(n=t.changedTouches)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.clientY)-b.touchY;Math.sqrt(r**2+l**2)>10&&Math.abs(r)>Math.abs(l)&&k(r>0?"prev":"next")},children:(0,P.jsx)("div",{style:{display:"flex",gap:M,transform:"translateX(-".concat((w-p)*(o+M),"px)"),transition:"transform 0.4s ease-in-out"},children:l.map(((t,e)=>e<u?(0,P.jsx)("div",{children:(0,P.jsx)(C,{isOnFocus:e<=w-d-1&&e>=Math.max(0,w-p),playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>s(t)})},"whatmore-carousel-tile-".concat(e)):(0,P.jsx)(x.Z,{})))})})}function k(t){const[e,o,i,r]=(0,a.Z)(),[l,s]=(0,n.useState)(-1),c=(0,h.MO)("whatmoreShopId"),[d,u]=(0,n.useState)("next"),x=t.onClick,g=t.events,{whatmoreWidgetSourceDetails:w}=(0,n.useContext)(y.I),j=Math.min(Math.ceil(i),g.length),[M,b]=(0,n.useState)(0),S=0===(0,m.WG)(c)?24:(0,m.WG)(c),k=()=>(0,P.jsx)("div",{children:(0,P.jsx)("button",{onClick:T,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,P.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right"})})}),O=()=>(0,P.jsx)("div",{children:(0,P.jsx)("button",{onClick:E,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,P.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left"})})});(0,n.useEffect)((()=>{M<=j&&b((t=>t+j))}),[j]);const I=()=>{s(-1)},E=()=>{M!==j&&(u("prev"),b((t=>Math.max(Math.ceil(t-i),j))),(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:w}))},T=()=>{M>g.length+i||(u("next"),b((t=>Math.floor(t+i))),(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:w}))},F=M>g.length?g.length-j+1:M-j,N=M>=g.length?g.length:F+j,R=g.slice(F,N);return(0,P.jsxs)("div",{className:"whatmore-events-carousel-landscape",style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"".concat(r,"px"),paddingRight:"".concat(r,"px")},children:[(0,P.jsx)("div",{style:{position:"absolute",left:"0",zIndex:100,top:"50%",transform:"translateX(50%) translateY(-65%)"},children:M!==j&&(0,P.jsx)(O,{})}),(0,P.jsx)("div",{style:{display:"flex",gap:S+"px",width:"".concat(o*i*1.1,"px"),paddingLeft:"8px",overflow:"hidden"},children:R.map(((t,e)=>{const o="whatmore-event-tile-landscape-".concat(t.index).concat(e===j-1?"-last":""),n=e===l;return(0,P.jsx)("div",{className:"whatmore-event-tile-horizontal-swipe-animation-".concat("next"===d?"next":"prev"),onMouseEnter:()=>(t=>{const e=p()((()=>s(t)),300);return e(),e.cancel})(e),onMouseLeave:I,children:(0,P.jsx)(C,{isOnFocus:n,playOnUnfocus:!0,animateOnFocus:!0,event:t,onClick:()=>(t=>{x(t)})(t)})},o)}))}),(0,P.jsx)("div",{style:{position:"absolute",zIndex:100,top:"50%",right:r+"px",transform:"translateY(-65%)"},children:M<=g.length&&(0,P.jsx)(k,{})})]})}var O=function(t){var e;const[o,s,a]=(0,c.Z)(),[d]=(0,h.j1)("whatmoreShopId"),[p]=(0,h.j1)("whatmorePrimaryColor"),[x]=(0,h.j1)("whatmoreSecondaryColor"),[v]=(0,h.j1)("whatmoreTitleFont"),f="portrait"==o?(0,h.MO)("whatmoreTitleFontSizePortrait"):(0,h.MO)("whatmoreTitleFontSize"),{whatmoreRootId:g}=(0,n.useContext)(y.I),w=t.events,j=t.onClick,M=null!==(e=(0,m.aR)(d))&&void 0!==e?e:v;function C(t){j(t)}return delete r.ZP.styles.global,(0,P.jsx)(l.C,{value:b,children:(0,P.jsx)("div",{children:(0,P.jsx)(i.x,{theme:r.ZP,cssVarsRoot:g,resetCSS:!1,children:(0,P.jsxs)(u.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[t.heading.trim().length>0?(0,P.jsx)("div",{className:"whatmore-events-carousel",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,P.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family",M,"important"),t.style.setProperty("font-size",f+"px","important"))},style:{color:p,backgroundClip:"text",textAlign:"center"},children:t.heading})}):(0,P.jsx)(P.Fragment,{}),"landscape"===o?(0,P.jsx)(k,{events:w,onClick:C}):(0,P.jsx)(S,{events:w,onClick:C})]})})})})}},7129:function(t,e,o){o.d(e,{V:function(){return n}});const n=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(t,e,o){var n=o(7313),i=o(9821),r=o(7129),l=o(6417);e.Z=function(t){var[e,o]=(0,i.Z)();return(0,n.useContext)(r.V),t.event,(0,l.jsx)("div",{style:{margin:"0 auto",width:o,height:e,overflow:"hidden"}})}},3439:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);