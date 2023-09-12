"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[580],{3580:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(7313),o=n(8866),i=n(7753),s=(n(9111),n(123),n(9778),n(9854)),a=n(868),d=n(6417);var l=function(t){var e,n;const o=(0,i.MO)("whatmorePrimaryFont"),l=((0,i.MO)("whatmorePrimaryColor"),(0,i.MO)("whatmoreSecondaryColor")),c=(0,i.MO)("whatmoreShopId"),[p,h]=(0,r.useState)(!1),u=t.storyId,f=(0,a.V)(t.imageUrl),x=t.title,m=t.onClick,w=t.template,g=(0,s.f6)(c),v="template-stories-a"===w?"50%":"30%",y=Math.floor(t.tileSize),b=.12*y*(0,s.LM)(c),j=null!==(e=(0,s.Q)(c))&&void 0!==e?e:o,z=null!==(n=(0,s.u2)(c))&&void 0!==n?n:[l,g,l,g,l];return(0,d.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,height:"fit-content",width:y*(0,s.jJ)(c)+"px",marginLeft:"10px",marginRight:"10px",marginTop:"10px",marginBottom:"10px",cursor:"pointer"},onClick:()=>{h(!0),m(u)},className:[p?"whatmore-scale-on-tap":""].join(" "),children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:v,boxShadow:"0px 2px 1px 0px "+z[0]+"50, 0px -2px 1px 0px "+z[1]+"50, 2px 0px 1px 0px "+z[2]+"50, -2px 0px 1px 0px "+z[3]+"80, 2px -2px 1px 0px "+z[4]+"80, -2px 2px 1px 0px "+z[0]+"DA, 2px 2px 1px 0px "+z[1]+"DA, -2px -2px 1px 0px "+z[2]+"DA"},children:(0,d.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:y+"px",width:y+"px",borderRadius:v,border:"3px solid white",backgroundColor:"gray",overflow:"hidden"},children:(0,d.jsx)("img",{src:f,style:{objectFit:"cover",height:y+"px",width:y+"px",backgroundColor:"white"},alt:"story image"})})}),(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"100%",marginTop:"10px"},children:(0,d.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-size",b+"px","important")},style:{textAlign:"center",color:(0,s.WS)(c),fontFamily:j,fontWeight:"normal",lineHeight:"110%",margin:0,padding:0,overflow:"hidden",textOverflow:"ellipsis"},children:x.substring(0,24)})})]})},c=n(9302);const p=(0,n(2575).Z)({key:"whatmore-stories-css"});var h=function(t){const[e,n,r]=(0,o.Z)(),[a]=(0,i.j1)("whatmoreLandscapePadding"),[h]=(0,i.j1)("whatmoreStoryTileSize"),[u]=(0,i.j1)("whatmoreStoryTileSizeDesktop"),[f]=(0,i.j1)("whatmoreShopId");var x=t.eventsStories;const m=t.onClick,w=t.template,g="landscape"===e?n*(u/100)*.3:r*(h/100)*.5;return(0,d.jsx)(c.C,{value:p,children:(0,d.jsx)("div",{style:{left:a+"px",right:a+"px",marginBottom:"portrait"==e?(0,s.cj)(f):(0,s.TM)(f)},children:"landscape"==e&&!(0,s.DF)(f)||"portrait"==e&&!(0,s.J)(f)?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"landscape"===e?"center":"flex-start",height:"fit-content",width:"100%"},className:"whatmore-story-horizontal-flex",children:x.map(((t,e)=>(0,d.jsx)(l,{storyId:t.id,tileSize:g,onClick:t=>{m(e)},template:w,imageUrl:t.thumbnail_image,title:t.title},"whatmore-story-"+t.id)))})})})}},868:function(t,e,n){n.d(e,{V:function(){return a}});var r=n(9854),o=n(7753);const i={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},a=function(t){const e=(0,o.MO)("whatmoreShopId");if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,r.zp)(e))return t;if("AZURECDN"==(0,r.zp)(e)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(i))if(t.includes(e))return t.replace(e,i[e]);return t}}if("BUNNYCDN"==(0,r.zp)(e)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(s))if(t.includes(e))return t.replace(e,s[e]);return t}}return t}},8866:function(t,e,n){var r=n(7313);function o(){return[window.innerHeight,window.innerWidth]}e.Z=function(t){var[e,n]=o();const[i,s]=(0,r.useState)(["portrait",e,n]);return(0,r.useLayoutEffect)((()=>{function t(){var[t,e]=o();s(t>e?["portrait",t,e]:["landscape",t,e])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),i}},9111:function(){},123:function(){},9778:function(){}}]);