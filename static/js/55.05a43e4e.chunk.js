"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[55],{4998:function(e,t,n){n.d(t,{D:function(){return o}});const o=async function(e,t,n,o){var i=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("27358003275"==e||"63748341981"==e||"68237558034"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:i,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(i),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e){(new theme.CartDrawer).open()}else"62602182872"==e||"57362710572"==e?(CartJS.getCart(),$(".block-cart").addClass("active")):"60492578980"==e?document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}})):document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}},4892:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7313),i=n(868),r=n(8984),a=(n(6422),n(6417));var d=function(e){var t,n;const i=(0,o.useRef)(null),[r,d]=(0,o.useState)(!1),s=null!==(t=e.height)&&void 0!==t?t:"100%",c=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,a.jsx)("div",{style:{width:s,height:c,overflow:"hidden"},children:(0,a.jsx)("video",{ref:i,className:"whatmore-video-player",width:c,height:s,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:e.url,style:{backgroundColor:"white"}})})};var s=function(e){var t,n,s;const c=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200;if((0,r.KE)())return(0,a.jsx)(d,{height:"100%",width:"100%",url:(0,i.V)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:c});const u=(0,o.useRef)(null),[l,p]=(0,o.useState)(!1),h=null!==(n=e.height)&&void 0!==n?n:"100%",f=null!==(s=e.width)&&void 0!==s?s:"100%";return(0,o.useEffect)((()=>{u.current&&(e.isPlaying?u.current.play():u.current.play().then((()=>{setTimeout((()=>{u.current.pause(),p(!0)}),c)})))}),[e.isPlaying,l]),(0,a.jsx)("div",{style:{width:h,height:f,overflow:"hidden"},children:(0,a.jsx)("video",{ref:u,className:"whatmore-video-player",width:f,height:h,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,i.V)(e.url),style:{backgroundColor:"white"}})})}},6055:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var o=n(7313),i=n(9854),r=n(2860),a=n(9543),d=n(5160),s=(n(4844),n(6967)),c=n(4959),u=n(4892),l=n(6805),p=n(9821);var h=function(e){const[t,n,o,i,r]=(0,p.Z)(),[d]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[s]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),c=r[l.YP]===l.$w?s/100:d/100*1.2;return[t*c,n*c,r]},f=n(9723),v=n(9461),w=n.n(v),g=n(1195),m=n(7108),x=(n(7244),n(123),n(9302)),y=n(2575),b=n(6417);const j=(0,y.Z)({key:"whatmore-css-ppv"});var E=function(e){const t=o.useRef(null);var[n,i,r]=h();const[d]=(0,a.j1)("whatmoreEmbedAppVideoTitle"),[s]=(0,a.j1)("whatmoreEmbedAppPositionPortrait"),[p]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[v]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[y]=(0,a.j1)("whatmoreEmbedAppPositionLandscape"),[E]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[_]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingLandscape");var P=s,S=p,C=v;r[l.YP]===l.$w&&(P=y,S=E,C=_);const[T,k]=(0,o.useState)(["initial",window.pageYOffset]),[z,I]=(0,o.useState)(!1);function A(e,t){k(e),e[1]<=100?I(!1):t!=z&&I(t)}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(A([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},o=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),[T]),(0,c.O3)({ref:t,handler:()=>{A(["scrolled-up",T[1]],!0)}});const O=e.event,L=e.inVideoClick,V=e.closeClick,N=.3*i,M=.6*i,Z=.1*i,H=.1*(.5*i),B="10px";var D=!1,R=0,F=0;function J(e){D=e}return(0,b.jsx)(x.C,{value:j,children:z?(0,b.jsx)("div",{style:"left"===P?{left:"1px",bottom:C+"px",position:"fixed",zIndex:2147483647}:{right:"5px",bottom:C+"px",position:"fixed",zIndex:2147483647},children:(0,b.jsxs)("div",{onClick:()=>{A(["initial",T[1]],!1)},style:{margin:"1px",width:i+"px",height:n+"px"},className:"left"===P?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,b.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:B,overflow:"hidden"},children:(0,b.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,b.jsx)(u.Z,{url:O.thumbnail_image,isPlaying:!1})})}),(0,b.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,b.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,b.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,b.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,b.jsx)(g.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:N+"px"},style:{position:"relative",zIndex:1,left:H+"px",bottom:H+"px"},onClick:V})})}),(0,b.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)(m.Z,{sx:{color:"white",fontSize:2*N+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,b.jsx)(w(),{nodeRef:t,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,o;n=t.x,o=t.y,R=n,F=o},onDrag:(e,t)=>{J(!0)},onStop:(e,t)=>{D&&(Math.abs(t.x-R)>5||Math.abs(t.y-F)>5)?J(!1):L(O)},children:(0,b.jsx)("div",{ref:t,style:"left"===P?{left:S+"px",bottom:C+"px",position:"fixed",zIndex:2147483647}:{right:S+"px",bottom:C+"px",position:"fixed",zIndex:2147483647},children:(0,b.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:i+"px",height:n+"px"}),className:"left"===P?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,b.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:B,overflow:"hidden"},children:(0,b.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,b.jsx)(u.Z,{url:O.thumbnail_image,isMuted:!0,isPlaying:!0})})}),(0,b.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,b.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,b.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,b.jsx)(g.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:N+"px"},onClick:V,style:{position:"relative",zIndex:1,left:Z+"px",bottom:Z+"px"}})}),(0,b.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,b.jsx)(f.Z,{sx:{color:"white",fontSize:M+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,b.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:B,borderBottomRightRadius:B,backgroundImage:d?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,b.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*N+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",d]})})]})})]})})})})},_=n(58),P=n(8984),S=(n(7247),n(1824),n(4669)),C=n(4998);const T=o.lazy((()=>Promise.all([n.e(648),n.e(1),n.e(853),n.e(183),n.e(926),n.e(834),n.e(134)]).then(n.bind(n,7093))));function k(e){return e.split(/[?#]/)[0]}var z=function(e){const[t,n]=(0,o.useState)(),[c,u]=(0,o.useState)(),[l]=(0,a.j1)("isInDesignMode"),[p]=(0,a.j1)("isDemoBrand"),[h]=(0,a.j1)("whatmoreEmbedAppUseVariant"),[f,v]=(0,o.useState)(0),[w]=(0,a.j1)("whatmoreVariantId"),[g]=(0,a.j1)("whatmoreShopId");var[m]=(0,a.j1)("whatmoreProductId");m=(0,i.iX)(g)?k(window.location.href):m;const[x,y]=(0,o.useState)((()=>"true"===h?w:m));var j=r.Gc+"/v1/brand/"+g+"/product-events";if((0,o.useEffect)((()=>{(0,s.hb)()}),[]),(0,o.useEffect)((()=>{(0,S.ll)(g)}),[]),(0,o.useEffect)((()=>{null==t||0==t.length||c||!(0,P.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,_.b5)(_.UD)}),[t]),(0,o.useEffect)((()=>{v(-1),fetch(j.toString()+"?client_product_id="+x.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>(n(e),e))).then((e=>((0,i.yo)(g)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==k(window.location.href))return;const o={product_id:n.product_id,product_link:k(window.location.href)};fetch(r.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)})}),500)}(e,x),e))).catch((e=>{u(e.message)}))}),[x]),(0,o.useEffect)((()=>{v(0)}),[t]),(0,o.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){"true"===h&&y(function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]==e)return o[1]}return!1}("variant"))}))}),[]),null==t||0==t.length||c)return(0,b.jsx)("div",{});function z(){return(0,b.jsx)(b.Fragment,{})}return(0,b.jsx)(b.Fragment,{children:"no-product"===x||-1===f||0===t.length?(0,b.jsx)(z,{}):0===f&&t.length>0?(0,b.jsx)("div",{children:(0,b.jsx)(E,{event:t[0],inVideoClick:e=>{if((0,P.KE)()&&(0,_.QV)(),"video"===e.event_type)return l||p||(async()=>{(0,d.wh)(e),(0,S.Tc)(g,r.h7,r.dU),(0,s.H4)(e.event_id,e.products,"product_page","video_popup")})(),void v(1)},closeClick:e=>{e.stopPropagation(),v(-1)}})}):(0,b.jsx)("div",{style:{WebkitFilter:"blur(5px) grayscale(90%)"},children:(0,b.jsx)(o.Suspense,{children:(0,b.jsx)(T,{events:t,index:0,onBack:function(){(0,i.n2)(g)&&(0,a.MO)("whatmoreAddedToCart")&&(0,C.D)(g,(()=>{}),100,window.location.hostname),v(0)},template:"template-product-page"})})})})}},868:function(e,t,n){n.d(t,{V:function(){return i}});const o={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net","https://d1qflh9ill7vje.cloudfront.net":"https://whatmore-plugin-assets.azureedge.net","https://d3o9roqe5p68r1.cloudfront.net":"https://whatmore-stage-plugin-assets.azureedge.net"},i=function(e){if(e.startsWith("https://cdn.shopify.com"))return e;if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(o))if(e.includes(t))return e.replace(t,o[t]);return e}return e}},6805:function(e,t,n){n.d(t,{$I:function(){return d},$w:function(){return c},AK:function(){return r},AL:function(){return a},YP:function(){return i},me:function(){return o},rE:function(){return s}});const o="device_type",i="device_mode",r="mobile",a="tablet",d="desktop",s="portrait",c="landscape"},6422:function(e,t,n){var o=n(7313),i=n(7371);const{useGlobalState:r}=(0,i.r)({muted:!1});t.Z=function(e){const[t,n]=r("muted");return(0,o.useEffect)((()=>{}),[]),[t,n]}},8866:function(e,t,n){var o=n(7313);function i(){return[window.innerHeight,window.innerWidth]}t.Z=function(e){var[t,n]=i();const[r,a]=(0,o.useState)(["portrait",t,n]);return(0,o.useLayoutEffect)((()=>{function e(){var[e,t]=i();a(e>t?["portrait",e,t]:["landscape",e,t])}return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),screen.orientation&&screen.orientation.addEventListener("change",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),screen.orientation&&screen.orientation.removeEventListener("change",e)}}),[]),r}},9821:function(e,t,n){var o=n(6367),i=n(9543),r=n(8866),a=n(6805);t.Z=function(e){const[t,n,d]=(0,r.Z)(),[s]=(0,i.j1)("whatmoreLandscapePadding"),[c]=(0,i.j1)("whatmoreVideoTileSize"),u=(0,o.useMediaQuery)({query:"(min-width: 1025px)"}),l=(0,o.useMediaQuery)({query:"(min-width: 481px)"}),p=!("portrait"!=t||!l),h=c/100;var f=Math.min(d,n),[v,w,g,m]=[.6*f*(16/9),.6*f,1.4,0];function x(e){return Math.round(10*e)/10}var y={DEVICE_TYPE:a.AK,DEVICE_MODE:a.rE};if(u){const e=.5*w,t=.5*v;[v,w,g,m]=[t,e,(d-2*s)/(1.1*e),s],y[a.me]=a.$I,y[a.YP]=a.$w}else if(p){var b=.8*w,j=.8*v;"portrait"==t?(b*=h,j*=h,[v,w,g,m]=[j,b,x(d/(1.2*b)),0],y[a.me]=a.AL,y[a.YP]=a.rE):([v,w,g,m]=[j,b,(d-2*s)/(1.1*b),s],y[a.me]=a.AL,y[a.YP]=a.$w)}else{b=w,j=v;"portrait"==t?(b*=h,j*=h,[v,w,g,m]=[j,b,x(d/(1.2*b)),0],y[a.me]=a.AK,y[a.YP]=a.rE):(b=.7*w,j=.7*v,[v,w,g,m]=[j,b,(d-2*s)/(1.1*b),s],y[a.me]=a.AK,y[a.YP]=a.$w)}return[v,w,g,m,y]}},5160:function(e,t,n){n.d(t,{$L:function(){return d},JX:function(){return a},rp:function(){return s},wh:function(){return i},wz:function(){return r}});var o=n(2860);n(9543);function i(e){console.debug("updating user view count for event.");const t={event_id:e.event_id,increase_by:1};fetch(o.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(console.debug("updating user view count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user view count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating user view count user for event : ",e)}))}function r(e,t){console.debug("updating event-product click count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product click count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product click count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product click count for event {} : ",e.event_id,t)}))}function a(e,t,n){console.debug("updating event-product add to cart count for event {} and product {}.",e.event_id,t.product_id);const i={event_id:e.event_id,product_id:t.product_id,increase_by:n};fetch(o.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>(console.debug("updating user event-product add to cart count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product add to cart count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product add to cart count for event {} : ",e.event_id,t)}))}function d(e,t){console.debug("updating event-product buy now count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product buy now count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product buy now count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product buy now count for event {} : ",e.event_id,t)}))}async function s(){let{storeId:e="",eventId:t=0,productId:n="",variantId:i="",cartToken:r="",checkoutToken:a="",quantity:d=0,price:s="",actionType:c="",trackingId:u=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l={event_id:t,product_id:n,cart_token:r,checkout_token:a,quantity:d,price:s,variant_id:i,action_type:c,tracking_id:u};console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",t,n,i);const p=await fetch(o.Gc+"/cart-metadata/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>(console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+e.status),e.json()))).catch((e=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",t,n,i)}));return p}},4669:function(e,t,n){n.d(t,{Tc:function(){return u},ll:function(){return c}});var o=n(1824),i=n(9854);n(9543);const r="Whatmore Video Shopping",a="Video View",d={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},s={homepage:"Home Page",product_page:"Product Page"};async function c(e){null!==(0,i.BH)(e)&&o.ZP.initialize((0,i.BH)(e),{useExistingGa:!0})}async function u(e,t,n){null!==(0,i.BH)(e)&&(o.ZP.event({category:r,action:a,label:s[t]+":"+d[n]}),console.debug("pushed view event to GA"))}},123:function(){},7244:function(){}}]);