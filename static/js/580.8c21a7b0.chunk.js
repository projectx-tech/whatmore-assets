"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[580],{3580:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var r=n(7313),o=n(8866),i=n(7753),s=(n(9111),n(123),n(9778),n(9854)),a=n(868),l=n(6417);var d=function(t){var e,n;const[d,c,p]=(0,o.Z)(),h=(0,i.MO)("whatmorePrimaryFont"),u=(0,i.MO)("whatmoreSecondaryColor"),f=(0,i.MO)("whatmoreShopId"),[x,m]=(0,r.useState)(!1),w=t.storyId,g=(0,a.V)(t.imageUrl),y=t.title,b=t.onClick,v=t.template,j=(0,s.f63)(f),k="template-stories-a"===v?"50%":"30%",S="portrait"==d?1:(0,s.Zyc)(f),z=Math.floor(t.tileSize*S),C=.12*z*(0,s.LM2)(f),F=null!==(e=(0,s.QaQ)(f))&&void 0!==e?e:h,E=null!==(n=(0,s.u2W)(f))&&void 0!==n?n:[u,j,u,j,u],L=(0,r.useRef)(0),N=(0,r.useRef)(null);return(0,l.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,height:"fit-content",width:z*(0,s.jJ6)(f)+"px",marginLeft:"10px",marginRight:"10px",marginTop:"10px",marginBottom:"10px",cursor:"pointer"},onClick:()=>{m(!0),b(w)},className:[x?"whatmore-scale-on-tap":""].join(" "),children:[(0,l.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:k,boxShadow:"0px 2px 1px 0px "+E[0]+"50, 0px -2px 1px 0px "+E[1]+"50, 2px 0px 1px 0px "+E[2]+"50, -2px 0px 1px 0px "+E[3]+"80, 2px -2px 1px 0px "+E[4]+"80, -2px 2px 1px 0px "+E[0]+"DA, 2px 2px 1px 0px "+E[1]+"DA, -2px -2px 1px 0px "+E[2]+"DA"},children:(0,l.jsx)("div",{className:"whatmore-story-thumbnail-wrapper",style:{flexShrink:0,objectFit:"cover",height:z+"px",width:z+"px",borderRadius:k,border:"3px solid white",backgroundColor:"#343434"===u?"#d3d3d3":u,overflow:"hidden"},children:(0,l.jsx)("img",{ref:N,className:"whatmore-story-thumbnail",src:g,loading:"lazy",style:{objectFit:"cover",height:z+"px",width:z+"px",backgroundColor:"white"},alt:"story image",onError:function(){if(L.current<3){let e=(0,a.V)(t.imageUrl);N.current.src="",N.current.src=e,L.current=L.current+1}else console.log("Failed to load image after several attempts"),N.current.src="https://d2oouab8j9eigo.cloudfront.net/background_white.png"}})})}),(0,l.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"100%",marginTop:"10px"},children:(0,l.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-size",C+"px","important")},style:{textAlign:"center",color:(0,s.WS3)(f),fontFamily:F,fontWeight:"normal",lineHeight:"110%",margin:0,padding:0,overflow:"hidden",textOverflow:"ellipsis",width:"auto"},children:y.substring(0,24)})})]})},c=n(9039),p=n(9302);const h=(0,n(2575).Z)({key:"whatmore-stories-css"});var u=function(t){const[e,n,a]=(0,o.Z)(),[u]=(0,i.j1)("whatmoreLandscapePadding"),[f]=(0,i.j1)("whatmoreStoryTileSize"),[x]=(0,i.j1)("whatmoreStoryTileSizeDesktop"),[m]=(0,i.j1)("whatmoreShopId"),[w,g]=(0,r.useState)("portrait"===e?"flex-start":"center"),y=(0,r.useRef)(null);var b=t.eventsStories;const v=t.onClick,j=t.template;(0,r.useEffect)((()=>{c.$.forEach((t=>{var e;if(!(null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-stories-a"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-stories-a"]')))return;t&&(t.style.minHeight="0px")}))}),[]);const k=t=>{if(y.current){const e="left"===t?4*-S:4*S;y.current.scrollBy({left:e,behavior:"smooth"})}};(0,r.useEffect)((()=>{!function(){if(y.current){const t=y.current.scrollWidth,e=y.current.offsetWidth;g(t>e?"flex-start":"center")}}()}),[w,a]);const S="landscape"===e?n*(x/100)*.3:a*(f/100)*.5;return(0,l.jsx)(p.C,{value:h,children:"landscape"==e&&!(0,s.DF0)(m)||"portrait"==e&&!(0,s.JaA)(m)?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:w,height:"fit-content",width:"100%"},className:"whatmore-story-horizontal-flex",ref:y,children:b.map(((t,e)=>(0,l.jsx)(d,{storyId:t.id,tileSize:(0,s.OFP)(m)?100:S,onClick:t=>{v(e)},template:j,imageUrl:t.thumbnail_image,title:t.title},"whatmore-story-"+t.id)))}),"landscape"===e&&(0,s.sMW)(m)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>k("left"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",left:0},children:(0,l.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:"<"})}),(0,l.jsx)("button",{onClick:()=>k("right"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",right:0},children:(0,l.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:">"})})]})]})})}},868:function(t,e,n){n.d(e,{V:function(){return a}});var r=n(9854),o=n(7753);const i={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},a=function(t){const e=(0,o.MO)("whatmoreShopId");if(!t)return t;if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,r.zpr)(e))return t;if("AZURECDN"==(0,r.zpr)(e)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(i))if(t.includes(e))return t.replace(e,i[e]);return t}}if("BUNNYCDN"==(0,r.zpr)(e)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(s))if(t.includes(e))return t.replace(e,s[e]);return t}}return t}},8866:function(t,e,n){var r=n(7313);function o(){return[window.innerHeight,window.innerWidth]}e.Z=function(t){var[e,n]=o();const[i,s]=(0,r.useState)([e>n?"portrait":"landscape",e,n]);return(0,r.useLayoutEffect)((()=>{function t(){var[t,e]=o();s(t>e?["portrait",t,e]:["landscape",t,e])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),i}},9111:function(){},123:function(){},9778:function(){}}]);