import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('ul');

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom'
});


export function createGallery(images){
    
    const img = images.map((image) => {
    return `<li><a href ="${image.largeImageURL}"><img class = "img-div" src ="${image.webformatURL}" alt ="${image.tags}">
    <div class = "elements-div"><div class = "el-div"><b>likes</b><p>${image.likes}</p></div><div class = "el-div"><b>Views</b><p>${image.views}</p></div>
    <div class = "el-div"><b>Comments</b><p>${image.comments}</p></div><div class = "el-div">
    <b>Downloads</b><p>${image.downloads}</p></div></div>
    </a>
    </li>`;
    }).join("");
    
list.insertAdjacentHTML("beforeend", img);
    gallery.refresh();
};

export function clearGallery(){
   list.innerHTML = '';
}

export function showLoader(){
    const loader = document.querySelector('.loader');
    if (loader){
loader.classList.add('is-visible');
}
}

export function hideLoader(){
    const loader = document.querySelector('.loader');
    if(loader){
loader.classList.remove('is-visible');
    }
}

export function showLoadMoreButton(){
     const buttonEl = document.querySelector('.btn-scroll');
    if(buttonEl){
buttonEl.classList.add('is-visible');
    }
}

 export function hideLoadMoreButton(){
   const buttonEl = document.querySelector('.btn-scroll');
    if(buttonEl){
buttonEl.classList.remove('is-visible');
}
}
