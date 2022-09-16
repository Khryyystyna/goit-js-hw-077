import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);
console.log(galleryMarkup);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', imageClick);

function createGalleryItems(galleryItems){
    return galleryItems.map(({preview, original, description}) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`).join('');
}

function imageClick (event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
}




