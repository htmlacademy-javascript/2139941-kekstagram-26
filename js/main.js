import { generateArray } from './util.js';
import { MAX_LENGTH_PHOTOS, createPhotoRecord } from './data.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
import { uploadNewImage } from './upload_form.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { createSlider } from './slider.js';
import { filterUserPhoto } from './filter.js';
const array = NaN
fetch('https://26.javascript.pages.academy/kekstagram/data')
.then((response) => {
  if(response.ok){
    return response
  }
  throw new Error('a')
})
.then((response) => response.json())
.then((posts)=> console.log(posts))


fetch('https://26.javascript.pages.academy/kekstagram/data',{
  method: 'POST',
  headers: {},
  body: JSON.stringify(post)
})
.then((response) => {
  if(response.ok){
    return response
  }
  throw new Error('a')
})
.then((response) => response.json())
.then((json)=> console.log(json))


let arr = filterUserPhoto(array)


document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(arr,
    document.querySelector('#picture')
  ));
displayBigPhoto(arr);
uploadNewImage();

replacingPhotoEffects();

