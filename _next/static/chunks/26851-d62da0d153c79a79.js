"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26851],{18045:(e,t,s)=>{s.d(t,{default:()=>n});var a=s(95155),l=s(27847);function n(){return(0,a.jsxs)("div",{className:"container position-relative text-center pt-140 pb-80 pb-sm-50",children:[(0,a.jsx)("div",{className:"local-scroll link-to-top-2-wrap",onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:(0,a.jsx)("a",{href:"#top",className:"link-to-top-2",children:"Back to top"})}),(0,a.jsx)("div",{className:"footer-social-links mb-60",children:l.ze.map((e,t)=>(0,a.jsxs)("a",{href:e.href,title:"Facebook",rel:"noopener nofollow",target:"_blank",children:[(0,a.jsx)("span",{className:"visually-hidden",children:e.name}),(0,a.jsx)("i",{className:e.iconClass})]},t))}),(0,a.jsxs)("div",{className:"footer-text",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("a",{href:"https://themeforest.net/user/ib-themes/portfolio",children:["\xa9 IB-Themes ",new Date().getFullYear()]}),"."]}),(0,a.jsx)("div",{className:"footer-made",children:"Made with love for great people."})]})]})}s(12115)},6473:(e,t,s)=>{s.d(t,{default:()=>r});var a=s(95155),l=s(47906),n=s(89127),i=s(5565);function r(e){let{links:t}=e;return(0,a.jsxs)("div",{className:"main-nav-sub full-wrapper",children:[(0,a.jsx)("div",{className:"nav-logo-wrap local-scroll",children:(0,a.jsx)("a",{href:"#top",className:"logo font-alt",children:(0,a.jsx)(i.default,{src:"/assets/images/demo-elegant/logo-white.svg",alt:"Your Company Logo",width:170,height:12})})}),(0,a.jsxs)("div",{onClick:l.u,className:"mobile-nav",role:"button",tabIndex:0,children:[(0,a.jsx)("i",{className:"mobile-nav-icon"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Menu"})]}),(0,a.jsx)("div",{className:"inner-nav desktop-nav",children:(0,a.jsxs)("ul",{className:"clearlist scroll-nav local-scroll justify-content-end scrollspyLinks",children:[(0,a.jsx)(n.A,{links:t}),(0,a.jsx)("li",{className:"ms-3 me-2"}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://themeforest.net/user/ib-themes/portfolio",className:"opacity-1 no-hover",target:"_blank",children:(0,a.jsx)("span",{className:"btn btn-mod btn-small btn-border-w btn-circle","data-btn-animate":"y",children:(0,a.jsxs)("span",{className:"btn-animate-y",children:[(0,a.jsx)("span",{className:"btn-animate-y-1",children:"Buy Resonance"}),(0,a.jsx)("span",{className:"btn-animate-y-2","aria-hidden":"true",children:"Buy Resonance"})]})})})})]})})]})}},89127:(e,t,s)=>{s.d(t,{A:()=>h});var a=s(95155);let l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".scrollspy-link",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"active";var a,l=document.querySelectorAll(".scrollSpysection"),n={},i=0;Array.prototype.forEach.call(l,function(e){n[e.id]=e.offsetTop});var r=document.documentElement.scrollTop||document.body.scrollTop;for(i in n)if(n[i]<=r){null===(a=document.querySelector(t+" .".concat(s)))||void 0===a||a.setAttribute("class",e);let l=document.querySelector(t+" a[href*="+i+"]");null==l||l.setAttribute("class","".concat(e," ").concat(s))}};var n=s(59600),i=s(58169),r=s(47906),o=s(48173),c=s.n(o),d=s(76046),m=s(12115);function h(e){var t,s;let{links:o,animateY:h=!1}=e;(0,m.useEffect)(()=>(setTimeout(()=>{(0,i.P)()},1e3),(0,n.Z)(),window.addEventListener("scroll",l),window.addEventListener("resize",n.Z),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",n.Z)}),[]);let u=(0,d.usePathname)();return(0,a.jsxs)(a.Fragment,{children:[(null===(t=o[0].href)||void 0===t?void 0:t.includes("/"))&&o.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(c(),{className:u.split("/")[1]==e.href.split("/")[1]?"active":"",href:e.href,children:h?(0,a.jsxs)("span",{className:"btn-animate-y",children:[(0,a.jsx)("span",{className:"btn-animate-y-1",children:e.text}),(0,a.jsx)("span",{className:"btn-animate-y-2","aria-hidden":"true",children:e.text})]}):e.text})},t)),!(null===(s=o[0].href)||void 0===s?void 0:s.includes("/"))&&o.map((e,t)=>(0,a.jsx)("li",{className:"scrollspy-link",children:(0,a.jsx)("a",{onClick:()=>(0,r.a)(),className:"",href:e.href,children:h?(0,a.jsxs)("span",{className:"btn-animate-y",children:[(0,a.jsx)("span",{className:"btn-animate-y-1",children:e.text}),(0,a.jsx)("span",{className:"btn-animate-y-2","aria-hidden":"true",children:e.text})]}):e.text})},t))]})}},83159:(e,t,s)=>{s.d(t,{default:()=>m});var a=s(95155),l=s(5164),n=s(12115),i=s(5565),r=s(48173),o=s.n(r),c=s(24334);let d=[{name:"All works",category:"all"},{name:"Branding",category:"branding"},{name:"Design",category:"design"},{name:"Development",category:"development"}];function m(){let[e,t]=(0,n.useState)("all"),[s,r]=(0,n.useState)(l.rI);return(0,n.useEffect)(()=>{"all"==e?r(l.rI):r([...l.rI].filter(t=>t.categories.includes(e)))},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"works-filter works-filter-elegant text-center mb-50",children:d.map((s,l)=>(0,a.jsx)("a",{onClick:()=>t(s.category),className:"filter ".concat(e==s.category?"active":""),children:s.name},l))})}),(0,a.jsx)("div",{className:"position-relative",children:(0,a.jsx)("ul",{className:"works-grid work-grid-4 work-grid-gut-sm hide-titles",id:"work-grid",children:(0,a.jsxs)(c.Z2,{children:[s.map((e,t)=>(0,a.jsx)("li",{className:"work-item mix ".concat(e.categories.join(" ")),children:"Lightbox"===e.type?(0,a.jsx)(c.q7,{original:e.imageSrc,thumbnail:e.imageSrc,width:650,height:773,children:t=>{let{ref:s,open:l}=t;return(0,a.jsxs)("a",{onClick:l,className:"work-lightbox-link mfp-image",children:[(0,a.jsxs)("div",{className:"work-img",children:[(0,a.jsx)("div",{className:"work-img-bg wow-p scalexIn"}),(0,a.jsx)(i.default,{src:e.imageSrc,ref:s,width:650,height:761,alt:"Work Description"})]}),(0,a.jsxs)("div",{className:"work-intro",children:[(0,a.jsx)("h3",{className:"work-title",children:e.title}),(0,a.jsx)("div",{className:"work-descr",children:e.type})]})]})}}):(0,a.jsxs)(o(),{href:"/elegant-portfolio-single/".concat(e.id),className:"work-ext-link",children:[(0,a.jsxs)("div",{className:"work-img",children:[(0,a.jsx)("div",{className:"work-img-bg"}),(0,a.jsx)(i.default,{src:e.imageSrc,width:650,height:761,alt:"Work Description"})]}),(0,a.jsxs)("div",{className:"work-intro",children:[(0,a.jsx)("h3",{className:"work-title",children:e.title}),(0,a.jsx)("div",{className:"work-descr",children:e.type})]})]})},t))," "]})})})]})}},27847:(e,t,s)=>{s.d(t,{gT:()=>r,hF:()=>a,ju:()=>l,lj:()=>n,ze:()=>i});let a=[{name:"Privacy Policy",path:"#"},{name:"Terms & Conditions",path:"#"},{name:"Presskit",path:"#"}],l=[{text:"Privacy Policy",href:"#"},{text:"Terms & Conditions",href:"#"},{text:"Presskit",href:"#"},{text:"Credits",href:"#"}],n=[{href:"#",text:"Instagram"},{href:"#",text:"Facebook"},{href:"#",text:"YouTube"},{href:"#",text:"LinkedIn"}],i=[{href:"#",title:"Facebook",iconClass:"fa-facebook-f",name:"Facebook"},{href:"#",title:"Skype",iconClass:"fa-skype",name:"Skype"},{href:"#",title:"Pinterest",iconClass:"fa-pinterest",name:"Pinterest"},{href:"#",title:"Behance",iconClass:"fa-behance",name:"Behance"},{href:"#",title:"Dribbble",iconClass:"fa-dribbble",name:"Dribbble"}],r=[{href:"#about",text:"About"},{href:"#services",text:"Services"},{href:"#portfolio",text:"Portfolio"},{href:"#blog",text:"Blog"},{href:"#contact",text:"Contact"}]},59600:(e,t,s)=>{s.d(t,{Z:()=>a});function a(){var e=document.querySelector(".mobile-nav"),t=document.querySelector(".desktop-nav");e.setAttribute("aria-expanded","false"),document.querySelector(".main-nav")&&(document.querySelector(".desktop-nav > ul").style.maxHeight=window.innerHeight-document.querySelector(".main-nav").offsetHeight-20+"px"),window.innerWidth<=1024?(document.querySelector(".main-nav").classList.add("mobile-on"),e.classList.contains("active")||(t.style.display="none")):window.innerWidth>1024&&(document.querySelector(".main-nav").classList.remove("mobile-on"),t.style.display="block")}},58169:(e,t,s)=>{s.d(t,{P:()=>a});let a=()=>{document.querySelectorAll('a[href^="#"]').forEach(e=>{e.href&&"#"!=e.href&&!e.hasAttribute("data-bs-toggle")&&e.addEventListener("click",t=>{t.preventDefault(),console.log("clicle");let s=e.href.split("#")[1],a=document.getElementById(s);if(a){let e=a.getBoundingClientRect().top+window.pageYOffset+70;window.scrollTo({top:e,behavior:"smooth"})}})})}},47906:(e,t,s)=>{s.d(t,{a:()=>l,u:()=>a});let a=()=>{var e=document.querySelector(".mobile-nav"),t=document.querySelector(".desktop-nav");t.classList.contains("js-opened")?(t.style.maxHeight="0px",t.classList.remove("js-opened"),e.classList.remove("active")):(t.style.maxHeight="calc(100vh - 60px)",t.classList.add("js-opened"),e.classList.add("active"))},l=()=>{var e=document.querySelector(".mobile-nav"),t=document.querySelector(".desktop-nav");t.classList.contains("js-opened")&&(t.style.maxHeight="0px",t.classList.remove("js-opened"),e.classList.remove("active"))}}}]);