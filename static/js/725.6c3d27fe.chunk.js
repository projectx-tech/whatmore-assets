"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[725],{513:function(t,e,n){n.d(e,{D:function(){return r}});const o=function(){fetch("/cart.json").then((t=>t.json())).then((t=>{fetch("/cart?view=item").then((t=>t.text())).then((e=>{const n=(new DOMParser).parseFromString(e,"text/html"),o=n.getElementById("CartDrawer"),r=document.getElementById("CartDrawer");o&&r&&(r.innerHTML=o.innerHTML);n.querySelector("#CartDrawer .totals__subtotal-value");const a=document.querySelector("cart-drawer");a&&a.classList.remove("is-empty");const c=document.querySelector("cart-drawer-items");c&&c.classList.remove("is-empty");const i=document.getElementById("cart-icon-bubble");if(i.querySelector(".cart-count-bubble")){i.querySelectorAll('.cart-count-bubble span[aria-hidden="true"]').forEach((e=>{e.textContent=t.item_count}))}else{const e=document.createElement("div");e.className="cart-count-bubble",e.innerHTML='\n                            <span aria-hidden="true">'.concat(t.item_count,'</span>\n                            <span class="visually-hidden">').concat(t.item_count," items</span>\n                        "),i.appendChild(e)}i.click();document.getElementById("CartDrawer-Overlay").addEventListener("click",(()=>{const t=document.querySelector("cart-drawer");t&&t.classList.remove("active"),document.body.classList.remove("overflow-hidden")}))}))}))},r=async function(t,e,n,r){if("STRNV8MHJTF"!=t&&"STR6HU283UZ"!=t&&"STR9T3LLEJB"!=t&&"STRWJMIOJNX"!=t&&"STRUDQ36YAC"!=t&&"STR1D5ONOZX"!=t){var a=await fetch("https://"+window.location.hostname+"/cart.js",{cache:"reload"}).then((t=>t.json()));if("57939755089"==t||"27358003275"==t||"63748341981"==t||"68237558034"==t||"63046287536"==t||"9734029408"==t||"83411075365"==t||"36300750986"==t||"16957273"==t||"9483952"==t||"57265094752"==t||"58538459329"==t||"80266658086"==t||"46784020646"==t||"52982579389"==t||"76291703063"==t||"68546691304"==t)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0,detail:{cart:a,openMiniCart:!0}}));else if("19506115"==t)window.PXUTheme.jsAjaxCart.showDrawer(),window.PXUTheme.jsAjaxCart.updateView();else if("54465429691"==t||"41096085665"==t)refreshCart(a),window.setTimeout((function(){$.fancybox.close(),$(".cart-button").click()}),500);else if("25427564"==t||"4243849314"==t||"57708314789"==t){(new theme.CartDrawer).open()}else if("62602182872"==t||"57362710572"==t)CartJS.getCart(),$(".block-cart").addClass("active");else if("83096174866"==t||"63791857821"==t||"70963003672"==t||"20157815"==t||"60492578980"==t||"12183765088"==t||"58546946211"==t||"42070737058"==t||"71321583919"==t||"68492624171"==t||"74541891876"==t||"21187677"==t||"74021110038"==t||"58193838255"==t||"25151799349"==t||"72651899165"==t||"52022313149"==t||"64983957725"==t||"69610111257"==t||"61209641060"==t||"87043703105"==t)document.documentElement.dispatchEvent(new CustomEvent("ajaxProduct:added",{bubbles:!0,detail:{}})),document.documentElement.dispatchEvent(new CustomEvent("cart:open",{bubbles:!0,detail:{}}));else if("2665447536"==t||"51364757670"==t)fetch("/?section_id=cart-drawer").then((t=>t.text())).then((t=>{const e=(new DOMParser).parseFromString(t,"text/html").getElementById("cart-drawer").innerHTML;$("#cart-drawer").html(e),$('[aria-controls="cart-drawer"]')[0].click(),$(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity",1)}));else if("57824805033"==t||"59504656436"==t||"58112966749"==t||"9989358"==t||"26958037078"==t)o();else if("80856187185"==t||"71256211737"==t)fetch("/cart?section_id=mini-cart").then((t=>t.text())).then((t=>{const e=(new DOMParser).parseFromString(t,"text/html").querySelector(".mini-cart__inner").innerHTML;$(".mini-cart__inner").html(e).addClass("active__drawer")})).catch((t=>{console.error(t)})),o();else if("61094723750"==t||"45034766485"==t)SLIDECART&&(SLIDECART_UPDATE(),SLIDECART_OPEN());else if("10272035"==t){const t=document.querySelector(".cart-drawer"),e=t.parentNode;e.classList.add("menu-opening"),e.setAttribute("open","open"),t.style.visibility="visible",t.style.transform="translate(0)"}else if("1972174947"==t||"55194878152"==t||"49198989466"==t)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh:opend",{bubbles:!0,detail:{}}));else if("64463667449"==t||"63897370681"==t||"81998840121"==t||"70964478228"==t)document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0})),document.documentElement.dispatchEvent(new CustomEvent("cart:updated",{bubbles:!0,detail:{cart:a}})),document.getElementById("mini-cart").open=!0;else if("81545986363"==t)document.dispatchEvent(new CustomEvent("theme:cartchanged",{bubbles:!0})),document.dispatchEvent(new CustomEvent("theme:open-cart-drawer",{bubbles:!0}));else if("41346334884"==t||"74448077083"==t||"26562420"==t||"26759856318"==t)document.dispatchEvent(new CustomEvent("dispatch:cart-drawer:refresh")),document.dispatchEvent(new CustomEvent("dispatch:cart-drawer:open"));else if("6873415750"==t)document.dispatchEvent(new CustomEvent("cart:change",{bubbles:!0,detail:{cart:a}})),document.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0}));else if("59547517063"==t||"59612954814"==t)(()=>{var t=document.querySelector("cart-notification")||document.querySelector("cart-drawer"),e=window.location.origin?window.location.origin+"/":window.location.protocol+"//"+window.location.host+"/";Shopify.locale.length>0&&(e+=Shopify.locale+"/"),null!==t&&"function"===typeof t.renderContents&&fetch(e+"cart?sections=cart-drawer,cart-icon-bubble",{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){var n=document.querySelector("cart-drawer.drawer.is-empty");null!==n&&n.classList.remove("is-empty");try{return e.clone().json().then((function(e){try{var n={sections:e};t.renderContents(n)}catch(o){console.error(o)}}))}catch(o){console.error(o)}}))})();else if("61086662810"==t)(()=>{try{var t=document.querySelector("mini-cart")||document.querySelector("cart-drawer")||document.querySelector("product-form"),e=window.location.origin?window.location.origin+"/":window.location.protocol+"//"+window.location.host+"/";if(Shopify.locale.length>0&&(e+=Shopify.locale+"/"),null!==t&&"function"===typeof t.renderContents){var n=t.getSectionsToRender().map((t=>t.id));fetch(e+"cart?sections="+n.toString(),{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){try{return e.clone().json().then((function(e){try{var n={sections:e};t.renderContents(n)}catch(o){console.error(o)}}))}catch(n){console.error(n)}}))}}catch(o){console.error(o)}})();else if("5827756145"==t){let t=document.getElementById("cart-config");t=JSON.parse(t.innerHTML||"{}"),"undefined"!==typeof window.Shopify&&"undefined"!==typeof window.Shopify.theme&&"undefined"!==typeof window.Shopify.theme.ajaxCart&&"function"===typeof window.Shopify.theme.ajaxCart.updateView&&(Shopify.theme.ajaxCart.updateView({cart_url:"/cart"},a),Shopify.theme.ajaxCart.showDrawer(t))}else"73454354741"==t?0!==Object.keys(a).length&&(t=>{const e=document.querySelector("#halo-cart-sidebar .halo-sidebar-wrapper .previewCart-wrapper"),n="is-loading";e.classList.add(n),e.insertAdjacentHTML("afterbegin",'\n        <div class="loading-overlay loading-overlay--custom">\n            <div class="loading-overlay__spinner">\n                <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n                    <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>\n                </svg>\n            </div>\n        </div>\n    '),fetch(window.routes.root+"/cart?view=ajax_side_cart",{method:"GET",cache:"no-cache"}).then((t=>t.text())).then((t=>{const o=(new DOMParser).parseFromString(t,"text/html");e.innerHTML=o.body.innerHTML,e.classList.remove(n)})).finally((()=>{document.body.querySelector("[data-cart-count]").textContent=cart.item_count,document.dispatchEvent(new CustomEvent("cart-update",{detail:t})),document.getElementById("cart-icon-bubble").click()}))})(a):"71830962487"==t?"undefined"!==typeof window.Shopify&&"function"===typeof window.Shopify.onCartUpdate&&-1===Shopify.onCartUpdate.toString().indexOf("There are now")&&window.Shopify.onCartUpdate(a,!0):(document.documentElement.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{}})),function(t){try{var e=t.item_count;if($("[data-cart-item-count]").html(e),$(".header__cart-count").html(e),$(".site-header__cart-count span[data-cart-count]").html(e),$("#CartCount [data-cart-count]").length>0?$("#CartCount [data-cart-count]").html(e):$("#CartCount").length>0&&$("#CartCount").html($("#CartCount").html().replace(/(\d+)/,t.item_count)),$("#CartCount.hide").length>0&&$("#CartCount.hide").removeClass("hide"),$("#site-cart-handle .count-holder .count").length>0&&$("#site-cart-handle .count-holder .count").html($("#site-cart-handle .count-holder .count").html().replace(/(\d+)/,t.item_count)),$("#minicart .count.cart-target").length>0&&$("#minicart .count.cart-target").html($("#minicart .count.cart-target").html().replace(/(\d+)/,t.item_count)),$("#sidebar #meta .count").length>0&&$("#sidebar #meta .count").html($("#sidebar #meta .count").html().replace(/(\d+)/,t.item_count)),$(".site-header__cart .site-header__cart-indicator").length>0&&($(".site-header__cart .site-header__cart-indicator").html($(".site-header__cart .site-header__cart-indicator").html().replace(/(\d+)/,t.item_count)),t.item_count>0&&$(".site-header__cart .site-header__cart-indicator").removeClass("hide")),$(".cart-count").length>0&&$(".cart-count").html($(".cart-count").html().replace(/(\d+)/,t.item_count)),$(".cartCount[data-cart-count]").length>0&&$(".cartCount[data-cart-count]").html($(".cartCount[data-cart-count]").html().replace(/(\d+)/,t.item_count)),$("[data-js-cart-count-desktop]").length>0&&($("[data-js-cart-count-desktop]").html(t.item_count),$("[data-js-cart-count-desktop]").attr("data-js-cart-count-desktop",t.item_count)),$(".cart-item-count-header").length>0){var n=$(".cart-item-count-header").first();!0===n.hasClass("cart-item-count-header--total")?n.find(".money").length&&(n=n.find(".money").first()).html(bndlr.formatPrice(t.items_subtotal_price)):n.html(n.html().replace(/(\d+)/,t.item_count))}if($("#CartCost").length>0&&"undefined"!==typeof theme&&"undefined"!==typeof theme.moneyFormat){var o=utils.formatMoney(t.items_subtotal_price,theme.moneyFormat);$("#CartCost").html(o)}if("function"==typeof refreshCart&&refreshCart(t),"undefined"!==typeof slate&&"undefined"!==typeof slate.cart&&"function"==typeof slate.cart.updateCart&&slate.cart.updateCart(),"undefined"!==typeof ajaxCart&&"function"===typeof ajaxCart.load&&ajaxCart.load(),$(".mega-nav-count.nav-main-cart-amount.count-items").length>0&&($(".mega-nav-count.nav-main-cart-amount.count-items").html($(".mega-nav-count.nav-main-cart-amount.count-items").html().replace(/(\d+)/,t.item_count)),$(".mega-nav-count.nav-main-cart-amount.count-items.hidden").removeClass("hidden")),$("#cart-icon-bubble").length>0){var r='#cart-icon-bubble .cart-count-bubble span[aria-hidden="true"]';$(r).length>0?$(r).html($(r).html().replace(/(\d+)/,t.item_count)):$("#cart-icon-bubble").append('<div class="cart-count-bubble"><span aria-hidden="true">'+t.item_count+"</span></div>")}"undefined"!==typeof Shopify&&"undefined"!==typeof Shopify.updateQuickCart&&Shopify.updateQuickCart(t),"undefined"!==typeof bcActionList&&"function"===typeof bcActionList.atcBuildMiniCartSlideTemplate&&(bcActionList.atcBuildMiniCartSlideTemplate(t),"function"===typeof openMiniCart&&openMiniCart()),$(".custom-cart-eye-txt").length>0&&$(".custom-cart-eye-txt").html($(".custom-cart-eye-txt").html().replace(/(\d+)/,t.item_count)),$(".cart_count").length>0&&$(".cart_count").each((function(e,n){$(n).html($(n).html().replace(/(\d+)/,t.item_count))})),$(".cart-count-bubble [data-cart-count]").length>0&&$(".cart-count-bubble [data-cart-count]").html($(".cart-count-bubble [data-cart-count]").html().replace(/(\d+)/,t.item_count)),$(".cart-count-bubble span.visually-hidden").length>0&&$(".cart-count-bubble span.visually-hidden").html($(".cart-count-bubble span.visually-hidden").html().replace(/(\d+)/,t.item_count)),$(".header-cart-count .cart_count_val").length>0&&($(".header-cart-count .cart_count_val").html(t.item_count),$(".header-cart-count").removeClass("empty_cart_count")),"undefined"!==typeof Shopify&&"undefined"!==typeof Shopify.updateCartInfo&&$(".top-cart-holder .cart-target form .cart-info .cart-content").length>0&&Shopify.updateCartInfo(t,".top-cart-holder .cart-target form .cart-info .cart-content");var a=new CustomEvent("wetheme-toggle-right-drawer",{detail:{type:"cart",forceOpen:void 0,params:{cart:t}}});document.documentElement.dispatchEvent(a),"undefined"!==typeof window.vndHlp&&"function"===typeof window.vndHlp.refreshCart&&window.vndHlp.refreshCart(t);try{"function"===typeof window.renderCart&&(window.renderCart(t),t.items.length>0&&$(".mini-cart.is-empty").removeClass("is-empty"))}catch(f){}try{"undefined"!==typeof window.SATCB&&"undefined"!==typeof window.SATCB.Helpers&&"function"===typeof window.SATCB.Helpers.openCartSlider&&window.SATCB.Helpers.openCartSlider()}catch(f){}try{document.dispatchEvent(new CustomEvent("theme:cart:change",{detail:{cart:t,cartCount:t.item_count},bubbles:!0}))}catch(f){}if("undefined"!==typeof window.cartStore&&"function"===typeof window.cartStore.setState&&window.cartStore.setState({justAdded:{},popupActive:!0,item_count:t.item_count,items:t.items,cart:t}),"undefined"!==typeof window.Shopify&&"function"===typeof window.Shopify.onCartUpdate&&-1===Shopify.onCartUpdate.toString().indexOf("There are now")&&window.Shopify.onCartUpdate(t,!0),"undefined"!==typeof theme&&"undefined"!==typeof theme.Cart&&"function"===typeof theme.Cart.setCurrentData&&theme.Cart.setCurrentData(t),"undefined"!==typeof window.halo&&"function"===typeof window.halo.updateSidebarCart){window.halo.updateSidebarCart(t);var c=$("[data-cart-sidebar]");c.length>0&&c[0].click()}if("undefined"!==typeof window.Shopify&&"undefined"!==typeof window.Shopify.theme&&"undefined"!==typeof window.Shopify.theme.ajaxCart&&"function"===typeof window.Shopify.theme.ajaxCart.updateView&&Shopify.theme.ajaxCart.updateView({cart_url:"/cart"},t),"undefined"!==typeof window.theme&&"undefined"!==typeof window.theme.cart&&"function"===typeof window.theme.cart.updateAllHtml)try{window.theme.cart.updateAllHtml(),window.theme.cart.updateTotals(t),document.querySelector(".header--cart-toggle").click()}catch(f){}if("function"===typeof monster_setCartItems)try{monster_setCartItems(t.items)}catch(f){console.error(f)}try{"undefined"!==typeof window.refreshCartContents&&window.refreshCartContents(t)}catch(f){}$(".header-actions [data-header-cart-count]").length>0&&$(".header-actions [data-header-cart-count]").html(t.item_count),window.dispatchEvent(new Event("update_cart")),"undefined"!==typeof clientSpecifics.update_cart&&clientSpecifics.update_cart.trigger(t)}catch(f){console.log(f)}try{var i=document.querySelector(".minicart__outerbox"),d=window.location.origin?window.location.origin+"/":window.location.protocol+"//"+window.location.host+"/";Shopify.locale.length>0&&(d+=Shopify.locale+"/"),null!==i&&"function"===typeof window.cartContentUpdate&&(sectionsToRender=i.dataset.section,fetch(d+"cart?sections="+sectionsToRender,{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(e){try{return e.clone().json().then((function(e){t.sections=e,window.cartContentUpdate(t,i,sectionsToRender)}))}catch(f){console.error(f)}})))}catch(f){console.error(f)}if("undefined"!==typeof window.SLIDECART_UPDATE)try{window.SLIDECART_UPDATE()}catch(f){console.log(f)}if("undefined"!==typeof window.SLIDECART_OPEN&&setTimeout((function(){try{window.SLIDECART_OPEN()}catch(f){console.log(f)}}),500),"undefined"!==typeof Shopify&&"undefined"!==typeof Shopify.theme&&"undefined"!==typeof Shopify.theme.jsAjaxCart&&"function"===typeof Shopify.theme.jsAjaxCart.updateView&&Shopify.theme.jsAjaxCart.updateView(),"undefined"!==typeof CartJS&&"function"===typeof CartJS.getCart)try{CartJS.getCart()}catch(f){console.log(f)}try{$(".sp-cart .sp-dropdown-toggle").length&&"undefined"!==typeof Shopify&&"function"===typeof Shopify.getCart&&Shopify.getCart(),$("form.cart-drawer").length>0&&($(".cart-drawer input").first().trigger("blur"),setTimeout((function(){$(".cart-drawer input").first().trigger("input")}),350))}catch(f){console.log(f)}try{var u=document.querySelector("m-cart-drawer");null!==u&&"function"===typeof u.onCartDrawerUpdate&&(u.onCartDrawerUpdate(),"function"===typeof u.open&&u.open())}catch(f){console.log(f)}try{document.dispatchEvent(new CustomEvent("cart:refresh"))}catch(f){}try{document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{bubbles:!0}))}catch(f){}if("undefined"!==typeof window.HsCartDrawer&&"function"===typeof window.HsCartDrawer.updateSlideCart&&debounce("hscartdrawer",(function(){try{HsCartDrawer.updateSlideCart()}catch(f){console.log(f)}}),100),"function"===typeof window.HS_SLIDE_CART_UPDATE&&debounce("hscartdrawer2",(function(){try{window.HS_SLIDE_CART_UPDATE()}catch(f){console.log(f)}}),100),"undefined"!==typeof window.HS_SLIDE_CART_OPEN&&"function"===typeof window.HS_SLIDE_CART_OPEN&&debounce("hscartdraweropen",(function(){try{window.HS_SLIDE_CART_OPEN()}catch(f){console.log(f)}}),100),"undefined"!==typeof theme&&"undefined"!==typeof theme.Cart&&"function"===typeof theme.Cart.updateCart&&theme.Cart.updateCart(),"undefined"!==typeof window.cart&&"function"===typeof window.cart.getCart&&window.cart.getCart(),"function"===typeof window.updateMiniCartContents)try{window.updateMiniCartContents()}catch(f){}if("function"===typeof window.loadEgCartDrawer)try{window.loadEgCartDrawer()}catch(f){}try{document.dispatchEvent(new CustomEvent("cart:build"))}catch(f){}try{document.dispatchEvent(new CustomEvent("obsidian:upsell:refresh")),document.dispatchEvent(new CustomEvent("obsidian:upsell:open"))}catch(f){}var s=document.getElementById("site-cart");if(null!==s)try{s.show()}catch(f){}if("undefined"!==typeof window.theme&&"function"===typeof window.theme.updateCartSummaries)try{window.theme.updateCartSummaries()}catch(f){}if("undefined"!==typeof window.CD_REFRESHCART)try{window.CD_REFRESHCART()}catch(f){console.log(f)}if("undefined"!==typeof window.CD_OPENCART&&setTimeout((function(){try{window.CD_OPENCART()}catch(f){console.log(f)}}),500),"function"===typeof window.buildCart)try{window.buildCart()}catch(f){console.log(f)}if("undefined"!==typeof window.PXUTheme&&"undefined"!==typeof window.PXUTheme.jsAjaxCart&&"function"===typeof window.PXUTheme.jsAjaxCart.updateView)try{window.PXUTheme.jsAjaxCart.updateView()}catch(f){}if("undefined"!==typeof window.theme&&"function"===typeof window.theme.addedToCartHandler)try{window.theme.addedToCartHandler({})}catch(f){}try{a=new Event("tcustomizer-event-cart-change"),document.dispatchEvent(a)}catch(f){}try{document.dispatchEvent(new CustomEvent("dispatch:cart-drawer:refresh",{bubbles:!0})),setTimeout((function(){document.dispatchEvent(new CustomEvent("dispatch:cart-drawer:open"))}),500)}catch(f){}try{var l=document.querySelector("cart-notification")||document.querySelector("cart-drawer");d=window.location.origin?window.location.origin+"/":window.location.protocol+"//"+window.location.host+"/",Shopify.locale.length>0&&(d+=Shopify.locale+"/"),null!==l&&"function"===typeof l.renderContents&&fetch(d+"cart?sections=cart-drawer,cart-icon-bubble",{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(t){var e=document.querySelector("cart-drawer.drawer.is-empty");null!==e&&e.classList.remove("is-empty");try{return t.clone().json().then((function(t){try{var e={sections:t};l.renderContents(e)}catch(f){console.error(f)}}))}catch(f){console.error(f)}}))}catch(f){console.error(f)}try{var p=document.querySelector("mini-cart")||document.querySelector("cart-drawer")||document.querySelector("product-form");if(d=window.location.origin?window.location.origin+"/":window.location.protocol+"//"+window.location.host+"/",Shopify.locale.length>0&&(d+=Shopify.locale+"/"),null!==p&&"function"===typeof p.renderContents){var h=p.getSectionsToRender().map((t=>t.id));fetch(d+"cart?sections="+h.toString(),{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((function(t){try{return t.clone().json().then((function(t){try{var e={sections:t};p.renderContents(e)}catch(f){console.error(f)}}))}catch(f){console.error(f)}}))}}catch(f){console.error(f)}}(a));setTimeout(e,n)}else{console.log("Executing cart refresh script..");document.getElementById("whatsmorecart").value=Math.random()}}},58:function(t,e,n){n.d(e,{Bi:function(){return i},P7:function(){return u},QV:function(){return d},UD:function(){return r},b5:function(){return c}});var o=n(7753);const r=6;function a(){const t=(0,o.MO)("whatmoreVideoPlayerPool");var e=document.createElement("video");return e.setAttribute("class","whatmore-video-player whatmore-main-video-player-from-pool"),e.setAttribute("width","100%"),e.setAttribute("src","https://whatmore-other-assets.b-cdn.net/whatmore/dummy_for_video_pool_3s_muted_11kb.mp4"),e.muted=!0,e.setAttribute("height","100%"),e.setAttribute("preload","metadata"),e.setAttribute("loop",""),e.setAttribute("playsinline",""),e.setAttribute("x-webkit-airplay","allow"),e.controls=!1,t.appendChild(e),e}const c=function(t){for(let e=1;e<=t;e++)a();(0,o.bU)("whatmoreVideoPlayerPoolInitiated",!0)};const i=function(t,e,n,r){(0,o.MO)("whatmoreVideoPlayerPool");const a=function(t,e,n){var r=(a=(0,o.MO)("whatmoreVideoPlayerPool").children,a.length>0?a[0]:null);var a;if(!r)throw new Error("Whatmore :: not enough blessed videos available in video pool.");return r.setAttribute("src",t),r.muted=e,r.play().then((()=>{!n&&r.pause()})).catch((t=>{})),r}(e,n,r);return t.innerHTML="",t.appendChild(a),a},d=async function(){const t=(0,o.MO)("whatmoreVideoPlayerPool"),e=(0,o.MO)("whatmoreVideoPlayerPoolInitiated");e||c(r);var n=[];for(let o of t.children){o.muted=!0;var a=o.play().then((t=>(!e&&o.pause(),t)));n.push(a)}await Promise.all(n).then((t=>{(0,o.bU)("whatmoreVideoPlayerPoolBlessed",!0)})).catch((t=>{console.error("Whatmore :: Error while blessing "+t.message)}))},u=function(t){const e=(0,o.MO)("whatmoreVideoPlayerPool"),n=t.children[0];n.muted=!0,!n.paused&&n.pause(),e.appendChild(n)}},8984:function(t,e,n){n.d(e,{KE:function(){return a},gE:function(){return r}});var o=n(4862);const r=function(){return o.gn},a=function(){return r()||o.Q5}},7300:function(t,e,n){n.d(e,{B6:function(){return o},WJ:function(){return r},yC:function(){return a}});const o=function(t){return"video"===t.event_type},r=function(t){return"image"===t.event_type},a=function(t){return"livestream"===t.event_type}},5160:function(t,e,n){n.d(e,{$L:function(){return p},JX:function(){return l},Z6:function(){return i},lY:function(){return u},rp:function(){return h},uD:function(){return f},wh:function(){return c},wz:function(){return s},x0:function(){return d}});var o,r=n(2860);const a=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o;function c(t){a&&console.debug("updating user view count for event.");const e={event_id:t.event_id,increase_by:1};fetch(r.Gc+"/event/metrics/views",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>(a&&console.debug("updating user view count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating user view count response : "+JSON.stringify(t))})).catch((t=>{console.error("error updating user view count user for event : ",t)}))}function i(t,e){a&&console.debug("updating like count for event.");const n={event_id:t.event_id,increase_by:e};fetch(r.Gc+"/event/metrics/like",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>(a&&console.debug("updating like count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating like count response : "+JSON.stringify(t))})).catch((t=>{console.error("error updating like count user for event : ",t)}))}function d(t){a&&console.debug("updating share count for event.");const e={event_id:t.event_id,increase_by:1};fetch(r.Gc+"/event/metrics/share",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>(a&&console.debug("updating share count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating share count response : "+JSON.stringify(t))})).catch((t=>{console.error("error updating share count user for event : ",t)}))}function u(t,e){a&&console.debug("updating wa click count for event.");const n={event_id:t.event_id,increase_by:e};fetch(r.Gc+"/event/metrics/whatsapp",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>(a&&console.debug("updating whatsapp click count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating whatsapp click count response : "+JSON.stringify(t))})).catch((t=>{console.error("error updating whatsapp click count user for event : ",t)}))}function s(t,e){a&&console.debug("updating event-product click count for event {} and product {}.",t.event_id,e.product_id);const n={event_id:t.event_id,product_id:e.product_id,increase_by:1};fetch(r.Gc+"/event/metrics/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>(a&&console.debug("updating user event-product click count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating user event-product click count response : "+JSON.stringify(t))})).catch((e=>{console.error("error updating user event-product click count for event {} : ",t.event_id,e)}))}function l(t,e,n){a&&console.debug("updating event-product add to cart count for event {} and product {}.",t.event_id,e.product_id);const o={event_id:t.event_id,product_id:e.product_id,increase_by:n};fetch(r.Gc+"/event/metrics/add_to_cart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((t=>(a&&console.debug("updating user event-product add to cart count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating user event-product add to cart count response : "+JSON.stringify(t))})).catch((e=>{console.error("error updating user event-product add to cart count for event {} : ",t.event_id,e)}))}function p(t,e){a&&console.debug("updating event-product buy now count for event {} and product {}.",t.event_id,e.product_id);const n={event_id:t.event_id,product_id:e.product_id,increase_by:1};fetch(r.Gc+"/event/metrics/buy_now",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>(a&&console.debug("updating user event-product buy now count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating user event-product buy now count response : "+JSON.stringify(t))})).catch((e=>{console.error("error updating user event-product buy now count for event {} : ",t.event_id,e)}))}async function h(){let{storeId:t="",eventId:e=0,productId:n="",variantId:o="",cartToken:c="",checkoutToken:i="",quantity:d=0,price:u="",actionType:s="",trackingId:l=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p={event_id:e,product_id:n,cart_token:c,checkout_token:i,quantity:d,price:u,variant_id:o,action_type:s,tracking_id:l};a&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} ",e,n,o);const h=await fetch(r.Gc+"/cart-metadata/"+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)}).then((t=>(a&&console.debug("initiating ATC metadata event for eventId {}, productId {}, variantId {} : HTTP "+t.status),t.json()))).catch((t=>{console.error("error initiating ATC metadata event for eventId {}, productId {}, variantId {} : ",e,n,o)}));return h}function f(t){const e={event_id:t.event.event_id,cta_id:t.cta.cta_id,increase_by:1};fetch(r.Gc+"/event/metrics/cta/clicks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>(a&&console.debug("updating user cta click count response : HTTP "+t.status),t.json()))).then((t=>{a&&console.debug("updating user cta click count response : "+JSON.stringify(t))})).catch((t=>{console.error("error updating cta click count : ",t)}))}},4669:function(t,e,n){n.d(e,{Tc:function(){return h},ll:function(){return p}});var o,r=n(1824),a=n(7786),c=n(9854);const i="Whatmore Video Shopping",d=null!==(o="true"==localStorage.getItem("whatmoreActivateLogs"))&&void 0!==o&&o,u="Video View",s={carousel:"Carousel",stories:"Stories",video_popup:"Video Popup"},l={homepage:"Home Page",product_page:"Product Page"};async function p(t){if((0,c.DvX)(t)&&null!==(0,c.hfN)(t)&&(a.ZP.initialize((0,c.hfN)(t)),d&&console.debug("Whatmore: initialized GA4")),(0,c.hvq)(t)&&null!==(0,c.BHj)(t)){const e=(0,c.OQz)(t);r.ZP.initialize((0,c.BHj)(t),{useExistingGa:e}),d&&console.debug("Whatmore: initialized GA3")}}async function h(t,e,n){(0,c.hvq)(t)&&null!==(0,c.BHj)(t)&&(r.ZP.event({category:i,action:u,label:l[e]+":"+s[n]}),d&&console.debug("Whatmore: pushed view event to GA3")),(0,c.DvX)(t)&&null!==(0,c.hfN)(t)&&(a.ZP.event({category:i,action:u+":"+l[e]+":"+s[n],value:1,nonInteraction:!1}),d&&console.debug("Whatmore: pushed view event to GA4"))}},733:function(t,e,n){n.d(e,{s:function(){return p}});var o=n(7381),r=n(9854),a=n(7753),c=n(7008);const i=function(t,e,n,o){var r;return{landing_location_type:e.landingLocationType,template_type:e.templateType,whatmore_event:{id:t.event_id,eventset_id:null!==(r=t.eventset_id)&&void 0!==r?r:null,cta_list:o.map((t=>t.cta_id)),product_list:n.map((t=>t.product_id))}}};var d=n(778),u=n(2751),s=n(6967);const l=function(){return{user_id:(0,s.hb)(),session_id:(0,s.sQ)(),user_group:"group-a",user_agent:navigator.userAgent,store_id:(0,a.MO)("whatmoreShopId"),hostname:window.location.hostname,page_path:window.location.pathname,event_id:(0,u.x0)(),event_timestamp:Math.round((new Date).getTime()/1e3)}},p=function(){let{userInteractionType:t="",userInteractionMetadata:e={},widgetSourceDetails:n={},event:u="",productList:s=[],ctaList:p=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const h=(0,a.MO)("isInDesignMode"),f=(0,a.MO)("isDemoBrand"),m=(0,a.MO)("whatmoreShopId");if(!(0,r.AAS)(m)||f||h)return;const w="_whatmore_bulk_events",y=l(),v=(0,d.r)(t,e),g=i(u,n,s,p),_=(0,a.MO)("whatmoreLoggingActive"),C={...y,interaction_data:v,data:g},b=JSON.parse(localStorage.getItem(w))||[];if(b.push(C),localStorage.setItem(w,JSON.stringify(b)),_&&(0,o.EI)(C),clearTimeout(localStorage.getItem("_whatmore_bulk_timer_id")),b.length>=10)(0,c.K)(b),localStorage.removeItem(w);else if(b.length>0){let t=setTimeout((()=>{(0,c.K)(b),localStorage.removeItem(w)}),14e3);localStorage.setItem("_whatmore_bulk_timer_id",t)}}},778:function(t,e,n){n.d(e,{K:function(){return o},r:function(){return r}});const o=Object.freeze({EVENT_VIEW:"event-view",PRODUCT_CTA_VIEW:"product-cta-view",SHOPNOW_ATC_CLICKED:"shop-now-atc-clicked",SHOPNOW_BUYNOW_CLICKED:"shop-now-buy-now-clicked",PRODUCT_TILE_ATC_CLICKED:"product-tile-atc-clicked",PRODUCT_TILE_SHOPNOW_CLICKED:"product-tile-shopnow-clicked",VIDEO_LIKED:"video-liked",VIDEO_UNLIKED:"video-unliked",VIDEO_SHARE_CTA_CLICKED:"video-share-cta-clicked",VIDEO_MUTED:"video-muted",HOMEPAGE_CAROUSEL_SWIPED:"homepage-carousel-swiped",HOMEPAGE_VISITED:"homepage-visited",COLLECTION_PAGE_VISITED:"collection-page-visited",PDP_VISITED:"product-page-visited",HOMEPAGE_CAROUSEL_WIDGET_VIEW:"homepage-carousel-widget-view",BANNER_WIDGET_VIEW:"banner-widget-view",STORIES_WIDGET_VIEW:"stories-widget-view",COLLECTION_WIDGET_VIEW:"collection-widget-view",SPOTLIGHT_WIDGET_VIEW:"spotlight-widget-view",PDP_POPUP_WIDGET_VIEW:"pdp-popup-widget-view",VIDEO_PLAYBACK:"video-playback",SHOPNOW_CLICKED:"shopnow-clicked",WHATSAPP_ICON_CLICKED:"whatsapp-icon-clicked",BANNER_WIDGET_CLICKED:"banner-widget-clicked"}),r=function(t,e){return{name:t,metadata:JSON.stringify(e)}}},7643:function(t,e,n){n.d(e,{u:function(){return d}});var o=n(3933),r=n(9039),a=n(7313),c=n(733),i=n(6417);const d=function(t){var e;const{ref:n,inView:d,entry:u}=(0,o.YD)({triggerOnce:!1,threshold:null!==(e=t.threshold)&&void 0!==e?e:1}),{whatmoreWidgetSourceDetails:s}=(0,a.useContext)(r.I);return(0,a.useEffect)((()=>{var e,n,o,r;d&&null!==(e=t.triggerFlag)&&void 0!==e&&e&&(0,c.s)({userInteractionType:t.userInteractionType,userInteractionMetadata:null!==(n=t.userInteractionMetadata)&&void 0!==n?n:{},widgetSourceDetails:s,event:t.event,productList:null!==(o=t.productList)&&void 0!==o?o:[],ctaList:null!==(r=t.ctaList)&&void 0!==r?r:[]})}),[d]),(0,i.jsx)("div",{ref:n,children:t.children})}}}]);