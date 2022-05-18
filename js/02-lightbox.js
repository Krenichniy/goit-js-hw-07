import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
  galleryItem: null,
};

function createGalleryMarkup() {
  const galleryGrid = galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
            </a>`;
    })
    .join("");

  refs.gallery.insertAdjacentHTML("afterbegin", galleryGrid);
}

createGalleryMarkup();

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

// function openImageOnClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   event.preventDefault();

//   const imageOriginalLink = event.target.dataset.source;

//   instance
//     .element()
//     .querySelector("img")
//     .setAttribute("src", imageOriginalLink);

//   instance.show();
// }

// refs.gallery.addEventListener("click", openImageOnClick);

// let style = document.createElement("STYLE");
// style.type = "text/css";
// style.innerHTML =
//   ".sl-overlay {background: linear-gradient(0deg, rgba(120,121,9,1) 0%, rgba(0,6,179,1) 100%);}";
// document.querySelector("body").append(style);

// const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
//   closable: true,
//   onShow: () => {
//     document.addEventListener("keydown", closeByEscape);
//   },
//   onClose: (instance) => {
//     instance.element().querySelector("img").setAttribute("src", "");

//     document.removeEventListener("keydown", closeByEscape);
//   },
// });

// function closeByEscape(event) {
//   if (event.code === "Escape") {
//     if (instance.visible()) {
//       instance.close();
//     }
//   }
// }
