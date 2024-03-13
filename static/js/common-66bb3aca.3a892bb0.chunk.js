"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[839],{32837:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(33618),o=n(20745),i=n(58527);function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=(0,o.i)(e)?e:(0,r.B)(e);return(0,i.b8)("",a,t,n),{stop:()=>a.stop(),isAnimating:()=>a.isAnimating()}}},49233:function(e,t,n){function r(e){return"object"===typeof e&&"function"===typeof e.start}n.d(t,{H:function(){return r}})},16494:function(e,t,n){n.d(t,{C:function(){return r}});const r=e=>Array.isArray(e)},58527:function(e,t,n){n.d(t,{ev:function(){return R},b8:function(){return T}});var r=n(66797),o=n(9008),i=n(59389),a=n(8175),c=n(42461),s=n(697),u=n(41498);const l={linear:s.GE,easeIn:s.YQ,easeInOut:s.mZ,easeOut:s.Vv,circIn:s.Z7,circInOut:s.X7,circOut:s.Bn,backIn:s.G2,backInOut:s.XL,backOut:s.CG,anticipate:s.LU,bounceIn:s.h9,bounceInOut:s.yD,bounceOut:s.gJ},f=e=>{if(Array.isArray(e)){(0,c.k)(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,o]=e;return(0,u._)(t,n,r,o)}return"string"===typeof e?((0,c.k)(void 0!==l[e],"Invalid easing type '".concat(e,"'")),l[e]):e};var p=n(42346);const d=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!p.P.test(t)||t.startsWith("url(")));var m=n(16494);const y=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),v=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),h=()=>({type:"keyframes",ease:"linear",duration:.3}),g=e=>({type:"keyframes",duration:.8,values:e}),b={x:y,y:y,z:y,rotate:y,rotateX:y,rotateY:y,rotateZ:y,scaleX:v,scaleY:v,scale:v,opacity:h,backgroundColor:h,color:h,default:v};var C=n(91260),O=n(82759),x=n(75196);let w=!1;function E(e){var{ease:t,times:n,yoyo:o,flip:i,loop:s}=e,u=(0,r._T)(e,["ease","times","yoyo","flip","loop"]);const l=Object.assign({},u);return n&&(l.offset=n),u.duration&&(l.duration=(0,a.w)(u.duration)),u.repeatDelay&&(l.repeatDelay=(0,a.w)(u.repeatDelay)),t&&(l.ease=(e=>Array.isArray(e)&&"number"!==typeof e[0])(t)?t.map(f):f(t)),"tween"===u.type&&(l.type="keyframes"),(o||s||i)&&((0,c.K)(!w,"yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),w=!0,o?l.repeatType="reverse":s?l.repeatType="loop":i&&(l.repeatType="mirror"),l.repeat=s||o||i||u.repeat),"spring"!==u.type&&(l.type="keyframes"),l}function A(e,t){var n,r;return null!==(r=null!==(n=(R(e,t)||{}).delay)&&void 0!==n?n:e.delay)&&void 0!==r?r:0}function k(e,t,n){var o;return Array.isArray(t.to)&&(null!==(o=e.duration)&&void 0!==o||(e.duration=.8)),function(e){Array.isArray(e.to)&&null===e.to[0]&&(e.to=[...e.to],e.to[0]=e.from)}(t),function(e){var t=(0,r._T)(e,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(t).length}(e)||(e=Object.assign(Object.assign({},e),((e,t)=>{let n;return n=(0,m.C)(t)?g:b[e]||b.default,Object.assign({to:t},n(t))})(n,t.to))),Object.assign(Object.assign({},t),E(e))}function I(e,t,n,r,a){var s;const u=R(r,e);let l=null!==(s=u.from)&&void 0!==s?s:t.get();const f=d(e,n);"none"===l&&f&&"string"===typeof n?l=(0,C.T)(e,n):P(l)&&"string"===typeof n?l=j(n):!Array.isArray(n)&&P(n)&&"string"===typeof l&&(n=j(l));const p=d(e,l);return(0,c.K)(p===f,"You are trying to animate ".concat(e,' from "').concat(l,'" to "').concat(n,'". ').concat(l," is not an animatable value - to enable this animation set ").concat(l," to a value animatable to ").concat(n," via the `style` property.")),p&&f&&!1!==u.type?function(){const r={from:l,to:n,velocity:t.getVelocity(),onComplete:a,onUpdate:e=>t.set(e)};return"inertia"===u.type||"decay"===u.type?(0,o.I)(Object.assign(Object.assign({},r),u)):(0,i.j)(Object.assign(Object.assign({},k(u,r,e)),{onUpdate:e=>{var t;r.onUpdate(e),null===(t=u.onUpdate)||void 0===t||t.call(u,e)},onComplete:()=>{var e;r.onComplete(),null===(e=u.onComplete)||void 0===e||e.call(u)}}))}:function(){var e,r;const o=(0,x.Y)(n);return t.set(o),a(),null===(e=null===u||void 0===u?void 0:u.onUpdate)||void 0===e||e.call(u,o),null===(r=null===u||void 0===u?void 0:u.onComplete)||void 0===r||r.call(u),{stop:()=>{}}}}function P(e){return 0===e||"string"===typeof e&&0===parseFloat(e)&&-1===e.indexOf(" ")}function j(e){return"number"===typeof e?0:(0,C.T)("",e)}function R(e,t){return e[t]||e.default||e}function T(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return O.c.current&&(r={type:!1}),t.start((o=>{let i,c;const s=I(e,t,n,r,o),u=A(r,e),l=()=>c=s();return u?i=window.setTimeout(l,(0,a.w)(u)):l(),()=>{clearTimeout(i),null===c||void 0===c||c.stop()}}))}},70497:function(e,t,n){n.d(t,{M:function(){return g}});var r=n(47313),o=n(91984),i=n(97213),a=n(75358),c=n(9806),s=n(78998);class u extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l(e){let{children:t,isPresent:n}=e;const o=(0,r.useId)(),i=(0,r.useRef)(null),a=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{var e;const{width:t,height:r,top:c,left:s}=a.current;if(n||!i.current||!t||!r)return;i.current.dataset.motionPopId=o;const u=document.createElement("style");return document.head.appendChild(u),null===(e=u.sheet)||void 0===e||e.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(r,"px !important;\n            top: ").concat(c,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(u)}}),[n]),r.createElement(u,{isPresent:n,childRef:i,sizeRef:a},r.cloneElement(t,{ref:i}))}const f=e=>{let{children:t,initial:n,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:u,mode:f}=e;const d=(0,s.h)(p),m=(0,r.useId)(),y=(0,r.useMemo)((()=>({id:m,initial:n,isPresent:o,custom:a,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;null===i||void 0===i||i()},register:e=>(d.set(e,!1),()=>d.delete(e))})),u?void 0:[o]);return(0,r.useMemo)((()=>{d.forEach(((e,t)=>d.set(t,!1)))}),[o]),r.useEffect((()=>{!o&&!d.size&&(null===i||void 0===i||i())}),[o]),"popLayout"===f&&(t=r.createElement(l,{isPresent:o},t)),r.createElement(c.O.Provider,{value:y},t)};function p(){return new Map}var d=n(32492),m=n(40700),y=n(58829),v=n(60109);const h=e=>e.key||"";const g=e=>{let{children:t,custom:n,initial:c=!0,onExitComplete:s,exitBeforeEnter:u,presenceAffectsLayout:l=!0,mode:p="sync"}=e;u&&(p="wait",(0,v.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[g]=(0,i.N)();const b=(0,r.useContext)(d.p).forceRender;b&&(g=b);const C=(0,a.t)(),O=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(t);let x=O;const w=new Set,E=(0,r.useRef)(x),A=(0,r.useRef)(new Map).current,k=(0,r.useRef)(!0);if((0,m.L)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const n=h(e);t.set(n,e)}))}(O,A),E.current=x})),(0,y.z)((()=>{k.current=!0,A.clear(),w.clear()})),k.current)return r.createElement(r.Fragment,null,x.map((e=>r.createElement(f,{key:h(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:l,mode:p},e))));x=[...x];const I=E.current.map(h),P=O.map(h),j=I.length;for(let r=0;r<j;r++){const e=I[r];-1===P.indexOf(e)&&w.add(e)}return"wait"===p&&w.size&&(x=[]),w.forEach((e=>{if(-1!==P.indexOf(e))return;const t=A.get(e);if(!t)return;const o=I.indexOf(e);x.splice(o,0,r.createElement(f,{key:h(t),isPresent:!1,onExitComplete:()=>{A.delete(e),w.delete(e);const t=E.current.findIndex((t=>t.key===e));if(E.current.splice(t,1),!w.size){if(E.current=O,!1===C.current)return;g(),s&&s()}},custom:n,presenceAffectsLayout:l,mode:p},t))})),x=x.map((e=>{const t=e.key;return w.has(t)?e:r.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:l,mode:p},e)})),"production"!==o.O&&"wait"===p&&x.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,w.size?x:x.map((e=>(0,r.cloneElement)(e))))}},39675:function(e,t,n){n.d(t,{oO:function(){return i}});var r=n(47313),o=n(9806);function i(){const e=(0,r.useContext)(o.O);if(null===e)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,a=(0,r.useId)();(0,r.useEffect)((()=>i(a)),[]);return!t&&n?[!1,()=>null===n||void 0===n?void 0:n(a)]:[!0]}},32492:function(e,t,n){n.d(t,{p:function(){return r}});const r=(0,n(47313).createContext)({})},9925:function(e,t,n){n.d(t,{u:function(){return r}});const r=(0,n(47313).createContext)({strict:!1})},48473:function(e,t,n){n.d(t,{_:function(){return r}});const r=(0,n(47313).createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"})},16296:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(47313),o=n(36901),i=n(30745);function a(e){const{initial:t,animate:n}=function(e,t){if((0,i.O6)(e)){const{initial:t,animate:n}=e;return{initial:!1===t||(0,i.$L)(t)?t:void 0,animate:(0,i.$L)(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,r.useContext)(o.v));return(0,r.useMemo)((()=>({initial:t,animate:n})),[c(t),c(n)])}function c(e){return Array.isArray(e)?e.join(" "):e}},36901:function(e,t,n){n.d(t,{B:function(){return i},v:function(){return o}});var r=n(47313);const o=(0,r.createContext)({});function i(){return(0,r.useContext)(o).visualElement}},9806:function(e,t,n){n.d(t,{O:function(){return r}});const r=(0,n(47313).createContext)(null)},24714:function(e,t,n){n.d(t,{g:function(){return r}});const r=(0,n(47313).createContext)({})}}]);