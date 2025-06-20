(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{4027:function(e,r,n){"use strict";n.r(r),n.d(r,{CartProvider:function(){return CartProvider},useCart:function(){return useCart}});var c=n(7437),l=n(2265);let d=(0,l.createContext)(void 0),m="tanoxiCart";function CartProvider(e){let{children:r}=e,[n,f]=(0,l.useState)(!0),[g,h]=(0,l.useState)([]);(0,l.useEffect)(()=>{let e=localStorage.getItem(m);if(e)try{h(JSON.parse(e))}catch(e){console.error("Error parsing saved cart:",e)}f(!1)},[]),(0,l.useEffect)(()=>{n||localStorage.setItem(m,JSON.stringify(g))},[g,n]);let removeFromCart=e=>{h(r=>r.filter(r=>r.id!==e))};return n?null:(0,c.jsx)(d.Provider,{value:{items:g,addToCart:e=>{h(r=>{let n=r.find(r=>r.id===e.id);return n?r.map(r=>r.id===e.id?{...r,quantity:r.quantity+(e.quantity||1)}:r):[...r,{...e,quantity:e.quantity||1}]})},removeFromCart,clearCart:()=>{h([])},updateQuantity:(e,r)=>{if(r<1){removeFromCart(e);return}h(n=>n.map(n=>n.id===e?{...n,quantity:r}:n))},isLoading:n},children:r})}function useCart(){let e=(0,l.useContext)(d);if(void 0===e)throw Error("useCart must be used within a CartProvider");return e}},6470:function(e,r,n){"use strict";n.r(r),n.d(r,{LanguageProvider:function(){return LanguageProvider},useLanguage:function(){return useLanguage}});var c=n(7437),l=n(2265);let d=(0,l.createContext)(void 0);function LanguageProvider(e){let{children:r}=e,[n,m]=(0,l.useState)(!0),[f,g]=(0,l.useState)("en");return((0,l.useEffect)(()=>{let e=localStorage.getItem("language");e&&g(e),m(!1)},[]),n)?null:(0,c.jsx)(d.Provider,{value:{language:f,setLanguage:e=>{g(e),localStorage.setItem("language",e)},isLoading:n},children:r})}function useLanguage(){let e=(0,l.useContext)(d);if(void 0===e)throw Error("useLanguage must be used within a LanguageProvider");return e}},2108:function(e,r,n){"use strict";n.d(r,{T:function(){return useTranslations}});var c=n(6470),l=JSON.parse('{"common":{"home":"Home","products":"Products","about":"About","contact":"Contact","cart":"Cart","addToCart":"Add to Cart","contactUs":"Contact Us","backToProducts":"Back to Products"},"home":{"hero":{"title":"Welcome to Tanoxi Technology","subtitle":"We are a research and development team from HKUST(GZ), dedicated to advancing gallium oxide materials and devices. With original innovations, we aim to create China’s own fourth-generation semiconductor solutions.","browseProducts":"Browse Products"},"featuredCategories":{"title":"Featured Categories","viewProducts":"View Products"},"whyChooseUs":{"title":"Why Choose Us","quality":{"title":"Quality Products","description":"We ensure all our products meet the highest quality standards"},"support":{"title":"24/7 Support","description":"Our customer support team is always ready to help you"},"prices":{"title":"Best Prices","description":"Competitive prices on all our products"}}},"products":{"categories":"Categories","all":"All","addedToCart":"%s added to cart!","categoryNames":{"Electronics":"Electronics","Accessories":"Accessories"},"keyFeatures":"Key Features","specifications":"Specifications"},"about":{"title":"About Tanoxi Technology","introduction":"In 2022, we founded Tanoxi Technology in Nansha, the heart of the Guangdong-Hong Kong-Macao Greater Bay Area. Powered by the innovation engine of HKUST(GZ), we unite top global talent to focus on fourth-generation wide bandgap semiconductor technologies.","commitment":"Tanoxi Technology is committed to independent innovation. We have filed seven core technology patents, covering key processes such as gallium oxide epitaxial growth, ion implantation doping, and device structure design.","mission":{"title":"Our Mission","description":"At Tanoxi Technology, our mission is to bring gallium oxide semiconductor technology from lab to industry—and to the world. Driven by innovation, connected by technology—Tanoxi Technology is pioneering the future of semiconductors!"},"vision":{"title":"Our Vision","description":"We hope to drive revolutionary applications of gallium oxide in next-generation semiconductor technologies."},"values":{"title":"Our Core Values","quality":{"title":"Quality","description":"We never compromise on product quality"},"integrity":{"title":"Integrity","description":"We conduct business with the highest ethical standards"},"customerFirst":{"title":"Customer First","description":"Customer satisfaction is our top priority"},"innovation":{"title":"Innovation","description":"We continuously strive to improve and innovate"}},"team":{"title":"Our Team","members":{"member1":{"name":"Sarah Chen","role":"Chief Executive Officer & Founder"},"member2":{"name":"Michael Zhang","role":"Operations Manager"},"member3":{"name":"Emily Wang","role":"Customer Relations Director"}}}},"contact":{"title":"Contact Us","form":{"name":"Name","email":"Email","phone":"Phone (optional)","message":"Message","send":"Send Message","success":"Thank you for your message. We will get back to you soon!"},"info":{"email":"Email","phone":"Phone","address":"Address"}},"cart":{"title":"Shopping Cart","empty":"Your Cart is Empty","browseProducts":"Browse our products and add something to your cart","orderSummary":"Order Summary","total":"Total","remove":"Remove","quantity":"Quantity","contactPurchase":"Contact for Purchase"}}'),d=JSON.parse('{"common":{"home":"首页","products":"产品","about":"关于我们","contact":"联系我们","cart":"购物车","addToCart":"加入购物车","contactUs":"联系我们","backToProducts":"返回产品页"},"home":{"hero":{"title":"欢迎来到 拓诺稀科技","subtitle":"我们是一支来自香港科技大学（广州）的研发团队，深耕氧化镓材料与器件研发，用原创技术打造属于中国的第四代半导体解决方案。","browseProducts":"浏览产品"},"featuredCategories":{"title":"特色分类","viewProducts":"查看产品"},"whyChooseUs":{"title":"为什么选择我们","quality":{"title":"优质产品","description":"我们确保所有产品都符合最高质量标准"},"support":{"title":"24/7 支持","description":"我们的客服团队随时为您提供帮助"},"prices":{"title":"最优价格","description":"所有产品都具有竞争力的价格"}}},"products":{"categories":"分类","all":"全部","addedToCart":"%s 已添加到购物车！","categoryNames":{"Electronics":"电子产品","Accessories":"配件"},"keyFeatures":"主要特点","specifications":"规格参数"},"about":{"title":"关于 Tanoxi Technology","introduction":"2022年，我们在粤港澳大湾区的核心——广州南沙，创立了拓诺稀科技。以香港科技大学（广州）为创新引擎，集结全球顶尖人才，深耕第四代宽禁带半导体技术领域。","commitment":"拓诺稀科技坚持自主研发，我们申请了7项核心技术专利，覆盖氧化镓外延生长工艺、离子注入掺杂方法及器件结构设计等关键环节。","mission":{"title":"我们的使命","description":"拓诺稀科技的使命，就是让氧化镓半导体技术真正走向产业，走向世界。以创新为驱动，以技术为桥梁——拓诺稀科技，引领未来半导体发展的新方向！"},"vision":{"title":"我们的愿景","description":"我们致力于推动氧化镓在新一代半导体技术中的革命性应用。"},"values":{"title":"我们的核心价值观","quality":{"title":"质量","description":"我们绝不在产品质量上妥协"},"integrity":{"title":"诚信","description":"我们以最高的道德标准开展业务"},"customerFirst":{"title":"客户至上","description":"客户满意是我们的首要任务"},"innovation":{"title":"创新","description":"我们不断努力改进和创新"}},"team":{"title":"我们的团队","members":{"member1":{"name":"陈萱","role":"首席执行官兼创始人"},"member2":{"name":"张明","role":"运营经理"},"member3":{"name":"王丽","role":"客户关系主管"}}}},"contact":{"title":"联系我们","form":{"name":"姓名","email":"电子邮箱","phone":"电话（可选）","message":"留言","send":"发送留言","success":"感谢您的留言，我们会尽快回复您！"},"info":{"email":"电子邮箱","phone":"电话","address":"地址"}},"cart":{"title":"购物车","empty":"购物车是空的","browseProducts":"浏览我们的产品并添加到购物车","orderSummary":"订单摘要","total":"总计","remove":"移除","quantity":"数量","contactPurchase":"联系购买"}}');function useTranslations(){let{language:e}=(0,c.useLanguage)(),r="en"===e?l:d;return{t:(e,n)=>{try{let c=e.split("."),l=r;for(let r of c)if(l=null==l?void 0:l[r],void 0===l)return console.warn("Translation key not found: ".concat(e)),e;if(n)return Object.entries(n).reduce((e,r)=>{let[n,c]=r;return e.replace("{".concat(n,"}"),c)},l);return l}catch(r){return console.error("Error translating key: ".concat(e),r),e}}}}},1933:function(e,r,n){"use strict";n.d(r,{R:function(){return c}});let c=[{id:1,translations:{en:{name:"Sample Product 1",description:"This is a detailed description of the product. It includes all the important features and specifications that a customer might want to know about.",features:["High-quality materials","Durable construction","Modern design","Multiple color options"],specifications:{Dimensions:"10 x 5 x 2 inches",Weight:"2 lbs",Material:"Premium quality",Warranty:"1 year"}},zh:{name:"示例产品 1",description:"这是产品的详细说明。包含客户可能想要了解的所有重要功能和规格。",features:["优质材料","耐用构造","现代设计","多种颜色选择"],specifications:{尺寸:"10 x 5 x 2 英寸",重量:"2 磅",材质:"优质材料",保修:"1 年"}}},price:99.99},{id:2,translations:{en:{name:"Sample Product 2",description:"This is a detailed description of product 2. It includes all the important features and specifications that a customer might want to know about.",features:["Premium design","Long-lasting battery","Compact size","Water resistant"],specifications:{Dimensions:"8 x 4 x 1.5 inches",Weight:"1.5 lbs",Material:"High-grade aluminum",Warranty:"2 years"}},zh:{name:"示例产品 2",description:"这是产品2的详细说明。包含客户可能想要了解的所有重要功能和规格。",features:["优质设计","持久续航","小巧尺寸","防水设计"],specifications:{尺寸:"8 x 4 x 1.5 英寸",重量:"1.5 磅",材质:"高级铝材",保修:"2 年"}}},price:149.99},{id:3,translations:{en:{name:"Sample Product 3",description:"This is a detailed description of product 3. It includes all the important features and specifications that a customer might want to know about.",features:["Smart features","Wireless connectivity","HD display","Voice control"],specifications:{Dimensions:"12 x 6 x 3 inches",Weight:"3 lbs",Material:"Premium plastic",Warranty:"18 months"}},zh:{name:"示例产品 3",description:"这是产品3的详细说明。包含客户可能想要了解的所有重要功能和规格。",features:["智能功能","无线连接","高清显示","语音控制"],specifications:{尺寸:"12 x 6 x 3 英寸",重量:"3 磅",材质:"优质塑料",保修:"18 个月"}}},price:199.99}]},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=n(2265),l=Symbol.for("react.element"),d=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),m=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var c,g={},h=null,y=null;for(c in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(y=r.ref),r)d.call(r,c)&&!f.hasOwnProperty(c)&&(g[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===g[c]&&(g[c]=r[c]);return{$$typeof:l,type:e,key:h,ref:y,props:g,_owner:m.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)},1396:function(e,r,n){e.exports=n(8326)},5925:function(e,r,n){"use strict";let c,l;n.d(r,{x7:function(){return Oe},Am:function(){return dist_c}});var d,m=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,o=(e,r)=>{let n="",c="",l="";for(let d in e){let m=e[d];"@"==d[0]?"i"==d[1]?n=d+" "+m+";":c+="f"==d[1]?o(m,d):d+"{"+o(m,"k"==d[1]?"":r)+"}":"object"==typeof m?c+=o(m,r?r.replace(/([^,])+/g,e=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):d):null!=m&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=o.p?o.p(d,m):d+":"+m+";")}return n+(r&&l?r+"{"+l+"}":l)+c},v={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,c,l)=>{var d;let m=s(e),f=v[m]||(v[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!v[f]){let r=m!==e?e:(e=>{let r,n,c=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?c.shift():r[3]?(n=r[3].replace(y," ").trim(),c.unshift(c[0][n]=c[0][n]||{})):c[0][r[1]]=r[2].replace(y," ").trim();return c[0]})(e);v[f]=o(l?{["@keyframes "+f]:r}:r,n?"":"."+f)}let b=n&&v.g?v.g:null;return n&&(v.g=v[f]),d=v[f],b?r.data=r.data.replace(b,d):-1===r.data.indexOf(d)&&(r.data=c?d+r.data:r.data+d),f},p=(e,r,n)=>e.reduce((e,c,l)=>{let d=r[l];if(d&&d.call){let e=d(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;d=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+c+(null==d?"":d)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let b,w,C,_=u.bind({k:1});function j(e,r){let n=this||{};return function(){let c=arguments;function a(l,d){let m=Object.assign({},l),f=m.className||a.className;n.p=Object.assign({theme:w&&w()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,c)+(f?" "+f:""),r&&(m.ref=d);let g=e;return e[0]&&(g=m.as||e,delete m.as),C&&g[0]&&C(m),b(g,m)}return r?r(a):a}}var W=e=>"function"==typeof e,dist_f=(e,r)=>W(e)?e(r):e,E=(c=0,()=>(++c).toString()),A=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},U=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return U(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:c}=r;return{...e,toasts:e.toasts.map(e=>e.id===c||void 0===c?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let l=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},P=[],T={toasts:[],pausedAt:void 0},dist_u=e=>{T=U(T,e),P.forEach(e=>{e(T)})},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[r,n]=(0,m.useState)(T),c=(0,m.useRef)(T);(0,m.useEffect)(()=>(c.current!==T&&n(T),P.push(n),()=>{let e=P.indexOf(n);e>-1&&P.splice(e,1)}),[]);let l=r.toasts.map(r=>{var n,c,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||(null==(n=e[r.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:r.duration||(null==(c=e[r.type])?void 0:c.duration)||(null==e?void 0:e.duration)||k[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},J=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),x=e=>(r,n)=>{let c=J(r,e,n);return dist_u({type:2,toast:c}),c.id},dist_c=(e,r)=>x("blank")(e,r);dist_c.error=x("error"),dist_c.success=x("success"),dist_c.loading=x("loading"),dist_c.custom=x("custom"),dist_c.dismiss=e=>{dist_u({type:3,toastId:e})},dist_c.remove=e=>dist_u({type:4,toastId:e}),dist_c.promise=(e,r,n)=>{let c=dist_c.loading(r.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let l=r.success?dist_f(r.success,e):void 0;return l?dist_c.success(l,{id:c,...n,...null==n?void 0:n.success}):dist_c.dismiss(c),e}).catch(e=>{let l=r.error?dist_f(r.error,e):void 0;l?dist_c.error(l,{id:c,...n,...null==n?void 0:n.error}):dist_c.dismiss(c)}),e};var K=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},X=()=>{dist_u({type:5,time:Date.now()})},S=new Map,N=1e3,ee=(e,r=N)=>{if(S.has(e))return;let n=setTimeout(()=>{S.delete(e),dist_u({type:4,toastId:e})},r);S.set(e,n)},O=e=>{let{toasts:r,pausedAt:n}=D(e);(0,m.useEffect)(()=>{if(n)return;let e=Date.now(),c=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_c.dismiss(r.id);return}return setTimeout(()=>dist_c.dismiss(r.id),n)});return()=>{c.forEach(e=>e&&clearTimeout(e))}},[r,n]);let c=(0,m.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),l=(0,m.useCallback)((e,n)=>{let{reverseOrder:c=!1,gutter:l=8,defaultPosition:d}=n||{},m=r.filter(r=>(r.position||d)===(e.position||d)&&r.height),f=m.findIndex(r=>r.id===e.id),g=m.filter((e,r)=>r<f&&e.visible).length;return m.filter(e=>e.visible).slice(...c?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+l,0)},[r]);return(0,m.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)ee(e.id,e.removeDelay);else{let r=S.get(e.id);r&&(clearTimeout(r),S.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:K,startPause:X,endPause:c,calculateOffset:l}}},I=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${z} 1s linear infinite;
`,R=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:c}=e;return void 0!==r?"string"==typeof r?m.createElement(Y,null,r):r:"blank"===n?null:m.createElement(V,null,m.createElement(H,{...c}),"loading"!==n&&m.createElement(Q,null,"error"===n?m.createElement(F,{...c}):m.createElement(G,{...c})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,et=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[c,l]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${_(c)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eo=m.memo(({toast:e,position:r,style:n,children:c})=>{let l=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},d=m.createElement(M,{toast:e}),f=m.createElement(ei,{...e.ariaProps},dist_f(e.message,e));return m.createElement(et,{className:e.className,style:{...l,...n,...e.style}},"function"==typeof c?c({icon:d,message:f}):m.createElement(m.Fragment,null,d,f))});d=m.createElement,o.p=void 0,b=d,w=void 0,C=void 0;var ve=({id:e,className:r,style:n,onHeightUpdate:c,children:l})=>{let d=m.useCallback(r=>{if(r){let i=()=>{c(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,c]);return m.createElement("div",{ref:d,className:r,style:n},l)},Ee=(e,r)=>{let n=e.includes("top"),c=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...c}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oe=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:c,children:l,containerStyle:d,containerClassName:f})=>{let{toasts:g,handlers:h}=O(n);return m.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...d},className:f,onMouseEnter:h.startPause,onMouseLeave:h.endPause},g.map(n=>{let d=n.position||r,f=Ee(d,h.calculateOffset(n,{reverseOrder:e,gutter:c,defaultPosition:r}));return m.createElement(ve,{id:n.id,key:n.id,onHeightUpdate:h.updateHeight,className:n.visible?er:"",style:f},"custom"===n.type?dist_f(n.message,n):l?l(n):m.createElement(eo,{toast:n,position:d}))}))}}}]);