import{S as g,a as h,i as c}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y=document.querySelector(".search-form"),u=document.querySelector(".loader"),d=document.querySelector(".gallery"),l=document.querySelector(".load-more-button");var v=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(){const o=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}const L=h.create({baseURL:"https://pixabay.com/api/",params:{key:"41579263-ea77ea2d4a90e42f3f0b59371",image_type:"photo",orientation:"horizontal",safesearch:"true"}}),w=async o=>{try{return(await L.get("",{params:o})).data}catch(s){console.error(s)}},S=o=>{let s=1,a=!1;const n=40;return async()=>{try{if(a)return c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#fbbf0e"}),[];const{hits:e,totalHits:t}=await w({page:s,per_page:n,q:o});if(s>=Math.ceil(t/n)&&(a=!0),e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"});return}return e.length!=0&&l.classList.remove("is-hidden"),s++,e}catch(e){console.error(e)}}};function q(o=[]){const s=o.reduce((a,{largeImageURL:n,webformatURL:e,tags:t,likes:r,views:f,comments:m,downloads:p})=>a+`<li class='gallery-item'>
    <a class='gallery-link' href='${n}'>
      <img
        class='gallery-image'
        src='${e}'
        alt='${t}'
      />
    </a>
    <div class="image-info">
          <div class="info-item">
            <span class="info-name">Likes</span>
            <span class="info-value">${r}</span>
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
  </li>`,"");d.insertAdjacentHTML("beforeend",s),v.refresh(),b()}let i=null;y.addEventListener("submit",async o=>{o.preventDefault(),i!=null&&l.removeEventListener("click",i);const a=new FormData(o.currentTarget).get("input");d.innerHTML="";const n=S(a);i=async()=>{u.classList.remove("is-hidden");const e=await n();u.classList.add("is-hidden"),q(e)},await i(),l.addEventListener("click",i)});
//# sourceMappingURL=commonHelpers.js.map
