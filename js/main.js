import {
  createPhotoRecord,
  MAX_LENGTH_PHOTOS
} from './data.js';
import {
  generateArray
} from './util.js';
import {
  displayUserPhotos
} from './picture.js';

document
  .querySelector('.pictures.container')
  .append(displayUserPhotos(
    generateArray(MAX_LENGTH_PHOTOS, createPhotoRecord),
    document.querySelector('#picture'),
  ), );
