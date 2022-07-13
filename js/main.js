import { qetDate } from './fetch.js';
import { uploadNewImage } from './upload_form.js';
import { replacingPhotoEffects } from './effects_photo.js';
import { createSlider } from './slider.js';
import { sentDate } from './mistakes.js';
import { handlingError, clearFormAfterSubmit } from './mistakes.js';
import { lockButtonEsc } from './close_form.js';

qetDate();
createSlider(document.querySelector('.effect-level__slider'));
handlingError('#error__button3', '#error3');
handlingError('#error__button1', '#error1');
uploadNewImage();
clearFormAfterSubmit();
replacingPhotoEffects();
sentDate();
lockButtonEsc();
