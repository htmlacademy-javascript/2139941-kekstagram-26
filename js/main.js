import { generateArray } from './util.js';
import { MAX_LENGTH_PHOTOS, createPhotoRecord } from './data.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
import { uploadNewImage } from './upload_form.js';
import { rescalingPhoto } from './photo_resizing.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { createSlider } from './slider.js';
export const array = generateArray(MAX_LENGTH_PHOTOS, createPhotoRecord);

document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(array,
    document.querySelector('#picture')
  ));
displayBigPhoto(array);
uploadNewImage();
rescalingPhoto(100);
replacingPhotoEffects();

