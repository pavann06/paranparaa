(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36136,75715],{85073:(e,s,r)=>{Promise.resolve().then(r.bind(r,92332)),Promise.resolve().then(r.bind(r,44285)),Promise.resolve().then(r.bind(r,80547)),Promise.resolve().then(r.t.bind(r,48173,23)),Promise.resolve().then(r.t.bind(r,87970,23))},80547:(e,s,r)=>{"use strict";r.d(s,{default:()=>m});var i=r(95155),a=r(5164),l=r(12115),t=r(5565),n=r(24334),c=r(48173),o=r.n(c);let d=[{name:"All works",category:"all"},{name:"Branding",category:"branding"},{name:"Design",category:"design"},{name:"Development",category:"development"}];function m(){let[e,s]=(0,l.useState)("all"),c=(0,l.useRef)(),m=(0,l.useRef)(),h=async()=>{let e=(await r.e(67284).then(r.t.bind(r,67284,23))).default,s=(await r.e(19125).then(r.t.bind(r,19125,23))).default;m.current=new e(c.current,{itemSelector:".work-item",layoutMode:"masonry"}),s(c.current).on("progress",function(){m.current.layout()})},w=e=>{s(e),m.current.arrange({filter:"all"==e?"*":"."+e})};return(0,l.useEffect)(()=>{h()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-center mb-60 mb-sm-40",children:(0,i.jsx)("div",{className:"works-filter works-filter-slick",children:d.map((s,r)=>(0,i.jsx)("a",{onClick:()=>w(s.category),className:"filter ".concat(e==s.category?"active":""),children:s.name},r))})}),(0,i.jsx)("ul",{className:"works-grid work-grid-3 work-grid-gut-xl work-grid-hover-alt work-grid-round masonry",ref:c,children:(0,i.jsxs)(n.Z2,{children:[a.rO.map((e,s)=>(0,i.jsx)("li",{className:"work-item ".concat(e.categories.join(" ")," ").concat(1==s?"mt-80 mt-sm-0":""),children:e.isLightbox?(0,i.jsx)(n.q7,{original:e.imgSrc,thumbnail:e.imgSrc,width:520,height:618,children:s=>{let{ref:r,open:a}=s;return(0,i.jsxs)("a",{onClick:a,className:"work-lightbox-link mfp-image",children:[(0,i.jsxs)("div",{className:"work-img",children:[(0,i.jsx)("div",{className:"work-img-bg wow-p scalexIn"}),(0,i.jsx)(t.default,{ref:r,src:e.imgSrc,width:520,height:618,alt:e.imgAlt,className:"wow-p fadeIn","data-wow-delay":"1s"})]}),(0,i.jsxs)("div",{className:"work-intro",children:[(0,i.jsx)("h3",{className:"work-title",children:e.title}),(0,i.jsx)("div",{className:"work-descr",children:e.description})]})]})}}):(0,i.jsxs)(o(),{href:"/slick-portfolio-single/".concat(e.id),className:"work-ext-link",children:[(0,i.jsxs)("div",{className:"work-img",children:[(0,i.jsx)("div",{className:"work-img-bg wow-p scalexIn"}),(0,i.jsx)(t.default,{src:e.imgSrc,width:520,height:618,alt:e.imgAlt,className:"wow-p fadeIn","data-wow-delay":"1s"})]}),(0,i.jsxs)("div",{className:"work-intro",children:[(0,i.jsx)("h3",{className:"work-title",children:e.title}),(0,i.jsx)("div",{className:"work-descr",children:e.description})]})]})},s))," "]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[42958,69465,6711,5164,81144,28441,11517,77358],()=>s(85073)),_N_E=e.O()}]);