import { getDate } from './fetch.js';
import { uploadNewImage } from './upload_form.js';
import { replacPhotoEffects } from './effects_photo.js';
import { createSlider } from './slider.js';
import { sentDate } from './mistakes.js';
import { sendError, clearFormAfterSubmit } from './mistakes.js';
import { lockButtonEsc } from './button_lock.js';

getDate();
createSlider();
sendError('#error__button3', '#error3');
sendError('#error__button1', '#error1');
uploadNewImage();
clearFormAfterSubmit();
replacPhotoEffects();
sentDate();
lockButtonEsc();

