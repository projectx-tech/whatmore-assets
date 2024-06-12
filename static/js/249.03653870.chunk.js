"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[249],{7129:function(e,t,i){i.d(t,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,i){var n=i(7313),o=i(9854),r=i(7753),a=(i(9111),i(123),i(9778),i(4892)),l=i(7129),d=i(9821),s=i(6417);t.Z=function(e){var t;const[i,x,p,h,c]=(0,d.Z)(),[u]=(0,r.j1)("whatmoreSecondaryColor"),[m]=(0,r.j1)("whatmoreShopId"),[f]=(0,r.j1)("whatmoreCollectionsTileSize"),[w]=(0,r.j1)("whatmoreCollectionsTileSizePortrait"),v="portrait"===e.mode?w:f,[g,b]=(0,n.useState)(!1),j=(0,o.f63)(m);(0,n.useContext)(l.V);const y=e.event,S=e.onClick,C=e.removeBorders,E=i*v*.01,z=x*v*.01,k=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"40273707171"==m?"auto":z+"px",marginLeft:C?"2px":"5px",marginRight:C?"2px":(0,o.VwM)(m)+"px",marginTop:C?"2px":"5px",marginBottom:C?"2px":"5px",cursor:"pointer"},onClick:()=>{b(!0),S(y)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:k,overflow:"hidden",boxShadow:C?"":"0px 1px 1px 0px "+u+"50, 0px -1px 1px 0px "+j+"50, 1px 0px 1px 0px "+u+"50, -1px 0px 1px 0px "+j+"80, 1px -1px 1px 0px "+u+"80, -1px 1px 1px 0px "+j+"DA, 1px 1px 1px 0px "+u+"DA, -1px -1px 1px 0px "+j+"DA"},children:(0,s.jsx)("div",{className:"whatmore-collection-event-tile",style:{flexShrink:0,objectFit:"cover",height:E+"px",width:"40273707171"==m?"auto":z+"px",borderRadius:k,backgroundColor:"gray",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})})})})}},6066:function(e,t,i){var n=i(7313),o=i(9854),r=i(7753),a=(i(9111),i(123),i(9778),i(4892)),l=i(7129),d=i(9821),s=i(6417);t.Z=function(e){var t;const[i,x,p,h,c]=(0,d.Z)(),[u]=(0,r.j1)("whatmoreSecondaryColor"),[m]=(0,r.j1)("whatmoreShopId"),[f]=(0,r.j1)("whatmoreCollectionsTileSize"),[w]=(0,r.j1)("whatmoreCollectionsTileSizePortrait"),v="portrait"===e.mode?w:f,[g,b]=(0,n.useState)(!1),j=(0,o.f63)(m);(0,n.useContext)(l.V);const y=e.event1,S=e.event2,C=e.onClick,E=.01*v,z=i*E,k=i*E*.5,L=x*E,R=null!==(t=e.borderRadius)&&void 0!==t?t:"10%",P="15%",A=e.removeBorders;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",flexShrink:0,height:z+"px",width:L+"px",marginLeft:A?"2px":"5px",marginRight:A?"2px":"5px",marginTop:A?"2px":"5px",marginBottom:A?"2px":"5px",cursor:"pointer"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:A?"0px":R,boxShadow:A?"":"0px 1px 1px 0px "+u+"50, 0px -1px 1px 0px "+j+"50, 1px 0px 1px 0px "+u+"50, -1px 0px 1px 0px "+j+"80, 1px -1px 1px 0px "+u+"80, -1px 1px 1px 0px "+j+"DA, 1px 1px 1px 0px "+u+"DA, -1px -1px 1px 0px "+j+"DA"},onClick:()=>{b(!0),C(y)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:[(0,s.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:k+"px",width:L+"px",borderTopLeftRadius:A?"0px":P,borderTopRightRadius:A?"0px":P,borderBottom:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:y.thumbnail_image,isPlaying:!0,event:y})}),(0,s.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:k+"px",width:L+"px",borderBottomLeftRadius:A?"0px":P,borderBottomRightRadius:A?"0px":P,borderTop:"2px solid transparent",backgroundColor:"transparent",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:S.thumbnail_image,isPlaying:!0,event:S})})]})})}},8782:function(e,t,i){i.d(t,{P:function(){return l}});var n=i(3933),o=i(7313),r=(i(123),i(6417));function a(e){const{ref:t,inView:i,entry:o}=(0,n.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:i?e.renderElement({eventData:null===e||void 0===e?void 0:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function l(e){var t,i;return(0,o.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,i=!1;function n(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(i=!0,t=e.touches[0].clientX):(i=!0,t=e.clientX)}function o(n){if(!i)return;const o=n.touches?n.touches[0].clientX:n.clientX;e.style.pointerEvents="none";const r=2*(t-o);e.scrollLeft+=r,t=o}function r(t){e.style.pointerEvents="auto",i=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",n),e.addEventListener("touchmove",o),e.addEventListener("touchend",r)),e.addEventListener("mousedown",n),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:null===e||void 0===e||null===(i=e.dataList)||void 0===i?void 0:i.map(((t,i)=>(0,r.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+i)))})}},5380:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(4959),o=i(7313),r=i(4892),a=i(6805),l=i(7753),d=i(9821);var s=function(e){const[t,i,n,o,r]=(0,d.Z)(),[s]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[x]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),p=r[a.YP]===a.$w?x/100:s/100*1.2;return[t*p,i*p,r]},x=i(9723),p=i(9461),h=i.n(p),c=i(1195),u=i(7108),m=(i(7244),i(123),i(9854)),f=i(9852),w=i(6417);var v=function(e){var t;const i=o.useRef(null);var[d,p,v]=s();const{whatmoreUITheme:g}=(0,o.useContext)(f.I),[b]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[j]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[y]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[S]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[C]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[E]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[z]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),k=(0,l.MO)("whatmoreShopId");var L=j,R=y,P=S;v[a.YP]===a.$w&&(L=C,R=E,P=z);const[A,I]=(0,o.useState)(["initial",window.pageYOffset]),[B,F]=(0,o.useState)(!1),Z=null!==(t=e.isSpotlight)&&void 0!==t&&t,T=v[a.YP]===a.$w?.7*(0,m.zGA)(k):(0,m.zGA)(k),V=Z?T:1;d*=V,p*=V;const D=Z?(0,m.G0o)(k):L,M=Z?(0,m.X8j)(k):(0,m.lVn)(k),[N,Y]=(0,o.useState)(!Z&&(0,m.eXi)(k));function _(e,t){I(e),e[1]<=100?F(!1):t!=B&&(F(t),Y(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(_([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[A]),(0,n.O3)({ref:i,handler:()=>{_(["scrolled-up",A[1]],!0)}});const H=e.event,O=e.inVideoClick,X=e.closeClick,$=.3*p,W=.6*p,G=.1*p,q=.1*(.5*p),U="round"==g?"10px":"0px",J=(0,m.Z$A)(k);var K=!1,Q=0,ee=0;function te(e){K=e}return(0,w.jsx)("div",{children:N&&!M?(0,w.jsx)(w.Fragment,{}):B&&M?(0,w.jsx)("div",{style:"left"===D?{left:"1px",bottom:Z?(0,m.vnu)(k)+"px":P+"px",position:"fixed",zIndex:J}:{right:"5px",bottom:Z?(0,m.vnu)(k)+"px":P+"px",position:"fixed",zIndex:J},children:(0,w.jsxs)("div",{onClick:()=>{_(["initial",A[1]],!1)},style:{margin:"1px",width:p+"px",height:d+"px"},className:"left"===D?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,w.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:U,overflow:"hidden"},children:(0,w.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,w.jsx)(r.Z,{url:H.thumbnail_image,isPlaying:!1,event:H})})}),(0,w.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,w.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,w.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,w.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,w.jsx)(c.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:$+"px"},style:{position:"relative",zIndex:1,left:q+"px",bottom:q+"px"},onClick:X})})}),(0,w.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,w.jsx)(u.Z,{sx:{color:"white",fontSize:2*$+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,w.jsx)(h(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,Q=i,ee=n},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{K&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):O(H)},children:(0,w.jsx)("div",{ref:i,style:"left"===D?{left:Z?(0,m.$II)(k)+"px":R+"px",bottom:Z?(0,m.vnu)(k)+"px":P+"px",position:"fixed",zIndex:J}:{right:Z?(0,m.$II)(k)+"px":R+"px",bottom:Z?(0,m.vnu)(k)+"px":P+"px",position:"fixed",zIndex:J},children:(0,w.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:p+"px",height:d+"px"}),className:"left"===D?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,w.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:U,overflow:"hidden",position:"relative"},children:(0,w.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,w.jsx)(r.Z,{url:H.thumbnail_image,isMuted:!0,isPlaying:!0,event:H})})}),(0,w.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,w.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,w.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,w.jsx)(c.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:$+"px"},onClick:X,style:{position:"relative",zIndex:1,left:G+"px",bottom:G+"px"}})}),(0,w.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,w.jsx)(x.Z,{sx:{color:(0,m.Ya_)(k),fontSize:W+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,w.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:U,borderBottomRightRadius:U,backgroundImage:b?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,w.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*$+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",b]})})]})})]})})})})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);