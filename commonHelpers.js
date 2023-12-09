import{a as u}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const f="https://api.thecatapi.com/v1";u.defaults.headers.common["x-api-key"]="live_6iszEu0HGJyNDekAh2eos6NLSxYhE1QF7jDLVnvxOesTafDnceCG7sCK3Tp8c5hd";function m(){return fetch(`${f}/breeds`,{headers:{"x-api-key":u.defaults.headers.common["x-api-key"]}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function h(e){return fetch(`${f}/images/search?breed_ids=${e}`,{headers:{"x-api-key":u.defaults.headers.common["x-api-key"]}}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const c=document.querySelector(".breed-select"),l=document.querySelector(".cat-info"),i=document.querySelector(".loader"),d=document.querySelector(".error");c.hidden=!0;i.classList.add("utilites-js");m().then(e=>p(e)).catch(e=>{i.classList.add("utilites-js"),d.classList.remove("utilites-js"),console.log(e)});function p(e){const s=e.map(({id:r,name:o})=>`<option value="${r}">${o}</option>`).join("");c.insertAdjacentHTML("beforeend",s),c.hidden=!1,i.classList.add("utilites-js")}function y(e){l.classList.remove("utilites-js");const s=e.map(({breeds:r,url:o})=>`<img src="${o}" alt="cat" class="cat-img" width="300">
      <div class="cat-text-container">
       <h1 class="cat-title">${r[0].name}</h1>
       <p class="cat-text">${r[0].description}</p>
       <p class="cat-temperament"><span class="accent">Temperament:</span> ${r[0].temperament}.</p>
       </div>
     `).join("");l.innerHTML=s,i.classList.add("utilites-js")}c.addEventListener("change",L);function L(e){i.classList.remove("utilites-js"),l.classList.add("utilites-js"),d.hidden=!0;const s=e.target.value;h(s).then(r=>{if(!r.length)throw new Error;return y(r)}).catch(r=>{i.classList.add("utilites-js"),d.hidden=!1,console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
