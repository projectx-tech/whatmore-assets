"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[733],{1092:function(t,e,i){var n=i(237),o=i(9854),r=i(7753),l=i(6417);function a(t){return t<1e3?t:t<1e5?(t/1e3).toFixed(0)+"K":(t/1e5).toFixed(0)+"L"}e.Z=function(t){const e=(0,r.MO)("whatmoreUITheme"),i=(0,r.MO)("whatmoreShopId"),s=(0,r.MO)("whatmorePrimaryFont"),d=t.event,p=t.fontSize;if(d.total_views<=0)return(0,l.jsx)(l.Fragment,{});const c=(0,o.S_M)(i);return"template-icon"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.alU)(i),borderColor:(0,o.qPe)(i)},children:(0,l.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)(n.Z,{sx:{color:(0,o.aLw)(i)+" !important",fontSize:p,fontWeight:"normal"}})}),(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.aLw)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",s,"important"),t.style.setProperty("font-size",p,"important"),t.style.setProperty("min-height","0","important"),t.style.setProperty("display","inline","important"),t.style.setProperty("width","auto","important"))},style:{fontWeight:"normal"},children:" "+a(d.total_views)+" "})})]})})}):"template-text"==c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XCH)(i),color:"white",borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.alU)(i),borderColor:(0,o.qPe)(i)},children:(0,l.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,l.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,o.aLw)(i),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",s,"important"))},style:{fontSize:p,fontWeight:"bold"},children:" "+a(d.total_views)+" views"})})})})}):void 0}},7129:function(t,e,i){i.d(e,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8390:function(t,e,i){var n=i(7313),o=i(7753),r=i(9821),l=i(5945),a=(i(3439),i(9854)),s=i(9363),d=i(6417);e.Z=function(t){var e,i,p,c,[h,m]=(0,r.Z)();const x=(0,o.MO)("whatmoreUITheme"),[f]=(0,o.j1)("whatmorePrimaryFont"),[y,u]=(0,n.useState)(0),g=(0,o.MO)("whatmoreShopId"),w=t.event;if(0==w.products.length)return(0,d.jsx)(d.Fragment,{});const v=.3*m,j=v+"px",b=v+"px",P=.07*m,C=P+"px";return(0,d.jsx)("div",{style:{width:m+"px",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3)"},children:(0,d.jsxs)("div",{ref:t=>{t&&t.style.setProperty("height","fit-content","important")},style:{display:"flex",flexFlow:"row nowrap",width:"100%",justifyContent:"space-between",alignItems:"center",paddingLeft:"5px",paddingRight:"5px",paddingTop:"5px",paddingBottom:"5px",gap:"5px"},className:"whatmore-event-tile-product-scale-in-and-out-animation",children:[(0,d.jsx)("div",{ref:t=>{t&&t.style.setProperty("height",b,"important")},style:{width:(0,a.uNj)(g)?j:"auto",boxShadow:"round"==x?"0px 0px 5px 2px #B0B0B0":null,borderRadius:"round"==x?"5px":"0px",borderWidth:(0,a.alU)(g),borderColor:(0,a.qPe)(g),overflow:"hidden",backgroundColor:"rgb(220, 220, 220, 1)"},children:(0,d.jsx)("img",{ref:t=>{t&&(t.style.setProperty("object-fit",(0,a.yOX)(g),"important"),t.style.setProperty("max-width",j,"important"))},src:(0,s.s)(w.products[y].thumbnail_image,"&width=".concat(400,"&height=",400)),style:{width:"100%",height:"100%",borderRadius:"round"==x?"5px":"0px"},alt:"product image"})}),(0,d.jsxs)("div",{style:{width:m-5-v+"px",height:"100%",borderRadius:"round"==x?"5px":"0px",overflow:"visible"},children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"fit-content",justifyContent:"center",alignItems:"center",paddingBottom:"4px"},children:(0,d.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",C,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("-webkit-line-clamp",3,"important"),t.style.setProperty("line-clamp",3,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"normal"},children:(0,l.s)(w.products[y].title)})}),(null===(e=w.products[y])||void 0===e||null===(i=e.product_metadata)||void 0===i?void 0:i.product_type)&&(0,d.jsx)("div",{style:{display:"flex",opacity:.8,width:"fit-content",maxWidth:m-5-v+"px",padding:"3px 6px",backgroundColor:"#D3D3D3",borderRadius:"round"==x?"3px":"0"},children:(0,d.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#000","important"),t.style.setProperty("maxWidth",m-5-v+"px","important"),t.style.setProperty("font-size",.7*P+"px","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("font-weight","bold","important"),t.style.setProperty("text-overflow","ellipsis","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"))},children:null===(p=w.products[y])||void 0===p||null===(c=p.product_metadata)||void 0===c?void 0:c.product_type})})]})]},y)})}},2891:function(t,e,i){i.d(e,{Z:function(){return j}});var n=i(7313),o=i(9821),r=(i(3439),i(9723)),l=i(7753),a=i(4892),s=i(7129),d=i(6805),p=i(9854),c=i(1092),h=i(8390),m=i(5333),x=i(8984),f=i(9212),y=(i(8134),i(123),i(6417));var u=function(t){const e=t.fontSize,i=(0,l.MO)("whatmorePrimaryFont"),n=Math.floor(.75*e),o={color:"#FFF",fontSize:.3*e+"px",display:"flex",alignItems:"center",whiteSpace:"nowrap",padding:"2px 6px 2px 2px",fontWeight:"bold",position:"relative",height:"".concat(n,"px"),fontFamily:i},r={content:'""',position:"absolute",top:"0",right:"100%",borderStyle:"solid",borderWidth:"".concat(n/2,"px ").concat(n/2+2,"px ").concat(n/2,"px 0"),borderColor:"transparent red transparent transparent"};return(0,y.jsx)("div",{style:{position:"relative",background:"linear-gradient(to right, red, #6E260E)"},children:(0,y.jsxs)("div",{style:o,children:[(0,y.jsx)("div",{style:r}),"Flat 40% off"]})})};function g(t){var e,[i,a]=(0,o.Z)();const[d]=(0,l.j1)("whatmoreShopId"),[c,f,u]=(0,m.YD)({triggerOnce:!0});var g=(0,n.useContext)(s.V);const w=t.event,v=null!==(e=t.unfocusedDisplay)&&void 0!==e&&e,j=.5*a,b=(0,x.gE)()?t.isOnFocus:f;return(0,y.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,y.jsx)("p",{children:"    "})}),g.showPlayButton&&!v?(0,y.jsx)("div",{style:{position:"relative",top:"10%",overflow:"hidden",marginLeft:"5px",marginRight:"5px",width:"100%"},children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",alignItems:"center"},children:(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:"video"==w.event_type&&(0,y.jsx)(r.Z,{sx:{color:(0,p.Ya_)(d)+" !important",opacity:.8,fontSize:j,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,y.jsx)(y.Fragment,{}),(0,y.jsx)("div",{ref:c,children:b&&(0,p.PWD)(d)?(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,y.jsx)(h.Z,{event:w})}):(0,y.jsx)("div",{height:"20px"})})]})})}function w(t){var[e,i]=(0,o.Z)();const[n]=(0,l.j1)("whatmorePrimaryFont"),r=t.event;return r.title.trim().length?(0,y.jsx)("div",{style:{width:"100%",height:"fit-content",backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))"},children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-end",alignContent:"center",width:"100%",height:"100%"},children:(0,y.jsx)("div",{style:{width:"100%",padding:"2px"},children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px"},children:[(0,y.jsx)("p",{style:{color:"white",fontSize:.08*i+"px",fontWeight:"normal",textAlign:"left"},children:"         "}),(0,y.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-family",n,"important")},style:{color:"white",fontSize:.08*i+"px",fontWeight:"normal",textAlign:"left"},children:r.title.substring(0,60)})]})})})}):(0,y.jsx)(y.Fragment,{})}function v(t){const[e,i,n,r,a]=(0,o.Z)(),[s]=(0,l.j1)("whatmoreShowViews"),h=(0,l.MO)("whatmoreShopId"),m=t.event,x=t.isOnFocus;return(0,y.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:[(0,y.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",alignItems:"center"},children:["show"===s&&"show"===(0,p.qcC)(h)?(0,y.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,y.jsx)(c.Z,{event:m,fontSize:.07*i+"px"})})}):(0,y.jsx)(y.Fragment,{}),"1972174947"==h&&(0,y.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",marginTop:"8px"},children:(0,y.jsx)(u,{fontSize:.2*i})})]})}),d.$w===a[d.YP]?(0,y.jsx)(y.Fragment,{}):x?(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-out-animation",children:(0,y.jsx)(w,{event:m})}):(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,y.jsx)(w,{event:m})})]})})}var j=function(t){var e,i,r;const[c,h,m,x,u]=(0,o.Z)();var w=(0,n.useContext)(s.V);const j=(0,l.MO)("whatmoreUITheme"),b=(0,l.MO)("whatmoreShopId"),[P]=(0,l.MO)("whatmorePrimaryFont"),C=t.event,F=t.onClick,I=null===(e=t.isOnFocus)||void 0===e||e,k=null!==(i=t.playOnUnfocus)&&void 0!==i&&i,S=null!==(r=t.animateOnFocus&&(0,p.iWI)(b))&&void 0!==r&&r,M=(0,p.nzC)(b);return(0,y.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",w.tileTopMargin+"px"),t.style.setProperty("margin-bottom",w.tileBottomMMargin+"px"))},style:{margin:"0 10px",width:"8968077397"==b||"19501891"==b?void 0:h,aspectRatio:"8968077397"==b||"19501891"==b?9/16:void 0,height:"8968077397"==b||"19501891"==b?"100%":c,borderRadius:"round"==j?"5px":"0px",boxShadow:"round"==j||"61187850326"==b||"19501891"==b?M:null,borderWidth:(0,p.alU)(b),borderColor:(0,p.qPe)(b),overflow:"hidden",cursor:"pointer",position:"relative"},className:S?I?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{F(C)},children:[(0,y.jsx)(a.Z,{height:(0,p.dXm)(b)+" !important",width:"100%",url:C.thumbnail_image,isPlaying:I||k,event:C}),"51394281658"===b?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{style:{position:"absolute",bottom:"4%",left:"50%",transform:"translateX(-50%)",color:"white",padding:"0.5rem 0rem 0rem 0.5rem",zIndex:1,fontSize:"1.4rem",fontWeight:"600",width:"90%",maxWidth:"100%",wordWrap:"break-word",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden",textOverflow:"ellipsis",fontFamily:P+" !important"},children:null===C||void 0===C?void 0:C.title}),(0,y.jsx)("div",{style:{position:"absolute",top:"10px",right:"10px",zIndex:2},children:(0,y.jsx)(f.Z,{sx:{color:"white",fontSize:"1.3rem",filter:"drop-shadow(0 0 5px black)"}})})]}):(0,p.wxm)(b)&&(0,y.jsxs)("div",{style:{width:h,height:c},children:[(0,y.jsx)(v,{event:C,isOnFocus:I}),"87043703105"===b||"76467011883"===b||!I&&d.$w!==u[d.YP]?null:(0,y.jsx)(g,{event:C,unfocusedDisplay:!I,isOnFocus:I})]})]})}},9363:function(t,e,i){i.d(e,{$:function(){return l},s:function(){return r}});var n=i(9854),o=i(7753);function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,n.Ipo)(i)?"STRNV8MHJTF"==i?t+"?format=webp":t:t+e}function l(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const i=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],n=/\.(jpeg|jpg|gif|png|svg|webp)$/i,o=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==n&&void 0!==n&&n.test(i)?"image":null!==o&&void 0!==o&&o.test(i)?"video":void 0}},6805:function(t,e,i){i.d(e,{$I:function(){return a},$w:function(){return d},AK:function(){return r},AL:function(){return l},YP:function(){return o},me:function(){return n},rE:function(){return s}});const n="device_type",o="device_mode",r="mobile",l="tablet",a="desktop",s="portrait",d="landscape"},9821:function(t,e,i){var n=i(7753),o=i(8866),r=i(6805),l=i(9854);e.Z=function(t){const[e,i,a]=(0,o.Z)(),[s]=(0,n.j1)("whatmoreLandscapePadding"),[d]=(0,n.j1)("whatmoreShopId"),[p]=(0,n.j1)("whatmoreVideoTileSize"),[c]=(0,n.j1)("whatmoreVideoTileSizePortrait"),h=a>=1025,m="portrait"==e?c:p,x=!("portrait"!=e||!(a>=481)),f=m/100*1.3*.5,y=m/100;var u=Math.min(a,i),[g,w,v,j]=[.6*u*(16/9),.6*u,1.4,0];function b(t){return Math.round(10*t)/10}var P={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(h){const t=w*f,e=g*f;[g,w,v,j]=[e,t,(a-2*s-2*(0,l.mZU)(d))/(1.1*t),s],P[r.me]=r.$I,P[r.YP]=r.$w}else if(x){var C=.8*w,F=.8*g;"portrait"==e?(C*=y,F*=y,[g,w,v,j]=[F,C,b(a/(1.2*C)),0],P[r.me]=r.AL,P[r.YP]=r.rE):([g,w,v,j]=[F,C,(a-2*s)/(1.1*C),s],P[r.me]=r.AL,P[r.YP]=r.$w)}else{C=w,F=g;"portrait"==e?(C=C*y*.9,F=F*y*.9,[g,w,v,j]=[F,C,b(a/(1.15*C)),0],P[r.me]=r.AK,P[r.YP]=r.rE):(C=.7*w,F=.7*g,[g,w,v,j]=[F,C,(a-2*s)/(1.1*C),s],P[r.me]=r.AK,P[r.YP]=r.$w)}return[g,w,v,j,P]}},3439:function(){},7244:function(){}}]);