import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
  galleryItem: null,
};

refs.gallery.addEventListener("click", openImageOnClick);

function createGalleryMarkup() {
  const galleryGrid = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`;
    })
    .join("");

  refs.gallery.insertAdjacentHTML("afterbegin", galleryGrid);
}
createGalleryMarkup();

console.log(galleryItems);

function openImageOnClick(event) {
  if (event.target.nodeName !== "IMG") return;

  event.preventDefault();

  const imageLink = event.target.dataset.value;

  const { original, description } = galleryItems;
  refs.galleryItem = document.querySelector("gallery__image");

  const instance = basicLightbox.create(
    `   <img
      class="gallery__image"
      src="${original}"
      data-source="${original}"
      alt="${description}"
    />`
  );

  instance.show();
}
