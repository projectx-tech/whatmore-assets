"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[437],{3867:function(t,e,i){var n=i(8816),o=i(417),r=i(4885),l=i(7753),s=i(6417);e.Z=function(t){var e;const i=(0,l.MO)("whatmoreUITheme"),[a]=(0,l.j1)("whatmoreSecondaryColor"),[d,p]=(0,l.j1)("productRatings"),c=(0,l.MO)("whatmorePrimaryFont"),h=t.productId,x=t.fontSize,m=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===d||"undefined"==typeof d||!(h in d)||d[h].avgRating>5)return(0,s.jsx)(s.Fragment,{});const u=d[h].avgRating,f=d[h].totalRatings;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(u))].map(((t,e)=>(0,s.jsx)(n.Z,{sx:{color:a,fontSize:x+"px"}},"star-icon"+e))),u-Math.floor(u)>.2?(0,s.jsx)(o.Z,{sx:{color:a,fontSize:x+"px"}},"star-half-icon"):u-Math.floor(u)==0?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(r.Z,{sx:{color:a,fontSize:x+"px"}},"star-outline-icon"),[...Array(Math.floor(5-u))].map(((t,e)=>(0,s.jsx)(r.Z,{sx:{color:a,fontSize:x+"px"}},"star-outline-icon-"+e))),(0,s.jsx)("div",{children:(0,s.jsx)("div",{width:"2px"})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{backgroundColor:a,borderRadius:"round"==i?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,s.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*x+"px","important"),t.style.setProperty("font-family",c,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",u,"\xa0"]})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",m,"important"),t.style.setProperty("font-size",.8*x+"px","important"),t.style.setProperty("font-family",c,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+f+")"]})})]})})}},4095:function(t,e,i){i.r(e),i.d(e,{default:function(){return D}});var n=i(7313),o=i(6090),r=i(7616),l=i(32),s=(i(6143),i(7850),i(4444),i(7244),i(123),i(5892),i(1811),i(9302)),a=i(2575),d=i(2210),p=i(8486),c=i(9821),h=i(8866),x=i(2279),m=i.n(x),u=i(7753),f=i(7129),y=i(9854),g=i(364),w=i(1855),v=i(4892),j=i(6775),P=i(1092),C=i(5945),b=i(5456),I=i(3867),S=i(9219),k=i(9363),O=i(7053),M=i(5416),F=i(6417);const _=n.lazy((()=>Promise.all([i.e(576),i.e(745),i.e(348),i.e(842)]).then(i.bind(i,6163))));var z=function(t){var e,i,o,r;const l=(0,u.j1)("whatmoreUITheme");var[s,a]=(0,c.Z)();const[d]=(0,u.j1)("whatmorePrimaryFont"),[p]=(0,u.j1)("whatmoreSecondaryColorShade900"),[h]=(0,u.j1)("whatmoreShopId"),[x,m]=(0,n.useState)(0),[f,w]=(0,n.useState)(t.event),[v,j]=(0,n.useState)(),[P,z]=(0,n.useState)(!1),R=t.onClick,L=f.products.length,{whatmoreIsPreviewMode:Z}=(0,n.useContext)(g.I);if(0==L)return(0,F.jsx)(F.Fragment,{});(0,n.useEffect)((()=>{(0,y.N8M)(h)&&(0,S.p_)(f,(0,y.Ipo)(h),h).then((t=>{w(t),z(!0)}));(async()=>{var t;const e=await(0,O.p)(null===f||void 0===f||null===(t=f.products)||void 0===t?void 0:t[0],(0,y.Ipo)(h),h);j(e),z(!0)})()}),[]);const T=Z,W=.3*a,E=W+"px",A=W+"px",B=.05*a*(0,y.PI4)(h)+"px",U=.07*a*(0,y.wdV)(h),D=U+"px",V=.05*a;return(0,F.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-around",alignItems:"center",marginTop:"2px",marginBottom:"2px",gap:"0px"},children:[(0,F.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:.95*a,height:"fit-content",paddingLeft:"4px",paddingRight:"4px",justifyContent:"space-between",alignItems:"center",gap:"4px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",onClick:R,children:[(0,F.jsx)("div",{style:{width:E,height:A,overflow:"hidden",backgroundColor:p,borderRadius:"round"==l?"5px":"0px",borderWidth:"0px"==(0,y.alU)(h)?"2px":(0,y.alU)(h),borderColor:"white"==(0,y.qPe)(h)?p:(0,y.qPe)(h)},children:(0,F.jsx)("img",{ref:t=>{t&&t.style.setProperty("object-fit",(0,y.yOX)(h),"important")},src:(0,k.s)(f.products[x].thumbnail_image,"&width=".concat(400,"&height=",400)),style:{width:E,height:E,borderRadius:"round"==l?"5px":"0px",backgroundColor:p},alt:"product image"})}),(0,F.jsx)("div",{style:{width:.7*a+"px",height:"100%",overflow:"visible",marginBottom:"2px",marginRight:"2px",borderRadius:"round"==l?"5px":"0px"},children:(0,F.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",paddingTop:"5px"},children:[(0,F.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,F.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","black","important"),t.style.setProperty("font-size",B,"important"),t.style.setProperty("line-height","140%","important"),t.style.setProperty("font-family",d,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:(0,C.s)(f.products[x].title)})}),(0,F.jsxs)("div",{style:{display:"flex",flexFlow:(0,y.$zZ)(h)?"row nowrap":"row-reverse nowrap",width:"100%",height:"fit-content",justifyContent:(0,y.$zZ)(h)?"flex-start":"flex-end",alignItems:"center",gap:"4px"},children:[P&&(0,F.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,y.Uyp)(h),"important"),t.style.setProperty("font-size",D,"important"),t.style.setProperty("line-height","140%","important"),t.style.setProperty("font-family",d,"important"))},style:{textAlign:"left",fontWeight:"medium",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden",textOverflow:"ellipsis"},children:[" ",(0,S.jx)(parseFloat((0,M.G)()?null===v||void 0===v?void 0:v.price:null===f||void 0===f||null===(e=f.products)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.price),"",h,f.products[x].currency)]}),(0,b.B)(f.products[x].price,f.products[x].compare_price)&&P?(0,F.jsxs)("strike",{ref:t=>{t&&(t.style.setProperty("color",(0,y.kPs)(h),"important"),t.style.setProperty("font-size",.9*U+"px","important"),t.style.setProperty("line-height","140%","important"),t.style.setProperty("font-family",d,"important"),t.style.setProperty("text-decoration","line-through","important"))},style:{textAlign:"left",fontWeight:"medium",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden",textOverflow:"ellipsis"},children:[" ",(0,S.jx)(parseFloat((0,M.G)()?null===v||void 0===v?void 0:v.compare_at_price:null===f||void 0===f||null===(o=f.products)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.compare_price),"",h,f.products[x].currency)]}):(0,F.jsx)(F.Fragment,{})]}),(0,F.jsx)(I.Z,{storeId:h,productId:f.products[x].client_product_id,productLink:f.products[x].product_link,fontSize:V})]})})]},x),(0,y.IXJ)(h)||T&&"5141594210"==h?(0,F.jsx)(n.Suspense,{children:(0,F.jsx)(_,{baseFontSize:.05*a,event:f,product:f.products[0],width:.9*a,height:"fit-content"})}):(0,F.jsx)(F.Fragment,{})]})},R=i(3388);function L(t){const[e,i,n,o,r]=(0,c.Z)(),l=(0,u.MO)("whatmoreUITheme"),s=(0,u.MO)("whatmoreShowViews"),a=(0,u.MO)("whatmoreShopId"),d=t.PRODUCT_BOX_HEIGHT,p=t.PRODUCT_BOX_HEIGHT_IN_PX,h=t.PRODUCT_BOX_MARGIN,[x,m,f]=(0,j.Z)({triggerOnce:!0}),g=t.event;t.isOnFocus;return(0,F.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,F.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,F.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center",width:"100%"},onClick:()=>{t.onClick(g)},children:"show"===s?(0,F.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,F.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,F.jsx)(P.Z,{event:g,fontSize:.07*i+"px"})})}):(0,F.jsx)(F.Fragment,{})}),(0,F.jsx)("div",{style:{display:"flex",width:"100%",height:e-d+"px"},onClick:()=>{t.onClick(g)}}),(0,R.xg)(g,a)?(0,F.jsx)("div",{style:{position:"relative",zIndex:1,bottom:h+"px",display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",width:.95*i,height:p,marginLeft:h+"px",marginRight:h+"px",backgroundColor:"white",borderRadius:"round"==l?"5px":"0px",borderWidth:(0,y.alU)(a),borderColor:(0,y.qPe)(a),paddingLeft:"5px",paddingRight:"5px",overflow:"hidden"},children:(0,F.jsx)("div",{ref:x,children:m&&(0,y.PWD)(a)?(0,F.jsx)(z,{event:g,onClick:()=>{var e,i;(0,y.I6m)(a)?window.location.href=(i=null===(e=g.products)||void 0===e?void 0:e[0],(0,y.lj5)(a)?i.product_link+"?"+(0,y.awP)(a)+"&"+(0,y.n9s)(a)+"&"+(0,y.vaK)(a):i.product_link):t.onClick(g)}}):(0,F.jsx)("div",{height:"20px"})})}):(0,F.jsx)(F.Fragment,{})]})})}var Z=function(t){var e,i,o;const[r,l,s,a,d]=(0,c.Z)();var p=(0,n.useContext)(f.V);const h=(0,u.MO)("whatmoreUITheme"),x=(0,u.MO)("whatmoreShopId"),m=(0,u.MO)("whatmoreSecondaryColorShade600"),g=t.event,w=t.onClick,j=null===(e=t.isOnFocus)||void 0===e||e,P=null!==(i=t.playOnUnfocus)&&void 0!==i&&i,C=null!==(o=t.animateOnFocus&&(0,y.iWI)(x))&&void 0!==o&&o,b=(0,y.IXJ)(x)?.7:.8,I=r*b+"px",S=1-b,k=r*S,O=r*S+"px",M=r*S*.1,_=(0,y.nzC)(x);return(0,F.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",p.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",p.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:l+"px",height:1.2*r+"px",borderRadius:"round"==h?"5px":"0px",boxShadow:"round"==h?_:null,borderWidth:(0,y.alU)(x),borderColor:(0,y.qPe)(x),overflow:"hidden",cursor:"pointer",position:"relative"},className:C?j?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",children:[(0,F.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"flex-start",alignItems:"center"},className:"whatmore-template-b-event-tile",onClick:()=>{w(g)},children:[(0,F.jsx)(v.Z,{height:I,width:"100%",url:g.thumbnail_image,isPlaying:j||P,event:g}),(0,y.wxm)(x)&&(0,R.xg)(g,x)?(0,F.jsx)("div",{style:{width:"100%",height:O,backgroundColor:m}}):(0,F.jsx)(F.Fragment,{})]}),(0,y.wxm)(x)&&(0,F.jsx)(L,{event:g,isOnFocus:j,PRODUCT_BOX_HEIGHT:k,PRODUCT_BOX_HEIGHT_IN_PX:O,PRODUCT_BOX_MARGIN:M,onClick:w})]})},T=i(778),W=i(4522),E=i(7381);const A=(0,a.Z)({key:"whatmore-css-hv"});function B(t){const[e,i,o]=(0,c.Z)(),r=(0,u.MO)("whatmoreShopId"),l=t.events,s=t.onClick,a=o*(0,y.u6l)(r),p=(0,y.yBw)(r),[h,x]=(0,n.useState)(p?l.length:a),{whatmoreWidgetSourceDetails:m}=(0,n.useContext)(g.I);return(0,n.useEffect)((()=>{h<=a&&x((t=>t+a))}),[a]),(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,F.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,F.jsx)(d.tq,{slidesPerView:l.length>1?a:1,initialSlide:l.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!1,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:t=>{(0,W.y4)({userInteractionType:T.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:m}),t.realIndex>t.previousIndex&&x((t=>t+a))},loop:(0,y.yBw)(r),children:l.map(((t,e)=>e<=h&&(0,F.jsx)(d.o5,{children:e=>{let{isActive:i,isPrev:n,isNext:o,isVisible:r}=e;return(0,F.jsx)(Z,{isOnFocus:i&&r,playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>{s(t)}})}},"whatmore-event-tile-portrait-"+t.index)))})})})}function U(t){const[e,i,o,r]=(0,c.Z)(),[l,s]=(0,n.useState)(-1),a=(0,u.MO)("whatmoreShopId"),h=t.onClick,x=t.events,f=(0,y.yBw)(a),[v,j]=(0,n.useState)(f?x.length:o),P=Math.min(o,x.length),{whatmoreWidgetSourceDetails:C}=(0,n.useContext)(g.I);return(0,n.useEffect)((()=>{v<=o&&j((t=>t+o))}),[o]),(0,F.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:r+"px",paddingRight:r+"px"},children:(0,F.jsx)("div",{style:{width:i*P*1.1+"px"},children:(0,F.jsx)(d.tq,{slidesPerView:P,watchSlidesProgress:!0,modules:[p.W_],navigation:!0,slidesPerGroup:parseInt(P),onSlideChange:t=>{(0,W.y4)({userInteractionType:T.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:C}),t.realIndex>t.previousIndex&&j((t=>t+o))},spaceBetween:(0,y.WGf)(a),loop:(0,y.yBw)(a),children:x.map(((t,e)=>{const i=m()((()=>s(e)),300);return e<=v&&(0,F.jsx)(d.o5,{onMouseEnter:()=>{i()},onMouseLeave:()=>{i.cancel(),s(-1)},children:i=>{let{isActive:n,isPrev:o,isNext:r,isVisible:s}=i;return s?(0,F.jsx)(Z,{isOnFocus:e==l,playOnUnfocus:!(0,y.dHy)(a)||e==parseInt(P/2)&&-1==l,animateOnFocus:!0,event:t,onClick:()=>{h(t)}}):(0,F.jsx)(w.Z,{})}},"whatmore-event-tile-landscape-"+t.index)}))})})})}var D=function(t){const[e,i,a]=(0,h.Z)(),[d]=(0,u.j1)("whatmorePrimaryColor"),[p]=(0,u.j1)("whatmoreShopId"),[c]=(0,u.j1)("whatmoreSecondaryColor"),[x]=(0,u.j1)("whatmoreTitleFont"),m="portrait"==e?(0,u.MO)("whatmoreTitleFontSizePortrait"):(0,u.MO)("whatmoreTitleFontSize"),{whatmoreRootId:y}=(0,n.useContext)(g.I),w=((0,u.MO)("isInDesignMode"),t.events),v=t.onClick,j=x,P=(0,u.MO)("whatmoreCollectionHeading"),{whatmoreIsCollectionsTemplate:C}=(0,n.useContext)(g.I);function b(t){v(t)}function I(t){const e=t.indexOf(" ",t.indexOf(" ")+1);return-1===e?[t,""]:[t.substring(0,e),t.substring(e)]}return(0,n.useEffect)((()=>{(0,E.Oo)("Video shopping powered by Whatmore!")}),[]),(0,n.useEffect)((()=>{l.IR.forEach((t=>{var e;const i=null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-b"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-b"]');if(!i)return;i&&t&&(t.style.minHeight="0px")}))}),[]),delete r.ZP.styles.global,(0,F.jsx)(s.C,{value:A,children:(0,F.jsx)("div",{className:"whatmore-carousel-events",children:(0,F.jsx)(o.x,{theme:r.ZP,cssVarsRoot:y,resetCSS:!1,children:(0,F.jsxs)(f.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!1},children:["10588815418"!==p&&"2310668401"!==p&&"10648977444"!==p&&(t.heading.trim().length>0||C)?(0,F.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,F.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family",j,"important"),t.style.setProperty("font-size",m+"px","important"))},style:{color:d,backgroundClip:"text",textAlign:"center"},children:C?"W"!==P?P:"":t.heading})}):(0,F.jsx)(F.Fragment,{}),"10588815418"==p||"2310668401"==p||"10648977444"==p?(0,F.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left"},children:(0,F.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[(0,F.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family",j,"important"),t.style.setProperty("font-size",m+"px","important"))},style:{color:d,backgroundClip:"text",textAlign:"center",fontStyle:"normal"},children:C?"W"!==P?P:"":I(t.heading)[0]}),(0,F.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family","Austin Text SemiBold Trial","important"),t.style.setProperty("font-size",m+"px","important"))},style:{color:d,backgroundClip:"text",textAlign:"center"},children:C?"W"!==P?P:"":I(t.heading)[1]})]})}):(0,F.jsx)(F.Fragment,{}),"landscape"===e?(0,F.jsx)(U,{events:w,onClick:b}):(0,F.jsx)(B,{events:w,onClick:b})]})})})})}},1092:function(t,e,i){var n=i(237),o=i(9854),r=i(7753),l=i(6417);function s(t){return t<1e3?t:t<1e5?(t/1e3).toFixed(0)+"K":(t/1e5).toFixed(0)+"L"}e.Z=function(t){const e=(0,r.MO)("whatmoreUITheme"),i=(0,r.MO)("whatmoreShopId"),a=(0,r.MO)("whatmorePrimaryFont"),d=t.event,p=t.fontSize;if(d.total_views<=0)return(0,l.jsx)(l.Fragment,{});const c=(0,o.S_M)(i);return"template-icon"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.alU)(i),borderColor:(0,o.qPe)(i)},children:(0,l.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)(n.Z,{sx:{color:(0,o.aLw)(i)+" !important",fontSize:p,fontWeight:"normal"}})}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.aLw)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",a,"important"),t.style.setProperty("font-size",p,"important"),t.style.setProperty("min-height","0","important"),t.style.setProperty("display","inline","important"),t.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+s(d.total_views)+" "})})]})})}):"template-text"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.alU)(i),borderColor:(0,o.qPe)(i)},children:(0,l.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.aLw)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",a,"important"))},style:{fontSize:p,fontWeight:"bold"},children:" "+s(d.total_views)+" views"})})})})}):void 0}},7129:function(t,e,i){i.d(e,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(t,e,i){var n=i(7313),o=i(9821),r=i(7129),l=i(7753),s=i(6417);e.Z=function(t){var[e,i]=(0,o.Z)();(0,n.useContext)(r.V);const a=(0,l.MO)("whatmoreShopId");return t.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:"8968077397"==a?void 0:i,aspectRatio:"8968077397"==a?9/16:void 0,height:"8968077397"==a?"100%":e,overflow:"hidden"}})}},9363:function(t,e,i){i.d(e,{$:function(){return l},s:function(){return r}});var n=i(9854),o=i(7753);function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,n.Ipo)(i)?"STRNV8MHJTF"==i?t+"?format=webp":t:t+e}function l(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const i=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],n=/\.(jpeg|jpg|gif|png|svg|webp)$/i,o=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==n&&void 0!==n&&n.test(i)?"image":null!==o&&void 0!==o&&o.test(i)?"video":void 0}},5456:function(t,e,i){i.d(e,{B:function(){return n}});const n=function(t,e){return!(isNaN(e)||!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},6805:function(t,e,i){i.d(e,{$I:function(){return s},$w:function(){return d},AK:function(){return r},AL:function(){return l},YP:function(){return o},me:function(){return n},rE:function(){return a}});const n="device_type",o="device_mode",r="mobile",l="tablet",s="desktop",a="portrait",d="landscape"},9821:function(t,e,i){var n=i(7753),o=i(8866),r=i(6805),l=i(9854);e.Z=function(t){const[e,i,s]=(0,o.Z)(),[a]=(0,n.j1)("whatmoreLandscapePadding"),[d]=(0,n.j1)("whatmoreShopId"),[p]=(0,n.j1)("whatmoreVideoTileSize"),[c]=(0,n.j1)("whatmoreVideoTileSizePortrait"),h=s>=1025,x="portrait"==e?c:p,m=!("portrait"!=e||!(s>=481)),u=x/100*1.3*.5,f=x/100;var y=Math.min(s,i),[g,w,v,j]=[.6*y*(16/9),.6*y,1.4,0];function P(t){return Math.round(10*t)/10}var C={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(h){const t=w*u,e=g*u;[g,w,v,j]=[e,t,(s-2*a-2*(0,l.mZU)(d))/(1.1*t),a],C[r.me]=r.$I,C[r.YP]=r.$w}else if(m){var b=.8*w,I=.8*g;"portrait"==e?(b*=f,I*=f,[g,w,v,j]=[I,b,P(s/(1.2*b)),0],C[r.me]=r.AL,C[r.YP]=r.rE):([g,w,v,j]=[I,b,(s-2*a)/(1.1*b),a],C[r.me]=r.AL,C[r.YP]=r.$w)}else{b=w,I=g;"portrait"==e?(b=b*f*.9,I=I*f*.9,[g,w,v,j]=[I,b,P(s/(1.15*b)),0],C[r.me]=r.AK,C[r.YP]=r.rE):(b=.7*w,I=.7*g,[g,w,v,j]=[I,b,(s-2*a)/(1.1*b),a],C[r.me]=r.AK,C[r.YP]=r.$w)}return[g,w,v,j,C]}},8816:function(t,e,i){var n=i(5318);e.Z=void 0;var o=n(i(5045)),r=i(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=l},417:function(t,e,i){var n=i(5318);e.Z=void 0;var o=n(i(5045)),r=i(6417),l=(0,o.default)((0,r.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=l},4885:function(t,e,i){var n=i(5318);e.Z=void 0;var o=n(i(5045)),r=i(6417),l=(0,o.default)((0,r.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=l},237:function(t,e,i){var n=i(5318);e.Z=void 0;var o=n(i(5045)),r=i(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=l},7244:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);