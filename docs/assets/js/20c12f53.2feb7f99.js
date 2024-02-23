"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"recycling",title:"Recycling",slug:"/recycling"},l=void 0,c={unversionedId:"fundamentals/recycling",id:"fundamentals/recycling",title:"Recycling",description:"One important thing to understand is how FlashList works under the hood. When an item gets out of the viewport, instead of being destroyed, the component is re-rendered with a different item prop. For example, if you make use of useState in a reused component, you may see state values that were set for that component when it was associated with a different item in the list, and would then need to reset any previously set state when a new item is rendered:",source:"@site/docs/fundamentals/recycling.md",sourceDirName:"fundamentals",slug:"/recycling",permalink:"/flash-list/docs/recycling",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/fundamentals/recycling.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708722239,formattedLastUpdatedAt:"2/23/2024",frontMatter:{id:"recycling",title:"Recycling",slug:"/recycling"},sidebar:"autoSidebar",previous:{title:"Writing performant components",permalink:"/flash-list/docs/fundamentals/performant-components"},next:{title:"LayoutAnimation",permalink:"/flash-list/docs/guides/layout-animation"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One important thing to understand is how ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")," works under the hood. When an item gets out of the viewport, instead of being destroyed, the component is re-rendered with a different ",(0,i.kt)("inlineCode",{parentName:"p"},"item")," prop. For example, if you make use of ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," in a reused component, you may see state values that were set for that component when it was associated with a different item in the list, and would then need to reset any previously set state when a new item is rendered:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyItem = ({ item }) => {\n  const lastItemId = useRef(item.someId);\n  const [liked, setLiked] = useState(item.liked);\n  if (item.someId !== lastItemId.current) {\n    lastItemId.current = item.someId;\n    setLiked(item.liked);\n  }\n\n  return (\n    <Pressable onPress={() => setLiked(true)}>\n      <Text>{liked}</Text>\n    </Pressable>\n  );\n};\n")),(0,i.kt)("p",null,"This follows advice in the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops"},"React Hooks FAQ on implementing getDerivedStateFromProps"),". Ideally your component hierarchy returned from ",(0,i.kt)("a",{parentName:"p",href:"/flash-list/docs/usage#renderitem"},"renderItem")," should not make use of ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," for best performance."),(0,i.kt)("p",null,"When optimizing your item component, try to ensure as few things as possible have to be re-rendered and recomputed when recycling."))}p.isMDXComponent=!0}}]);