"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[933],{6989:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var i=n(9950),r=n(3852),o=n(340),a=n(9983),s=(n(3997),n(9733),n(4365),n(572)),l=n(8603),d=n(6086),c=n(3731),h=n(7300),m=n(5830),u=n(7509),p=n(1348),f=n(4737),x=n(1422),g=n(932),v=n(6649),y=n(4414);function w(t){var e;const[n,i,r]=(0,v.A)({triggerOnce:!1}),o=null!==(e=t.defaultHeight)&&void 0!==e?e:"fit-content";return(0,y.jsx)(x.B,{ref:n,direction:"row",minHeight:o,height:o,width:"100%",justifyContent:"center",alignItems:"center",children:i?t.data.map(((e,n)=>(0,y.jsx)("div",{children:t.renderElement({eventData:e})},"key"+n))):(0,y.jsx)("div",{style:{minHeight:{rowHeight:o},minWidth:"100%"}})})}function j(t){var e;const[n,i,r]=(0,g.A)(),o=null!==(e=t.elementsPerRow)&&void 0!==e?e:Math.floor(Math.min(r,t.dataList.length)),a=function(t,e){var n=[];const i=e;for(let r=0;r<t.length;r+=i){const e=t.slice(r,r+i);n.push(e)}return n}(t.dataList,o);return(0,y.jsx)(x.B,{direction:"column",height:"100%",width:"100%",justifyContent:"flex-start",alignItems:"center",spacing:.2*n,children:a.map(((e,r)=>(0,y.jsx)(w,{renderElement:t.renderElement,data:e,defaultHeight:n,defaultWidth:i},"key-"+r)))})}var b=n(2039),C=(n(5620),n(4826),n(9879)),A=n(3590),I=n(8538),M=n(6594),T=n(8149);var S=function(t){var e,n,r,o,a,s,[l,d]=(0,g.A)();const[c,h]=(0,i.useState)(0),[u,f]=(0,i.useState)(t.event),[x]=(0,m.QN)("whatmoreShopId"),v=(0,m.QN)("whatmoreUITheme"),[w]=(0,m.QN)("whatmorePrimaryFont"),j=u.products.length,[b,C]=(0,i.useState)(),[A,S]=(0,i.useState)(!1);if(0==j)return(0,y.jsx)(y.Fragment,{});(0,i.useEffect)((()=>{const t=setInterval((()=>{h((t=>(t+1)%j))}),3e3);return()=>{clearInterval(t)}}),[]),(0,i.useEffect)((()=>{(0,p.w4b)(x)&&(0,M.fu)(u,(0,p.NCy)(x),x).then((t=>{f(t),S(!0)}));(async()=>{var t;const e=await(0,T.M)(null===u||void 0===u||null===(t=u.products)||void 0===t?void 0:t[0],(0,p.NCy)(x),x);C(e),S(!0)})()}),[]);const P=.08*d+"px",F=.075*d+"px",k=(+u.products[c].price).toFixed(),E=(+u.products[c].compare_price).toFixed();return(0,y.jsxs)("div",{style:{background:(0,p.ivR)(x),display:"flex",flexDirection:"column",padding:"10px 12px",gap:"6px",borderRadius:"round"==v?"0 0 12px 12px":"0"},children:[(0,y.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","black","important"),t.style.setProperty("font-size",P,"important"),t.style.setProperty("line-height","120%","important"),t.style.setProperty("font-family",w,"important"),t.style.setProperty("-webkit-line-clamp",1,"important"),t.style.setProperty("line-clamp",1,"important"),t.style.setProperty("-webkit-box-orient","vertical","important"),t.style.setProperty("display","-webkit-box","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("text-overflow","ellipsis","important"))},style:{textAlign:"left",fontWeight:"bolder"},children:(0,I.v)(u.products[c].title)}),(0,y.jsxs)("div",{style:{display:"flex",gap:"4px"},children:[A&&(0,y.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","black","important"),t.style.setProperty("font-size",F,"important"),t.style.setProperty("font-family",w,"important"),t.style.setProperty("overflow","hidden","important"))},style:{textAlign:"left",fontWeight:"bold"},children:(0,M.Sb)(parseFloat(null!==(e=null===b||void 0===b?void 0:b.price)&&void 0!==e?e:null===u||void 0===u||null===(n=u.products)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.price)," ",x,u.products[c].currency)}),!isNaN(E)&&E>k&&A&&(0,y.jsx)("p",{ref:t=>{t&&(t.style.setProperty("color","#808191","important"),t.style.setProperty("font-size",F,"important"),t.style.setProperty("font-family",w,"important"),t.style.setProperty("overflow","hidden","important"))},style:{fontWeight:"bold",textDecoration:"line-through"},children:(0,M.Sb)(parseFloat(null!==(o=null===b||void 0===b?void 0:b.compare_at_price)&&void 0!==o?o:null===u||void 0===u||null===(a=u.products)||void 0===a||null===(s=a[0])||void 0===s?void 0:s.compare_price)," ",x,u.products[c].currency)})]})]})},P=n(6613);function F(t){const[e,n]=(0,g.A)(),[i]=(0,m.QN)("whatmoreShowViews"),r=t.event;return(0,y.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",width:"100%",height:"100%",justifyContent:"space-between",alignItems:"center"},children:(0,y.jsx)("div",{style:{width:"100%",backgroundImage:"linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3))"},children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center"},children:"show"===i?(0,y.jsx)("div",{style:{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px"},children:(0,y.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",paddingLeft:"5px",width:"fit-content",height:"fit-content",justifyContent:"space-between",alignItems:"center"},children:(0,y.jsx)(A.A,{event:r,fontSize:.07*n+"px"})})}):(0,y.jsx)(y.Fragment,{})})})})})}var k=function(t){var e,n,r;const[o,a]=(0,g.A)();var s=(0,i.useContext)(u.h);const l=(0,m.Xd)("whatmoreUITheme"),d=(0,m.Xd)("whatmoreSecondaryColor"),c=(0,m.Xd)("whatmoreShopId"),h=t.event,f=t.onClick,x=null===(e=t.isOnFocus)||void 0===e||e,w=null!==(n=t.playOnUnfocus)&&void 0!==n&&n,j=null!==(r=t.animateOnFocus&&(0,p.n5O)(c))&&void 0!==r&&r,[b,A,I]=(0,v.A)({triggerOnce:!0});return(0,y.jsxs)("div",{ref:t=>{t&&(t.style.setProperty("margin-top",s.tileTopMargin+"px","important"),t.style.setProperty("margin-bottom",s.tileBottomMMargin+"px","important"))},style:{margin:"0 auto",width:a,height:o,borderRadius:"round"==l?"12px":"0px",borderWidth:(0,p.MRv)(c),borderColor:"white"==(0,p.Fwt)(c)?d:(0,p.Fwt)(c),overflow:"hidden",cursor:"pointer"},className:j?x?"whatmore-event-tile-scale-out-animation":"whatmore-event-tile-scale-in-animation":"none",onClick:()=>{f(h)},children:[(0,y.jsx)(C.A,{height:"100%",width:"100%",url:h.thumbnail_image,isPlaying:x||w||(0,P.At)(),event:h}),(0,y.jsxs)("div",{style:{width:a,height:o},ref:b,children:[(0,y.jsx)(F,{event:h,isOnFocus:x}),(0,y.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"200%",overflow:"hidden",width:"100%",height:"100%",overflow:"hidden",backgroundColor:"transparent"},className:"whatmore-ios-css-relative-fix",children:(0,y.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},children:[(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,y.jsx)("p",{children:"    "})}),(0,y.jsx)("div",{style:{width:"100%"},children:A&&(0,p.imx)(c)?(0,y.jsx)("div",{className:"whatmore-event-tile-component-fade-in-animation",children:(0,y.jsx)(S,{event:h})}):(0,y.jsx)("div",{height:"20px"})})]})})]})]})};const E=(0,l.A)({key:"whatmore-css-hv"});var O=function(t){var e;const[n,l,x]=(0,h.A)(),[v,w,C]=(0,g.A)(),[A]=(0,m.QN)("whatmoreShopId"),[I]=(0,m.QN)("whatmorePrimaryColor"),[M]=(0,m.QN)("whatmoreTitleFont"),T="portrait"==n?(0,m.Xd)("whatmoreTitleFontSizePortrait"):(0,m.Xd)("whatmoreTitleFontSize"),{whatmoreRootId:S}=(0,i.useContext)(f.B),P=t.events,F=t.onClick,O=null!==(e=(0,p.sa6)(A))&&void 0!==e?e:M;function N(t){F(t)}const z=parseInt(Math.floor(C));return delete a.Ay.styles.global,(0,y.jsx)(s.C,{value:E,children:(0,y.jsx)("div",{className:"whatmore-carousel-events-feed",children:(0,y.jsx)(o.s,{theme:a.Ay,cssVarsRoot:S,resetCSS:!1,children:(0,y.jsxs)(u.h.Provider,{value:{tileTopMargin:3,tileBottomMMargin:3,tileLeftMargin:3,tileRightMargin:3,showPlayButton:!1},children:[t.heading.trim().length>0?(0,y.jsx)(d.o,{paddingBottom:"28px",children:(0,y.jsx)(c.E,{bgColor:I,bgClip:"text",fontSize:T,sx:{fontFamily:O+" !important"},align:"center",children:t.heading})}):(0,y.jsx)(y.Fragment,{}),"landscape"===n?(0,y.jsx)(j,{renderElement:t=>{const e=t.eventData;return(0,y.jsx)("div",{style:{margin:"10px"},children:(0,b.ij)(e)||(0,b.Il)(e)?(0,y.jsx)(k,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{N(e)}}):(0,y.jsx)(r.A,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{N(e)}})})},dataList:P,elementsPerRow:z}):(0,y.jsx)(j,{renderElement:t=>{const e=t.eventData;return(0,y.jsx)("div",{style:{margin:"10px"},children:(0,y.jsx)(k,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{N(e)}})})},dataList:P,elementsPerRow:z})]})})})})}},3852:function(t,e,n){n.d(e,{A:function(){return y}});var i=n(3247),r=n(1422),o=n(3731),a=n(211),s=n(9950),l=n(932),d=n(5242),c=n(8781),h=n(8283);const m=h.i7`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
`,u=h.i7`
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`,p=`\n    ${m}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`,f=`\n    ${u}; \n    infinite;\n    animation-duration:0.2s; \n    animation-direction: linear ;\n    animation-timing-function: ease-in;\n    animation-fill-mode: forwards;\n`;var x=n(5830),g=n(7509),v=n(4414);var y=function(t){var e,n,[h,m]=(0,l.A)();const[u]=(0,x.QN)("whatmorePrimaryFont");var y=(0,s.useContext)(g.h);const w=t.event,j=t.onClick,b=null===(e=t.isOnFocus)||void 0===e||e,C=(t.playOnUnfocus,null!==(n=t.animateOnFocus)&&void 0!==n&&n);return(0,v.jsxs)(i.az,{animation:C?b?p:f:"none",marginTop:y.tileTopMargin,marginBottom:y.tileBottomMMargin,marginLeft:y.tileLeftMargin,marginRight:y.tileRightMargin,width:m,height:h,borderRadius:"lg",sx:{boxShadow:"0px 0px 10px 3px #B0B0B0"},overflow:"hidden",onClick:()=>{j(w)},cursor:"pointer",children:[(0,v.jsx)(a._,{width:"full",height:"full",src:w.thumbnail_image,objectFit:"cover",fallback:(0,v.jsx)(c.A,{width:m,height:h}),borderRadius:"lg"}),(0,v.jsx)(i.az,{style:{position:"relative",zIndex:1,bottom:"100%",overflow:"hidden"},width:"full",height:"full",borderRadius:"lg",overflow:"hidden",className:"whatmore-ios-css-relative-fix",children:(0,v.jsxs)(r.B,{direction:"column",height:"full",width:"full",justifyContent:"space-between",children:[(0,v.jsx)(i.az,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-t, transparent,  blackAlpha.200, blackAlpha.400, blackAlpha.600)",children:(0,v.jsx)(r.B,{direction:"column",justifyContent:"flex-start",children:(0,v.jsx)(i.az,{width:"100%",marginLeft:"5px",marginRight:"5px",marginTop:"10px",children:(0,v.jsx)(r.B,{direction:"row",justifyContent:"space-between",children:(0,v.jsx)(d.A,{event:w,fontSize:.05*h+"px",maxWidth:.8*m})})})})}),(0,v.jsx)(i.az,{w:"100%",borderRadius:"lg",bgGradient:"linear(to-b, transparent,  blackAlpha.300, blackAlpha.400, blackAlpha.500, blackAlpha.600)",children:(0,v.jsx)(r.B,{direction:"column",width:"full",height:"full",justifyContent:"flex-end",alignContent:"center",children:(0,v.jsx)(i.az,{width:"full",borderRadius:"lg",children:(0,v.jsxs)(r.B,{direction:"column",justifyContent:"space-between",alignContent:"flex-start",marginLeft:"5px",marginRight:"5px",marginBottom:"2px",children:[(0,v.jsx)(o.E,{color:"white",fontSize:.08*m+"px",fontWeight:"normal",align:"left",children:"         "}),(0,v.jsx)(o.E,{fontSize:.08*m+"px",fontWeight:"normal",align:"left",sx:{fontFamily:u+" !important",color:"white !important"},children:w.title.substring(0,40)}),(0,v.jsx)(o.E,{fontSize:.08*m+"px",fontWeight:"bold",align:"left",sx:{fontFamily:u+" !important",color:"white !important"},children:w.presenter_name.substring(0,15)})]})})})})]})})]})}},5242:function(t,e,n){var i=n(3247),r=n(1422),o=n(3731),a=n(7239),s=n(5388),l=n(4414);e.A=function(t){var e,n=t.event,d=t.fontSize,c=null!==(e=t.maxWidth)&&void 0!==e?e:"100%",{status:h,bannerText:m,timeToStartInMins:u}=a.A.getEventStatus(n);return h.name===s.A.LIVE.name?(0,l.jsx)(i.az,{maxWidth:c,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:h.color,children:(0,l.jsx)(r.B,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,l.jsx)(o.E,{fontSize:d,fontWeight:"bold",color:"white",children:m})})}):(0,l.jsx)(i.az,{maxWidth:c,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:h.color,children:(0,l.jsx)(r.B,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,l.jsx)(o.E,{fontSize:d,fontWeight:"medium",children:m})})})}},5388:function(t,e){e.A={LIVE:{name:"LIVE",color:"gray.600"},UPCOMING:{name:"UPCOMING",color:"gray.600"},DEFAULT:{name:"LIVE EVENT",color:"gray.600"},COMPLETED:{name:"ENDED",color:"gray.600"}}},7239:function(t,e,n){var i=n(5388);e.A=class{static getEventStatus(t){t.time_zone="GMT+5:30";var e=t.start_time+":00",n=t.end_time,r=t.scheduled_date,o=t.status,a=t.time_zone;if(o.toUpperCase()==i.A.LIVE.name)return{status:i.A.LIVE,bannerText:" "+i.A.LIVE.name+" ",timeToStartInMins:0};if(o.toUpperCase()==i.A.UPCOMING.name){var s=new Date(r+" "+e+" "+a),l=(new Date(r+" "+n+" "+a),function(t){var e=new Date,n=(t.getTime()-e.getTime())/1e3,r=n/60,o=r/60,a=o/24;return n<=0?{status:i.A.COMPLETED,bannerText:" "+i.A.COMPLETED.name+" ",timeToStartInMins:0}:n>=1&&n<=30?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(n)+" sec ",timeToStartInMins:n/60}:r<60?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(r)+" min ",timeToStartInMins:r}:o<24?{status:i.A.UPCOMING,bannerText:"Starts in "+Math.round(o)+" hr ",timeToStartInMins:60*o}:a<7?{status:i.A.UPCOMING,bannerText:" "+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]+" ",timeToStartInMins:60*a*24}:{status:i.A.UPCOMING,bannerText:"Upcoming",timeToStartInMins:2880}}(s));return{status:l.status,bannerText:l.bannerText,timeToStartInMins:l.timeToStartInMins}}return console.error("invalid status for event :: id : "+t.event_id+", status : "+t.status),{status:i.A.DEFAULT,bannerText:"live event",timeToStartInMins:2880}}}}}]);