"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[204],{499:function(t,n){n.Z={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},4897:function(t,n,e){var a=e(499);n.Z=class{static getEventStatus(t){t.time_zone="GMT+5:30";var n=t.start_time+":00",e=t.end_time,r=t.scheduled_date,s=t.status,i=t.time_zone;if(s.toUpperCase()==a.Z.LIVE.name)return{status:a.Z.LIVE,bannerText:" "+a.Z.LIVE.name+" ",timeToStartInMins:0};if(s.toUpperCase()==a.Z.UPCOMING.name){var u=new Date(r+" "+n+" "+i),o=(new Date(r+" "+e+" "+i),function(t){var n=new Date,e=(t.getTime()-n.getTime())/1e3,r=e/60,s=r/60,i=s/24;return e<=0?{status:a.Z.COMPLETED,bannerText:" "+a.Z.COMPLETED.name+" ",timeToStartInMins:0}:e>=1&&e<=30?{status:a.Z.UPCOMING,bannerText:"Starts in "+Math.round(e)+" sec ",timeToStartInMins:e/60}:r<60?{status:a.Z.UPCOMING,bannerText:"Starts in "+Math.round(r)+" min ",timeToStartInMins:r}:s<24?{status:a.Z.UPCOMING,bannerText:"Starts in "+Math.round(s)+" hr ",timeToStartInMins:60*s}:i<7?{status:a.Z.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*i*24}:{status:a.Z.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(u));return{status:o.status,bannerText:o.bannerText,timeToStartInMins:o.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:a.Z.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},3388:function(t,n,e){e.d(n,{e8:function(){return s},kT:function(){return a},kW:function(){return i},xg:function(){return r}});const a=function(t,n){return!((void 0==t.products||0==t.products.length)&&(void 0==t.cta||0==t.cta.length))},r=function(t,n){return!(void 0==t.products||0==t.products.length)},s=function(t,n){if(null!=t)return t.filter((t=>1==a(t)))},i=function(t,n){if(null!=t)return n?t[0].events:t}}}]);