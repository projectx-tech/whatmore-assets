"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[55],{51:function(e,t,n){n.d(t,{Z:function(){return i}});n(7313);var o=n(6417);var i=function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("span",{className:"whatmore-loading-indicator"})})}},3175:function(e,t,n){var o=n(208),i=n(51),r=n(6417);t.Z=function(e){var t,n;const a=null!==(t=e.height)&&void 0!==t?t:"100%",d=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,r.jsxs)("div",{style:{width:d,height:a,overflow:"hidden"},children:[(0,r.jsx)(o.Od,{height:"100%",width:"100%",speed:.5,startColor:"#202020",endColor:"#606060"}),(0,r.jsx)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"center",alignContent:"center",width:"100%",height:"100%",position:"relative",zIndex:1,bottom:"100%",className:"whatmore-ios-css-relative-fix"},children:(0,r.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",width:"100%",height:"fit-content"},children:(0,r.jsx)(i.Z,{})})})]})}},4998:function(e,t,n){n.d(t,{D:function(){return o}});const o=async function(e,t,n,o){var i=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("27358003275"==e||"63748341981"==e||"68237558034"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:i,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(i),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e){(new theme.CartDrawer).open()}else"62602182872"==e||"57362710572"==e?(CartJS.getCart(),$(".block-cart").addClass("active")):"60492578980"==e||"12183765088"==e||"58546946211"==e||"42070737058"==e?(document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}))):document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}},2887:function(e,t,n){var o=n(7313),i=(n(6422),n(3175)),r=n(6417);t.Z=function(e){var t,n,a;const[d,s]=(0,o.useState)(!1),c=o.useRef(0),u=(0,o.useRef)(null),l=null!==(t=e.timeUpdateCallback)&&void 0!==t?t:()=>{},p=null!==(n=e.height)&&void 0!==n?n:"100%",h=null!==(a=e.width)&&void 0!==a?a:"100%";return(0,o.useEffect)((()=>{c.current=0;const e=setInterval((()=>{c.current=c.current+.03,u.current&&l(c.current,5),c.current>=5&&(c.current=0)}),30);return()=>{clearInterval(e)}}),[e.isPlaying]),(0,r.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",width:h,height:p,overflow:"hidden"},children:[(0,r.jsx)("div",{style:{width:d?"100%":"0px",height:d?"100%":"0px"},children:(0,r.jsx)("img",{ref:u,src:e.url,style:{objectFit:"cover",height:p,width:h,backgroundColor:"white"},alt:"image player",onLoad:()=>{s(!0)}})}),d?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(i.Z,{width:"100%",height:"100%"})]})}},4892:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(7313),i=n(868),r=n(8984),a=n(7300),d=(n(6422),n(2887)),s=n(6417);var c=function(e){var t,n;const i=(0,o.useRef)(null),[r,a]=(0,o.useState)(!1),d=null!==(t=e.height)&&void 0!==t?t:"100%",c=null!==(n=e.width)&&void 0!==n?n:"100%";return(0,s.jsx)("div",{style:{width:d,height:c,overflow:"hidden"},children:(0,s.jsx)("video",{ref:i,className:"whatmore-video-player",width:c,height:d,preload:"auto",loop:!0,playsInline:!0,muted:!0,autoPlay:!0,src:e.url,style:{backgroundColor:"white"}})})};var u=function(e){var t,n,u;if((0,a.WJ)(e.event))return(0,s.jsx)(d.Z,{height:e.height,width:e.width,url:e.url,isPlaying:e.isPlaying,timeUpdateCallback:e.timeUpdateCallback});const l=null!==(t=e.pauseFromPlayTimeInMs)&&void 0!==t?t:200;if((0,r.KE)())return(0,s.jsx)(c,{height:"100%",width:"100%",url:(0,i.V)(e.url),isPlaying:e.isPlaying,pauseFromPlayTimeInMs:l});const p=(0,o.useRef)(null),[h,f]=(0,o.useState)(!1),v=null!==(n=e.height)&&void 0!==n?n:"100%",w=null!==(u=e.width)&&void 0!==u?u:"100%";return(0,o.useEffect)((()=>{p.current&&(e.isPlaying?p.current.play():p.current.play().then((()=>{setTimeout((()=>{p.current.pause(),f(!0)}),l)})))}),[e.isPlaying,h]),(0,s.jsx)("div",{style:{width:v,height:w,overflow:"hidden"},children:(0,s.jsx)("video",{ref:p,className:"whatmore-video-player",width:w,height:v,preload:"auto",loop:!0,playsInline:!0,muted:!0,src:(0,i.V)(e.url),style:{backgroundColor:"white"}})})}},6055:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var o=n(7313),i=n(9854),r=n(2860),a=n(9543),d=n(5160),s=(n(4844),n(6967)),c=n(4959),u=n(4892),l=n(6805),p=n(9821);var h=function(e){const[t,n,o,i,r]=(0,p.Z)(),[d]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[s]=(0,a.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),c=r[l.YP]===l.$w?s/100:d/100*1.2;return[t*c,n*c,r]},f=n(9723),v=n(9461),w=n.n(v),m=n(1195),g=n(7108),x=(n(7244),n(123),n(6417));var y=function(e){const t=o.useRef(null);var[n,i,r]=h();const[d]=(0,a.j1)("whatmoreEmbedAppVideoTitle"),[s]=(0,a.j1)("whatmoreEmbedAppPositionPortrait"),[p]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[v]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[y]=(0,a.j1)("whatmoreEmbedAppPositionLandscape"),[b]=(0,a.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[j]=(0,a.j1)("whatmoreEmbedAppVerticalPaddingLandscape");var E=s,_=p,P=v;r[l.YP]===l.$w&&(E=y,_=b,P=j);const[C,S]=(0,o.useState)(["initial",window.pageYOffset]),[k,T]=(0,o.useState)(!1);function I(e,t){S(e),e[1]<=100?T(!1):t!=k&&T(t)}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(I([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},o=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),[C]),(0,c.O3)({ref:t,handler:()=>{I(["scrolled-up",C[1]],!0)}});const z=e.event,A=e.inVideoClick,O=e.closeClick,N=.3*i,L=.6*i,V=.1*i,Z=.1*(.5*i),B="10px";var D=!1,F=0,M=0;function R(e){D=e}return(0,x.jsx)("div",{children:k?(0,x.jsx)("div",{style:"left"===E?{left:"1px",bottom:P+"px",position:"fixed",zIndex:2147483647}:{right:"5px",bottom:P+"px",position:"fixed",zIndex:2147483647},children:(0,x.jsxs)("div",{onClick:()=>{I(["initial",C[1]],!1)},style:{margin:"1px",width:i+"px",height:n+"px"},className:"left"===E?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,x.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:B,overflow:"hidden"},children:(0,x.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,x.jsx)(u.Z,{url:z.thumbnail_image,isPlaying:!1,event:z})})}),(0,x.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,x.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,x.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,x.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,x.jsx)(m.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:N+"px"},style:{position:"relative",zIndex:1,left:Z+"px",bottom:Z+"px"},onClick:O})})}),(0,x.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,x.jsx)(g.Z,{sx:{color:"white",fontSize:2*N+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,x.jsx)(w(),{nodeRef:t,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,o;n=t.x,o=t.y,F=n,M=o},onDrag:(e,t)=>{R(!0)},onStop:(e,t)=>{D&&(Math.abs(t.x-F)>5||Math.abs(t.y-M)>5)?R(!1):A(z)},children:(0,x.jsx)("div",{ref:t,style:"left"===E?{left:_+"px",bottom:P+"px",position:"fixed",zIndex:2147483647}:{right:_+"px",bottom:P+"px",position:"fixed",zIndex:2147483647},children:(0,x.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:i+"px",height:n+"px"}),className:"left"===E?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,x.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:B,overflow:"hidden"},children:(0,x.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,x.jsx)(u.Z,{url:z.thumbnail_image,isMuted:!0,isPlaying:!0,event:z})})}),(0,x.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,x.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,x.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,x.jsx)(m.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:N+"px"},onClick:O,style:{position:"relative",zIndex:1,left:V+"px",bottom:V+"px"}})}),(0,x.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,x.jsx)(f.Z,{sx:{color:"white",fontSize:L+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,x.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:B,borderBottomRightRadius:B,backgroundImage:d?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,x.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*N+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",d]})})]})})]})})})})},b=n(58),j=n(8984),E=(n(7247),n(1824),n(4669)),_=n(4998),P=n(9302),C=n(2575),S=n(7300);const k=(0,C.Z)({key:"whatmore-css-ppv"}),T=o.lazy((()=>Promise.all([n.e(648),n.e(546),n.e(853),n.e(784),n.e(926),n.e(810),n.e(343)]).then(n.bind(n,4176))));function I(e){return e.split(/[?#]/)[0]}var z=function(e){const[t,n]=(0,o.useState)(),[c,u]=(0,o.useState)(),[l]=(0,a.j1)("isInDesignMode"),[p]=(0,a.j1)("isDemoBrand"),[h]=(0,a.j1)("whatmoreEmbedAppUseVariant"),[f,v]=(0,o.useState)(0),[w]=(0,a.j1)("whatmoreVariantId"),[m]=(0,a.j1)("whatmoreShopId");var[g]=(0,a.j1)("whatmoreProductId");g=(0,i.iX)(m)?I(window.location.href):g;const[C,z]=(0,o.useState)((()=>"true"===h?w:g));var A=r.Gc+"/v1/brand/"+m+"/product-events";if((0,o.useEffect)((()=>{(0,s.hb)()}),[]),(0,o.useEffect)((()=>{(0,E.ll)(m)}),[]),(0,o.useEffect)((()=>{null==t||0==t.length||c||!(0,j.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,b.b5)(b.UD)}),[t]),(0,o.useEffect)((()=>{v(-1),fetch(A.toString()+"?client_product_id="+C.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>(n(e),e))).then((e=>((0,i.yo)(m)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==I(window.location.href))return;const o={product_id:n.product_id,product_link:I(window.location.href)};fetch(r.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)})}),500)}(e,C),e))).catch((e=>{u(e.message)}))}),[C]),(0,o.useEffect)((()=>{v(0)}),[t]),(0,o.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){}))}),[]),null==t||0==t.length||c)return(0,x.jsx)("div",{});function O(){return(0,x.jsx)(x.Fragment,{})}return(0,x.jsx)(P.C,{value:k,children:"no-product"===C||-1===f||0===t.length?(0,x.jsx)(O,{}):0===f&&t.length>0?(0,x.jsx)("div",{children:(0,x.jsx)(y,{event:t[0],inVideoClick:e=>{if((0,j.KE)()&&(0,b.QV)(),(0,S.B6)(e)||(0,S.WJ)(e))return l||p||(async()=>{(0,d.wh)(e),(0,E.Tc)(m,r.h7,r.dU),(0,s.H4)(e.event_id,e.products,"product_page","video_popup")})(),void v(1)},closeClick:e=>{e.stopPropagation(),v(-1)}})}):(0,x.jsx)("div",{children:(0,x.jsx)(o.Suspense,{children:(0,x.jsx)(T,{events:t,index:0,onBack:function(){(0,i.n2)(m)&&(0,a.MO)("whatmoreAddedToCart")&&(0,_.D)(m,(()=>{}),100,window.location.hostname),v(0)},template:"template-product-page"})})})})}},868:function(e,t,n){n.d(t,{V:function(){return d}});var o=n(9854),i=n(9543);const r={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.azureedge.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.azureedge.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.azureedge.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets.azureedge.net"},a={"https://d3syezql093hs1.cloudfront.net":"https://whatmore-brand-video-assets.b-cdn.net","https://d2r0bijhs9mx1s.cloudfront.net":"https://whatmore-brand-thumbnail-video-assets.b-cdn.net","https://d2oouab8j9eigo.cloudfront.net":"https://whatmore-brand-story-assets.b-cdn.net","https://d28nus7q7qajdn.cloudfront.net":"https://whatmore-video-assets-old.b-cdn.net"},d=function(e){const t=(0,i.MO)("whatmoreShopId");if(e.startsWith("https://cdn.shopify.com"))return e;if("AWSCDN"==(0,o.zp)(t))return e;if("AZURECDN"==(0,o.zp)(t)){if(e.includes(".azureedge.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(r))if(e.includes(t))return e.replace(t,r[t]);return e}}if("BUNNYCDN"==(0,o.zp)(t)){if(e.includes(".b-cdn.net"))return e;if(e.includes(".cloudfront.net")){for(const t of Object.keys(a))if(e.includes(t))return e.replace(t,a[t]);return e}}return e}},7300:function(e,t,n){n.d(t,{B6:function(){return o},WJ:function(){return i},yC:function(){return r}});const o=function(e){return"video"===e.event_type},i=function(e){return"image"===e.event_type},r=function(e){return"livestream"===e.event_type}},6805:function(e,t,n){n.d(t,{$I:function(){return d},$w:function(){return c},AK:function(){return r},AL:function(){return a},YP:function(){return i},me:function(){return o},rE:function(){return s}});const o="device_type",i="device_mode",r="mobile",a="tablet",d="desktop",s="portrait",c="landscape"},6422:function(e,t,n){var o=n(7313),i=n(7371);const{useGlobalState:r}=(0,i.r)({muted:!1});t.Z=function(e){const[t,n]=r("muted");return(0,o.useEffect)((()=>{}),[]),[t,n]}},8866:function(e,t,n){var o=n(7313);function i(){return[window.innerHeight,window.innerWidth]}t.Z=function(e){var[t,n]=i();const[r,a]=(0,o.useState)(["portrait",t,n]);return(0,o.useLayoutEffect)((()=>{function e(){var[e,t]=i();a(e>t?["portrait",e,t]:["landscape",e,t])}return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),screen.orientation&&screen.orientation.addEventListener("change",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),screen.orientation&&screen.orientation.removeEventListener("change",e)}}),[]),r}},9821:function(e,t,n){var o=n(6367),i=n(9543),r=n(8866),a=n(6805);t.Z=function(e){const[t,n,d]=(0,r.Z)(),[s]=(0,i.j1)("whatmoreLandscapePadding"),[c]=(0,i.j1)("whatmoreVideoTileSize"),u=(0,o.useMediaQuery)({query:"(min-width: 1025px)"}),l=(0,o.useMediaQuery)({query:"(min-width: 481px)"}),p=!("portrait"!=t||!l),h=c/100;var f=Math.min(d,n),[v,w,m,g]=[.6*f*(16/9),.6*f,1.4,0];function x(e){return Math.round(10*e)/10}var y={DEVICE_TYPE:a.AK,DEVICE_MODE:a.rE};if(u){const e=.5*w,t=.5*v;[v,w,m,g]=[t,e,(d-2*s)/(1.1*e),s],y[a.me]=a.$I,y[a.YP]=a.$w}else if(p){var b=.8*w,j=.8*v;"portrait"==t?(b*=h,j*=h,[v,w,m,g]=[j,b,x(d/(1.2*b)),0],y[a.me]=a.AL,y[a.YP]=a.rE):([v,w,m,g]=[j,b,(d-2*s)/(1.1*b),s],y[a.me]=a.AL,y[a.YP]=a.$w)}else{b=w,j=v;"portrait"==t?(b*=h,j*=h,[v,w,m,g]=[j,b,x(d/(1.2*b)),0],y[a.me]=a.AK,y[a.YP]=a.rE):(b=.7*w,j=.7*v,[v,w,m,g]=[j,b,(d-2*s)/(1.1*b),s],y[a.me]=a.AK,y[a.YP]=a.$w)}return[v,w,m,g,y]}},5160:function(e,t,n){n.d(t,{$L:function(){return d},JX:function(){return a},rp:function(){return s},wh:function(){return i},wz:function(){return r}});var o=n(2860);n(9543);function i(e){console.debug("updating user view count for event.");const t={event_id:e.event_id,increase_by:1};fetch(o.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(console.debug("updating user view count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user view count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating user view count user for event : ",e)}))}function r(e,t){console.debug("updating event-product click count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product click count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product click count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product click count for event {} : ",e.event_id,t)}))}function a(e,t,n){console.debug("updating event-product add to cart count for event {} and product {}.",e.event_id,t.product_id);const i={event_id:e.event_id,product_id:t.product_id,increase_by:n};fetch(o.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>(console.debug("updating user event-product add to cart count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product add to cart count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product add to cart count for event {} : ",e.event_id,t)}))}function d(e,t){console.debug("updating event-product buy now count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(o.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(console.debug("updating user event-product buy now count response : HTTP "+e.status),e.json()))).then((e=>{console.debug("updating user event-product buy now count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product buy now count for event {} : ",e.event_id,t)}))}async function s(){let{storeId:e="",eventId:t=0,productId:n="",variantId:i="",cartToken:r="",checkoutToken:a="",quantity:d=0,price:s="",actionType:c="",trackingId:u=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l={event_id:t,product_id:n,cart_token:r,checkout_token:a,quantity:d,price:s,variant_id:i,action_type:c,tracking_id:u};console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",t,n,i);const p=await fetch(o.Gc+"/cart-metadata/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>(console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+e.status),e.json()))).catch((e=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",t,n,i)}));return p}},4669:function(e,t,n){n.d(t,{Tc:function(){return u},ll:function(){return c}});var o=n(1824),i=n(9854);n(9543);const r="Whatmore Video Shopping",a="Video View",d={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},s={homepage:"Home Page",product_page:"Product Page"};async function c(e){null!==(0,i.BH)(e)&&o.ZP.initialize((0,i.BH)(e),{useExistingGa:!0})}async function u(e,t,n){null!==(0,i.BH)(e)&&(o.ZP.event({category:r,action:a,label:s[t]+":"+d[n]}),console.debug("pushed view event to GA"))}},123:function(){},7244:function(){}}]);