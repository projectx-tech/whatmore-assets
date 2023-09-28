"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[870],{6071:function(e,t,n){n.r(t);var r=n(7313),o=n(6090),i=n(7616),l=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),a=n(2575),x=n(8866),p=n(7753),d=n(7129),s=n(4136),h=n(8631),c=n(6066),u=n(8782),f=n(9821),m=n(6417);const g=(0,a.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[n,a,v]=(0,x.Z)(),[w,j]=(0,r.useState)(Array(t.length).fill(0).map((()=>Math.random()))),[y,C,b,k,R]=(0,f.Z)(),S=(0,p.MO)("whatmoreCollectionsTileSize"),P="portrait"==n?0:(0,p.MO)("whatmoreLandscapePadding"),Z=(0,p.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreRootId:L}=(0,r.useContext)(s.I),M=e.onClick;function B(e){M(e)}delete i.ZP.styles.global;var A=[];for(let r=0,o=!1;r<t.length;)o&&r!=t.length-1&&w[r]>.2?(A.push((0,m.jsx)(c.Z,{event1:t[r],event2:t[r+1],onClick:()=>{B(t[r-1])},removeBorders:!0},"collections-tile-"+r)),r+=2,o=!o):(A.push((0,m.jsx)(h.Z,{event:t[r],onClick:()=>{B(t[r-1])},removeBorders:!0,borderRadius:"0%"},"collections-tile-"+r)),r+=1,o=!o);return(0,m.jsx)(l.C,{value:g,children:(0,m.jsx)("div",{children:(0,m.jsx)(o.x,{theme:i.ZP,cssVarsRoot:L,resetCSS:!1,children:(0,m.jsx)(d.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,m.jsx)("div",{style:{marginLeft:P+"px",marginRight:P+"px"},children:(0,m.jsx)(u.P,{renderElement:e=>(0,m.jsx)(m.Fragment,{children:e.eventData}),dataList:A,spacing:Z,defaultHeight:y*S*.01+"px",defaultWidth:C*S*.01+"px",retainAlreadyRenderedElements:!0})})})})})})}},7129:function(e,t,n){n.d(t,{V:function(){return r}});const r=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,n){var r=n(7313),o=n(9854),i=n(7753),l=(n(9111),n(123),n(9778),n(4892)),a=n(7129),x=n(9821),p=n(6417);t.Z=function(e){var t;const[n,d,s,h,c]=(0,x.Z)(),[u]=(0,i.j1)("whatmorePrimaryFont"),[f]=(0,i.j1)("whatmorePrimaryColor"),[m]=(0,i.j1)("whatmoreSecondaryColor"),[g]=(0,i.j1)("whatmoreShopId"),[v]=(0,i.j1)("whatmoreCollectionsTileSize"),[w,j]=(0,r.useState)(!1),y=(0,o.f6)(g);(0,r.useContext)(a.V);const C=e.event,b=e.onClick,k=e.removeBorders,R=n*v*.01,S=d*v*.01,P=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:S+"px",marginLeft:k?"2px":"5px",marginRight:k?"2px":"5px",marginTop:k?"2px":"5px",marginBottom:k?"2px":"5px",cursor:"pointer"},onClick:()=>{j(!0),b(C)},className:[w?"whatmore-scale-on-tap":""].join(" "),children:(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:P,overflow:"hidden",boxShadow:k?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+y+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+y+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+y+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+y+"DA"},children:(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:R+"px",width:S+"px",borderRadius:P,backgroundColor:"gray",overflow:"hidden"},children:(0,p.jsx)(l.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0,event:C})})})})}},6066:function(e,t,n){var r=n(7313),o=n(9854),i=n(7753),l=(n(9111),n(123),n(9778),n(4892)),a=n(7129),x=n(9821),p=n(6417);t.Z=function(e){var t;const[n,d,s,h,c]=(0,x.Z)(),[u]=(0,i.j1)("whatmorePrimaryFont"),[f]=(0,i.j1)("whatmorePrimaryColor"),[m]=(0,i.j1)("whatmoreSecondaryColor"),[g]=(0,i.j1)("whatmoreShopId"),[v]=(0,i.j1)("whatmoreCollectionsTileSize"),[w,j]=(0,r.useState)(!1),y=(0,o.f6)(g);(0,r.useContext)(a.V);const C=e.event1,b=e.event2,k=e.onClick,R=.01*v,S=n*R,P=n*R*.5,Z=d*R,L=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",M="15%",B=e.removeBorders;return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:S+"px",width:Z+"px",marginLeft:B?"2px":"5px",marginRight:B?"2px":"5px",marginTop:B?"2px":"5px",marginBottom:B?"2px":"5px",cursor:"pointer"},children:(0,p.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:B?"0px":L,boxShadow:B?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+y+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+y+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+y+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+y+"DA"},onClick:()=>{j(!0),k(C)},className:[w?"whatmore-scale-on-tap":""].join(" "),children:[(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:P+"px",width:Z+"px",borderTopLeftRadius:B?"0px":M,borderTopRightRadius:B?"0px":M,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(l.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0,event:C})}),(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:P+"px",width:Z+"px",borderBottomLeftRadius:B?"0px":M,borderBottomRightRadius:B?"0px":M,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(l.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})]})})}},8782:function(e,t,n){n.d(t,{P:function(){return x}});var r=n(3933),o=n(8866),i=n(7313),l=(n(123),n(6417));function a(e){const{ref:t,inView:n,entry:o}=(0,r.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,l.jsx)("div",{ref:t,children:n?e.renderElement({eventData:e.data}):(0,l.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function x(e){var t;const[n,r,x]=(0,o.Z)();return(0,i.useEffect)((()=>{function e(e){e.preventDefault(),e.stopPropagation(),t.scrollLeft+=e.deltaX,t.scrollLeft+=e.deltaY}const t=document.querySelector(".whatmore-carousel-horizontal-flex");return null===t||void 0===t||t.addEventListener("wheel",e),()=>{document.removeEventListener("wheel",e)}}),[]),(0,l.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3,overflowX:"auto"},className:"whatmore-carousel-horizontal-flex",children:e.dataList.map(((t,n)=>(0,l.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+n)))})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);