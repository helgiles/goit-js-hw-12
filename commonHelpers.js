import{S as f,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p=document.querySelector(".search-form"),i=document.querySelector('[type="text"]'),l=document.querySelector(".loader"),c=document.querySelector(".gallery");var g=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const u=o=>{o.classList.toggle("loader-is-active")},y=o=>`<li class='gallery-item'>
  <a class='gallery-link' href='${o.largeImageURL}'>
    <img
      class='gallery-image'
      src='${o.webformatURL}'
      alt='${o.tags}'
    />
  </a>
  <div class="image-info">
        <div class="info-item">
          <span class="info-name">Likes</span>
          <span class="info-value">${o.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Views</span>
          <span class="info-value">${o.views}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Comments</span>
          <span class="info-value">${o.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Downloads</span>
          <span class="info-value">${o.downloads}</span>
        </div>
      </div>
</li>`;p.addEventListener("submit",o=>{o.preventDefault();const r=i.value.trim();u(l);const a=new URLSearchParams({key:"41579263-ea77ea2d4a90e42f3f0b59371",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${m}?${a}`).then(s=>{if(u(l),c.innerHTML="",i.value="",!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040"});return}const e=s.hits.reduce((t,n)=>t+y(n),"");c.innerHTML=e,g.refresh()}).catch(s=>{showAlert(s.toString())})});
//# sourceMappingURL=commonHelpers.js.map
