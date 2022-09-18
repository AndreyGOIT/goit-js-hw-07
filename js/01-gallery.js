import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
    <img src='${event.target.dataset.source}' width="1200" height="900">
`,
    {
      onShow: () => document.addEventListener("keydown", onEscBtnPress),
      onClose: () => document.removeEventListener("keydown", onEscBtnPress),
    }
  );

  instance.show();

  function onEscBtnPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
