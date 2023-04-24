import { galleryItems } from "./gallery-items.js";

const listRef = document.querySelector(".gallery");

const listImgMarkup = createListImgMarkup(galleryItems);

listRef.innerHTML = listImgMarkup;

function createListImgMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
