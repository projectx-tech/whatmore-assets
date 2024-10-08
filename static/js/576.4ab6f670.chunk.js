"use strict";(self.webpackChunkwhatmorelive_react=self.webpackChunkwhatmorelive_react||[]).push([[576],{5098:function(e,r,t){t.d(r,{Ee:function(){return c}});var a=t(7313),n=t(7653),i=t(7872),s=t(4959);var o=(0,n.Gp)((function(e,r){const{htmlWidth:t,htmlHeight:n,alt:i,...s}=e;return a.createElement("img",{width:t,height:n,ref:r,alt:i,...s})}));i.Ts&&(o.displayName="NativeImage");var c=(0,n.Gp)((function(e,r){const{fallbackSrc:t,fallback:c,src:l,srcSet:m,align:d,fit:p,loading:u,ignoreFallback:f,crossOrigin:g,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:y,...v}=e,x=null!=u||f||!(void 0!==t||void 0!==c),k=function(e){const{loading:r,src:t,srcSet:n,onLoad:i,onError:o,crossOrigin:c,sizes:l,ignoreFallback:m}=e,[d,p]=(0,a.useState)("pending");(0,a.useEffect)((()=>{p(t?"loading":"pending")}),[t]);const u=(0,a.useRef)(),f=(0,a.useCallback)((()=>{if(!t)return;g();const e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),l&&(e.sizes=l),r&&(e.loading=r),e.onload=e=>{g(),p("loaded"),null==i||i(e)},e.onerror=e=>{g(),p("failed"),null==o||o(e)},u.current=e}),[t,c,n,l,i,o,r]),g=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,s.Gw)((()=>{if(!m)return"loading"===d&&f(),()=>{g()}}),[d,f,m]),m?"loaded":d}({...e,ignoreFallback:x}),_=((e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r)(k,h),b={ref:r,objectFit:p,objectPosition:d,...x?v:(0,i.CE)(v,["onError","onLoad"])};return _?c||a.createElement(n.m$.img,{as:o,className:"chakra-image__placeholder",src:t,...b}):a.createElement(n.m$.img,{as:o,src:l,srcSet:m,crossOrigin:g,loading:u,referrerPolicy:y,className:"chakra-image",...b})}));(0,n.Gp)(((e,r)=>a.createElement(n.m$.img,{ref:r,as:o,className:"chakra-image",...e})));i.Ts&&(c.displayName="Image")},3271:function(e,r,t){t.d(r,{oM:function(){return m},Ct:function(){return d},xu:function(){return p},M5:function(){return g},Cd:function(){return f},iz:function(){return x},kC:function(){return k},Ug:function(){return X},X6:function(){return N},rU:function(){return E},bK:function(){return u},Kq:function(){return R},xv:function(){return q}});var a=t(7313),n=t(7653),i=t(7872),s=t(190),o={path:a.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},a.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),a.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),a.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},c=(0,n.Gp)(((e,r)=>{const{as:t,viewBox:s,color:c="currentColor",focusable:l=!1,children:m,className:d,__css:p,...u}=e,f={ref:r,focusable:l,className:(0,i.cx)("chakra-icon",d),__css:{w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:c,...p}},g=null!==s&&void 0!==s?s:o.viewBox;if(t&&"string"!==typeof t)return a.createElement(n.m$.svg,{as:t,...f,...u});const h=null!==m&&void 0!==m?m:o.path;return a.createElement(n.m$.svg,{verticalAlign:"middle",viewBox:g,...f,...u},h)}));i.Ts&&(c.displayName="Icon");var l=t(87),m=(0,n.Gp)((function(e,r){const{ratio:t=4/3,children:s,className:o,...c}=e,l=a.Children.only(s),m=(0,i.cx)("chakra-aspect-ratio",o);return a.createElement(n.m$.div,{ref:r,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(t,(e=>"".concat(1/e*100,"%")))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...c},l)}));i.Ts&&(m.displayName="AspectRatio");var d=(0,n.Gp)((function(e,r){const t=(0,n.mq)("Badge",e),{className:o,...c}=(0,s.Lr)(e);return a.createElement(n.m$.span,{ref:r,className:(0,i.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...t}})}));i.Ts&&(d.displayName="Badge");var p=(0,n.m$)("div");i.Ts&&(p.displayName="Box");var u=(0,n.Gp)((function(e,r){const{size:t,centerContent:n=!0,...i}=e,s=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.createElement(p,{ref:r,boxSize:t,__css:{...s,flexShrink:0,flexGrow:0},...i})}));i.Ts&&(u.displayName="Square");var f=(0,n.Gp)((function(e,r){const{size:t,...n}=e;return a.createElement(u,{size:t,ref:r,borderRadius:"9999px",...n})}));i.Ts&&(f.displayName="Circle");var g=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(g.displayName="Center");var h={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},y=((0,n.Gp)((function(e,r){const{axis:t="both",...i}=e;return a.createElement(n.m$.div,{ref:r,__css:h[t],...i,position:"absolute"})})),(0,n.Gp)((function(e,r){const t=(0,n.mq)("Code",e),{className:o,...c}=(0,s.Lr)(e);return a.createElement(n.m$.code,{ref:r,className:(0,i.cx)("chakra-code",e.className),...c,__css:{display:"inline-block",...t}})})));i.Ts&&(y.displayName="Code");var v=(0,n.Gp)((function(e,r){const{className:t,centerContent:o,...c}=(0,s.Lr)(e),l=(0,n.mq)("Container",e);return a.createElement(n.m$.div,{ref:r,className:(0,i.cx)("chakra-container",t),...c,__css:{...l,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}));i.Ts&&(v.displayName="Container");var x=(0,n.Gp)((function(e,r){const{borderLeftWidth:t,borderBottomWidth:o,borderTopWidth:c,borderRightWidth:l,borderWidth:m,borderStyle:d,borderColor:p,...u}=(0,n.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:h,...y}=(0,s.Lr)(e),v={vertical:{borderLeftWidth:t||l||m||"1px",height:"100%"},horizontal:{borderBottomWidth:o||c||m||"1px",width:"100%"}};return a.createElement(n.m$.hr,{ref:r,"aria-orientation":g,...y,__css:{...u,border:"0",borderColor:p,borderStyle:d,...v[g],...h},className:(0,i.cx)("chakra-divider",f)})}));i.Ts&&(x.displayName="Divider");var k=(0,n.Gp)((function(e,r){const{direction:t,align:i,justify:s,wrap:o,basis:c,grow:l,shrink:m,...d}=e,p={display:"flex",flexDirection:t,alignItems:i,justifyContent:s,flexWrap:o,flexBasis:c,flexGrow:l,flexShrink:m};return a.createElement(n.m$.div,{ref:r,__css:p,...d})}));i.Ts&&(k.displayName="Flex");var _=(0,n.Gp)((function(e,r){const{templateAreas:t,gap:i,rowGap:s,columnGap:o,column:c,row:l,autoFlow:m,autoRows:d,templateRows:p,autoColumns:u,templateColumns:f,...g}=e,h={display:"grid",gridTemplateAreas:t,gridGap:i,gridRowGap:s,gridColumnGap:o,gridAutoColumns:u,gridColumn:c,gridRow:l,gridAutoFlow:m,gridAutoRows:d,gridTemplateRows:p,gridTemplateColumns:f};return a.createElement(n.m$.div,{ref:r,__css:h,...g})}));function b(e){return(0,i.XQ)(e,(e=>"auto"===e?"auto":"span ".concat(e,"/span ").concat(e)))}i.Ts&&(_.displayName="Grid");(0,n.Gp)((function(e,r){const{area:t,colSpan:s,colStart:o,colEnd:c,rowEnd:l,rowSpan:m,rowStart:d,...p}=e,u=(0,i.YU)({gridArea:t,gridColumn:b(s),gridRow:b(m),gridColumnStart:o,gridColumnEnd:c,gridRowStart:d,gridRowEnd:l});return a.createElement(n.m$.div,{ref:r,__css:u,...p})}));var N=(0,n.Gp)((function(e,r){const t=(0,n.mq)("Heading",e),{className:o,...c}=(0,s.Lr)(e);return a.createElement(n.m$.h2,{ref:r,className:(0,i.cx)("chakra-heading",e.className),...c,__css:t})}));i.Ts&&(N.displayName="Heading");(0,n.Gp)((function(e,r){const t=(0,n.mq)("Mark",e),i=(0,s.Lr)(e);return a.createElement(p,{ref:r,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...t}})}));var w=(0,n.Gp)((function(e,r){const t=(0,n.mq)("Kbd",e),{className:o,...c}=(0,s.Lr)(e);return a.createElement(n.m$.kbd,{ref:r,className:(0,i.cx)("chakra-kbd",o),...c,__css:{fontFamily:"mono",...t}})}));i.Ts&&(w.displayName="Kbd");var E=(0,n.Gp)((function(e,r){const t=(0,n.mq)("Link",e),{className:o,isExternal:c,...l}=(0,s.Lr)(e);return a.createElement(n.m$.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:r,className:(0,i.cx)("chakra-link",o),...l,__css:t})}));i.Ts&&(E.displayName="Link");(0,n.Gp)((function(e,r){const{isExternal:t,target:s,rel:o,className:c,...l}=e;return a.createElement(n.m$.a,{...l,ref:r,className:(0,i.cx)("chakra-linkbox__overlay",c),rel:t?"noopener noreferrer":o,target:t?"_blank":s,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,n.Gp)((function(e,r){const{className:t,...s}=e;return a.createElement(n.m$.div,{ref:r,position:"relative",...s,className:(0,i.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[T,G]=(0,l.kr)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),S=(0,n.Gp)((function(e,r){const t=(0,n.jC)("List",e),{children:i,styleType:o="none",stylePosition:c,spacing:m,...d}=(0,s.Lr)(e),p=(0,l.WR)(i),u=m?{"& > *:not(style) ~ *:not(style)":{mt:m}}:{};return a.createElement(T,{value:t},a.createElement(n.m$.ul,{ref:r,listStyleType:o,listStylePosition:c,role:"list",__css:{...t.container,...u},...d},p))}));i.Ts&&(S.displayName="List");var C=(0,n.Gp)(((e,r)=>{const{as:t,...n}=e;return a.createElement(S,{ref:r,as:"ol",styleType:"decimal",marginStart:"1em",...n})}));i.Ts&&(C.displayName="OrderedList");var L=(0,n.Gp)((function(e,r){const{as:t,...n}=e;return a.createElement(S,{ref:r,as:"ul",styleType:"initial",marginStart:"1em",...n})}));i.Ts&&(L.displayName="UnorderedList");var $=(0,n.Gp)((function(e,r){const t=G();return a.createElement(n.m$.li,{ref:r,...e,__css:t.item})}));i.Ts&&($.displayName="ListItem");var W=(0,n.Gp)((function(e,r){const t=G();return a.createElement(c,{ref:r,role:"presentation",...e,__css:t.icon})}));i.Ts&&(W.displayName="ListIcon");var B=(0,n.Gp)((function(e,r){const{columns:t,spacingX:s,spacingY:o,spacing:c,minChildWidth:l,...m}=e,d=(0,n.Fg)(),p=l?function(e,r){return(0,i.XQ)(e,(e=>{const t=(0,n.LP)("sizes",e,(a=e,(0,i.hj)(a)?"".concat(a,"px"):a))(r);var a;return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax(".concat(t,", 1fr))")}))}(l,d):(u=t,(0,i.XQ)(u,(e=>(0,i.Ft)(e)?null:"repeat(".concat(e,", minmax(0, 1fr))"))));var u;return a.createElement(_,{ref:r,gap:c,columnGap:s,rowGap:o,templateColumns:p,...m})}));i.Ts&&(B.displayName="SimpleGrid");var j=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(j.displayName="Spacer");var I="& > *:not(style) ~ *:not(style)";var z=e=>a.createElement(n.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}}),R=(0,n.Gp)(((e,r)=>{const{isInline:t,direction:s,align:o,justify:c,spacing:m="0.5rem",wrap:d,children:p,divider:u,className:f,shouldWrapChildren:g,...h}=e,y=t?"row":null!==s&&void 0!==s?s:"column",v=(0,a.useMemo)((()=>function(e){const{spacing:r,direction:t}=e,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:t,[I]:(0,i.XQ)(t,(e=>a[e]))}}({direction:y,spacing:m})),[y,m]),x=(0,a.useMemo)((()=>function(e){const{spacing:r,direction:t}=e,a={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(t,(e=>a[e]))}}({spacing:m,direction:y})),[m,y]),k=!!u,_=!g&&!k,b=(0,l.WR)(p),N=_?b:b.map(((e,r)=>{const t="undefined"!==typeof e.key?e.key:r,n=r+1===b.length,i=g?a.createElement(z,{key:t},e):e;if(!k)return i;const s=(0,a.cloneElement)(u,{__css:x}),o=n?null:s;return a.createElement(a.Fragment,{key:t},i,o)})),w=(0,i.cx)("chakra-stack",f);return a.createElement(n.m$.div,{ref:r,display:"flex",alignItems:o,justifyContent:c,flexDirection:v.flexDirection,flexWrap:d,className:w,__css:k?{}:{[I]:v[I]},...h},N)}));i.Ts&&(R.displayName="Stack");var X=(0,n.Gp)(((e,r)=>a.createElement(R,{align:"center",...e,direction:"row",ref:r})));i.Ts&&(X.displayName="HStack");var F=(0,n.Gp)(((e,r)=>a.createElement(R,{align:"center",...e,direction:"column",ref:r})));i.Ts&&(F.displayName="VStack");var q=(0,n.Gp)((function(e,r){const t=(0,n.mq)("Text",e),{className:o,align:c,decoration:l,casing:m,...d}=(0,s.Lr)(e),p=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.createElement(n.m$.p,{ref:r,className:(0,i.cx)("chakra-text",e.className),...p,...d,__css:t})}));function A(e){return"number"===typeof e?"".concat(e,"px"):e}i.Ts&&(q.displayName="Text");var M=(0,n.Gp)((function(e,r){const{spacing:t="0.5rem",spacingX:o,spacingY:c,children:l,justify:m,direction:d,align:p,className:u,shouldWrapChildren:f,...g}=e,h=(0,a.useMemo)((()=>{const{spacingX:e=t,spacingY:r=t}={spacingX:o,spacingY:c};return{"--chakra-wrap-x-spacing":r=>(0,i.XQ)(e,(e=>A((0,s.fr)("space",e)(r)))),"--chakra-wrap-y-spacing":e=>(0,i.XQ)(r,(r=>A((0,s.fr)("space",r)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:m,alignItems:p,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[t,o,c,m,p,d]),y=f?a.Children.map(l,((e,r)=>a.createElement(O,{key:r},e))):l;return a.createElement(n.m$.div,{ref:r,className:(0,i.cx)("chakra-wrap",u),overflow:"hidden",...g},a.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:h},y))}));i.Ts&&(M.displayName="Wrap");var O=(0,n.Gp)((function(e,r){const{className:t,...s}=e;return a.createElement(n.m$.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",t),...s})}));i.Ts&&(O.displayName="WrapItem")},168:function(e,r,t){function a(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,{Z:function(){return a}})}}]);