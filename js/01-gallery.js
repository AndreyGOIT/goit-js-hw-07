// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// 6. Используй готовую разметку модального окна с изображением из
// примеров библиотеки basicLightbox.
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}" target="_self">
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
    <img src='${event.target.dataset.source}' width="800" height="600">
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
