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
const loadMoreBtn = document.querySelector('.load-more-button');

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let page = 1;
let per_page = 40;

function loaderToggle(loader) {
  loader.classList.toggle('loader-is-active');
}

async function getImages() {
  const query = input.value.trim();
  const searchParams = new URLSearchParams({
    key: '41579263-ea77ea2d4a90e42f3f0b59371',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  await axios
    .get(`${BASE_URL}?${searchParams}`)
    .then(response => {
      loaderToggle(loader);
      gallery.innerHTML = '';
      input.value = '';
      const hits = response.data.hits;

      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
        });
        return;
      }

      renderImages(hits);
      lightbox.refresh();
      page = 1;
    })
    .catch(error => console.log(error));
}

function renderImages(image) {
  return (gallery.innerHTML = image.reduce(
    (html, images) =>
      html +
      `<li class='gallery-item'>
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
  </li>`,
    ''
  ));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  loaderToggle(loader);
  getImages();
});

// loadMoreBtn.addEventListener('submit', event => {
//   event.preventDefault();
//   loaderToggle(loader);
//   getImages();
// });
