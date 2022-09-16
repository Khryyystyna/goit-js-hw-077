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
        `<a class="gallery__item" 
        href="${original}">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}"/>
</a>`).join('');
}

function imageClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== "IMG") {
        return;
    }
}

    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});






