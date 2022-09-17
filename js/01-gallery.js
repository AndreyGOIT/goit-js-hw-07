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
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map((galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}" target="_self">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);


// refs.gallery.addEventListener('click', handleClick);

// function handleClick(evt) {
//     console.log(evt.target);
//     console.log(evt.currentTarget);
    
//   console.log("Button was clicked");
// };


/* …or skip the JS file and use basicLightbox as a module:
 */
// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show();


document.addEventListener("keydown", event => {
    event.preventDefault();

  if (event.key && event.code === "Escape") {
    console.log("Закрываем модальное окно");
  }
});
