(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[119,803],{51:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});n(7313);var r=n(6417);var i=function(t){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"whatmore-loading-indicator"})})}},3867:function(t,e,n){"use strict";var r=n(8816),i=n(417),o=n(4885),s=n(9543),l=n(6417);e.Z=function(t){var e;const[n]=(0,s.j1)("whatmoreSecondaryColor"),[a,u]=(0,s.j1)("productRatings"),d=(0,s.MO)("whatmorePrimaryFont"),c=(0,s.MO)("whatmoreUITheme"),f=(t.storeId,t.productId),h=(t.productLink,t.fontSize),p=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===a||"undefined"==typeof a||!(f in a)||a[f].avgRating>5)return(0,l.jsx)(l.Fragment,{});const v=a[f].avgRating,w=a[f].totalRatings;return(0,l.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,l.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(v))].map(((t,e)=>(0,l.jsx)(r.Z,{sx:{color:n,fontSize:h+"px"}},"star-icon"+e))),v-Math.floor(v)>.2?(0,l.jsx)(i.Z,{sx:{color:n,fontSize:h+"px"}},"star-half-icon"):v-Math.floor(v)==0?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(o.Z,{sx:{color:n,fontSize:h+"px"}},"star-outline-icon"),[...Array(Math.floor(5-v))].map(((t,e)=>(0,l.jsx)(o.Z,{sx:{color:n,fontSize:h+"px"}},"star-outline-icon-"+e))),(0,l.jsx)("div",{children:(0,l.jsx)("div",{width:"2px"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{style:{backgroundColor:n,borderRadius:"round"==c?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,l.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*h+"px","important"),t.style.setProperty("font-family",d,"important"))},style:{textAlign:"left",fontWeight:"medium",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden",textOverflow:"ellipsis"},children:["\xa0",v,"\xa0"]})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",p,"important"),t.style.setProperty("font-size",.8*h+"px","important"),t.style.setProperty("font-family",d,"important"))},style:{textAlign:"left",fontWeight:"medium",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden",textOverflow:"ellipsis"},children:["\xa0","("+w+")"]})})]})})}},3175:function(t,e,n){"use strict";var r=n(208),i=n(51),o=n(6417);e.Z=function(t){var e,n;const s=null!==(e=t.height)&&void 0!==e?e:"100%",l=null!==(n=t.width)&&void 0!==n?n:"100%";return(0,o.jsxs)("div",{style:{width:l,height:s,overflow:"hidden"},children:[(0,o.jsx)(r.Od,{height:"100%",width:"100%",speed:.5,startColor:"#202020",endColor:"#606060"}),(0,o.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,o.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,o.jsx)(i.Z,{})})})]})}},5938:function(t,e,n){"use strict";n.d(e,{j:function(){return a}});var r=n(6040),i=n.n(r);function o(){return null!=window.Shopify||"undefined"!=typeof window.Shopify}function s(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function l(t){if(t%1>=.1){return t.toString().split(".")[0].length>=4?parseInt(t):t.toFixed(2)}return parseInt(t)}function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!o())return"70993772860"==n||"72534294803"==n?"$"+e+s(l(t)):"\u20b9"+e+s(l(t));const r=window.Shopify.currency.active,a=parseFloat(window.Shopify.currency.rate);return i()(r)+e+s(l(t*a))}},5945:function(t,e,n){"use strict";function r(t){return"undefined"==typeof t||"undefined"==t||null==t?"":t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}n.d(e,{s:function(){return r}})},2887:function(t,e,n){"use strict";var r=n(7313),i=(n(6422),n(3175)),o=n(6417);e.Z=function(t){var e,n,s;const[l,a]=(0,r.useState)(!1),u=r.useRef(0),d=(0,r.useRef)(null),c=null!==(e=t.timeUpdateCallback)&&void 0!==e?e:()=>{},f=null!==(n=t.height)&&void 0!==n?n:"100%",h=null!==(s=t.width)&&void 0!==s?s:"100%";return(0,r.useEffect)((()=>{u.current=0;const t=setInterval((()=>{u.current=u.current+.03,d.current&&c(u.current,5),u.current>=5&&(u.current=0)}),30);return()=>{clearInterval(t)}}),[t.isPlaying]),(0,o.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:h,height:f,overflow:"hidden"},children:[(0,o.jsx)("div",{style:{width:l?"100%":"0px",height:l?"100%":"0px"},children:(0,o.jsx)("img",{ref:d,src:t.url,style:{objectFit:"cover",height:f,width:h,backgroundColor:"white"},alt:"image player",onLoad:()=>{a(!0)}})}),l?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.Z,{width:"100%",height:"100%"})]})}},4892:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7313),i=n(3933),o=n(868),s=n(8984),l=n(7300),a=(n(6422),n(2887)),u=n(6417);var d=function(t){var e,n;const o=(0,r.useRef)(null),[s,l,a]=(0,i.YD)({triggerOnce:!0}),d=null!==(e=t.height)&&void 0!==e?e:"100%",c=null!==(n=t.width)&&void 0!==n?n:"100%";return(0,r.useEffect)((()=>{o.current&&(t.isPlaying?o.current.play():o.current.pause())}),[t.isPlaying,l]),(0,u.jsx)("div",{ref:s,style:{width:d,height:c,overflow:"hidden"},children:l?(0,u.jsx)("video",{ref:o,className:"whatmore-video-player",width:c,height:d,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:t.url,style:{backgroundColor:"white"}}):(0,u.jsx)(u.Fragment,{})})};var c=function(t){var e,n,c;const[f,h,p]=(0,i.YD)({triggerOnce:!0});if((0,l.WJ)(t.event))return(0,u.jsx)(a.Z,{height:t.height,width:t.width,url:t.url,isPlaying:t.isPlaying,timeUpdateCallback:t.timeUpdateCallback});const v=null!==(e=t.pauseFromPlayTimeInMs)&&void 0!==e?e:200;if((0,s.KE)())return(0,u.jsx)(d,{height:"100%",width:"100%",url:(0,o.V)(t.url),isPlaying:t.isPlaying,pauseFromPlayTimeInMs:v});const w=(0,r.useRef)(null),y=null!==(n=t.height)&&void 0!==n?n:"100%",g=null!==(c=t.width)&&void 0!==c?c:"100%";return(0,r.useEffect)((()=>{w.current&&(t.isPlaying?w.current.play():w.current.pause())}),[t.isPlaying,h]),(0,u.jsx)("div",{ref:f,style:{width:y,height:g,overflow:"hidden"},children:h?(0,u.jsx)("video",{ref:w,className:"whatmore-video-player",width:g,height:y,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,o.V)(t.url),style:{backgroundColor:"white"}}):(0,u.jsx)(u.Fragment,{})})}},868:function(t,e,n){"use strict";n.d(e,{V:function(){return l}});var r=n(9854),i=n(9543);const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net"},s={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net"},l=function(t){const e=(0,i.MO)("whatmoreShopId");if(t.startsWith("https://cdn.shopify.com"))return t;if("AWSCDN"==(0,r.zp)(e))return t;if("AZURECDN"==(0,r.zp)(e)){if(t.includes(".azureedge.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(o))if(t.includes(e))return t.replace(e,o[e]);return t}}if("BUNNYCDN"==(0,r.zp)(e)){if(t.includes(".b-cdn.net"))return t;if(t.includes(".cloudfront.net")){for(const e of Object.keys(s))if(t.includes(e))return t.replace(e,s[e]);return t}}return t}},5456:function(t,e,n){"use strict";n.d(e,{B:function(){return r}});const r=function(t,e){return!(!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},6422:function(t,e,n){"use strict";var r=n(7313),i=n(7371);const{useGlobalState:o}=(0,i.r)({muted:!1});e.Z=function(t){const[e,n]=o("muted");return(0,r.useEffect)((()=>{}),[]),[e,n]}},8866:function(t,e,n){"use strict";var r=n(7313);function i(){return[window.innerHeight,window.innerWidth]}e.Z=function(t){var[e,n]=i();const[o,s]=(0,r.useState)(["portrait",e,n]);return(0,r.useLayoutEffect)((()=>{function t(){var[t,e]=i();s(t>e?["portrait",t,e]:["landscape",t,e])}return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),screen.orientation&&screen.orientation.addEventListener("change",t),t(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),screen.orientation&&screen.orientation.removeEventListener("change",t)}}),[]),o}},8816:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var i=r(n(5045)),o=n(6417),s=(0,i.default)((0,o.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=s},417:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var i=r(n(5045)),o=n(6417),s=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=s},4885:function(t,e,n){"use strict";var r=n(5318);e.Z=void 0;var i=r(n(5045)),o=n(6417),s=(0,i.default)((0,o.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=s},6040:function(t,e,n){const r=n(500);t.exports=function(t){if("string"!==typeof t)return;const e=t.toUpperCase();return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0},t.exports.currencySymbolMap=r},500:function(t){t.exports={AED:"\u062f.\u0625",AFN:"\u060b",ALL:"L",AMD:"\u058f",ANG:"\u0192",AOA:"Kz",ARS:"$",AUD:"$",AWG:"\u0192",AZN:"\u20bc",BAM:"KM",BBD:"$",BDT:"\u09f3",BGN:"\u043b\u0432",BHD:".\u062f.\u0628",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"\u20bf",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"\xa5",CNY:"\xa5",COP:"$",COU:"COU",CRC:"\u20a1",CUC:"$",CUP:"\u20b1",CVE:"$",CZK:"K\u010d",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"\u062f\u062c",EEK:"kr",EGP:"\xa3",ERN:"Nfk",ETB:"Br",ETH:"\u039e",EUR:"\u20ac",FJD:"$",FKP:"\xa3",GBP:"\xa3",GEL:"\u20be",GGP:"\xa3",GHC:"\u20b5",GHS:"GH\u20b5",GIP:"\xa3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20aa",IMP:"\xa3",INR:"\u20b9",IQD:"\u0639.\u062f",IRR:"\ufdfc",ISK:"kr",JEP:"\xa3",JMD:"J$",JOD:"JD",JPY:"\xa5",KES:"KSh",KGS:"\u043b\u0432",KHR:"\u17db",KMF:"CF",KPW:"\u20a9",KRW:"\u20a9",KWD:"KD",KYD:"$",KZT:"\u20b8",LAK:"\u20ad",LBP:"\xa3",LKR:"\u20a8",LRD:"$",LSL:"M",LTC:"\u0141",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"\u0434\u0435\u043d",MMK:"K",MNT:"\u20ae",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"\u20a8",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"\u20a6",NIO:"C$",NOK:"kr",NPR:"\u20a8",NZD:"$",OMR:"\ufdfc",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20b1",PKR:"\u20a8",PLN:"z\u0142",PYG:"Gs",QAR:"\ufdfc",RMB:"\uffe5",RON:"lei",RSD:"\u0414\u0438\u043d.",RUB:"\u20bd",RWF:"R\u20a3",SAR:"\ufdfc",SBD:"$",SCR:"\u20a8",SDG:"\u062c.\u0633.",SEK:"kr",SGD:"S$",SHP:"\xa3",SLL:"Le",SOS:"S",SRD:"$",SSP:"\xa3",STD:"Db",STN:"Db",SVC:"$",SYP:"\xa3",SZL:"E",THB:"\u0e3f",TJS:"SM",TMT:"T",TND:"\u062f.\u062a",TOP:"T$",TRL:"\u20a4",TRY:"\u20ba",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20b4",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"\u043b\u0432",VEF:"Bs",VES:"Bs.S",VND:"\u20ab",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"\u0243",XCD:"$",XOF:"CFA",XPF:"\u20a3",XSU:"Sucre",XUA:"XUA",YER:"\ufdfc",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},123:function(){},7244:function(){},5892:function(){},4444:function(){},1811:function(){},6143:function(){},7850:function(){}}]);