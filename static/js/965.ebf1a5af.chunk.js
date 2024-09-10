"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[965],{6071:function(e,t,o){o.r(t);var r=o(7313),i=o(6090),n=o(7616),a=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),l=o(2575),p=(o(8984),o(8866)),s=o(7753),x=o(7129),d=o(8811),h=o(8631),c=o(6066),m=o(8782),u=o(9821),g=o(7381),w=o(9854),f=o(5380),v=o(3933),y=o(6417);const j=(0,l.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[o,l,C]=(0,p.Z)(),[b,S]=(0,r.useState)(Array(t.length).fill(0).map((()=>Math.random()))),[k,R,Z,M,P]=(0,u.Z)(),T=(0,s.MO)("whatmoreCollectionsTileSize"),B=(0,s.MO)("whatmoreCollectionsTileSizePortrait"),L="portrait"===o?B:T,O="portrait"==o?0:(0,s.MO)("whatmoreLandscapePadding"),I=(0,s.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreIsCollectionsTemplate:A}=(0,r.useContext)(d.I),D=(0,s.MO)("whatmoreShopId"),{whatmoreRootId:E}=(0,r.useContext)(d.I),F=e.onClick,[V,q,z]=(0,v.YD)({triggerOnce:!1});function _(e){F(e)}delete n.ZP.styles.global;var H=[];for(let r=0,i=!1;r<t.length;)i&&r!=t.length-1&&b[r]>.2?(H.push((0,y.jsx)(c.Z,{event1:t[r],event2:t[r+1],onClick:()=>{_(t[r-1])},removeBorders:!0},"collections-tile-"+r)),r+=2,i=!i):(H.push((0,y.jsx)(h.Z,{mode:o,event:t[r],onClick:()=>{_(t[r-1])},removeBorders:!0,borderRadius:"0%"},"collections-tile-"+r)),r+=1,i=!i);return(0,r.useEffect)((()=>{(0,g.Oo)("Video shopping powered by Whatmore!")}),[]),(0,r.useEffect)((()=>{d.$.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-b"]')||e.querySelector('.whatmore-template-type[data-wh="template-d"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-b"]')||e.querySelector('.whatmore-template-type[data="template-d"]')))return;e&&(e.style.minHeight="0px")}))}),[]),(0,y.jsx)(a.C,{value:j,children:(0,y.jsx)("div",{className:A?"whatmore-collection-events":"whatmore-carousel-events",children:(0,y.jsx)(i.x,{theme:n.ZP,cssVarsRoot:E,resetCSS:!1,children:(0,y.jsxs)(x.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,y.jsx)("div",{ref:V,style:{marginLeft:O+"px",marginRight:O+"px"},children:(0,y.jsx)(m.P,{renderElement:e=>(0,y.jsx)(y.Fragment,{children:e.eventData}),dataList:H,spacing:I,defaultHeight:k*L*.01+"px",defaultWidth:R*L*.01+"px",retainAlreadyRenderedElements:!0})}),(0,w.dhc)(D)&&A&&!q&&-1==e.index&&(0,y.jsx)(f.Z,{event:t[0],inVideoClick:_,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},6066:function(e,t,o){var r=o(7313),i=o(9854),n=o(7753),a=(o(9111),o(123),o(9778),o(4892)),l=o(7129),p=o(9821),s=o(6417);t.Z=function(e){var t;const[o,x,d,h,c]=(0,p.Z)(),[m]=(0,n.j1)("whatmoreSecondaryColor"),[u]=(0,n.j1)("whatmoreShopId"),[g]=(0,n.j1)("whatmoreCollectionsTileSize"),[w]=(0,n.j1)("whatmoreCollectionsTileSizePortrait"),f="portrait"===e.mode?w:g,[v,y]=(0,r.useState)(!1),j=(0,i.f63)(u);(0,r.useContext)(l.V);const C=e.event1,b=e.event2,S=e.onClick,k=.01*f,R=o*k,Z=o*k*.5,M=x*k,P=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",T="15%",B=e.removeBorders;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:R+"px",width:M+"px",marginLeft:B?"2px":"5px",marginRight:B?"2px":"5px",marginTop:B?"2px":"5px",marginBottom:B?"2px":"5px",cursor:"pointer"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:B?"0px":P,boxShadow:B?"":"0px 1px 1px 0px "+m+"50, 0px -1px 1px 0px "+j+"50, 1px 0px 1px 0px "+m+"50, -1px 0px 1px 0px "+j+"80, 1px -1px 1px 0px "+m+"80, -1px 1px 1px 0px "+j+"DA, 1px 1px 1px 0px "+m+"DA, -1px -1px 1px 0px "+j+"DA"},onClick:()=>{y(!0),S(C)},className:[v?"whatmore-scale-on-tap":""].join(" "),children:[(0,s.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:Z+"px",width:M+"px",borderTopLeftRadius:B?"0px":T,borderTopRightRadius:B?"0px":T,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0,event:C})}),(0,s.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:Z+"px",width:M+"px",borderBottomLeftRadius:B?"0px":T,borderBottomRightRadius:B?"0px":T,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})]})})}}}]);