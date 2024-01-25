(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const n=e=>{if(Array.isArray(e)){const s=Array.from(document.querySelectorAll(e[0]));if(!s)throw new Error(`Cannot get elements with query string: ${e[0]}`);return s}const t=document.querySelector(e);if(!t)throw new Error(`Cannot get element with query string: ${e}`);return t},p=()=>window.scrollY>0,w=n(".nav-toggle-btn"),y=n(".nav-links"),f=n(".nav");w.addEventListener("click",e=>{y.classList.toggle("show-links")});window.onscroll=()=>{p()?f.style.backgroundColor="rgba(26, 30, 31, 0.8)":f.style.backgroundColor="rgba(26, 30, 31, 1)"};const L=n([".question-header"]);L.forEach(e=>{e.addEventListener("click",function(t){const s=this.querySelector(".caret-box"),o=this.nextElementSibling;o.style.maxHeight?(o.style.maxHeight=null,s.classList.remove("active")):(b(),s.classList.add("active"),o.style.maxHeight=o.scrollHeight+"px")})});function b(){const e=n([".answer-collapsable"]),t=n([".caret-box"]);e.forEach(s=>s.style.maxHeight=null),t.forEach(s=>s.classList.remove("active"))}const E=n([".dot"]),x=n(".prev"),S=n(".next");let i=1;l(i);function l(e){const t=n([".slide"]),s=n([".dot"]);e>t.length&&(i=1),e<1&&(i=t.length),t.forEach(o=>o.style.display="none"),s.forEach(o=>o.classList.remove("dot-active")),t[i-1].style.display="flex",s[i-1].classList.add("dot-active")}function a(e){l(i+=e)}E.forEach((e,t)=>{e.addEventListener("click",()=>{l(i=t+1),d()})});x.addEventListener("click",()=>{a(-1),d()});S.addEventListener("click",()=>{a(1),d()});let g;function h(){g=setInterval(()=>{l(i+=1)},2500)}function v(){clearInterval(g)}function d(){v(),h()}const k=new IntersectionObserver(function(e){e[0].isIntersecting?(console.log("incoming into view"),h()):(v(),console.log("its still out of view"))},{rootMargin:"100px 0px 100px 0px"});k.observe(n(".partners-section"));let m;n(".slider-container").addEventListener("touchstart",e=>{m=e.touches[0].clientX});n(".slider-container").addEventListener("touchend",e=>{const s=e.changedTouches[0].clientX-m;s>0?a(-1):s<0&&a(1),d()});const A=async e=>{try{const t=await fetch(e);if(!t.ok)throw new Error("Network response wasn't ok");return await t.json()}catch(t){console.log(`There was error with fetch operation: ${t}`)}},C=async()=>{const e=n(".courses"),s=(await A("./data/courses.json")).map(o=>`<!-- single course -->
  <article class="course">
    <!-- card image -->
    <div class="card-img">
      <img
        src=${o.img}
        alt=""
        class="img"
      />
    </div>
    <!-- card info -->
    <div class="card-body">
      <div class="card-info">
        <p class="course-name">${o.name}</p>
        <p class="course-status">${o.status}</p>
      </div>
      <div class="course-details">
        <img
          src="./images/arrow-right.svg"
          alt="blue arrow right"
        />
        <a href=${o.detailsUrl} target="_blank" aria-label="course details">კურსის დეტალები</a>
      </div>
    </div>
  </article>
  <!-- end of single course -->`).join("");e.innerHTML=s};C();
