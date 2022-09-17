import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__item" href="${galleryItem.original}" >
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" title="${galleryItem.description}" captionDelay="250ms"/>
</a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);
console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { /* option */ });
