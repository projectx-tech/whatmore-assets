"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[105],{8767:function(e,t,i){i.r(t),i.d(t,{default:function(){return E}});var n=i(7313),o=i(6090),r=i(7616),a=i(32),l=(i(6143),i(7850),i(4444),i(7244),i(123),i(5892),i(1811),i(9302)),d=i(2575),s=i(8866),c=i(7753),h=i(7129),p=i(364),m=i(9854),x=(i(9111),i(9778),i(4892)),u=i(9821),f=i(6417);var v=function(e){var t;const[i,o,r,a,l]=(0,u.Z)(),d=(0,c.MO)("whatmoreSecondaryColor"),s=(0,c.MO)("whatmorePrimaryFont"),h=(0,c.MO)("whatmoreShopId"),p=(0,c.MO)("whatmoreVideoTileSize"),v=(0,c.MO)("whatmoreVideoTileSizePortrait"),w="portrait"===e.mode?v:p,[g,y]=(0,n.useState)(!1),j=(0,m.f63)(h),b=e.event,E=e.onClick,S=e.removeBorders,P=o*w*.01,z=(0,m.eHp)(h);return(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,marginRight:S?"2px":(0,m.VwM)(h)+"px",marginTop:S?"2px":"5px",marginBottom:S?"2px":"5px",cursor:"pointer"},onClick:()=>{y(!0),E(b)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,borderRadius:"50%",overflow:"hidden",boxShadow:S?"":"0px 1px 1px 0px "+d+"50, 0px -1px 1px 0px "+j+"50, 1px 0px 1px 0px "+d+"50, -1px 0px 1px 0px "+j+"80, 1px -1px 1px 0px "+d+"80, -1px 1px 1px 0px "+j+"DA, 1px 1px 1px 0px "+d+"DA, -1px -1px 1px 0px "+j+"DA"},children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:P*z+"px",width:P*z+"px",borderRadius:"50%",backgroundColor:d,overflow:"hidden",border:"3px solid white"},children:(0,f.jsx)(x.Z,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})})}),(0,f.jsx)("div",{style:{fontFamily:s,paddingTop:"10px",fontSize:null!==(t=e.fontSize)&&void 0!==t?t:10},children:(0,f.jsx)("p",{children:b.title})})]})},w=i(8782),g=i(7381),y=i(5380),j=i(5333);const b=(0,d.Z)({key:"whatmore-css-cv"});var E=function(e){const[t]=(0,s.Z)(),[i,d]=(0,u.Z)(),x=(0,c.MO)("whatmoreVideoTileSize"),E=(0,c.MO)("whatmoreVideoTileSizePortrait"),S="portrait"===t?E:x,P="portrait"==t?0:(0,c.MO)("whatmoreLandscapePadding"),z=(0,c.MO)("whatmoreCollectionsTilesSpacing"),C=(0,c.MO)("whatmoreShopId"),{whatmoreRootId:L}=(0,n.useContext)(p.I),M=e.events,I=e.onClick,{whatmoreIsCollectionsTemplate:A}=(0,n.useContext)(p.I);function k(e){I(e)}const[R,O,V]=(0,j.YD)({triggerOnce:!1});delete r.ZP.styles.global;const Z=.055*d;var F=[];for(let n=0;n<M.length;)F.push((0,f.jsx)(v,{mode:t,event:M[n],onClick:()=>{k(M[n-1])},removeBorders:(0,m.Xtg)(C),fontSize:Z},"collections-tile-"+n)),n+=1;return(0,n.useEffect)((()=>{(0,g.Oo)("Video shopping powered by Whatmore!")}),[]),(0,n.useEffect)((()=>{a.IR.forEach((e=>{var t;const i=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data-wh="template-stories"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data="template-stories"]');if(!i)return;i&&e&&(e.style.minHeight="0px")}))}),[]),(0,f.jsx)(l.C,{value:b,children:(0,f.jsx)("div",{className:A?"whatmore-collection-events":"whatmore-carousel-events",children:(0,f.jsx)(o.x,{theme:r.ZP,cssVarsRoot:L,resetCSS:!1,children:(0,f.jsxs)(h.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,f.jsx)("div",{ref:R,style:{marginLeft:P+"px",marginRight:P+"px"},children:(0,f.jsx)(w.P,{renderElement:e=>(0,f.jsx)(f.Fragment,{children:e.eventData}),dataList:F,spacing:z,defaultHeight:i*S*.01+"px",defaultWidth:d*S*.01+"px",retainAlreadyRenderedElements:!0})}),(0,m.dhc)(C)&&!O&&-1==e.index&&(0,f.jsx)(y.Z,{event:M[0],inVideoClick:k,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},7129:function(e,t,i){i.d(t,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8782:function(e,t,i){i.d(t,{P:function(){return l}});var n=i(5333),o=i(7313),r=(i(123),i(6417));function a(e){const[t,i,o]=(0,n.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:i?e.renderElement({eventData:null===e||void 0===e?void 0:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function l(e){var t,i;return(0,o.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,i=!1;function n(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(i=!0,t=e.touches[0].clientX):(i=!0,t=e.clientX)}function o(n){if(!i)return;const o=n.touches?n.touches[0].clientX:n.clientX;e.style.pointerEvents="none";const r=2*(t-o);e.scrollLeft+=r,t=o}function r(t){e.style.pointerEvents="auto",i=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",n),e.addEventListener("touchmove",o),e.addEventListener("touchend",r)),e.addEventListener("mousedown",n),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:null===e||void 0===e||null===(i=e.dataList)||void 0===i?void 0:i.map(((t,i)=>(0,r.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+i)))})}},5380:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(4959),o=i(7313),r=i(4892),a=i(6805),l=i(7753),d=i(9821);var s=function(e){const[t,i,n,o,r]=(0,d.Z)(),[s]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[a.YP]===a.$w?c/100:s/100*1.2;return[t*h,i*h,r]},c=i(9723),h=i(9461),p=i.n(h),m=i(1195),x=i(7108),u=(i(7244),i(123),i(9854)),f=i(6417);var v=function(e){var t;const i=o.useRef(null);var[d,h,v]=s();const w=(0,l.MO)("whatmoreUITheme"),[g]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[y]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[j]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[b]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[E]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[S]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[P]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),z=(0,l.MO)("whatmoreShopId");var C=y,L=j,M=b;v[a.YP]===a.$w&&(C=E,L=S,M=P);const[I,A]=(0,o.useState)(["initial",window.pageYOffset]),[k,R]=(0,o.useState)(!1),O=null!==(t=e.isSpotlight)&&void 0!==t&&t,V=v[a.YP]===a.$w?.7*(0,u.zGA)(z):(0,u.zGA)(z),Z=O?V:1;d*=Z,h*=Z;const F=O?(0,u.G0o)(z):C,Y=O?(0,u.X8j)(z):(0,u.lVn)(z),[T,D]=(0,o.useState)(!O&&(0,u.eXi)(z));function $(e,t){A(e),e[1]<=100?R(!1):t!=k&&(R(t),D(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||($([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[I]),(0,n.O3)({ref:i,handler:()=>{$(["scrolled-up",I[1]],!0)}});const H=e.event,N=e.inVideoClick,_=e.closeClick,B=.3*h,W=.6*h,X=.1*h,q=.1*(.5*h),K="round"==w?"10px":"0px",G=(0,u.Z$A)(z);var U=!1,J=0,Q=0;function ee(e){U=e}return(0,f.jsx)("div",{children:T&&!Y?(0,f.jsx)(f.Fragment,{}):k&&Y?(0,f.jsx)("div",{style:"left"===F?{left:"1px",bottom:O?(0,u.vnu)(z)+"px":M+"px",position:"fixed",zIndex:G}:{right:"5px",bottom:O?(0,u.vnu)(z)+"px":M+"px",position:"fixed",zIndex:G},children:(0,f.jsxs)("div",{onClick:()=>{$(["initial",I[1]],!1)},style:{margin:"1px",width:h+"px",height:d+"px"},className:"left"===F?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,f.jsx)(r.Z,{url:H.thumbnail_image,isPlaying:!1,event:H})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,f.jsx)(m.Z,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:B+"px"},style:{position:"relative",zIndex:1,left:q+"px",bottom:q+"px"},onClick:_})})}),(0,f.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)(x.Z,{sx:{color:"white",fontSize:2*B+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,f.jsx)(p(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,J=i,Q=n},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{U&&(Math.abs(t.x-J)>5||Math.abs(t.y-Q)>5)?ee(!1):N(H)},children:(0,f.jsx)("div",{ref:i,style:"left"===F?{left:O?(0,u.$II)(z)+"px":L+"px",bottom:O?(0,u.vnu)(z)+"px":M+"px",position:"fixed",zIndex:G}:{right:O?(0,u.$II)(z)+"px":L+"px",bottom:O?(0,u.vnu)(z)+"px":M+"px",position:"fixed",zIndex:G},children:(0,f.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==z?d+"px":h+"px",height:e.isSpotlight&&"60122562760"==z?h+"px":d+"px"}),className:"left"===F?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==z?16/9:9/16},children:(0,f.jsx)(r.Z,{url:H.thumbnail_image,isMuted:!0,isPlaying:!0,event:H})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)(m.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:B+"px"},onClick:_,style:{position:"relative",zIndex:1,left:X+"px",bottom:X+"px"}})}),(0,f.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,f.jsx)(c.Z,{sx:{color:(0,u.Ya_)(z),fontSize:W+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,f.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:K,borderBottomRightRadius:K,backgroundImage:g?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,f.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*B+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",g]})})]})})]})})})})}},6805:function(e,t,i){i.d(t,{$I:function(){return l},$w:function(){return s},AK:function(){return r},AL:function(){return a},YP:function(){return o},me:function(){return n},rE:function(){return d}});const n="device_type",o="device_mode",r="mobile",a="tablet",l="desktop",d="portrait",s="landscape"},9821:function(e,t,i){var n=i(7753),o=i(8866),r=i(6805),a=i(9854);t.Z=function(e){const[t,i,l]=(0,o.Z)(),[d]=(0,n.j1)("whatmoreLandscapePadding"),[s]=(0,n.j1)("whatmoreShopId"),[c]=(0,n.j1)("whatmoreVideoTileSize"),[h]=(0,n.j1)("whatmoreVideoTileSizePortrait"),p=l>=1025,m="portrait"==t?h:c,x=!("portrait"!=t||!(l>=481)),u=m/100*1.3*.5,f=m/100;var v=Math.min(l,i),[w,g,y,j]=[.6*v*(16/9),.6*v,1.4,0];function b(e){return Math.round(10*e)/10}var E={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(p){const e=g*u,t=w*u;[w,g,y,j]=[t,e,(l-2*d-2*(0,a.mZU)(s))/(1.1*e),d],E[r.me]=r.$I,E[r.YP]=r.$w}else if(x){var S=.8*g,P=.8*w;"portrait"==t?(S*=f,P*=f,[w,g,y,j]=[P,S,b(l/(1.2*S)),0],E[r.me]=r.AL,E[r.YP]=r.rE):([w,g,y,j]=[P,S,(l-2*d)/(1.1*S),d],E[r.me]=r.AL,E[r.YP]=r.$w)}else{S=g,P=w;"portrait"==t?(S=S*f*.9,P=P*f*.9,[w,g,y,j]=[P,S,b(l/(1.15*S)),0],E[r.me]=r.AK,E[r.YP]=r.rE):(S=.7*g,P=.7*w,[w,g,y,j]=[P,S,(l-2*d)/(1.1*S),d],E[r.me]=r.AK,E[r.YP]=r.$w)}return[w,g,y,j,E]}},9111:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);