"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[580],{3580:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(7313),o=n(8866),i=n(7753),s=(n(9111),n(123),n(9778),n(9854)),a=n(868),l=n(9363),d=n(6417);var c=function(t){var e,n;const[c,p,u]=(0,o.Z)(),h=(0,i.MO)("whatmorePrimaryFont"),f=(0,i.MO)("whatmoreSecondaryColor"),m=(0,i.MO)("whatmoreShopId"),[x,w]=(0,r.useState)(!1),g=t.storyId,v=(0,a.V)(t.imageUrl),y=t.title,b=t.onClick,j=t.template,S=(0,s.f63)(m),k="template-stories-a"===j?"50%":"30%",z="portrait"==c?1:(0,s.Zyc)(m),C=Math.floor(t.tileSize*z),F=.12*C*(0,s.LM2)(m),E=null!==(e=(0,s.QaQ)(m))&&void 0!==e?e:h,M=null!==(n=(0,s.u2W)(m))&&void 0!==n?n:[f,S,f,S,f],N=(0,r.useRef)(0),R=(0,r.useRef)(null),L=(0,r.useRef)(null);return(0,r.useEffect)((()=>{L.current&&L.current.play()}),[]),(0,d.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,height:"fit-content",width:C*(0,s.jJ6)(m)+"px",marginLeft:"10px",marginRight:"10px",marginTop:"10px",marginBottom:"10px",cursor:"pointer"},onClick:()=>{w(!0),b(g)},className:[x?"whatmore-scale-on-tap":""].join(" "),children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:k,boxShadow:"0px 2px 1px 0px "+M[0]+"50, 0px -2px 1px 0px "+M[1]+"50, 2px 0px 1px 0px "+M[2]+"50, -2px 0px 1px 0px "+M[3]+"80, 2px -2px 1px 0px "+M[4]+"80, -2px 2px 1px 0px "+M[0]+"DA, 2px 2px 1px 0px "+M[1]+"DA, -2px -2px 1px 0px "+M[2]+"DA"},children:(0,d.jsx)("div",{className:"whatmore-story-thumbnail-wrapper",style:{flexShrink:0,objectFit:"cover",height:C+"px",width:C+"px",borderRadius:k,border:"3px solid white",backgroundColor:"#343434"===f?"#d3d3d3":f,overflow:"hidden"},children:"video"==(0,l.$)(v)?(0,d.jsx)("video",{className:"whatmore-story-thumbnail",ref:L,preload:"metadata",loop:!0,playsInline:!0,src:v,muted:!0,alt:"story image",style:{objectFit:"cover",height:C+"px",width:C+"px",backgroundColor:"white"}}):(0,d.jsx)("img",{ref:R,className:"whatmore-story-thumbnail",src:v,loading:"lazy",style:{objectFit:"cover",height:C+"px",width:C+"px",backgroundColor:"white"},alt:"story image",onError:function(){if(N.current<3){let e=(0,a.V)(t.imageUrl);R.current.src="",R.current.src=e,N.current=N.current+1}else console.log("Failed to load image after several attempts"),R.current.src="https://d2oouab8j9eigo.cloudfront.net/background_white.png"}})})}),(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"100%",marginTop:"10px"},children:(0,d.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-size",F+"px","important")},style:{textAlign:"center",color:(0,s.WS3)(m),fontFamily:E,fontWeight:"normal",lineHeight:"110%",margin:0,padding:0,overflow:"hidden",textOverflow:"ellipsis",width:"auto"},children:y.substring(0,24)})})]})},p=n(8811),u=n(9302);const h=(0,n(2575).Z)({key:"whatmore-stories-css"});var f=function(t){const[e,n,a]=(0,o.Z)(),[l]=(0,i.j1)("whatmoreLandscapePadding"),[f]=(0,i.j1)("whatmoreStoryTileSize"),[m]=(0,i.j1)("whatmoreStoryTileSizeDesktop"),[x]=(0,i.j1)("whatmoreShopId"),[w,g]=(0,r.useState)("portrait"===e?"flex-start":"center"),v=(0,r.useRef)(null);var y=t.eventsStories;const b=t.onClick,j=t.template;(0,r.useEffect)((()=>{p.$.forEach((t=>{var e;if(!(null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-stories-a"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-stories-a"]')))return;t&&(t.style.minHeight="0px")}))}),[]);const S=t=>{if(v.current){const e="left"===t?4*-C:4*C;v.current.scrollBy({left:e,behavior:"smooth"})}};(0,r.useEffect)((()=>{!function(){if(v.current){const t=v.current.scrollWidth,e=v.current.offsetWidth;g(t>e?"flex-start":"center")}}()}),[w,a]);const[k,z]=(0,r.useState)([]);(0,r.useEffect)((()=>{z(y.map((t=>t.storyset_dynamic_thumbnail?Math.floor(Math.random()*(t.events.length-1)):0)))}),[]);const C="landscape"===e?n*(m/100)*.3:a*(f/100)*.5;return(0,d.jsx)(u.C,{value:h,children:"landscape"==e&&!(0,s.DF0)(x)||"portrait"==e&&!(0,s.JaA)(x)?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:w,height:"fit-content",width:"100%"},className:"whatmore-story-horizontal-flex",ref:v,children:y.map(((t,e)=>{var n,r;const o=t.storyset_dynamic_thumbnail&&null!==(n=null===(r=t.events[k[e]])||void 0===r?void 0:r.poster_image)&&void 0!==n?n:t.thumbnail_image;return(0,d.jsx)(c,{storyId:t.id,tileSize:(0,s.OFP)(x)?100:C,onClick:t=>{b(e)},template:j,imageUrl:o,title:t.title},"whatmore-story-"+t.id)}))}),"landscape"===e&&(0,s.sMW)(x)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:()=>S("left"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",left:0},children:(0,d.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:"<"})}),(0,d.jsx)("button",{onClick:()=>S("right"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",right:0},children:(0,d.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:">"})})]})]})})}},868:function(t,e,n){n.d(e,{V:function(){return a}});var r=n(9854),o=n(7753);const i={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},a=function(t){const e=(0,o.MO)("whatmoreShopId");if(!t)return t;if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,r.zpr)(e))return t;if("AZURECDN"==(0,r.zpr)(e)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(i))if(t.includes(e))return t.replace(e,i[e]);return t}}if("BUNNYCDN"==(0,r.zpr)(e)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(s))if(t.includes(e))return t.replace(e,s[e]);return t}}return t}},9363:function(t,e,n){n.d(e,{$:function(){return s},s:function(){return i}});var r=n(9854),o=n(7753);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,r.Ipo)(n)?"STRNV8MHJTF"==n?t+"?format=webp":t:t+e}function s(t){if(t.includes("https://w-media.b-cdn.net/process-media"))return"image";const e=t.trim().split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp)$/i.test(e)?"image":/\.(mp4|mov|wmv|avi|flv|mkv)$/i.test(e)?"video":void 0}},8866:function(t,e,n){var r=n(7313);function o(){return[window.innerHeight,window.innerWidth]}e.Z=function(t){var[e,n]=o();const[i,s]=(0,r.useState)([e>n?"portrait":"landscape",e,n]);return(0,r.useLayoutEffect)((()=>{function t(){var[t,e]=o();s(t>e?["portrait",t,e]:["landscape",t,e])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),i}},9111:function(){},123:function(){},9778:function(){}}]);