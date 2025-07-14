import{r as o,j as s}from"./index-DJEkgNnS.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase()),l=t=>{const e=w(t);return e.charAt(0).toUpperCase()+e.slice(1)},d=(...t)=>t.filter((e,r,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===r).join(" ").trim(),g=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:n,iconNode:u,...i},h)=>o.createElement("svg",{ref:h,...y,width:e,height:e,stroke:t,strokeWidth:a?Number(r)*24/Number(e):r,className:d("lucide",c),...!n&&!g(i)&&{"aria-hidden":"true"},...i},[...u.map(([p,x])=>o.createElement(p,x)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>{const r=o.forwardRef(({className:a,...c},n)=>o.createElement(v,{ref:n,iconNode:e,className:d(`lucide-${f(l(t))}`,`lucide-${t}`,a),...c}));return r.displayName=l(t),r};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],j=m("clock",C);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],b=m("hard-hat",k);function A(){return s.jsx("div",{className:"min-h-screen  flex  items-center justify-center bg-base-100 text-center px-4",children:s.jsxs("div",{className:"max-w-md space-y-4",children:[s.jsx("div",{className:"text-warning",children:s.jsx(b,{className:"w-16 h-16 mx-auto"})}),s.jsx("h1",{className:"text-3xl font-bold",children:"Page en cours de développement"}),s.jsx("p",{className:"text-base-content",children:"Cette fonctionnalité est actuellement en construction. Nous travaillons dur pour la rendre disponible bientôt."}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-base-content",children:[s.jsx(j,{className:"w-4 h-4"}),s.jsx("span",{children:"Merci de votre patience."})]})]})})}export{A as default};
