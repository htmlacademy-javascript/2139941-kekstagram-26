import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
import { uploadNewImage } from './upload_form.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { filterUserPhoto, test } from './filter.js';
import { createSlider } from './slider.js';
import { sentDate } from './feth.js';
import { handlingError, clearFormAfterSubmit } from './mistakes.js';
const qetDate = () => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      document.querySelector('#error2').classList.remove('hidden');
    })
    .then((response) => response.json())
    .then((photos) => {
      test(photos);
      document
        .querySelector('.pictures.container')
        .append(displayUserPhotos(filterUserPhoto(photos),
          document.querySelector('#picture')
        ));
      displayBigPhoto(filterUserPhoto(photos));
    })
    .catch(() => { document.querySelector('#error2').classList.remove('hidden'); });
};
qetDate();
const slider = document.querySelector('.effect-level__slider');

createSlider(slider);
handlingError('#error__button3', '#error3');
handlingError('#error__button1', '#error1');
uploadNewImage();
clearFormAfterSubmit();
replacingPhotoEffects();
sentDate();


