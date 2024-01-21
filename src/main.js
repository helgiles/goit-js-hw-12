import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more-button');

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const api = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '41579263-ea77ea2d4a90e42f3f0b59371',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
});

const getImages = async params => {
  try {
    const response = await api.get('', { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getImagesRequest = q => {
  let page = 1;
  let lastPage = false;
  const per_page = 40;

  return async () => {
    try {
      if (lastPage) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          backgroundColor: '#EF4040',
        });
        return [];
      }
      const { hits, totalHits } = await getImages({ page, per_page, q });
      if (page >= Math.ceil(totalHits / per_page)) {
        lastPage = true;
      }

      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
        });
        return;
      }

      page++;

      return hits;
    } catch (error) {
      console.error(error);
    }
  };
};

function renderImages(images = []) {
  const markup = images.reduce(
    (
      html,
      { largeImageURL, webformatURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      `<li class='gallery-item'>
    <a class='gallery-link' href='${largeImageURL}'>
      <img
        class='gallery-image'
        src='${webformatURL}'
        alt='${tags}'
      />
    </a>
    <div class="image-info">
          <div class="info-item">
            <span class="info-name">Likes</span>
            <span class="info-value">${likes}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Views</span>
            <span class="info-value">${views}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Comments</span>
            <span class="info-value">${comments}</span>
          </div>
          <div class="info-item">
            <span class="info-name">Downloads</span>
            <span class="info-value">${downloads}</span>
          </div>
        </div>
  </li>`,
    ''
  );
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

let fetch = null;

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (fetch != null) {
    loadMoreButton.removeEventListener('click', fetch);
  }

  const input = new FormData(event.currentTarget);
  const query = input.get('input');
  gallery.innerHTML = '';
  const fetchImages = getImagesRequest(query);

  fetch = async () => {
    const images = await fetchImages();
    renderImages(images);
  };
  await fetch();

  loadMoreButton.addEventListener('click', fetch);
});
