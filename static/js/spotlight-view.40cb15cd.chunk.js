"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[312],{3388:function(e,t,n){n.d(t,{OC:function(){return l},e8:function(){return r},kT:function(){return i},kW:function(){return a},xg:function(){return o}});const i=function(e,t){return!((void 0==e.products||0==e.products.length)&&(void 0==e.cta||0==e.cta.length))},o=function(e,t){return!(void 0==e.products||0==e.products.length)},r=function(e,t){if(null!=e)return e},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e)return t?e.events[0].events:e.events};const l=function(e,t){var n;if(null==e)return[];if(!("eventsets"in e))return[];const i=null!==(n=e.eventsets[t])&&void 0!==n?n:null;return i?function(e){if(null==e||0==e.length)return[];let t=[];return e.forEach((e=>{e.events.forEach((e=>{t.push(e)}))})),t}(i):[]}},5380:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(4959),o=n(7313),r=n(4892),a=n(6805),l=n(7753),s=n(9821);var d=function(e){const[t,n,i,o,r]=(0,s.Z)(),[d]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[a.YP]===a.$w?c/100:d/100*1.2;return[t*h,n*h,r]},c=n(9723),h=n(9461),u=n.n(h),p=n(1195),f=n(7108),m=(n(7244),n(123),n(9854)),x=n(6417);var g=function(e){var t;const n=o.useRef(null);var[s,h,g]=d();const v=(0,l.MO)("whatmoreUITheme"),[w]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[j]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[b]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[y]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[E]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[S]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[I]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,l.MO)("whatmoreShopId");var z=j,_=b,L=y;g[a.YP]===a.$w&&(z=E,_=S,L=I);const[A,C]=(0,o.useState)(["initial",window.pageYOffset]),[k,O]=(0,o.useState)(!1),M=null!==(t=e.isSpotlight)&&void 0!==t&&t,T=g[a.YP]===a.$w?.7*(0,m.zGA)(P):(0,m.zGA)(P),V=M?T:1;s*=V,h*=V;const Y=M?(0,m.G0o)(P):z,Z=M?(0,m.X8j)(P):(0,m.lVn)(P),[D,$]=(0,o.useState)(!M&&(0,m.eXi)(P));function F(e,t){C(e),e[1]<=100?O(!1):t!=k&&(O(t),$(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(F([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},i=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[A]),(0,i.O3)({ref:n,handler:()=>{F(["scrolled-up",A[1]],!0)}});const R=e.event,N=e.inVideoClick,K=e.closeClick,W=.3*h,B=.6*h,G=.1*h,H=.1*(.5*h),U="round"==v?"10px":"0px",X=(0,m.Z$A)(P);var q=!1,J=0,Q=0;function ee(e){q=e}return(0,x.jsx)("div",{children:D&&!Z?(0,x.jsx)(x.Fragment,{}):k&&Z?(0,x.jsx)("div",{style:"left"===Y?{left:"1px",bottom:M?(0,m.vnu)(P)+"px":L+"px",position:"fixed",zIndex:X}:{right:"5px",bottom:M?(0,m.vnu)(P)+"px":L+"px",position:"fixed",zIndex:X},children:(0,x.jsxs)("div",{onClick:()=>{F(["initial",A[1]],!1)},style:{margin:"1px",width:h+"px",height:s+"px"},className:"left"===Y?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,x.jsx)("div",{style:{overflow:"hidden"},children:(0,x.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,x.jsx)(r.Z,{url:R.thumbnail_image,isPlaying:!1,event:R})})}),(0,x.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,x.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,x.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,x.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,x.jsx)(p.Z,{sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},style:{position:"relative",zIndex:1,left:H+"px",bottom:H+"px"},onClick:K})})}),(0,x.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,x.jsx)(f.Z,{sx:{color:"white",fontSize:2*W+"px",filter:"drop-shadow(0 0 2px black);"}})})]})})]})}):(0,x.jsx)(u(),{nodeRef:n,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,i;n=t.x,i=t.y,J=n,Q=i},onDrag:(e,t)=>{ee(!0)},onStop:(e,t)=>{q&&(Math.abs(t.x-J)>5||Math.abs(t.y-Q)>5)?ee(!1):N(R)},children:(0,x.jsx)("div",{ref:n,style:"left"===Y?{left:M?(0,m.$II)(P)+"px":_+"px",bottom:M?(0,m.vnu)(P)+"px":L+"px",position:"fixed",zIndex:X}:{right:M?(0,m.$II)(P)+"px":_+"px",bottom:M?(0,m.vnu)(P)+"px":L+"px",position:"fixed",zIndex:X},children:(0,x.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:e.isSpotlight&&"60122562760"==P?s+"px":h+"px",height:e.isSpotlight&&"60122562760"==P?h+"px":s+"px"}),className:"left"===Y?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,x.jsx)("div",{style:{overflow:"hidden",position:"relative"},children:(0,x.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:e.isSpotlight&&"60122562760"==P?16/9:9/16},children:(0,x.jsx)(r.Z,{url:R.thumbnail_image,isMuted:!0,isPlaying:!0,event:R})})}),(0,x.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,x.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,x.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,x.jsx)(p.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 2px black);",color:"white",fontSize:W+"px"},onClick:K,style:{position:"relative",zIndex:1,left:G+"px",bottom:G+"px"}})}),(0,x.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,x.jsx)(c.Z,{sx:{color:(0,m.Ya_)(P),fontSize:B+"px",filter:"drop-shadow(0 0 2px black);"}})}),(0,x.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:U,borderBottomRightRadius:U,backgroundImage:w?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,x.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*W+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",w]})})]})})]})})})})}},2209:function(e,t,n){n.r(t);var i=n(7313),o=n(9854),r=n(2860),a=n(7753),l=n(5160),s=n(6967),d=n(5380),c=n(58),h=n(8984),u=n(4669),p=n(513),f=n(9302),m=n(7381),x=n(2575),g=n(7300),v=n(6524),w=n(3388),j=n(7643),b=n(778),y=n(364),E=n(6417);const S=(0,x.Z)({key:"whatmore-css-wsv"}),I=i.lazy((()=>Promise.all([n.e(819),n.e(351),n.e(576),n.e(745),n.e(926),n.e(824),n.e(818),n.e(311)]).then(n.bind(n,3818))));t.default=function(e){const[t,n]=(0,i.useState)(),[x,P]=(0,i.useState)(),[z]=(0,a.j1)("isInDesignMode"),[_]=(0,a.j1)("isDemoBrand"),[L,A]=(0,i.useState)(-2),[C]=(0,a.j1)("whatmoreShopId"),k=(0,a.MO)("isLandingSharedLink"),O=(0,a.MO)("whatmoreShareTemplateId"),M=((0,a.MO)("whatmoreShareStoryId"),(0,a.MO)("whatmoreShareEventId")),T=(0,a.MO)("whatmoreLandingLocationType"),V=(0,a.MO)("whatmoreLoggingActive"),{whatmoreWidgetSourceDetails:Y}=(0,i.useContext)(y.I);var Z=(0,o.efR)(C)?r.Dm+"/get_eventset/":r.Gc+"/get_eventset/";(0,i.useEffect)((()=>{(0,s.hb)()}),[]),(0,i.useEffect)((()=>{(0,u.ll)(C)}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||x||!(0,h.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,i.useEffect)((()=>{A(-1);const e=v.NX,t=(0,v.H1)(T),i=Z.toString()+C.toString()+"?eventset_type="+e+"&source="+t+"&source_id="+C;fetch(i).then((e=>e.json())).then((t=>(0,w.OC)(t,e))).then((e=>(n(e),e))).catch((e=>{P(e.message)}))}),[]),(0,i.useEffect)((()=>{A(-2)}),[t]),(0,i.useEffect)((()=>{null==t||0==t.length||x||k&&"template-embed"==(0,v.zv)(O)&&null!=M&&t.forEach(((e,t)=>{M==e.event_id&&F(e,!0,t)}))}),[t]);const D=Y.landingLocationType,$=Y.templateType,F=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,h.KE)()&&!t&&(0,c.QV)(),(0,g.B6)(e)||(0,g.WJ)(e))return z||_||(async()=>{const t=(0,v.NY)(D)+(0,v.dS)($)+(null!==e&&void 0!==e&&e.isRelatedEvent?"R":"E")+"_"+(null===e||void 0===e?void 0:e.event_id);(0,l.wh)(e),(0,u.Tc)(C,r.h7,r.dU),(0,s.H4)(e.event_id,e.products,"spotlight","video_popup",t)})(),void A(n)};function R(){return(0,E.jsx)(E.Fragment,{})}return null==t||0==t.length||x?(0,E.jsx)("div",{}):(V&&(0,m.EI)(t),(0,o.B$L)(C)&&L<0&&null!==localStorage.getItem("_whatmore_spotlight_viewed")?(0,E.jsx)(E.Fragment,{}):(localStorage.setItem("_whatmore_spotlight_viewed",!0),(0,E.jsx)(f.C,{value:S,children:-1===L||0===t.length?(0,E.jsx)(R,{}):-2===L&&t.length>0?(0,E.jsx)("div",{children:(0,E.jsx)(j.u,{userInteractionType:b.K.SPOTLIGHT_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!z&&!_,children:(0,E.jsx)(d.Z,{event:t[0],inVideoClick:F,closeClick:e=>{e.stopPropagation(),A(-1)},isSpotlight:!0})})}):(0,E.jsx)("div",{children:(0,E.jsx)(i.Suspense,{children:(0,E.jsx)(j.u,{userInteractionType:b.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!z&&!_,children:(0,E.jsx)(I,{events:t,index:L,onBack:function(){(0,o.n2L)(C)&&(0,a.MO)("whatmoreAddedToCart")&&(0,p.D)(C,(()=>{}),100,window.location.hostname),A(-2)},template:"template-embed"})})})})})))}},6805:function(e,t,n){n.d(t,{$I:function(){return l},$w:function(){return d},AK:function(){return r},AL:function(){return a},YP:function(){return o},me:function(){return i},rE:function(){return s}});const i="device_type",o="device_mode",r="mobile",a="tablet",l="desktop",s="portrait",d="landscape"},9821:function(e,t,n){var i=n(7753),o=n(8866),r=n(6805),a=n(9854);t.Z=function(e){const[t,n,l]=(0,o.Z)(),[s]=(0,i.j1)("whatmoreLandscapePadding"),[d]=(0,i.j1)("whatmoreShopId"),[c]=(0,i.j1)("whatmoreVideoTileSize"),[h]=(0,i.j1)("whatmoreVideoTileSizePortrait"),u=l>=1025,p="portrait"==t?h:c,f=!("portrait"!=t||!(l>=481)),m=p/100*1.3*.5,x=p/100;var g=Math.min(l,n),[v,w,j,b]=[.6*g*(16/9),.6*g,1.4,0];function y(e){return Math.round(10*e)/10}var E={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(u){const e=w*m,t=v*m;[v,w,j,b]=[t,e,(l-2*s-2*(0,a.mZU)(d))/(1.1*e),s],E[r.me]=r.$I,E[r.YP]=r.$w}else if(f){var S=.8*w,I=.8*v;"portrait"==t?(S*=x,I*=x,[v,w,j,b]=[I,S,y(l/(1.2*S)),0],E[r.me]=r.AL,E[r.YP]=r.rE):([v,w,j,b]=[I,S,(l-2*s)/(1.1*S),s],E[r.me]=r.AL,E[r.YP]=r.$w)}else{S=w,I=v;"portrait"==t?(S=S*x*.9,I=I*x*.9,[v,w,j,b]=[I,S,y(l/(1.15*S)),0],E[r.me]=r.AK,E[r.YP]=r.rE):(S=.7*w,I=.7*v,[v,w,j,b]=[I,S,(l-2*s)/(1.1*S),s],E[r.me]=r.AK,E[r.YP]=r.$w)}return[v,w,j,b,E]}},7244:function(){}}]);