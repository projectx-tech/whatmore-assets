"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[959],{4048:function(e,t,n){n.r(t);var i=n(7313),o=n(6090),r=n(7616),s=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),l=n(2575),a=n(2210),d=n(8486),c=n(9821),h=n(8866),p=n(2279),x=n.n(p),m=n(7753),u=n(7129),f=n(1855),y=n(9854),g=n(4136),w=n(4920),v=n(7376),j=n(778),C=n(6417);const b=(0,l.Z)({key:"whatmore-css-hv"});function P(e){const[t,n,o]=(0,c.Z)(),r=(0,m.MO)("whatmoreShopId"),s=e.events,l=e.onClick,d=o*(0,y.u6)(r),{whatmoreWidgetSourceDetails:h}=(0,i.useContext)(g.I);return(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,C.jsx)(a.tq,{slidesPerView:s.length>1?d:1,initialSlide:s.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!0,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:e=>{(0,v.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:h})},children:s.map((e=>(0,C.jsx)(a.o5,{children:t=>{let{isActive:n,isPrev:i,isNext:o,isVisible:r}=t;return i||o||n?(0,C.jsx)(w.Z,{isOnFocus:n&&r,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{l(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-portrait-"+e.index)))})})})}function I(e){const[t,n,o,r]=(0,c.Z)(),[s,l]=(0,i.useState)(-1),h=e.onClick,p=e.events,m=Math.min(o,p.length),{whatmoreWidgetSourceDetails:u}=(0,i.useContext)(g.I);return(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:r+"px",paddingRight:r+"px"},children:(0,C.jsx)("div",{style:{width:n*m*1.1+"px"},children:(0,C.jsx)(a.tq,{slidesPerView:m,watchSlidesProgress:!0,modules:[d.W_],navigation:!0,slidesPerGroup:parseInt(m),onSlideChange:()=>{(0,v.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:u})},children:p.map(((e,t)=>{const n=x()((()=>l(t)),300);return(0,C.jsx)(a.o5,{onMouseEnter:()=>{n()},onMouseLeave:()=>{n.cancel(),l(-1)},children:n=>{let{isActive:i,isPrev:o,isNext:r,isVisible:l}=n;return l?(0,C.jsx)(w.Z,{isOnFocus:t==s,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>{h(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}t.default=function(e){var t;const[n,l,a]=(0,h.Z)(),[d]=(0,m.j1)("whatmoreShopId"),[c]=(0,m.j1)("whatmorePrimaryColor"),[p]=(0,m.j1)("whatmoreSecondaryColor"),[x]=(0,m.j1)("whatmoreTitleFont"),f="portrait"==n?(0,m.MO)("whatmoreTitleFontSizePortrait"):(0,m.MO)("whatmoreTitleFontSize"),{whatmoreRootId:w}=(0,i.useContext)(g.I),v=e.events,j=e.onClick,S=null!==(t=(0,y.aR)(d))&&void 0!==t?t:x;function F(e){j(e)}return delete r.ZP.styles.global,(0,C.jsx)(s.C,{value:b,children:(0,C.jsx)("div",{children:(0,C.jsx)(o.x,{theme:r.ZP,cssVarsRoot:w,resetCSS:!1,children:(0,C.jsxs)(u.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0?(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",S,"important"),e.style.setProperty("font-size",f+"px","important"))},style:{color:c,backgroundClip:"text",textAlign:"center"},children:e.heading})}):(0,C.jsx)(C.Fragment,{}),"landscape"===n?(0,C.jsx)(I,{events:v,onClick:F}):(0,C.jsx)(P,{events:v,onClick:F})]})})})})}},1092:function(e,t,n){var i=n(237),o=n(9854),r=n(7753),s=n(4136),l=n(7313),a=n(6417);function d(e){return e<1e3?e:e<1e5?(e/1e3).toFixed(0)+"K":(e/1e5).toFixed(0)+"L"}t.Z=function(e){const{whatmoreUITheme:t}=(0,l.useContext)(s.I),n=(0,r.MO)("whatmoreShopId"),c=(0,r.MO)("whatmorePrimaryFont"),h=e.event,p=e.fontSize;if(h.total_views<=0)return(0,a.jsx)(a.Fragment,{});const x=(0,o.S_)(n);return"template-icon"==x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,a.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(i.Z,{sx:{color:(0,o.aL)(n)+" !important",fontSize:p,fontWeight:"normal"}})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aL)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",c,"important"),e.style.setProperty("font-size",p,"important"),e.style.setProperty("min-height","0","important"),e.style.setProperty("display","inline","important"),e.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+d(h.total_views)+" "})})]})})}):"template-text"==x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aL)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",c,"important"))},style:{fontSize:p,fontWeight:"bold"},children:" "+d(h.total_views)+" views"})})})})}):void 0}},7129:function(e,t,n){n.d(t,{V:function(){return i}});const i=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},5945:function(e,t,n){function i(e){return"undefined"==typeof e||"undefined"==e||null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}n.d(t,{s:function(){return i}})},1855:function(e,t,n){var i=n(7313),o=n(9821),r=n(7129),s=n(6417);t.Z=function(e){var[t,n]=(0,o.Z)();return(0,i.useContext)(r.V),e.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:n,height:t,overflow:"hidden"}})}},4920:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(7313),o=n(9821),r=(n(3439),n(9723)),s=n(7753),l=n(4892),a=n(7129),d=n(6805),c=n(9854),h=n(1092),p=n(5945),x=n(4136),m=n(6417);var u=function(e){var[t,n]=(0,o.Z)();const{whatmoreUITheme:r}=(0,i.useContext)(x.I),[l]=(0,s.j1)("whatmorePrimaryFont"),[a]=(0,s.j1)("whatmorePrimaryColor"),[d]=(0,s.j1)("whatmoreSecondaryColor"),[h,u]=(0,i.useState)(0),f=(0,s.MO)("whatmoreShopId"),y=e.event;if(0==y.products.length)return(0,m.jsx)(m.Fragment,{});const g=.3*n,w=g+"px",v=g+"px",j=.07*n+"px";return(0,m.jsx)("div",{style:{width:n+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,m.jsx)("div",{style:{width:w,height:v,boxShadow:"round"==r?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==r?"5px":"0px",borderWidth:(0,c.al)(f),borderColor:(0,c.qP)(f),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,m.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,c.yO)(f),"important")},src:y.products[h].thumbnail_image,style:{width:"100%",height:"100%",borderRadius:"round"==r?"5px":"0px"},alt:"product image"})}),(0,m.jsx)("div",{style:{width:n-5-g+"px",height:v,borderRadius:"round"==r?"5px":"0px",overflow:"visible"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",height:"100%",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color","white","important"),e.style.setProperty("font-size",j,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",l,"important"),e.style.setProperty("-webkit-line-clamp",3,"important"),e.style.setProperty("line-clamp",3,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,p.s)(y.products[h].title)})})})]},h)})},f=n(3933),y=n(8984);function g(e){var t,[n,l]=(0,o.Z)();const[d]=(0,s.j1)("whatmoreShopId"),[h,p,x]=(0,f.YD)({triggerOnce:!0});var g=(0,i.useContext)(a.V);const w=e.event,v=null!==(t=e.unfocusedDisplay)&&void 0!==t&&t,j=.5*l;return(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)("p",{children:"    "})}),g.showPlayButton&&!v?(0,m.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)(r.Z,{sx:{color:"#F5F5F5 !important",opacity:(0,y.KE)()?0:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,m.jsx)(m.Fragment,{}),(0,m.jsx)("div",{ref:h,children:p&&(0,c.PW)(d)?(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)(u,{event:w})}):(0,m.jsx)("div",{height:"20px"})})]})})}function w(e){var[t,n]=(0,o.Z)();const[i]=(0,s.j1)("whatmorePrimaryFont"),r=e.event;return r.title.trim().length?(0,m.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,m.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,m.jsx)("p",{style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,m.jsx)("p",{ref:e=>{e&&e.style.setProperty("font-family",i,"important")},style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,m.jsx)(m.Fragment,{})}function v(e){const[t,n,i,r,l]=(0,o.Z)(),[a]=(0,s.j1)("whatmoreShowViews"),p=(0,s.MO)("whatmoreShopId"),x=e.event,u=e.isOnFocus;return(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===a&&"show"===(0,c.qc)(p)?(0,m.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,m.jsx)(h.Z,{event:x,fontSize:.07*n+"px"})})}):(0,m.jsx)(m.Fragment,{})})}),d.$w===l[d.YP]?(0,m.jsx)(m.Fragment,{}):u?(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,m.jsx)(w,{event:x})}):(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)(w,{event:x})})]})})}var j=function(e){var t,n,r;const[h,p,u,f,y]=(0,o.Z)();var w=(0,i.useContext)(a.V);const{whatmoreUITheme:j}=(0,i.useContext)(x.I),C=(0,s.MO)("whatmoreShopId"),b=e.event,P=e.onClick,I=null===(t=e.isOnFocus)||void 0===t||t,S=null!==(n=e.playOnUnfocus)&&void 0!==n&&n,F=null!==(r=e.animateOnFocus&&(0,c.iW)(C))&&void 0!==r&&r,M=(0,c.nz)(C);return(0,m.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",w.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",w.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:p,height:h,borderRadius:"round"==j?"5px":"0px",boxShadow:"round"==j?M:null,borderWidth:(0,c.al)(C),borderColor:(0,c.qP)(C),overflow:"hidden",cursor:"pointer"},className:F?I?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{P(b)},children:[(0,m.jsx)(l.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:I||S,event:b}),(0,m.jsxs)("div",{style:{width:p,height:h},children:[(0,m.jsx)(v,{event:b,isOnFocus:I}),I||d.$w===y[d.YP]?(0,m.jsx)(g,{event:b,unfocusedDisplay:!I}):null]})]})}},9723:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),s=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.Z=s},237:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),s=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=s},3439:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){}}]);