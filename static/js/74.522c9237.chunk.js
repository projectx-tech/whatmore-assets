"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[74],{941:function(e,t,n){n.d(t,{D:function(){return o}});const i=function(){fetch("/cart.json").then((e=>e.json())).then((e=>{fetch("/cart?view=item").then((e=>e.text())).then((t=>{const n=(new DOMParser).parseFromString(t,"text/html"),i=n.getElementById("CartDrawer"),o=document.getElementById("CartDrawer");i&&o&&(o.innerHTML=i.innerHTML);n.querySelector("#CartDrawer .totals__subtotal-value");const r=document.querySelector("cart-drawer");r&&r.classList.remove("is-empty");const a=document.querySelector("cart-drawer-items");a&&a.classList.remove("is-empty");const s=document.getElementById("cart-icon-bubble");if(s.querySelector(".cart-count-bubble")){s.querySelectorAll('.cart-count-bubble span[aria-hidden="true"]').forEach((t=>{t.textContent=e.item_count}))}else{const t=document.createElement("div");t.className="cart-count-bubble",t.innerHTML='\n                            <span aria-hidden="true">'.concat(e.item_count,'</span>\n                            <span class="visually-hidden">').concat(e.item_count," items</span>\n                        "),s.appendChild(t)}s.click();document.getElementById("CartDrawer-Overlay").addEventListener("click",(()=>{const e=document.querySelector("cart-drawer");e&&e.classList.remove("active"),document.body.classList.remove("overflow-hidden")}))}))}))},o=async function(e,t,n,o){if("STRNV8MHJTF"!=e&&"STR6HU283UZ"!=e&&"STR9T3LLEJB"!=e&&"STRWJMIOJNX"!=e&&"STRUDQ36YAC"!=e&&"STR1D5ONOZX"!=e){var r=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((e=>e.json()));if("57939755089"==e||"27358003275"==e||"63748341981"==e||"68237558034"==e||"63046287536"==e)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:r,openMiniCart:!0}}));else if("19506115"==e)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==e)refreshCart(r),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==e||"4243849314"==e||"57708314789"==e){(new theme.CartDrawer).open()}else if("62602182872"==e||"57362710572"==e)CartJS.getCart(),$(".block-cart").addClass("active");else if("83096174866"==e||"63791857821"==e||"70963003672"==e||"20157815"==e||"60492578980"==e||"12183765088"==e||"58546946211"==e||"42070737058"==e||"71321583919"==e||"68492624171"==e||"74541891876"==e||"21187677"==e||"74021110038"==e)document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}));else if("2665447536"==e)fetch("/?section_id=cart-drawer").then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"text/html").getElementById("cart-drawer").innerHTML;$("#cart-drawer").html(t),$('[aria-controls="cart-drawer"]')[0].click(),$(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity",1)}));else if("57824805033"==e||"59504656436"==e||"58112966749"==e)i();else if("80856187185"==e||"71256211737"==e)fetch("/cart?section_id=mini-cart").then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"text/html").querySelector(".mini-cart__inner").innerHTML;console.log(t,"sq"),$(".mini-cart__inner").html(t).addClass("active__drawer")})).catch((e=>{console.error(e)})),i();else if("61094723750"==e)SLIDECART&&(SLIDECART_UPDATE(),SLIDECART_OPEN());else if("10272035"==e){const e=document.querySelector(".cart-drawer"),t=e.parentNode;t.classList.add("menu-opening"),t.setAttribute("open","open"),e.style.visibility="visible",e.style.transform="translate(0)"}else"1972174947"==e||"55194878152"==e?document.documentElement.dispatchEvent(new CustomEvent("cart:refresh:opend",{bubbles:!0,detail:{}})):"64463667449"==e||"63897370681"==e||"81998840121"==e||"70964478228"==e?(document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0})),document.documentElement.dispatchEvent(new CustomEvent("cart:updated",{bubbles:!0,detail:{cart:r}})),document.getElementById("mini-cart").open=!0):"81545986363"==e?(document.dispatchEvent(new CustomEvent("theme:cartchanged",{bubbles:!0})),document.dispatchEvent(new CustomEvent("theme:open-cart-drawer",{bubbles:!0}))):document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}}));setTimeout(t,n)}else{console.log("Executing cart refresh script..");document.getElementById("whatsmorecart").value=Math.random()}}},5380:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(4959),o=n(7313),r=n(4892),a=n(6805),s=n(7753),c=n(9821);var d=function(e){const[t,n,i,o,r]=(0,c.Z)(),[d]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizePortrait"),[l]=(0,s.j1)("whatmoreEmbedAppVideoPlayerSizeLandscape"),u=r[a.YP]===a.$w?l/100:d/100*1.2;return[t*u,n*u,r]},l=n(9723),u=n(9461),p=n.n(u),h=n(1195),m=n(7108),w=(n(7244),n(123),n(9854)),f=n(9039),v=n(6417);var x=function(e){var t;const n=o.useRef(null);var[c,u,x]=d();const{whatmoreUITheme:g}=(0,o.useContext)(f.I),[b]=(0,s.j1)("whatmoreEmbedAppVideoTitle"),[y]=(0,s.j1)("whatmoreEmbedAppPositionPortrait"),[E]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingPortrait"),[j]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingPortrait"),[S]=(0,s.j1)("whatmoreEmbedAppPositionLandscape"),[I]=(0,s.j1)("whatmoreEmbedAppHorizontalPaddingLandscape"),[L]=(0,s.j1)("whatmoreEmbedAppVerticalPaddingLandscape"),C=(0,s.MO)("whatmoreShopId");var _=y,T=E,P=j;x[a.YP]===a.$w&&(_=S,T=I,P=L);const[D,M]=(0,o.useState)(["initial",window.pageYOffset]),[k,z]=(0,o.useState)(!1),A=null!==(t=e.isSpotlight)&&void 0!==t&&t,O=x[a.YP]===a.$w?.7*(0,w.zGA)(C):(0,w.zGA)(C),B=A?O:1;c*=B,u*=B;const R=A?(0,w.G0o)(C):_,V=A?(0,w.X8j)(C):(0,w.lVn)(C),[F,N]=(0,o.useState)(!A&&(0,w.eXi)(C));function Z(e,t){M(e),e[1]<=100?z(!1):t!=k&&(z(t),N(!1))}(0,o.useEffect)((()=>{let e=window.pageYOffset,t=!1;const n=()=>{const n=window.pageYOffset;Math.abs(n-e)<100||(Z([n>e?"scrolled-down":"scrolled-up",n],!0),e=n>0?n:0),t=!1},i=()=>{t||(window.requestAnimationFrame(n),t=!0)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[D]),(0,i.O3)({ref:n,handler:()=>{Z(["scrolled-up",D[1]],!0)}});const $=e.event,U=e.inVideoClick,H=e.closeClick,q=.3*u,J=.6*u,W=.1*u,Y=.1*(.5*u),G="round"==g?"10px":"0px",X=(0,w.Z$A)(C);var K=!1,Q=0,ee=0;function te(e){K=e}return(0,v.jsx)("div",{children:F&&!V?(0,v.jsx)(v.Fragment,{}):k&&V?(0,v.jsx)("div",{style:"left"===R?{left:"1px",bottom:A?(0,w.vnu)(C)+"px":P+"px",position:"fixed",zIndex:X}:{right:"5px",bottom:A?(0,w.vnu)(C)+"px":P+"px",position:"fixed",zIndex:X},children:(0,v.jsxs)("div",{onClick:()=>{Z(["initial",D[1]],!1)},style:{margin:"1px",width:u+"px",height:c+"px"},className:"left"===R?"whatmore-ultraminimized-video-view-left":"whatmore-ultraminimized-video-view-right",children:[(0,v.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:G,overflow:"hidden"},children:(0,v.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,v.jsx)(r.Z,{url:$.thumbnail_image,isPlaying:!1,event:$})})}),(0,v.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,v.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",height:"100%"},children:[(0,v.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,v.jsx)("div",{className:"whatmore-ultraminimized-content-scale-out",children:(0,v.jsx)(h.Z,{sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:q+"px"},style:{position:"relative",zIndex:1,left:Y+"px",bottom:Y+"px"},onClick:H})})}),(0,v.jsx)("div",{style:{height:"100%",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(m.Z,{sx:{color:"white",fontSize:2*q+"px",filter:"drop-shadow(0 0 15px black);"}})})]})})]})}):(0,v.jsx)(p(),{nodeRef:n,cancel:".activate-button,.close-btn",defaultClassName:"whatmore-react-draggable",defaultClassNameDragging:"whatmore-react-draggable-dragging",defaultClassNameDragged:"whatmore-react-draggable-dragged",bounds:"html",onStart:(e,t)=>{var n,i;n=t.x,i=t.y,Q=n,ee=i},onDrag:(e,t)=>{te(!0)},onStop:(e,t)=>{K&&(Math.abs(t.x-Q)>5||Math.abs(t.y-ee)>5)?te(!1):U($)},children:(0,v.jsx)("div",{ref:n,style:"left"===R?{left:A?(0,w.$II)(C)+"px":T+"px",bottom:A?(0,w.vnu)(C)+"px":P+"px",position:"fixed",zIndex:X}:{right:A?(0,w.$II)(C)+"px":T+"px",bottom:A?(0,w.vnu)(C)+"px":P+"px",position:"fixed",zIndex:X},children:(0,v.jsxs)("div",{style:Object.assign({},{boxSizing:"border-box",margin:"1px",width:u+"px",height:c+"px"}),className:"left"===R?"whatmore-minimized-video-view-left":"whatmore-minimized-video-view-right",children:[(0,v.jsx)("div",{style:{boxShadow:"0px 0px 10px 3px #B0B0B0",borderRadius:G,overflow:"hidden",position:"relative"},children:(0,v.jsx)("div",{style:{width:"100%",height:"100%",aspectRatio:9/16},children:(0,v.jsx)(r.Z,{url:$.thumbnail_image,isMuted:!0,isPlaying:!0,event:$})})}),(0,v.jsx)("div",{style:{position:"relative",zIndex:1,bottom:"100%",width:"100%",height:"100%"},children:(0,v.jsxs)("div",{style:{display:"flex",flexFlow:"column nowrap",justifyContent:"space-between",height:"100%"},children:[(0,v.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"flex-end",width:"100%",height:"fit-content"},children:(0,v.jsx)(h.Z,{className:"close-btn",sx:{filter:"drop-shadow(0 0 15px black);",color:"white",fontSize:q+"px"},onClick:H,style:{position:"relative",zIndex:1,left:W+"px",bottom:W+"px"}})}),(0,v.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,v.jsx)(l.Z,{sx:{color:(0,w.Ya_)(C),fontSize:J+"px",filter:"drop-shadow(0 0 15px black);"}})}),(0,v.jsx)("div",{style:{paddingLeft:"2px",paddingRight:"2px",borderBottomLeftRadius:G,borderBottomRightRadius:G,backgroundImage:b?"linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.6))":""},children:(0,v.jsxs)("p",{style:{textAlign:"center",color:"white",fontFamily:"Sans-serif",fontWeight:"semi-bold",fontSize:.4*q+"px",margin:0,padding:0,lineHeight:"110%"},children:["\xa0",b]})})]})})]})})})})}},4284:function(e,t,n){n.r(t);var i=n(7313),o=n(9854),r=n(2860),a=n(7753),s=n(5160),c=n(6967),d=n(5380),l=n(58),u=n(8984),p=n(4669),h=n(941),m=n(9302),w=n(2575),f=n(7300),v=n(6524),x=n(9039),g=n(7376),b=n(778),y=n(7643),E=n(7008),j=n(7381),S=n(6417);const I=(0,w.Z)({key:"whatmore-css-ppv"}),L=i.lazy((()=>Promise.all([n.e(819),n.e(576),n.e(210),n.e(955),n.e(926),n.e(303),n.e(209),n.e(903)]).then(n.bind(n,4209))));function C(e){return e.split(/[?#]/)[0]}t.default=function(e){const[t,n]=(0,i.useState)(),[w,_]=(0,i.useState)(),[T]=(0,a.j1)("isInDesignMode"),[P]=(0,a.j1)("isDemoBrand"),[D]=(0,a.j1)("whatmoreEmbedAppUseVariant"),[M,k]=(0,i.useState)(-2),[z]=(0,a.j1)("whatmoreVariantId"),[A]=(0,a.j1)("whatmoreShopId");var[O]=(0,a.j1)("whatmoreProductId");const B=(0,a.MO)("isLandingSharedLink"),R=(0,a.MO)("whatmoreShareTemplateId"),V=(0,a.MO)("whatmoreShareEventId");O=(0,o.iXA)(A)?C(window.location.href):O;const[F,N]=(0,i.useState)((()=>"true"===D?z:O));var Z=r.Gc+"/v2/brand/"+A+"/product-events";const{whatmoreWidgetSourceDetails:$}=(0,i.useContext)(x.I);(0,i.useEffect)((()=>{(0,j.Oo)("Video shopping powered by Whatmore!"),(0,c.hb)();const e=()=>{const e="_whatmore_bulk_events",t=JSON.parse(localStorage.getItem(e))||[];t&&t.length>0&&((0,E.K)(t),localStorage.removeItem(e))};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[]),(0,i.useEffect)((()=>{(0,p.ll)(A)}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||w||!(0,u.KE)()||(0,a.MO)("whatmoreVideoPlayerPoolInitiated")||(0,l.b5)(l.UD)}),[t]),(0,i.useEffect)((()=>{k(-1),fetch(Z.toString()+"?client_product_id="+F.toString()+"&status="+"upcoming".toString()+"&event_type=video").then((e=>e.json())).then((e=>e.events)).then((e=>(n(e),e))).then((e=>((0,o.yoE)(A)&&function(e,t){setTimeout((async()=>{const n=e.reduce(((e,t)=>[...e,...t.products]),[]).filter((e=>e.client_product_id==t))[0];if(!n||n.product_link==C(window.location.href))return;const i={product_id:n.product_id,product_link:C(window.location.href)};fetch(r.Gc+"/product",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)})}),500)}(e,F),e))).catch((e=>{_(e.message)}))}),[F]),(0,i.useEffect)((()=>{k(-2),t&&t.length>0&&(0,g.PB)({userInteractionType:b.K.PDP_VISITED,widgetSourceDetails:$,event:t[0],productList:t[0].products,ctaList:t[0].cta})}),[t]),(0,i.useEffect)((()=>{let e=history.pushState;history.pushState=function(){let t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};let t=history.replaceState;history.replaceState=function(){let e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(()=>{window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("locationchange",(function(){if("true"===D){const e=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var i=t[n].split("=");if(i[0]==e)return i[1]}return!1}("variant");e&&""!==e&&N(e)}}))}),[]),(0,i.useEffect)((()=>{null==t||0==t.length||w||B&&"template-embed"==(0,v.zv)(R)&&null!=V&&t.forEach(((e,t)=>{V==e.event_id&&U(e,!0,t)}))}),[t]);const U=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if((0,u.KE)()&&!t&&(0,l.QV)(),(0,f.B6)(e)||(0,f.WJ)(e))return T||P||(async()=>{(0,s.wh)(e),(0,p.Tc)(A,r.h7,r.dU),(0,c.H4)(e.event_id,e.products,"product_page","video_popup")})(),void k(n)};function H(){return(0,S.jsx)(S.Fragment,{})}return null==t||0==t.length||w?(0,S.jsx)("div",{}):(0,S.jsx)(m.C,{value:I,children:"no-product"===F||-1===M||0===t.length?(0,S.jsx)(H,{}):-2===M&&t.length>0?(0,S.jsx)("div",{children:(0,S.jsx)(y.u,{userInteractionType:b.K.PDP_POPUP_WIDGET_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!T&&!P,children:(0,S.jsx)(d.Z,{event:t[0],inVideoClick:U,closeClick:e=>{e.stopPropagation(),k(-1)}})})}):(0,S.jsx)("div",{children:(0,S.jsx)(i.Suspense,{children:(0,S.jsx)(y.u,{userInteractionType:b.K.EVENT_VIEW,event:t[0],productList:t[0].products,cta:t[0].cta,triggerFlag:!T&&!P,children:(0,S.jsx)(L,{events:t,index:M,onBack:function(){(0,o.n2L)(A)&&(0,a.MO)("whatmoreAddedToCart")&&(0,h.D)(A,(()=>{}),100,window.location.hostname),k(-2)},template:"template-product-page"})})})})})}},7376:function(e,t,n){n.d(t,{GF:function(){return o},PB:function(){return s},Z2:function(){return r},y4:function(){return a}});var i=n(733);function o(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s})}function r(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s})}function a(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s})}function s(e){let{userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s}=e;(0,i.s)({userInteractionType:t,userInteractionMetadata:n,widgetSourceDetails:o,event:r,productList:a,ctaList:s})}}}]);