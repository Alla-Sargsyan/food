(()=>{var e={31:e=>{e.exports=function(){const e=document.querySelector(".calculating__result span");let t,n,a,i,r;function o(e,t,n){localStorage.getItem(e)?localStorage.getItem(e):localStorage.setItem(e,t)}function s(){e.textContent=t&&n&&a&&i&&r?"female"===t?Math.round((447.6+9.2*a+3.1*n-4.3*i)*r):"male"===t?Math.round((88.36+13.4*a+4.8*n-5.7*i)*r):"_____":"______"}function l(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("gender")&&e.classList.add(t),e.dataset.ratio===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(e,n){const a=document.querySelectorAll(e);a.forEach((e=>{e.addEventListener("click",(e=>{e.target.dataset.ratio?(r=parseFloat(e.target.dataset.ratio),localStorage.setItem("ratio",parseFloat(e.target.dataset.ratio))):(t=e.target.getAttribute("id"),localStorage.setItem("gender",e.target.getAttribute("id"))),a.forEach((e=>e.classList.remove(n))),e.target.classList.add(n),s()}))}))}function d(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=parseFloat(t.value);break;case"weight":a=parseFloat(t.value);break;case"age":i=parseFloat(t.value)}s()}))}o("gender","female"),o("ratio",1.375),s(),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active"),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),d("#height"),d("#weight"),d("#age")}},462:(e,t,n)=>{const a=n(877);e.exports=function(){const e=document.querySelectorAll("form"),t={loading:a,success:"Thank you ! We will contact with you !",failure:"Sorry,but something went wrong !"};function n(e){const t=document.querySelector(".modal__dialog");t.classList.add("hide"),openModal();const n=document.createElement("div");n.classList.add("modal__dialog"),n.innerHTML=`\n            <div class = "modal__content">\n                <div class = "modal__close" data-close> &times; </div>\n                <div class = "modal__title">${e}</div>\n            </div>\n            `,document.querySelector(".modal").append(n),setTimeout((()=>{n.remove(),t.classList.add("show"),t.classList.remove("hide"),closeModal()}),2e3)}e.forEach((e=>function(e){e.addEventListener("submit",(a=>{a.preventDefault();const{loading:i,success:r,failure:o}=t,s=document.createElement("div");s.innerHTML=i(),e.append(s),navigator.onLine||(n(o+":Please check your interet connection,and try again!"),s.remove(),e.reset());const l=/^$/g,c=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;let d=!1;for(let t=0;t<e.querySelectorAll("input").length;t++){if(l.test(e[t].value)||!c.test(e[1].value)){d=!1,n("Please fill all fields, and on phone field please fill mobile number format"),s.remove(),e.reset();break}d=!0}if(d){const t=new FormData(e);axios.post("http://localhost:8888/requests",Object.fromEntries(t)).then((e=>{console.log(e),n(r)})).catch((e=>{n(o+":"+e)})).finally((()=>{s.remove(),e.reset()}))}else console.log("status is false")}))}(e)))}},499:e=>{e.exports=function(){axios.get("http://localhost:8888/menu").then((e=>{e.data.forEach((({img:e,altimg:t,title:n,descr:a,price:i})=>{const r=document.createElement("div");r.classList.add("menu__item");i=(parseFloat(i)*parseFloat(27.59)).toFixed(2),r.innerHTML=`\n          <img src=${e} alt=${t}>\n          <h3 class="menu__item-subtitle">${n}</h3>\n          <div class="menu__item-descr">${a}</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>${i}</span> грн/день</div>\n         </div>\n     `,document.querySelector(".menu .container").append(r)}))}))}},852:e=>{e.exports=function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){t.classList.remove("show"),t.classList.add("hide"),document.body.removeAttribute("style")}function a(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden"}document.querySelector("[data-close]"),e.forEach((e=>e.addEventListener("click",a))),t.addEventListener("click",(e=>{e.target!==t&&""!=e.target.getAttribute("data-close")||n()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t.matches(".show")&&n()})),window.addEventListener("scroll",(function e(){window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(a(),window.removeEventListener("scroll",e))}))}},139:e=>{e.exports=function(){let e=0,t=1;const n=document.querySelectorAll(".offer__slide"),a=document.querySelector(".offer__slider"),i=document.querySelector(".offer__slider-prev"),r=document.querySelector(".offer__slider-next"),o=document.querySelector("#total"),s=document.querySelector("#current"),l=document.querySelector(".offer__slider-wrapper"),c=document.querySelector(".offer__slider-inner"),d=this.window.getComputedStyle(l).width;g(),c.style.cssText=`\n    display:flex;\n    width:${100*n.length}%;\n    transition: all 0.5s;\n    `,l.style.overflow="hidden",n.forEach((e=>e.style.width=d)),a.style.position="relative";const u=document.createElement("ul"),m=[];u.style.cssText="\n    position: absolute;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n    ",a.append(u);for(let e=0;e<n.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n        box-sizing: content-box;\n        flex: 0 1 auto;\n        width: 30px;\n        height: 6px;\n        margin-right: 3px;\n        margin-left: 3px;\n        cursor: pointer;\n        background-color: #fff;\n        background-clip: padding-box;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        opacity: 0.5;\n        transition: opacity 0.5s ease;\n     ",0===e&&(t.style.opacity=1),u.append(t),m.push(t)}function g(){n.length<10?(o.textContent=`0${n.length}`,s.textContent=`0${t}`):(o.textContent=n.length,s.textContent=t)}function h(){m.forEach((e=>e.style.opacity=.5)),m[t-1].style.opacity=1}function f(a,i=!1,r=!1){!0===i&&!1===r&&(t===n.length||t>=n.length?t=1:t++,e===a?e=0:e+=+d.replace(/\D/g,"")),!1===i&&!0===r&&(1===t||t<=1?t=n.length:t--,e===a?e=+d.replace(/\D/g,"")*(n.length-1):e-=+d.replace(/\D/g,"")),c.style.transform=`translateX(-${e}px)`}r.addEventListener("click",(()=>{f(+d.replace(/\D/g,"")*(n.length-1),!0,!1),g(),h()})),i.addEventListener("click",(()=>{f(0,!1,!0),g(),h()})),m.forEach((n=>{n.addEventListener("click",(n=>{const a=n.target.getAttribute("data-slide-to");t=a,e=+d.replace(/\D/g,"")*(a-1),c.style.transform=`translateX(-${e}px)`,g(),h()}))}))}},877:e=>{e.exports=function(){return'\n        <?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="38px" height="38px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n        <g transform="rotate(0 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(30 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(60 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(90 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(120 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(150 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(180 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(210 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(240 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(270 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(300 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(330 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n            </rect>\n        </g>\n        \x3c!-- [ldio] generated by https://loading.io/ --\x3e</svg>\n    '}},55:e=>{e.exports=function(){const e=document.querySelectorAll(".tabheader__item"),t=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function a(){t.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),e.forEach((e=>e.classList.remove("tabheader__item_active")))}function i(n=0){t[n].classList.add("show","fade"),t[n].classList.remove("hide"),e[n].classList.add("tabheader__item_active")}a(),i(),n.addEventListener("click",(t=>{t.target&&t.target.matches(".tabheader__item")&&e.forEach(((e,n)=>{t.target===e&&(a(),i(n))}))}))}},363:e=>{e.exports=function(){function e(e){return e>=0&&e<10?`0${e}`:e}!function(t,n){const a=document.querySelector(".timer"),i=a.querySelector("#days"),r=a.querySelector("#hours"),o=a.querySelector("#minutes"),s=a.querySelector("#seconds"),l=setInterval(c,1e3);function c(){const{total:t,days:n,hours:a,minutes:c,seconds:d}=function(e){const t=Date.parse(e)-Date.parse(new Date);let n,a,i,r;return t<=0?(n=0,a=0,i=0,r=0):(n=Math.floor(t/864e5),a=Math.floor(t/36e5%24),i=Math.floor(t/1e3/60%60),r=Math.floor(t/1e3%60)),{total:t,days:n,hours:a,minutes:i,seconds:r}}("2023-07-13");i.textContent=e(n),r.textContent=e(a),o.textContent=e(c),s.textContent=e(d),t<=0&&clearInterval(l)}c()}()}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){const e=n(55),t=n(363),a=n(852),i=n(499),r=n(462),o=n(139),s=n(31);e(),t(),a(),i(),r(),o(),s()}))})()})();