"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[692],{3388:function(e,t,i){i.d(t,{OC:function(){return l},e8:function(){return r},kT:function(){return n},kW:function(){return a},xg:function(){return o}});const n=function(e,t){return!((void 0==e.products||0==e.products.length)&&(void 0==e.cta||0==e.cta.length))},o=function(e,t){return!(void 0==e.products||0==e.products.length)},r=function(e,t){if(null!=e)return e.filter((e=>1==n(e)))},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=e)return t?e.events[0].events:e.events};const l=function(e,t){var i;if(null==e)return[];if(!("eventsets"in e))return[];const n=null!==(i=e.eventsets[t])&&void 0!==i?i:null;return n?function(e){if(null==e||0==e.length)return[];let t=[];return e.forEach((e=>{e.events.forEach((e=>{t.push(e)}))})),t}(n):[]}},5380:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(4959),o=i(7313),r=i(4892),a=i(6805),l=i(7753),s=i(9821);var d=function(e){const[t,i,n,o,r]=(0,s.Z)(),[d]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[c]=(0,l.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),h=r[a.YP]===a.$w?c/100:d/100*1.2;return[t*h,i*h,r]},c=i(9723),h=i(9461),p=i.n(h),u=i(1195),x=i(7108),f=(i(7244),i(123),i(9854)),g=i(9039),m=i(6417);var v=function(e){var t;const i=o.useRef(null);var[s,h,v]=d();const{whatmoreUITheme:w}=(0,o.useContext)(g.I),[j]=(0,l.j1)("whatmoreEmbedAppVideoTitle"),[b]=(0,l.j1)("whatmoreEmbedAppPositionPortrait"),[y]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[S]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[I]=(0,l.j1)("whatmoreEmbedAppPositionLandscape"),[E]=(0,l.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[z]=(0,l.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,l.MO)("whatmoreShopId");var k=b,C=y,_=S;v[a.YP]===a.$w&&(k=I,C=E,_=z);const[L,O]=(0,o.useState)(["initial",window.pageYOffset]),[A,M]=(0,o.useState)(!1),T=null!==(t=e.isSpotlight)&&void 0!==t&&t,V=v[a.YP]===a.$w?.7*(0,f.zGA)(P):(0,f.zGA)(P),B=T?V:1;s*=B,h*=B;const F=T?(0,f.G0o)(P):k,R=T?(0,f.X8j)(P):(0,f.lVn)(P),[Z,D]=(0,o.useState)(!T&&(0,f.eXi)(P));function N(e,t){O(e),e[1]<=100?M(!1):t!=A&&(M(t),D(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const i=()=>{const i=window.pageYOffset;Math.abs(i-e)<100||(N([i>e?"scrolled-down":"scrolled-up",i],!0),e=i>0?i:0),t=!1},n=()=>{t||(window.requestAnimationFrame(i),t=!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)}),[L]),(0,n.O3)({ref:i,handler:()=>{N(["scrolled-up",L[1]],!0)}});const Y=e.event,$=e.inVideoClick,G=e.closeClick,H=.3*h,W=.6*h,K=.1*h,U=.1*(.5*h),X="round"==w?"10px":"0px",q=(0,f.Z$A)(P);var J=!1,Q=0,ee=0;function te(e){J=e}return(0,m.jsx)("div",{children:Z&&!R?(0,m.jsx)(m.Fragment,{}):A&&R?(0,m.jsx)("div",{style:"left"===F?{left:"1px",bottom:T?(0,f.vnu)(P)+"px":_+"px",position:"fixed",zIndex:q}:{right:"5px",bottom:T?(0,f.vnu)(P)+"px":_+"px",position:"fixed",zIndex:q},children:(0,m.jsxs)("div",{onClick:()=>{N(["initial",L[1]],!1)},style:{margin:"1px",width:h+"px",height:s+"px"},className:"left"===F?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,m.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:X,overflow:"hidden"},children:(0,m.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,m.jsx)(r.Z,{url:Y.thumbnail_image,isPlaying:!1,event:Y})})}),(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,m.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,m.jsx)(u.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:H+"px"},style:{position:"relative",zIndex:1,left:U+"px",bottom:U+"px"},onClick:G})})}),(0,m.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(x.Z,{sx:{color:"white",fontSize:2*H+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,m.jsx)(p(),{nodeRef:i,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var i,n;i=t.x,n=t.y,Q=i,ee=n},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{J&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):$(Y)},children:(0,m.jsx)("div",{ref:i,style:"left"===F?{left:T?(0,f.$II)(P)+"px":C+"px",bottom:T?(0,f.vnu)(P)+"px":_+"px",position:"fixed",zIndex:q}:{right:T?(0,f.$II)(P)+"px":C+"px",bottom:T?(0,f.vnu)(P)+"px":_+"px",position:"fixed",zIndex:q},children:(0,m.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:h+"px",height:s+"px"}),className:"left"===F?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,m.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:X,overflow:"hidden",position:"relative"},children:(0,m.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,m.jsx)(r.Z,{url:Y.thumbnail_image,isMuted:!0,isPlaying:!0,event:Y})})}),(0,m.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,m.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,m.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,m.jsx)(u.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:H+"px"},onClick:G,style:{position:"relative",zIndex:1,left:K+"px",bottom:K+"px"}})}),(0,m.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,m.jsx)(c.Z,{sx:{color:(0,f.Ya_)(P),fontSize:W+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,m.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:X,borderBottomRightRadius:X,backgroundImage:j?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,m.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*H+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",j]})})]})})]})})})})}},2209:function(e,t,i){i.r(t);var n=i(7313),o=i(9854),r=i(2860),a=i(7753),l=i(5160),s=i(6967),d=i(5380),c=i(58),h=i(8984),p=i(4669),u=i(941),x=i(9302),f=i(7381),g=i(2575),m=i(7300),v=i(6524),w=i(3388),j=i(7643),b=i(778),y=i(6417);const S=(0,g.Z)({key:"whatmore-css-wsv"}),I=n.lazy((()=>Promise.all([i.e(819),i.e(576),i.e(210),i.e(803),i.e(926),i.e(303),i.e(209),i.e(62)]).then(i.bind(i,4209))));t.default=function(e){const[t,i]=(0,n.useState)(),[g,E]=(0,n.useState)(),[z]=(0,a.j1)("isInDesignMode"),[P]=(0,a.j1)("isDemoBrand"),[k,C]=(0,n.useState)(-2),[_]=(0,a.j1)("whatmoreShopId"),L=(0,a.MO)("isLandingSharedLink"),O=(0,a.MO)("whatmoreShareTemplateId"),A=((0,a.MO)("whatmoreShareStoryId"),(0,a.MO)("whatmoreShareEventId")),M=(0,a.MO)("whatmoreLandingLocationType"),T=(0,a.MO)("whatmoreLoggingActive");var V=(0,o.efR)(_)?r.Dm+"/get_eventset/":r.Gc+"/get_eventset/";(0,n.useEffect)((()=>{(0,s.hb)()}),[]),(0,n.useEffect)((()=>{(0,p.ll)(_)}),[]),(0,n.useEffect)((()=>{null==t||0==t.length||g||!(0,h.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,c.b5)(c.UD)}),[t]),(0,n.useEffect)((()=>{C(-1);const e=v.NX,t=(0,v.H1)(M),n=V.toString()+_.toString()+"?eventset_type="+e+"&source="+t+"&source_id="+_;fetch(n).then((e=>e.json())).then((t=>(0,w.OC)(t,e))).then((e=>(i(e),e))).catch((e=>{E(e.message)}))}),[]),(0,n.useEffect)((()=>{C(-2)}),[t]),(0,n.useEffect)((()=>{null==t||0==t.length||g||L&&"template-embed"==(0,v.zv)(O)&&null!=A&&t.forEach(((e,t)=>{A==e.event_id&&B(e,!0,t)}))}),[t]);const B=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,h.KE)()&&!t&&(0,c.QV)(),(0,m.B6)(e)||(0,m.WJ)(e))return z||P||(async()=>{(0,l.wh)(e),(0,p.Tc)(_,r.h7,r.dU),(0,s.H4)(e.event_id,e.products,"spotlight","video_popup")})(),void C(i)};function F(){return(0,y.jsx)(y.Fragment,{})}return null==t||0==t.length||g?(0,y.jsx)("div",{}):(T&&(0,f.EI)(t),(0,o.B$L)(_)&&k<0&&null!==localStorage.getItem("_whatmore_spotlight_viewed")?(0,y.jsx)(y.Fragment,{}):(localStorage.setItem("_whatmore_spotlight_viewed",!0),(0,y.jsx)(x.C,{value:S,children:-1===k||0===t.length?(0,y.jsx)(F,{}):-2===k&&t.length>0?(0,y.jsx)("div",{children:(0,y.jsx)(j.u,{userInteractionType:b.K.SPOTLIGHT_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!z&&!P,children:(0,y.jsx)(d.Z,{event:t[0],inVideoClick:B,closeClick:e=>{e.stopPropagation(),C(-1)},isSpotlight:!0})})}):(0,y.jsx)("div",{children:(0,y.jsx)(n.Suspense,{children:(0,y.jsx)(j.u,{userInteractionType:b.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!z&&!P,children:(0,y.jsx)(I,{events:t,index:k,onBack:function(){(0,o.n2L)(_)&&(0,a.MO)("whatmoreAddedToCart")&&(0,u.D)(_,(()=>{}),100,window.location.hostname),C(-2)},template:"template-embed"})})})})})))}}}]);