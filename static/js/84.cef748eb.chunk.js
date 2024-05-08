"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[84],{8767:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var n=i(7313),o=i(6090),r=i(7616),a=i(9039),l=(i(6143),i(7850),i(4444),i(7244),i(123),i(5892),i(1811),i(9302)),d=i(2575),s=i(8866),c=i(7753),h=i(7129),p=i(9854),x=(i(9111),i(9778),i(4892)),m=i(9821),u=i(6417);var f=function(e){const[t,i,o,r,a]=(0,m.Z)(),l=(0,c.MO)("whatmoreSecondaryColor"),d=(0,c.MO)("whatmoreShopId"),s=(0,c.MO)("whatmoreCollectionsTileSize"),[h,f]=(0,n.useState)(!1),w=(0,p.f63)(d),v=e.event,g=e.onClick,y=e.removeBorders,j=i*s*.01,b=(0,p.eHp)(d);return(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,marginRight:y?"2px":(0,p.VwM)(d)+"px",marginTop:y?"2px":"5px",marginBottom:y?"2px":"5px",cursor:"pointer"},onClick:()=>{f(!0),g(v)},className:[h?"whatmore-scale-on-tap":""].join(" "),children:(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,borderRadius:"50%",overflow:"hidden",boxShadow:y?"":"0px 1px 1px 0px "+l+"50, 0px -1px 1px 0px "+w+"50, 1px 0px 1px 0px "+l+"50, -1px 0px 1px 0px "+w+"80, 1px -1px 1px 0px "+l+"80, -1px 1px 1px 0px "+w+"DA, 1px 1px 1px 0px "+l+"DA, -1px -1px 1px 0px "+w+"DA"},children:(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:j*b+"px",width:j*b+"px",borderRadius:"50%",backgroundColor:l,overflow:"hidden"},children:(0,u.jsx)(x.Z,{height:"100%",width:"100%",url:v.thumbnail_image,isPlaying:!0,event:v})})})})})},w=i(8782),v=i(7381),g=i(5380),y=i(3933);const j=(0,d.Z)({key:"whatmore-css-cv"});var b=function(e){const[t,i,d]=(0,s.Z)(),[x,b,E,S,C]=(0,m.Z)(),z=(0,c.MO)("whatmoreCollectionsTileSize"),P="portrait"==t?0:(0,c.MO)("whatmoreLandscapePadding"),L=(0,c.MO)("whatmoreCollectionsTilesSpacing"),M=(0,c.MO)("whatmoreShopId"),[k]=(0,c.MO)("whatmorePrimaryColor"),{whatmoreRootId:R}=(0,n.useContext)(a.I),A=e.events,I=e.onClick;(0,c.MO)("whatmoreTitleFont");function O(e){I(e)}"portrait"==t?(0,c.MO)("whatmoreTitleFontSizePortrait"):(0,c.MO)("whatmoreTitleFontSize"),(0,p.aRS)(M);const[F,Z,B]=(0,y.YD)({triggerOnce:!1});delete r.ZP.styles.global;var V=[];for(let n=0;n<A.length;)V.push((0,u.jsx)(f,{event:A[n],onClick:()=>{O(A[n-1])},removeBorders:(0,p.Xtg)(M)},"collections-tile-"+n)),n+=1;return(0,n.useEffect)((()=>{(0,v.Oo)("Video shopping powered by Whatmore!")}),[]),(0,n.useEffect)((()=>{a.$.forEach((e=>{var t;const i=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-stories"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-stories"]');if(!i)return;i&&e&&(e.style.minHeight="0px")}))}),[]),(0,u.jsx)(l.C,{value:j,children:(0,u.jsx)("div",{children:(0,u.jsx)(o.x,{theme:r.ZP,cssVarsRoot:R,resetCSS:!1,children:(0,u.jsxs)(h.V.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,u.jsx)("div",{ref:F,style:{marginLeft:P+"px",marginRight:P+"px"},children:(0,u.jsx)(w.P,{renderElement:e=>(0,u.jsx)(u.Fragment,{children:e.eventData}),dataList:V,spacing:L,defaultHeight:x*z*.01+"px",defaultWidth:b*z*.01+"px",retainAlreadyRenderedElements:!0})}),(0,p.dhc)(M)&&!Z&&-1==e.index&&(0,u.jsx)(g.Z,{event:A[0],inVideoClick:O,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},7129:function(e,t,i){i.d(t,{V:function(){return n}});const n=(0,i(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8782:function(e,t,i){i.d(t,{P:function(){return l}});var n=i(3933),o=i(7313),r=(i(123),i(6417));function a(e){const{ref:t,inView:i,entry:o}=(0,n.YD)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:i?e.renderElement({eventData:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function l(e){var t;return(0,o.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,i=!1;function n(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(i=!0,t=e.touches[0].clientX):(i=!0,t=e.clientX)}function o(n){if(!i)return;const o=n.touches?n.touches[0].clientX:n.clientX;e.style.pointerEvents="none";const r=2*(t-o);e.scrollLeft+=r,t=o}function r(t){e.style.pointerEvents="auto",i=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",n),e.addEventListener("touchmove",o),e.addEventListener("touchend",r)),e.addEventListener("mousedown",n),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:e.dataList.map(((t,i)=>(0,r.jsx)(a,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+i)))})}},5380:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(4959),o=i(7313),r=i(4892),a=i(6805),l=i(7753),d=i(9821);var s=function(e){const[t,i,n,o,r]=(0,d.Z)(),[s]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[a.YP]===a.$w?c/100:s/100*1.2;return[t*h,i*h,r]},c=i(9723),h=i(9461),p=i.n(h),x=i(1195),m=i(7108),u=(i(7244),i(123),i(9854)),f=i(9039),w=i(6417);var v=function(e){var t;const i=o.useRef(null);var[d,h,v]=s();const{whatmoreUITheme:g}=(0,o.useContext)(f.I),[y]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[j]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[b]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[E]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[C]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[z]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,l.MO)("whatmoreShopId");var L=j,M=b,k=E;v[a.YP]===a.$w&&(L=S,M=C,k=z);const[R,A]=(0,o.useState)(["initial",window.pageYOffset]),[I,O]=(0,o.useState)(!1),F=null!==(t=e.isSpotlight)&&void 0!==t&&t,Z=v[a.YP]===a.$w?.7*(0,u.zGA)(P):(0,u.zGA)(P),B=F?Z:1;d*=B,h*=B;const V=F?(0,u.G0o)(P):L,T=F?(0,u.X8j)(P):(0,u.lVn)(P),[D,H]=(0,o.useState)(!F&&(0,u.eXi)(P));function N(e,t){A(e),e[1]<=100?O(!1):t!=I&&(O(t),H(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(N([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[R]),(0,n.O3)({ref:i,handler:()=>{N(["scrolled-up",R[1]],!0)}});const Y=e.event,W=e.inVideoClick,X=e.closeClick,$=.3*h,_=.6*h,q=.1*h,G=.1*(.5*h),U="round"==g?"10px":"0px",J=(0,u.Z$A)(P);var K=!1,Q=0,ee=0;function te(e){K=e}return(0,w.jsx)("div",{children:D&&!T?(0,w.jsx)(w.Fragment,{}):I&&T?(0,w.jsx)("div",{style:"left"===V?{left:"1px",bottom:F?(0,u.vnu)(P)+"px":k+"px",position:"fixed",zIndex:J}:{right:"5px",bottom:F?(0,u.vnu)(P)+"px":k+"px",position:"fixed",zIndex:J},children:(0,w.jsxs)("div",{onClick:()=>{N(["initial",R[1]],!1)},style:{margin:"1px",width:h+"px",height:d+"px"},className:"left"===V?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,w.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:U,overflow:"hidden"},children:(0,w.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,w.jsx)(r.Z,{url:Y.thumbnail_image,isPlaying:!1,event:Y})})}),(0,w.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,w.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,w.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,w.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,w.jsx)(x.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:$+"px"},style:{position:"relative",zIndex:1,left:G+"px",bottom:G+"px"},onClick:X})})}),(0,w.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,w.jsx)(m.Z,{sx:{color:"white",fontSize:2*$+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,w.jsx)(p(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,Q=i,ee=n},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{K&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):W(Y)},children:(0,w.jsx)("div",{ref:i,style:"left"===V?{left:F?(0,u.$II)(P)+"px":M+"px",bottom:F?(0,u.vnu)(P)+"px":k+"px",position:"fixed",zIndex:J}:{right:F?(0,u.$II)(P)+"px":M+"px",bottom:F?(0,u.vnu)(P)+"px":k+"px",position:"fixed",zIndex:J},children:(0,w.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:h+"px",height:d+"px"}),className:"left"===V?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,w.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:U,overflow:"hidden",position:"relative"},children:(0,w.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,w.jsx)(r.Z,{url:Y.thumbnail_image,isMuted:!0,isPlaying:!0,event:Y})})}),(0,w.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,w.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,w.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,w.jsx)(x.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:$+"px"},onClick:X,style:{position:"relative",zIndex:1,left:q+"px",bottom:q+"px"}})}),(0,w.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,w.jsx)(c.Z,{sx:{color:(0,u.Ya_)(P),fontSize:_+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,w.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:U,borderBottomRightRadius:U,backgroundImage:y?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,w.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*$+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",y]})})]})})]})})})})}},9111:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){},9778:function(){}}]);