import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightboxBtn: document.querySelector('lightbox__button'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightbox: document.querySelector('.js-lightbox'),
};

// создаем разметку для gallery

const listGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
  )
  .join('');

refs.gallery.insertAdjacentHTML('beforeend', listGallery);

// вешаем слушателей на gallery и lightbox

refs.gallery.addEventListener('click', openImg);
refs.lightbox.addEventListener('click', closeImg);

function openImg(event) {
  event.preventDefault();
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.src = `${event.target.dataset.source}`;
  refs.lightbox.alt = `${event.target.alt}`;
  window.addEventListener('keydown', navigatImg);
}
function closeImg({ target }) {
  if (target.nodeName === 'IMG') return;
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
  refs.lightbox.alt = '';
  window.addEventListener('keydown', closeWithEsc);
  window.addEventListener('keydown', navigatImg);
}

// закрытие модального окна на Esc
function closeWithEsc(event) {
  if (event.key === 'Escape') {
    closeImg(event);
  }
}

// навигация влево-вправо по картинкам

function navigatImg(event) {
  const images = [...document.querySelectorAll('.gallery__image')];
  const imagesScr = images.map(el => el.dataset.source);
  const Id = imagesScr.indexOf(refs.lightboxImg.src);
  if (event.key === 'ArrowLeft') {
    if (Id === 0) {
      return;
    }
    refs.lightboxImg.src = `${imagesScr[Id - 1]}`;
  }
  if (VRDisplayEvent.key === 'ArrowRight') {
    if (Id === imagesScr.length - 1) {
    } else {
      refs.lightboxImg.src = `${imagesScr[Id + 1]}`;
    }
  }
}
