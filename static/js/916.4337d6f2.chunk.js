"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[916],{6071:function(e,t,o){o.r(t);var i=o(7313),r=(o(9158),o(9263),o(9262),o(4664)),n=o(7616),x=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),l=o(2575),p=(o(2210),o(8486),o(9821),o(8866)),a=(o(2279),o(9543)),h=o(7129),s=(o(5491),o(9854),o(6966)),d=o(8631),c=o(6066),u=o(6417);const f=(0,l.Z)({key:"whatmore-css-cv"});t.default=function(e){const[t,o,l]=(0,p.Z)(),[w]=(0,a.j1)("whatmoreShopId"),[m]=(0,a.j1)("whatmorePrimaryColor"),[g]=(0,a.j1)("whatmoreSecondaryColor"),[j]=(0,a.j1)("whatmoreTitleFont"),[v]=(0,a.j1)("whatmoreTitleFontSize"),[y]=(0,a.j1)("whatmoreLandscapePadding"),{whatmoreRootId:C}=(0,i.useContext)(s.I),b=e.events,S=e.onClick;function k(e){S(e)}delete n.ZP.styles.global;var R=[];for(let i=0,r=!1;i<b.length;)r&&i!=b.length-1&&Math.random()>.2?(R.push((0,u.jsx)(c.Z,{event1:b[i],event2:b[i+1],onClick:e=>{k(e)},removeBorders:!0},"collections-tile-"+i)),i+=2,r=!r):(R.push((0,u.jsx)(d.Z,{event:b[i],onClick:()=>{k(b[i])},removeBorders:!0},"collections-tile-"+i)),i+=1,r=!r);return(0,u.jsx)(x.C,{value:f,children:(0,u.jsx)("div",{children:(0,u.jsx)(r.x,{theme:n.ZP,cssVarsRoot:C,resetCSS:!1,children:(0,u.jsx)(h.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:(0,u.jsx)("div",{style:{left:y+"px",right:y+"px"},children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"landscape"===t?"center":"flex-start",height:"fit-content",width:"100%"},className:"whatmore-story-horizontal-flex",children:R})})})})})})}},5491:function(e,t,o){var i=o(3271),r=o(7313),n=o(9821),x=o(7129),l=o(6417);t.Z=function(e){var[t,o]=(0,n.Z)(),p=(0,r.useContext)(x.V);return e.event,(0,l.jsx)(i.xu,{marginTop:p.tileTopMargin,marginBottom:p.tileBottomMMargin,marginLeft:p.tileLeftMargin,marginRight:p.tileRightMargin,width:o,height:t,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden"})}},8631:function(e,t,o){var i=o(7313),r=o(9854),n=o(9543),x=(o(9111),o(123),o(9778),o(4892)),l=o(7129),p=o(9821),a=o(6417);t.Z=function(e){const[t,o,h,s,d]=(0,p.Z)(),[c]=(0,n.j1)("whatmorePrimaryFont"),[u]=(0,n.j1)("whatmorePrimaryColor"),[f]=(0,n.j1)("whatmoreSecondaryColor"),[w]=(0,n.j1)("whatmoreShopId"),[m]=(0,n.j1)("whatmoreCollectionsTileSize"),[g,j]=(0,i.useState)(!1),v=(0,r.f6)(w);(0,i.useContext)(l.V);const y=e.event,C=e.onClick,b=e.removeBorders,S=.01*m,k=t*S,R=o*S;return(0,a.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:R+"px",margin:b?"0px":"5px",cursor:"pointer"},onClick:()=>{j(!0),C(y)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:(0,a.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:b?"0px":"10%",boxShadow:b?"":"0px 1px 1px 0px "+f+"50, 0px -1px 1px 0px "+v+"50, 1px 0px 1px 0px "+f+"50, -1px 0px 1px 0px "+v+"80, 1px -1px 1px 0px "+f+"80, -1px 1px 1px 0px "+v+"DA, 1px 1px 1px 0px "+f+"DA, -1px -1px 1px 0px "+v+"DA"},children:(0,a.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:k+"px",width:R+"px",borderRadius:b?"0px":"10%",border:"2px solid white",backgroundColor:"gray",overflow:"hidden"},children:(0,a.jsx)(x.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0})})})})}},6066:function(e,t,o){var i=o(7313),r=o(9854),n=o(9543),x=(o(9111),o(123),o(9778),o(4892)),l=o(7129),p=o(9821),a=o(6417);t.Z=function(e){const[t,o,h,s,d]=(0,p.Z)(),[c]=(0,n.j1)("whatmorePrimaryFont"),[u]=(0,n.j1)("whatmorePrimaryColor"),[f]=(0,n.j1)("whatmoreSecondaryColor"),[w]=(0,n.j1)("whatmoreShopId"),[m]=(0,n.j1)("whatmoreCollectionsTileSize"),[g,j]=(0,i.useState)(!1),v=(0,r.f6)(w);(0,i.useContext)(l.V);const y=e.event1,C=e.event2,b=e.onClick,S=.01*m,k=t*S,R=t*S*.5,Z=o*S,B="15%",P=e.removeBorders;return(0,a.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:k+"px",width:Z+"px",margin:P?"0px":"5px",cursor:"pointer"},children:(0,a.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:P?"0px":"10%",boxShadow:P?"":"0px 1px 1px 0px "+f+"50, 0px -1px 1px 0px "+v+"50, 1px 0px 1px 0px "+f+"50, -1px 0px 1px 0px "+v+"80, 1px -1px 1px 0px "+f+"80, -1px 1px 1px 0px "+v+"DA, 1px 1px 1px 0px "+f+"DA, -1px -1px 1px 0px "+v+"DA"},onClick:()=>{j(!0),b(y)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:[(0,a.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:R+"px",width:Z+"px",borderTopLeftRadius:P?"0px":B,borderTopRightRadius:P?"0px":B,border:"2px solid white",backgroundColor:"gray",overflow:"hidden"},children:(0,a.jsx)(x.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0})}),(0,a.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:R+"px",width:Z+"px",borderBottomLeftRadius:P?"0px":B,borderBottomRightRadius:P?"0px":B,border:"2px solid white",backgroundColor:"gray",overflow:"hidden"},children:(0,a.jsx)(x.Z,{height:"100%",width:"100%",url:C.thumbnail_image,isPlaying:!0})})]})})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){},9778:function(){}}]);