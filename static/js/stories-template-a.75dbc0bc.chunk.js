"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[441],{3580:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var o=r(7313),n=r(8866),i=r(7753),l=(r(9111),r(123),r(9778),r(9854)),a=r(868),s=r(9363),c=r(4892),d=r(6417);var u=function(t){var e,r;const n=(0,i.MO)("whatmorePrimaryFont"),u=(0,i.MO)("whatmoreSecondaryColor"),p=(0,i.MO)("whatmoreShopId"),[h,m]=(0,o.useState)(!1),f=t.storyId,x=(0,a.V)(t.imageUrl),v=t.title,g=t.onClick,w=t.template,y=(0,l.f63)(p),b="template-stories-a"===w?"50%":"30%",j=Math.floor(t.tileSize),S=.12*j*(0,l.LM2)(p),k=null!==(e=(0,l.QaQ)(p))&&void 0!==e?e:n,_=null!==(r=(0,l.u2W)(p))&&void 0!==r?r:[u,y,u,y,u],C=(0,o.useRef)(0),F=(0,o.useRef)(null),M=(0,o.useRef)(null);return(0,o.useEffect)((()=>{M.current&&M.current.play()}),[]),(0,o.useEffect)((()=>{const t=F.current,e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const r=t.target;r.src=r.dataset.src,e.unobserve(r)}}))}),{rootMargin:"0px 100px 0px 0px",threshold:0});return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[x]),(0,d.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center",flexShrink:0,height:"fit-content",width:j*(0,l.jJ6)(p)+"px",marginLeft:"10px",marginRight:"10px",marginTop:"10px",marginBottom:"10px",cursor:"pointer"},onClick:()=>{m(!0),g(f)},className:[h?"whatmore-scale-on-tap":""].join(" "),children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"fit-content",borderRadius:b,boxShadow:"0px 2px 1px 0px "+_[0]+"50, 0px -2px 1px 0px "+_[1]+"50, 2px 0px 1px 0px "+_[2]+"50, -2px 0px 1px 0px "+_[3]+"80, 2px -2px 1px 0px "+_[4]+"80, -2px 2px 1px 0px "+_[0]+"DA, 2px 2px 1px 0px "+_[1]+"DA, -2px -2px 1px 0px "+_[2]+"DA"},children:(0,d.jsx)("div",{className:"whatmore-story-thumbnail-wrapper",style:{flexShrink:0,objectFit:"cover",height:j+"px",width:j+"px",borderRadius:b,border:"3px solid white",backgroundColor:"#343434"===u?"#d3d3d3":u,overflow:"hidden"},children:"video"==(0,s.$)(x)?(0,d.jsx)(c.Z,{height:"100%",width:"100%",url:x,isPlaying:!0,event:{event_type:"video"},borderRadius:b}):(0,d.jsx)("img",{ref:F,className:"whatmore-story-thumbnail","data-src":x.startsWith("https://cdn.shopify.com")?x.split("?")[0]+"?width=400&height=400":x,loading:"lazy",style:{objectFit:"cover",height:j+"px",width:j+"px",backgroundColor:"white"},alt:"story",onError:function(){if(C.current<3){let e=(0,a.V)(t.imageUrl);F.current.src="",F.current.src=e,C.current=C.current+1}else console.log("Failed to load image after several attempts"),F.current.src="https://d2oouab8j9eigo.cloudfront.net/background_white.png"}})})}),(0,d.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",flexShrink:0,height:"fit-content",width:"100%",marginTop:"10px"},children:(0,d.jsx)("p",{ref:t=>{t&&t.style.setProperty("font-size",S+"px","important")},style:{textAlign:"center",color:(0,l.WS3)(p),fontFamily:k,fontWeight:"normal",lineHeight:"110%",margin:0,padding:0,overflow:"hidden",textOverflow:"ellipsis",width:"auto"},children:null===v||void 0===v?void 0:v.substring(0,24)})})]})},p=r(32),h=r(9302);const m=(0,r(2575).Z)({key:"whatmore-stories-css"});var f=function(t){const[e,r,a]=(0,n.Z)(),[s]=(0,i.j1)("whatmoreStoryTileSize"),[c]=(0,i.j1)("whatmoreStoryTileSizeDesktop"),[f]=(0,i.j1)("whatmoreShopId"),[x,v]=(0,o.useState)("portrait"===e?"flex-start":"center"),g=(0,o.useRef)(null);var w=t.eventsStories;const y=t.onClick,b=t.template,[j,S]=(0,o.useState)([]);(0,o.useEffect)((()=>{requestAnimationFrame((()=>{p.IR.forEach((t=>{var e;if(!(null!==(e=t.querySelector('.whatmore-template-type[data-wh="template-stories-a"]'))&&void 0!==e?e:t.querySelector('.whatmore-template-type[data="template-stories-a"]')))return;t&&(t.style.minHeight="0px")}))}))}),[]);const k=(0,o.useMemo)((()=>w.map((t=>t.storyset_dynamic_thumbnail?Math.floor(Math.random()*(t.events.length-1)):0))),[w]);(0,o.useEffect)((()=>{S(k)}),[k]),(0,o.useEffect)((()=>{w.forEach(((t,e)=>{var r,o,n,i,l;const a=new Image,s=t.storyset_dynamic_thumbnail?null!==(r=null===(o=t.events[j[e]])||void 0===o?void 0:o.poster_image)&&void 0!==r?r:t.thumbnail_image:null!==(n=t.thumbnail_image)&&void 0!==n?n:null===t||void 0===t||null===(i=t.events)||void 0===i||null===(l=i[0])||void 0===l?void 0:l.thumbnail_image;a.src=s}))}),[w,j]);const _=t=>{if(g.current){const e="left"===t?4*-C:4*C;g.current.scrollBy({left:e,behavior:"smooth"})}};(0,o.useEffect)((()=>{requestAnimationFrame((()=>{if(g.current){const t=g.current.scrollWidth,e=g.current.offsetWidth;v(t>e?"flex-start":"center")}}))}),[x,a]);const C="landscape"===e?r*(c/100)*.3:a*(s/100)*.5;return(0,d.jsx)(h.C,{value:m,children:"landscape"==e&&!(0,l.DF0)(f)||"portrait"==e&&!(0,l.JaA)(f)?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:x,height:"fit-content",width:"100%"},className:"whatmore-story-horizontal-flex",ref:g,children:w.map(((t,e)=>{var r,o,n,i,a;const s=t.storyset_dynamic_thumbnail?null!==(r=null===(o=t.events[j[e]])||void 0===o?void 0:o.poster_image)&&void 0!==r?r:t.thumbnail_image:null!==(n=t.thumbnail_image)&&void 0!==n?n:null===t||void 0===t||null===(i=t.events)||void 0===i||null===(a=i[0])||void 0===a?void 0:a.thumbnail_image;return(0,d.jsx)(u,{storyId:t.id,tileSize:(0,l.OFP)(f)?100:C,onClick:t=>{y(e)},template:b,imageUrl:s,fallbackUrl:t.thumbnail_image,title:t.title},"whatmore-story-"+t.id)}))}),"landscape"===e&&(0,l.sMW)(f)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:()=>_("left"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",left:0},children:(0,d.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:"<"})}),(0,d.jsx)("button",{onClick:()=>_("right"),style:{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.4)",position:"absolute",top:"40%",transform:"translateY(-50%)",right:0},children:(0,d.jsx)("p",{style:{fontSize:"22px",color:"white",padding:"8px"},children:">"})})]})]})})}},9363:function(t,e,r){r.d(e,{$:function(){return l},s:function(){return i}});var o=r(9854),n=r(7753);function i(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=(0,n.MO)("whatmoreShopId");return"shopify"!=(0,o.Ipo)(r)?"STRNV8MHJTF"==r?t+"?format=webp":t:t+e}function l(t){var e;if(null!==t&&void 0!==t&&t.includes("https://w-media.b-cdn.net/process-media"))return"image";const r=null===t||void 0===t||null===(e=t.trim())||void 0===e?void 0:e.split("?")[0],o=/\.(jpeg|jpg|gif|png|svg|webp)$/i,n=/\.(mp4|mov|wmv|avi|flv|mkv)$/i;return null!==o&&void 0!==o&&o.test(r)?"image":null!==n&&void 0!==n&&n.test(r)?"video":void 0}},9111:function(){},9778:function(){}}]);