(()=>{"use strict";function t(t){t.classList.remove("show"),t.classList.add("hide"),document.body.removeAttribute("style")}function e(t){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden"}const n=function(){return'\n        <?xml version="1.0" encoding="utf-8"?>\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="38px" height="38px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n        <g transform="rotate(0 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(30 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(60 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(90 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(120 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(150 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(180 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(210 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(240 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(270 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(300 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n            </rect>\n        </g><g transform="rotate(330 50 50)">\n            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#337ab7">\n                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n            </rect>\n        </g>\n        \x3c!-- [ldio] generated by https://loading.io/ --\x3e</svg>\n    '};window.addEventListener("DOMContentLoaded",(function(){(function(){var t=document.querySelectorAll(".tabheader__item"),e=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function a(){e.forEach((function(t){t.classList.add("hide"),t.classList.remove("show","fade")})),t.forEach((function(t){return t.classList.remove("tabheader__item_active")}))}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e[n].classList.add("show","fade"),e[n].classList.remove("hide"),t[n].classList.add("tabheader__item_active")}a(),i(),n.addEventListener("click",(function(e){e.target&&e.target.matches(".tabheader__item")&&t.forEach((function(t,n){e.target===t&&(a(),i(n))}))}))})(),function(t){function e(t){return t>=0&&t<10?"0".concat(t):t}!function(t,n){var a=document.querySelector(".timer"),i=a.querySelector("#days"),r=a.querySelector("#hours"),o=a.querySelector("#minutes"),c=a.querySelector("#seconds"),s=setInterval(l,1e3);function l(){var t=function(t){var e,n,a,i,r=Date.parse(t)-Date.parse(new Date);return r<=0?(e=0,n=0,a=0,i=0):(e=Math.floor(r/864e5),n=Math.floor(r/36e5%24),a=Math.floor(r/1e3/60%60),i=Math.floor(r/1e3%60)),{total:r,days:e,hours:n,minutes:a,seconds:i}}(n),a=t.total,l=t.days,d=t.hours,u=t.minutes,m=t.seconds;i.textContent=e(l),r.textContent=e(d),o.textContent=e(u),c.textContent=e(m),a<=0&&clearInterval(s)}l()}(0,t)}("2023-12-31 23:59:59"),function(){var n=document.querySelectorAll("[data-modal]"),a=document.querySelector(".modal");n.forEach((function(t){return t.addEventListener("click",(function(){return e(a)}))})),t(a),e(a),a.addEventListener("click",(function(e){e.target!==a&&""!=e.target.getAttribute("data-close")||t(a)})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&a.matches(".show")&&t(a)})),window.addEventListener("scroll",(function t(){window.scrollY>=2e3&&(e(a),window.removeEventListener("scroll",t))}))}(),axios.get("http://localhost:8888/menu").then((function(t){t.data.forEach((function(t){var e=t.img,n=t.altimg,a=t.title,i=t.descr,r=t.price,o=document.createElement("div");o.classList.add("menu__item"),r=(parseFloat(r)*parseFloat(27.59)).toFixed(2),o.innerHTML="\n          <img src=".concat(e," alt=").concat(n,'>\n          <h3 class="menu__item-subtitle">').concat(a,'</h3>\n          <div class="menu__item-descr">').concat(i,'</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>').concat(r,"</span> грн/день</div>\n         </div>\n     "),document.querySelector(".menu .container").append(o)}))})),function(){var a=document.querySelectorAll("form"),i=n,r="Thank you ! We will contact with you !",o="Sorry, but something went wrong !";function c(n){var a=document.querySelector(".modal__dialog");a.classList.add("hide"),e(document.querySelector(".modal"));var i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML='\n\t\t\t<div class="modal__content">\n\t\t\t\t<div class="modal__close" data-close> &times; </div>\n\t\t\t\t<div class="modal__title">'.concat(n,"</div>\n\t\t\t</div>\n\t\t"),document.querySelector(".modal").append(i),setTimeout((function(){i.remove(),a.classList.add("show"),a.classList.remove("hide"),t(document.querySelector(".modal"))}),2e3)}a.forEach((function(t){return function(t){t.addEventListener("submit",(function(e){e.preventDefault();var n=i,a=r,s=o,l=document.createElement("div");l.innerHTML=n(),t.append(l),navigator.onLine||(c(s+": Please check your internet connection, and try again!"),l.remove(),t.reset());for(var d=/^$/g,u=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,m=!1,g=0;g<t.querySelectorAll("input").length;g++){if(d.test(t[g].value)||!u.test(t[1].value)){m=!1,c("Please fill all fields, and on phone field please fill mobile number format"),l.remove(),t.reset();break}m=!0}if(m){var f=new FormData(t);axios.post("http://localhost:8888/requests",Object.fromEntries(f)).then((function(t){console.log(t),c(a)})).catch((function(t){c(s+": "+t)})).finally((function(){l.remove(),t.reset()}))}else console.log("status is false")}))}(t)}))}(),function(){var t=0,e=1,n=document.querySelectorAll(".offer__slide"),a=document.querySelector(".offer__slider"),i=document.querySelector(".offer__slider-prev"),r=document.querySelector(".offer__slider-next"),o=document.querySelector("#total"),c=document.querySelector("#current"),s=document.querySelector(".offer__slider-wrapper"),l=document.querySelector(".offer__slider-inner"),d=window.getComputedStyle(s).width;h(),l.style.cssText="\n\t\tdisplay: flex;\n\t\twidth: ".concat(100*n.length,"%;\n\t\ttransition: all 0.5s;\n\t"),s.style.overflow="hidden",n.forEach((function(t){return t.style.width=d})),a.style.position="relative";var u=document.createElement("ul"),m=[];u.style.cssText="\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tz-index: 15;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin-right: 15%;\n\t\tmargin-left: 15%;\n\t\tlist-style: none;\n\t",a.append(u);for(var g=0;g<n.length;g++){var f=document.createElement("li");f.setAttribute("data-slide-to",g+1),f.style.cssText="\n\t\t\tbox-sizing: content-box;\n\t\t\tflex: 0 1 auto;\n\t\t\twidth: 30px;\n\t\t\theight: 6px;\n\t\t\tmargin-right: 3px;\n\t\t\tmargin-left: 3px;\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: #fff;\n\t\t\tbackground-clip: padding-box;\n\t\t\tborder-top: 10px solid transparent;\n\t\t\tborder-bottom: 10px solid transparent;\n\t\t\topacity: .5;\n\t\t\ttransition: opacity .6s ease;\n\t\t",0===g&&(f.style.opacity=1),u.append(f),m.push(f)}function h(){n.length<10?(o.textContent="0".concat(n.length),c.textContent="0".concat(e)):(o.textContent=n.length,c.textContent=e)}function y(){m.forEach((function(t){return t.style.opacity=.5})),m[e-1].style.opacity=1}function v(a){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!0===i&&!1===r&&(e===n.length||e>=n.length?e=1:e++,t===a?t=0:t+=+d.replace(/\D/g,"")),!1===i&&!0===r&&(1===e||e<=1?e=n.length:e--,t===a?t=+d.replace(/\D/g,"")*(n.length-1):t-=+d.replace(/\D/g,"")),l.style.transform="translateX(-".concat(t,"px)")}r.addEventListener("click",(function(){v(+d.replace(/\D/g,"")*(n.length-1),!0,!1),h(),y()})),i.addEventListener("click",(function(){v(0,!1,!0),h(),y()})),m.forEach((function(n){n.addEventListener("click",(function(n){var a=n.target.getAttribute("data-slide-to");e=a,t=+d.replace(/\D/g,"")*(a-1),l.style.transform="translateX(-".concat(t,"px)"),h(),y()}))}))}(),function(){var t,e,n,a,i,r=document.querySelector(".calculating__result span");function o(t,e,n){localStorage.getItem(t)?localStorage.getItem(t):localStorage.setItem(t,e)}function c(){r.textContent=t&&e&&n&&a&&i?"female"===t?Math.round((447.6+9.2*n+3.1*e-4.3*a)*i):"male"===t?Math.round((88.36+13.4*n+4.8*e-5.7*a)*i):"_____":"______"}function s(t,e){document.querySelectorAll(t).forEach((function(t){t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("gender")&&t.classList.add(e),t.dataset.ratio===localStorage.getItem("ratio")&&t.classList.add(e)}))}function l(e,n){var a=document.querySelectorAll(e);a.forEach((function(e){e.addEventListener("click",(function(e){e.target.dataset.ratio?(i=parseFloat(e.target.dataset.ratio),localStorage.setItem("ratio",parseFloat(e.target.dataset.ratio))):(t=e.target.getAttribute("id"),localStorage.setItem("gender",e.target.getAttribute("id"))),a.forEach((function(t){return t.classList.remove(n)})),e.target.classList.add(n),c()}))}))}function d(t){var i=document.querySelector(t);i.addEventListener("input",(function(){switch(i.value.match(/\D/g)?i.style.border="1px solid red":i.style.border="none",i.getAttribute("id")){case"height":e=parseFloat(i.value);break;case"weight":n=parseFloat(i.value);break;case"age":a=parseFloat(i.value)}c()}))}o("gender","female"),o("ratio",1.375),c(),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active"),d("#height"),d("#weight"),d("#age")}()}))})();
//# sourceMappingURL=all.js.map