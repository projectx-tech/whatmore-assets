"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[554],{9085:function(t,e,o){o.r(e),o.d(e,{default:function(){return k}});var n=o(7313),r=(o(3439),o(6090)),i=o(7616),a=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),l=o(2575),s=o(9821),c=o(8866),d=o(2279),p=o.n(d),h=o(7753),u=o(7129),x=o(1855),m=o(9854),y=o(7592),v=o(7376),f=o(778),g=o(4892),w=o(5945),j=o(9219),M=o(6417);var P=function(t){var e,o,r,i,a,l,c,d,p,x;const[v,f,P,C,b,S]=(0,s.Z)(),k=("portrait"==S?.063*f:.055*f)+"px",O=("portrait"==S?.063*f:.055*f)+"px",I=("portrait"==S?.058*f:.047*f)+"px",E=t.event,T=(0,h.MO)("whatmoreShopId"),F=(0,h.MO)("whatmoreSecondaryColor");var N=(0,n.useContext)(u.V);const R=null===(e=t.isOnFocus)||void 0===e||e,W=null!==(o=t.playOnUnfocus)&&void 0!==o&&o,Z=t.onClick,{whatmoreUITheme:z}=(0,n.useContext)(y.I),_=((0,m.nz)(T),null!==(r=t.animateOnFocus&&(0,m.iW)(T))&&void 0!==r&&r),D=(0,h.MO)("whatmorePrimaryFont"),L=Math.round(+(null===(i=E.products[0])||void 0===i?void 0:i.price)),A=Math.round(+(null===(a=E.products[0])||void 0===a?void 0:a.compare_price)),B=A&&0!=A&&A>L?Math.ceil((A-L)/A*100):NaN;return(0,M.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",N.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",N.tileBottomMMargin+"px","important"))},className:_&&"portrait"!==S?R?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{margin:"0 auto",cursor:"pointer",width:f},onClick:()=>{Z(E)},children:[(0,M.jsx)("div",{style:{borderRadius:"round"==z?"5%":"0px",boxShadow:"round"==z?"0px 0px 5px 0px #B0B0B0":null,height:v,borderWidth:(0,m.al)(T),borderColor:(0,m.qP)(T),overflow:"hidden"},children:(0,M.jsx)(g.Z,{height:"100%",width:"100%",url:E.thumbnail_image,isPlaying:R||W,event:E})}),(0,M.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"12px 4px",gap:"4px"},children:[(0,M.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-size",k,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",D,"important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},children:(0,w.s)(null===(l=E.products[0])||void 0===l?void 0:l.title)}),(0,M.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,M.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-size",O,"important"),t.style.setProperty("font-family",D,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"bold"},children:(0,j.jx)(parseFloat(null===(c=E.products[0])||void 0===c?void 0:c.price)," ",T,null===(d=E.products[0])||void 0===d?void 0:d.currency)}),!isNaN(A)&&A>L&&(0,M.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#808191","important"),t.style.setProperty("font-size",O,"important"),t.style.setProperty("font-family",D,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,j.jx)(parseFloat(null===(p=E.products[0])||void 0===p?void 0:p.compare_price)," ",T,null===(x=E.products[0])||void 0===x?void 0:x.currency)})]}),!isNaN(B)&&0!=B&&(0,M.jsx)("div",{style:{display:"flex",backgroundColor:"#343434"==F?(0,m.ZJ)(T):F,alignItems:"center",borderRadius:"4px",width:"fit-content",padding:"3px 6px"},children:(0,M.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,m.ms)(T),"important"),t.style.setProperty("font-size",I,"important"),t.style.setProperty("font-family",D,"important"))},children:"".concat(B,"% Off")})})]})]})};const C=(0,l.Z)({key:"whatmore-css-hv"});function b(t){const[e,o,r]=(0,s.Z)(),i=(0,h.MO)("whatmoreShopId"),a=t.events,l=t.onClick,{whatmoreWidgetSourceDetails:c}=(0,n.useContext)(y.I),d=Math.ceil(r),p=2*d,[u,g]=(0,n.useState)(p),[w,j]=(0,n.useState)(2*d),C=0===(0,m.WG)(i)?24:(0,m.WG)(i),[b,S]=(0,n.useState)({touchX:0,touchY:0}),k=t=>{if("next"===t){const t=2;j((t=>Math.min(t+Math.floor(r),a.length+d+1))),g((e=>Math.min(e+t,a.length+d+1)))}else j((t=>Math.max(t-Math.floor(r),p)));(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:c})};return(0,M.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"flex-start",paddingLeft:"12px",overflow:"hidden"},onTouchStart:t=>{S({touchX:t.touches[0].clientX,touchY:t.touches[0].clientY})},onTouchEnd:t=>{var e,o,n,r;const i=(null===(e=t.changedTouches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.clientX)-b.touchX,a=(null===(n=t.changedTouches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.clientY)-b.touchY;Math.sqrt(i**2+a**2)>10&&Math.abs(i)>Math.abs(a)&&k(i>0?"prev":"next")},children:(0,M.jsx)("div",{style:{display:"flex",gap:C,transform:"translateX(-".concat((w-p)*(o+C),"px)"),transition:"transform 0.4s ease-in-out"},children:a.map(((t,e)=>e<u?(0,M.jsx)("div",{children:(0,M.jsx)(P,{isOnFocus:e<=w-d-1&&e>=Math.max(0,w-p),playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>l(t)})},"whatmore-carousel-tile-".concat(e)):(0,M.jsx)(x.Z,{})))})})}function S(t){const[e,o,r,i]=(0,s.Z)(),[a,l]=(0,n.useState)(-1),c=(0,h.MO)("whatmoreShopId"),[d,u]=(0,n.useState)("next"),x=t.onClick,g=t.events,{whatmoreWidgetSourceDetails:w}=(0,n.useContext)(y.I),j=Math.min(Math.ceil(r),g.length),[C,b]=(0,n.useState)(0),S=0===(0,m.WG)(c)?24:(0,m.WG)(c),k=()=>(0,M.jsx)("div",{children:(0,M.jsx)("button",{onClick:T,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,M.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right"})})}),O=()=>(0,M.jsx)("div",{children:(0,M.jsx)("button",{onClick:E,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,M.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left"})})});(0,n.useEffect)((()=>{C<=j&&b((t=>t+j))}),[j]);const I=()=>{l(-1)},E=()=>{C!==j&&(u("prev"),b((t=>Math.max(Math.ceil(t-r),j))),(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:w}))},T=()=>{C>g.length+r||(u("next"),b((t=>Math.floor(t+r))),(0,v.y4)({userInteractionType:f.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:w}))},F=C>g.length?g.length-j+1:C-j,N=C>=g.length?g.length:F+j,R=g.slice(F,N);return(0,M.jsxs)("div",{className:"whatmore-events-carousel-landscape",style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"".concat(i,"px"),paddingRight:"".concat(i,"px")},children:[(0,M.jsx)("div",{style:{position:"absolute",left:"0",zIndex:100,top:"50%",transform:"translateX(50%) translateY(-65%)"},children:C!==j&&(0,M.jsx)(O,{})}),(0,M.jsx)("div",{style:{display:"flex",gap:S+"px",width:"".concat(o*r*1.1,"px"),paddingLeft:"8px",overflow:"hidden"},children:R.map(((t,e)=>{const o="whatmore-event-tile-landscape-".concat(t.index).concat(e===j-1?"-last":""),n=e===a;return(0,M.jsx)("div",{className:"whatmore-event-tile-horizontal-swipe-animation-".concat("next"===d?"next":"prev"),onMouseEnter:()=>(t=>{const e=p()((()=>l(t)),300);return e(),e.cancel})(e),onMouseLeave:I,children:(0,M.jsx)(P,{isOnFocus:n,playOnUnfocus:!0,animateOnFocus:!0,event:t,onClick:()=>(t=>{x(t)})(t)})},o)}))}),(0,M.jsx)("div",{style:{position:"absolute",zIndex:100,top:"50%",right:i+"px",transform:"translateY(-65%)"},children:C<=g.length&&(0,M.jsx)(k,{})})]})}var k=function(t){var e;const[o,l,s]=(0,c.Z)(),[d]=(0,h.j1)("whatmoreShopId"),[p]=(0,h.j1)("whatmorePrimaryColor"),[x]=(0,h.j1)("whatmoreSecondaryColor"),[v]=(0,h.j1)("whatmoreTitleFont"),f="portrait"==o?(0,h.MO)("whatmoreTitleFontSizePortrait"):(0,h.MO)("whatmoreTitleFontSize"),{whatmoreRootId:g}=(0,n.useContext)(y.I),w=t.events,j=t.onClick,P=null!==(e=(0,m.aR)(d))&&void 0!==e?e:v;function k(t){j(t)}return delete i.ZP.styles.global,(0,M.jsx)(a.C,{value:C,children:(0,M.jsx)("div",{children:(0,M.jsx)(r.x,{theme:i.ZP,cssVarsRoot:g,resetCSS:!1,children:(0,M.jsxs)(u.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[t.heading.trim().length>0?(0,M.jsx)("div",{className:"whatmore-events-carousel",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,M.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family",P,"important"),t.style.setProperty("font-size",f+"px","important"))},style:{color:p,backgroundClip:"text",textAlign:"center"},children:t.heading})}):(0,M.jsx)(M.Fragment,{}),"landscape"===o?(0,M.jsx)(S,{events:w,onClick:k}):(0,M.jsx)(b,{events:w,onClick:k})]})})})})}},7129:function(t,e,o){o.d(e,{V:function(){return n}});const n=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(t,e,o){var n=o(7313),r=o(9821),i=o(7129),a=o(6417);e.Z=function(t){var[e,o]=(0,r.Z)();return(0,n.useContext)(i.V),t.event,(0,a.jsx)("div",{style:{margin:"0 auto",width:o,height:e,overflow:"hidden"}})}},3439:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);