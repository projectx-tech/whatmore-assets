/*! For license information please see 678.21cb6627.chunk.js.LICENSE.txt */
(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[678],{9085:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return B}});var n=o(7313),r=(o(3439),o(6090)),i=o(8811),s=o(7616),l=(o(6143),o(4444),o(7244),o(123),o(5892),o(9302)),a=o(2575),c=o(9821),d=o(8866),p=o(2279),u=o.n(p),h=o(7753),x=o(7129),m=o(1855),f=o(9854),y=o(4522),v=o(778),g=o(4892),C=o(5945),M=o(9219),S=o(6805),w=o(8984),P=o(7053),D=o(6417);var j=function(t){var e,o,r,s,l,a,d,p,u,m,y,v,j,R;const[b,T,O,B,N]=(0,c.Z)(),I=(0,h.MO)("whatmoreShopId"),U="portrait"===N[S.YP],E=(U?1.076*T*(0,f.pEd)(I):T*(0,f.H4g)(I))+"px",F=(U?1.076*T*(0,f.pEd)(I):T*(0,f.H4g)(I))+"px",L=(U?.965*T*(0,f.pEd)(I):.859*T*(0,f.H4g)(I))+"px",[$,A]=(0,n.useState)(t.event),K=(0,h.MO)("whatmoreSecondaryColor");var k=(0,n.useContext)(x.V);const G=null===(e=t.isOnFocus)||void 0===e||e,Z=null!==(o=t.playOnUnfocus)&&void 0!==o&&o,Y=t.onClick,{whatmoreUITheme:W}=(0,n.useContext)(i.I),H=null!==(r=t.animateOnFocus&&(0,f.iWI)(I))&&void 0!==r&&r,[V,X]=(0,n.useState)(!(0,f.N8M)(I)),z=(0,h.MO)("whatmorePrimaryFont"),_=Math.round(+(null===(s=$.products[0])||void 0===s?void 0:s.price)),J=Math.round(+(null===(l=$.products[0])||void 0===l?void 0:l.compare_price)),Q=J&&0!=J&&J>_?Math.round((J-_)/J*100):NaN,[q,tt]=(0,n.useState)(Q),[et,ot]=(0,n.useState)();return(0,n.useEffect)((()=>{(0,f.N8M)(I)&&(0,M.p_)($,(0,f.Ipo)(I),I).then((t=>{var e,o,n;A(t),(null===t||void 0===t||null===(e=t.products)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.discount)&&tt(null===t||void 0===t||null===(n=t.products[0])||void 0===n?void 0:n.discount),X(!0)}));(async()=>{var t;const e=await(0,P.p)(null===$||void 0===$||null===(t=$.products)||void 0===t?void 0:t[0],(0,f.Ipo)(I),I);ot(e)})()}),[]),(0,D.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",k.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",k.tileBottomMMargin+"px","important"))},className:H&&!U?G?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",style:{margin:"0 auto",cursor:"pointer",width:T},onClick:()=>{Y($)},children:[(0,D.jsx)("div",{style:{borderRadius:"round"==W?"5%":"0px",boxShadow:"round"==W?"0px 0px 5px 0px #B0B0B0":null,height:b,borderWidth:(0,f.alU)(I),borderColor:(0,f.qPe)(I),overflow:"hidden"},children:(0,D.jsx)(g.Z,{height:"100%",width:"100%",url:$.thumbnail_image,isPlaying:G||Z||(0,w.gE)(),event:$})}),(0,D.jsxs)("div",{style:{display:(0,f.pvY)(I)?"flex":"none",flexDirection:"column",padding:"12px 4px",gap:"5px"},children:[(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-size",E,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",z,"important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},children:(0,C.s)(null===(a=$.products[0])||void 0===a?void 0:a.title)}),V&&(0,f.QaY)(I)&&(0,D.jsxs)("div",{style:{display:"flex",gap:"12px",flexDirection:(0,f.$zZ)(I)?"row":"row-reverse",justifyContent:(0,f.$zZ)(I)?"flex-start":"flex-end"},children:[(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,f.Uyp)(I),"important"),t.style.setProperty("font-size",F,"important"),t.style.setProperty("font-family",z,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"normal"==(0,f.rPP)(I)?"normal":"bold"},children:(0,M.jx)(parseFloat(null!==(d=(null===et||void 0===et?void 0:et.price)/100)&&void 0!==d?d:null===$||void 0===$||null===(p=$.products)||void 0===p||null===(u=p[0])||void 0===u?void 0:u.price)," ",I,null===(m=$.products[0])||void 0===m?void 0:m.currency)}),!isNaN(J)&&J>_&&(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,f.kPs)(I),"important"),t.style.setProperty("font-size",F,"important"),t.style.setProperty("font-family",z,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textDecoration:"line-through"},children:(0,M.jx)(parseFloat(null!==(y=(null===et||void 0===et?void 0:et.compare_at_price)/100)&&void 0!==y?y:null===$||void 0===$||null===(v=$.products)||void 0===v||null===(j=v[0])||void 0===j?void 0:j.compare_price)," ",I,null===(R=$.products[0])||void 0===R?void 0:R.currency)})]}),(0,f.QaY)(I)&&!isNaN(q)&&0!=q&&V&&(0,D.jsx)("div",{style:{display:(0,f.aKo)(I)?"flex":"none",backgroundColor:"green"==(0,f.ZJm)(I)?"#343434"==K?(0,f.ZJm)(I):K:(0,f.ZJm)(I),alignItems:"center",borderRadius:(0,f.CF_)(I)+"px",width:"fit-content",padding:(0,f.Spx)(I)?"3px 6px":"0px"},children:(0,f.Spx)(I)?(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,f.mso)(I),"important"),t.style.setProperty("font-size",L,"important"),t.style.setProperty("font-family",z,"important"))},children:"".concat(q,"% Off")}):(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color",(0,f.aUT)(I),"important"),t.style.setProperty("font-size",L,"important"),t.style.setProperty("font-family",(0,f.V3Y)(I),"important"))},children:(0,f.sG7)(I)})})]})]})},R=o(7381);const b=(0,a.Z)({key:"whatmore-css-hv"});function T(t){const[e,o,r]=(0,c.Z)(),s=(0,h.MO)("whatmoreShopId"),l=t.events,a=t.onClick,{whatmoreWidgetSourceDetails:d}=(0,n.useContext)(i.I),p=Math.ceil(r),u=2*p,[x,g]=(0,n.useState)(u),[C,M]=(0,n.useState)(2*p),S=0===(0,f.WGf)(s)?24:(0,f.WGf)(s),[w,P]=(0,n.useState)({touchX:0,touchY:0}),R=()=>(0,D.jsx)("div",{style:{width:"50px",borderRadius:"50%",height:"50px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,D.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right-portrait"})}),b=()=>(0,D.jsx)("div",{style:{width:"50px",borderRadius:"50%",height:"50px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,D.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left-portrait"})}),T=t=>{if("next"===t){const t=2;M((t=>Math.min(t+Math.floor(r),l.length+p+1))),g((e=>Math.min(e+t,l.length+p+1)))}else M((t=>Math.max(t-Math.floor(r),u)));(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:d})};return(0,D.jsxs)("div",{className:"whatmore-events-carousel-portrait",style:{display:"flex",justifyContent:"flex-start",paddingLeft:"12px",overflow:"hidden",position:"relative"},onTouchStart:t=>{P({touchX:t.touches[0].clientX,touchY:t.touches[0].clientY})},onTouchEnd:t=>{var e,o,n,r;const i=(null===(e=t.changedTouches)||void 0===e||null===(o=e[0])||void 0===o?void 0:o.clientX)-w.touchX,s=(null===(n=t.changedTouches)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.clientY)-w.touchY;Math.sqrt(i**2+s**2)>10&&Math.abs(i)>Math.abs(s)&&T(i>0?"prev":"next")},children:[(0,f.Yxs)(s)&&(0,D.jsxs)(D.Fragment,{children:[C<=l.length+p&&(0,D.jsx)("div",{onClick:()=>T("next"),style:{position:"absolute",zIndex:1,top:"50%",right:"0",transform:"translateY(-100%)"},children:(0,D.jsx)(R,{})}),C>2*p&&(0,D.jsx)("div",{onClick:()=>T("prev"),style:{position:"absolute",left:"0",zIndex:1,top:"50%",transform:"translateY(-100%)"},children:(0,D.jsx)(b,{})})]}),(0,D.jsx)("div",{style:{display:"flex",gap:S,transform:"translateX(-".concat((C-u)*(o+S),"px)"),transition:"transform 0.4s ease-in-out"},children:l.map(((t,e)=>e<x?(0,D.jsx)("div",{children:(0,D.jsx)(j,{isOnFocus:e<=C-p-1&&e>=Math.max(0,C-u),playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>a(t)})},"whatmore-carousel-tile-".concat(e)):(0,D.jsx)(m.Z,{})))})]})}function O(t){const[e,o,r,s]=(0,c.Z)(),[l,a]=(0,n.useState)(-1),d=(0,h.MO)("whatmoreShopId"),[p,x]=(0,n.useState)("next"),m=t.onClick,g=t.events,{whatmoreWidgetSourceDetails:C}=(0,n.useContext)(i.I),M=Math.min(Math.ceil(r),g.length),[S,w]=(0,n.useState)(0),P=0===(0,f.WGf)(d)?24:(0,f.WGf)(d),R=()=>(0,D.jsx)("div",{children:(0,D.jsx)("button",{onClick:B,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,D.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-right"})})}),b=()=>(0,D.jsx)("div",{children:(0,D.jsx)("button",{onClick:O,style:{width:"50px",borderRadius:"6px",height:"100px",backgroundColor:"rgba(0, 0, 0, 0.3)"},children:(0,D.jsx)("div",{style:{display:"flex"},className:"whatmore-arrow-left"})})});(0,n.useEffect)((()=>{S<=M&&w((t=>t+M))}),[M]);const T=()=>{a(-1)},O=()=>{S!==M&&(x("prev"),w((t=>Math.max(Math.ceil(t-r),M))),(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:C}))},B=()=>{S>g.length+r||(x("next"),w((t=>Math.floor(t+r))),(0,y.y4)({userInteractionType:v.K.HOMEPAGE_CAROUSEL_SWIPED,widgetSourceDetails:C}))},N=S>g.length?g.length-M+1:S-M,I=S>=g.length?g.length:N+M,U=g.slice(N,I);return(0,D.jsxs)("div",{className:"whatmore-events-carousel-landscape",style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"".concat(s,"px"),paddingRight:"".concat(s,"px")},children:[g.length>=r-1&&(0,D.jsx)("div",{style:{position:"absolute",left:"0",zIndex:1,top:"50%",transform:"translateX(50%) translateY(-65%)"},children:S!==M&&(0,D.jsx)(b,{})}),(0,D.jsx)("div",{style:{display:"flex",gap:P+"px",width:"".concat(o*r*(0,f.Su5)(d),"px"),paddingLeft:"8px",justifyContent:g.length<=r-1?"center":"flex-start",overflow:"hidden"},children:U.map(((t,e)=>{const o="whatmore-event-tile-landscape-".concat(t.index).concat(e===M-1?"-last":""),n=e===l;return(0,D.jsx)("div",{className:"whatmore-event-tile-horizontal-swipe-animation-".concat("next"===p?"next":"prev"),onMouseEnter:()=>(t=>{const e=u()((()=>a(t)),300);return e(),e.cancel})(e),onMouseLeave:T,children:(0,D.jsx)(j,{isOnFocus:n,playOnUnfocus:!0,animateOnFocus:!0,event:t,onClick:()=>(t=>{m(t)})(t)})},o)}))}),g.length>=r-1&&(0,D.jsx)("div",{style:{position:"absolute",zIndex:1,top:"50%",right:s+"px",transform:"translateY(-65%)"},children:S<=g.length&&(0,D.jsx)(R,{})})]})}var B=function(t){const[e,o,a]=(0,d.Z)(),[c]=(0,h.j1)("whatmoreShopId"),[p]=(0,h.j1)("whatmorePrimaryColor"),[u]=(0,h.j1)("whatmoreSecondaryColor"),[m]=(0,h.j1)("whatmoreTitleFont"),y="portrait"==e?(0,h.MO)("whatmoreTitleFontSizePortrait"):(0,h.MO)("whatmoreTitleFontSize"),{whatmoreRootId:v}=(0,n.useContext)(i.I),g=((0,h.MO)("isInDesignMode"),(0,h.MO)("whatmoreCollectionHeading")),{whatmoreIsCollectionsTemplate:C}=(0,n.useContext)(i.I),M=t.events,S=t.onClick,w=m;function P(t){S(t)}return(0,n.useEffect)((()=>{(0,R.Oo)("Video shopping powered by Whatmore!")}),[]),(0,n.useEffect)((()=>{i.$.forEach((t=>{var e;const o=null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-f"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-f"]');if(!o)return;o&&t&&(t.style.minHeight="0px")}))}),[]),delete s.ZP.styles.global,(0,D.jsx)(l.C,{value:b,children:(0,D.jsx)("div",{className:"whatmore-carousel-events",children:(0,D.jsx)(r.x,{theme:s.ZP,cssVarsRoot:v,resetCSS:!1,children:(0,D.jsxs)(x.V.Provider,{value:{tileTopMargin:25,tileBottomMMargin:25,tileLeftMargin:4,tileRightMargin:4,showPlayButton:!0},children:[t.heading.trim().length>0||C?(0,D.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,D.jsx)("p",{ref:t=>{t&&(t.style.setProperty("font-family",w,"important"),t.style.setProperty("font-size",y+"px","important"))},style:{color:p,backgroundClip:"text",textAlign:"center",fontWeight:(0,f.wOV)(c),lineHeight:(0,f.vY4)(c),letterSpacing:(0,f.X2K)(c)},children:C?"W"!==g?g:"":t.heading})}):(0,D.jsx)(D.Fragment,{}),"landscape"===e?(0,D.jsx)(O,{events:M,onClick:P}):(0,D.jsx)(T,{events:M,onClick:P})]})})})})}},7129:function(t,e,o){"use strict";o.d(e,{V:function(){return n}});const n=(0,o(7313).createContext)({tileTopMargin:10,tileBottomMMargin:10,tileLeftMargin:10,tileRightMargin:10,showPlayButton:!0})},1855:function(t,e,o){"use strict";var n=o(7313),r=o(9821),i=o(7129),s=o(6417);e.Z=function(t){var[e,o]=(0,r.Z)();return(0,n.useContext)(i.V),t.event,(0,s.jsx)("div",{style:{margin:"0 auto",width:o,height:e,overflow:"hidden"}})}},6040:function(t,e,o){const n=o(500);t.exports=function(t){if("string"!==typeof t)return;const e=t.toUpperCase();return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0},t.exports.currencySymbolMap=n},500:function(t){t.exports={AED:"\u062f.\u0625",AFN:"\u060b",ALL:"L",AMD:"\u058f",ANG:"\u0192",AOA:"Kz",ARS:"$",AUD:"$",AWG:"\u0192",AZN:"\u20bc",BAM:"KM",BBD:"$",BDT:"\u09f3",BGN:"\u043b\u0432",BHD:".\u062f.\u0628",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"\u20bf",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"\xa5",CNY:"\xa5",COP:"$",COU:"COU",CRC:"\u20a1",CUC:"$",CUP:"\u20b1",CVE:"$",CZK:"K\u010d",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"\u062f\u062c",EEK:"kr",EGP:"\xa3",ERN:"Nfk",ETB:"Br",ETH:"\u039e",EUR:"\u20ac",FJD:"$",FKP:"\xa3",GBP:"\xa3",GEL:"\u20be",GGP:"\xa3",GHC:"\u20b5",GHS:"GH\u20b5",GIP:"\xa3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20aa",IMP:"\xa3",INR:"\u20b9",IQD:"\u0639.\u062f",IRR:"\ufdfc",ISK:"kr",JEP:"\xa3",JMD:"J$",JOD:"JD",JPY:"\xa5",KES:"KSh",KGS:"\u043b\u0432",KHR:"\u17db",KMF:"CF",KPW:"\u20a9",KRW:"\u20a9",KWD:"KD",KYD:"$",KZT:"\u20b8",LAK:"\u20ad",LBP:"\xa3",LKR:"\u20a8",LRD:"$",LSL:"M",LTC:"\u0141",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"\u0434\u0435\u043d",MMK:"K",MNT:"\u20ae",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"\u20a8",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"\u20a6",NIO:"C$",NOK:"kr",NPR:"\u20a8",NZD:"$",OMR:"\ufdfc",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20b1",PKR:"\u20a8",PLN:"z\u0142",PYG:"Gs",QAR:"\ufdfc",RMB:"\uffe5",RON:"lei",RSD:"\u0414\u0438\u043d.",RUB:"\u20bd",RWF:"R\u20a3",SAR:"\ufdfc",SBD:"$",SCR:"\u20a8",SDG:"\u062c.\u0633.",SEK:"kr",SGD:"S$",SHP:"\xa3",SLL:"Le",SOS:"S",SRD:"$",SSP:"\xa3",STD:"Db",STN:"Db",SVC:"$",SYP:"\xa3",SZL:"E",THB:"\u0e3f",TJS:"SM",TMT:"T",TND:"\u062f.\u062a",TOP:"T$",TRL:"\u20a4",TRY:"\u20ba",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20b4",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"\u043b\u0432",VEF:"Bs",VES:"Bs.S",VND:"\u20ab",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"\u0243",XCD:"$",XOF:"CFA",XPF:"\u20a3",XSU:"Sucre",XUA:"XUA",YER:"\ufdfc",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},3439:function(){},5892:function(){},4444:function(){},8507:function(t,e){"use strict";function o(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}var n=function t(e,n){function r(t,r,i){if("undefined"!==typeof document){"number"===typeof(i=o({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in i)i[l]&&(s+="; "+l,!0!==i[l]&&(s+="="+i[l].split(";")[0]));return document.cookie=t+"="+e.write(r,t)+s}}return Object.create({set:r,get:function(t){if("undefined"!==typeof document&&(!arguments.length||t)){for(var o=document.cookie?document.cookie.split("; "):[],n={},r=0;r<o.length;r++){var i=o[r].split("="),s=i.slice(1).join("=");try{var l=decodeURIComponent(i[0]);if(n[l]=e.read(s,l),t===l)break}catch(a){}}return t?n[t]:n}},remove:function(t,e){r(t,"",o({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,o({},this.attributes,e))},withConverter:function(e){return t(o({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});e.Z=n}}]);