"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[836],{3867:function(t,e,n){var r=n(8816),o=n(417),i=n(4885),l=n(7753),s=n(6417);e.Z=function(t){var e;const n=(0,l.MO)("whatmoreUITheme"),[a]=(0,l.j1)("whatmoreSecondaryColor"),[p,u]=(0,l.j1)("productRatings"),f=(0,l.MO)("whatmorePrimaryFont"),c=t.productId,d=t.fontSize,v=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===p||"undefined"==typeof p||!(c in p)||p[c].avgRating>5)return(0,s.jsx)(s.Fragment,{});const y=p[c].avgRating,m=p[c].totalRatings;return(0,s.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,s.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(y))].map(((t,e)=>(0,s.jsx)(r.Z,{sx:{color:a,fontSize:d+"px"}},"star-icon"+e))),y-Math.floor(y)>.2?(0,s.jsx)(o.Z,{sx:{color:a,fontSize:d+"px"}},"star-half-icon"):y-Math.floor(y)==0?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(i.Z,{sx:{color:a,fontSize:d+"px"}},"star-outline-icon"),[...Array(Math.floor(5-y))].map(((t,e)=>(0,s.jsx)(i.Z,{sx:{color:a,fontSize:d+"px"}},"star-outline-icon-"+e))),(0,s.jsx)("div",{children:(0,s.jsx)("div",{width:"2px"})}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{backgroundColor:a,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,s.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*d+"px","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",y,"\xa0"]})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",v,"important"),t.style.setProperty("font-size",.8*d+"px","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+m+")"]})})]})})}},3388:function(t,e,n){n.d(e,{OC:function(){return s},e8:function(){return i},kT:function(){return r},kW:function(){return l},xg:function(){return o}});const r=function(t,e){return!((void 0==t.products||0==t.products.length)&&(void 0==t.cta||0==t.cta.length))},o=function(t,e){return!(void 0==t.products||0==t.products.length)},i=function(t,e){if(null!=t)return t.filter((t=>1==r(t)))},l=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t)return e?t.events[0].events:t.events};const s=function(t,e){var n;if(null==t)return[];if(!("eventsets"in t))return[];const r=null!==(n=t.eventsets[e])&&void 0!==n?n:null;return r?function(t){if(null==t||0==t.length)return[];let e=[];return t.forEach((t=>{t.events.forEach((t=>{e.push(t)}))})),e}(r):[]}},9363:function(t,e,n){n.d(e,{$:function(){return l},s:function(){return i}});var r=n(9854),o=n(7753);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,r.Ipo)(n)?"STRNV8MHJTF"==n?t+"?format=webp":t:t+e}function l(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const n=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],r=/\.(jpeg|jpg|gif|png|svg|webp)$/i,o=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==r&&void 0!==r&&r.test(n)?"image":null!==o&&void 0!==o&&o.test(n)?"video":void 0}},5456:function(t,e,n){n.d(e,{B:function(){return r}});const r=function(t,e){return!(isNaN(e)||!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},8816:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),l=(0,o.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=l},417:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),l=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=l},4885:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),l=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=l},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);