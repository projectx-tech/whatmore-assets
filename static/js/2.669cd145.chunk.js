"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[2],{941:function(e,t,n){n.d(t,{D:function(){return o}});const o=async function(e,t,n,o){if("STRNV8MHJTF"!=e&&"STR6HU283UZ"!=e&&"STR9T3LLEJB"!=e&&"STRWJMIOJNX"!=e&&"STRUDQ36YAC"!=e&&"STR1D5ONOZX"!=e){var i=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("27358003275"==e||"63748341981"==e||"68237558034"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:i,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(i),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e||"4243849314"==e||"57708314789"==e){(new theme.CartDrawer).open()}else if("62602182872"==e||"57362710572"==e)CartJS.getCart(),$(".block-cart").addClass("active");else if("20157815"==e||"60492578980"==e||"12183765088"==e||"58546946211"==e||"42070737058"==e||"71321583919"==e||"68492624171"==e||"74541891876"==e)document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}));else if("2665447536"==e)fetch("/?section_id=cart-drawer").then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"text/html").getElementById("cart-drawer").innerHTML;$("#cart-drawer").html(t),$('[aria-controls="cart-drawer"]')[0].click(),$(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity",1)}));else if("57824805033"==e||"59504656436"==e||"58112966749"==e)fetch("/cart.json").then((e=>e.json())).then((e=>{fetch("/cart?view=item").then((e=>e.text())).then((t=>{const n=(new DOMParser).parseFromString(t,"text/html"),o=n.getElementById("CartDrawer"),i=document.getElementById("CartDrawer");o&&i&&(i.innerHTML=o.innerHTML),n.querySelector("#CartDrawer .totals__subtotal-value");const r=document.querySelector("cart-drawer");r&&r.classList.remove("is-empty");const a=document.querySelector("cart-drawer-items");a&&a.classList.remove("is-empty");const c=document.getElementById("cart-icon-bubble");if(c.querySelector(".cart-count-bubble"))c.querySelectorAll('.cart-count-bubble span[aria-hidden="true"]').forEach((t=>{t.textContent=e.item_count}));else{const t=document.createElement("div");t.className="cart-count-bubble",t.innerHTML='\n                            <span aria-hidden="true">'.concat(e.item_count,'</span>\n                            <span class="visually-hidden">').concat(e.item_count," items</span>\n                        "),c.appendChild(t)}c.click(),document.getElementById("CartDrawer-Overlay").addEventListener("click",(()=>{const e=document.querySelector("cart-drawer");e&&e.classList.remove("active"),document.body.classList.remove("overflow-hidden")}))}))}));else if("61094723750"==e)SLIDECART&&(SLIDECART_UPDATE(),SLIDECART_OPEN());else if("10272035"==e){const e=document.querySelector(".cart-drawer"),t=e.parentNode;t.classList.add("menu-opening"),t.setAttribute("open","open"),e.style.visibility="visible",e.style.transform="translate(0)"}else document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}else{console.log("Executing cart refresh script..");document.getElementById("whatsmorecart").value=Math.random()}}},5380:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(4959),i=n(7313),r=n(4892),a=n(6805),c=n(7753),s=n(9821);var d=function(e){const[t,n,o,i,r]=(0,s.Z)(),[d]=(0,c.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[l]=(0,c.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),u=r[a.YP]===a.$w?l/100:d/100*1.2;return[t*u,n*u,r]},l=n(9723),u=n(9461),p=n.n(u),h=n(1195),m=n(7108),f=(n(7244),n(123),n(9854)),v=n(4136),g=n(6417);var b=function(e){const t=i.useRef(null);var[n,s,u]=d();const{whatmoreUITheme:b}=(0,i.useContext)(v.I),[w]=(0,c.j1)("whatmoreEmbedAppVideoTitle"),[x]=(0,c.j1)("whatmoreEmbedAppPositionPortrait"),[y]=(0,c.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[j]=(0,c.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[_]=(0,c.j1)("whatmoreEmbedAppPositionLandscape"),[S]=(0,c.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[T]=(0,c.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),C=(0,c.MO)("whatmoreShopId");var P=x,E=y,I=j;u[a.YP]===a.$w&&(P=_,E=S,I=T);const[k,A]=(0,i.useState)(["initial",window.pageYOffset]),[O,z]=(0,i.useState)(!1);function L(e,t){A(e),e[1]<=100?z(!1):t!=O&&z(t)}(0,i.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(L([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},o=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)}),[k]),(0,o.O3)({ref:t,handler:()=>{L(["scrolled-up",k[1]],!0)}});const N=e.event,D=e.inVideoClick,H=e.closeClick,J=.3*s,R=.6*s,B=.1*s,Z=.1*(.5*s),M="round"==b?"10px":"0px",V=(0,f.Z$)(C);var G=!1,q=0,F=0;function $(e){G=e}return(0,g.jsx)("div",{children:O&&(0,f.lV)(C)?(0,g.jsx)("div",{style:"left"===P?{left:"1px",bottom:I+"px",position:"fixed",zIndex:V}:{right:"5px",bottom:I+"px",position:"fixed",zIndex:V},children:(0,g.jsxs)("div",{onClick:()=>{L(["initial",k[1]],!1)},style:{margin:"1px",width:s+"px",height:n+"px"},className:"left"===P?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,g.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:M,overflow:"hidden"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,g.jsx)(r.Z,{url:N.thumbnail_image,isPlaying:!1,event:N})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,g.jsx)(h.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:J+"px"},style:{position:"relative",zIndex:1,left:Z+"px",bottom:Z+"px"},onClick:H})})}),(0,g.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)(m.Z,{sx:{color:"white",fontSize:2*J+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,g.jsx)(p(),{nodeRef:t,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,o;n=t.x,o=t.y,q=n,F=o},onDrag:(e,t)=>{$(!0)},onStop:(e,t)=>{G&&(Math.abs(t.x-q)>5||Math.abs(t.y-F)>5)?$(!1):D(N)},children:(0,g.jsx)("div",{ref:t,style:"left"===P?{left:E+"px",bottom:I+"px",position:"fixed",zIndex:V}:{right:E+"px",bottom:I+"px",position:"fixed",zIndex:V},children:(0,g.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:s+"px",height:n+"px"}),className:"left"===P?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,g.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:M,overflow:"hidden",position:"relative"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,g.jsx)(r.Z,{url:N.thumbnail_image,isMuted:!0,isPlaying:!0,event:N})})}),(0,g.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,g.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,g.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,g.jsx)(h.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:J+"px"},onClick:H,style:{position:"relative",zIndex:1,left:B+"px",bottom:B+"px"}})}),(0,g.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,g.jsx)(l.Z,{sx:{color:"white",fontSize:R+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,g.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:M,borderBottomRightRadius:M,backgroundImage:w?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,g.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*J+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",w]})})]})})]})})})})}},7300:function(e,t,n){n.d(t,{B6:function(){return o},WJ:function(){return i},yC:function(){return r}});const o=function(e){return"video"===e.event_type},i=function(e){return"image"===e.event_type},r=function(e){return"livestream"===e.event_type}},5160:function(e,t,n){n.d(t,{$L:function(){return u},JX:function(){return l},Z6:function(){return c},rp:function(){return p},wh:function(){return a},wz:function(){return d},x0:function(){return s}});var o,i=n(2860);n(7753);const r=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o;function a(e){r&&console.debug("updating user view count for event.");const t={event_id:e.event_id,increase_by:1};fetch(i.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(r&&console.debug("updating user view count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating user view count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating user view count user for event : ",e)}))}function c(e,t){r&&console.debug("updating like count for event.");const n={event_id:e.event_id,increase_by:t};fetch(i.Gc+"/event/metrics/like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(r&&console.debug("updating like count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating like count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating like count user for event : ",e)}))}function s(e){r&&console.debug("updating share count for event.");const t={event_id:e.event_id,increase_by:1};fetch(i.Gc+"/event/metrics/share",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>(r&&console.debug("updating share count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating share count response : "+JSON.stringify(e))})).catch((e=>{console.error("error updating share count user for event : ",e)}))}function d(e,t){r&&console.debug("updating event-product click count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(i.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(r&&console.debug("updating user event-product click count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating user event-product click count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product click count for event {} : ",e.event_id,t)}))}function l(e,t,n){r&&console.debug("updating event-product add to cart count for event {} and product {}.",e.event_id,t.product_id);const o={event_id:e.event_id,product_id:t.product_id,increase_by:n};fetch(i.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>(r&&console.debug("updating user event-product add to cart count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating user event-product add to cart count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product add to cart count for event {} : ",e.event_id,t)}))}function u(e,t){r&&console.debug("updating event-product buy now count for event {} and product {}.",e.event_id,t.product_id);const n={event_id:e.event_id,product_id:t.product_id,increase_by:1};fetch(i.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>(r&&console.debug("updating user event-product buy now count response : HTTP "+e.status),e.json()))).then((e=>{r&&console.debug("updating user event-product buy now count response : "+JSON.stringify(e))})).catch((t=>{console.error("error updating user event-product buy now count for event {} : ",e.event_id,t)}))}async function p(){let{storeId:e="",eventId:t=0,productId:n="",variantId:o="",cartToken:a="",checkoutToken:c="",quantity:s=0,price:d="",actionType:l="",trackingId:u=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p={event_id:t,product_id:n,cart_token:a,checkout_token:c,quantity:s,price:d,variant_id:o,action_type:l,tracking_id:u};r&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",t,n,o);const h=await fetch(i.Gc+"/cart-metadata/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)}).then((e=>(r&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+e.status),e.json()))).catch((e=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",t,n,o)}));return h}},4669:function(e,t,n){n.d(t,{Tc:function(){return h},ll:function(){return p}});var o,i=n(1824),r=n(7786),a=n(9854);n(7753);const c="Whatmore Video Shopping",s=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o,d="Video View",l={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},u={homepage:"Home Page",product_page:"Product Page"};async function p(e){if((0,a.Dv)(e)&&null!==(0,a.hf)(e)&&(r.ZP.initialize((0,a.hf)(e)),s&&console.debug("Whatmore: initialized GA4")),(0,a.hv)(e)&&null!==(0,a.BH)(e)){const t=(0,a.OQ)(e);i.ZP.initialize((0,a.BH)(e),{useExistingGa:t}),s&&console.debug("Whatmore: initialized GA3")}}async function h(e,t,n){(0,a.hv)(e)&&null!==(0,a.BH)(e)&&(i.ZP.event({category:c,action:d,label:u[t]+":"+l[n]}),s&&console.debug("Whatmore: pushed view event to GA3")),(0,a.Dv)(e)&&null!==(0,a.hf)(e)&&(r.ZP.event({category:c,action:d+":"+u[t]+":"+l[n],value:1,nonInteraction:!1}),s&&console.debug("Whatmore: pushed view event to GA4"))}}}]);