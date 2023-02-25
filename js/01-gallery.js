import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = galleryItems
  .map(
    image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join('');

galleryEl.innerHTML = galleryItem;

galleryEl.addEventListener('click', onClickOpenModal);

function onClickOpenModal(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="100%" height="100%">
  `);

  instance.show();

  window.addEventListener('keydown', onEscapeCloseModal);
  function onEscapeCloseModal(e) {
    if (e.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscapeCloseModal);
    }
  }
}
