"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[364],{8675:function(t,e,n){n.d(e,{Z:function(){return g}});var i=n(3271),o=n(5098),r=n(7313),l=n(9821),a=n(2634),s=n(5180),d=n(686);const p=d.F4`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`,c=d.F4`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`,h=`\n    ${p}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`,x=`\n    ${c}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`;var m=n(7753),f=n(7129),u=n(6417);var g=function(t){var e,n,[d,p]=(0,l.Z)();const[c]=(0,m.j1)("whatmorePrimaryFont");var g=(0,r.useContext)(f.V);const w=t.event,y=t.onClick,v=null===(e=t.isOnFocus)||void 0===e||e,j=(t.playOnUnfocus,null!==(n=t.animateOnFocus)&&void 0!==n&&n);return(0,u.jsxs)(i.xu,{animation:j?v?h:x:"none",marginTop:g.tileTopMargin,marginBottom:g.tileBottomMMargin,marginLeft:g.tileLeftMargin,marginRight:g.tileRightMargin,width:p,height:d,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{y(w)},cursor:"pointer",children:[(0,u.jsx)(o.Ee,{width:"full",height:"full",src:w.thumbnail_image,objectFit:"cover",fallback:(0,u.jsx)(s.Z,{width:p,height:d}),borderRadius:"lg"}),(0,u.jsx)(i.xu,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,u.jsxs)(i.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,u.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,u.jsx)(i.Kq,{direction:"column",justifyContent:"flex-start",children:(0,u.jsx)(i.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,u.jsx)(i.Kq,{direction:"row",justifyContent:"space-between",children:(0,u.jsx)(a.Z,{event:w,fontSize:.05*d+"px",maxWidth:.8*p})})})})}),(0,u.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,u.jsx)(i.Kq,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,u.jsx)(i.xu,{width:"full",borderRadius:"lg",children:(0,u.jsxs)(i.Kq,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,u.jsx)(i.xv,{color:"white",fontSize:.08*p+"px",fontWeight:"normal",align:"left",children:"         "}),(0,u.jsx)(i.xv,{fontSize:.08*p+"px",fontWeight:"normal",align:"left",sx:{fontFamily:c+" !important",color:"white !important"},children:w.title.substring(0,40)}),(0,u.jsx)(i.xv,{fontSize:.08*p+"px",fontWeight:"bold",align:"left",sx:{fontFamily:c+" !important",color:"white !important"},children:w.presenter_name.substring(0,15)})]})})})})]})})]})}},2634:function(t,e,n){var i=n(3271),o=n(4897),r=n(499),l=n(6417);e.Z=function(t){var e,n=t.event,a=t.fontSize,s=null!==(e=t.maxWidth)&&void 0!==e?e:"100%",{status:d,bannerText:p,timeToStartInMins:c}=o.Z.getEventStatus(n);return d.name===r.Z.LIVE.name?(0,l.jsx)(i.xu,{maxWidth:s,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:d.color,children:(0,l.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,l.jsx)(i.xv,{fontSize:a,fontWeight:"bold",color:"white",children:p})})}):(0,l.jsx)(i.xu,{maxWidth:s,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:d.color,children:(0,l.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,l.jsx)(i.xv,{fontSize:a,fontWeight:"medium",children:p})})})}},4920:function(t,e,n){n.d(e,{Z:function(){return b}});var i=n(7313),o=n(9821),r=(n(3439),n(9723)),l=n(7753),a=n(4892),s=n(7129),d=n(6805),p=n(9854),c=n(1092),h=n(5945),x=n(8811),m=n(9363),f=n(6417);var u=function(t){var e,n,r,a,[s,d]=(0,o.Z)();const{whatmoreUITheme:c}=(0,i.useContext)(x.I),[u]=(0,l.j1)("whatmorePrimaryFont"),[g,w]=(0,i.useState)(0),y=(0,l.MO)("whatmoreShopId"),v=t.event;if(0==v.products.length)return(0,f.jsx)(f.Fragment,{});const j=.3*d,b=j+"px",C=j+"px",P=.07*d,k=P+"px";return(0,f.jsx)("div",{style:{width:d+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,f.jsxs)("div",{ref:t=>{t&&t.style.setProperty("height","fit-content","important")},style:{display:"flex",flexFlow:"row nowrap",width:"100%",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,f.jsx)("div",{ref:t=>{t&&t.style.setProperty("height",C,"important")},style:{width:(0,p.uNj)(y)?b:"auto",boxShadow:"round"==c?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==c?"5px":"0px",borderWidth:(0,p.alU)(y),borderColor:(0,p.qPe)(y),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,f.jsx)("img",{ref:t=>{t&&(t.style.setProperty("object-fit",(0,p.yOX)(y),"important"),t.style.setProperty("max-width",b,"important"))},src:(0,m.s)(v.products[g].thumbnail_image,"&width=400&height=400"),style:{width:"100%",height:"100%",borderRadius:"round"==c?"5px":"0px"},alt:"product image"})}),(0,f.jsxs)("div",{style:{width:d-5-j+"px",height:"100%",borderRadius:"round"==c?"5px":"0px",overflow:"visible"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",justifyContent:"center",alignItems:"center",paddingBottom:"4px"},children:(0,f.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",k,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",u,"important"),t.style.setProperty("-webkit-line-clamp",3,"important"),t.style.setProperty("line-clamp",3,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,h.s)(v.products[g].title)})}),(null===(e=v.products[g])||void 0===e||null===(n=e.product_metadata)||void 0===n?void 0:n.product_type)&&(0,f.jsx)("div",{style:{display:"flex",opacity:.8,width:"fit-content",maxWidth:d-5-j+"px",padding:"3px 6px",backgroundColor:"#D3D3D3",borderRadius:"round"==c?"3px":"0"},children:(0,f.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#000","important"),t.style.setProperty("maxWidth",d-5-j+"px","important"),t.style.setProperty("font-size",.7*P+"px","important"),t.style.setProperty("font-family",u,"important"),t.style.setProperty("font-weight","bold","important"),t.style.setProperty("text-overflow","ellipsis","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"))},children:null===(r=v.products[g])||void 0===r||null===(a=r.product_metadata)||void 0===a?void 0:a.product_type})})]})]},g)})},g=n(3933),w=n(8984);function y(t){var e,[n,a]=(0,o.Z)();const[d]=(0,l.j1)("whatmoreShopId"),[c,h,x]=(0,g.YD)({triggerOnce:!0});var m=(0,i.useContext)(s.V);const y=t.event,v=null!==(e=t.unfocusedDisplay)&&void 0!==e&&e,j=.5*a,b=(0,w.gE)()?t.isOnFocus:h;return(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)("p",{children:"    "})}),m.showPlayButton&&!v?(0,f.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:"video"==y.event_type&&(0,f.jsx)(r.Z,{sx:{color:(0,p.Ya_)(d)+" !important",opacity:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,f.jsx)(f.Fragment,{}),(0,f.jsx)("div",{ref:c,children:b&&(0,p.PWD)(d)?(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)(u,{event:y})}):(0,f.jsx)("div",{height:"20px"})})]})})}function v(t){var[e,n]=(0,o.Z)();const[i]=(0,l.j1)("whatmorePrimaryFont"),r=t.event;return r.title.trim().length?(0,f.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,f.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,f.jsx)("p",{style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,f.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-family",i,"important")},style:{color:"white",fontSize:.08*n+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,f.jsx)(f.Fragment,{})}function j(t){const[e,n,i,r,a]=(0,o.Z)(),[s]=(0,l.j1)("whatmoreShowViews"),h=(0,l.MO)("whatmoreShopId"),x=t.event,m=t.isOnFocus;return(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,f.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===s&&"show"===(0,p.qcC)(h)?(0,f.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,f.jsx)(c.Z,{event:x,fontSize:.07*n+"px"})})}):(0,f.jsx)(f.Fragment,{})})}),d.$w===a[d.YP]?(0,f.jsx)(f.Fragment,{}):m?(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,f.jsx)(v,{event:x})}):(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)(v,{event:x})})]})})}var b=function(t){var e,n,r;const[c,h,m,u,g]=(0,o.Z)();var w=(0,i.useContext)(s.V);const{whatmoreUITheme:v}=(0,i.useContext)(x.I),b=(0,l.MO)("whatmoreShopId"),C=t.event,P=t.onClick,k=null===(e=t.isOnFocus)||void 0===e||e,F=null!==(n=t.playOnUnfocus)&&void 0!==n&&n,I=null!==(r=t.animateOnFocus&&(0,p.iWI)(b))&&void 0!==r&&r,R=(0,p.nzC)(b);return(0,f.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",w.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",w.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:h,height:c,borderRadius:"round"==v?"5px":"0px",boxShadow:"round"==v?R:null,borderWidth:(0,p.alU)(b),borderColor:(0,p.qPe)(b),overflow:"hidden",cursor:"pointer"},className:I?k?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{P(C)},children:[(0,f.jsx)(a.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:k||F,event:C}),(0,f.jsxs)("div",{style:{width:h,height:c},children:[(0,f.jsx)(j,{event:C,isOnFocus:k}),"87043703105"===b||"76467011883"===b||!k&&d.$w!==g[d.YP]?null:(0,f.jsx)(y,{event:C,unfocusedDisplay:!k,isOnFocus:k})]})]})}},9723:function(t,e,n){var i=n(5318);e.Z=void 0;var o=i(n(5045)),r=n(6417),l=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");e.Z=l},3439:function(){}}]);