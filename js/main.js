import {generateArray} from './util.js';
import {MAX_LENGHT_PHOTOS, createPhotoRecord} from './data.js'
import {displayUserPhotos} from './picture.js';
import {displayBigPhoto} from './big_picture.js';

document
.querySelector('.pictures.container')
.append(displayUserPhotos(
    generateArray(MAX_LENGHT_PHOTOS, createPhotoRecord),
    document.querySelector('#picture')
  ) );

displayBigPhoto(generateArray(MAX_LENGHT_PHOTOS, createPhotoRecord))

