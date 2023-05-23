"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[55],{51:function(e,t,n){n.d(t,{Z:function(){return i}});n(7313);var o=n(6417);var i=function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:"whatmore-loading-indicator"})})}},3175:function(e,t,n){var o=n(208),i=n(51),r=n(6417);t.Z=function(e){var t,n;const a=null!==(t=e.height)&&void 0!==t?t:"100%",s=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,r.jsxs)("div",{style:{width:s,height:a,overflow:"hidden"},children:[(0,r.jsx)(o.Od,{height:"100%",width:"100%",speed:0,startColor:"#202020",endColor:"#606060"}),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,r.jsx)(i.Z,{})})})]})}},4998:function(e,t,n){n.d(t,{D:function(){return o}});const o=async function(e,t,n,o){if("STRNV8MHJTF"!=e&&"STR6HU283UZ"!=e&&"STR9T3LLEJB"!=e&&"STRWJMIOJNX"!=e){var i=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("27358003275"==e||"63748341981"==e||"68237558034"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:i,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(i),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e||"4243849314"==e){(new theme.CartDrawer).open()}else"62602182872"==e||"57362710572"==e?(CartJS.getCart(),$(".block-cart").addClass("active")):"60492578980"==e||"12183765088"==e||"58546946211"==e||"42070737058"==e||"71321583919"==e||"68492624171"==e?(document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}))):document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}else{console.log("Executing cart refresh script..");document.getElementById("whatsmorecart").value=Math.random()}}},2887:function(e,t,n){var o=n(7313),i=(n(6422),n(3175)),r=n(6417);t.Z=function(e){var t,n,a;const[s,d]=(0,o.useState)(!1),c=o.useRef(0),l=(0,o.useRef)(null),u=null!==(t=e.timeUpdateCallback)&&void 0!==t?t:()=>{},p=null!==(n=e.height)&&void 0!==n?n:"100%",h=null!==(a=e.width)&&void 0!==a?a:"100%";return(0,o.useEffect)((()=>{c.current=0;const e=setInterval((()=>{c.current=c.current+.03,l.current&&u(c.current,5),c.current>=5&&(c.current=0)}),30);return()=>{clearInterval(e)}}),[e.isPlaying]),(0,r.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:h,height:p,overflow:"hidden"},children:[(0,r.jsx)("div",{style:{width:s?"100%":"0px",height:s?"100%":"0px"},children:(0,r.jsx)("img",{ref:l,src:e.url,style:{objectFit:"cover",height:p,width:h,backgroundColor:"white"},alt:"image player",onLoad:()=>{d(!0)}})}),s?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(i.Z,{width:"100%",height:"100%"})]})}},4892:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(7313),i=n(3933),r=n(868),a=n(8984),s=n(7300),d=(n(6422),n(2887)),c=n(6417);var l=function(e){var t,n;const r=(0,o.useRef)(null),[a,s,d]=(0,i.YD)({triggerOnce:!0}),l=null!==(t=e.height)&&void 0!==t?t:"100%",u=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,o.useEffect)((()=>{r.current&&(e.isPlaying?r.current.play():r.current.pause())}),[e.isPlaying,s]),(0,c.jsx)("div",{ref:a,style:{width:l,height:u,overflow:"hidden"},children:s?(0,c.jsx)("video",{ref:r,className:"whatmore-video-player",width:u,height:l,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:e.url,style:{backgroundColor:"white"}}):(0,c.jsx)("div",{width:u,height:l,ref:e=>{e&&e.style.setProperty("display","block","important")}})})};var u=function(e){var t,n,u;const[p,h,f]=(0,i.YD)({triggerOnce:!0});if((0,s.WJ)(e.event))return(0,c.jsx)(d.Z,{height:e.height,width:e.width,url:e.url,isPlaying:e.isPlaying,timeUpdateCallback:e.timeUpdateCallback});const v=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200;if((0,a.KE)())return(0,c.jsx)(l,{height:"100%",width:"100%",url:(0,r.V)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:v});const m=(0,o.useRef)(null),w=null!==(n=e.height)&&void 0!==n?n:"100%",g=null!==(u=e.width)&&void 0!==u?u:"100%";return(0,o.useEffect)((()=>{m.current&&(e.isPlaying?m.current.play():m.current.pause())}),[e.isPlaying,h]),(0,c.jsx)("div",{ref:p,style:{width:w,height:g,overflow:"hidden"},children:h?(0,c.jsx)("video",{ref:m,className:"whatmore-video-player",width:g,height:w,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,r.V)(e.url),style:{backgroundColor:"white"}}):(0,c.jsx)("div",{width:g,height:w,ref:e=>{e&&e.style.setProperty("display","block","important")}})})}},6055:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var o=n(7313),i=n(9854),r=n(2860),a=n(7753),s=n(5160),d=(n(4844),n(6967)),c=n(4959),l=n(4892),u=n(6805),p=n(9821);var h=function(e){const[t,n,o,i,r]=(0,p.Z)(),[s]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[d]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),c=r[u.YP]===u.$w?d/100:s/100*1.2;return[t*c,n*c,r]},f=n(9723),v=n(9461),m=n.n(v),w=n(1195),g=n(7108),b=(n(7244),n(123),n(6417));var x=function(e){const t=o.useRef(null);var[n,r,s]=h();const[d]=(0,a.j1)("whatmoreEmbedAppVideoTitle"),[p]=(0,a.j1)("whatmoreEmbedAppPositionPortrait"),[v]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[x]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[y]=(0,a.j1)("whatmoreEmbedAppPositionLandscape"),[j]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[E]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),P=(0,a.MO)("whatmoreShopId");var _=p,S=v,C=x;s[u.YP]===u.$w&&(_=y,S=j,C=E);const[k,T]=(0,o.useState)(["initial",window.pageYOffset]),[I,z]=(0,o.useState)(!1);function O(e,t){T(e),e[1]<=100?z(!1):t!=I&&z(t)}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(O([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},o=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),[k]),(0,c.O3)({ref:t,handler:()=>{O(["scrolled-up",k[1]],!0)}});const A=e.event,L=e.inVideoClick,N=e.closeClick,Z=.3*r,M=.6*r,V=.1*r,D=.1*(.5*r),R="10px";var B=!1,J=0,F=0;function H(e){B=e}return(0,b.jsx)("div",{children:I&&(0,i.lV)(P)?(0,b.jsx)("div",{style:"left"===_?{left:"1px",bottom:C+"px",position:"fixed",zIndex:2147483647}:{right:"5px",bottom:C+"px",position:"fixed",zIndex:2147483647},children:(0,b.jsxs)("div",{onClick:()=>{O(["initial",k[1]],!1)},style:{margin:"1px",width:r+"px",height:n+"px"},className:"left"===_?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,b.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:R,overflow:"hidden"},children:(0,b.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,b.jsx)(l.Z,{url:A.thumbnail_image,isPlaying:!1,event:A})})}),(0,b.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,b.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,b.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,b.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,b.jsx)(w.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:Z+"px"},style:{position:"relative",zIndex:1,left:D+"px",bottom:D+"px"},onClick:N})})}),(0,b.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(g.Z,{sx:{color:"white",fontSize:2*Z+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,b.jsx)(m(),{nodeRef:t,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,o;n=t.x,o=t.y,J=n,F=o},onDrag:(e,t)=>{H(!0)},onStop:(e,t)=>{B&&(Math.abs(t.x-J)>5||Math.abs(t.y-F)>5)?H(!1):L(A)},children:(0,b.jsx)("div",{ref:t,style:"left"===_?{left:S+"px",bottom:C+"px",position:"fixed",zIndex:2147483647}:{right:S+"px",bottom:C+"px",position:"fixed",zIndex:2147483647},children:(0,b.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:r+"px",height:n+"px"}),className:"left"===_?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,b.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:R,overflow:"hidden",position:"relative"},children:(0,b.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,b.jsx)(l.Z,{url:A.thumbnail_image,isMuted:!0,isPlaying:!0,event:A})})}),(0,b.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,b.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,b.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,b.jsx)(w.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:Z+"px"},onClick:N,style:{position:"relative",zIndex:1,left:V+"px",bottom:V+"px"}})}),(0,b.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,b.jsx)(f.Z,{sx:{color:"white",fontSize:M+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,b.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:R,borderBottomRightRadius:R,backgroundImage:d?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,b.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*Z+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",d]})})]})})]})})})})},y=n(58),j=n(8984),E=(n(7247),n(1824),n(4669)),P=n(4998),_=n(9302),S=n(2575),C=n(7300),k=n(6524);const T=(0,S.Z)({key:"whatmore-css-ppv"}),I=o.lazy((()=>Promise.all([n.e(648),n.e(576),n.e(853),n.e(267),n.e(926),n.e(745),n.e(282),n.e(204)]).then(n.bind(n,2198))));function z(e){return e.split(/[?#]/)[0]}var O=function(e){const[t,n]=(0,o.useState)(),[c,l]=(0,o.useState)(),[u]=(0,a.j1)("isInDesignMode"),[p]=(0,a.j1)("isDemoBrand"),[h]=(0,a.j1)("whatmoreEmbedAppUseVariant"),[f,v]=(0,o.useState)(-2),[m]=(0,a.j1)("whatmoreVariantId"),[w]=(0,a.j1)("whatmoreShopId");var[g]=(0,a.j1)("whatmoreProductId");const S=(0,a.MO)("isLandingSharedLink"),O=(0,a.MO)("whatmoreShareTemplateId"),A=((0,a.MO)("whatmoreShareStoryId"),(0,a.MO)("whatmoreShareEventId"));g=(0,i.iX)(w)?z(window.location.href):g;const[L,N]=(0,o.useState)((()=>"true"===h?m:g));var Z=r.Gc+"/v1/brand/"+w+"/product-events";(0,o.useEffect)((()=>{(0,d.hb)()}),[]),(0,o.useEffect)((()=>{(0,E.ll)(w)}),[]),(0,o.useEffect)((()=>{null==t||0==t.length||c||!(0,j.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,y.b5)(y.UD)}),[t]),(0,o.useEffect)((()=>{v(-1),fetch(Z.toString()+"?client_product_id="+L.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>(n(e),e))).then((e=>((0,i.yo)(w)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==z(window.location.href))return;const o={product_id:n.product_id,product_link:z(window.location.href)};fetch(r.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)})}),500)}(e,L),e))).catch((e=>{l(e.message)}))}),[L]),(0,o.useEffect)((()=>{v(-2)}),[t]),(0,o.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){if("true"===h){const e=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}("variant");e&&""!==e&&N(e)}}))}),[]),(0,o.useEffect)((()=>{null==t||0==t.length||c||S&&"template-embed"==(0,k.z)(O)&&null!=A&&t.forEach(((e,t)=>{A==e.event_id&&M(e,!0,t)}))}),[t]);const M=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,j.KE)()&&!t&&(0,y.QV)(),(0,C.B6)(e)||(0,C.WJ)(e))return u||p||(async()=>{(0,s.wh)(e),(0,E.Tc)(w,r.h7,r.dU),(0,d.H4)(e.event_id,e.products,"product_page","video_popup")})(),void v(n)};function V(){return(0,b.jsx)(b.Fragment,{})}return null==t||0==t.length||c?(0,b.jsx)("div",{}):(0,b.jsx)(_.C,{value:T,children:"no-product"===L||-1===f||0===t.length?(0,b.jsx)(V,{}):-2===f&&t.length>0?(0,b.jsx)("div",{children:(0,b.jsx)(x,{event:t[0],inVideoClick:M,closeClick:e=>{e.stopPropagation(),v(-1)}})}):(0,b.jsx)("div",{children:(0,b.jsx)(o.Suspense,{children:(0,b.jsx)(I,{events:t,index:f,onBack:function(){(0,i.n2)(w)&&(0,a.MO)("whatmoreAddedToCart")&&(0,P.D)(w,(()=>{}),100,window.location.hostname),v(-2)},template:"template-product-page"})})})})}},868:function(e,t,n){n.d(t,{V:function(){return s}});var o=n(9854),i=n(7753);const r={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.azureedge.net"},a={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net","https://d1zl4k1t5o4s75.cloudfront.net":"https://whatmore-brand-video-assets-720p.b-cdn.net"},s=function(e){const t=(0,i.MO)("whatmoreShopId");if(e.startsWith("https://cdn.shopify.com"))return e;if("AWSCDN"==(0,o.zp)(t))return e;if("AZURECDN"==(0,o.zp)(t)){if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(r))if(e.includes(t))return e.replace(t,r[t]);return e}}if("BUNNYCDN"==(0,o.zp)(t)){if(e.includes(".b-cdn.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(a))if(e.includes(t))return e.replace(t,a[t]);return e}}return e}},7300:function(e,t,n){n.d(t,{B6:function(){return o},WJ:function(){return i},yC:function(){return r}});const o=function(e){return"video"===e.event_type},i=function(e){return"image"===e.event_type},r=function(e){return"livestream"===e.event_type}},6524:function(e,t,n){n.d(t,{Q:function(){return a},z:function(){return r}});const o={ta:"template-a",ta1:"template-a-1",tb:"template-b",te:"template-embed",tsa:"template-stories-a",tsb:"template-stories-b",tfa:"template-feed-a",tca:"template-collections-a",tcb:"template-collections-b",tcc:"template-collections-c",tcd:"template-collections-d",tce:"template-collections-e"},i={"template-a":"ta","template-a-1":"ta1","template-b":"tb","template-embed":"te","template-stories-a":"tsa","template-stories-b":"tsb","template-feed-a":"tfa","template-collections-a":"tca","template-collections-b":"tcb","template-collections-c":"tcc","template-collections-d":"tcd","template-collections-e":"tce"},r=function(e){return o[e]},a=function(e){return i[e]}},6805:function(e,t,n){n.d(t,{$I:function(){return s},$w:function(){return c},AK:function(){return r},AL:function(){return a},YP:function(){return i},me:function(){return o},rE:function(){return d}});const o="device_type",i="device_mode",r="mobile",a="tablet",s="desktop",d="portrait",c="landscape"},6422:function(e,t,n){var o=n(7313),i=n(7753);t.Z=function(e){const[t,n]=(0,i.j1)("muted");return(0,o.useEffect)((()=>{}),[]),[t,n]}},8866:function(e,t,n){var o=n(7313);function i(){return[window.innerHeight,window.innerWidth]}t.Z=function(e){var[t,n]=i();const[r,a]=(0,o.useState)(["portrait",t,n]);return(0,o.useLayoutEffect)((()=>{function e(){var[e,t]=i();a(e>t?["portrait",e,t]:["landscape",e,t])}return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),screen.orientation&&screen.orientation.addEventListener("change",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),screen.orientation&&screen.orientation.removeEventListener("change",e)}}),[]),r}},9821:function(e,t,n){var o=n(6367),i=n(7753),r=n(8866),a=n(6805);t.Z=function(e){const[t,n,s]=(0,r.Z)(),[d]=(0,i.j1)("whatmoreLandscapePadding"),[c]=(0,i.j1)("whatmoreVideoTileSize"),l=(0,o.useMediaQuery)({query:"(min-width: 1025px)"}),u=(0,o.useMediaQuery)({query:"(min-width: 481px)"}),p=!("portrait"!=t||!u),h=c/100*1.3*.5,f=c/100;var v=Math.min(s,n),[m,w,g,b]=[.6*v*(16/9),.6*v,1.4,0];function x(e){return Math.round(10*e)/10}var y={DEVICE_TYPE:a.AK,DEVICE_MODE:a.rE};if(l){const e=w*h,t=m*h;[m,w,g,b]=[t,e,(s-2*d)/(1.1*e),d],y[a.me]=a.$I,y[a.YP]=a.$w}else if(p){var j=.8*w,E=.8*m;"portrait"==t?(j*=f,E*=f,[m,w,g,b]=[E,j,x(s/(1.2*j)),0],y[a.me]=a.AL,y[a.YP]=a.rE):([m,w,g,b]=[E,j,(s-2*d)/(1.1*j),d],y[a.me]=a.AL,y[a.YP]=a.$w)}else{j=w,E=m;"portrait"==t?(j*=f,E*=f,[m,w,g,b]=[E,j,x(s/(1.2*j)),0],y[a.me]=a.AK,y[a.YP]=a.rE):(j=.7*w,E=.7*m,[m,w,g,b]=[E,j,(s-2*d)/(1.1*j),d],y[a.me]=a.AK,y[a.YP]=a.$w)}return[m,w,g,b,y]}},5160:function(e,t,n){n.d(t,{$L:function(){return s},JX:function(){return a},rp:function(){return d},wh:function(){return i},wz:function(){return r}});var o=n(2860);n(7753);function i(e){console.debug("updating user view count for event.");const t={event_id:e.event_id,increase_by:1};fetch(o.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(console.debug("updating user view count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user view count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating user view count user for event : ",e)}))}function r(e,t){console.debug("updating event-product click count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product click count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product click count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product click count for event {} : ",e.event_id,t)}))}function a(e,t,n){console.debug("updating event-product add to cart count for event {} and product {}.",e.event_id,t.product_id);const i={event_id:e.event_id,product_id:t.product_id,increase_by:n};fetch(o.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>(console.debug("updating user event-product add to cart count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product add to cart count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product add to cart count for event {} : ",e.event_id,t)}))}function s(e,t){console.debug("updating event-product buy now count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product buy now count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product buy now count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product buy now count for event {} : ",e.event_id,t)}))}async function d(){let{storeId:e="",eventId:t=0,productId:n="",variantId:i="",cartToken:r="",checkoutToken:a="",quantity:s=0,price:d="",actionType:c="",trackingId:l=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u={event_id:t,product_id:n,cart_token:r,checkout_token:a,quantity:s,price:d,variant_id:i,action_type:c,tracking_id:l};console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",t,n,i);const p=await fetch(o.Gc+"/cart-metadata/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(u)}).then((e=>(console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+e.status),e.json()))).catch((e=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",t,n,i)}));return p}},4669:function(e,t,n){n.d(t,{Tc:function(){return u},ll:function(){return l}});var o=n(1824),i=n(7786),r=n(9854);n(7753);const a="Whatmore Video Shopping",s="Video View",d={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},c={homepage:"Home Page",product_page:"Product Page"};async function l(e){if(null!==(0,r.BH)(e))if((0,r.Dv)(e))i.ZP.initialize((0,r.BH)(e));else{const t=(0,r.OQ)(e);o.ZP.initialize((0,r.BH)(e),{useExistingGa:t})}}async function u(e,t,n){null!==(0,r.BH)(e)&&((0,r.Dv)(e)?(i.ZP.event({category:a,action:s,label:c[t]+":"+d[n]}),console.debug("pushed view event to GA4")):(o.ZP.event({category:a,action:s,label:c[t]+":"+d[n]}),console.debug("pushed view event to GA")))}},123:function(){},7244:function(){}}]);