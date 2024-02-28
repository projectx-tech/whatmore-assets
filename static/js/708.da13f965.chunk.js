"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[708],{1291:function(e,t,n){n.r(t);var o=n(7313),r=n(6090),i=n(7616),l=n(9039),a=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),s=n(2575),c=n(8866),d=n(7753),h=n(7129),u=n(8631),p=n(9821),m=n(8782),x=n(7381),f=n(9854),v=n(6417);const g=(0,s.Z)({key:"whatmore-css-cv"});t.default=function(e){var t;const[n,s,w]=(0,c.Z)(),[y,j,E,C,S]=(0,p.Z)(),L=(0,d.MO)("whatmoreCollectionsTileSize"),M="portrait"==n?0:(0,d.MO)("whatmoreLandscapePadding"),k=(0,d.MO)("whatmoreCollectionsTilesSpacing"),R=(0,d.MO)("whatmoreShopId"),[b]=(0,d.MO)("whatmorePrimaryColor"),{whatmoreRootId:P}=(0,o.useContext)(l.I),O=e.events,F=e.onClick,T=(0,d.MO)("whatmoreTitleFont"),Z="portrait"==n?(0,d.MO)("whatmoreTitleFontSizePortrait"):(0,d.MO)("whatmoreTitleFontSize"),A=null!==(t=(0,f.aRS)(R))&&void 0!==t?t:T;delete i.ZP.styles.global;var z=[];for(let o=0;o<O.length;)z.push((0,v.jsx)(u.Z,{event:O[o],onClick:()=>{var e;e=O[o-1],F(e)},removeBorders:!0,borderRadius:"5%"},"collections-tile-"+o)),o+=1;return(0,o.useEffect)((()=>{(0,x.Oo)("Video shopping powered by Whatmore!")}),[]),(0,o.useEffect)((()=>{l.$.forEach((e=>{var t;const n=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-c"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-c"]');if(!n)return;const o=e.querySelector(".whatmore-render-root");n&&o&&(o.style.minHeight="0px")}))}),[]),(0,v.jsx)(a.C,{value:g,children:(0,v.jsx)("div",{children:(0,v.jsx)(r.x,{theme:i.ZP,cssVarsRoot:P,resetCSS:!1,children:(0,v.jsxs)(h.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[e.heading.trim().length>0?(0,v.jsx)("div",{className:"whatmore-events-carousel",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,v.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",A,"important"),e.style.setProperty("font-size",Z+"px","important"))},style:{color:b,backgroundClip:"text",textAlign:"center",fontWeight:(0,f.wOV)(R),lineHeight:(0,f.vY4)(R),letterSpacing:(0,f.X2K)(R)},children:e.heading})}):(0,v.jsx)(v.Fragment,{}),(0,v.jsx)("div",{style:{marginLeft:M+"px",marginRight:M+"px"},children:(0,v.jsx)(m.P,{renderElement:e=>(0,v.jsx)(v.Fragment,{children:e.eventData}),dataList:z,spacing:k,defaultHeight:y*L*.01+"px",defaultWidth:j*L*.01+"px",retainAlreadyRenderedElements:!0})})]})})})})}},7129:function(e,t,n){n.d(t,{V:function(){return o}});const o=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,n){var o=n(7313),r=n(9854),i=n(7753),l=(n(9111),n(123),n(9778),n(4892)),a=n(7129),s=n(9821),c=n(6417);t.Z=function(e){var t;const[n,d,h,u,p]=(0,s.Z)(),[m]=(0,i.j1)("whatmoreSecondaryColor"),[x]=(0,i.j1)("whatmoreShopId"),[f]=(0,i.j1)("whatmoreCollectionsTileSize"),[v,g]=(0,o.useState)(!1),w=(0,r.f63)(x);(0,o.useContext)(a.V);const y=e.event,j=e.onClick,E=e.removeBorders,C=n*f*.01,S=d*f*.01,L=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,c.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:S+"px",marginLeft:E?"2px":"5px",marginRight:E?"2px":"5px",marginTop:E?"2px":"5px",marginBottom:E?"2px":"5px",cursor:"pointer"},onClick:()=>{g(!0),j(y)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:(0,c.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:L,overflow:"hidden",boxShadow:E?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+w+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+w+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+w+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+w+"DA"},children:(0,c.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:C+"px",width:S+"px",borderRadius:L,backgroundColor:"gray",overflow:"hidden"},children:(0,c.jsx)(l.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})})})})}},8782:function(e,t,n){n.d(t,{P:function(){return a}});var o=n(3933),r=n(7313),i=(n(123),n(6417));function l(e){const{ref:t,inView:n,entry:r}=(0,o.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,i.jsx)("div",{ref:t,children:n?e.renderElement({eventData:e.data}):(0,i.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function a(e){var t;return(0,r.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,n=!1;function o(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(n=!0,t=e.touches[0].clientX):(n=!0,t=e.clientX)}function r(o){if(!n)return;const r=o.touches?o.touches[0].clientX:o.clientX;e.style.pointerEvents="none";const i=2*(t-r);e.scrollLeft+=i,t=r}function i(t){e.style.pointerEvents="auto",n=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",o),e.addEventListener("touchmove",r),e.addEventListener("touchend",i)),e.addEventListener("mousedown",o),document.addEventListener("mousemove",r),document.addEventListener("mouseup",i)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",r),e.removeEventListener("touchend",i)),e.removeEventListener("mousedown",o),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",i))}}),[]),(0,i.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:e.dataList.map(((t,n)=>(0,i.jsx)(l,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+n)))})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);