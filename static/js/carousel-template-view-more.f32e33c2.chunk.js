"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[116],{3852:function(t,n,e){e.d(n,{A:function(){return p}});var i=e(10),r=e(9310),a=e(9950),o=e(932),s=e(5242),l=e(8781),c=e(8283);const d=c.i7`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`,h=c.i7`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`,m=`\n    ${d}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`,u=`\n    ${h}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`;var f=e(664),g=e(7509),x=e(4414);var p=function(t){var n,e,[c,d]=(0,o.A)();const[h]=(0,f.QN)("whatmorePrimaryFont");var p=(0,a.useContext)(g.h);const j=t.event,v=t.onClick,w=null===(n=t.isOnFocus)||void 0===n||n,C=(t.playOnUnfocus,null!==(e=t.animateOnFocus)&&void 0!==e&&e);return(0,x.jsxs)(i.az,{animation:C?w?m:u:"none",marginTop:p.tileTopMargin,marginBottom:p.tileBottomMMargin,marginLeft:p.tileLeftMargin,marginRight:p.tileRightMargin,width:d,height:c,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{v(j)},cursor:"pointer",children:[(0,x.jsx)(r._V,{width:"full",height:"full",src:j.thumbnail_image,objectFit:"cover",fallback:(0,x.jsx)(l.A,{width:d,height:c}),borderRadius:"lg"}),(0,x.jsx)(i.az,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,x.jsxs)(i.BJ,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,x.jsx)(i.az,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,x.jsx)(i.BJ,{direction:"column",justifyContent:"flex-start",children:(0,x.jsx)(i.az,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,x.jsx)(i.BJ,{direction:"row",justifyContent:"space-between",children:(0,x.jsx)(s.A,{event:j,fontSize:.05*c+"px",maxWidth:.8*d})})})})}),(0,x.jsx)(i.az,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,x.jsx)(i.BJ,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,x.jsx)(i.az,{width:"full",borderRadius:"lg",children:(0,x.jsxs)(i.BJ,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,x.jsx)(i.EY,{color:"white",fontSize:.08*d+"px",fontWeight:"normal",align:"left",children:"         "}),(0,x.jsx)(i.EY,{fontSize:.08*d+"px",fontWeight:"normal",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:j.title.substring(0,40)}),(0,x.jsx)(i.EY,{fontSize:.08*d+"px",fontWeight:"bold",align:"left",sx:{fontFamily:h+" !important",color:"white !important"},children:j.presenter_name.substring(0,15)})]})})})})]})})]})}},7144:function(t,n,e){e.r(n);var i=e(9950),r=e(3852),a=e(9769),o=e(9108),s=e(8726),l=(e(3997),e(9733),e(4365),e(2682)),c=e(4910),d=e(10),h=e(932),m=e(7300),u=e(664),f=e(5144),g=e(7509),x=e(1348),p=e(4737),j=e(2039),v=e(5620),w=e(4414);const C=(0,c.A)({key:"whatmore-css-hv"});function b(t,n){var e=[];const i=n;for(let r=0;r<t.length;r+=i){const n=t.slice(r,r+i);e.push(n)}return e}function y(t){var n;const[e,r]=(0,i.useState)(!1),[a,o]=(0,i.useState)(!1),[l]=(0,u.QN)("whatmoreSecondaryColorShade600"),[c]=(0,u.QN)("whatmoreSecondaryColorShade300"),[h]=(0,u.QN)("whatmorePrimaryFont"),m=(n=t.baseFontSize,t.onClick);return(0,w.jsxs)(d.az,{display:"flex",alignItems:"center",width:"fit-content",height:"fit-content",boxShadow:"lg",borderRadius:"sm",backgroundColor:e?c:l,animation:a?f.jd:null,padding:"6px 10px",onClick:t=>{t.stopPropagation(),o(!0),m()},onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[(0,w.jsxs)(d.EY,{fontSize:"12px",fontWeight:"normal",sx:{fontFamily:h+" !important",color:"white !important"},children:["\xa0","VIEW MORE"]}),(0,w.jsx)(s.A,{style:{color:"white",marginLeft:"2px"}})]})}function M(t){var n;const[e,a,o]=(0,h.A)();var[s,l]=(0,i.useState)(0);const c=t.events,m=t.onClick,u=null!==(n=t.seeMoreIncrement)&&void 0!==n?n:1,f=b(c,Math.floor(Math.min(o,c.length)));return(0,w.jsx)(d.ov,{children:(0,w.jsxs)(d.BJ,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:f.map(((t,n)=>n>s?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(d.BJ,{direction:"row",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:t.map(((t,n)=>(0,w.jsx)(d.az,{style:{margin:"10px"},children:(0,j.ij)(t)||(0,j.Il)(t)?(0,w.jsx)(v.A,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>{m(t)}}):(0,w.jsx)(r.A,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>{m(t)}})},"event-"+n)))},"event-stack-"+n)))}),(0,w.jsx)(w.Fragment,{children:s<f.length-1?(0,w.jsx)(d.BJ,{direction:"row",width:"100%",height:"fit-content",marginY:"10px !important",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(y,{baseFontSize:.1*a,onClick:()=>{s>=f.length-1||l((t=>t+u))}})}):(0,w.jsx)(w.Fragment,{})})]})})}function S(t){var n;const[e,a,o,s]=(0,h.A)();var[l,c]=(0,i.useState)(0);const m=t.events,u=t.onClick,f=null!==(n=t.seeMoreIncrement)&&void 0!==n?n:1,g=b(m,Math.floor(Math.min(o,m.length)));return(0,w.jsx)(d.ov,{paddingLeft:s+"px",paddingRight:s+"px",children:(0,w.jsxs)(d.BJ,{direction:"column",width:"100%",height:"fit-content",justifyContent:"center",alignContent:"center",children:[(0,w.jsx)(w.Fragment,{children:g.map(((t,n)=>n>l?(0,w.jsx)(w.Fragment,{}):(0,w.jsx)(d.BJ,{direction:"row",width:"100%",height:"fit-content",marginY:"10px",justifyContent:"center",alignContent:"center",children:t.map(((t,n)=>(0,w.jsx)(d.az,{style:{margin:"10px"},children:(0,j.ij)(t)||(0,j.Il)(t)?(0,w.jsx)(v.A,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>{u(t)}}):(0,w.jsx)(r.A,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:t,onClick:()=>{u(t)}})},"event-"+n)))},"event-stack-"+n)))}),(0,w.jsx)(w.Fragment,{children:l<g.length-1?(0,w.jsx)(d.BJ,{direction:"row",width:"100%",height:"fit-content",marginY:"10px !important",justifyContent:"center",alignContent:"center",children:(0,w.jsx)(y,{baseFontSize:.1*a,onClick:()=>{l>=g.length-1||c((t=>t+f))}})}):(0,w.jsx)(w.Fragment,{})})]})})}n.default=function(t){var n;const[e,r,s]=(0,m.A)(),[c]=(0,u.QN)("whatmoreShopId"),[h]=(0,u.QN)("whatmorePrimaryColor"),[f]=(0,u.QN)("whatmoreSecondaryColor"),[j]=(0,u.QN)("whatmoreTitleFont"),v="portrait"==e?(0,u.Xd)("whatmoreTitleFontSizePortrait"):(0,u.Xd)("whatmoreTitleFontSize"),{whatmoreRootId:b}=(0,i.useContext)(p.B),y=t.events,A=t.onClick,T=null!==(n=(0,x.sa6)(c))&&void 0!==n?n:j;function I(t){A(t)}return delete o.Ay.styles.global,(0,w.jsx)(l.C,{value:C,children:(0,w.jsx)("div",{className:"whatmore-carousel-events-view-more",children:(0,w.jsx)(a.s,{theme:o.Ay,cssVarsRoot:b,resetCSS:!1,children:(0,w.jsxs)(g.h.Provider,{value:{tileTopMargin:3,tileBottomMMargin:3,tileLeftMargin:3,tileRightMargin:3,showPlayButton:!1},children:[t.heading.trim().length>0?(0,w.jsx)(d.ov,{children:(0,w.jsx)(d.EY,{bgColor:h,bgClip:"text",fontSize:v,sx:{fontFamily:T+" !important"},align:"center",children:t.heading})}):(0,w.jsx)(w.Fragment,{}),"landscape"===e?(0,w.jsx)(S,{events:y,onClick:I,seeMoreIncrement:1}):(0,w.jsx)(M,{events:y,onClick:I,seeMoreIncrement:2})]})})})})}},5144:function(t,n,e){e.d(n,{jd:function(){return r}});var i=e(8283);const r=`\n    ${i.i7`
    0% { transform: scale(1); }
    50%, { transform: scale(0.95); }
    100% { transform: scale(1); }
