"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[959],{4048:function(e,t,n){n.r(t);var i=n(7313),o=n(6090),r=n(7616),l=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),s=n(2575),a=n(2210),d=n(8486),c=n(9821),p=n(8866),h=n(2279),u=n.n(h),m=n(7753),x=n(7129),f=n(1855),y=n(9854),g=n(9039),w=n(4920),v=n(7376),j=n(778),b=n(7381),C=n(6417);const P=(0,s.Z)({key:"whatmore-css-hv"});function S(e){const[t,n,o]=(0,c.Z)(),r=(0,m.MO)("whatmoreShopId"),l=e.events,s=e.onClick,d=o*(0,y.u6)(r),[p,h]=(0,i.useState)(d),{whatmoreWidgetSourceDetails:u}=(0,i.useContext)(g.I);return(0,i.useEffect)((()=>{p<=d&&h((e=>e+d))}),[d]),(0,C.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,C.jsx)(a.tq,{slidesPerView:l.length>1?d:1,initialSlide:l.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!0,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:e=>{(0,v.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:u}),e.realIndex>e.previousIndex&&h((e=>e+d))},children:l.map(((e,t)=>{const n=(null===e||void 0===e?void 0:e.products.length)>0&&(null===e||void 0===e?void 0:e.products.every((e=>"oos"===(null===e||void 0===e?void 0:e.product_status))));return t<=p&&!n&&(0,C.jsx)(a.o5,{children:t=>{let{isActive:n,isPrev:i,isNext:o,isVisible:r}=t;return i||o||n?(0,C.jsx)(w.Z,{isOnFocus:n&&r,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{s(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-portrait-"+e.index)}))})})})}function I(e){const[t,n,o,r]=(0,c.Z)(),[l,s]=(0,i.useState)(-1),p=(0,m.MO)("whatmoreShopId"),[h,x]=(0,i.useState)(o),b=e.onClick,P=e.events,S=Math.min(o,P.length),{whatmoreWidgetSourceDetails:I}=(0,i.useContext)(g.I);return(0,i.useEffect)((()=>{h<=o&&x((e=>e+o))}),[o]),(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:r+"px",paddingRight:r+"px"},className:"whatmore-events-carousel-landscape",children:(0,C.jsx)("div",{style:{width:n*S*1.1+"px"},children:(0,C.jsx)(a.tq,{slidesPerView:S,watchSlidesProgress:!0,modules:[d.W_],navigation:!0,slidesPerGroup:parseInt(S),onSlideChange:e=>{(0,v.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:I}),e.realIndex>e.previousIndex&&x((e=>e+o))},spaceBetween:(0,y.WG)(p),children:P.map(((e,t)=>{const n=(null===e||void 0===e?void 0:e.products.length)>0&&(null===e||void 0===e?void 0:e.products.every((e=>"oos"===(null===e||void 0===e?void 0:e.product_status)))),i=u()((()=>s(t)),300);return t<=h&&!n&&(0,C.jsx)(a.o5,{onMouseEnter:()=>{i()},onMouseLeave:()=>{i.cancel(),s(-1)},children:n=>{let{isActive:i,isPrev:o,isNext:r,isVisible:s}=n;return s?(0,C.jsx)(w.Z,{isOnFocus:t==l,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>{b(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}t.default=function(e){var t;const[n,s,a]=(0,p.Z)(),[d]=(0,m.j1)("whatmoreShopId"),[c]=(0,m.j1)("whatmorePrimaryColor"),[h]=(0,m.j1)("whatmoreTitleFont"),u="portrait"==n?(0,m.MO)("whatmoreTitleFontSizePortrait"):(0,m.MO)("whatmoreTitleFontSize"),{whatmoreRootId:f}=(0,i.useContext)(g.I),w=e.events,v=e.onClick,j=null!==(t=(0,y.aR)(d))&&void 0!==t?t:h;function F(e){v(e)}return 0==w.length&&g.$.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-a"]')||e.querySelector('.whatmore-template-type[data-wh="template-b"]')||e.querySelector('.whatmore-template-type[data-wh="template-f"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-a"]')||e.querySelector('.whatmore-template-type[data="template-b"]')||e.querySelector('.whatmore-template-type[data="template-f"]')))return;const n=e.querySelector(".whatmore-render-root");n&&(n.style.minHeight="0px")})),(0,i.useEffect)((()=>{(0,b.Oo)("Video shopping powered by Whatmore!")}),[]),delete r.ZP.styles.global,(0,C.jsx)(l.C,{value:P,children:(0,C.jsx)("div",{children:(0,C.jsx)(o.x,{theme:r.ZP,cssVarsRoot:f,resetCSS:!1,children:(0,C.jsxs)(x.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0?(0,C.jsx)("div",{className:"whatmore-events-carousel",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",j,"important"),e.style.setProperty("font-size",u+"px","important"))},style:{color:c,backgroundClip:"text",textAlign:"center",fontWeight:(0,y.wO)(d),lineHeight:(0,y.vY)(d),letterSpacing:(0,y.X2)(d)},children:e.heading})}):(0,C.jsx)(C.Fragment,{}),"landscape"===n?(0,C.jsx)(I,{events:w,onClick:F}):(0,C.jsx)(S,{events:w,onClick:F})]})})})})}},1092:function(e,t,n){var i=n(237),o=n(9854),r=n(7753),l=n(9039),s=n(7313),a=n(6417);function d(e){return e<1e3?e:e<1e5?(e/1e3).toFixed(0)+"K":(e/1e5).toFixed(0)+"L"}t.Z=function(e){const{whatmoreUITheme:t}=(0,s.useContext)(l.I),n=(0,r.MO)("whatmoreShopId"),c=(0,r.MO)("whatmorePrimaryFont"),p=e.event,h=e.fontSize;if(p.total_views<=0)return(0,a.jsx)(a.Fragment,{});const u=(0,o.S_)(n);return"template-icon"==u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,a.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(i.Z,{sx:{color:(0,o.aL)(n)+" !important",fontSize:h,fontWeight:"normal"}})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aL)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",c,"important"),e.style.setProperty("font-size",h,"important"),e.style.setProperty("min-height","0","important"),e.style.setProperty("display","inline","important"),e.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+d(p.total_views)+" "})})]})})}):"template-text"==u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aL)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",c,"important"))},style:{fontSize:h,fontWeight:"bold"},children:" "+d(p.total_views)+" views"})})})})}):void 0}},7129:function(e,t,n){n.d(t,{V:function(){return i}});const i=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},5945:function(e,t,n){function i(e){return"undefined"==typeof e||"undefined"==e||null==e?"":e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}n.d(t,{s:function(){return i}})},1855:function(e,t,n){var i=n(7313),o=n(9821),r=n(7129),l=n(6417);t.Z=function(e){var[t,n]=(0,o.Z)();return(0,i.useContext)(r.V),e.event,(0,l.jsx)("div",{style:{margin:"0 auto",width:n,height:t,overflow:"hidden"}})}},4920:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(7313),o=n(9821),r=(n(3439),n(9723)),l=n(7753),s=n(4892),a=n(7129),d=n(6805),c=n(9854),p=n(1092),h=n(5945),u=n(9039),m=n(6417);var x=function(e){var[t,n]=(0,o.Z)();const{whatmoreUITheme:r}=(0,i.useContext)(u.I),[s]=(0,l.j1)("whatmorePrimaryFont"),[a,d]=(0,i.useState)(0),p=(0,l.MO)("whatmoreShopId"),x=e.event;if(0==x.products.length)return(0,m.jsx)(m.Fragment,{});const f=.3*n,y=f+"px",g=f+"px",w=.07*n+"px";return(0,m.jsx)("div",{style:{width:n+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,m.jsx)("div",{style:{width:y,height:g,boxShadow:"round"==r?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==r?"5px":"0px",borderWidth:(0,c.al)(p),borderColor:(0,c.qP)(p),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,m.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,c.yO)(p),"important")},src:x.products[a].thumbnail_image,style:{width:"100%",height:"100%",borderRadius:"round"==r?"5px":"0px"},alt:"product image"})}),(0,m.jsx)("div",{style:{width:n-5-f+"px",height:g,borderRadius:"round"==r?"5px":"0px",overflow:"visible"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",height:"100%",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color","white","important"),e.style.setProperty("font-size",w,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",s,"important"),e.style.setProperty("-webkit-line-clamp",3,"important"),e.style.setProperty("line-clamp",3,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,h.s)(x.products[a].title)})})})]},a)})},f=n(3933),y=n(8984);function g(e){var t,[n,s]=(0,o.Z)();const[d]=(0,l.j1)("whatmoreShopId"),[p,h,u]=(0,f.YD)({triggerOnce:!0});var g=(0,i.useContext)(a.V);const w=e.event,v=null!==(t=e.unfocusedDisplay)&&void 0!==t&&t,j=.5*s,b=(0,y.gE)()?e.isOnFocus:h;return(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)("p",{children:"    "})}),g.showPlayButton&&!v?(0,m.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:"video"==w.event_type&&(0,m.jsx)(r.Z,{sx:{color:(0,c.Y)(d)+" !important",opacity:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,m.jsx)(m.Fragment,{}),(0,m.jsx)("div",{ref:p,children:b&&(0,c.PW)(d)?(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)(x,{event:w})}):(0,m.jsx)("div",{height:"20px"})})]})})}function w(e){var[t,n]=(0,o.Z)();const[i]=(0,l.j1)("whatmorePrimaryFont"),r=e.event;return r.title.trim().length?(0,m.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,m.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,m.jsx)("p",{style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,m.jsx)("p",{ref:e=>{e&&e.style.setProperty("font-family",i,"important")},style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,m.jsx)(m.Fragment,{})}function v(e){const[t,n,i,r,s]=(0,o.Z)(),[a]=(0,l.j1)("whatmoreShowViews"),h=(0,l.MO)("whatmoreShopId"),u=e.event,x=e.isOnFocus;return(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===a&&"show"===(0,c.qc)(h)?(0,m.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,m.jsx)(p.Z,{event:u,fontSize:.07*n+"px"})})}):(0,m.jsx)(m.Fragment,{})})}),d.$w===s[d.YP]?(0,m.jsx)(m.Fragment,{}):x?(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,m.jsx)(w,{event:u})}):(0,m.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,m.jsx)(w,{event:u})})]})})}var j=function(e){var t,n,r;const[p,h,x,f,y]=(0,o.Z)();var w=(0,i.useContext)(a.V);const{whatmoreUITheme:j}=(0,i.useContext)(u.I),b=(0,l.MO)("whatmoreShopId"),C=e.event,P=e.onClick,S=null===(t=e.isOnFocus)||void 0===t||t,I=null!==(n=e.playOnUnfocus)&&void 0!==n&&n,F=null!==(r=e.animateOnFocus&&(0,c.iW)(b))&&void 0!==r&&r,M=(0,c.nz)(b);return(0,m.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",w.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",w.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:h,height:p,borderRadius:"round"==j?"5px":"0px",boxShadow:"round"==j?M:null,borderWidth:(0,c.al)(b),borderColor:(0,c.qP)(b),overflow:"hidden",cursor:"pointer"},className:F?S?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{P(C)},children:[(0,m.jsx)(s.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:S||I,event:C}),(0,m.jsxs)("div",{style:{width:h,height:p},children:[(0,m.jsx)(v,{event:C,isOnFocus:S}),S||d.$w===y[d.YP]?(0,m.jsx)(g,{event:C,unfocusedDisplay:!S,isOnFocus:S}):null]})]})}},9723:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.Z=l},237:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=l},3439:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){}}]);