"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[939,956],{2835:function(e,t,n){var r=n(7891),i=n(8454),o=n(3781),a=n(664),s=n(4414);t.A=function(e){var t;const n=(0,a.Xd)("whatmoreUITheme"),[l]=(0,a.QN)("whatmoreSecondaryColor"),[m,d]=(0,a.QN)("productRatings"),u=(0,a.Xd)("whatmorePrimaryFont"),c=e.productId,h=e.fontSize,p=null!==(t=e.fontColor)&&void 0!==t?t:"gray";if(null===m||"undefined"==typeof m||!(c in m)||m[c].avgRating>5)return(0,s.jsx)(s.Fragment,{});const f=m[c].avgRating,$=m[c].totalRatings;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(f))].map(((e,t)=>(0,s.jsx)(r.A,{sx:{color:l,fontSize:h+"px"}},"star-icon"+t))),f-Math.floor(f)>.2?(0,s.jsx)(i.A,{sx:{color:l,fontSize:h+"px"}},"star-half-icon"):f-Math.floor(f)==0?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(o.A,{sx:{color:l,fontSize:h+"px"}},"star-outline-icon"),[...Array(Math.floor(5-f))].map(((e,t)=>(0,s.jsx)(o.A,{sx:{color:l,fontSize:h+"px"}},"star-outline-icon-"+t))),(0,s.jsx)("div",{children:(0,s.jsx)("div",{width:"2px"})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{backgroundColor:l,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,s.jsxs)("p",{ref:e=>{e&&(e.style.setProperty("color","white","important"),e.style.setProperty("font-size",.8*h+"px","important"),e.style.setProperty("font-family",u,"important"),e.style.setProperty("-webkit-line-clamp",2,"important"),e.style.setProperty("line-clamp",2,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",f,"\xa0"]})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{ref:e=>{e&&(e.style.setProperty("color",p,"important"),e.style.setProperty("font-size",.8*h+"px","important"),e.style.setProperty("font-family",u,"important"),e.style.setProperty("-webkit-line-clamp",2,"important"),e.style.setProperty("line-clamp",2,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+$+")"]})})]})})}},16:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(9950),i=(n(5410),n(664)),o=n(4459),a=n(4414);var s=function(e){return(0,r.useEffect)((()=>{const e=(0,o.E2)((0,i.Xd)("whatmoreSecondaryColor"));!function(e,t,n,r){const i=`rgba(${e},${t},${n},${r})`,o=`\n    @keyframes whatmore-loading-indicator-keyframe {\n      0%,\n      100% {\n        box-shadow: 0em -2.6em 0em 0em ${i}, 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7);\n      }\n      12.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.7), 1.8em -1.8em 0 0em ${i}, 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5);\n      }\n      25% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.5), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 2.5em 0em 0 0em ${i}, 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      37.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 1.75em 1.75em 0 0em ${i}, 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      50% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.7), 0em 2.5em 0 0em ${i}, -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      62.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.5), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -1.8em 1.8em 0 0em ${i}, -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      75% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -2.6em 0em 0 0em ${i}, -1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2);\n      }\n      87.5% {\n        box-shadow: 0em -2.6em 0em 0em rgba(${e}, ${t}, ${n}, 0.2), 1.8em -1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 2.5em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 1.75em 1.75em 0 0em rgba(${e}, ${t}, ${n}, 0.2), 0em 2.5em 0 0em rgba(${e}, ${t}, ${n}, 0.2), -1.8em 1.8em 0 0em rgba(${e}, ${t}, ${n}, 0.5), -2.6em 0em 0 0em rgba(${e}, ${t}, ${n}, 0.7), -1.8em -1.8em 0 0em ${i};\n      }\n    }\n  `,a=document.createElement("style");a.type="text/css",a.innerHTML=o,document.head.appendChild(a)}(e[0],e[1],e[2],.2)}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{className:"whatmore-loading-indicator"})})},l=n(8781);var m=function(e){var t,n;const r=null!==(t=e.height)&&void 0!==t?t:"100%",i=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,a.jsxs)("div",{style:{width:i,height:r,overflow:"hidden",minHeight:r,minWidth:i},children:[(0,a.jsx)(l.A,{height:r,width:i}),(0,a.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,a.jsx)(s,{})})})]})}},8781:function(e,t,n){var r=n(4414);t.A=function(e){var t,n,i;const o=null!==(t=e.height)&&void 0!==t?t:"100%",a=null!==(n=e.width)&&void 0!==n?n:"100%",s=null!==(i=e.borderRadius)&&void 0!==i?i:"10px";return(0,r.jsx)("div",{style:{height:o,width:o,borderRadius:s,overflow:"hidden",minHeight:o,minWidth:a,maxHeight:o,maxWidth:a},children:(0,r.jsx)("div",{style:{minHeight:o,minWidth:a},height:"100%",width:"100%",className:"whatmore-shimmer"})})}},4033:function(e,t,n){n.d(t,{n:function(){return r}});const r=()=>{if("undefined"!==typeof window){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&navigator.vendor.includes("Apple")}return!1}},9098:function(e,t,n){var r=n(9950),i=n(16),o=n(4414);t.A=function(e){var t,n,a;const[s,l]=(0,r.useState)(!1),m=r.useRef(0),d=(0,r.useRef)(null),u=null!==(t=e.timeUpdateCallback)&&void 0!==t?t:()=>{},c=null!==(n=e.height)&&void 0!==n?n:"100%",h=null!==(a=e.width)&&void 0!==a?a:"100%";return(0,r.useEffect)((()=>{m.current=0;const e=setInterval((()=>{m.current=m.current+.03,d.current&&u(m.current,5),m.current>=5&&(m.current=0)}),30);return()=>{clearInterval(e)}}),[e.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:h,height:"100%",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:s?"100%":"0px",height:s?"100%":"0px"},children:(0,o.jsx)("img",{ref:d,src:e.url,style:{objectFit:"cover",height:"100%",width:h,backgroundColor:"white"},alt:"image player",onLoad:()=>{l(!0)}})}),s?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.A,{width:h,height:c})]})}},9879:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(9950),i=n(6649),o=n(3788),a=n(6613),s=n(2039),l=n(9098),m=n(4033),d=n(664),u=n(6493),c=n(4414);var h=function(e){var t,n,o,s;const l=(0,r.useRef)(null),[h,p,f]=(0,i.A)({triggerOnce:!0}),$=(0,d.Xd)("whatmoreShopId"),v=null!==(t=e.height)&&void 0!==t?t:"100%",g=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,r.useEffect)((()=>{l.current&&(e.isPlaying?l.current.play():(((0,m.n)()||(0,a.At)())&&l.current.play(),"57939755089"==$?setTimeout((()=>{l.current.pause()}),300):l.current.pause()))}),[e.isPlaying,p]),(0,c.jsx)("div",{ref:h,style:{width:v,height:g,overflow:"hidden",display:"flex",alignItems:"center"},children:p||"51394281658"==$||"8968077397"==$?(0,c.jsxs)("video",{ref:l,className:"whatmore-video-player-muted",width:g,height:v,preload:"metadata",loop:!0,src:"86878257455"!=$?e.url:(0,u.yD)(e.url),playsInline:!0,poster:e.isPlaying&&1!=(null===(o=e.event)||void 0===o?void 0:o.index)&&"STRTFEDEDAP"!==$&&"STRY2V4XO5L"!==$?e.url:e.poster,muted:null===(s=e.isVideoMuted)||void 0===s||s,style:{backgroundColor:"white",borderRadius:e.borderRadius,objectFit:"cover"},children:[(0,c.jsx)("source",{src:e.url,type:"video/mp4"}),(0,c.jsx)("source",{src:(0,u.yD)(e.url),type:"video/mp4"})]}):(0,c.jsx)("div",{width:g,height:v,ref:e=>{e&&e.style.setProperty("display","block","important")}})})};var p=function(e){var t,n,m,p,f,$,v,g,y;const[b,w,x]=(0,i.A)({triggerOnce:!0}),j=(0,d.Xd)("whatmoreShopId"),_=(0,r.useRef)(null);if((0,r.useEffect)((()=>{_.current&&(e.isPlaying?_.current.play():_.current.pause())}),[e.isPlaying,w]),(0,s.Il)(e.event))return(0,c.jsx)(l.A,{height:e.height,width:e.width,url:e.url,isPlaying:e.isPlaying,timeUpdateCallback:e.timeUpdateCallback});const P=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200,A=null!==e&&void 0!==e&&null!==(n=e.event)&&void 0!==n&&null!==(m=n.poster_image)&&void 0!==m&&m.startsWith("https://cdn.shopify.com")?(null===e||void 0===e||null===(p=e.event)||void 0===p||null===(f=p.poster_image)||void 0===f?void 0:f.split("?")[0])+"?width=400&height=400":null===e||void 0===e||null===($=e.event)||void 0===$?void 0:$.poster_image;if((0,a.MN)())return(0,c.jsx)(h,{isVideoMuted:e.isVideoMuted,event:null===e||void 0===e?void 0:e.event,borderRadius:e.borderRadius,height:"100%",width:"100%",poster:A,url:(0,o.s)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:P});const C=null!==(v=e.height)&&void 0!==v?v:"100%",k=null!==(g=e.width)&&void 0!==g?g:"100%";return(0,c.jsx)("div",{ref:b,style:{width:C,height:k,overflow:"hidden",display:"flex",alignItems:"center"},children:w||"51394281658"==j||"8968077397"==j?(0,c.jsxs)("video",{ref:_,className:"whatmore-video-player-muted",width:k,height:C,preload:"metadata",loop:!0,playsInline:!0,muted:null===(y=e.isVideoMuted)||void 0===y||y,poster:"57939755089"==j?"":A,style:{backgroundColor:"white",objectFit:"cover"},children:[(0,c.jsx)("source",{src:(0,o.s)(e.url),type:"video/mp4"}),(0,c.jsx)("source",{src:(0,u.yD)(e.url),type:"video/mp4"})]}):(0,c.jsx)("div",{width:k,height:C,ref:e=>{e&&e.style.setProperty("display","block","important")}})})}},3788:function(e,t,n){n.d(t,{s:function(){return s}});var r=n(1348),i=n(664);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},a={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},s=function(e){const t=(0,i.Xd)("whatmoreShopId");if(!e)return e;if(e.startsWith("https://cdn.shopify.com"))return e;if("AWSCDN"==(0,r.CfJ)(t))return e;if("AZURECDN"==(0,r.CfJ)(t)){if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(o))if(e.includes(t))return e.replace(t,o[t]);return e}}if("BUNNYCDN"==(0,r.CfJ)(t)){if(e.includes(".b-cdn.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(a))if(e.includes(t))return e.replace(t,a[t]);return e}}return e}},6493:function(e,t,n){n.d(t,{Cr:function(){return s},cb:function(){return a},lP:function(){return o},yD:function(){return l}});var r=n(1348);const i=(0,n(664).Xd)("whatmoreShopId"),o=function(e){var t,n;return"event_media_urls"in e?"image"===e.event_type?e.event_media_urls.primary.portrait.content_image_original:"secondary"in e.event_media_urls&&e.event_media_urls.secondary.portrait.content_video_1080p?e.event_media_urls.secondary.portrait.content_video_1080p:null!==(t=e.event_media_urls.primary.portrait.content_video_1080p)&&void 0!==t?t:null===(n=e.event_media_urls.primary.landscape)||void 0===n?void 0:n.content_video_1080p:e.event_hls_url},a=function(e){var t;return"event_media_urls"in e?"image"===e.event_type?e.event_media_urls.primary.landscape.content_image_original:"secondary"in e.event_media_urls&&e.event_media_urls.secondary.landscape.content_video_1080p?e.event_media_urls.secondary.landscape.content_video_1080p:null!==(t=e.event_media_urls.primary.landscape.content_video_1080p)&&void 0!==t?t:e.event_media_urls.primary.portrait.content_video_1080p:e.event_hls_url},s=function(e){if(e.startsWith("https://cdn.shopify.com")&&e.includes("whatmore_")){const t=(0,r.ath)(i);if(!t)return e;return`https://whatmore-brand-video-assets-720p.b-cdn.net/${t}/${e.split("whatmore_")[1].split("?")[0]}`}return e},l=function(e){if(e.startsWith("https://cdn.shopify.com")&&e.includes("whatmore_")){const t=(0,r.ath)(i);if(!t)return e;return`https://whatmore-brand-thumbnail-video-assets.b-cdn.net/${t}/${e.split("whatmore_")[1].split("?")[0]}`}return e}},7973:function(e,t,n){n.d(t,{B:function(){return a},b:function(){return o}});var r=n(1348),i=n(664);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,i.Xd)("whatmoreShopId");return"shopify"!=(0,r.NCy)(n)?"STRNV8MHJTF"==n?e+"?format=webp":e:e+t}function a(e){var t;if(null!==e&&void 0!==e&&e.includes("https://w-media.b-cdn.net/process-media"))return"image";const n=null===e||void 0===e||null===(t=e.trim())||void 0===t?void 0:t.split("?")[0],r=/\.(jpeg|jpg|gif|png|svg|webp)$/i,i=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==r&&void 0!==r&&r.test(n)?"image":null!==i&&void 0!==i&&i.test(n)?"video":void 0}},7458:function(e,t,n){n.d(t,{P:function(){return r}});const r=function(e,t){return!(isNaN(t)||!t||("string"===typeof t||t instanceof String)&&!t.trim().length)&&!(parseInt(t)<=parseInt(e))}},2209:function(e,t,n){var r=n(5709);t.A=void 0;var i=r(n(9526)),o=n(4414),a=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");t.A=a},5727:function(e,t,n){var r=n(5709);t.A=void 0;var i=r(n(9526)),o=n(4414),a=(0,i.default)((0,o.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.A=a},7891:function(e,t,n){var r=n(5709);t.A=void 0;var i=r(n(9526)),o=n(4414),a=(0,i.default)((0,o.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.A=a},8454:function(e,t,n){var r=n(5709);t.A=void 0;var i=r(n(9526)),o=n(4414),a=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");t.A=a},3781:function(e,t,n){var r=n(5709);t.A=void 0;var i=r(n(9526)),o=n(4414),a=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");t.A=a},5410:function(){},4365:function(){},9733:function(){},7229:function(){},4669:function(){},6042:function(){},9130:function(){}}]);