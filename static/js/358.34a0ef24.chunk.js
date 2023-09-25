"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[358],{3827:function(e,t,n){n.r(t);var i=n(7313),r=n(6090),o=n(7616),a=(n(6143),n(7850),n(4444),n(7244),n(123),n(5892),n(1811),n(9302)),l=n(2575),x=n(8866),p=n(7753),d=n(7129),s=n(4136),h=n(8631),c=n(6066),u=n(8782),f=n(9821),m=n(6417);const g=(0,l.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[n,l,w]=(0,x.Z)(),[v,j,y,C,b]=(0,f.Z)(),[k,R]=(0,i.useState)(Array(t.length).fill(0).map((()=>Math.random()))),S=(0,p.MO)("whatmoreCollectionsTileSize"),P="portrait"==n?0:(0,p.MO)("whatmoreLandscapePadding"),Z=(0,p.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreRootId:M}=(0,i.useContext)(s.I),B=e.onClick;function A(e){B(e)}delete o.ZP.styles.global;var F=[];for(let i=0,r=!1;i<t.length;)r&&i!=t.length-1&&k[i]>.2?(F.push((0,m.jsx)(c.Z,{event1:t[i],event2:t[i+1],onClick:()=>{A(t[i-1])}},"collections-tile-"+i)),i+=2,r=!r):(F.push((0,m.jsx)(h.Z,{event:t[i],onClick:()=>{A(t[i-1])},borderRadius:"10%",removeBorders:!1},"collections-tile-"+i)),i+=1,r=!r);return(0,m.jsx)(a.C,{value:g,children:(0,m.jsx)("div",{children:(0,m.jsx)(r.x,{theme:o.ZP,cssVarsRoot:M,resetCSS:!1,children:(0,m.jsx)(d.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,m.jsx)("div",{style:{marginLeft:P+"px",marginRight:P+"px"},children:(0,m.jsx)(u.P,{renderElement:e=>(0,m.jsx)(m.Fragment,{children:e.eventData}),dataList:F,spacing:Z,defaultHeight:v*S*.01+"px",defaultWidth:j*S*.01+"px",retainAlreadyRenderedElements:!0})})})})})})}},7129:function(e,t,n){n.d(t,{V:function(){return i}});const i=(0,n(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,n){var i=n(7313),r=n(9854),o=n(7753),a=(n(9111),n(123),n(9778),n(4892)),l=n(7129),x=n(9821),p=n(6417);t.Z=function(e){var t;const[n,d,s,h,c]=(0,x.Z)(),[u]=(0,o.j1)("whatmorePrimaryFont"),[f]=(0,o.j1)("whatmorePrimaryColor"),[m]=(0,o.j1)("whatmoreSecondaryColor"),[g]=(0,o.j1)("whatmoreShopId"),[w]=(0,o.j1)("whatmoreCollectionsTileSize"),[v,j]=(0,i.useState)(!1),y=(0,r.f6)(g);(0,i.useContext)(l.V);const C=e.event,b=e.onClick,k=e.removeBorders,R=n*w*.01,S=d*w*.01,P=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:S+"px",marginLeft:k?"2px":"5px",marginRight:k?"2px":"5px",marginTop:k?"2px":"5px",marginBottom:k?"2px":"5px",cursor:"pointer"},onClick:()=>{j(!0),b(C)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:P,overflow:"hidden",boxShadow:k?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+y+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+y+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+y+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+y+"DA"},children:(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:R+"px",width:S+"px",borderRadius:P,backgroundColor:"gray",overflow:"hidden"},children:(0,p.jsx)(a.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0,event:C})})})})}},6066:function(e,t,n){var i=n(7313),r=n(9854),o=n(7753),a=(n(9111),n(123),n(9778),n(4892)),l=n(7129),x=n(9821),p=n(6417);t.Z=function(e){var t;const[n,d,s,h,c]=(0,x.Z)(),[u]=(0,o.j1)("whatmorePrimaryFont"),[f]=(0,o.j1)("whatmorePrimaryColor"),[m]=(0,o.j1)("whatmoreSecondaryColor"),[g]=(0,o.j1)("whatmoreShopId"),[w]=(0,o.j1)("whatmoreCollectionsTileSize"),[v,j]=(0,i.useState)(!1),y=(0,r.f6)(g);(0,i.useContext)(l.V);const C=e.event1,b=e.event2,k=e.onClick,R=.01*w,S=n*R,P=n*R*.5,Z=d*R,M=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",B="15%",A=e.removeBorders;return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:S+"px",width:Z+"px",marginLeft:A?"2px":"5px",marginRight:A?"2px":"5px",marginTop:A?"2px":"5px",marginBottom:A?"2px":"5px",cursor:"pointer"},children:(0,p.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:A?"0px":M,boxShadow:A?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+y+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+y+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+y+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+y+"DA"},onClick:()=>{j(!0),k(C)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:[(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:P+"px",width:Z+"px",borderTopLeftRadius:A?"0px":B,borderTopRightRadius:A?"0px":B,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(a.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0,event:C})}),(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:P+"px",width:Z+"px",borderBottomLeftRadius:A?"0px":B,borderBottomRightRadius:A?"0px":B,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(a.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})]})})}},8782:function(e,t,n){n.d(t,{P:function(){return l}});var i=n(3933),r=n(8866),o=(n(123),n(6417));function a(e){const{ref:t,inView:n,entry:r}=(0,i.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,o.jsx)("div",{ref:t,children:n?e.renderElement({eventData:e.data}):(0,o.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function l(e){var t;const[n,i,l]=(0,r.Z)();return(0,o.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:e.dataList.map(((t,n)=>(0,o.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+n)))})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);