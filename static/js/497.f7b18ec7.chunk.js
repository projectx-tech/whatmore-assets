"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[497],{51:function(t,n,e){e.d(n,{Z:function(){return r}});e(7313);var i=e(6417);var r=function(t){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"whatmore-loading-indicator"})})}},9262:function(t,n,e){e(7313),e(9821),e(2634),e(6417)},9158:function(t,n,e){var i=e(3271),r=e(5098),o=e(7313),a=e(9821),l=e(2634),s=e(5180),d=e(1868),c=e(9543),u=e(7129),h=e(6417);n.Z=function(t){var n,e,[f,x]=(0,a.Z)();const[p]=(0,c.j1)("whatmorePrimaryFont");var g=(0,o.useContext)(u.V);const m=t.event,w=t.onClick,v=null===(n=t.isOnFocus)||void 0===n||n,j=(t.playOnUnfocus,null!==(e=t.animateOnFocus)&&void 0!==e&&e);return(0,h.jsxs)(i.xu,{animation:j?v?d.L:d.K:"none",marginTop:g.tileTopMargin,marginBottom:g.tileBottomMMargin,marginLeft:g.tileLeftMargin,marginRight:g.tileRightMargin,width:x,height:f,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{w(m)},cursor:"pointer",children:[(0,h.jsx)(r.Ee,{width:"full",height:"full",src:m.thumbnail_image,objectFit:"cover",fallback:(0,h.jsx)(s.Z,{width:x,height:f}),borderRadius:"lg"}),(0,h.jsx)(i.xu,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,h.jsxs)(i.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,h.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,h.jsx)(i.Kq,{direction:"column",justifyContent:"flex-start",children:(0,h.jsx)(i.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,h.jsx)(i.Kq,{direction:"row",justifyContent:"space-between",children:(0,h.jsx)(l.Z,{event:m,fontSize:.05*f+"px",maxWidth:.8*x})})})})}),(0,h.jsx)(i.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,h.jsx)(i.Kq,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,h.jsx)(i.xu,{width:"full",borderRadius:"lg",children:(0,h.jsxs)(i.Kq,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,h.jsx)(i.xv,{color:"white",fontSize:.08*x+"px",fontWeight:"normal",align:"left",children:"         "}),(0,h.jsx)(i.xv,{fontSize:.08*x+"px",fontWeight:"normal",align:"left",sx:{fontFamily:p+" !important",color:"white !important"},children:m.title.substring(0,40)}),(0,h.jsx)(i.xv,{fontSize:.08*x+"px",fontWeight:"bold",align:"left",sx:{fontFamily:p+" !important",color:"white !important"},children:m.presenter_name.substring(0,15)})]})})})})]})})]})}},1868:function(t,n,e){e.d(n,{K:function(){return c},L:function(){return d}});var i,r,o=e(168),a=e(686);const l=(0,a.F4)(i||(i=(0,o.Z)(["\n    0% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(1.05);\n    }\n"]))),s=(0,a.F4)(r||(r=(0,o.Z)(["\n    0% {\n        transform: scale(1.05);\n    }\n    100% {\n        transform: scale(1);\n    }\n"]))),d="\n    ".concat(l,"; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n"),c="\n    ".concat(s,"; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n")},7758:function(t,n,e){var i=e(3271),r=e(237),o=e(9854),a=e(9543),l=e(6417);function s(t){return t<1e3?t:t<1e5?(t/1e3).toFixed(0)+"K":(t/1e5).toFixed(0)+"L"}n.Z=function(t){const n=(0,a.MO)("whatmoreShopId"),e=(0,a.MO)("whatmoreUITheme"),d=(0,a.MO)("whatmorePrimaryFont"),c=t.event,u=t.fontSize;if(c.total_views<=0)return(0,l.jsx)(l.Fragment,{});const h=(0,o.S_)(n);return"template-icon"==h?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.xu,{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",sx:{borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,l.jsxs)(i.kC,{direction:"row",justifyContent:"center",gap:"3px",alignItems:"center",children:[(0,l.jsx)(i.M5,{children:(0,l.jsx)(r.Z,{sx:{color:(0,o.aL)(n)+" !important",fontSize:u,fontWeight:"normal"}})}),(0,l.jsx)(i.xv,{sx:{color:(0,o.aL)(n)+" !important",fontSize:u+" !important",fontWeight:"normal",lineHeight:"120% !important",fontFamily:d+" !important"},children:" "+s(c.total_views)+" "})]})})}):"template-text"==h?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.xu,{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,o.XC)(n),color:"white",sx:{borderRadius:"round"==e?"5px":"0px",borderWidth:(0,o.al)(n),borderColor:(0,o.qP)(n)},children:(0,l.jsx)(i.kC,{direction:"row",justifyContent:"center",gap:"3px",alignItems:"center",children:(0,l.jsx)(i.xv,{sx:{color:(0,o.aL)(n)+" !important",fontSize:u+" !important",fontWeight:"bold",lineHeight:"120% !important",fontFamily:d+" !important"},children:" "+s(c.total_views)+" views"})})})}):(0,l.jsx)(l.Fragment,{})}},7129:function(t,n,e){e.d(n,{V:function(){return i}});const i=(0,e(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},3175:function(t,n,e){var i=e(208),r=e(51),o=e(6417);n.Z=function(t){var n,e;const a=null!==(n=t.height)&&void 0!==n?n:"100%",l=null!==(e=t.width)&&void 0!==e?e:"100%";return(0,o.jsxs)("div",{style:{width:l,height:a,overflow:"hidden"},children:[(0,o.jsx)(i.Od,{height:"100%",width:"100%",speed:.5,startColor:"#202020",endColor:"#606060"}),(0,o.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,o.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,o.jsx)(r.Z,{})})})]})}},5945:function(t,n,e){function i(t){return"undefined"==typeof t||"undefined"==t||null==t?"":t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}e.d(n,{s:function(){return i}})},2887:function(t,n,e){var i=e(7313),r=(e(6422),e(3175)),o=e(6417);n.Z=function(t){var n,e,a;const[l,s]=(0,i.useState)(!1),d=i.useRef(0),c=(0,i.useRef)(null),u=null!==(n=t.timeUpdateCallback)&&void 0!==n?n:()=>{},h=null!==(e=t.height)&&void 0!==e?e:"100%",f=null!==(a=t.width)&&void 0!==a?a:"100%";return(0,i.useEffect)((()=>{d.current=0;const t=setInterval((()=>{d.current=d.current+.03,c.current&&u(d.current,5),d.current>=5&&(d.current=0)}),30);return()=>{clearInterval(t)}}),[t.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:f,height:h,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:l?"100%":"0px",height:l?"100%":"0px"},children:(0,o.jsx)("img",{ref:c,src:t.url,style:{objectFit:"cover",height:h,width:f,backgroundColor:"white"},alt:"image player",onLoad:()=>{s(!0)}})}),l?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(r.Z,{width:"100%",height:"100%"})]})}},4892:function(t,n,e){e.d(n,{Z:function(){return u}});var i=e(7313),r=e(3933),o=e(868),a=e(8984),l=e(7300),s=(e(6422),e(2887)),d=e(6417);var c=function(t){var n,e;const o=(0,i.useRef)(null),[a,l,s]=(0,r.YD)({triggerOnce:!0}),c=null!==(n=t.height)&&void 0!==n?n:"100%",u=null!==(e=t.width)&&void 0!==e?e:"100%";return(0,i.useEffect)((()=>{o.current&&(t.isPlaying?o.current.play():o.current.pause())}),[t.isPlaying,l]),(0,d.jsx)("div",{ref:a,style:{width:c,height:u,overflow:"hidden"},children:l?(0,d.jsx)("video",{ref:o,className:"whatmore-video-player",width:u,height:c,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:t.url,style:{backgroundColor:"white"}}):(0,d.jsx)(d.Fragment,{})})};var u=function(t){var n,e,u;const[h,f,x]=(0,r.YD)({triggerOnce:!0});if((0,l.WJ)(t.event))return(0,d.jsx)(s.Z,{height:t.height,width:t.width,url:t.url,isPlaying:t.isPlaying,timeUpdateCallback:t.timeUpdateCallback});const p=null!==(n=t.pauseFromPlayTimeInMs)&&void 0!==n?n:200;if((0,a.KE)())return(0,d.jsx)(c,{height:"100%",width:"100%",url:(0,o.V)(t.url),isPlaying:t.isPlaying,pauseFromPlayTimeInMs:p});const g=(0,i.useRef)(null),m=null!==(e=t.height)&&void 0!==e?e:"100%",w=null!==(u=t.width)&&void 0!==u?u:"100%";return(0,i.useEffect)((()=>{g.current&&(t.isPlaying?g.current.play():g.current.pause())}),[t.isPlaying,f]),(0,d.jsx)("div",{ref:h,style:{width:m,height:w,overflow:"hidden"},children:f?(0,d.jsx)("video",{ref:g,className:"whatmore-video-player",width:w,height:m,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,o.V)(t.url),style:{backgroundColor:"white"}}):(0,d.jsx)(d.Fragment,{})})}},9263:function(t,n,e){e.d(n,{Z:function(){return z}});var i,r=e(3271),o=e(6336),a=e(7313),l=e(9821),s=e(7758),d=e(1868),c=e(9723),u=e(168),h=e(5098),f=e(686),x=e(9543),p=e(5180),g=e(5945),m=e(6417);const w=(0,f.F4)(i||(i=(0,u.Z)(["\n    0% { \n        opacity: 1;\n        transform: translateY(100%);\n    }\n    10%{\n        transform: translateY(0%);\n    }\n    12%{\n        transform: translateY(-5%);\n    }\n    20%{\n        transform: translateY(0%);\n    }\n"]))),v="\n    ".concat(w," ").concat(3,"s ease-in-out;\n");var j=function(t){var[n,e]=(0,l.Z)();const[i]=(0,x.j1)("whatmorePrimaryFont"),[o]=(0,x.j1)("whatmorePrimaryColor"),[s]=(0,x.j1)("whatmoreSecondaryColor"),[d,c]=(0,a.useState)(0),u=t.event,f=u.products.length;if(0==f)return(0,m.jsx)(m.Fragment,{});(0,a.useEffect)((()=>{const t=setInterval((()=>{c((t=>(t+1)%f))}),3e3);return()=>{clearInterval(t)}}),[]);const w=.3*e,j=w+"px",b=w+"px",y=.08*e+"px";return(0,m.jsx)(r.xu,{width:e+"px",height:"fit-content",bgGradient:"linear(to-b, transparent,  blackAlpha.500, blackAlpha.600, blackAlpha.700, blackAlpha.800)",children:(0,m.jsxs)(r.Kq,{direction:"row",width:"100%",height:"fit-content",justifyContent:"space-between",alignContent:"center",paddingX:"5px",paddingY:"5px",animation:v,children:[(0,m.jsx)(r.xu,{width:j,height:b,boxShadow:"dark-lg",borderRadius:"lg",overflow:"hidden",backgroundColor:"gray.100",children:(0,m.jsx)(h.Ee,{width:j,height:b,src:u.products[d].thumbnail_image,objectFit:"cover",fallback:(0,m.jsx)(p.Z,{width:"100%",height:"100%"}),borderRadius:"lg"})}),(0,m.jsx)(r.xu,{width:e-5-w+"px",height:b,borderRadius:"lg",overflow:"visible",children:(0,m.jsx)(r.Kq,{direction:"column",width:"100%",height:"100%",justifyContent:"center",alignContent:"flex-end",children:(0,m.jsx)(r.xv,{noOfLines:2,fontWeight:"normal",align:"left",sx:{fontFamily:i+" !important",color:"white !important",fontSize:y+" !important"},children:(0,g.s)(u.products[d].title)})})})]},d)})},b=e(4892),y=e(7129),C=e(6805),k=e(9854);function F(t){var n,[e,i]=(0,l.Z)();const[s]=(0,x.j1)("whatmoreShopId");var d=(0,a.useContext)(y.V);const u=t.event,h=null!==(n=t.unfocusedDisplay)&&void 0!==n&&n,f=.5*i;return(0,m.jsx)(r.xu,{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-fixes",backgroundColor:"transparent",children:(0,m.jsxs)(r.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!0,delay:1,children:(0,m.jsx)(r.xv,{children:"    "})}),d.showPlayButton&&!h?(0,m.jsx)(r.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",style:{position:"relative",top:"10%",overflow:"hidden"},children:(0,m.jsx)(r.Kq,{direction:"row",justifyContent:"center",children:(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!0,delay:2,children:(0,m.jsx)(c.Z,{sx:{color:"#F5F5F5 !important",opacity:.8,fontSize:f,filter:"drop-shadow(0 0 15px black);"}})})})}):(0,m.jsx)(m.Fragment,{}),(0,k.PW)(s)?(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!0,delay:1,children:(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!0,delay:1,children:(0,m.jsx)(j,{event:u})})}):(0,m.jsx)(r.xu,{height:"20px"})]})})}function R(t){var[n,e]=(0,l.Z)();const[i]=(0,x.j1)("whatmorePrimaryFont"),o=t.event;return o.title.trim().length?(0,m.jsx)(r.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.500, blackAlpha.600, blackAlpha.700, blackAlpha.800)",children:(0,m.jsx)(r.Kq,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,m.jsx)(r.xu,{width:"full",borderRadius:"lg",padding:"2px",children:(0,m.jsxs)(r.Kq,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,m.jsx)(r.xv,{color:"white",fontSize:.08*e+"px",fontWeight:"normal",align:"left",children:"         "}),(0,m.jsx)(r.xv,{fontSize:.08*e+"px",fontWeight:"normal",align:"left",sx:{fontFamily:i+" !important",color:"white !important"},children:o.title.substring(0,60)})]})})})}):(0,m.jsx)(m.Fragment,{})}function Z(t){const[n,e,i,a,d]=(0,l.Z)(),[c]=(0,x.j1)("whatmoreShowViews"),u=t.event,h=t.isOnFocus;return(0,m.jsx)(r.xu,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-fixes",backgroundColor:"transparent",children:(0,m.jsxs)(r.Kq,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,m.jsx)(r.xu,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent, blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,m.jsx)(r.Kq,{direction:"column",justifyContent:"flex-start",children:"show"===c?(0,m.jsx)(r.xu,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,m.jsx)(r.Kq,{direction:"row",justifyContent:"space-between",children:(0,m.jsx)(s.Z,{event:u,fontSize:.07*e+"px"})})}):(0,m.jsx)(m.Fragment,{})})}),C.$w===d[C.YP]?(0,m.jsx)(m.Fragment,{}):h?(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!1,delay:1,children:(0,m.jsx)(R,{event:u})}):(0,m.jsx)(o.Rg,{unmountOnExit:!0,in:!0,delay:.5,children:(0,m.jsx)(R,{event:u})})]})})}var z=function(t){var n,e,i;const[o,s,c,u,h]=(0,l.Z)();var f=(0,a.useContext)(y.V);const x=t.event,p=t.onClick,g=null===(n=t.isOnFocus)||void 0===n||n,w=null!==(e=t.playOnUnfocus)&&void 0!==e&&e,v=null!==(i=t.animateOnFocus)&&void 0!==i&&i;return(0,m.jsxs)(r.xu,{animation:v?g?d.L:d.K:"none",marginTop:f.tileTopMargin,marginBottom:f.tileBottomMMargin,marginLeft:f.tileLeftMargin,marginRight:f.tileRightMargin,width:s,height:o,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{p(x)},cursor:"pointer",children:[(0,m.jsx)(b.Z,{height:"100%",width:"100%",url:x.thumbnail_image,isPlaying:g||w,event:x}),(0,m.jsxs)(r.xu,{width:s,height:o,children:[(0,m.jsx)(Z,{event:x,isOnFocus:g}),g||C.$w===h[C.YP]?(0,m.jsx)(F,{event:x,unfocusedDisplay:!g}):null]})]})}},868:function(t,n,e){e.d(n,{V:function(){return l}});var i=e(9854),r=e(9543);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net"},a={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net"},l=function(t){const n=(0,r.MO)("whatmoreShopId");if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,i.zp)(n))return t;if("AZURECDN"==(0,i.zp)(n)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const n of Object.keys(o))if(t.includes(n))return t.replace(n,o[n]);return t}}if("BUNNYCDN"==(0,i.zp)(n)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const n of Object.keys(a))if(t.includes(n))return t.replace(n,a[n]);return t}}return t}},6805:function(t,n,e){e.d(n,{$I:function(){return l},$w:function(){return d},AK:function(){return o},AL:function(){return a},YP:function(){return r},me:function(){return i},rE:function(){return s}});const i="device_type",r="device_mode",o="mobile",a="tablet",l="desktop",s="portrait",d="landscape"},6422:function(t,n,e){var i=e(7313),r=e(7371);const{useGlobalState:o}=(0,r.r)({muted:!1});n.Z=function(t){const[n,e]=o("muted");return(0,i.useEffect)((()=>{}),[]),[n,e]}},8866:function(t,n,e){var i=e(7313);function r(){return[window.innerHeight,window.innerWidth]}n.Z=function(t){var[n,e]=r();const[o,a]=(0,i.useState)(["portrait",n,e]);return(0,i.useLayoutEffect)((()=>{function t(){var[t,n]=r();a(t>n?["portrait",t,n]:["landscape",t,n])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),o}},9821:function(t,n,e){var i=e(6367),r=e(9543),o=e(8866),a=e(6805);n.Z=function(t){const[n,e,l]=(0,o.Z)(),[s]=(0,r.j1)("whatmoreLandscapePadding"),[d]=(0,r.j1)("whatmoreVideoTileSize"),c=(0,i.useMediaQuery)({query:"(min-width: 1025px)"}),u=(0,i.useMediaQuery)({query:"(min-width: 481px)"}),h=!("portrait"!=n||!u),f=d/100;var x=Math.min(l,e),[p,g,m,w]=[.6*x*(16/9),.6*x,1.4,0];function v(t){return Math.round(10*t)/10}var j={DEVICE_TYPE:a.AK,DEVICE_MODE:a.rE};if(c){const t=.5*g,n=.5*p;[p,g,m,w]=[n,t,(l-2*s)/(1.1*t),s],j[a.me]=a.$I,j[a.YP]=a.$w}else if(h){var b=.8*g,y=.8*p;"portrait"==n?(b*=f,y*=f,[p,g,m,w]=[y,b,v(l/(1.2*b)),0],j[a.me]=a.AL,j[a.YP]=a.rE):([p,g,m,w]=[y,b,(l-2*s)/(1.1*b),s],j[a.me]=a.AL,j[a.YP]=a.$w)}else{b=g,y=p;"portrait"==n?(b*=f,y*=f,[p,g,m,w]=[y,b,v(l/(1.2*b)),0],j[a.me]=a.AK,j[a.YP]=a.rE):(b=.7*g,y=.7*p,[p,g,m,w]=[y,b,(l-2*s)/(1.1*b),s],j[a.me]=a.AK,j[a.YP]=a.$w)}return[p,g,m,w,j]}},9723:function(t,n,e){var i=e(5318);n.Z=void 0;var r=i(e(5045)),o=e(6417),a=(0,r.default)((0,o.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");n.Z=a},237:function(t,n,e){var i=e(5318);n.Z=void 0;var r=i(e(5045)),o=e(6417),a=(0,r.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=a},123:function(){},7244:function(){},6143:function(){}}]);