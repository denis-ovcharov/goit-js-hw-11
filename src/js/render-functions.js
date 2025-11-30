import { refs } from "../main";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
    const markup = images.map((image) => 
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="image-info">
          <li class="info"><p>Likes ${image.likes}</p></li>
          <li class="info"><p>Views ${image.views}</p></li>
          <li class="info"><p>Comments ${image.comments}</p></li>
          <li class="info"><p>Downloads ${image.downloads}</p></li>
        </ul>
      </li>`
    ).join('');

    refs.gallery.innerHTML = markup;
    const simpleLightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    simpleLightbox.refresh();
}



export function clearGallery() {
    refs.gallery.innerHTML = '';
}
export function showLoader() {
    refs.loader.classList.remove('hidden');
}
export function hideLoader() {
    refs.loader.classList.add('hidden')
}
