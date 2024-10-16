"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[615],{3827:function(e,t,o){o.r(t);var r=o(7313),i=o(6090),n=o(7616),l=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),a=o(2575),s=o(8866),p=o(7753),x=o(7129),d=o(364),h=o(8631),c=o(6066),m=o(8782),u=o(9821),g=o(7381),f=o(5380),w=o(3933),v=o(9854),j=o(32),C=o(6417);const y=(0,a.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[o,a,b]=(0,s.Z)(),[S,k,R,Z,M]=(0,u.Z)(),[P,T]=(0,r.useState)(Array(t.length).fill(0).map((()=>Math.random()))),B=(0,p.MO)("whatmoreCollectionsTileSize"),I=(0,p.MO)("whatmoreCollectionsTileSizePortrait"),L="portrait"===o?I:B,O="portrait"==o?0:(0,p.MO)("whatmoreLandscapePadding"),A=(0,p.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreIsCollectionsTemplate:D}=(0,r.useContext)(d.I),E=(0,p.MO)("whatmoreShopId"),{whatmoreRootId:F}=(0,r.useContext)(d.I),V=e.onClick;function z(e){V(e)}(0,r.useEffect)((()=>{(0,g.Oo)("Video shopping powered by Whatmore!")}),[]),delete n.ZP.styles.global;var _=[];for(let r=0,i=!1;r<t.length;)i&&r!=t.length-1&&P[r]>.2?(_.push((0,C.jsx)(c.Z,{mode:o,event1:t[r],event2:t[r+1],onClick:()=>{z(t[r-1])}},"collections-tile-"+r)),r+=2,i=!i):(_.push((0,C.jsx)(h.Z,{mode:o,event:t[r],onClick:()=>{z(t[r-1])},borderRadius:"10%",removeBorders:!1},"collections-tile-"+r)),r+=1,i=!i);(0,r.useEffect)((()=>{j.IR.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-a"]')))return;e&&(e.style.minHeight="0px")}))}),[]);const[q,H,N]=(0,w.YD)({triggerOnce:!1});return(0,C.jsx)(l.C,{value:y,children:(0,C.jsx)("div",{className:D?"whatmore-collection-events":"whatmore-carousel-events",children:(0,C.jsx)(i.x,{theme:n.ZP,cssVarsRoot:F,resetCSS:!1,children:(0,C.jsxs)(x.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,C.jsx)("div",{ref:q,style:{marginLeft:O+"px",marginRight:O+"px"},children:(0,C.jsx)(m.P,{renderElement:e=>(0,C.jsx)(C.Fragment,{children:e.eventData}),dataList:_,spacing:A,defaultHeight:S*L*.01+"px",defaultWidth:k*L*.01+"px",retainAlreadyRenderedElements:!0})}),(0,v.dhc)(E)&&D&&!H&&-1==e.index&&(0,C.jsx)(f.Z,{event:t[0],inVideoClick:z,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},6066:function(e,t,o){var r=o(7313),i=o(9854),n=o(7753),l=(o(9111),o(123),o(9778),o(4892)),a=o(7129),s=o(9821),p=o(6417);t.Z=function(e){var t;const[o,x,d,h,c]=(0,s.Z)(),[m]=(0,n.j1)("whatmoreSecondaryColor"),[u]=(0,n.j1)("whatmoreShopId"),[g]=(0,n.j1)("whatmoreCollectionsTileSize"),[f]=(0,n.j1)("whatmoreCollectionsTileSizePortrait"),w="portrait"===e.mode?f:g,[v,j]=(0,r.useState)(!1),C=(0,i.f63)(u);(0,r.useContext)(a.V);const y=e.event1,b=e.event2,S=e.onClick,k=.01*w,R=o*k,Z=o*k*.5,M=x*k,P=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",T="15%",B=e.removeBorders;return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:R+"px",width:M+"px",marginLeft:B?"2px":"5px",marginRight:B?"2px":"5px",marginTop:B?"2px":"5px",marginBottom:B?"2px":"5px",cursor:"pointer"},children:(0,p.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:B?"0px":P,boxShadow:B?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+C+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+C+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+C+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+C+"DA"},onClick:()=>{j(!0),S(y)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:[(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:Z+"px",width:M+"px",borderTopLeftRadius:B?"0px":T,borderTopRightRadius:B?"0px":T,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(l.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})}),(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:Z+"px",width:M+"px",borderBottomLeftRadius:B?"0px":T,borderBottomRightRadius:B?"0px":T,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(l.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})]})})}}}]);