"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[422],{7158:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var i=n(7313),o=n(4664),r=n(7616),l=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),s=n(2575),a=n(2210),d=n(8486),c=n(9821),h=n(8866),x=n(2279),p=n.n(x),m=n(9543),f=n(7129),g=n(6417);var u=function(e){var[t,n]=(0,c.Z)(),o=(0,i.useContext)(f.V);return e.event,(0,g.jsx)("div",{style:{marginTop:o.tileTopMargin,marginBottom:o.tileBottomMMargin,marginLeft:o.tileLeftMargin,marginRight:o.tileRightMargin,width:n,height:t,overflow:"hidden"}})},v=n(9854),w=n(6966),y=n(9723),j=n(4892),b=n(6805),C=n(237);function F(e){return e<1e3?e:e<1e5?(e/1e3).toFixed(0)+"K":(e/1e5).toFixed(0)+"L"}var P=function(e){const t=(0,m.MO)("whatmoreShopId"),n=(0,m.MO)("whatmoreUITheme"),i=(0,m.MO)("whatmorePrimaryFont"),o=e.event,r=e.fontSize;if(o.total_views<=0)return(0,g.jsx)(g.Fragment,{});const l=(0,v.S_)(t);return"template-icon"==l?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,v.XC)(t),color:"white",borderRadius:"round"==n?"5px":"0px",borderWidth:(0,v.al)(t),borderColor:(0,v.qP)(t)},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)(C.Z,{sx:{color:(0,v.aL)(t)+" !important",fontSize:r,fontWeight:"normal"}})}),(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,v.aL)(t),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",i,"important"))},style:{fontSize:r,fontWeight:"normal"},children:" "+F(o.total_views)+" "})})]})})}):"template-text"==l?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,v.XC)(t),color:"white",borderRadius:"round"==n?"5px":"0px",borderWidth:(0,v.al)(t),borderColor:(0,v.qP)(t)},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,v.aL)(t),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",i,"important"))},style:{fontSize:r,fontWeight:"bold"},children:" "+F(o.total_views)+" views"})})})})}):void 0},I=n(5945);var M=function(e){var[t,n]=(0,c.Z)();const[o]=(0,m.j1)("whatmorePrimaryFont"),[r]=(0,m.j1)("whatmorePrimaryColor"),[l]=(0,m.j1)("whatmoreSecondaryColor"),[s,a]=(0,i.useState)(0),d=(0,m.MO)("whatmoreShopId"),h=(0,m.MO)("whatmoreUITheme"),x=e.event,p=x.products.length;if(0==p)return(0,g.jsx)(g.Fragment,{});(0,i.useEffect)((()=>{const e=setInterval((()=>{a((e=>(e+1)%p))}),3e3);return()=>{clearInterval(e)}}),[]);const f=.3*n,u=f+"px",w=f+"px",y=.07*n+"px";return(0,g.jsx)("div",{style:{width:n+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,g.jsx)("div",{style:{width:u,height:w,boxShadow:"round"==h?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==h?"5px":"0px",borderWidth:(0,v.al)(d),borderColor:(0,v.qP)(d),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,g.jsx)("img",{src:x.products[s].thumbnail_image,style:{objectFit:"cover",width:"100%",height:"100%",borderRadius:"round"==h?"5px":"0px"},alt:"product image"})}),(0,g.jsx)("div",{style:{width:n-5-f+"px",height:w,borderRadius:"round"==h?"5px":"0px",overflow:"visible"},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",height:"100%",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("p",{ref:e=>{e&&e.style.setProperty("color","white","important")},style:{fontFamily:o,fontSize:y,textAlign:"left",fontWeight:"normal",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis",lineHeight:"120%"},children:(0,I.s)(x.products[s].title)})})})]},s)})},S=n(3933);function k(e){var t,[n,o]=(0,c.Z)();const[r]=(0,m.j1)("whatmoreShopId"),[l,s,a]=(0,S.YD)({triggerOnce:!0});var d=(0,i.useContext)(f.V);const h=e.event,x=null!==(t=e.unfocusedDisplay)&&void 0!==t&&t,p=.5*o;return(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-fixes",children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,g.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,g.jsx)("p",{children:"    "})}),d.showPlayButton&&!x?(0,g.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,g.jsx)(y.Z,{sx:{color:"#F5F5F5 !important",opacity:.8,fontSize:p,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,g.jsx)(g.Fragment,{}),(0,g.jsx)("div",{ref:l,children:s&&(0,v.PW)(r)?(0,g.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,g.jsx)(M,{event:h})}):(0,g.jsx)("div",{height:"20px"})})]})})}function R(e){var[t,n]=(0,c.Z)();const[i]=(0,m.j1)("whatmorePrimaryFont"),o=e.event;return o.title.trim().length?(0,g.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,g.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,g.jsx)("p",{style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,g.jsx)("p",{ref:e=>{e&&e.style.setProperty("font-family",i,"important")},style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:o.title.substring(0,60)})]})})})}):(0,g.jsx)(g.Fragment,{})}function L(e){const[t,n,i,o,r]=(0,c.Z)(),[l]=(0,m.j1)("whatmoreShowViews"),s=e.event,a=e.isOnFocus;return(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-fixes",children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,g.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===l?(0,g.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,g.jsx)(P,{event:s,fontSize:.07*n+"px"})})}):(0,g.jsx)(g.Fragment,{})})}),b.$w===r[b.YP]?(0,g.jsx)(g.Fragment,{}):a?(0,g.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,g.jsx)(R,{event:s})}):(0,g.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,g.jsx)(R,{event:s})})]})})}var O=function(e){var t,n,o;const[r,l,s,a,d]=(0,c.Z)();var h=(0,i.useContext)(f.V);const x=(0,m.MO)("whatmoreShopId"),p=(0,m.MO)("whatmoreUITheme"),u=e.event,w=e.onClick,y=null===(t=e.isOnFocus)||void 0===t||t,C=null!==(n=e.playOnUnfocus)&&void 0!==n&&n,F=null!==(o=e.animateOnFocus)&&void 0!==o&&o;return(0,g.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",h.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",h.tileBottomMMargin+"px","important"))},style:{marginLeft:h.tileLeftMargin+"px",marginRight:h.tileRightMargin+"px",width:l,height:r,borderRadius:"round"==p?"5px":"0px",boxShadow:"round"==p?"0px 0px 10px 3px #B0B0B0":null,borderWidth:(0,v.al)(x),borderColor:(0,v.qP)(x),overflow:"hidden",cursor:"pointer"},className:F?y?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{w(u)},children:[(0,g.jsx)(j.Z,{height:"100%",width:"100%",url:u.thumbnail_image,isPlaying:y||C,event:u}),(0,g.jsxs)("div",{style:{width:l,height:r},children:[(0,g.jsx)(L,{event:u,isOnFocus:y}),y||b.$w===d[b.YP]?(0,g.jsx)(k,{event:u,unfocusedDisplay:!y}):null]})]})};const Z=(0,s.Z)({key:"whatmore-css-hv"});function z(e){const[t,n,i]=(0,c.Z)(),o=e.events,r=e.onClick;return(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,g.jsx)(a.tq,{slidesPerView:i,initialSlide:o.length>1?1:0,centeredSlides:!0,watchSlidesProgress:!0,touchRatio:.1,children:o.map((e=>(0,g.jsx)(a.o5,{children:t=>{let{isActive:n,isPrev:i,isNext:o,isVisible:l}=t;return i||o||n?(0,g.jsx)(O,{isOnFocus:n&&l,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{r(e)}}):(0,g.jsx)(u,{})}},"whatmore-event-tile-portrait-"+e.index)))})})})}function B(e){const[t,n,o,r]=(0,c.Z)(),[l,s]=(0,i.useState)((h=o,Math.floor(Math.random()*Math.floor(h))));var h;const x=e.onClick,m=e.events,f=Math.min(o,m.length);return(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:r+"px",paddingRight:r+"px"},children:(0,g.jsx)("div",{style:{width:n*f*1.1+"px"},children:(0,g.jsx)(a.tq,{slidesPerView:f,watchSlidesProgress:!0,modules:[d.W_],navigation:!0,slidesPerGroup:parseInt(f),children:m.map(((e,t)=>{const n=p()((()=>s(t)),300);return(0,g.jsx)(a.o5,{onMouseEnter:()=>{n()},onMouseLeave:()=>{n.cancel()},children:n=>{let{isActive:i,isPrev:o,isNext:r,isVisible:s}=n;return s?(0,g.jsx)(O,{isOnFocus:t==l,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>{x(e)}}):(0,g.jsx)(u,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}var W=function(e){var t;const[n,s,a]=(0,h.Z)(),[d]=(0,m.j1)("whatmoreShopId"),[c]=(0,m.j1)("whatmorePrimaryColor"),[x]=(0,m.j1)("whatmoreSecondaryColor"),[p]=(0,m.j1)("whatmoreTitleFont"),[u]=(0,m.j1)("whatmoreTitleFontSize"),{whatmoreRootId:y}=(0,i.useContext)(w.I),j=e.events,b=e.onClick,C=null!==(t=(0,v.aR)(d))&&void 0!==t?t:p;function F(e){b(e)}return delete r.ZP.styles.global,(0,g.jsx)(l.C,{value:Z,children:(0,g.jsx)("div",{children:(0,g.jsx)(o.x,{theme:r.ZP,cssVarsRoot:y,resetCSS:!1,children:(0,g.jsxs)(f.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0?(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,g.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",C,"important"),e.style.setProperty("font-size",u+"px","important"))},style:{color:c,backgroundClip:"text",textAlign:"center"},children:e.heading})}):(0,g.jsx)(g.Fragment,{}),"landscape"===n?(0,g.jsx)(B,{events:j,onClick:F}):(0,g.jsx)(z,{events:j,onClick:F})]})})})})}},5945:function(e,t,n){function i(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}n.d(t,{s:function(){return i}})},9723:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.Z=l},237:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=l},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);