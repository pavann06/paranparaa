(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{463:(e,t,s)=>{Promise.resolve().then(s.bind(s,41178)),Promise.resolve().then(s.bind(s,61086)),Promise.resolve().then(s.bind(s,42656)),Promise.resolve().then(s.bind(s,20892)),Promise.resolve().then(s.bind(s,84724)),Promise.resolve().then(s.bind(s,41380)),Promise.resolve().then(s.bind(s,6160)),Promise.resolve().then(s.t.bind(s,48173,23)),Promise.resolve().then(s.t.bind(s,87970,23))},49136:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var n=s(95155),r=s(12115);function i(e,t,s,n){return new(s||(s=Promise))(function(r,i){function a(e){try{o(n.next(e))}catch(e){i(e)}}function l(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(a,l)}o((n=n.apply(e,t||[])).next())})}function a(e,t){var s,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(s)throw TypeError("Generator is already executing.");for(;a;)try{if(s=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{s=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,s=t&&e[t],n=0;if(s)return s.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var s="function"==typeof Symbol&&e[Symbol.iterator];if(!s)return e;var n,r,i=s.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(s=i.return)&&s.call(i)}finally{if(r)throw r.error}}return a}function c(e,t,s){if(s||2==arguments.length)for(var n,r=0,i=t.length;r<i;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}function u(e,t,s,n,r){for(var u=[],m=5;m<arguments.length;m++)u[m-5]=arguments[m];return i(this,void 0,void 0,function(){var m,h,f,p,v;return a(this,function(b){switch(b.label){case 0:b.trys.push([0,12,13,14]),h=(m=l(u)).next(),b.label=1;case 1:if(h.done)return[3,11];switch(typeof(f=h.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,s,n,r,u){return i(this,void 0,void 0,function(){var m,h;return a(this,function(f){switch(f.label){case 0:var p,v;return p=m=e.textContent||"",v=o(s).slice(0),h=c(c([],o(p),!1),[NaN],!1).findIndex(function(e,t){return v[t]!==e}),[4,function(e,t,s,n,r){return i(this,void 0,void 0,function(){var i,c,u,m,h,f,p,v,b,x,g,j;return a(this,function(y){switch(y.label){case 0:if(i=t,r){for(c=0,u=1;u<t.length;u++)if(h=(m=o([t[u-1],t[u]],2))[0],(f=m[1]).length>h.length||""===f){c=u;break}i=t.slice(c,t.length)}y.label=1;case 1:y.trys.push([1,6,7,8]),v=(p=l(function(e){var t,s,n,r,i,o;return a(this,function(c){switch(c.label){case 0:t=function(e){return a(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var s=t.textContent||"";return""===e||s.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},c.label=1;case 1:c.trys.push([1,6,7,8]),n=(s=l(e)).next(),c.label=2;case 2:return n.done?[3,5]:(r=n.value,[5,t(r)]);case 3:c.sent(),c.label=4;case 4:return n=s.next(),[3,2];case 5:return[3,8];case 6:return i={error:c.sent()},[3,8];case 7:try{n&&!n.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}return[7];case 8:return[2]}})}(i))).next(),y.label=2;case 2:return v.done?[3,5]:(x="WRITING"===(b=v.value).opCode(e)?s+s*(Math.random()-.5):n+n*(Math.random()-.5),b.op(e),[4,d(x)]);case 3:y.sent(),y.label=4;case 4:return v=p.next(),[3,2];case 5:return[3,8];case 6:return g={error:y.sent()},[3,8];case 7:try{v&&!v.done&&(j=p.return)&&j.call(p)}finally{if(g)throw g.error}return[7];case 8:return[2]}})})}(e,c(c([],o(function(e,t,s){var n,r;return void 0===s&&(s=0),a(this,function(i){switch(i.label){case 0:r=(n=t(e)).length,i.label=1;case 1:return r>s?[4,n.slice(0,--r).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}(m,t,h)),!1),o(function(e,t,s){var n,r;return void 0===s&&(s=0),a(this,function(i){switch(i.label){case 0:r=(n=t(e)).length,i.label=1;case 1:return s<r?[4,n.slice(0,++s).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}(s,t,h)),!1),n,r,u)];case 1:return f.sent(),[2]}})})}(e,t,f,s,n,r)];case 3:case 5:case 7:return b.sent(),[3,10];case 4:return[4,d(f)];case 6:return[4,f.apply(void 0,c([e,t,s,n,r],o(u),!1))];case 8:return[4,f];case 9:b.sent(),b.label=10;case 10:return h=m.next(),[3,1];case 11:return[3,14];case 12:return p={error:b.sent()},[3,14];case 13:try{h&&!h.done&&(v=m.return)&&v.call(m)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function d(e){return i(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var s=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===s&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var m=(0,r.memo)((0,r.forwardRef)(function(e,t){var s=e.sequence,n=e.repeat,i=e.className,a=e.speed,l=void 0===a?40:a,d=e.deletionSpeed,m=e.omitDeletionAnimation,h=void 0!==m&&m,f=e.preRenderFirstString,p=e.wrapper,v=e.splitter,b=void 0===v?function(e){return c([],o(e),!1)}:v,x=e.cursor,g=void 0===x||x,j=e.style,y=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),N=y["aria-label"],w=y["aria-hidden"],k=y.role;d||(d=l);var q=[,,].fill(40);[l,d].forEach(function(e,t){switch(typeof e){case"number":q[t]=Math.abs(e-100);break;case"object":var s=e.type,n=e.value;if("number"!=typeof n)break;"keyStrokeDelayInMs"===s&&(q[t]=n)}});var P,S,C,E,I,U,_,D,L=q[0],R=q[1],A=(void 0===P&&(P=null),S=(0,r.useRef)(P),(0,r.useEffect)(function(){t&&("function"==typeof t?t(S.current):t.current=S.current)},[t]),S),F="index-module_type__E-SaG";C=i?"".concat(g?F+" ":"").concat(i):g?F:"",E=(0,r.useRef)(function(){var e,t=s;n===1/0?e=u:"number"==typeof n&&(t=Array(1+n).fill(s).flat());var r=e?c(c([],o(t),!1),[e],!1):c([],o(t),!1);return u.apply(void 0,c([A.current,b,L,R,h],o(r),!1)),function(){A.current}}),I=(0,r.useRef)(),U=(0,r.useRef)(!1),_=(0,r.useRef)(!1),D=o((0,r.useState)(0),2)[1],U.current&&(_.current=!0),(0,r.useEffect)(function(){return U.current||(I.current=E.current(),U.current=!0),D(function(e){return e+1}),function(){_.current&&I.current&&I.current()}},[]);var O=void 0!==f&&f?s.find(function(e){return"string"==typeof e})||"":null;return r.createElement(void 0===p?"span":p,{"aria-hidden":w,"aria-label":N,role:k,style:j,className:C,children:N?r.createElement("span",{"aria-hidden":"true",ref:A,children:O}):O,ref:N?void 0:A})}),function(e,t){return!0});function h(e){let{strings:t=[],colorClass:s="color-primary-1"}=e;return(0,n.jsx)("div",{className:"typewrite ".concat(s),children:(0,n.jsx)(m,{sequence:[...t.flatMap(e=>[e,2e3])],wrapper:"span",speed:50,repeat:1/0})})}},42656:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});var n=s(95155);function r(e){let{heading:t}=e;return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-lg-5 mb-md-70",children:[(0,n.jsxs)("h2",{className:"section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30",children:[(0,n.jsx)("span",{className:"text-outline-2",children:t||"Contact Me"}),(0,n.jsx)("span",{className:"text-outline-1",children:t||"Contact Me"}),(0,n.jsx)("span",{className:"text-outline",children:t||"Contact Me"})]}),(0,n.jsxs)("p",{className:"section-text mb-60 mb-md-40 mb-sm-30",children:[(0,n.jsx)("span",{className:"section-title-inline",children:"How?"})," Have a question? Just drop me a line via email or make a WhatsApp call. I am available for new projects and interesting ideas."]}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"mailto:ibthemes21@gmail.com",className:"link-hover-anim align-middle","data-link-animate":"y",children:"ibthemes21@gmail.com"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"tel:+18376528800",className:"link-hover-anim align-middle","data-link-animate":"y",children:"+1 837 652 8800"})})]}),(0,n.jsx)("div",{className:"col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0",children:(0,n.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"form contact-form wow fadeInUp",id:"contact_form",children:[(0,n.jsxs)("div",{className:"form-group d-block d-md-flex align-items-center",children:[(0,n.jsx)("label",{htmlFor:"name",className:"mb-0 mb-sm-10 me-3",children:"Your Name"}),(0,n.jsx)("div",{className:"flex-grow-1",children:(0,n.jsx)("input",{type:"text",name:"name",id:"name",className:"input-sm form-control underline text-md-center",placeholder:"Enter your name here",pattern:".{3,100}",required:!0,"aria-required":"true"})})]}),(0,n.jsxs)("div",{className:"form-group d-block d-md-flex align-items-center",children:[(0,n.jsx)("label",{htmlFor:"email",className:"mb-0 mb-sm-10 me-3",children:"Email Address"}),(0,n.jsx)("div",{className:"flex-grow-1",children:(0,n.jsx)("input",{type:"email",name:"email",id:"email",className:"input-sm form-control underline text-md-center",placeholder:"Enter your email here",pattern:".{5,100}",required:!0,"aria-required":"true"})})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"message",className:"mb-sm-10",children:"What’s your question?"}),(0,n.jsx)("textarea",{name:"message",id:"message",className:"input-sm form-control underline",style:{height:120},placeholder:"Enter your message here",defaultValue:""})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-5",children:(0,n.jsx)("button",{className:"submit_btn btn btn-mod btn-circle btn-white btn-ellipse","data-btn-animate":"ellipse",id:"submit_btn","aria-controls":"result",children:(0,n.jsxs)("span",{className:"btn-ellipse-inner",children:[(0,n.jsx)("span",{className:"btn-ellipse-unhovered",children:"Send Message"}),(0,n.jsx)("span",{className:"btn-ellipse-hovered","aria-hidden":"true",children:"Send Message"})]})})}),(0,n.jsx)("div",{className:"col-sm-7 d-flex align-items-center",children:(0,n.jsxs)("div",{className:"form-tip pt-30 pt-sm-20",children:[(0,n.jsx)("i",{className:"icon-info size-16"}),"All the fields are required. By sending the form you agree to the ",(0,n.jsx)("a",{href:"#",children:"Terms & Conditions"})," and"," ",(0,n.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]})})]}),(0,n.jsx)("div",{id:"result",role:"region","aria-live":"polite","aria-atomic":"true"})]})})]})})}},20892:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var n=s(95155),r=s(61657),i=s(12115);function a(){let e=(0,i.useRef)([]),t=(0,i.useRef)([]),[s,a]=(0,i.useState)(-1);return(0,i.useEffect)(()=>{if(e.current.forEach(e=>{e.classList.remove("active")}),t.current.forEach(e=>{e.style.height="0px",e.style.overflow="hidden",e.style.transition="all 0.5s ease-in-out",e.style.marginBottom="0px"}),-1!==s){e.current[s].classList.add("active");let n=t.current[s];n.style.height=n.scrollHeight+"px",n.style.overflow="hidden",n.style.transition="all 0.5s ease-in-out",n.style.marginBottom="1.55em"}},[s]),(0,n.jsx)("dl",{className:"accordion-1 wow fadeInUp",children:r.kL.map((s,r)=>(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)("dt",{onClick:()=>{a(e=>e==r?-1:r)},children:(0,n.jsxs)("a",{ref:t=>e.current[r]=t,children:[(0,n.jsx)("span",{children:s.question}),(0,n.jsx)("i",{className:"icon-plus"})]})}),(0,n.jsx)("dd",{className:"black",ref:e=>t.current[r]=e,style:{display:"block"},children:s.answer})]},r))})}},41380:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var n=s(95155),r=s(12115),i=s(5164),a=s(5565),l=s(48173),o=s.n(l);let c=[{name:"All works",category:"all"},{name:"Branding",category:"branding"},{name:"Design",category:"design"},{name:"Development",category:"development"}];function u(e){let{desc:t}=e,[s,l]=(0,r.useState)("all"),[u,d]=(0,r.useState)(i.yF);return(0,r.useEffect)(()=>{"all"==s?d(i.yF):d([...i.yF].filter(e=>e.categories.includes(s)))},[s]),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row mb-90 mb-md-40",children:[(0,n.jsx)("div",{className:"col-lg-5 mb-md-30",children:t?(0,n.jsxs)("p",{className:"section-text mb-0",children:[(0,n.jsx)("span",{className:"section-title-inline",children:"Hey!"})," Explore cutting-edge solutions that elevate brands and engage audiences."]}):(0,n.jsx)("h2",{className:"section-title-medium font-alt text-outline-cont mt-20 mb-0",children:(0,n.jsx)("span",{className:"text-outline",children:"Works"})})}),(0,n.jsx)("div",{className:"col-lg-7 pb-20 pb-md-0 d-flex align-items-end",children:(0,n.jsx)("div",{className:"works-filter works-filter-bold text-start text-lg-end w-100",children:c.map((e,t)=>(0,n.jsx)("a",{onClick:()=>l(e.category),className:"filter ".concat(s==e.category?"active":""),children:e.name},t))})})]}),(0,n.jsx)("div",{id:"isotope",className:"mb-n100 mb-sm-n50",children:u.map((e,t)=>(0,n.jsx)("div",{className:"portfolio-2-item mb-100 mb-sm-50 mix ".concat(e.categories.join(" ")),children:(0,n.jsx)("div",{className:"row",children:t%2?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"col-md-4",children:[(0,n.jsx)("hr",{className:"black thick mt-0 mb-20 d-none d-md-block"}),(0,n.jsx)("h3",{className:"portfolio-2-title font-alt mb-20",children:(0,n.jsx)(o(),{href:"/bold-portfolio-single/".concat(e.id),children:e.title})}),(0,n.jsx)("p",{className:"portfolio-2-descr",children:e.description}),(0,n.jsx)("div",{children:(0,n.jsxs)(o(),{href:"/bold-portfolio-single/".concat(e.id),className:"link-hover-anim underline align-middle","data-link-animate":"y",children:[(0,n.jsx)("span",{className:"link-strong link-strong-unhovered",children:"View Project"}),(0,n.jsx)("span",{className:"link-strong link-strong-hovered","aria-hidden":"true",children:"View Project"})]})})]})," ",(0,n.jsx)("div",{className:"col-md-8 mb-sm-30 ".concat(t%2?"order-first order-md-last":""," "),children:(0,n.jsx)("div",{className:"portfolio-2-image",children:(0,n.jsx)(o(),{href:"/bold-portfolio-single/".concat(e.id),children:(0,n.jsx)(a.default,{width:1200,height:819,src:e.imageUrl,alt:"Image Description"})})})})," "]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"col-md-8 mb-sm-30 order-md-first",children:(0,n.jsx)("div",{className:"portfolio-2-image",children:(0,n.jsx)(o(),{href:"/bold-portfolio-single/".concat(e.id),children:(0,n.jsx)(a.default,{width:1200,height:819,src:e.imageUrl,alt:"Image Description"})})})}),(0,n.jsxs)("div",{className:"col-md-4  ",children:[(0,n.jsx)("hr",{className:"black thick mt-0 mb-20 d-none d-md-block"}),(0,n.jsx)("h3",{className:"portfolio-2-title font-alt mb-20",children:(0,n.jsx)(o(),{href:"/bold-portfolio-single/".concat(e.id),children:e.title})}),(0,n.jsx)("p",{className:"portfolio-2-descr",children:e.description}),(0,n.jsx)("div",{children:(0,n.jsxs)(o(),{href:"/bold-portfolio-single/".concat(e.id),className:"link-hover-anim underline align-middle","data-link-animate":"y",children:[(0,n.jsx)("span",{className:"link-strong link-strong-unhovered",children:"View Project"}),(0,n.jsx)("span",{className:"link-strong link-strong-hovered","aria-hidden":"true",children:"View Project"})]})})]})," "]})})},t))})]})}},84724:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var n=s(95155),r=s(5565),i=s(12115),a=s(49136);function l(e){let{dark:t}=e,s=(0,i.useRef)(null),[l,o]=(0,i.useState)(!0),[c,u]=(0,i.useState)(!0);return(0,n.jsxs)("div",{className:"container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100",children:[(0,n.jsxs)("div",{className:"bg-video-wrapper",children:[(0,n.jsx)("video",{ref:s,className:"bg-video",preload:"auto",autoPlay:!0,muted:!0,loop:!0,children:(0,n.jsx)("source",{src:"/assets/videos/video-5.mp4",type:"video/mp4"})}),t?(0,n.jsx)("div",{className:"bg-video-overlay bg-dark-alpha-90"}):(0,n.jsx)("div",{className:"bg-video-overlay bg-light-alpha-90"})]}),(0,n.jsxs)("a",{onClick:()=>{c?(s.current.muted=!1,u(!1)):(s.current.muted=!0,u(!0))},href:"#",role:"button",className:"bg-video-button-muted",children:[(0,n.jsx)("i",{className:"mi-volume-".concat(c?"up":"off")}),(0,n.jsx)("span",{className:"visually-hidden",children:"Volume On"})]}),(0,n.jsxs)("a",{onClick:()=>{l?(s.current.pause(),o(!1)):(s.current.play(),o(!0))},href:"#",role:"button",className:"bg-video-button-pause",children:[(0,n.jsx)("i",{className:"mi-".concat(l?"pause":"play")}),(0,n.jsx)("span",{className:"visually-hidden",children:"Pause"})]}),(0,n.jsx)("div",{className:"home-content text-center",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-9 d-flex align-items-center mb-md-60",children:(0,n.jsxs)("div",{className:"w-100 text-center text-lg-start",children:[(0,n.jsx)("h2",{className:"section-title-tiny font-alt mb-30 mb-sm-20 wow fadeInUp",children:"I’m Ronald Smith"}),(0,n.jsxs)("h1",{className:"hs-title-13a font-alt mb-50 mb-sm-30 wow fadeRotateIn","data-wow-delay":"0.2s",children:["Visual & web designer ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"visually-hidden",children:"based in Melburn, with passion to art, and freelancer"}),(0,n.jsx)(a.A,{strings:["based in Melburn","with passion to art","and freelancer"],colorClass:""})]}),(0,n.jsx)("div",{className:"local-scroll wow fadeInUp wch-unset","data-wow-delay":"0.5s","data-wow-offset":0,children:(0,n.jsx)("a",{href:"#portfolio",className:"btn btn-mod ".concat(t?"btn-w":"","  btn-medium btn-circle"),"data-btn-animate":"y",children:(0,n.jsxs)("span",{className:"btn-animate-y",children:[(0,n.jsx)("span",{className:"btn-animate-y-1",children:"View portfolio"}),(0,n.jsx)("span",{className:"btn-animate-y-2","aria-hidden":"true",children:"View portfolio"})]})})})]})}),(0,n.jsx)("div",{className:"col-10 offset-1 col-lg-3 offset-lg-0 d-flex align-items-center",children:(0,n.jsx)("div",{className:"w-100",children:(0,n.jsxs)("div",{className:"composition-9",children:[(0,n.jsx)("div",{className:"composition-9-decoration-1 circle-large d-none d-lg-block parallax-mousemove","data-offset":30}),(0,n.jsx)("div",{className:"composition-9-image circle-large parallax-mousemove","data-offset":60,children:(0,n.jsx)(r.default,{src:"/assets/images/demo-bold/hs-image-1.jpg",width:500,height:800,alt:"Image description",className:"wow scaleOutIn","data-wow-offset":0})})]})})})]})}),(0,n.jsx)("div",{className:"local-scroll scroll-down-wrap-4 wow fadeInUp","data-wow-offset":0,children:(0,n.jsx)("div",{className:"full-wrapper text-end",children:(0,n.jsx)("a",{href:"#about",className:"scroll-down-4",children:(0,n.jsx)("i",{className:"icon-arrow-down1 size-22"})})})})]})}},61657:(e,t,s)=>{"use strict";s.d(t,{cw:()=>r,kL:()=>n,xQ:()=>i});let n=[{id:1,question:"01. Discussion",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc."},{id:2,question:"02. Design",answer:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet dignissim pellentesque felis."},{id:3,question:"03. Development",answer:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna."},{id:4,question:"04. Production",answer:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna."}],r=[{id:1,question:"What do you mean by an End Product?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus."},{id:2,question:"Where do I find my Purchase or License code?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus."},{id:3,question:"Do I need to buy a licence for each site?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus."},{id:4,question:"Is my license transferable?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula porttitor rutrum. Ut laoreet sodales rutrum. Ut eget tristique nibh. Cras mattis est eget lacus dignissim, non consectetur velit pellentesque. Ut sit amet placerat eros, id gravida arcu. Sed felis purus, tempor ac vestibulum nec, consectetur at purus."}],i=[{question:"Our Story",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n            condimentum, mauris a bibendum cursus, risus quam venenatis ipsum,\n            in facilisis tellus lacus ac augue. Fusce placerat condimentum\n            luctus. Pellentesque venenatis lacus eu ex sollicitudin maximus.\n            Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n            per inceptos himenaeos. Vestibulum rhoncus eros vitae enim lobortis\n            cursus. Suspendisse potenti. Ut sed tortor ut dolor consequat congue\n            a lacinia ante. Phasellus vel urna eu lacus luctus luctus vitae quis"},{question:"Our Mission",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n            condimentum, mauris a bibendum cursus, risus quam venenatis ipsum,\n            in facilisis tellus lacus ac augue. Fusce placerat condimentum\n            luctus. Pellentesque venenatis lacus eu ex sollicitudin maximus.\n            Class aptent taciti sociosqu ad litora torquent per conubia nostra,\n            per inceptos himenaeos. Vestibulum rhoncus eros vitae enim lobortis\n            cursus. Suspendisse potenti. Ut sed tortor ut dolor consequat congue\n            a lacinia ante. Phasellus vel urna eu lacus luctus luctus vitae quis"}]}}]);