"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[731],{7129:function(e,t,i){i.d(t,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8631:function(e,t,i){var n=i(7313),o=i(9854),r=i(7753),a=(i(9111),i(123),i(9778),i(4892)),l=(i(7129),i(9821)),d=i(364),s=i(6417);t.Z=function(e){var t;const[i,p]=(0,l.Z)(),[c]=(0,r.j1)("whatmoreSecondaryColor"),[h]=(0,r.j1)("whatmoreShopId"),[x]=(0,r.j1)("whatmoreVideoTileSize"),[u]=(0,r.j1)("whatmoreVideoTileSizePortrait"),m="portrait"===e.mode?u:x,f=(0,r.j1)("whatmorePrimaryFont"),{whatmoreWidgetSourceDetails:v}=(0,n.useContext)(d.I),[w,g]=(0,n.useState)(!1),y=(0,o.f63)(h),j=v.landingLocationType,b=e.event,E=e.onClick,P=e.removeBorders,S=i*m*.01,z=p*m*.01,L=null!==(t=e.borderRadius)&&void 0!==t?t:"0%";return(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:(0,o.XnJ)(h)?"auto":z+"px",marginLeft:P?"2px":"5px",marginRight:P?"2px":(0,o.VwM)(h)+"px",marginTop:P?"2px":"5px",marginBottom:P?"2px":"5px",cursor:"pointer"},onClick:()=>{g(!0),E(b)},className:[w?"whatmore-scale-on-tap":""].join(" "),children:[(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:L,overflow:"hidden",boxShadow:P?"":"0px 1px 1px 0px "+c+"50, 0px -1px 1px 0px "+y+"50, 1px 0px 1px 0px "+c+"50, -1px 0px 1px 0px "+y+"80, 1px -1px 1px 0px "+c+"80, -1px 1px 1px 0px "+y+"DA, 1px 1px 1px 0px "+c+"DA, -1px -1px 1px 0px "+y+"DA"},children:(0,s.jsx)("div",{className:"whatmore-collection-event-tile",style:{flexShrink:0,objectFit:"cover",height:S+"px",width:"40273707171"==h?"auto":z+"px",borderRadius:L,backgroundColor:"gray",overflow:"hidden"},children:(0,s.jsx)(a.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})}),j.startsWith("product")&&(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 4px 0 4px"},children:(0,s.jsx)("p",{ref:t=>{var i;t&&(t.style.setProperty("font-family",f,"important"),t.style.setProperty("font-size",(null!==(i=e.fontSize)&&void 0!==i?i:10)+"px","important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},children:null===b||void 0===b?void 0:b.title})})]})}},8782:function(e,t,i){i.d(t,{P:function(){return l}});var n=i(6775),o=i(7313),r=(i(123),i(6417));function a(e){const[t,i,o]=(0,n.Z)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:i?e.renderElement({eventData:null===e||void 0===e?void 0:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function l(e){var t,i;return(0,o.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,i=!1;function n(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(i=!0,t=e.touches[0].clientX):(i=!0,t=e.clientX)}function o(n){if(!i)return;const o=n.touches?n.touches[0].clientX:n.clientX;e.style.pointerEvents="none";const r=2*(t-o);e.scrollLeft+=r,t=o}function r(t){e.style.pointerEvents="auto",i=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",n),e.addEventListener("touchmove",o),e.addEventListener("touchend",r)),e.addEventListener("mousedown",n),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:null===e||void 0===e||null===(i=e.dataList)||void 0===i?void 0:i.map(((t,i)=>(0,r.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+i)))})}},5380:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(4959),o=i(7313),r=i(4892),a=i(6805),l=i(7753),d=i(9821);var s=function(e){const[t,i,n,o,r]=(0,d.Z)(),[s]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[p]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),c=r[a.YP]===a.$w?p/100:s/100*1.2;return[t*c,i*c,r]},p=i(9723),c=i(9461),h=i.n(c),x=i(1195),u=i(7108),m=(i(7244),i(123),i(9854)),f=i(6417);var v=function(e){var t;const i=o.useRef(null);var[d,c,v]=s();const w=(0,l.MO)("whatmoreUITheme"),[g]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[y]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[j]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[b]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[E]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[P]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[S]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),z=(0,l.MO)("whatmoreShopId");var L=y,A=j,k=b;v[a.YP]===a.$w&&(L=E,A=P,k=S);const[C,I]=(0,o.useState)(["initial",window.pageYOffset]),[R,Z]=(0,o.useState)(!1),M=null!==(t=e.isSpotlight)&&void 0!==t&&t,V=v[a.YP]===a.$w?.7*(0,m.zGA)(z):(0,m.zGA)(z),Y=M?V:1;d*=Y,c*=Y;const F=M?(0,m.G0o)(z):L,$=M?(0,m.X8j)(z):(0,m.lVn)(z),[D,N]=(0,o.useState)(!M&&(0,m.eXi)(z));function T(e,t){I(e),e[1]<=100?Z(!1):t!=R&&(Z(t),N(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(T([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[C]),(0,n.O3)({ref:i,handler:()=>{T(["scrolled-up",C[1]],!0)}});const _=e.event,O=e.inVideoClick,H=e.closeClick,W=.3*c,X=.6*c,B=.1*c,K=.1*(.5*c),G="round"==w?"10px":"0px",q=(0,m.Z$A)(z);var U=!1,J=0,Q=0;function ee(e){U=e}return(0,f.jsx)("div",{children:D&&!$?(0,f.jsx)(f.Fragment,{}):R&&$?(0,f.jsx)("div",{style:"left"===F?{left:"1px",bottom:M?(0,m.vnu)(z)+"px":k+"px",position:"fixed",zIndex:q}:{right:"5px",bottom:M?(0,m.vnu)(z)+"px":k+"px",position:"fixed",zIndex:q},children:(0,f.jsxs)("div",{onClick:()=>{T(["initial",C[1]],!1)},style:{margin:"1px",width:c+"px",height:d+"px"},className:"left"===F?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,f.jsx)(r.Z,{url:_.thumbnail_image,isPlaying:!1,event:_})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,f.jsx)(x.Z,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},style:{position:"relative",zIndex:1,left:K+"px",bottom:K+"px"},onClick:H})})}),(0,f.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)(u.Z,{sx:{color:"white",fontSize:2*W+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,f.jsx)(h(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,J=i,Q=n},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{U&&(Math.abs(t.x-J)>5||Math.abs(t.y-Q)>5)?ee(!1):O(_)},children:(0,f.jsx)("div",{ref:i,style:"left"===F?{left:M?(0,m.$II)(z)+"px":A+"px",bottom:M?(0,m.vnu)(z)+"px":k+"px",position:"fixed",zIndex:q}:{right:M?(0,m.$II)(z)+"px":A+"px",bottom:M?(0,m.vnu)(z)+"px":k+"px",position:"fixed",zIndex:q},children:(0,f.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==z?d+"px":c+"px",height:e.isSpotlight&&"60122562760"==z?c+"px":d+"px"}),className:"left"===F?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==z?16/9:9/16},children:(0,f.jsx)(r.Z,{url:_.thumbnail_image,isMuted:!0,isPlaying:!0,event:_})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)(x.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},onClick:H,style:{position:"relative",zIndex:1,left:B+"px",bottom:B+"px"}})}),(0,f.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,f.jsx)(p.Z,{sx:{color:(0,m.Ya_)(z),fontSize:X+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,f.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:G,borderBottomRightRadius:G,backgroundImage:g?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,f.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*W+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",g]})})]})})]})})})})}},6805:function(e,t,i){i.d(t,{$I:function(){return l},$w:function(){return s},AK:function(){return r},AL:function(){return a},YP:function(){return o},me:function(){return n},rE:function(){return d}});const n="device_type",o="device_mode",r="mobile",a="tablet",l="desktop",d="portrait",s="landscape"},9821:function(e,t,i){var n=i(7753),o=i(8866),r=i(6805),a=i(9854);t.Z=function(e){const[t,i,l]=(0,o.Z)(),[d]=(0,n.j1)("whatmoreLandscapePadding"),[s]=(0,n.j1)("whatmoreShopId"),[p]=(0,n.j1)("whatmoreVideoTileSize"),[c]=(0,n.j1)("whatmoreVideoTileSizePortrait"),h=l>=1025,x="portrait"==t?c:p,u=!("portrait"!=t||!(l>=481)),m=x/100*1.3*.5,f=x/100;var v=Math.min(l,i),[w,g,y,j]=[.6*v*(16/9),.6*v,1.4,0];function b(e){return Math.round(10*e)/10}var E={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(h){const e=g*m,t=w*m;[w,g,y,j]=[t,e,(l-2*d-2*(0,a.mZU)(s))/(1.1*e),d],E[r.me]=r.$I,E[r.YP]=r.$w}else if(u){var P=.8*g,S=.8*w;"portrait"==t?(P*=f,S*=f,[w,g,y,j]=[S,P,b(l/(1.2*P)),0],E[r.me]=r.AL,E[r.YP]=r.rE):([w,g,y,j]=[S,P,(l-2*d)/(1.1*P),d],E[r.me]=r.AL,E[r.YP]=r.$w)}else{P=g,S=w;"portrait"==t?(P=P*f*.9,S=S*f*.9,[w,g,y,j]=[S,P,b(l/(1.15*P)),0],E[r.me]=r.AK,E[r.YP]=r.rE):(P=.7*g,S=.7*w,[w,g,y,j]=[S,P,(l-2*d)/(1.1*P),d],E[r.me]=r.AK,E[r.YP]=r.$w)}return[w,g,y,j,E]}},9111:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);