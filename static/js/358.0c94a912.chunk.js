"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[358],{3827:function(e,t,n){n.r(t);var o=n(7313),i=n(6090),r=n(7616),l=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),a=n(2575),s=n(8866),d=n(7753),p=n(7129),x=n(9039),c=n(8631),h=n(6066),u=n(8782),m=n(9821),f=(n(8984),n(7381)),v=n(6417);const g=(0,a.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[n,a,w]=(0,s.Z)(),[y,j,b,C,E]=(0,m.Z)(),[S,k]=(0,o.useState)(Array(t.length).fill(0).map((()=>Math.random()))),L=(0,d.MO)("whatmoreCollectionsTileSize"),R="portrait"==n?0:(0,d.MO)("whatmoreLandscapePadding"),M=(0,d.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreRootId:Z}=(0,o.useContext)(x.I),B=e.onClick;function A(e){B(e)}(0,o.useEffect)((()=>{(0,f.Oo)("Video shopping powered by Whatmore!")}),[]),delete r.ZP.styles.global;var P=[];for(let o=0,i=!1;o<t.length;)i&&o!=t.length-1&&S[o]>.2?(P.push((0,v.jsx)(h.Z,{event1:t[o],event2:t[o+1],onClick:()=>{A(t[o-1])}},"collections-tile-"+o)),o+=2,i=!i):(P.push((0,v.jsx)(c.Z,{event:t[o],onClick:()=>{A(t[o-1])},borderRadius:"10%",removeBorders:!1},"collections-tile-"+o)),o+=1,i=!i);return(0,o.useEffect)((()=>{x.$.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-a"]')))return;const n=e.querySelector(".whatmore-render-root");n&&(n.style.minHeight="0px")}))}),[]),(0,v.jsx)(l.C,{value:g,children:(0,v.jsx)("div",{children:(0,v.jsx)(i.x,{theme:r.ZP,cssVarsRoot:Z,resetCSS:!1,children:(0,v.jsx)(p.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,v.jsx)("div",{style:{marginLeft:R+"px",marginRight:R+"px"},children:(0,v.jsx)(u.P,{renderElement:e=>(0,v.jsx)(v.Fragment,{children:e.eventData}),dataList:P,spacing:M,defaultHeight:y*L*.01+"px",defaultWidth:j*L*.01+"px",retainAlreadyRenderedElements:!0})})})})})})}},7129:function(e,t,n){n.d(t,{V:function(){return o}});const o=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,n){var o=n(7313),i=n(9854),r=n(7753),l=(n(9111),n(123),n(9778),n(4892)),a=n(7129),s=n(9821),d=n(6417);t.Z=function(e){var t;const[n,p,x,c,h]=(0,s.Z)(),[u]=(0,r.j1)("whatmoreSecondaryColor"),[m]=(0,r.j1)("whatmoreShopId"),[f]=(0,r.j1)("whatmoreCollectionsTileSize"),[v,g]=(0,o.useState)(!1),w=(0,i.f63)(m);(0,o.useContext)(a.V);const y=e.event,j=e.onClick,b=e.removeBorders,C=n*f*.01,E=p*f*.01,S=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:E+"px",marginLeft:b?"2px":"5px",marginRight:b?"2px":"5px",marginTop:b?"2px":"5px",marginBottom:b?"2px":"5px",cursor:"pointer"},onClick:()=>{g(!0),j(y)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:S,overflow:"hidden",boxShadow:b?"":"0px 1px 1px 0px "+u+"50, 0px -1px 1px 0px "+w+"50, 1px 0px 1px 0px "+u+"50, -1px 0px 1px 0px "+w+"80, 1px -1px 1px 0px "+u+"80, -1px 1px 1px 0px "+w+"DA, 1px 1px 1px 0px "+u+"DA, -1px -1px 1px 0px "+w+"DA"},children:(0,d.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:C+"px",width:E+"px",borderRadius:S,backgroundColor:"gray",overflow:"hidden"},children:(0,d.jsx)(l.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})})})})}},6066:function(e,t,n){var o=n(7313),i=n(9854),r=n(7753),l=(n(9111),n(123),n(9778),n(4892)),a=n(7129),s=n(9821),d=n(6417);t.Z=function(e){var t;const[n,p,x,c,h]=(0,s.Z)(),[u]=(0,r.j1)("whatmoreSecondaryColor"),[m]=(0,r.j1)("whatmoreShopId"),[f]=(0,r.j1)("whatmoreCollectionsTileSize"),[v,g]=(0,o.useState)(!1),w=(0,i.f63)(m);(0,o.useContext)(a.V);const y=e.event1,j=e.event2,b=e.onClick,C=.01*f,E=n*C,S=n*C*.5,k=p*C,L=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",R="15%",M=e.removeBorders;return(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:E+"px",width:k+"px",marginLeft:M?"2px":"5px",marginRight:M?"2px":"5px",marginTop:M?"2px":"5px",marginBottom:M?"2px":"5px",cursor:"pointer"},children:(0,d.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:M?"0px":L,boxShadow:M?"":"0px 1px 1px 0px "+u+"50, 0px -1px 1px 0px "+w+"50, 1px 0px 1px 0px "+u+"50, -1px 0px 1px 0px "+w+"80, 1px -1px 1px 0px "+u+"80, -1px 1px 1px 0px "+w+"DA, 1px 1px 1px 0px "+u+"DA, -1px -1px 1px 0px "+w+"DA"},onClick:()=>{g(!0),b(y)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:[(0,d.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:S+"px",width:k+"px",borderTopLeftRadius:M?"0px":R,borderTopRightRadius:M?"0px":R,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,d.jsx)(l.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})}),(0,d.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:S+"px",width:k+"px",borderBottomLeftRadius:M?"0px":R,borderBottomRightRadius:M?"0px":R,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,d.jsx)(l.Z,{height:"100%",width:"100%",url:j.thumbnail_image,isPlaying:!0,event:j})})]})})}},8782:function(e,t,n){n.d(t,{P:function(){return a}});var o=n(3933),i=n(7313),r=(n(123),n(6417));function l(e){const{ref:t,inView:n,entry:i}=(0,o.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:n?e.renderElement({eventData:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function a(e){var t;return(0,i.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,n=!1;function o(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(n=!0,t=e.touches[0].clientX):(n=!0,t=e.clientX)}function i(o){if(!n)return;const i=o.touches?o.touches[0].clientX:o.clientX;e.style.pointerEvents="none";const r=2*(t-i);e.scrollLeft+=r,t=i}function r(t){e.style.pointerEvents="auto",n=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",o),e.addEventListener("touchmove",i),e.addEventListener("touchend",r)),e.addEventListener("mousedown",o),document.addEventListener("mousemove",i),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",i),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",o),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:e.dataList.map(((t,n)=>(0,r.jsx)(l,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+n)))})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);