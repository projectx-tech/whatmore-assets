"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[1],{4596:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var n=i(9950),o=i(9769),r=i(9108),l=i(5873),a=(i(3997),i(9130),i(4669),i(9733),i(4365),i(7229),i(6042),i(2682)),d=i(4910),s=i(7300),c=i(664),h=i(7509),p=i(4737),x=i(1348),m=(i(6125),i(6614),i(9879)),u=i(932),f=i(4414);var v=function(e){var t;const[i,o,r,l,a]=(0,u.A)(),d=(0,c.Xd)("whatmoreSecondaryColor"),s=(0,c.Xd)("whatmorePrimaryFont"),h=(0,c.Xd)("whatmoreShopId"),p=(0,c.Xd)("whatmoreVideoTileSize"),v=(0,c.Xd)("whatmoreVideoTileSizePortrait"),w="portrait"===e.mode?v:p,[g,y]=(0,n.useState)(!1),j=(0,x.ivI)(h),b=e.event,S=e.onClick,A=e.removeBorders,E=o*w*.01,z=(0,x.esc)(h);return(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,marginRight:A?"2px":(0,x.FZM)(h)+"px",marginTop:A?"2px":"5px",marginBottom:A?"2px":"5px",cursor:"pointer"},onClick:()=>{y(!0),S(b)},className:[g?"whatmore-scale-on-tap":""].join(" "),children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,borderRadius:"50%",overflow:"hidden",boxShadow:A?"":"0px 1px 1px 0px "+d+"50, 0px -1px 1px 0px "+j+"50, 1px 0px 1px 0px "+d+"50, -1px 0px 1px 0px "+j+"80, 1px -1px 1px 0px "+d+"80, -1px 1px 1px 0px "+j+"DA, 1px 1px 1px 0px "+d+"DA, -1px -1px 1px 0px "+j+"DA"},children:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{style:{flexShrink:0,objectFit:"cover",height:E*z+"px",width:E*z+"px",borderRadius:"50%",backgroundColor:d,overflow:"hidden",border:"3px solid white"},children:(0,f.jsx)(m.A,{height:"100%",width:"100%",url:b.thumbnail_image,isPlaying:!0,event:b})})})}),(0,f.jsx)("div",{style:{fontFamily:s,paddingTop:"10px",fontSize:null!==(t=e.fontSize)&&void 0!==t?t:10},children:(0,f.jsx)("p",{children:b.title})})]})},w=i(8385),g=i(6641),y=i(5901),j=i(6649);const b=(0,d.A)({key:"whatmore-css-cv"});var S=function(e){const[t]=(0,s.A)(),[i,d]=(0,u.A)(),m=(0,c.Xd)("whatmoreVideoTileSize"),S=(0,c.Xd)("whatmoreVideoTileSizePortrait"),A="portrait"===t?S:m,E="portrait"==t?0:(0,c.Xd)("whatmoreLandscapePadding"),z=(0,c.Xd)("whatmoreCollectionsTilesSpacing"),C=(0,c.Xd)("whatmoreShopId"),{whatmoreRootId:L}=(0,n.useContext)(p.B),k=e.events,N=e.onClick,{whatmoreIsCollectionsTemplate:P}=(0,n.useContext)(p.B);function R(e){N(e)}const[F,I,Q]=(0,j.A)({triggerOnce:!1});delete r.Ay.styles.global;const X=.055*d;var M=[];for(let n=0;n<k.length;)M.push((0,f.jsx)(v,{mode:t,event:k[n],onClick:()=>{R(k[n-1])},removeBorders:(0,x.U74)(C),fontSize:X},"collections-tile-"+n)),n+=1;return(0,n.useEffect)((()=>{(0,g.Fk)("Video shopping powered by Whatmore!")}),[]),(0,n.useEffect)((()=>{l.Sn.forEach((e=>{var t;const i=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data-wh="template-stories"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-stories"]')||e.querySelector('.whatmore-template-type[data="template-stories"]');if(!i)return;i&&e&&(e.style.minHeight="0px")}))}),[]),(0,f.jsx)(a.C,{value:b,children:(0,f.jsx)("div",{className:P?"whatmore-collection-events":"whatmore-carousel-events",children:(0,f.jsx)(o.s,{theme:r.Ay,cssVarsRoot:L,resetCSS:!1,children:(0,f.jsxs)(h.h.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,f.jsx)("div",{ref:F,style:{marginLeft:E+"px",marginRight:E+"px"},children:(0,f.jsx)(w.c,{renderElement:e=>(0,f.jsx)(f.Fragment,{children:e.eventData}),dataList:M,spacing:z,defaultHeight:i*A*.01+"px",defaultWidth:d*A*.01+"px",retainAlreadyRenderedElements:!0})}),(0,x.wQ2)(C)&&!I&&-1==e.index&&(0,f.jsx)(y.A,{event:k[0],inVideoClick:R,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}},7509:function(e,t,i){i.d(t,{h:function(){return n}});const n=(0,i(9950).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},8385:function(e,t,i){i.d(t,{c:function(){return a}});var n=i(6649),o=i(9950),r=(i(4365),i(4414));function l(e){const[t,i,o]=(0,n.A)({triggerOnce:e.retainAlreadyRenderedElements});return(0,r.jsx)("div",{ref:t,children:i?e.renderElement({eventData:null===e||void 0===e?void 0:e.data}):(0,r.jsx)("div",{style:{minWidth:e.defaultHeight,minHeight:e.defaultWidth}})})}function a(e){var t,i;return(0,o.useEffect)((()=>{const e=document.querySelector(".whatmore-carousel-horizontal-flex");let t,i=!1;function n(e){e.touches&&(null===e||void 0===e?void 0:e.touches.length)>0?(i=!0,t=e.touches[0].clientX):(i=!0,t=e.clientX)}function o(n){if(!i)return;const o=n.touches?n.touches[0].clientX:n.clientX;e.style.pointerEvents="none";const r=2*(t-o);e.scrollLeft+=r,t=o}function r(t){e.style.pointerEvents="auto",i=!1}return e&&("ontouchstart"in window&&(e.addEventListener("touchstart",n),e.addEventListener("touchmove",o),e.addEventListener("touchend",r)),e.addEventListener("mousedown",n),document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)),()=>{e&&("ontouchstart"in window&&(e.removeEventListener("touchstart",n),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",r)),e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r))}}),[]),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"fit-content",width:"100%",gap:null!==(t=e.spacing)&&void 0!==t?t:3},className:"whatmore-carousel-horizontal-flex",children:null===e||void 0===e||null===(i=e.dataList)||void 0===i?void 0:i.map(((t,i)=>(0,r.jsx)(l,{renderElement:e.renderElement,data:t,defaultHeight:e.defaultHeight,defaultWidth:e.defaultWidth,retainAlreadyRenderedElements:e.retainAlreadyRenderedElements},"key-"+i)))})}},5901:function(e,t,i){i.d(t,{A:function(){return v}});var n=i(2713),o=i(9950),r=i(9879),l=i(22),a=i(664),d=i(932);var s=function(e){const[t,i,n,o,r]=(0,d.A)(),[s]=(0,a.QN)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,a.QN)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[l.dl]===l.nN?c/100:s/100*1.2;return[t*h,i*h,r]},c=i(5727),h=i(1628),p=i.n(h),x=i(2209),m=i(6702),u=(i(9733),i(4365),i(1348)),f=i(4414);var v=function(e){var t;const i=o.useRef(null);var[d,h,v]=s();const w=(0,a.Xd)("whatmoreUITheme"),[g]=(0,a.QN)("whatmoreEmbedAppVideoTitle"),[y]=(0,a.QN)("whatmoreEmbedAppPositionPortrait"),[j]=(0,a.QN)("whatmoreEmbedAppHorizontalPaddingPortrait"),[b]=(0,a.QN)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,a.QN)("whatmoreEmbedAppPositionLandscape"),[A]=(0,a.QN)("whatmoreEmbedAppHorizontalPaddingLandscape"),[E]=(0,a.QN)("whatmoreEmbedAppVerticalPaddingLandscape"),z=(0,a.Xd)("whatmoreShopId");var C=y,L=j,k=b;v[l.dl]===l.nN&&(C=S,L=A,k=E);const[N,P]=(0,o.useState)(["initial",window.pageYOffset]),[R,F]=(0,o.useState)(!1),I=null!==(t=e.isSpotlight)&&void 0!==t&&t,Q=v[l.dl]===l.nN?.7*(0,u.O86)(z):(0,u.O86)(z),X=I?Q:1;d*=X,h*=X;const M=I?(0,u.LrK)(z):C,V=I?(0,u._2D)(z):(0,u.GSq)(z),[T,B]=(0,o.useState)(!I&&(0,u.n8Q)(z));function D(e,t){P(e),e[1]<=100?F(!1):t!=R&&(F(t),B(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(D([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[N]),(0,n.jz)({ref:i,handler:()=>{D(["scrolled-up",N[1]],!0)}});const H=e.event,O=e.inVideoClick,q=e.closeClick,W=.3*h,U=.6*h,_=.1*h,Y=.1*(.5*h),G="round"==w?"10px":"0px",K=(0,u.GvQ)(z);var Z=!1,J=0,$=0;function ee(e){Z=e}return(0,f.jsx)("div",{children:T&&!V?(0,f.jsx)(f.Fragment,{}):R&&V?(0,f.jsx)("div",{style:"left"===M?{left:"1px",bottom:I?(0,u.pUQ)(z)+"px":k+"px",position:"fixed",zIndex:K}:{right:"5px",bottom:I?(0,u.pUQ)(z)+"px":k+"px",position:"fixed",zIndex:K},children:(0,f.jsxs)("div",{onClick:()=>{D(["initial",N[1]],!1)},style:{margin:"1px",width:h+"px",height:d+"px"},className:"left"===M?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,f.jsx)(r.A,{url:H.thumbnail_image,isPlaying:!1,event:H})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,f.jsx)(x.A,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},style:{position:"relative",zIndex:1,left:Y+"px",bottom:Y+"px"},onClick:q})})}),(0,f.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)(m.A,{sx:{color:"white",fontSize:2*W+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,f.jsx)(p(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,J=i,$=n},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{Z&&(Math.abs(t.x-J)>5||Math.abs(t.y-$)>5)?ee(!1):O(H)},children:(0,f.jsx)("div",{ref:i,style:"left"===M?{left:I?(0,u.D2A)(z)+"px":L+"px",bottom:I?(0,u.pUQ)(z)+"px":k+"px",position:"fixed",zIndex:K}:{right:I?(0,u.D2A)(z)+"px":L+"px",bottom:I?(0,u.pUQ)(z)+"px":k+"px",position:"fixed",zIndex:K},children:(0,f.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==z?d+"px":h+"px",height:e.isSpotlight&&"60122562760"==z?h+"px":d+"px"}),className:"left"===M?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,f.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,f.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==z?16/9:9/16},children:(0,f.jsx)(r.A,{url:H.thumbnail_image,isMuted:!0,isPlaying:!0,event:H})})}),(0,f.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,f.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,f.jsx)(x.A,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},onClick:q,style:{position:"relative",zIndex:1,left:_+"px",bottom:_+"px"}})}),(0,f.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,f.jsx)(c.A,{sx:{color:(0,u.KFN)(z),fontSize:U+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,f.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:G,borderBottomRightRadius:G,backgroundImage:g?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,f.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*W+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",g]})})]})})]})})})})}},6125:function(){},7229:function(){},4669:function(){},6042:function(){},3997:function(){},9130:function(){},6614:function(){}}]);