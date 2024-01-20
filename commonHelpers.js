import{S as d,a as f,i as m}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",g=document.querySelector(".search-form"),i=document.querySelector('[type="text"]'),l=document.querySelector(".loader"),c=document.querySelector(".gallery");document.querySelector(".load-more-button");var y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function u(a){a.classList.toggle("loader-is-active")}async function h(){const a=i.value.trim(),s=new URLSearchParams({key:"41579263-ea77ea2d4a90e42f3f0b59371",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});await f.get(`${p}?${s}`).then(t=>{u(l),c.innerHTML="",i.value="";const n=t.data.hits;if(n.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040"});return}v(n),y.refresh()}).catch(t=>console.log(t))}function v(a){return c.innerHTML=a.reduce((s,t)=>s+`<li class='gallery-item'>
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
  </li>`,"")}g.addEventListener("submit",a=>{a.preventDefault(),u(l),h()});
//# sourceMappingURL=commonHelpers.js.map
