/*! For license information please see 678.642b5db3.chunk.js.LICENSE.txt */
(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[678],{9085:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return $}});var r=o(7313),n=(o(3439),o(6090)),i=o(5109),s=o(7616),l=(o(6143),o(4444),o(7244),o(123),o(5892),o(9302)),a=o(2575),c=o(9821),d=o(8866),p=o(2279),u=o.n(p),h=o(7753),x=o(7129),m=o(1855),f=o(9854),y=o(4522),v=o(778),g=o(4892),C=o(5945),M=o(9219),S=o(6805),w=o(8984),P=o(7053),D=o(5416),j=o(6417);var R=function(e){var t,o,n,s,l,a,d,p,u,m,y,v;const[R,b,T,O,B]=(0,c.Z)(),$=(0,h.MO)("whatmoreShopId"),N="portrait"===B[S.YP],I=(N?1.076*b*(0,f.pEd)($):b*(0,f.H4g)($))+"px",U=(N?1.076*b*(0,f.pEd)($):b*(0,f.H4g)($))+"px",E=(N?.965*b*(0,f.pEd)($):.859*b*(0,f.H4g)($))+"px",[F,L]=(0,r.useState)(e.event),A=(0,h.MO)("whatmoreSecondaryColor");var K=(0,r.useContext)(x.V);const k=null===(t=e.isOnFocus)||void 0===t||t,G=null!==(o=e.playOnUnfocus)&&void 0!==o&&o,Z=e.onClick,{whatmoreUITheme:Y}=(0,r.useContext)(i.I),W=null!==(n=e.animateOnFocus&&(0,f.iWI)($))&&void 0!==n&&n,[H,V]=(0,r.useState)(!1),X=(0,h.MO)("whatmorePrimaryFont"),z=Math.round(+(null===(s=F.products[0])||void 0===s?void 0:s.price)),_=Math.round(+(null===(l=F.products[0])||void 0===l?void 0:l.compare_price)),J=_&&0!=_&&_>z?Math.round((_-z)/_*100):NaN,[Q,q]=(0,r.useState)(J),[ee,te]=(0,r.useState)();return(0,r.useEffect)((()=>{(0,f.N8M)($)&&(0,M.p_)(F,(0,f.Ipo)($),$).then((e=>{var t,o,r;L(e),(null===e||void 0===e||null===(t=e.products)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.discount)&&q(null===e||void 0===e||null===(r=e.products[0])||void 0===r?void 0:r.discount),V(!0)}));(async()=>{var e;const t=await(0,P.p)(null===F||void 0===F||null===(e=F.products)||void 0===e?void 0:e[0],(0,f.Ipo)($),$);te(t),V(!0)})()}),[]),(0,j.jsxs)("div",{ref:e=>{e&&(e.style.setProperty("margin-top",K.tileTopMargin+"px","important"),e.style.setProperty("margin-bottom",K.tileBottomMMargin+"px","important"))},className:W&&!N?k?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{margin:"0 auto",cursor:"pointer",width:b},onClick:()=>{Z(F)},children:[(0,j.jsx)("div",{style:{borderRadius:"round"==Y?"5%":"0px",boxShadow:"round"==Y?"0px 0px 5px 0px #B0B0B0":null,height:R,borderWidth:(0,f.alU)($),borderColor:(0,f.qPe)($),overflow:"hidden"},children:(0,j.jsx)(g.Z,{height:(0,f.dXm)($)+" !important",width:"100%",url:F.thumbnail_image,isPlaying:k||G||(0,w.gE)(),event:F})}),(0,j.jsxs)("div",{style:{display:(0,f.pvY)($)?"flex":"none",flexDirection:"column",padding:"12px 4px",gap:"5px"},children:[(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-size",I,"important"),e.style.setProperty("line-height","120%","important"),e.style.setProperty("font-family",X,"important"),e.style.setProperty("-webkit-line-clamp",1,"important"),e.style.setProperty("line-clamp",1,"important"),e.style.setProperty("-webkit-box-orient","vertical","important"),e.style.setProperty("display","-webkit-box","important"),e.style.setProperty("overflow","hidden","important"),e.style.setProperty("text-overflow","ellipsis","important"))},children:(0,C.s)(null===(a=F.products[0])||void 0===a?void 0:a.title)}),H&&(0,f.QaY)($)&&(0,j.jsxs)("div",{style:{display:"flex",gap:"12px",flexDirection:(0,f.$zZ)($)?"row":"row-reverse",justifyContent:(0,f.$zZ)($)?"flex-start":"flex-end"},children:[(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,f.Uyp)($),"important"),e.style.setProperty("font-size",U,"important"),e.style.setProperty("font-family",X,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"normal"==(0,f.rPP)($)?"normal":"bold"},children:(0,M.jx)(parseFloat((0,D.G)()?null===ee||void 0===ee?void 0:ee.price:null===F||void 0===F||null===(d=F.products)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.price)," ",$,null===(u=F.products[0])||void 0===u?void 0:u.currency)}),!isNaN(_)&&_>z&&(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,f.kPs)($),"important"),e.style.setProperty("font-size",U,"important"),e.style.setProperty("font-family",X,"important"),e.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,M.jx)(parseFloat((0,D.G)()?null===ee||void 0===ee?void 0:ee.compare_at_price:null===F||void 0===F||null===(m=F.products)||void 0===m||null===(y=m[0])||void 0===y?void 0:y.compare_price)," ",$,null===(v=F.products[0])||void 0===v?void 0:v.currency)})]}),(0,f.QaY)($)&&!isNaN(Q)&&0!=Q&&H&&(0,j.jsx)("div",{style:{display:(0,f.aKo)($)?"flex":"none",backgroundColor:"green"==(0,f.ZJm)($)?"#343434"==A?(0,f.ZJm)($):A:(0,f.ZJm)($),alignItems:"center",borderRadius:(0,f.CF_)($)+"px",width:"fit-content",padding:(0,f.Spx)($)?"3px 6px":"0px"},children:(0,f.Spx)($)?(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,f.mso)($),"important"),e.style.setProperty("font-size",E,"important"),e.style.setProperty("font-family",X,"important"))},children:`${Q}% Off`}):(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("color",(0,f.aUT)($),"important"),e.style.setProperty("font-size",E,"important"),e.style.setProperty("font-family",(0,f.V3Y)($),"important"))},children:(0,f.sG7)($)})})]})]})},b=o(7381);const T=(0,a.Z)({key:"whatmore-css-hv"});function O(e){const[t,o,n]=(0,c.Z)(),s=(0,h.MO)("whatmoreShopId"),l=e.events,a=e.onClick,{whatmoreWidgetSourceDetails:d}=(0,r.useContext)(i.I),p=Math.ceil(n),u=2*p,[x,g]=(0,r.useState)(u),[C,M]=(0,r.useState)(2*p),S=0===(0,f.WGf)(s)?24:(0,f.WGf)(s),[w,P]=(0,r.useState)({touchX:0,touchY:0}),D=()=>(0,j.jsx)("div",{style:{width:"50px",borderRadius:"50%",height:"50px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,j.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right-portrait"})}),b=()=>(0,j.jsx)("div",{style:{width:"50px",borderRadius:"50%",height:"50px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,j.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left-portrait"})}),T=e=>{if("next"===e){const e=2;M((e=>Math.min(e+Math.floor(n),l.length+p+1))),g((t=>Math.min(t+e,l.length+p+1)))}else M((e=>Math.max(e-Math.floor(n),u)));(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:d})};return(0,j.jsxs)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"flex-start",paddingLeft:"12px",overflow:"hidden",position:"relative"},onTouchStart:e=>{P({touchX:e.touches[0].clientX,touchY:e.touches[0].clientY})},onTouchEnd:e=>{var t,o,r,n;const i=(null===(t=e.changedTouches)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.clientX)-w.touchX,s=(null===(r=e.changedTouches)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.clientY)-w.touchY;Math.sqrt(i**2+s**2)>10&&Math.abs(i)>Math.abs(s)&&T(i>0?"prev":"next")},children:[(0,f.Yxs)(s)&&(0,j.jsxs)(j.Fragment,{children:[C<=l.length+p&&(0,j.jsx)("div",{onClick:()=>T("next"),style:{position:"absolute",zIndex:1,top:"50%",right:"0",transform:"translateY(-100%)"},children:(0,j.jsx)(D,{})}),C>2*p&&(0,j.jsx)("div",{onClick:()=>T("prev"),style:{position:"absolute",left:"0",zIndex:1,top:"50%",transform:"translateY(-100%)"},children:(0,j.jsx)(b,{})})]}),(0,j.jsx)("div",{style:{display:"flex",gap:S,transform:`translateX(-${(C-u)*(o+S)}px)`,transition:"transform 0.4s ease-in-out"},children:l.map(((e,t)=>t<x?(0,j.jsx)("div",{children:(0,j.jsx)(R,{isOnFocus:t<=C-p-1&&t>=Math.max(0,C-u),playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>a(e)})},`whatmore-carousel-tile-${t}`):(0,j.jsx)(m.Z,{})))})]})}function B(e){const[t,o,n,s]=(0,c.Z)(),[l,a]=(0,r.useState)(-1),d=(0,h.MO)("whatmoreShopId"),[p,x]=(0,r.useState)("next"),m=e.onClick,g=e.events,{whatmoreWidgetSourceDetails:C}=(0,r.useContext)(i.I),M=Math.min(Math.ceil(n),g.length),[S,w]=(0,r.useState)(0),P=0===(0,f.WGf)(d)?24:(0,f.WGf)(d),D=()=>(0,j.jsx)("div",{children:(0,j.jsx)("button",{onClick:B,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,j.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right"})})}),b=()=>(0,j.jsx)("div",{children:(0,j.jsx)("button",{onClick:O,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,j.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left"})})});(0,r.useEffect)((()=>{S<=M&&w((e=>e+M))}),[M]);const T=()=>{a(-1)},O=()=>{S!==M&&(x("prev"),w((e=>Math.max(Math.ceil(e-n),M))),(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:C}))},B=()=>{S>g.length+n||(x("next"),w((e=>Math.floor(e+n))),(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:C}))},$=S>g.length?g.length-M+1:S-M,N=S>=g.length?g.length:$+M,I=g.slice($,N);return(0,j.jsxs)("div",{className:"whatmore-events-carousel-landscape",style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:`${s}px`,paddingRight:`${s}px`},children:[g.length>=n-1&&(0,j.jsx)("div",{style:{position:"absolute",left:"0",zIndex:1,top:"50%",transform:"translateX(50%) translateY(-65%)"},children:S!==M&&(0,j.jsx)(b,{})}),(0,j.jsx)("div",{style:{display:"flex",gap:P+"px",width:o*n*(0,f.Su5)(d)+"px",paddingLeft:"8px",justifyContent:g.length<=n-1?"center":"flex-start",overflow:"hidden"},children:I.map(((e,t)=>{const o=`whatmore-event-tile-landscape-${e.index}${t===M-1?"-last":""}`,r=t===l;return(0,j.jsx)("div",{className:"whatmore-event-tile-horizontal-swipe-animation-"+("next"===p?"next":"prev"),onMouseEnter:()=>(e=>{const t=u()((()=>a(e)),300);return t(),t.cancel})(t),onMouseLeave:T,children:(0,j.jsx)(R,{isOnFocus:r,playOnUnfocus:!0,animateOnFocus:!0,event:e,onClick:()=>(e=>{m(e)})(e)})},o)}))}),g.length>=n-1&&(0,j.jsx)("div",{style:{position:"absolute",zIndex:1,top:"50%",right:s+"px",transform:"translateY(-65%)"},children:S<=g.length&&(0,j.jsx)(D,{})})]})}var $=function(e){const[t,o,a]=(0,d.Z)(),[c]=(0,h.j1)("whatmoreShopId"),[p]=(0,h.j1)("whatmorePrimaryColor"),[u]=(0,h.j1)("whatmoreSecondaryColor"),[m]=(0,h.j1)("whatmoreTitleFont"),y="portrait"==t?(0,h.MO)("whatmoreTitleFontSizePortrait"):(0,h.MO)("whatmoreTitleFontSize"),{whatmoreRootId:v}=(0,r.useContext)(i.I),g=((0,h.MO)("isInDesignMode"),(0,h.MO)("whatmoreCollectionHeading")),{whatmoreIsCollectionsTemplate:C}=(0,r.useContext)(i.I),M=e.events,S=e.onClick,w=m;function P(e){S(e)}return(0,r.useEffect)((()=>{(0,b.Oo)("Video shopping powered by Whatmore!")}),[]),(0,r.useEffect)((()=>{i.$.forEach((e=>{var t;const o=null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-f"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-f"]');if(!o)return;o&&e&&(e.style.minHeight="0px")}))}),[]),delete s.ZP.styles.global,(0,j.jsx)(l.C,{value:T,children:(0,j.jsx)("div",{className:"whatmore-carousel-events",children:(0,j.jsx)(n.x,{theme:s.ZP,cssVarsRoot:v,resetCSS:!1,children:(0,j.jsxs)(x.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[e.heading.trim().length>0||C?(0,j.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,j.jsx)("p",{ref:e=>{e&&(e.style.setProperty("font-family",w,"important"),e.style.setProperty("font-size",y+"px","important"))},style:{color:p,backgroundClip:"text",textAlign:"center",fontWeight:(0,f.wOV)(c),lineHeight:(0,f.vY4)(c),letterSpacing:(0,f.X2K)(c)},children:C?"W"!==g?g:"":e.heading})}):(0,j.jsx)(j.Fragment,{}),"landscape"===t?(0,j.jsx)(B,{events:M,onClick:P}):(0,j.jsx)(O,{events:M,onClick:P})]})})})})}},7129:function(e,t,o){"use strict";o.d(t,{V:function(){return r}});const r=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(e,t,o){"use strict";var r=o(7313),n=o(9821),i=o(7129),s=o(6417);t.Z=function(e){var[t,o]=(0,n.Z)();return(0,r.useContext)(i.V),e.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:o,height:t,overflow:"hidden"}})}},6040:function(e,t,o){const r=o(500);e.exports=function(e){if("string"!==typeof e)return;const t=e.toUpperCase();return Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0},e.exports.currencySymbolMap=r},500:function(e){e.exports={AED:"\u062f.\u0625",AFN:"\u060b",ALL:"L",AMD:"\u058f",ANG:"\u0192",AOA:"Kz",ARS:"$",AUD:"$",AWG:"\u0192",AZN:"\u20bc",BAM:"KM",BBD:"$",BDT:"\u09f3",BGN:"\u043b\u0432",BHD:".\u062f.\u0628",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"\u20bf",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"\xa5",CNY:"\xa5",COP:"$",COU:"COU",CRC:"\u20a1",CUC:"$",CUP:"\u20b1",CVE:"$",CZK:"K\u010d",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"\u062f\u062c",EEK:"kr",EGP:"\xa3",ERN:"Nfk",ETB:"Br",ETH:"\u039e",EUR:"\u20ac",FJD:"$",FKP:"\xa3",GBP:"\xa3",GEL:"\u20be",GGP:"\xa3",GHC:"\u20b5",GHS:"GH\u20b5",GIP:"\xa3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20aa",IMP:"\xa3",INR:"\u20b9",IQD:"\u0639.\u062f",IRR:"\ufdfc",ISK:"kr",JEP:"\xa3",JMD:"J$",JOD:"JD",JPY:"\xa5",KES:"KSh",KGS:"\u043b\u0432",KHR:"\u17db",KMF:"CF",KPW:"\u20a9",KRW:"\u20a9",KWD:"KD",KYD:"$",KZT:"\u20b8",LAK:"\u20ad",LBP:"\xa3",LKR:"\u20a8",LRD:"$",LSL:"M",LTC:"\u0141",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"\u0434\u0435\u043d",MMK:"K",MNT:"\u20ae",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"\u20a8",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"\u20a6",NIO:"C$",NOK:"kr",NPR:"\u20a8",NZD:"$",OMR:"\ufdfc",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20b1",PKR:"\u20a8",PLN:"z\u0142",PYG:"Gs",QAR:"\ufdfc",RMB:"\uffe5",RON:"lei",RSD:"\u0414\u0438\u043d.",RUB:"\u20bd",RWF:"R\u20a3",SAR:"\ufdfc",SBD:"$",SCR:"\u20a8",SDG:"\u062c.\u0633.",SEK:"kr",SGD:"S$",SHP:"\xa3",SLL:"Le",SOS:"S",SRD:"$",SSP:"\xa3",STD:"Db",STN:"Db",SVC:"$",SYP:"\xa3",SZL:"E",THB:"\u0e3f",TJS:"SM",TMT:"T",TND:"\u062f.\u062a",TOP:"T$",TRL:"\u20a4",TRY:"\u20ba",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20b4",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"\u043b\u0432",VEF:"Bs",VES:"Bs.S",VND:"\u20ab",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"\u0243",XCD:"$",XOF:"CFA",XPF:"\u20a3",XSU:"Sucre",XUA:"XUA",YER:"\ufdfc",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},3439:function(){},5892:function(){},4444:function(){},8507:function(e,t){"use strict";function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)e[r]=o[r]}return e}var r=function e(t,r){function n(e,n,i){if("undefined"!==typeof document){"number"===typeof(i=o({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in i)i[l]&&(s+="; "+l,!0!==i[l]&&(s+="="+i[l].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+s}}return Object.create({set:n,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],r={},n=0;n<o.length;n++){var i=o[n].split("="),s=i.slice(1).join("=");try{var l=decodeURIComponent(i[0]);if(r[l]=t.read(s,l),e===l)break}catch(a){}}return e?r[e]:r}},remove:function(e,t){n(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=r}}]);