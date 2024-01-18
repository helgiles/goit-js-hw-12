import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const input = document.querySelector('[type="text"]');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const loaderToggle = loader => {
  loader.classList.toggle('loader-is-active');
};

const renderImages = images => {
  return `<li class='gallery-item'>
  <a class='gallery-link' href='${images.largeImageURL}'>
    <img
      class='gallery-image'
      src='${images.webformatURL}'
      alt='${images.tags}'
    />
  </a>
  <div class="image-info">
        <div class="info-item">
          <span class="info-name">Likes</span>
          <span class="info-value">${images.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Views</span>
          <span class="info-value">${images.views}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Comments</span>
          <span class="info-value">${images.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-name">Downloads</span>
          <span class="info-value">${images.downloads}</span>
        </div>
      </div>
</li>`;
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  loaderToggle(loader);

  const searchParams = new URLSearchParams({
    key: '41579263-ea77ea2d4a90e42f3f0b59371',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  axios
    .get(`${BASE_URL}?${searchParams}`)
    .then(response => {
      loaderToggle(loader);
      gallery.innerHTML = '';
      input.value = '';
      const hits = response.data.hits;
      console.log(hits);

      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
        });
        return;
      }

      const imageHTML = hits.reduce((html, image) => {
        return html + renderImages(image);
      }, '');
      gallery.innerHTML = imageHTML;
      lightbox.refresh();
    })
    .catch(error => console.log(error));
});
