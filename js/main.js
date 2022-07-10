import { generateArray } from './util.js';
import { MAX_LENGTH_PHOTOS, createPhotoRecord } from './data.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
import { uploadNewImage } from './upload_form.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { filterUserPhoto } from './filter.js';
import { createSlider } from './slider.js';
const array = NaN;
const slider = document.querySelector('.effect-level__slider');
createSlider(slider);

const arr = filterUserPhoto(array);

document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(arr,
    document.querySelector('#picture')
  ));
displayBigPhoto(arr);
uploadNewImage();

replacingPhotoEffects();

