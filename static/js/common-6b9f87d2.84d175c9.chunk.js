"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[1915],{60839:function(e,t,i){var n=i(43964),o=i(47313),r=i(99543),s=i(97789),l=i(91896),d=i(508),a=i(71622),c=i(91574),h=i(12279),u=i.n(h),v=i(80868),x=i(97053),g=i(49854),w=i(40342),p=i(47376),f=i(50778),m=i(30364),C=i(46417);t.Z=function(e){var t,i,h,j,k,b,[S,I,y,_]=(0,s.Z)();const[L,P]=(0,o.useState)(!1),[R,Z]=(0,o.useState)(),[E,O]=(0,o.useState)(),[D,K]=(0,o.useState)({current_time:0,video_duration:0,is_video_ended:!1}),M=(0,r.MO)("whatmoreShopId"),T=e.event,q=e.storyId,V=e.onBack,W=o.useRef(),U=e.isPlaying,A=e.isLast,H=e.setLockSwiper,F=e.onVideoEndedCallback,N=e.progressUpdateCallback,B=null!==(t=e.totalSiblingEvents)&&void 0!==t?t:0,z=null!==(i=e.indexAmongSiblings)&&void 0!==i?i:0,X=null===(h=e.showOverlay)||void 0===h||h,G=null!==(j=e.leftOpenSpaceClickHandler)&&void 0!==j?j:()=>{},Q=null!==(k=e.midOpenSpaceClickHandler)&&void 0!==k?k:()=>{},Y=null!==(b=e.rightOpenSpaceClickHandler)&&void 0!==b?b:()=>{},{whatmoreWidgetSourceDetails:$}=(0,o.useContext)(m.I),J="center";let ee;try{ee=u()((()=>{F()}),1e3,{leading:!0,trailing:!1})}catch(te){console.log(te)}return(0,C.jsx)(n.M5,{children:(0,C.jsxs)(n.xu,{width:_,height:y,sx:{overflow:"hidden"},children:[(0,C.jsx)(n.Kq,{direction:"column",justifyContent:J,height:"full",width:"full",children:(0,C.jsx)(n.xu,{borderRadius:"md",backgroundColor:"white",children:(0,C.jsx)(n.oM,{width:"full",ratio:_/y,children:(0,C.jsx)(l.Z,{height:"100%",width:"100%",url:(0,v.V)((0,w.uv)(T)),isPlaying:U,timeUpdateCallback:function(e,t){const i=(0,c.r)(e,t);N(i);const n=D.is_video_ended;i>=99&&U&&!n?(ee(),K({current_time:e,video_duration:t,is_video_ended:!0})):K({current_time:e,video_duration:t,is_video_ended:n})},event:T,source:e.source})})})}),X?(0,C.jsx)(n.Kq,{style:{position:"relative",zIndex:1,bottom:"100%"},direction:"column",justifyContent:J,height:"full",width:"full",className:"whatmore-ios-css-relative-fix",children:(0,C.jsx)(n.xu,{borderRadius:"md",backgroundColor:"transparent",width:"100%",height:"100%",children:(0,C.jsx)(d.Z,{focusRef:W,event:e.event,isLast:A,onCloseCallback:()=>{V(),(0,p.Z2)({userInteractionType:f.K.VIDEO_PLAYBACK,userInteractionMetadata:{watch_time:D.current_time},widgetSourceDetails:$,event:T,productList:T.products,ctaList:T.cta})},productClickHandler:async e=>{const t=await(0,x.gK)(e,(0,g.Ipo)(M),M);O(e),Z(t),P(!0),H(!0),(0,p.GF)({userInteractionType:f.K.SHOPNOW_CLICKED,widgetSourceDetails:$,event:T,productList:T.products,ctaList:T.cta}),(0,r.bU)("whatmoreAllowAutoSlide",!1)},videoPlayingData:D,totalSiblingEvents:B,indexAmongSiblings:z,leftOpenSpaceClickHandler:G,midOpenSpaceClickHandler:Q,rightOpenSpaceClickHandler:Y,storySetId:q,showCloseOverlay:null===e||void 0===e?void 0:e.showCloseOverlay})})}):(0,C.jsx)(C.Fragment,{}),!0===L?(0,C.jsx)(n.Kq,{style:{position:"relative",zIndex:1,bottom:"200%"},direction:"column",justifyContent:J,height:"full",width:"full",className:"whatmore-ios-css-relative-fix",children:(0,C.jsx)(n.xu,{borderRadius:"md",backgroundColor:"transparent",width:"100%",height:"100%",children:(0,C.jsx)(a.Z,{focusRef:W,event:e.event,isLast:A,onCloseCallback:()=>V(),setLockSwiper:H,data:R,currentProduct:E,setOpenShopNow:e=>{P(e),(0,r.bU)("whatmoreAllowAutoSlide",!e)}})})}):(0,C.jsx)("div",{})]})})}},18170:function(e,t,i){var n=i(43964),o=(i(47313),i(99543)),r=i(97789),s=i(91896),l=i(80868),d=i(60058),a=i(59723),c=i(40342),h=i(49854),u=i(46417);t.Z=function(e){var[t,i,v,x]=(0,r.Z)();const g=(0,o.MO)("whatmoreShopId"),w=e.event,p=e.isPlaying,f="center";return(0,u.jsx)(n.M5,{children:(0,u.jsxs)(n.xu,{width:x,height:v,sx:{overflow:"hidden"},children:[(0,u.jsx)(n.Kq,{direction:"column",justifyContent:f,height:"full",width:"full",children:(0,u.jsx)(n.xu,{borderRadius:"md",backgroundColor:"white",children:(0,u.jsx)(n.oM,{width:"full",ratio:x/v,children:(0,u.jsx)(s.Z,{height:"100%",width:"100%",url:(0,l.V)((0,c.uv)(w)),isPlaying:p,timeUpdateCallback:function(e,t){},event:w,source:e.source})})})}),(0,u.jsx)(n.Kq,{style:{position:"relative",zIndex:1,bottom:"100%"},direction:"column",justifyContent:f,height:"full",width:"full",className:"whatmore-ios-css-relative-fix",children:(0,u.jsx)(n.xu,{borderRadius:"md",backgroundColor:"transparent",width:"100%",height:"100%",backdropFilter:"auto",backdropBlur:"10px",onClick:e=>{(0,d.QV)()},children:(0,u.jsxs)(n.Kq,{direction:"column",justifyContent:"center",alignItems:"center",height:"full",width:"full",children:[(0,u.jsx)(a.Z,{sx:{boxShadow:3,color:(0,h.Ya_)(g),fontSize:.4*x,filter:"drop-shadow(0 0 5px black);"},onClick:e=>{(0,d.QV)()}}),(0,u.jsx)(n.xv,{color:"white",fontSize:.05*x+"px",fontWeight:"bold",align:"left",children:"Please click to play video.."})]})})})]})})}},94288:function(e,t,i){var n=i(47313),o=i(12210),r=i(45337),s=i(75160),l=i(38538),d=i(99543),a=i(97789),c=i(43964),h=i(8933),u=i(26967),v=i(15949),x=i(8729),g=(i(49854),i(24669)),w=i(32860),p=i(30364),f=i(72901),m=i(47376),C=i(50778),j=(i(12151),i(16159)),k=i(46417);t.Z=function(e){var[t,i,b,S]=(0,a.Z)();const[I]=(0,d.j1)("isInDesignMode"),[y]=(0,d.j1)("isDemoBrand"),[_,L]=(0,d.j1)("isFirstIndicatorRenderDone"),[P,R]=(0,n.useState)(0!=e.eventIndex),{setCloseClickComponent:Z}=(0,n.useContext)(h.EventClickComponentContext),[E,O]=(0,n.useState)(!1),[D]=(0,d.j1)("whatmoreShopId"),{whatmoreWidgetSourceDetails:K}=(0,n.useContext)(p.I),[M,T]=(0,n.useState)(!1),[q,V]=(0,n.useState)(null);function W(){T(!1)}e.events;const U=e.eventIndex,A=e.onBack,H=e.eventsStories,F=e.initialStoryIndex;function N(){W(),setTimeout((()=>{A()}),500)}function B(e){q&&!q.isEnd&&("right"==e?q.slideNext():q.slidePrev())}(0,n.useEffect)((()=>(T(!0),()=>{})),[]),Z(N);const z=parseInt(Math.min(5,H.length));return(0,k.jsx)(f.Z,{show:M,closeCallback:W,customClass:"whatmore-landscape-modal-stories-view",children:(0,k.jsxs)(c.Kq,{direction:"column",width:window.innerWidth,height:window.innerHeight,justifyContent:"center",aligntItems:"center",backgroundColor:"blackAlpha.800",children:[(0,k.jsx)(c.M5,{children:(0,k.jsx)(c.xu,{height:"fit-content",width:S*z,children:(0,k.jsxs)(o.tq,{onInit:e=>{V(e)},slidesPerView:z,centeredSlides:!0,allowTouchMove:!1,initialSlide:F,modules:[r.lI,r.W_,r.Gk],navigation:z>=5,effect:"coverflow",coverflowEffect:{rotate:-8,stretch:Math.floor(.22*b),depth:100,scale:.7,modifier:1,slideShadows:!1},height:"fit-content",width:S*z,watchSlidesProgress:!0,onSlideChange:e=>{var t,i,n;P?R(!1):(_||L(!0),n=H[e.activeIndex].events[0],I||y||(async()=>{(0,s.wh)(n),(0,g.Tc)(D,w.Xh,w.OW),(0,u.H4)(n.event_id,n.products,"homepage","stories")})(),(0,m.GF)({userInteractionType:C.K.EVENT_VIEW,widgetSourceDetails:K,event:H[e.activeIndex].events[0],productList:null===(t=H[e.activeIndex].events[0])||void 0===t?void 0:t.products,ctaList:null===(i=H[e.activeIndex].events[0])||void 0===i?void 0:i.cta}))},mousewheel:{invert:!1,thresholdDelta:20},children:[H.length>2&&(0,k.jsx)("div",{className:"whatmore-shopping-close-button",children:(0,k.jsx)(j.Z,{onCloseCallback:A})}),H.map(((e,t)=>(0,k.jsx)(o.o5,{children:i=>{let{isActive:n,isPrev:o,isNext:r,isVisible:s,isDuplicate:d}=i;if(n){const i=1;return(0,k.jsx)(c.Kq,{direction:"column",height:b,width:S*i,justifyContent:"center",marginLeft:"auto",marginRight:"auto",children:(0,k.jsx)(c.xu,{borderRadius:"xl",overflow:"hidden",backgroundColor:"transparent",boxShadow:"dark-lg",children:(0,k.jsx)(v.Z,{stories:e,onBack:N,isActive:n&&s,isNext:!1,isPrev:!1,onStoryCompleteCallback:B,initialEventIndex:F==t?U:0,showCloseOverlay:(null===H||void 0===H?void 0:H.length)<=2},"event-story-view-"+e.id)})})}return o||r?(0,k.jsx)(c.Kq,{direction:"column",height:b,width:S,justifyContent:"center",marginLeft:"auto",marginRight:"auto",onClick:e=>{q.slideTo(t,300)},children:(0,k.jsx)(c.xu,{borderRadius:"xl",overflow:"hidden",backgroundColor:"transparent",boxShadow:"dark-lg",children:(0,k.jsx)(l.Z,{showPausedVideo:!0,event:H[t].events[0],onBack:N,isPlaying:!1,setLockSwiper:O})})}):(0,k.jsx)(k.Fragment,{})}},"event-horizontal-scroll-slide-"+t)))]})})}),(0,k.jsx)(c.M5,{children:(0,k.jsx)(x.Z,{height:.04*b,width:.1*S,fontSize:.02*b})})]})})}},167:function(e,t,i){var n=i(47313),o=i(12210),r=i(45337),s=i(75160),l=i(9659),d=i(99543),a=i(72901),c=i(97789),h=i(43964),u=i(8933),v=i(26967),x=i(32860),g=i(24669),w=i(45254),p=i(49854),f=i(8729),m=i(30364),C=i(47376),j=i(50778),k=i(16159),b=(i(12151),i(46417));t.Z=function(e){var[t,i,S,I]=(0,c.Z)();const[y]=(0,d.j1)("isInDesignMode"),[_]=(0,d.j1)("isDemoBrand"),[L,P]=(0,d.j1)("isFirstIndicatorRenderDone"),[R,Z]=(0,n.useState)(0!=e.eventIndex),{setCloseClickComponent:E}=(0,n.useContext)(u.EventClickComponentContext),[O,D]=(0,n.useState)(!1),[K]=(0,d.j1)("whatmoreShopId"),[M]=(0,d.j1)("whatmoreLandingLocationType"),{whatmoreUITheme:T}=(0,n.useContext)(m.I),{whatmoreWidgetSourceDetails:q}=(0,n.useContext)(m.I),[V,W]=(0,n.useState)(!1),[U,A]=(0,n.useState)(null);function H(){W(!1)}const F=e.events,N=e.eventIndex,B=e.onBack,z=F.concat(F),X=F.length,G=(0,n.useRef)(0);function Q(){H(),setTimeout((()=>{B()}),500)}function Y(){U&&!U.isEnd&&(0,d.MO)("whatmoreAllowAutoSlide")&&U.slideNext()}(0,n.useEffect)((()=>(W(!0),()=>{})),[]),E(Q);const $=parseInt(Math.min(5,F.length));return(0,b.jsx)(a.Z,{show:V,closeCallback:H,customClass:"whatmore-landscape-modal-swipe-view",children:(0,b.jsxs)(h.Kq,{direction:"column",width:window.innerWidth,height:window.innerHeight,justifyContent:"center",aligntItems:"center",backgroundColor:(0,w.lA)("#000000",13),children:[(0,b.jsx)(h.M5,{children:(0,b.jsx)(h.xu,{height:"fit-content",width:I*$,children:(0,b.jsxs)(o.tq,{onInit:e=>{A(e)},slidesPerView:$,centeredSlides:!0,allowTouchMove:!1,initialSlide:N,modules:[r.lI,r.W_,r.Gk,r.pt,r.tl],navigation:$>=5,effect:"coverflow",coverflowEffect:{rotate:-8,stretch:Math.floor(.22*S),depth:100,scale:.7,modifier:1,slideShadows:!1},height:"fit-content",width:I*$,watchSlidesProgress:!0,onSlideChange:e=>{if(console.log(F[e.activeIndex].event_id,"prinatin"),R)return G.current=0,void Z(!1);var t;L||P(!0),t=F[e.activeIndex],y||_||(async()=>{(0,s.wh)(t),"index"===M?((0,g.Tc)(K,x.Xh,x.pR),(0,v.H4)(t.event_id,t.products,x.Xh,x.pR)):M.startsWith("product")||"embed"===M?((0,g.Tc)(K,x.h7,x.dU),(0,v.H4)(t.event_id,t.products,x.h7,x.dU)):M.startsWith("collection")?((0,g.Tc)(K,x.U$,x.Pk),(0,v.H4)(t.event_id,t.products,x.U$,x.Pk)):((0,g.Tc)(K,x.Xh,x.pR),(0,v.H4)(t.event_id,t.products,x.Xh,x.pR))})(),(0,C.y4)({userInteractionType:j.K.EVENT_VIEW,widgetSourceDetails:q,event:F[e.activeIndex],productList:F[e.activeIndex].products,ctaList:F[e.activeIndex].cta})},mousewheel:{invert:!1,thresholdDelta:20},children:[F.length>2&&(0,b.jsx)("div",{className:"whatmore-shopping-close-button",children:(0,b.jsx)(k.Z,{onCloseCallback:B})}),z.slice(N,F.length+N).map(((e,t)=>(0,b.jsx)(o.o5,{children:e=>{let{isActive:i,isPrev:n,isNext:o,isVisible:r,isDuplicate:s}=e;if(i)return(0,b.jsx)(h.Kq,{direction:"column",height:S,width:1*I,justifyContent:"center",marginLeft:"auto",marginRight:"auto",children:(0,b.jsx)(h.xu,{overflow:"hidden",sx:{borderRadius:"round"==T?"10px":"0px",borderWidth:(0,p.alU)(K),borderColor:(0,p.qPe)(K)},children:(0,b.jsx)(l.Z,{event:F[t%X],onBack:Q,isPlaying:!0,isLast:t%X===F.length-1,setLockSwiper:D,widthFactor:1,heightFactor:1,onVideoEndedCallback:Y,progressUpdateCallback:e=>{},showCloseOverlay:(null===F||void 0===F?void 0:F.length)<=2})})});if(o)return(0,b.jsx)(h.Kq,{direction:"column",height:S,width:I,justifyContent:"center",marginLeft:"auto",marginRight:"auto",onClick:e=>{U.slideTo(t%X,300)},children:(0,b.jsx)(h.xu,{overflow:"hidden",sx:{borderRadius:"round"==T?"10px":"0px",borderWidth:(0,p.alU)(K),borderColor:(0,p.qPe)(K)},children:(0,b.jsx)(l.Z,{event:F[t%X],onBack:Q,isPlaying:!1,isLast:t%X===F.length-1,setLockSwiper:D,widthFactor:1,heightFactor:1,onVideoEndedCallback:Y,progressUpdateCallback:e=>{},showOverlay:!1})})});if(n&&1===G.current)return(0,b.jsx)(h.Kq,{direction:"column",height:S,width:I,justifyContent:"center",marginLeft:"auto",marginRight:"auto",onClick:e=>{U.slideTo(t%X,300)},children:(0,b.jsx)(h.xu,{overflow:"hidden",sx:{borderRadius:"round"==T?"10px":"0px",borderWidth:(0,p.alU)(K),borderColor:(0,p.qPe)(K)},children:(0,b.jsx)(l.Z,{event:F[t%X],onBack:Q,isPlaying:!1,isLast:t%X===F.length-1,setLockSwiper:D,widthFactor:1,heightFactor:1,onVideoEndedCallback:Y,progressUpdateCallback:e=>{},showOverlay:!1})})});try{N+t>=X-1&&(G.current=1)}catch(d){console.log(d)}return(0,b.jsx)(b.Fragment,{})}},"event-horizontal-scroll-slide"+e.event_id)))]})})}),(0,b.jsx)(h.M5,{children:(0,b.jsx)(f.Z,{height:.04*S,width:.1*I,fontSize:.02*S})})]})})}}}]);