"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[122],{8091:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i=n(7313),r=n(9158),o=n(9263),a=(n(9262),n(4664)),l=n(7616),d=(n(6143),n(7244),n(123),n(9302)),s=n(2575),c=n(3271),h=n(8866),u=n(9543),f=n(7129),x=n(9854),g=n(6966),m=n(9821),v=n(3933),j=n(6417);function w(t){const{ref:e,inView:n,entry:i}=(0,v.YD)({triggerOnce:!1});return(0,j.jsx)(c.Kq,{direction:"row",height:"fit-content",width:"100%",justifyContent:"center",alignItems:"center",children:t.data.map(((i,r)=>(0,j.jsx)("div",{ref:e,children:n?t.renderElement({eventData:i}):(0,j.jsx)("div",{height:t.defaultHeight,width:t.defaultWidth})},"key"+r)))})}function p(t){var e;const[n,i,r]=(0,m.Z)(),o=null!==(e=t.elementsPerRow)&&void 0!==e?e:Math.floor(Math.min(r,t.dataList.length)),a=function(t,e){var n=[];const i=e;for(let r=0;r<t.length;r+=i){const e=t.slice(r,r+i);n.push(e)}return n}(t.dataList,o);return(0,j.jsx)(c.Kq,{direction:"column",height:"100%",width:"100%",justifyContent:"flex-start",alignItems:"center",children:a.map(((e,r)=>(0,j.jsx)(w,{renderElement:t.renderElement,data:e,defaultHeight:n,defaultWidth:i},"key-"+r)))})}var C=n(7300);const y=(0,s.Z)({key:"whatmore-css-hv"});var b=function(t){var e;const[n,s,m]=(0,h.Z)(),[v]=(0,u.j1)("whatmoreShopId"),[w]=(0,u.j1)("whatmorePrimaryColor"),[b]=(0,u.j1)("whatmoreSecondaryColor"),[R]=(0,u.j1)("whatmoreTitleFont"),[k]=(0,u.j1)("whatmoreTitleFontSize"),{whatmoreRootId:F}=(0,i.useContext)(g.I),S=t.events,Z=t.onClick,O=null!==(e=(0,x.aR)(v))&&void 0!==e?e:R;function L(t){Z(t)}return delete l.ZP.styles.global,(0,j.jsx)(d.C,{value:y,children:(0,j.jsx)("div",{children:(0,j.jsx)(a.x,{theme:l.ZP,cssVarsRoot:F,resetCSS:!1,children:(0,j.jsxs)(f.V.Provider,{value:{tileTopMargin:3,tileBottomMMargin:3,tileLeftMargin:3,tileRightMargin:3,showPlayButton:!1},children:[t.heading.trim().length>0?(0,j.jsx)(c.M5,{children:(0,j.jsx)(c.xv,{bgColor:w,bgClip:"text",fontSize:k,sx:{fontFamily:O+" !important"},align:"center",children:t.heading})}):(0,j.jsx)(j.Fragment,{}),"landscape"===n?(0,j.jsx)(p,{renderElement:t=>{const e=t.eventData;return(0,j.jsx)(j.Fragment,{children:(0,C.B6)(e)||(0,C.WJ)(e)?(0,j.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{L(e)}}):(0,j.jsx)(r.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{L(e)}})})},dataList:S,elementsPerRow:2}):(0,j.jsx)(p,{renderElement:t=>{const e=t.eventData;return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(o.Z,{isOnFocus:!0,playOnUnfocus:!1,animateOnFocus:!0,event:e,onClick:()=>{L(e)}})})},dataList:S,elementsPerRow:null})]})})})})}},2634:function(t,e,n){var i=n(3271),r=n(4897),o=n(499),a=n(6417);e.Z=function(t){var e,n=t.event,l=t.fontSize,d=null!==(e=t.maxWidth)&&void 0!==e?e:"100%",{status:s,bannerText:c,timeToStartInMins:h}=r.Z.getEventStatus(n);return s.name===o.Z.LIVE.name?(0,a.jsx)(i.xu,{maxWidth:d,width:"fit-content",borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"tomato",color:s.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",paddingLeft:"2px",paddingRight:"2px",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"bold",color:"white",children:c})})}):(0,a.jsx)(i.xu,{maxWidth:d,borderRadius:"md",paddingLeft:"2px",paddingRight:"2px",backgroundColor:"white",color:s.color,children:(0,a.jsx)(i.Kq,{direction:"row",justifyContent:"flex-start",width:"fit-content",alignContent:"center",children:(0,a.jsx)(i.xv,{fontSize:l,fontWeight:"medium",children:c})})})}},5180:function(t,e,n){var i=n(3271),r=n(208),o=n(6417);e.Z=function(t){var e,n,a;const l=null!==(e=t.height)&&void 0!==e?e:"100%",d=null!==(n=t.width)&&void 0!==n?n:"100%",s=null!==(a=t.borderRadius)&&void 0!==a?a:"lg";return(0,o.jsx)(i.xu,{borderRadius:s,overflow:"hidden",children:(0,o.jsx)(r.Od,{height:l,width:d,speed:.5,startColor:"gray.400",endColor:"white"})})}},5945:function(t,e,n){function i(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}n.d(e,{s:function(){return i}})}}]);