import { generateArray } from './util.js';
import { MAX_LENGTH_PHOTOS, createPhotoRecord } from './data.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
import { uploadNewImage } from './upload_form.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { filterUserPhoto } from './filter.js';
const array = NaN


let arr = filterUserPhoto(array)


document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(arr,
    document.querySelector('#picture')
  ));
displayBigPhoto(arr);
uploadNewImage();

replacingPhotoEffects();

