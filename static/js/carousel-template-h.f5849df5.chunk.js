"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[562],{4784:function(e,t,o){o.r(t);var i=o(7313),n=o(6090),r=o(7616),l=o(32),s=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),a=o(2575),d=o(2210),c=o(8486),p=o(9821),u=o(8866),h=o(2279),m=o.n(h),y=o(7753),v=o(7129),f=o(1855),x=o(9854),w=o(364),g=o(4522),P=o(778),j=o(7381),S=o(9069),C=o(6417);const I=(0,a.Z)({key:"whatmore-css-hv"});function M(e){const[t,o,n]=(0,p.Z)(),r=(0,y.MO)("whatmoreShopId"),l=e.events,s=e.onClick,a=n*(0,x.u6l)(r),c=(0,x.yBw)(r),[u,h]=(0,i.useState)(c?l.length:a),{whatmoreWidgetSourceDetails:m}=(0,i.useContext)(w.I);return(0,i.useEffect)((()=>{u<=a&&h((e=>e+a))}),[a]),(0,C.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,C.jsx)(d.tq,{slidesPerView:l.length>1?a:1,initialSlide:l.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!1,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:e=>{(0,g.y4)({userInteractionType:P.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:m}),e.realIndex>e.previousIndex&&h((e=>e+a))},loop:c,children:l.map(((e,t)=>t<=u&&(0,C.jsx)(d.o5,{children:t=>{let{isActive:o,isPrev:i,isNext:n,isVisible:r}=t;return i||n||o?(0,C.jsx)(S.Z,{isOnFocus:o&&r,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{s(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-portrait-"+e.index)))})})})}function O(e){const[t,o,n,r]=(0,p.Z)(),[l,s]=(0,i.useState)(-1),a=(0,y.MO)("whatmoreShopId"),u=e.onClick,h=e.events,v=(0,x.yBw)(a),[j,I]=(0,i.useState)(v?h.length:n),M=Math.min(n,h.length),{whatmoreWidgetSourceDetails:O}=(0,i.useContext)(w.I),E=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(E.current){const e=o*M*(0,x.Su5)(a)+"px";h.length<4?E.current.style.setProperty("width",e,"important"):E.current.style.width=e}}),[o,M,a,j,h.length]),(0,i.useEffect)((()=>{j<=n&&I((e=>e+n))}),[n]),(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",paddingLeft:r+"px",paddingRight:r+"px"},className:"whatmore-events-carousel-landscape",children:(0,C.jsx)("div",{ref:E,style:{height:"100%"},children:(0,C.jsx)(d.tq,{slidesPerView:M,watchSlidesProgress:!0,modules:[c.W_],navigation:!0,slidesPerGroup:parseInt(M),onSlideChange:e=>{(0,g.y4)({userInteractionType:P.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:O}),e.realIndex>e.previousIndex&&I((e=>e+n))},spaceBetween:0,loop:v&&h.length>4,style:{height:"100%"},children:h.map(((e,t)=>{const o=m()((()=>s(t)),300);return t<=j&&(0,C.jsx)(d.o5,{onMouseEnter:()=>{o()},onMouseLeave:()=>{o.cancel(),s(-1)},style:{height:"100%"},children:o=>{let{isActive:i,isPrev:n,isNext:r,isVisible:s}=o;return s||n||r?(0,C.jsx)(S.Z,{isOnFocus:t==l,playOnUnfocus:!(0,x.dHy)(a)||t==parseInt(M/2)&&-1==l,animateOnFocus:!0,event:e,onClick:()=>{u(e)}}):(0,C.jsx)(f.Z,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}t.default=function(e){const[t,o,a]=(0,u.Z)(),[d]=(0,y.j1)("whatmoreShopId"),[c]=(0,y.j1)("whatmorePrimaryColor"),[p]=(0,y.j1)("whatmoreTitleFont"),h="portrait"==t?(0,y.MO)("whatmoreTitleFontSizePortrait"):(0,y.MO)("whatmoreTitleFontSize"),{whatmoreRootId:m}=(0,i.useContext)(w.I),f=(0,y.MO)("whatmoreCollectionHeading"),{whatmoreIsCollectionsTemplate:g}=(0,i.useContext)(w.I),P=e.events,S=e.onClick,E=p;function b(e){S(e)}return(0,i.useEffect)((()=>{(0,j.Oo)("Video shopping powered by Whatmore!")}),[]),(0,i.useEffect)((()=>{l.IR.forEach((e=>{var t;const o=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-h"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-h"]');if(!o)return;o&&e&&(e.style.minHeight="0px")}))}),[]),delete r.ZP.styles.global,(0,C.jsx)(s.C,{value:I,children:(0,C.jsx)("div",{className:"whatmore-carousel-events",style:{height:"100%"},children:(0,C.jsx)(n.x,{theme:r.ZP,cssVarsRoot:m,resetCSS:!1,children:(0,C.jsxs)(v.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0||g?(0,C.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",E,"important"),e.style.setProperty("font-size",h+"px","important"))},style:{color:c,backgroundClip:"text",textAlign:"center",fontWeight:(0,x.wOV)(d),lineHeight:(0,x.vY4)(d),letterSpacing:(0,x.X2K)(d)},children:g?"W"!==f?f:"":e.heading})}):(0,C.jsx)(C.Fragment,{}),"landscape"===t?(0,C.jsx)(O,{events:P,onClick:b}):(0,C.jsx)(M,{events:P,onClick:b})]})})})})}},7129:function(e,t,o){o.d(t,{V:function(){return i}});const i=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(e,t,o){var i=o(7313),n=o(9821),r=o(7129),l=o(7753),s=o(6417);t.Z=function(e){var[t,o]=(0,n.Z)();(0,i.useContext)(r.V);const a=(0,l.MO)("whatmoreShopId");return e.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:"8968077397"==a?void 0:o,aspectRatio:"8968077397"==a?9/16:void 0,height:"8968077397"==a?"100%":t,overflow:"hidden"}})}},9069:function(e,t,o){var i=o(7313),n=o(9821),r=(o(3439),o(7753)),l=o(4892),s=o(7129),a=o(6805),d=o(9854),c=o(364),p=o(9219),u=o(5945),h=o(7053),m=o(9723),y=o(6417);t.Z=function(e){var t,o,v,f,x,w,g,P,j,S,C,I,M,O,E,b,Z,k,_;const[z,N,A,F,R]=(0,n.Z)(),T=.5*N;var V=(0,i.useContext)(s.V);const D=(0,r.MO)("whatmoreUITheme"),W=(0,r.MO)("whatmoreShopId"),Y=(0,r.MO)("whatmorePrimaryFont"),L=(0,r.MO)("whatmoreSecondaryColor"),U=e.onClick,B=null===(t=e.isOnFocus)||void 0===t||t,H=null!==(o=e.playOnUnfocus)&&void 0!==o&&o,$=null!==(v=e.animateOnFocus&&(0,d.iWI)(W))&&void 0!==v&&v,K="portrait"===R[a.YP],q=(K?1.076*N*(0,d.pEd)(W):N*(0,d.H4g)(W))+"px",G=(K?1.076*N*(0,d.pEd)(W):N*(0,d.H4g)(W))+"px",J=(K?.965*N*(0,d.pEd)(W):.859*N*(0,d.H4g)(W))+"px",X=(0,d.nzC)(W),{whatmoreIsPreviewMode:Q}=(0,i.useContext)(c.I),ee=.25*N,te=ee+"px",[oe,ie]=(0,i.useState)(e.event),[ne,re]=(0,i.useState)(),le=Math.round(+(null===(f=oe.products)||void 0===f||null===(x=f[0])||void 0===x?void 0:x.price)),se=Math.round(+(null===oe||void 0===oe||null===(w=oe.products[0])||void 0===w?void 0:w.compare_price)),ae=se&&0!=se&&se>le?Math.round((se-le)/se*100):NaN,[de,ce]=(0,i.useState)(ae),[pe,ue]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{(0,d.N8M)(W)&&(0,p.p_)(oe,(0,d.Ipo)(W),W).then((e=>{var t,o,i;ie(e);const n=Math.round(null===(t=e.products)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.price),r=Math.round(null===e||void 0===e||null===(i=e.products[0])||void 0===i?void 0:i.compare_price),l=r&&0!=r&&r>n?Math.round((r-n)/r*100):NaN;ce(l),ue(!0)}));(async()=>{var e;const t=await(0,h.p)(null===oe||void 0===oe||null===(e=oe.products)||void 0===e?void 0:e[0],(0,d.Ipo)(W),W);re(t),ue(!0)})()}),[]),(0,y.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",V.tileTopMargin+"px"),e.style.setProperty("margin-bottom",V.tileBottomMMargin+"px"))},className:$&&!K?B?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{width:N,margin:"0 auto",cursor:"pointer"},onClick:()=>{U(oe)},children:[(0,y.jsx)("div",{className:"video-event-tile",onClick:U,children:"video"===oe.event_type&&"55076552858"==W&&(0,y.jsx)(m.Z,{sx:{color:(0,d.Ya_)(oe.whatmoreShopId)+" !important",opacity:.8,fontSize:T,filter:"drop-shadow(0 0 15px black);",position:"fixed",top:"30%",left:"25%"}})}),(0,y.jsx)("div",{style:{width:N,height:K&&B?"STR2FOC6KG9"==W||"STRDOIDF6O7"==W?z:1.1*z:z,borderRadius:"round"==D?"5px":"0px",boxShadow:"round"==D?X:null,borderWidth:(0,d.alU)(W),borderColor:(0,d.qPe)(W),overflow:"hidden"},children:(0,y.jsx)(l.Z,{height:(0,d.dXm)(W)+" !important",width:"100%",url:oe.thumbnail_image,isPlaying:B||H,event:oe})}),(0,y.jsxs)("div",{style:{cursor:"pointer",display:"flex",gap:"6px",padding:"12px 4px"},children:[(Q?(0,d.uU$)(W):(0,d.EIj)(W))&&(0,y.jsx)("div",{style:{maxWidth:te,minWidth:null!==(g=oe.products)&&void 0!==g&&null!==(P=g[0])&&void 0!==P&&P.thumbnail_image?te:"0",overflow:"hidden"},children:(0,y.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,d.yOX)(W),"important")},src:null===(j=oe.products)||void 0===j||null===(S=j[0])||void 0===S?void 0:S.thumbnail_image,alt:"thumbnail"})}),(0,y.jsxs)("div",{className:"wht-prod-info",style:{display:"flex",flexDirection:"column",gap:"5px"},children:[(0,y.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.anz)(W),"important"),e.style.setProperty("font-size",q,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",Y,"important"),e.style.setProperty("-webkit-line-clamp",1,"important"),e.style.setProperty("line-clamp",1,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},children:(0,u.s)(null===(C=oe.products[0])||void 0===C?void 0:C.title)}),pe&&(0,d.QaY)(W)&&(0,y.jsxs)("div",{style:{display:"flex",gap:"12px",flexDirection:(0,d.$zZ)(W)?"row":"row-reverse",justifyContent:(0,d.$zZ)(W)?"flex-start":"flex-end"},children:[(0,y.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.anz)(W),"important"),e.style.setProperty("font-size",G,"important"),e.style.setProperty("font-family",Y,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"normal"==(0,d.rPP)(W)?"normal":"bold"},children:(0,p.jx)(parseFloat(null!==(I=null===ne||void 0===ne?void 0:ne.price)&&void 0!==I?I:null===oe||void 0===oe||null===(M=oe.products)||void 0===M||null===(O=M[0])||void 0===O?void 0:O.price)," ",W,null===(E=oe.products[0])||void 0===E?void 0:E.currency)}),!isNaN(se)&&se>le&&(0,y.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.kPs)(W),"important"),e.style.setProperty("font-size",G,"important"),e.style.setProperty("font-family",Y,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,p.jx)(parseFloat(null!==(b=null===ne||void 0===ne?void 0:ne.compare_at_price)&&void 0!==b?b:null===oe||void 0===oe||null===(Z=oe.products)||void 0===Z||null===(k=Z[0])||void 0===k?void 0:k.compare_price)," ",W,null===(_=oe.products[0])||void 0===_?void 0:_.currency)})]}),(0,d.QaY)(W)&&pe&&!isNaN(de)&&0!=de&&(0,y.jsx)("div",{style:{display:"flex",backgroundColor:"green"==(0,d.ZJm)(W)?"#343434"==L?(0,d.ZJm)(W):L:(0,d.ZJm)(W),alignItems:"center",borderRadius:(0,d.CF_)(W)+"px",width:"fit-content",padding:(0,d.Spx)(W)?"3px 6px":"0px"},children:(0,d.Spx)(W)?(0,y.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.mso)(W),"important"),e.style.setProperty("font-size",J,"important"),e.style.setProperty("font-family",Y,"important"))},children:"".concat(de,"% Off")}):(0,y.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.aUT)(W),"important"),e.style.setProperty("font-size",J,"important"),e.style.setProperty("font-family",(0,d.V3Y)(W),"important"))},children:(0,d.sG7)(W)})})]})]})]})}},6805:function(e,t,o){o.d(t,{$I:function(){return s},$w:function(){return d},AK:function(){return r},AL:function(){return l},YP:function(){return n},me:function(){return i},rE:function(){return a}});const i="device_type",n="device_mode",r="mobile",l="tablet",s="desktop",a="portrait",d="landscape"},9821:function(e,t,o){var i=o(7753),n=o(8866),r=o(6805),l=o(9854);t.Z=function(e){const[t,o,s]=(0,n.Z)(),[a]=(0,i.j1)("whatmoreLandscapePadding"),[d]=(0,i.j1)("whatmoreShopId"),[c]=(0,i.j1)("whatmoreVideoTileSize"),[p]=(0,i.j1)("whatmoreVideoTileSizePortrait"),u=s>=1025,h="portrait"==t?p:c,m=!("portrait"!=t||!(s>=481)),y=h/100*1.3*.5,v=h/100;var f=Math.min(s,o),[x,w,g,P]=[.6*f*(16/9),.6*f,1.4,0];function j(e){return Math.round(10*e)/10}var S={DEVICE_TYPE:r.AK,DEVICE_MODE:r.rE};if(u){const e=w*y,t=x*y;[x,w,g,P]=[t,e,(s-2*a-2*(0,l.mZU)(d))/(1.1*e),a],S[r.me]=r.$I,S[r.YP]=r.$w}else if(m){var C=.8*w,I=.8*x;"portrait"==t?(C*=v,I*=v,[x,w,g,P]=[I,C,j(s/(1.2*C)),0],S[r.me]=r.AL,S[r.YP]=r.rE):([x,w,g,P]=[I,C,(s-2*a)/(1.1*C),a],S[r.me]=r.AL,S[r.YP]=r.$w)}else{C=w,I=x;"portrait"==t?(C=C*v*.9,I=I*v*.9,[x,w,g,P]=[I,C,j(s/(1.15*C)),0],S[r.me]=r.AK,S[r.YP]=r.rE):(C=.7*w,I=.7*x,[x,w,g,P]=[I,C,(s-2*a)/(1.1*C),a],S[r.me]=r.AK,S[r.YP]=r.$w)}return[x,w,g,P,S]}},9723:function(e,t,o){var i=o(5318);t.Z=void 0;var n=i(o(5045)),r=o(6417),l=(0,n.default)((0,r.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"}),"PlayArrowRounded");t.Z=l},3439:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);