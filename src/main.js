import {getImagesByQuery} from './js/pixabay-api'
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input');
const form = document.querySelector('form');

let query = '';

form.addEventListener('submit', async (event) => {
event.preventDefault();
 query = input.value.trim();

if(query === ''){
 page = 1;
 clearGallery();
 hideLoadMoreButton();
    iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}else if(query){
 clearGallery();
 page = 1;
showLoader();
try{
    const images = await getImagesByQuery(query, page);
    
if(images.totalHits === 0){
 iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}else{
 createGallery(images.hits)}
    showLoadMoreButton()}
catch(error) {iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'})}
finally{
     hideLoader();
     showLoadMoreButton();
}
input.value = '';
}
})

let page  = 1;
let per_page = 15;

const btnScroll = document.querySelector('.btn-scroll');

btnScroll.addEventListener('click', async (event) =>{

    page +=1;
    showLoader();
    hideLoadMoreButton();

    try{
const data = await getImagesByQuery(query, page);
const list = document.querySelector('.gallery');
createGallery(data.hits,list);

if( data.hits.length > 0){

const total = Math.ceil(data.totalHits / per_page)
console.log();

if(page >= total){
hideLoadMoreButton();
  iziToast.show({
        message: `We're sorry, but you've reached the end of search results`,
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
    });}else{  
showLoadMoreButton();
}
const item = document.querySelector('li');
const pictureHeight = item.getBoundingClientRect().height;

window.scrollBy({
    top: pictureHeight * 2,
    behavior: 'smooth'
});
}}
catch(error){
console.log(error);
console.log(error.message);
    iziToast.show({
    message: 'Sorry, there are no images matching your search query. Please try again!',
messageColor: '#fafafb',
backgroundColor: '#ef4040',
position: 'topRight'
})
}
finally{
    hideLoader();
}
});