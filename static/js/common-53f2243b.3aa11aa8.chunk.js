"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[1655],{2750:function(a,e,t){t(201)},69100:function(a,e,t){t.d(e,{Z:function(){return i}});var n=t(66419),o=t(64761);function i(a){let e,{swiper:t,extendParams:i,on:s,emit:p}=a;function r(){const a=t.slides.eq(t.activeIndex);let n=t.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(n=a.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(e),e=(0,o.Y3)((()=>{let a;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),a=t.slidePrev(t.params.speed,!0,!0),p("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?l():(a=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),p("autoplay")):(a=t.slidePrev(t.params.speed,!0,!0),p("autoplay")):t.params.loop?(t.loopFix(),a=t.slideNext(t.params.speed,!0,!0),p("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?l():(a=t.slideTo(0,t.params.speed,!0,!0),p("autoplay")):(a=t.slideNext(t.params.speed,!0,!0),p("autoplay")),(t.params.cssMode&&t.autoplay.running||!1===a)&&r()}),n)}function u(){return"undefined"===typeof e&&(!t.autoplay.running&&(t.autoplay.running=!0,p("autoplayStart"),r(),!0))}function l(){return!!t.autoplay.running&&("undefined"!==typeof e&&(e&&(clearTimeout(e),e=void 0),t.autoplay.running=!1,p("autoplayStop"),!0))}function d(a){t.autoplay.running&&(t.autoplay.paused||(e&&clearTimeout(e),t.autoplay.paused=!0,0!==a&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((a=>{t.$wrapperEl[0].addEventListener(a,c)})):(t.autoplay.paused=!1,r())))}function y(){const a=(0,n.Me)();"hidden"===a.visibilityState&&t.autoplay.running&&d(),"visible"===a.visibilityState&&t.autoplay.paused&&(r(),t.autoplay.paused=!1)}function c(a){t&&!t.destroyed&&t.$wrapperEl&&a.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((a=>{t.$wrapperEl[0].removeEventListener(a,c)})),t.autoplay.paused=!1,t.autoplay.running?r():l())}function m(){t.params.autoplay.disableOnInteraction?l():(p("autoplayPause"),d()),["transitionend","webkitTransitionEnd"].forEach((a=>{t.$wrapperEl[0].removeEventListener(a,c)}))}function f(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,p("autoplayResume"),r())}t.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(t.params.autoplay.enabled){u();(0,n.Me)().addEventListener("visibilitychange",y),t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",m),t.$el.on("mouseleave",f))}})),s("beforeTransitionStart",((a,e,n)=>{t.autoplay.running&&(n||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(e):l())})),s("sliderFirstMove",(()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?l():d())})),s("touchEnd",(()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&r()})),s("destroy",(()=>{t.$el.off("mouseenter",m),t.$el.off("mouseleave",f),t.autoplay.running&&l();(0,n.Me)().removeEventListener("visibilitychange",y)})),Object.assign(t.autoplay,{pause:d,run:r,start:u,stop:l})}},17090:function(a,e,t){t(64761)}}]);