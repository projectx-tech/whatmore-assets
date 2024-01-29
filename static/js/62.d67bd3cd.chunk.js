"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[62],{3867:function(t,e,n){var r=n(8816),i=n(417),a=n(4885),o=n(7753),s=n(9039),l=n(7313),c=n(6417);e.Z=function(t){var e;const{whatmoreUITheme:n}=(0,l.useContext)(s.I),[u]=(0,o.j1)("whatmoreSecondaryColor"),[p,d]=(0,o.j1)("productRatings"),f=(0,o.MO)("whatmorePrimaryFont"),y=(t.storeId,t.productId),m=(t.productLink,t.fontSize),x=null!==(e=t.fontColor)&&void 0!==e?e:"gray";if(null===p||"undefined"==typeof p||!(y in p)||p[y].avgRating>5)return(0,c.jsx)(c.Fragment,{});const v=p[y].avgRating,I=p[y].totalRatings;return(0,c.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center"},children:(0,c.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",width:"100%",height:"fit-content",justifyContent:"flex-start",alignItems:"center",gap:"0px"},children:[[...Array(Math.floor(v))].map(((t,e)=>(0,c.jsx)(r.Z,{sx:{color:u,fontSize:m+"px"}},"star-icon"+e))),v-Math.floor(v)>.2?(0,c.jsx)(i.Z,{sx:{color:u,fontSize:m+"px"}},"star-half-icon"):v-Math.floor(v)==0?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)(a.Z,{sx:{color:u,fontSize:m+"px"}},"star-outline-icon"),[...Array(Math.floor(5-v))].map(((t,e)=>(0,c.jsx)(a.Z,{sx:{color:u,fontSize:m+"px"}},"star-outline-icon-"+e))),(0,c.jsx)("div",{children:(0,c.jsx)("div",{width:"2px"})}),(0,c.jsx)("div",{children:(0,c.jsx)("div",{style:{backgroundColor:u,borderRadius:"round"==n?"2px":"0px",padding:"1px",overflow:"hidden"},children:(0,c.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color","white","important"),t.style.setProperty("font-size",.8*m+"px","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0",v,"\xa0"]})})}),(0,c.jsx)("div",{children:(0,c.jsxs)("p",{ref:t=>{t&&(t.style.setProperty("color",x,"important"),t.style.setProperty("font-size",.8*m+"px","important"),t.style.setProperty("font-family",f,"important"),t.style.setProperty("-webkit-line-clamp",2,"important"),t.style.setProperty("line-clamp",2,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"medium"},children:["\xa0","("+I+")"]})})]})})}},499:function(t,e){e.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(t,e,n){var r=n(499);e.Z=class{static getEventStatus(t){t.time_zone="GMT+5:30";var e=t.start_time+":00",n=t.end_time,i=t.scheduled_date,a=t.status,o=t.time_zone;if(a.toUpperCase()==r.Z.LIVE.name)return{status:r.Z.LIVE,bannerText:" "+r.Z.LIVE.name+" ",timeToStartInMins:0};if(a.toUpperCase()==r.Z.UPCOMING.name){var s=new Date(i+" "+e+" "+o),l=(new Date(i+" "+n+" "+o),function(t){var e=new Date,n=(t.getTime()-e.getTime())/1e3,i=n/60,a=i/60,o=a/24;return n<=0?{status:r.Z.COMPLETED,bannerText:" "+r.Z.COMPLETED.name+" ",timeToStartInMins:0}:n>=1&&n<=30?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(n)+" sec ",timeToStartInMins:n/60}:i<60?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(i)+" min ",timeToStartInMins:i}:a<24?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(a)+" hr ",timeToStartInMins:60*a}:o<7?{status:r.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*o*24}:{status:r.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(s));return{status:l.status,bannerText:l.bannerText,timeToStartInMins:l.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:r.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},9363:function(t,e,n){n.d(e,{s:function(){return a}});var r=n(9854),i=n(7753);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=(0,i.MO)("whatmoreShopId");return"shopify"!=(0,r.Ip)(n)?t:t+e}},5456:function(t,e,n){n.d(e,{B:function(){return r}});const r=function(t,e){return!(isNaN(e)||!e||("string"===typeof e||e instanceof String)&&!e.trim().length)&&!(parseInt(e)<=parseInt(t))}},7376:function(t,e,n){n.d(e,{GF:function(){return i},PB:function(){return s},Z2:function(){return a},y4:function(){return o}});var r=n(733);function i(t){let{userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s}=t;(0,r.s)({userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s})}function a(t){let{userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s}=t;(0,r.s)({userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s})}function o(t){let{userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s}=t;(0,r.s)({userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s})}function s(t){let{userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s}=t;(0,r.s)({userInteractionType:e,userInteractionMetadata:n,widgetSourceDetails:i,event:a,productList:o,ctaList:s})}},8816:function(t,e,n){var r=n(5318);e.Z=void 0;var i=r(n(5045)),a=n(6417),o=(0,i.default)((0,a.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");e.Z=o},417:function(t,e,n){var r=n(5318);e.Z=void 0;var i=r(n(5045)),a=n(6417),o=(0,i.default)((0,a.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarHalf");e.Z=o},4885:function(t,e,n){var r=n(5318);e.Z=void 0;var i=r(n(5045)),a=n(6417),o=(0,i.default)((0,a.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");e.Z=o},5892:function(){},4444:function(){},1811:function(){},7850:function(){}}]);