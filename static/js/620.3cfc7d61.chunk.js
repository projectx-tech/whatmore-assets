"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[620],{3590:function(t,e,i){var n=i(2375),o=i(1348),r=i(5830),l=i(4414);function s(t){return t<1e3?t:t<1e5?(t/1e3).toFixed(0)+"K":(t/1e5).toFixed(0)+"L"}e.A=function(t){const e=(0,r.Xd)("whatmoreUITheme"),i=(0,r.Xd)("whatmoreShopId"),a=(0,r.Xd)("whatmorePrimaryFont"),d=t.event,p=t.fontSize;if(d.total_views<=0)return(0,l.jsx)(l.Fragment,{});const c=(0,o.FVo)(i);return"template-icon"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.sIk)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.YcK)(i),borderColor:(0,o.Fwt)(i)},children:(0,l.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)(n.A,{sx:{color:(0,o.s0t)(i)+" !important",fontSize:p,fontWeight:"normal"}})}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.s0t)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",a,"important"),t.style.setProperty("font-size",p,"important"),t.style.setProperty("min-height","0","important"),t.style.setProperty("display","inline","important"),t.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+s(d.total_views)+" "})})]})})}):"template-text"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.sIk)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.YcK)(i),borderColor:(0,o.Fwt)(i)},children:(0,l.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.s0t)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",a,"important"))},style:{fontSize:p,fontWeight:"bold"},children:" "+s(d.total_views)+" views"})})})})}):void 0}},7509:function(t,e,i){i.d(e,{h:function(){return n}});const n=(0,i(9950).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},4616:function(t,e,i){var n=i(9950),o=i(5830),r=i(932),l=i(8538),s=(i(4826),i(1348)),a=i(7973),d=i(4414);e.A=function(t){var e,i,p,c,[h,m]=(0,r.A)();const x=(0,o.Xd)("whatmoreUITheme"),[y]=(0,o.QN)("whatmorePrimaryFont"),[f,v]=(0,n.useState)(0),u=(0,o.Xd)("whatmoreShopId"),g=t.event;if(0==g.products.length)return(0,d.jsx)(d.Fragment,{});const w=.3*m,j=w+"px",b=w+"px",P=.07*m,F=P+"px";return(0,d.jsx)("div",{style:{width:m+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,d.jsxs)("div",{ref:t=>{t&&t.style.setProperty("height","fit-content","important")},style:{display:"flex",flexFlow:"row nowrap",width:"100%",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,d.jsx)("div",{ref:t=>{t&&t.style.setProperty("height",b,"important")},style:{width:(0,s.H$k)(u)?j:"auto",boxShadow:"round"==x?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==x?"5px":"0px",borderWidth:(0,s.YcK)(u),borderColor:(0,s.Fwt)(u),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,d.jsx)("img",{ref:t=>{t&&(t.style.setProperty("object-fit",(0,s.KZe)(u),"important"),t.style.setProperty("max-width",j,"important"))},src:(0,a.b)(g.products[f].thumbnail_image,"&width=400&height=400"),style:{width:"100%",height:"100%",borderRadius:"round"==x?"5px":"0px"},alt:"product image"})}),(0,d.jsxs)("div",{style:{width:m-5-w+"px",height:"100%",borderRadius:"round"==x?"5px":"0px",overflow:"visible"},children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",justifyContent:"center",alignItems:"center",paddingBottom:"4px"},children:(0,d.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",F),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",y,"important"),t.style.setProperty("-webkit-line-clamp",3,"important"),t.style.setProperty("line-clamp",3,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,l.v)(g.products[f].title)})}),(0,s.gZ6)(u)&&(null===(e=g.products[f])||void 0===e||null===(i=e.product_metadata)||void 0===i?void 0:i.product_type)&&(0,d.jsx)("div",{style:{display:"flex",opacity:.8,width:"fit-content",maxWidth:m-5-w+"px",padding:"3px 6px",backgroundColor:"#D3D3D3",borderRadius:"round"==x?"3px":"0"},children:(0,d.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#000","important"),t.style.setProperty("maxWidth",m-5-w+"px","important"),t.style.setProperty("font-size",.7*P+"px","important"),t.style.setProperty("font-family",y,"important"),t.style.setProperty("font-weight","bold","important"),t.style.setProperty("text-overflow","ellipsis","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"))},children:null===(p=g.products[f])||void 0===p||null===(c=p.product_metadata)||void 0===c?void 0:c.product_type})})]})]},f)})}},5620:function(t,e,i){i.d(e,{A:function(){return w}});var n=i(9950),o=i(932),r=(i(4826),i(5727)),l=i(5830),s=i(9879),a=i(7509),d=i(22),p=i(1348),c=i(3590),h=i(4616),m=i(6649),x=i(6613),y=i(1131),f=(i(4365),i(4414));function v(t){var e,[i,s]=(0,o.A)();const[d]=(0,l.QN)("whatmoreShopId"),[c,y,v]=(0,m.A)({triggerOnce:!0});var u=(0,n.useContext)(a.h);const g=t.event,w=null!==(e=t.unfocusedDisplay)&&void 0!==e&&e,j=.5*s,b=(0,x.At)()?t.isOnFocus:y;return(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)("p",{children:"    "})}),u.showPlayButton&&!w?(0,f.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:"video"==g.event_type&&(0,f.jsx)(r.A,{sx:{color:(0,p.KFN)(d)+" !important",opacity:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,f.jsx)(f.Fragment,{}),(0,f.jsx)("div",{ref:c,children:b&&(0,p.imx)(d)?(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)(h.A,{event:g})}):(0,f.jsx)("div",{height:"20px"})})]})})}function u(t){var[e,i]=(0,o.A)();const[n]=(0,l.QN)("whatmorePrimaryFont"),r=t.event;return r.title.trim().length?(0,f.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,f.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,f.jsx)("p",{style:{color:"white",fontSize:.08*i+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,f.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-family",n,"important")},style:{color:"white",fontSize:.08*i+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,f.jsx)(f.Fragment,{})}function g(t){const[e,i,n,r,s]=(0,o.A)(),[a]=(0,l.QN)("whatmoreShowViews"),h=(0,l.Xd)("whatmoreShopId"),m=t.event,x=t.isOnFocus;return(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,f.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",alignItems:"center"},children:["show"===a&&"show"===(0,p.klK)(h)?(0,f.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,f.jsx)(c.A,{event:m,fontSize:.07*i+"px"})})}):(0,f.jsx)(f.Fragment,{}),!1]})}),d.nN===s[d.dl]?(0,f.jsx)(f.Fragment,{}):x?(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,f.jsx)(u,{event:m})}):(0,f.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,f.jsx)(u,{event:m})})]})})}var w=function(t){var e,i,r;const[c,h,m,x,u]=(0,o.A)();var w=(0,n.useContext)(a.h);const j=(0,l.Xd)("whatmoreUITheme"),b=(0,l.Xd)("whatmoreShopId"),[P]=(0,l.Xd)("whatmorePrimaryFont"),F=t.event,C=t.onClick,k=null===(e=t.isOnFocus)||void 0===e||e,I=null!==(i=t.playOnUnfocus)&&void 0!==i&&i,A=null!==(r=t.animateOnFocus&&(0,p.n5O)(b))&&void 0!==r&&r,S=(0,p.VYo)(b);return(0,f.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",w.tileTopMargin+"px"),t.style.setProperty("margin-bottom",w.tileBottomMMargin+"px"))},style:{margin:"0 10px",width:"8968077397"==b||"19501891"==b?void 0:h,aspectRatio:"8968077397"==b||"19501891"==b?9/16:void 0,height:"8968077397"==b||"19501891"==b?"100%":c,borderRadius:"round"==j?"5px":"0px",boxShadow:"round"==j||"61187850326"==b||"19501891"==b?S:null,borderWidth:(0,p.YcK)(b),borderColor:(0,p.Fwt)(b),overflow:"hidden",cursor:"pointer",position:"relative"},className:A?k?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{C(F)},children:[(0,f.jsx)(s.A,{height:(0,p.u06)(b)+" !important",width:"100%",url:F.thumbnail_image,isPlaying:k||I,event:F}),"51394281658"===b?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{position:"absolute",bottom:"4%",left:"50%",transform:"translateX(-50%)",color:"white",padding:"0.5rem 0rem 0rem 0.5rem",zIndex:1,fontSize:"1.4rem",fontWeight:"600",width:"90%",maxWidth:"100%",wordWrap:"break-word",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden",textOverflow:"ellipsis",fontFamily:P+" !important"},children:null===F||void 0===F?void 0:F.title}),(0,f.jsx)("div",{style:{position:"absolute",top:"10px",right:"10px",zIndex:2},children:(0,f.jsx)(y.A,{sx:{color:"white",fontSize:"1.3rem",filter:"drop-shadow(0 0 5px black)"}})})]}):(0,p.Q$)(b)&&(0,f.jsxs)("div",{style:{width:h,height:c},children:[(0,f.jsx)(g,{event:F,isOnFocus:k}),"87043703105"===b||"76467011883"===b||!k&&d.nN!==u[d.dl]?null:(0,f.jsx)(v,{event:F,unfocusedDisplay:!k,isOnFocus:k})]})]})}},7973:function(t,e,i){i.d(e,{B:function(){return l},b:function(){return r}});var n=i(1348),o=i(5830);function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=(0,o.Xd)("whatmoreShopId");return"shopify"!=(0,n.NCy)(i)?"STRNV8MHJTF"==i?t+"?format=webp":t:t+e}function l(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const i=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],n=/\.(jpeg|jpg|gif|png|svg|webp)$/i,o=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==n&&void 0!==n&&n.test(i)?"image":null!==o&&void 0!==o&&o.test(i)?"video":void 0}},5727:function(t,e,i){var n=i(4994);e.A=void 0;var o=n(i(9526)),r=i(4414);e.A=(0,o.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82"}),"PlayArrowRounded")},1131:function(t,e,i){var n=i(4994);e.A=void 0;var o=n(i(9526)),r=i(4414);e.A=(0,o.default)([(0,r.jsx)("path",{d:"M18 20H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z",opacity:".3"},"0"),(0,r.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"},"1")],"ShoppingBagTwoTone")},2375:function(t,e,i){var n=i(4994);e.A=void 0;var o=n(i(9526)),r=i(4414);e.A=(0,o.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},4826:function(){}}]);