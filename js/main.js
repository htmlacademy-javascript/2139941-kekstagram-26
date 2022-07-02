import {generateArray} from './util.js';
import {MAX_LENGHT_PHOTOS, createPhotoRecord} from './data.js';
import {displayUserPhotos} from './picture.js';
import {displayBigPhoto, removeBigPhoto} from './big_picture.js';

const array  = generateArray(MAX_LENGHT_PHOTOS, createPhotoRecord);
document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(array,
    document.querySelector('#picture')
  ) );

displayBigPhoto(array);
removeBigPhoto();
