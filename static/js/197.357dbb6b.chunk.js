"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[197],{1492:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var i=n(7313),o=n(6090),r=n(7616),s=n(9039),l=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),a=n(2575),d=n(2210),p=n(8486),c=n(9821),h=n(8866),m=n(2279),x=n.n(m),u=n(7753),y=n(7129),f=n(1855),g=n(9854),v=n(4920),w=n(7376),j=n(778),P=n(7381),b=(n(3439),n(4892)),C=n(6805),I=n(9219),S=n(5945),F=n(6417);var O=function(e){var t,n,o,r,l,a,d,p,h,m;const[x,f,v,w,j]=(0,c.Z)();var P=(0,i.useContext)(y.V);const{whatmoreUITheme:O}=(0,i.useContext)(s.I),M=(0,u.MO)("whatmoreShopId"),k=(0,u.MO)("whatmorePrimaryFont"),Z=(0,u.MO)("whatmoreSecondaryColor"),z=e.event,W=e.onClick,R=null===(t=e.isOnFocus)||void 0===t||t,N=null!==(n=e.playOnUnfocus)&&void 0!==n&&n,U=null!==(o=e.animateOnFocus&&(0,g.iWI)(M))&&void 0!==o&&o,E=Math.round(+(null===(r=z.products[0])||void 0===r?void 0:r.price)),T=Math.round(+(null===(l=z.products[0])||void 0===l?void 0:l.compare_price)),_=T&&0!=T&&T>E?Math.round((T-E)/T*100):NaN,L="portrait"===j[C.YP],V=(L?1.076*f*(0,g.pEd)(M):f*(0,g.H4g)(M))+"px",D=(L?1.076*f*(0,g.pEd)(M):f*(0,g.H4g)(M))+"px",B=(L?.965*f*(0,g.pEd)(M):.859*f*(0,g.H4g)(M))+"px",A=(0,g.nzC)(M),{whatmoreIsPreviewMode:H}=(0,i.useContext)(s.I),q=.25*f,$=q+"px",Y=1.1*q+"px";return(0,F.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",P.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",P.tileBottomMMargin+"px","important"))},children:[(0,F.jsx)("div",{style:{margin:"0 auto",width:f,height:L&&R?1.1*x:x,borderRadius:"round"==O?"5px":"0px",boxShadow:"round"==O?A:null,borderWidth:(0,g.alU)(M),borderColor:(0,g.qPe)(M),overflow:"hidden",cursor:"pointer"},className:U?R?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{W(z)},children:(0,F.jsx)(b.Z,{height:"100%",width:"100%",url:z.thumbnail_image,isPlaying:R||N,event:z})}),(0,F.jsxs)("div",{onClick:()=>{W(z)},style:{cursor:"pointer",display:"flex",gap:"6px",padding:"14px 8px"},children:[(H?(0,g.uU$)(M):(0,g.EIj)(M))&&(0,F.jsx)("div",{ref:e=>{e&&e.style.setProperty("height",Y,"important")},style:{maxWidth:$,borderRadius:"round"==O?"5px":"0px",overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,F.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,g.yOX)(M),"important")},src:z.products[0].thumbnail_image})}),(0,F.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-size",V,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",k,"important"),e.style.setProperty("-webkit-line-clamp",1,"important"),e.style.setProperty("line-clamp",1,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},children:(0,S.s)(null===(a=z.products[0])||void 0===a?void 0:a.title)}),(0,g.QaY)(M)&&(0,F.jsxs)("div",{style:{display:"flex",gap:"12px",flexDirection:(0,g.$zZ)(M)?"row":"row-reverse",justifyContent:(0,g.$zZ)(M)?"flex-start":"flex-end"},children:[(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,g.Uyp)(M),"important"),e.style.setProperty("font-size",D,"important"),e.style.setProperty("font-family",k,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"normal"==(0,g.rPP)(M)?"normal":"bold"},children:(0,I.jx)(parseFloat(null===(d=z.products[0])||void 0===d?void 0:d.price)," ",M,null===(p=z.products[0])||void 0===p?void 0:p.currency)}),!isNaN(T)&&T>E&&(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,g.kPs)(M),"important"),e.style.setProperty("font-size",D,"important"),e.style.setProperty("font-family",k,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,I.jx)(parseFloat(null===(h=z.products[0])||void 0===h?void 0:h.compare_price)," ",M,null===(m=z.products[0])||void 0===m?void 0:m.currency)})]}),(0,g.QaY)(M)&&!isNaN(_)&&0!=_&&(0,F.jsx)("div",{style:{display:"flex",backgroundColor:"green"==(0,g.ZJm)(M)?"#343434"==Z?(0,g.ZJm)(M):Z:(0,g.ZJm)(M),alignItems:"center",borderRadius:"84084818211"==M?"4rem":"4px",width:"fit-content",padding:(0,g.Spx)(M)?"3px 6px":"0px"},children:(0,g.Spx)(M)?(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,g.mso)(M),"important"),e.style.setProperty("font-size",B,"important"),e.style.setProperty("font-family",k,"important"))},children:"".concat(_,"% Off")}):(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,g.aUT)(M),"important"),e.style.setProperty("font-size",B,"important"),e.style.setProperty("font-family",(0,g.V3Y)(M),"important"))},children:(0,g.sG7)(M)})})]})]})]})};const M=(0,a.Z)({key:"whatmore-css-hv"});function k(e){const[t,n,o]=(0,c.Z)(),r=(0,u.MO)("whatmoreShopId"),l=e.events,a=e.onClick,p=o*(0,g.u6l)(r),[h,m]=(0,i.useState)(p),{whatmoreWidgetSourceDetails:x}=(0,i.useContext)(s.I);return(0,i.useEffect)((()=>{h<=p&&m((e=>e+p))}),[p]),(0,F.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,F.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,F.jsx)(d.tq,{slidesPerView:l.length>1?p:1,initialSlide:l.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!1,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:e=>{(0,w.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:x}),e.realIndex>e.previousIndex&&m((e=>e+p))},children:l.map(((e,t)=>t<=h&&(0,F.jsx)(d.o5,{children:t=>{let{isActive:n,isPrev:i,isNext:o,isVisible:s}=t;return i||o||n?(0,g.$X$)(r)?(0,F.jsx)(O,{isOnFocus:n&&s,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{a(e)}}):(0,F.jsx)(v.Z,{isOnFocus:n&&s,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{a(e)}}):(0,F.jsx)(f.Z,{})}},"whatmore-event-tile-portrait-"+e.index)))})})})}function Z(e){const[t,n,o,r]=(0,c.Z)(),[l,a]=(0,i.useState)(-1),h=(0,u.MO)("whatmoreShopId"),[m,y]=(0,i.useState)(o),P=e.onClick,b=e.events,C=Math.min(o,b.length),{whatmoreWidgetSourceDetails:I}=(0,i.useContext)(s.I);return(0,i.useEffect)((()=>{m<=o&&y((e=>e+o))}),[o]),(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:r+"px",paddingRight:r+"px"},className:"whatmore-events-carousel-landscape",children:(0,F.jsx)("div",{style:{width:n*C*(0,g.Su5)(h)+"px"},children:(0,F.jsx)(d.tq,{slidesPerView:C,watchSlidesProgress:!0,modules:[p.W_],navigation:!0,slidesPerGroup:parseInt(C),onSlideChange:e=>{(0,w.y4)({userInteractionType:j.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:I}),e.realIndex>e.previousIndex&&y((e=>e+o))},spaceBetween:(0,g.WGf)(h),children:b.map(((e,t)=>{const n=x()((()=>a(t)),300);return t<=m&&(0,F.jsx)(d.o5,{onMouseEnter:()=>{n()},onMouseLeave:()=>{n.cancel(),a(-1)},children:n=>{let{isActive:i,isPrev:o,isNext:r,isVisible:s}=n;return s?(0,g.$X$)(h)?(0,F.jsx)(O,{isOnFocus:t==l,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>{P(e)}}):(0,F.jsx)(v.Z,{isOnFocus:t==l,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>{P(e)}}):(0,F.jsx)(f.Z,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}var z=function(e){var t;const[n,a,d]=(0,h.Z)(),[p]=(0,u.j1)("whatmoreShopId"),[c]=(0,u.j1)("whatmorePrimaryColor"),[m]=(0,u.j1)("whatmoreTitleFont"),x="portrait"==n?(0,u.MO)("whatmoreTitleFontSizePortrait"):(0,u.MO)("whatmoreTitleFontSize"),{whatmoreRootId:f}=(0,i.useContext)(s.I),v=((0,u.MO)("isInDesignMode"),(0,u.MO)("whatmoreCollectionHeading")),{whatmoreIsCollectionsTemplate:w}=(0,i.useContext)(s.I),j=e.events,b=e.onClick,C=null!==(t=(0,g.aRS)(p))&&void 0!==t?t:m;function I(e){b(e)}return(0,i.useEffect)((()=>{(0,P.Oo)("Video shopping powered by Whatmore!")}),[]),(0,i.useEffect)((()=>{s.$.forEach((e=>{var t;const n=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-a"]');if(!n)return;n&&e&&(e.style.minHeight="0px")}))}),[]),delete r.ZP.styles.global,(0,F.jsx)(l.C,{value:M,children:(0,F.jsx)("div",{children:(0,F.jsx)(o.x,{theme:r.ZP,cssVarsRoot:f,resetCSS:!1,children:(0,F.jsxs)(y.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0||w?(0,F.jsx)("div",{className:"whatmore-events-carousel",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,F.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",C,"important"),e.style.setProperty("font-size",x+"px","important"))},style:{color:c,backgroundClip:"text",textAlign:"center",fontWeight:(0,g.wOV)(p),lineHeight:(0,g.vY4)(p),letterSpacing:(0,g.X2K)(p)},children:w?"W"!==v?v:"":e.heading})}):(0,F.jsx)(F.Fragment,{}),"landscape"===n?(0,F.jsx)(Z,{events:j,onClick:I}):(0,F.jsx)(k,{events:j,onClick:I})]})})})})}},1092:function(e,t,n){var i=n(237),o=n(9854),r=n(7753),s=n(9039),l=n(7313),a=n(6417);function d(e){return e<1e3?e:e<1e5?(e/1e3).toFixed(0)+"K":(e/1e5).toFixed(0)+"L"}t.Z=function(e){const{whatmoreUITheme:t}=(0,l.useContext)(s.I),n=(0,r.MO)("whatmoreShopId"),p=(0,r.MO)("whatmorePrimaryFont"),c=e.event,h=e.fontSize;if(c.total_views<=0)return(0,a.jsx)(a.Fragment,{});const m=(0,o.S_M)(n);return"template-icon"==m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.alU)(n),borderColor:(0,o.qPe)(n)},children:(0,a.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(i.Z,{sx:{color:(0,o.aLw)(n)+" !important",fontSize:h,fontWeight:"normal"}})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aLw)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",p,"important"),e.style.setProperty("font-size",h,"important"),e.style.setProperty("min-height","0","important"),e.style.setProperty("display","inline","important"),e.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+d(c.total_views)+" "})})]})})}):"template-text"==m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(n),color:"white",borderRadius:"round"==t?"5px":"0px",borderWidth:(0,o.alU)(n),borderColor:(0,o.qPe)(n)},children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,o.aLw)(n),"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",p,"important"))},style:{fontSize:h,fontWeight:"bold"},children:" "+d(c.total_views)+" views"})})})})}):void 0}},7129:function(e,t,n){n.d(t,{V:function(){return i}});const i=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(e,t,n){var i=n(7313),o=n(9821),r=n(7129),s=n(6417);t.Z=function(e){var[t,n]=(0,o.Z)();return(0,i.useContext)(r.V),e.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:n,height:t,overflow:"hidden"}})}},4920:function(e,t,n){n.d(t,{Z:function(){return P}});var i=n(7313),o=n(9821),r=(n(3439),n(9723)),s=n(7753),l=n(4892),a=n(7129),d=n(6805),p=n(9854),c=n(1092),h=n(5945),m=n(9039),x=n(9363),u=n(6417);var y=function(e){var[t,n]=(0,o.Z)();const{whatmoreUITheme:r}=(0,i.useContext)(m.I),[l]=(0,s.j1)("whatmorePrimaryFont"),[a,d]=(0,i.useState)(0),c=(0,s.MO)("whatmoreShopId"),y=e.event;if(0==y.products.length)return(0,u.jsx)(u.Fragment,{});const f=.3*n,g=f+"px",v=f+"px",w=.07*n+"px";return(0,u.jsx)("div",{style:{width:n+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,u.jsxs)("div",{ref:e=>{e&&e.style.setProperty("height","fit-content","important")},style:{display:"flex",flexFlow:"row nowrap",width:"100%",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,u.jsx)("div",{ref:e=>{e&&e.style.setProperty("height",v,"important")},style:{width:(0,p.uNj)(c)?g:"auto",boxShadow:"round"==r?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==r?"5px":"0px",borderWidth:(0,p.alU)(c),borderColor:(0,p.qPe)(c),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,u.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,p.yOX)(c),"important")},src:(0,x.s)(y.products[a].thumbnail_image,"&width=".concat(400,"&height=",400)),style:{width:"100%",height:"100%",maxWidth:g,borderRadius:"round"==r?"5px":"0px"},alt:"product image"})}),(0,u.jsx)("div",{style:{width:n-5-f+"px",height:v,borderRadius:"round"==r?"5px":"0px",overflow:"visible"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",height:"100%",justifyContent:"center",alignItems:"center"},children:(0,u.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color","white","important"),e.style.setProperty("font-size",w,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",l,"important"),e.style.setProperty("-webkit-line-clamp",3,"important"),e.style.setProperty("line-clamp",3,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,h.s)(y.products[a].title)})})})]},a)})},f=n(3933),g=n(8984);function v(e){var t,[n,l]=(0,o.Z)();const[d]=(0,s.j1)("whatmoreShopId"),[c,h,m]=(0,f.YD)({triggerOnce:!0});var x=(0,i.useContext)(a.V);const v=e.event,w=null!==(t=e.unfocusedDisplay)&&void 0!==t&&t,j=.5*l,P=(0,g.gE)()?e.isOnFocus:h;return(0,u.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,u.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,u.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,u.jsx)("p",{children:"    "})}),x.showPlayButton&&!w?(0,u.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,u.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:"video"==v.event_type&&(0,u.jsx)(r.Z,{sx:{color:(0,p.Ya_)(d)+" !important",opacity:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,u.jsx)(u.Fragment,{}),(0,u.jsx)("div",{ref:c,children:P&&(0,p.PWD)(d)?(0,u.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,u.jsx)(y,{event:v})}):(0,u.jsx)("div",{height:"20px"})})]})})}function w(e){var[t,n]=(0,o.Z)();const[i]=(0,s.j1)("whatmorePrimaryFont"),r=e.event;return r.title.trim().length?(0,u.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,u.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,u.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,u.jsx)("p",{style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,u.jsx)("p",{ref:e=>{e&&e.style.setProperty("font-family",i,"important")},style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,u.jsx)(u.Fragment,{})}function j(e){const[t,n,i,r,l]=(0,o.Z)(),[a]=(0,s.j1)("whatmoreShowViews"),h=(0,s.MO)("whatmoreShopId"),m=e.event,x=e.isOnFocus;return(0,u.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,u.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,u.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===a&&"show"===(0,p.qcC)(h)?(0,u.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,u.jsx)(c.Z,{event:m,fontSize:.07*n+"px"})})}):(0,u.jsx)(u.Fragment,{})})}),d.$w===l[d.YP]?(0,u.jsx)(u.Fragment,{}):x?(0,u.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,u.jsx)(w,{event:m})}):(0,u.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,u.jsx)(w,{event:m})})]})})}var P=function(e){var t,n,r;const[c,h,x,y,f]=(0,o.Z)();var g=(0,i.useContext)(a.V);const{whatmoreUITheme:w}=(0,i.useContext)(m.I),P=(0,s.MO)("whatmoreShopId"),b=e.event,C=e.onClick,I=null===(t=e.isOnFocus)||void 0===t||t,S=null!==(n=e.playOnUnfocus)&&void 0!==n&&n,F=null!==(r=e.animateOnFocus&&(0,p.iWI)(P))&&void 0!==r&&r,O=(0,p.nzC)(P);return(0,u.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",g.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",g.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:h,height:c,borderRadius:"round"==w?"5px":"0px",boxShadow:"round"==w?O:null,borderWidth:(0,p.alU)(P),borderColor:(0,p.qPe)(P),overflow:"hidden",cursor:"pointer"},className:F?I?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{C(b)},children:[(0,u.jsx)(l.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:I||S,event:b}),(0,u.jsxs)("div",{style:{width:h,height:c},children:[(0,u.jsx)(j,{event:b,isOnFocus:I}),"87043703105"===P||"76467011883"===P||!I&&d.$w!==f[d.YP]?null:(0,u.jsx)(v,{event:b,unfocusedDisplay:!I,isOnFocus:I})]})]})}},9363:function(e,t,n){n.d(t,{s:function(){return r}});var i=n(9854),o=n(7753);function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,i.Ipo)(n)?"STRNV8MHJTF"==n?e+"?format=webp":e:e+t}},9723:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),s=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.Z=s},237:function(e,t,n){var i=n(5318);t.Z=void 0;var o=i(n(5045)),r=n(6417),s=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=s},3439:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);