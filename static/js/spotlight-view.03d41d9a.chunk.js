"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[312],{3388:function(e,t,i){i.d(t,{OC:function(){return a},e8:function(){return r},kT:function(){return n},kW:function(){return l},xg:function(){return o}});const n=function(e,t){return!((void 0==e.products||0==e.products.length)&&(void 0==e.cta||0==e.cta.length))},o=function(e,t){return!(void 0==e.products||0==e.products.length)},r=function(e,t){if(null!=e)return e},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e)return t?e.events[0].events:e.events};const a=function(e,t){var i;if(null==e)return[];if(!("eventsets"in e))return[];const n=null!==(i=e.eventsets[t])&&void 0!==i?i:null;return n?function(e){if(null==e||0==e.length)return[];let t=[];return e.forEach((e=>{e.events.forEach((e=>{t.push(e)}))})),t}(n):[]}},5380:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(4959),o=i(7313),r=i(4892),l=i(6805),a=i(7753),s=i(9821);var d=function(e){const[t,i,n,o,r]=(0,s.Z)(),[d]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[l.YP]===l.$w?c/100:d/100*1.2;return[t*h,i*h,r]},c=i(9723),h=i(9461),p=i.n(h),u=i(1195),x=i(7108),f=(i(7244),i(123),i(9854)),g=i(6417);var m=function(e){var t;const i=o.useRef(null);var[s,h,m]=d();const v=(0,a.MO)("whatmoreUITheme"),[w]=(0,a.j1)("whatmoreEmbedAppVideoTitle"),[j]=(0,a.j1)("whatmoreEmbedAppPositionPortrait"),[b]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[y]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,a.j1)("whatmoreEmbedAppPositionLandscape"),[I]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[E]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),z=(0,a.MO)("whatmoreShopId");var _=j,P=b,k=y;m[l.YP]===l.$w&&(_=S,P=I,k=E);const[C,L]=(0,o.useState)(["initial",window.pageYOffset]),[O,A]=(0,o.useState)(!1),M=null!==(t=e.isSpotlight)&&void 0!==t&&t,T=m[l.YP]===l.$w?.7*(0,f.zGA)(z):(0,f.zGA)(z),V=M?T:1;s*=V,h*=V;const F=M?(0,f.G0o)(z):_,Z=M?(0,f.X8j)(z):(0,f.lVn)(z),[D,N]=(0,o.useState)(!M&&(0,f.eXi)(z));function R(e,t){L(e),e[1]<=100?A(!1):t!=O&&(A(t),N(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(R([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[C]),(0,n.O3)({ref:i,handler:()=>{R(["scrolled-up",C[1]],!0)}});const Y=e.event,W=e.inVideoClick,$=e.closeClick,B=.3*h,G=.6*h,H=.1*h,K=.1*(.5*h),U="round"==v?"10px":"0px",X=(0,f.Z$A)(z);var q=!1,J=0,Q=0;function ee(e){q=e}return(0,g.jsx)("div",{children:D&&!Z?(0,g.jsx)(g.Fragment,{}):O&&Z?(0,g.jsx)("div",{style:"left"===F?{left:"1px",bottom:M?(0,f.vnu)(z)+"px":k+"px",position:"fixed",zIndex:X}:{right:"5px",bottom:M?(0,f.vnu)(z)+"px":k+"px",position:"fixed",zIndex:X},children:(0,g.jsxs)("div",{onClick:()=>{R(["initial",C[1]],!1)},style:{margin:"1px",width:h+"px",height:s+"px"},className:"left"===F?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,g.jsx)("div",{style:{overflow:"hidden"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,g.jsx)(r.Z,{url:Y.thumbnail_image,isPlaying:!1,event:Y})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,g.jsx)(u.Z,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:B+"px"},style:{position:"relative",zIndex:1,left:K+"px",bottom:K+"px"},onClick:$})})}),(0,g.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)(x.Z,{sx:{color:"white",fontSize:2*B+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,g.jsx)(p(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,J=i,Q=n},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{q&&(Math.abs(t.x-J)>5||Math.abs(t.y-Q)>5)?ee(!1):W(Y)},children:(0,g.jsx)("div",{ref:i,style:"left"===F?{left:M?(0,f.$II)(z)+"px":P+"px",bottom:M?(0,f.vnu)(z)+"px":k+"px",position:"fixed",zIndex:X}:{right:M?(0,f.$II)(z)+"px":P+"px",bottom:M?(0,f.vnu)(z)+"px":k+"px",position:"fixed",zIndex:X},children:(0,g.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==z?s+"px":h+"px",height:e.isSpotlight&&"60122562760"==z?h+"px":s+"px"}),className:"left"===F?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,g.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==z?16/9:9/16},children:(0,g.jsx)(r.Z,{url:Y.thumbnail_image,isMuted:!0,isPlaying:!0,event:Y})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)(u.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:B+"px"},onClick:$,style:{position:"relative",zIndex:1,left:H+"px",bottom:H+"px"}})}),(0,g.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,g.jsx)(c.Z,{sx:{color:(0,f.Ya_)(z),fontSize:G+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,g.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:U,borderBottomRightRadius:U,backgroundImage:w?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,g.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*B+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",w]})})]})})]})})})})}},2209:function(e,t,i){i.r(t);var n=i(7313),o=i(9854),r=i(2860),l=i(7753),a=i(5160),s=i(6967),d=i(5380),c=i(58),h=i(8984),p=i(4669),u=i(513),x=i(9302),f=i(7381),g=i(2575),m=i(7300),v=i(6524),w=i(3388),j=i(7643),b=i(778),y=i(364),S=i(6417);const I=(0,g.Z)({key:"whatmore-css-wsv"}),E=n.lazy((()=>Promise.all([i.e(819),i.e(577),i.e(351),i.e(587),i.e(926),i.e(824),i.e(818),i.e(311)]).then(i.bind(i,3818))));t.default=function(e){const[t,i]=(0,n.useState)(),[g,z]=(0,n.useState)(),[_]=(0,l.j1)("isInDesignMode"),[P]=(0,l.j1)("isDemoBrand"),[k,C]=(0,n.useState)(-2),[L]=(0,l.j1)("whatmoreShopId"),O=(0,l.MO)("isLandingSharedLink"),A=(0,l.MO)("whatmoreShareTemplateId"),M=((0,l.MO)("whatmoreShareStoryId"),(0,l.MO)("whatmoreShareEventId")),T=(0,l.MO)("whatmoreLandingLocationType"),V=(0,l.MO)("whatmoreLoggingActive"),{whatmoreWidgetSourceDetails:F}=(0,n.useContext)(y.I);var Z=(0,o.efR)(L)?r.Dm+"/get_eventset/":r.Gc+"/get_eventset/";(0,n.useEffect)((()=>{(0,s.hb)()}),[]),(0,n.useEffect)((()=>{(0,p.ll)(L)}),[]),(0,n.useEffect)((()=>{null==t||0==t.length||g||!(0,h.KE)()||(0,l.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,n.useEffect)((()=>{C(-1);const e=v.NX,t=(0,v.H1)(T),n=Z.toString()+L.toString()+"?eventset_type="+e+"&source="+t+"&source_id="+L;fetch(n).then((e=>e.json())).then((t=>(0,w.OC)(t,e))).then((e=>(i(e),e))).catch((e=>{z(e.message)}))}),[]),(0,n.useEffect)((()=>{C(-2)}),[t]),(0,n.useEffect)((()=>{null==t||0==t.length||g||O&&"template-embed"==(0,v.zv)(A)&&null!=M&&t.forEach(((e,t)=>{M==e.event_id&&R(e,!0,t)}))}),[t]);const D=F.landingLocationType,N=F.templateType,R=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,h.KE)()&&!t&&(0,c.QV)(),(0,m.B6)(e)||(0,m.WJ)(e))return _||P||(async()=>{const t=(0,v.NY)(D)+(0,v.dS)(N)+"_"+(null===e||void 0===e?void 0:e.event_id);(0,a.wh)(e),(0,p.Tc)(L,r.h7,r.dU),(0,s.H4)(e.event_id,e.products,"spotlight","video_popup",t)})(),void C(i)};function Y(){return(0,S.jsx)(S.Fragment,{})}return null==t||0==t.length||g?(0,S.jsx)("div",{}):(V&&(0,f.EI)(t),(0,o.B$L)(L)&&k<0&&null!==localStorage.getItem("_whatmore_spotlight_viewed")?(0,S.jsx)(S.Fragment,{}):(localStorage.setItem("_whatmore_spotlight_viewed",!0),(0,S.jsx)(x.C,{value:I,children:-1===k||0===t.length?(0,S.jsx)(Y,{}):-2===k&&t.length>0?(0,S.jsx)("div",{children:(0,S.jsx)(j.u,{userInteractionType:b.K.SPOTLIGHT_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!P,children:(0,S.jsx)(d.Z,{event:t[0],inVideoClick:R,closeClick:e=>{e.stopPropagation(),C(-1)},isSpotlight:!0})})}):(0,S.jsx)("div",{children:(0,S.jsx)(n.Suspense,{children:(0,S.jsx)(j.u,{userInteractionType:b.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!_&&!P,children:(0,S.jsx)(E,{events:t,index:k,onBack:function(){(0,o.n2L)(L)&&(0,l.MO)("whatmoreAddedToCart")&&(0,u.D)(L,(()=>{}),100,window.location.hostname),C(-2)},template:"template-embed"})})})})})))}}}]);