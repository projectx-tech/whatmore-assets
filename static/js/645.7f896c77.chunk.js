"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[645],{51:function(t,e,n){n.d(e,{Z:function(){return i}});n(7313);var r=n(6417);var i=function(t){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"whatmore-loading-indicator"})})}},1092:function(t,e,n){var r=n(237),i=n(9854),o=n(9543),s=n(6417);function a(t){return t<1e3?t:t<1e5?(t/1e3).toFixed(0)+"K":(t/1e5).toFixed(0)+"L"}e.Z=function(t){const e=(0,o.MO)("whatmoreShopId"),n=(0,o.MO)("whatmoreUITheme"),l=(0,o.MO)("whatmorePrimaryFont"),d=t.event,u=t.fontSize;if(d.total_views<=0)return(0,s.jsx)(s.Fragment,{});const c=(0,i.S_)(e);return"template-icon"==c?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,i.XC)(e),color:"white",borderRadius:"round"==n?"5px":"0px",borderWidth:(0,i.al)(e),borderColor:(0,i.qP)(e)},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)(r.Z,{sx:{color:(0,i.aL)(e)+" !important",fontSize:u,fontWeight:"normal"}})}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,i.aL)(e),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",l,"important"),t.style.setProperty("font-size",u,"important"))},style:{fontWeight:"normal"},children:" "+a(d.total_views)+" "})})]})})}):"template-text"==c?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{width:"fit-content",padding:"2px",paddingLeft:"6px",paddingRight:"6px",backgroundColor:(0,i.XC)(e),color:"white",borderRadius:"round"==n?"5px":"0px",borderWidth:(0,i.al)(e),borderColor:(0,i.qP)(e)},children:(0,s.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",gap:"3px",alignItems:"center"},children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,i.aL)(e),"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",l,"important"))},style:{fontSize:u,fontWeight:"bold"},children:" "+a(d.total_views)+" views"})})})})}):void 0}},7129:function(t,e,n){n.d(e,{V:function(){return r}});const r=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},3175:function(t,e,n){var r=n(208),i=n(51),o=n(6417);e.Z=function(t){var e,n;const s=null!==(e=t.height)&&void 0!==e?e:"100%",a=null!==(n=t.width)&&void 0!==n?n:"100%";return(0,o.jsxs)("div",{style:{width:a,height:s,overflow:"hidden"},children:[(0,o.jsx)(r.Od,{height:"100%",width:"100%",speed:.5,startColor:"#202020",endColor:"#606060"}),(0,o.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,o.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,o.jsx)(i.Z,{})})})]})}},5945:function(t,e,n){function r(t){return"undefined"==typeof t||"undefined"==t||null==t?"":t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}n.d(e,{s:function(){return r}})},2887:function(t,e,n){var r=n(7313),i=(n(6422),n(3175)),o=n(6417);e.Z=function(t){var e,n,s;const[a,l]=(0,r.useState)(!1),d=r.useRef(0),u=(0,r.useRef)(null),c=null!==(e=t.timeUpdateCallback)&&void 0!==e?e:()=>{},h=null!==(n=t.height)&&void 0!==n?n:"100%",f=null!==(s=t.width)&&void 0!==s?s:"100%";return(0,r.useEffect)((()=>{d.current=0;const t=setInterval((()=>{d.current=d.current+.03,u.current&&c(d.current,5),d.current>=5&&(d.current=0)}),30);return()=>{clearInterval(t)}}),[t.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:f,height:h,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:a?"100%":"0px",height:a?"100%":"0px"},children:(0,o.jsx)("img",{ref:u,src:t.url,style:{objectFit:"cover",height:h,width:f,backgroundColor:"white"},alt:"image player",onLoad:()=>{l(!0)}})}),a?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.Z,{width:"100%",height:"100%"})]})}},4892:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7313),i=n(3933),o=n(868),s=n(8984),a=n(7300),l=(n(6422),n(2887)),d=n(6417);var u=function(t){var e,n;const o=(0,r.useRef)(null),[s,a,l]=(0,i.YD)({triggerOnce:!0}),u=null!==(e=t.height)&&void 0!==e?e:"100%",c=null!==(n=t.width)&&void 0!==n?n:"100%";return(0,r.useEffect)((()=>{o.current&&(t.isPlaying?o.current.play():o.current.pause())}),[t.isPlaying,a]),(0,d.jsx)("div",{ref:s,style:{width:u,height:c,overflow:"hidden"},children:a?(0,d.jsx)("video",{ref:o,className:"whatmore-video-player",width:c,height:u,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:t.url,style:{backgroundColor:"white"}}):(0,d.jsx)("div",{width:c,height:u,ref:t=>{t&&t.style.setProperty("display","block","important")}})})};var c=function(t){var e,n,c;const[h,f,p]=(0,i.YD)({triggerOnce:!0});if((0,a.WJ)(t.event))return(0,d.jsx)(l.Z,{height:t.height,width:t.width,url:t.url,isPlaying:t.isPlaying,timeUpdateCallback:t.timeUpdateCallback});const g=null!==(e=t.pauseFromPlayTimeInMs)&&void 0!==e?e:200;if((0,s.KE)())return(0,d.jsx)(u,{height:"100%",width:"100%",url:(0,o.V)(t.url),isPlaying:t.isPlaying,pauseFromPlayTimeInMs:g});const m=(0,r.useRef)(null),v=null!==(n=t.height)&&void 0!==n?n:"100%",w=null!==(c=t.width)&&void 0!==c?c:"100%";return(0,r.useEffect)((()=>{m.current&&(t.isPlaying?m.current.play():m.current.pause())}),[t.isPlaying,f]),(0,d.jsx)("div",{ref:h,style:{width:v,height:w,overflow:"hidden"},children:f?(0,d.jsx)("video",{ref:m,className:"whatmore-video-player",width:w,height:v,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,o.V)(t.url),style:{backgroundColor:"white"}}):(0,d.jsx)("div",{width:w,height:v,ref:t=>{t&&t.style.setProperty("display","block","important")}})})}},1855:function(t,e,n){var r=n(7313),i=n(9821),o=n(7129),s=n(6417);e.Z=function(t){var[e,n]=(0,i.Z)(),a=(0,r.useContext)(o.V);return t.event,(0,s.jsx)("div",{style:{marginTop:a.tileTopMargin,marginBottom:a.tileBottomMMargin,marginLeft:a.tileLeftMargin,marginRight:a.tileRightMargin,width:n,height:e,overflow:"hidden"}})}},868:function(t,e,n){n.d(e,{V:function(){return a}});var r=n(9854),i=n(9543);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net"},a=function(t){const e=(0,i.MO)("whatmoreShopId");if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,r.zp)(e))return t;if("AZURECDN"==(0,r.zp)(e)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(o))if(t.includes(e))return t.replace(e,o[e]);return t}}if("BUNNYCDN"==(0,r.zp)(e)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(s))if(t.includes(e))return t.replace(e,s[e]);return t}}return t}},6805:function(t,e,n){n.d(e,{$I:function(){return a},$w:function(){return d},AK:function(){return o},AL:function(){return s},YP:function(){return i},me:function(){return r},rE:function(){return l}});const r="device_type",i="device_mode",o="mobile",s="tablet",a="desktop",l="portrait",d="landscape"},6422:function(t,e,n){var r=n(7313),i=n(7371);const{useGlobalState:o}=(0,i.r)({muted:!1});e.Z=function(t){const[e,n]=o("muted");return(0,r.useEffect)((()=>{}),[]),[e,n]}},8866:function(t,e,n){var r=n(7313);function i(){return[window.innerHeight,window.innerWidth]}e.Z=function(t){var[e,n]=i();const[o,s]=(0,r.useState)(["portrait",e,n]);return(0,r.useLayoutEffect)((()=>{function t(){var[t,e]=i();s(t>e?["portrait",t,e]:["landscape",t,e])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),o}},9821:function(t,e,n){var r=n(6367),i=n(9543),o=n(8866),s=n(6805);e.Z=function(t){const[e,n,a]=(0,o.Z)(),[l]=(0,i.j1)("whatmoreLandscapePadding"),[d]=(0,i.j1)("whatmoreVideoTileSize"),u=(0,r.useMediaQuery)({query:"(min-width: 1025px)"}),c=(0,r.useMediaQuery)({query:"(min-width: 481px)"}),h=!("portrait"!=e||!c),f=d/100;var p=Math.min(a,n),[g,m,v,w]=[.6*p*(16/9),.6*p,1.4,0];function y(t){return Math.round(10*t)/10}var x={DEVICE_TYPE:s.AK,DEVICE_MODE:s.rE};if(u){const t=.5*m,e=.5*g;[g,m,v,w]=[e,t,(a-2*l)/(1.1*t),l],x[s.me]=s.$I,x[s.YP]=s.$w}else if(h){var j=.8*m,b=.8*g;"portrait"==e?(j*=f,b*=f,[g,m,v,w]=[b,j,y(a/(1.2*j)),0],x[s.me]=s.AL,x[s.YP]=s.rE):([g,m,v,w]=[b,j,(a-2*l)/(1.1*j),l],x[s.me]=s.AL,x[s.YP]=s.$w)}else{j=m,b=g;"portrait"==e?(j*=f,b*=f,[g,m,v,w]=[b,j,y(a/(1.2*j)),0],x[s.me]=s.AK,x[s.YP]=s.rE):(j=.7*m,b=.7*g,[g,m,v,w]=[b,j,(a-2*l)/(1.1*j),l],x[s.me]=s.AK,x[s.YP]=s.$w)}return[g,m,v,w,x]}},237:function(t,e,n){var r=n(5318);e.Z=void 0;var i=r(n(5045)),o=n(6417),s=(0,i.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=s},123:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){}}]);