`} 0.2s linear;\n`;i.i7`
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    }
`,i.i7`
    0% { 
        opacity: 1;
        transform: translateY(100%);
    }
    10%{
        transform: translateY(0%);
    }
    12%{
        transform: translateY(-5%);
    }
    20%{
        transform: translateY(0%);
    }
    95%{
        opacity: 1;
        transform: scale(1);
    }
    100%{
        opacity: 0;
    }
`},5242:function(t,n,e){var i=e(10),r=e(7239),a=e(5388),o=e(4414);n.A=function(t){var n,e=t.event,s=t.fontSize,l=null!==(n=t.maxWidth)&&void 0!==n?n:"100%",{status:c,bannerText:d,timeToStartInMins:h}=r.A.getEventStatus(e);return c.name===a.A.LIVE.name?(0,o.jsx)(i.az,{maxWidth:l,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:c.color,children:(0,o.jsx)(i.BJ,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,o.jsx)(i.EY,{fontSize:s,fontWeight:"bold",color:"white",children:d})})}):(0,o.jsx)(i.az,{maxWidth:l,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:c.color,children:(0,o.jsx)(i.BJ,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,o.jsx)(i.EY,{fontSize:s,fontWeight:"medium",children:d})})})}},5388:function(t,n){n.A={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},7239:function(t,n,e){var i=e(5388);n.A=class{static getEventStatus(t){t.time_zone="GMT+5:30";var n=t.start_time+":00",e=t.end_time,r=t.scheduled_date,a=t.status,o=t.time_zone;if(a.toUpperCase()==i.A.LIVE.name)return{status:i.A.LIVE,bannerText:" "+i.A.LIVE.name+" ",timeToStartInMins:0};if(a.toUpperCase()==i.A.UPCOMING.name){var s=new Date(r+" "+n+" "+o),l=(new Date(r+" "+e+" "+o),function(t){var n=new Date,e=(t.getTime()-n.getTime())/1e3,r=e/60,a=r/60,o=a/24;return e<=0?{status:i.A.COMPLETED,bannerText:" "+i.A.COMPLETED.name+" ",timeToStartInMins:0}:e>=1&&e<=30?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(e)+" sec ",timeToStartInMins:e/60}:r<60?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(r)+" min ",timeToStartInMins:r}:a<24?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(a)+" hr ",timeToStartInMins:60*a}:o<7?{status:i.A.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*o*24}:{status:i.A.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(s));return{status:l.status,bannerText:l.bannerText,timeToStartInMins:l.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:i.A.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}},8538:function(t,n,e){e.d(n,{v:function(){return r}});var i=e(664);function r(t,n){const e=(0,i.Xd)("whatmoreShopId");return"undefined"==typeof t||"undefined"==t||null==t?"":"6873415750"==e||"72442478904"==e||"58562281529"==e?t:"66168324332"==e&&"prod-tile"!=n?null===t||void 0===t||null===(r=t.split("- "))||void 0===r?void 0:r[0]:t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}));var r}},8726:function(t,n,e){var i=e(4994);n.A=void 0;var r=i(e(9526)),a=e(4414);n.A=(0,r.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},3997:function(){}}]);