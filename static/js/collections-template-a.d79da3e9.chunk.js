"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[615],{3827:function(e,t,o){o.r(t);var r=o(7313),i=o(6090),n=o(7616),a=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),l=o(2575),p=o(8866),s=o(7753),x=o(7129),d=o(364),h=o(8631),c=o(6066),m=o(8782),u=o(9821),g=o(7381),f=o(5380),w=o(6775),v=o(9854),j=o(32),y=o(6417);const b=(0,l.Z)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[o]=(0,p.Z)(),[l,C]=(0,u.Z)(),[S,k]=(0,r.useState)(Array(t.length).fill(0).map((()=>Math.random()))),R=(0,s.MO)("whatmoreVideoTileSize"),Z=(0,s.MO)("whatmoreVideoTileSizePortrait"),M="portrait"===o?Z:R,P="portrait"==o?0:(0,s.MO)("whatmoreLandscapePadding"),T=(0,s.MO)("whatmoreCollectionsTilesSpacing"),{whatmoreIsCollectionsTemplate:B}=(0,r.useContext)(d.I),V=(0,s.MO)("whatmoreShopId"),{whatmoreRootId:I}=(0,r.useContext)(d.I),L=e.onClick;function O(e){L(e)}(0,r.useEffect)((()=>{(0,g.Oo)("Video shopping powered by Whatmore!")}),[]),delete n.ZP.styles.global;var A=[];for(let r=0,i=!1;r<t.length;)i&&r!=t.length-1&&S[r]>.2?(A.push((0,y.jsx)(c.Z,{mode:o,event1:t[r],event2:t[r+1],onClick:()=>{O(t[r-1])}},"collections-tile-"+r)),r+=2,i=!i):(A.push((0,y.jsx)(h.Z,{mode:o,event:t[r],onClick:()=>{O(t[r-1])},borderRadius:"10%",removeBorders:!1},"collections-tile-"+r)),r+=1,i=!i);(0,r.useEffect)((()=>{j.IR.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-a"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-a"]')))return;e&&(e.style.minHeight="0px")}))}),[]);const[E,F,z]=(0,w.Z)({triggerOnce:!1});return(0,y.jsx)(a.C,{value:b,children:(0,y.jsx)("div",{className:B?"whatmore-collection-events":"whatmore-carousel-events",children:(0,y.jsx)(i.x,{theme:n.ZP,cssVarsRoot:I,resetCSS:!1,children:(0,y.jsxs)(x.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,y.jsx)("div",{ref:E,style:{marginLeft:P+"px",marginRight:P+"px"},children:(0,y.jsx)(m.P,{renderElement:e=>(0,y.jsx)(y.Fragment,{children:e.eventData}),dataList:A,spacing:T,defaultHeight:l*M*.01+"px",defaultWidth:C*M*.01+"px",retainAlreadyRenderedElements:!0})}),(0,v.dhc)(V)&&B&&!F&&-1==e.index&&(0,y.jsx)(f.Z,{event:t[0],inVideoClick:O,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},6066:function(e,t,o){var r=o(7313),i=o(9854),n=o(7753),a=(o(9111),o(123),o(9778),o(4892)),l=o(9821),p=o(6417);t.Z=function(e){var t;const[o,s]=(0,l.Z)(),[x]=(0,n.j1)("whatmoreSecondaryColor"),[d]=(0,n.j1)("whatmoreShopId"),[h]=(0,n.j1)("whatmoreVideoTileSize"),[c]=(0,n.j1)("whatmoreVideoTileSizePortrait"),m="portrait"===e.mode?c:h,[u,g]=(0,r.useState)(!1),f=(0,i.f63)(d),w=e.event1,v=e.event2,j=e.onClick,y=.01*m,b=o*y,C=o*y*.5,S=s*y,k=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",R="15%",Z=e.removeBorders;return(0,p.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:b+"px",width:S+"px",marginLeft:Z?"2px":"5px",marginRight:Z?"2px":"5px",marginTop:Z?"2px":"5px",marginBottom:Z?"2px":"5px",cursor:"pointer"},children:(0,p.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:Z?"0px":k,boxShadow:Z?"":"0px 1px 1px 0px "+x+"50, 0px -1px 1px 0px "+f+"50, 1px 0px 1px 0px "+x+"50, -1px 0px 1px 0px "+f+"80, 1px -1px 1px 0px "+x+"80, -1px 1px 1px 0px "+f+"DA, 1px 1px 1px 0px "+x+"DA, -1px -1px 1px 0px "+f+"DA"},onClick:()=>{g(!0),j(w)},className:[u?"whatmore-scale-on-tap":""].join(" "),children:[(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:C+"px",width:S+"px",borderTopLeftRadius:Z?"0px":R,borderTopRightRadius:Z?"0px":R,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(a.Z,{height:"100%",width:"100%",url:w.thumbnail_image,isPlaying:!0,event:w})}),(0,p.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:C+"px",width:S+"px",borderBottomLeftRadius:Z?"0px":R,borderBottomRightRadius:Z?"0px":R,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,p.jsx)(a.Z,{height:"100%",width:"100%",url:v.thumbnail_image,isPlaying:!0,event:v})})]})})}}}]);