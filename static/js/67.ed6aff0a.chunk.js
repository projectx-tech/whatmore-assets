"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[67],{2634:function(t,n,e){var r=e(3271),a=e(4897),i=e(499),o=e(6417);n.Z=function(t){var n,e=t.event,s=t.fontSize,d=null!==(n=t.maxWidth)&&void 0!==n?n:"100%",{status:u,bannerText:c,timeToStartInMins:l}=a.Z.getEventStatus(e);return u.name===i.Z.LIVE.name?(0,o.jsx)(r.xu,{maxWidth:d,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:u.color,children:(0,o.jsx)(r.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,o.jsx)(r.xv,{fontSize:s,fontWeight:"bold",color:"white",children:c})})}):(0,o.jsx)(r.xu,{maxWidth:d,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:u.color,children:(0,o.jsx)(r.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,o.jsx)(r.xv,{fontSize:s,fontWeight:"medium",children:c})})})}},499:function(t,n){n.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(t,n,e){var r=e(499);n.Z=class{static getEventStatus(t){t.time_zone="GMT+5:30";var n=t.start_time+":00",e=t.end_time,a=t.scheduled_date,i=t.status,o=t.time_zone;if(i.toUpperCase()==r.Z.LIVE.name)return{status:r.Z.LIVE,bannerText:" "+r.Z.LIVE.name+" ",timeToStartInMins:0};if(i.toUpperCase()==r.Z.UPCOMING.name){var s=new Date(a+" "+n+" "+o),d=(new Date(a+" "+e+" "+o),function(t){var n=new Date,e=(t.getTime()-n.getTime())/1e3,a=e/60,i=a/60,o=i/24;return e<=0?{status:r.Z.COMPLETED,bannerText:" "+r.Z.COMPLETED.name+" ",timeToStartInMins:0}:e>=1&&e<=30?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(e)+" sec ",timeToStartInMins:e/60}:a<60?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(a)+" min ",timeToStartInMins:a}:i<24?{status:r.Z.UPCOMING,bannerText:"Starts in "+Math.round(i)+" hr ",timeToStartInMins:60*i}:o<7?{status:r.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*o*24}:{status:r.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(s));return{status:d.status,bannerText:d.bannerText,timeToStartInMins:d.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:r.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},5180:function(t,n,e){var r=e(3271),a=e(208),i=e(6417);n.Z=function(t){var n,e,o;const s=null!==(n=t.height)&&void 0!==n?n:"100%",d=null!==(e=t.width)&&void 0!==e?e:"100%",u=null!==(o=t.borderRadius)&&void 0!==o?o:"lg";return(0,i.jsx)(r.xu,{borderRadius:u,overflow:"hidden",children:(0,i.jsx)(a.Od,{height:s,width:d,speed:.5,startColor:"gray.400",endColor:"white"})})}},5945:function(t,n,e){function r(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}e.d(n,{s:function(){return r}})},6143:function(){}}]);