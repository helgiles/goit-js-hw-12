import{S as f,a as m,i as p}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",y=document.querySelector(".search-form"),i=document.querySelector('[type="text"]'),l=document.querySelector(".loader"),c=document.querySelector(".gallery");var h=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const u=t=>{t.classList.toggle("loader-is-active")},v=t=>`<li class='gallery-item'>
  <a class='gallery-link' href='${t.largeImageURL}'>
    <img
      class='gallery-image'
      src='${t.webformatURL}'
      alt='${t.tags}'
    />
  </a>
  <div class="image-info">
        <div class="info-item">
          <span class="info-name">Likes</span>
          <span class="info-value">${t.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Views</span>
          <span class="info-value">${t.views}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Comments</span>
          <span class="info-value">${t.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Downloads</span>
          <span class="info-value">${t.downloads}</span>
        </div>
      </div>
</li>`;y.addEventListener("submit",t=>{t.preventDefault();const a=i.value.trim();u(l);const r=new URLSearchParams({key:"41579263-ea77ea2d4a90e42f3f0b59371",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});m.get(`${g}?${r}`).then(s=>{u(l),c.innerHTML="",i.value="";const e=s.data.hits;if(console.log(e),e.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040"});return}const o=e.reduce((n,d)=>n+v(d),"");c.innerHTML=o,h.refresh()}).catch(s=>console.log(s))});
//# sourceMappingURL=commonHelpers.js.map
