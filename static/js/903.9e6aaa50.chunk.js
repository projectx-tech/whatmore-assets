"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[903],{3867:function(t,e,n){var r=n(8816),o=n(417),i=n(4885),s=n(7753),a=n(8811),l=n(7313),u=n(6417);e.Z=function(t){var e;const{whatmoreUITheme:n}=(0,l.useContext)(a.I),[c]=(0,s.j1)("whatmoreSecondaryColor"),[p,f]=(0,s.j1)("productRatings"),d=(0,s.MO)("whatmorePrimaryFont"),m=(t.storeId,t.productId),y=(t.productLink,t.fontSize),v=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===p||"undefined"==typeof p||!(m in p)||p[m].avgRating>5)return(0,u.jsx)(u.Fragment,{});const x=p[m].avgRating,h=p[m].totalRatings;return(0,u.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,u.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(x))].map(((t,e)=>(0,u.jsx)(r.Z,{sx:{color:c,fontSize:y+"px"}},"star-icon"+e))),x-Math.floor(x)>.2?(0,u.jsx)(o.Z,{sx:{color:c,fontSize:y+"px"}},"star-half-icon"):x-Math.floor(x)==0?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)(i.Z,{sx:{color:c,fontSize:y+"px"}},"star-outline-icon"),[...Array(Math.floor(5-x))].map(((t,e)=>(0,u.jsx)(i.Z,{sx:{color:c,fontSize:y+"px"}},"star-outline-icon-"+e))),(0,u.jsx)("div",{children:(0,u.jsx)("div",{width:"2px"})}),(0,u.jsx)("div",{children:(0,u.jsx)("div",{style:{backgroundColor:c,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,u.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*y+"px","important"),t.style.setProperty("font-family",d,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",x,"\xa0"]})})}),(0,u.jsx)("div",{children:(0,u.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",v,"important"),t.style.setProperty("font-size",.8*y+"px","important"),t.style.setProperty("font-family",d,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+h+")"]})})]})})}},499:function(t,e){e.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(t,e,n){var r=n(499);e.Z=class{static getEventStatus(t){t.time_zone="GMT+5:30";var e=t.start_time+":00",n=t.end_time,o=t.scheduled_date,i=t.status,s=t.time_zone;if(i.toUpperCase()==r.Z.LIVE.name)return{status:r.Z.LIVE,bannerText:" "+r.Z.LIVE.name+" ",timeToStartInMins:0};if(i.toUpperCase()==r.Z.UPCOMING.name){var a=new Date(o+" "+e+" "+s),l=(new Date(o+" "+n+" "+s),function(t){var e=new Date,n=(t.getTime()-e.getTime())/1e3,o=n/60,i=o/60,s=i/24;return n<=0?{status:r.Z.COMPLETED,bannerText:" "+r.Z.COMPLETED.name+" ",timeToStartInMins:0}:n>=1&&n<=30?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(n)+" sec ",timeToStartInMins:n/60}:o<60?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(o)+" min ",timeToStartInMins:o}:i<24?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(i)+" hr ",timeToStartInMins:60*i}:s<7?{status:r.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*s*24}:{status:r.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(a));return{status:l.status,bannerText:l.bannerText,timeToStartInMins:l.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:r.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},3388:function(t,e,n){n.d(e,{OC:function(){return a},e8:function(){return i},kT:function(){return r},kW:function(){return s},xg:function(){return o}});const r=function(t,e){return!((void 0==t.products||0==t.products.length)&&(void 0==t.cta||0==t.cta.length))},o=function(t,e){return!(void 0==t.products||0==t.products.length)},i=function(t,e){if(null!=t)return t.filter((t=>1==r(t)))},s=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t)return e?t.events[0].events:t.events};const a=function(t,e){var n;if(null==t)return[];if(!("eventsets"in t))return[];const r=null!==(n=t.eventsets[e])&&void 0!==n?n:null;return r?function(t){if(null==t||0==t.length)return[];let e=[];return t.forEach((t=>{t.events.forEach((t=>{e.push(t)}))})),e}(r):[]}},9363:function(t,e,n){n.d(e,{$:function(){return s},s:function(){return i}});var r=n(9854),o=n(7753);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,o.MO)("whatmoreShopId");return"shopify"!=(0,r.Ipo)(n)?"STRNV8MHJTF"==n?t+"?format=webp":t:t+e}function s(t){if(t.includes("https://w-media.b-cdn.net/process-media"))return"image";const e=t.trim().split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp)$/i.test(e)?"image":/\.(mp4|mov|wmv|avi|flv|mkv)$/i.test(e)?"video":void 0}},5456:function(t,e,n){n.d(e,{B:function(){return r}});const r=function(t,e){return!(isNaN(e)||!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},8816:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),s=(0,o.default)((0,i.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=s},417:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),s=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=s},4885:function(t,e,n){var r=n(5318);e.Z=void 0;var o=r(n(5045)),i=n(6417),s=(0,o.default)((0,i.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=s},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);