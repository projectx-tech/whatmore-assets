"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[723],{51:function(e,t,n){n.d(t,{Z:function(){return i}});n(7313);var r=n(6417);var i=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"whatmore-loading-indicator"})})}},7723:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(7313),i=n(4664),o=n(7616),s=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),a=n(2575),d=n(8866),l=n(7753),u=n(7129),c=n(4136),h=(n(3439),n(4892)),f=n(9854),v=n(3933),p=n(868),w=n(342),g=n(6417);var m=function(e){const[t,n,r]=(0,d.Z)(),i=(0,l.MO)("whatmoreVideoTileSize"),{ref:o,inView:s,entry:a}=(0,v.YD)({triggerOnce:!1}),u=(0,l.MO)("whatmoreShopId"),c=(0,l.MO)("whatmoreUITheme"),m=e.event,y=(0,f.nz)(u),x=(0,w.uv)(m),j=(0,w.WN)(m);if("portrait"===t&&!x)return(0,g.jsx)(g.Fragment,{});if("landscape"===t&&!j)return(0,g.jsx)(g.Fragment,{});const b=(0,p.V)("portrait"===t?x:j),C="portrait"===t?r*(i/100):r*(i/100*.8),P="portrait"===t?C*(16/9):C*(9/16);return(0,g.jsx)("div",{ref:o,style:{margin:"0 auto",width:C,height:P,padding:"0px",borderRadius:"round"==c?"5px":"0px",boxShadow:"round"==c?y:null,borderWidth:(0,f.al)(u),borderColor:(0,f.qP)(u),overflow:"hidden",cursor:"pointer"},children:(0,g.jsx)(h.Z,{height:"100%",width:"100%",url:b,isPlaying:s,event:m})})};const y=(0,a.Z)({key:"whatmore-css-bv"});var x=function(e){const[t,n,a]=(0,d.Z)(),{whatmoreRootId:h}=((0,l.MO)("whatmorePrimaryColor"),(0,l.MO)("whatmoreShopId"),(0,l.MO)("whatmoreSecondaryColor"),(0,l.MO)("whatmoreTitleFont"),(0,r.useContext)(c.I)),f=e.events;return delete o.ZP.styles.global,(0,g.jsx)(s.C,{value:y,children:(0,g.jsx)("div",{children:(0,g.jsx)(i.x,{theme:o.ZP,cssVarsRoot:h,resetCSS:!1,children:(0,g.jsx)(u.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,g.jsx)(m,{event:f[0]})})})})})}},7129:function(e,t,n){n.d(t,{V:function(){return r}});const r=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},3175:function(e,t,n){var r=n(208),i=n(51),o=n(6417);t.Z=function(e){var t,n;const s=null!==(t=e.height)&&void 0!==t?t:"100%",a=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,o.jsxs)("div",{style:{width:a,height:s,overflow:"hidden"},children:[(0,o.jsx)(r.Od,{height:"100%",width:"100%",speed:0,startColor:"#202020",endColor:"#606060"}),(0,o.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,o.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,o.jsx)(i.Z,{})})})]})}},2887:function(e,t,n){var r=n(7313),i=(n(6422),n(3175)),o=n(6417);t.Z=function(e){var t,n,s;const[a,d]=(0,r.useState)(!1),l=r.useRef(0),u=(0,r.useRef)(null),c=null!==(t=e.timeUpdateCallback)&&void 0!==t?t:()=>{},h=null!==(n=e.height)&&void 0!==n?n:"100%",f=null!==(s=e.width)&&void 0!==s?s:"100%";return(0,r.useEffect)((()=>{l.current=0;const e=setInterval((()=>{l.current=l.current+.03,u.current&&c(l.current,5),l.current>=5&&(l.current=0)}),30);return()=>{clearInterval(e)}}),[e.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:f,height:h,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:a?"100%":"0px",height:a?"100%":"0px"},children:(0,o.jsx)("img",{ref:u,src:e.url,style:{objectFit:"cover",height:h,width:f,backgroundColor:"white"},alt:"image player",onLoad:()=>{d(!0)}})}),a?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.Z,{width:"100%",height:"100%"})]})}},4892:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7313),i=n(3933),o=n(868),s=n(8984),a=n(7300),d=(n(6422),n(2887)),l=n(6417);var u=function(e){var t,n;const o=(0,r.useRef)(null),[s,a,d]=(0,i.YD)({triggerOnce:!0}),u=null!==(t=e.height)&&void 0!==t?t:"100%",c=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,r.useEffect)((()=>{o.current&&(e.isPlaying?o.current.play():o.current.pause())}),[e.isPlaying,a]),(0,l.jsx)("div",{ref:s,style:{width:u,height:c,overflow:"hidden"},children:a?(0,l.jsx)("video",{ref:o,className:"whatmore-video-player",width:c,height:u,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:e.url,style:{backgroundColor:"white"}}):(0,l.jsx)("div",{width:c,height:u,ref:e=>{e&&e.style.setProperty("display","block","important")}})})};var c=function(e){var t,n,c;const[h,f,v]=(0,i.YD)({triggerOnce:!0});if((0,a.WJ)(e.event))return(0,l.jsx)(d.Z,{height:e.height,width:e.width,url:e.url,isPlaying:e.isPlaying,timeUpdateCallback:e.timeUpdateCallback});const p=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200;if((0,s.KE)())return(0,l.jsx)(u,{height:"100%",width:"100%",url:(0,o.V)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:p});const w=(0,r.useRef)(null),g=null!==(n=e.height)&&void 0!==n?n:"100%",m=null!==(c=e.width)&&void 0!==c?c:"100%";return(0,r.useEffect)((()=>{w.current&&(e.isPlaying?w.current.play():w.current.pause())}),[e.isPlaying,f]),(0,l.jsx)("div",{ref:h,style:{width:g,height:m,overflow:"hidden"},children:f?(0,l.jsx)("video",{ref:w,className:"whatmore-video-player",width:m,height:g,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,o.V)(e.url),style:{backgroundColor:"white"}}):(0,l.jsx)("div",{width:m,height:g,ref:e=>{e&&e.style.setProperty("display","block","important")}})})}},868:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(9854),i=n(7753);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},a=function(e){const t=(0,i.MO)("whatmoreShopId");if(e.startsWith("https://cdn.shopify.com"))return e;if("AWSCDN"==(0,r.zp)(t))return e;if("AZURECDN"==(0,r.zp)(t)){if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(o))if(e.includes(t))return e.replace(t,o[t]);return e}}if("BUNNYCDN"==(0,r.zp)(t)){if(e.includes(".b-cdn.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(s))if(e.includes(t))return e.replace(t,s[t]);return e}}return e}},342:function(e,t,n){n.d(t,{WN:function(){return i},uv:function(){return r}});const r=function(e){var t;return"event_media_urls"in e?"secondary"in e.event_media_urls?e.event_media_urls.secondary.portrait[720]:null!==(t=e.event_media_urls.primary.portrait[720])&&void 0!==t?t:null:e.event_hls_url},i=function(e){return"event_media_urls"in e?"secondary"in e.event_media_urls?e.event_media_urls.secondary.landscape[720]:e.event_media_urls.primary.landscape[720]:e.event_hls_url}},6422:function(e,t,n){var r=n(7313),i=n(7753);t.Z=function(e){const[t,n]=(0,i.j1)("muted");return(0,r.useEffect)((()=>{}),[]),[t,n]}},8866:function(e,t,n){var r=n(7313);function i(){return[window.innerHeight,window.innerWidth]}t.Z=function(e){var[t,n]=i();const[o,s]=(0,r.useState)(["portrait",t,n]);return(0,r.useLayoutEffect)((()=>{function e(){var[e,t]=i();s(e>t?["portrait",e,t]:["landscape",e,t])}return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),screen.orientation&&screen.orientation.addEventListener("change",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),screen.orientation&&screen.orientation.removeEventListener("change",e)}}),[]),o}},3439:function(){},123:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){}}]);