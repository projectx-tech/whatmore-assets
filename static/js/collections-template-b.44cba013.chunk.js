"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[412],{7646:function(e,t,r){r.r(t);var a=r(9950),o=r(340),l=r(5089),i=(r(3997),r(9130),r(4669),r(9733),r(4365),r(7229),r(6042),r(572)),n=r(8603),s=r(7300),c=r(5830),d=r(7509),h=r(4737),m=r(5873),p=r(2410),u=r(9611),w=r(8385),g=r(932),v=r(6641),f=r(1348),x=r(5901),y=r(6649),C=r(4414);const S=(0,n.A)({key:"whatmore-css-cv"});t.default=function(e){const t=e.events,[r]=(0,s.A)(),[n,k]=(0,a.useState)(Array(t.length).fill(0).map((()=>Math.random()))),[A,j]=(0,g.A)(),b=(0,c.Xd)("whatmoreVideoTileSize"),B=(0,c.Xd)("whatmoreVideoTileSizePortrait"),M="portrait"===r?B:b,R="portrait"==r?0:(0,c.Xd)("whatmoreLandscapePadding"),E=(0,c.Xd)("whatmoreCollectionsTilesSpacing"),{whatmoreIsCollectionsTemplate:P}=(0,a.useContext)(h.B),T=(0,c.Xd)("whatmoreShopId"),{whatmoreRootId:V}=(0,a.useContext)(h.B),X=e.onClick,[q,L,I]=(0,y.A)({triggerOnce:!1});function z(e){X(e)}delete l.Ay.styles.global;var F=[];for(let a=0,o=!1;a<t.length;)o&&a!=t.length-1&&n[a]>.2?(F.push((0,C.jsx)(u.A,{event1:t[a],event2:t[a+1],onClick:()=>{z(t[a-1])},removeBorders:!0},"collections-tile-"+a)),a+=2,o=!o):(F.push((0,C.jsx)(p.A,{mode:r,event:t[a],onClick:()=>{z(t[a-1])},removeBorders:!0,borderRadius:"0%"},"collections-tile-"+a)),a+=1,o=!o);return(0,a.useEffect)((()=>{(0,v.Fk)("Video shopping powered by Whatmore!")}),[]),(0,a.useEffect)((()=>{m.Sn.forEach((e=>{var t;if(!(null!==(t=e.querySelector('.whatmore-template-type[data-wh="template-collections-b"]')||e.querySelector('.whatmore-template-type[data-wh="template-d"]'))&&void 0!==t?t:e.querySelector('.whatmore-template-type[data="template-collections-b"]')||e.querySelector('.whatmore-template-type[data="template-d"]')))return;e&&(e.style.minHeight="0px")}))}),[]),(0,C.jsx)(i.C,{value:S,children:(0,C.jsx)("div",{className:P?"whatmore-collection-events":"whatmore-carousel-events",children:(0,C.jsx)(o.s,{theme:l.Ay,cssVarsRoot:V,resetCSS:!1,children:(0,C.jsxs)(d.h.Provider,{value:{tileTopMargin:0,tileBottomMMargin:0,tileLeftMargin:0,tileRightMargin:0,showPlayButton:!1},children:[(0,C.jsx)("div",{ref:q,style:{marginLeft:R+"px",marginRight:R+"px"},children:(0,C.jsx)(w.c,{renderElement:e=>(0,C.jsx)(C.Fragment,{children:e.eventData}),dataList:F,spacing:E,defaultHeight:A*M*.01+"px",defaultWidth:j*M*.01+"px",retainAlreadyRenderedElements:!0})}),(0,f.wQ2)(T)&&P&&!L&&-1==e.index&&(0,C.jsx)(x.A,{event:t[0],inVideoClick:z,closeClick:t=>{t.stopPropagation(),e.setScreen(-2)}})]})})})})}}}]);