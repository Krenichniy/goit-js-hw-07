import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

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

function openImageOnClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const imageOriginalLink = event.target.dataset.source;

  instance
    .element()
    .querySelector("img")
    .setAttribute("src", imageOriginalLink);

  instance.show();
}

refs.gallery.addEventListener("click", openImageOnClick);

const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
  closable: true,
  onShow: () => {
    document.addEventListener("keydown", closeByEscape);
  },
  onClose: (instance) => {
    instance.element().querySelector("img").setAttribute("src", "");

    document.removeEventListener("keydown", closeByEscape);
  },
});

function closeByEscape(event) {
  if (event.code === "Escape") {
    if (instance.visible()) {
      instance.close();
    }
  }
}
