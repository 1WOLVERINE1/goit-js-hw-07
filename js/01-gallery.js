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
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

listRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
  document.addEventListener("keydown", (event) =>
    onPressClose(event, instance)
  );
});

function onPressClose(event, instance) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", (event) =>
      onPressClose(event, instance)
    );
  }
}
