import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imagesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

imagesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

