"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[562],{4784:function(e,t,o){o.r(t);var i=o(7313),n=o(6090),r=o(7616),l=o(32),s=(o(6143),o(7850),o(4444),o(7244),o(123),o(5892),o(1811),o(9302)),a=o(2575),d=o(2210),p=o(8486),c=o(9821),u=o(8866),h=o(2279),m=o.n(h),y=o(7753),v=o(7129),x=o(1855),f=o(9854),g=o(364),w=o(4522),P=o(778),j=o(7381),S=o(9069),C=o(6417);const M=(0,a.Z)({key:"whatmore-css-hv"});function I(e){const[t,o,n]=(0,c.Z)(),r=(0,y.MO)("whatmoreShopId"),l=e.events,s=e.onClick,a=n*(0,f.u6l)(r),p=(0,f.yBw)(r),[u,h]=(0,i.useState)(p?l.length:a),{whatmoreWidgetSourceDetails:m}=(0,i.useContext)(g.I);return(0,i.useEffect)((()=>{u<=a&&h((e=>e+a))}),[a]),(0,C.jsx)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("div",{style:{width:window.innerWidth,height:"fit-content"},children:(0,C.jsx)(d.tq,{slidesPerView:l.length>1?a:1,initialSlide:l.length>1?1:0,centeredSlides:!0,centeredSlidesBounds:!1,watchSlidesProgress:!0,touchRatio:.5,onSlideChange:e=>{(0,w.y4)({userInteractionType:P.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:m}),e.realIndex>e.previousIndex&&h((e=>e+a))},loop:p,children:l.map(((e,t)=>t<=u&&(0,C.jsx)(d.o5,{children:t=>{let{isActive:o,isPrev:i,isNext:n,isVisible:r}=t;return i||n||o?(0,C.jsx)(S.Z,{isOnFocus:o&&r,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{s(e)}}):(0,C.jsx)(x.Z,{})}},"whatmore-event-tile-portrait-"+e.index)))})})})}function O(e){const[t,o,n,r]=(0,c.Z)(),[l,s]=(0,i.useState)(-1),a=(0,y.MO)("whatmoreShopId"),u=e.onClick,h=e.events,v=(0,f.yBw)(a),[j,M]=(0,i.useState)(v?h.length:n),I=Math.min(n,h.length),{whatmoreWidgetSourceDetails:O}=(0,i.useContext)(g.I),b=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(b.current){const e=o*I*(0,f.Su5)(a)+"px";h.length<4?b.current.style.setProperty("width",e,"important"):b.current.style.width=e}}),[o,I,a,j,h.length]),(0,i.useEffect)((()=>{j<=n&&M((e=>e+n))}),[n]),(0,C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",paddingLeft:r+"px",paddingRight:r+"px"},className:"whatmore-events-carousel-landscape",children:(0,C.jsx)("div",{ref:b,style:{height:"100%"},children:(0,C.jsx)(d.tq,{slidesPerView:I,watchSlidesProgress:!0,modules:[p.W_],navigation:!0,slidesPerGroup:parseInt(I),onSlideChange:e=>{(0,w.y4)({userInteractionType:P.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:O}),e.realIndex>e.previousIndex&&M((e=>e+n))},spaceBetween:0,loop:v&&h.length>4,style:{height:"100%"},children:h.map(((e,t)=>{const o=m()((()=>s(t)),300);return t<=j&&(0,C.jsx)(d.o5,{onMouseEnter:()=>{o()},onMouseLeave:()=>{o.cancel(),s(-1)},style:{height:"100%"},children:o=>{let{isActive:i,isPrev:n,isNext:r,isVisible:s}=o;return s||n||r?(0,C.jsx)(S.Z,{isOnFocus:t==l,playOnUnfocus:!(0,f.dHy)(a)||t==parseInt(I/2)&&-1==l,animateOnFocus:!0,event:e,onClick:()=>{u(e)}}):(0,C.jsx)(x.Z,{})}},"whatmore-event-tile-landscape-"+e.index)}))})})})}t.default=function(e){const[t,o,a]=(0,u.Z)(),[d]=(0,y.j1)("whatmoreShopId"),[p]=(0,y.j1)("whatmorePrimaryColor"),[c]=(0,y.j1)("whatmoreTitleFont"),h="portrait"==t?(0,y.MO)("whatmoreTitleFontSizePortrait"):(0,y.MO)("whatmoreTitleFontSize"),{whatmoreRootId:m}=(0,i.useContext)(g.I),x=(0,y.MO)("whatmoreCollectionHeading"),{whatmoreIsCollectionsTemplate:w}=(0,i.useContext)(g.I),P=e.events,S=e.onClick,b=c;function k(e){S(e)}return(0,i.useEffect)((()=>{(0,j.Oo)("Video shopping powered by Whatmore!")}),[]),(0,i.useEffect)((()=>{l.IR.forEach((e=>{var t;const o=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-h"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-h"]');if(!o)return;o&&e&&(e.style.minHeight="0px")}))}),[]),delete r.ZP.styles.global,(0,C.jsx)(s.C,{value:M,children:(0,C.jsx)("div",{className:"whatmore-carousel-events",style:{height:"100%"},children:(0,C.jsx)(n.x,{theme:r.ZP,cssVarsRoot:m,resetCSS:!1,children:(0,C.jsxs)(v.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0||w?(0,C.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",b,"important"),e.style.setProperty("font-size",h+"px","important"))},style:{color:p,backgroundClip:"text",textAlign:"center",fontWeight:(0,f.wOV)(d),lineHeight:(0,f.vY4)(d),letterSpacing:(0,f.X2K)(d)},children:w?"W"!==x?x:"":e.heading})}):(0,C.jsx)(C.Fragment,{}),"landscape"===t?(0,C.jsx)(O,{events:P,onClick:k}):(0,C.jsx)(I,{events:P,onClick:k})]})})})})}},7129:function(e,t,o){o.d(t,{V:function(){return i}});const i=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(e,t,o){var i=o(7313),n=o(9821),r=o(7129),l=o(7753),s=o(6417);t.Z=function(e){var[t,o]=(0,n.Z)();(0,i.useContext)(r.V);const a=(0,l.MO)("whatmoreShopId");return e.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:"8968077397"==a?void 0:o,aspectRatio:"8968077397"==a?9/16:void 0,height:"8968077397"==a?"100%":t,overflow:"hidden"}})}},9069:function(e,t,o){var i=o(7313),n=o(9821),r=(o(3439),o(7753)),l=o(4892),s=o(7129),a=o(6805),d=o(9854),p=o(364),c=o(9219),u=o(5945),h=o(7053),m=o(6417);t.Z=function(e){var t,o,y,v,x,f,g,w,P,j,S,C,M,I,O,b,k,E,Z;const[F,_,N,R,T]=(0,n.Z)();var W=(0,i.useContext)(s.V);const D=(0,r.MO)("whatmoreUITheme"),V=(0,r.MO)("whatmoreShopId"),z=(0,r.MO)("whatmorePrimaryFont"),U=(0,r.MO)("whatmoreSecondaryColor"),B=e.onClick,H=null===(t=e.isOnFocus)||void 0===t||t,A=null!==(o=e.playOnUnfocus)&&void 0!==o&&o,G=null!==(y=e.animateOnFocus&&(0,d.iWI)(V))&&void 0!==y&&y,L="portrait"===T[a.YP],q=(L?1.076*_*(0,d.pEd)(V):_*(0,d.H4g)(V))+"px",Y=(L?1.076*_*(0,d.pEd)(V):_*(0,d.H4g)(V))+"px",J=(L?.965*_*(0,d.pEd)(V):.859*_*(0,d.H4g)(V))+"px",K=(0,d.nzC)(V),{whatmoreIsPreviewMode:$}=(0,i.useContext)(p.I),X=.25*_,Q=X+"px",[ee,te]=(0,i.useState)(e.event),[oe,ie]=(0,i.useState)(),ne=Math.round(+(null===(v=ee.products)||void 0===v||null===(x=v[0])||void 0===x?void 0:x.price)),re=Math.round(+(null===ee||void 0===ee||null===(f=ee.products[0])||void 0===f?void 0:f.compare_price)),le=re&&0!=re&&re>ne?Math.round((re-ne)/re*100):NaN,[se,ae]=(0,i.useState)(le);return(0,i.useEffect)((()=>{(0,d.N8M)(V)&&(0,c.p_)(ee,(0,d.Ipo)(V),V).then((e=>{var t,o,i;te(e);const n=Math.round(null===(t=e.products)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.price),r=Math.round(null===e||void 0===e||null===(i=e.products[0])||void 0===i?void 0:i.compare_price),l=r&&0!=r&&r>n?Math.round((r-n)/r*100):NaN;ae(l)}));(async()=>{var e;const t=await(0,h.p)(null===ee||void 0===ee||null===(e=ee.products)||void 0===e?void 0:e[0],(0,d.Ipo)(V),V);ie(t)})()}),[]),(0,m.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",W.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",W.tileBottomMMargin+"px","important"))},children:[(0,m.jsx)("div",{style:{margin:"0 auto",width:_,height:L&&H?"STR2FOC6KG9"==V||"STRDOIDF6O7"==V?F:1.1*F:F,borderRadius:"round"==D?"5px":"0px",boxShadow:"round"==D?K:null,borderWidth:(0,d.alU)(V),borderColor:(0,d.qPe)(V),overflow:"hidden",cursor:"pointer"},className:G?H?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{B(ee)},children:(0,m.jsx)(l.Z,{height:(0,d.dXm)(V)+" !important",width:"100%",url:ee.thumbnail_image,isPlaying:H||A,event:ee})}),"STRSJFOP1GI"!=V&&(0,m.jsxs)("div",{onClick:()=>{B(ee)},className:G?H?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{cursor:"pointer",display:"flex",gap:"6px",padding:"16px 12px"},children:[($?(0,d.uU$)(V):(0,d.EIj)(V))&&(0,m.jsx)("div",{style:{maxWidth:Q,minWidth:null!==(g=ee.products)&&void 0!==g&&null!==(w=g[0])&&void 0!==w&&w.thumbnail_image?Q:"0",overflow:"hidden"},children:(0,m.jsx)("img",{ref:e=>{e&&e.style.setProperty("object-fit",(0,d.yOX)(V),"important")},src:null===(P=ee.products)||void 0===P||null===(j=P[0])||void 0===j?void 0:j.thumbnail_image})}),(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-size",q,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",z,"important"),e.style.setProperty("-webkit-line-clamp",1,"important"),e.style.setProperty("line-clamp",1,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},children:(0,u.s)(null===(S=ee.products[0])||void 0===S?void 0:S.title)}),(0,d.QaY)(V)&&(0,m.jsxs)("div",{style:{display:"flex",gap:"12px",flexDirection:(0,d.$zZ)(V)?"row":"row-reverse",justifyContent:(0,d.$zZ)(V)?"flex-start":"flex-end"},children:[(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.Uyp)(V),"important"),e.style.setProperty("font-size",Y,"important"),e.style.setProperty("font-family",z,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"normal"==(0,d.rPP)(V)?"normal":"bold"},children:(0,c.jx)(parseFloat(null!==(C=null===oe||void 0===oe?void 0:oe.price)&&void 0!==C?C:null===ee||void 0===ee||null===(M=ee.products)||void 0===M||null===(I=M[0])||void 0===I?void 0:I.price)," ",V,null===(O=ee.products[0])||void 0===O?void 0:O.currency)}),!isNaN(re)&&re>ne&&(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.kPs)(V),"important"),e.style.setProperty("font-size",Y,"important"),e.style.setProperty("font-family",z,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,c.jx)(parseFloat(null!==(b=null===oe||void 0===oe?void 0:oe.compare_at_price)&&void 0!==b?b:null===ee||void 0===ee||null===(k=ee.products)||void 0===k||null===(E=k[0])||void 0===E?void 0:E.compare_price)," ",V,null===(Z=ee.products[0])||void 0===Z?void 0:Z.currency)})]}),(0,d.QaY)(V)&&!isNaN(se)&&0!=se&&(0,m.jsx)("div",{style:{display:"flex",backgroundColor:"green"==(0,d.ZJm)(V)?"#343434"==U?(0,d.ZJm)(V):U:(0,d.ZJm)(V),alignItems:"center",borderRadius:(0,d.CF_)(V)+"px",width:"fit-content",padding:(0,d.Spx)(V)?"3px 6px":"0px"},children:(0,d.Spx)(V)?(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.mso)(V),"important"),e.style.setProperty("font-size",J,"important"),e.style.setProperty("font-family",z,"important"))},children:`${se}% Off`}):(0,m.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,d.aUT)(V),"important"),e.style.setProperty("font-size",J,"important"),e.style.setProperty("font-family",(0,d.V3Y)(V),"important"))},children:(0,d.sG7)(V)})})]})]})]})}},3439:function(){},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);