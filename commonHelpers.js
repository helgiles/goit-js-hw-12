import{S as g,a as y,i as c}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=document.querySelector(".search-form"),u=document.querySelector(".loader"),d=document.querySelector(".gallery"),l=document.querySelector(".load-more-button");var v=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});const b=y.create({baseURL:"https://pixabay.com/api/",params:{key:"41579263-ea77ea2d4a90e42f3f0b59371",image_type:"photo",orientation:"horizontal",safesearch:"true"}}),L=async a=>{try{return(await b.get("",{params:a})).data}catch(s){console.error(s)}},w=a=>{let s=1,r=!1;const o=40;return async()=>{try{if(r)return c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#fbbf0e"}),[];const{hits:e,totalHits:t}=await L({page:s,per_page:o,q:a});if(s>=Math.ceil(t/o)&&(r=!0),e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"});return}return e.length!==0&&l.classList.remove("is-hidden"),s++,e}catch(e){console.error(e)}}};function k(a=[]){const s=a.reduce((r,{largeImageURL:o,webformatURL:e,tags:t,likes:n,views:f,comments:m,downloads:p})=>r+`<li class='gallery-item'>
    <a class='gallery-link' href='${o}'>
      <img
        class='gallery-image'
        src='${e}'
        alt='${t}'
      />
    </a>
    <div class="image-info">
          <div class="info-item">
            <span class="info-name">Likes</span>
            <span class="info-value">${n}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Views</span>
            <span class="info-value">${f}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Comments</span>
            <span class="info-value">${m}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Downloads</span>
            <span class="info-value">${p}</span>
          </div>
        </div>
  </li>`,"");d.insertAdjacentHTML("beforeend",s),v.refresh()}let i=null;h.addEventListener("submit",async a=>{a.preventDefault(),i!=null&&l.removeEventListener("click",i);const r=new FormData(a.currentTarget).get("input");d.innerHTML="";const o=w(r);i=async()=>{u.classList.remove("is-hidden");const e=await o();u.classList.add("is-hidden"),k(e)},await i(),l.addEventListener("click",i)});
//# sourceMappingURL=commonHelpers.js.map
