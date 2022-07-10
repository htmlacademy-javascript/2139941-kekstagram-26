import { displayElementRemove, displayElementAdd } from './big_picture.js';
import { isEscapeKey } from './util.js';
import { cleaningEffects } from './effects_photo.js';
import { rescalingPhoto, d } from './photo_resizing.js';
const closeEditWindow = () => {
  document.addEventListener('keydown', removeEditWindow);
};

const closeEditWindow2 = () => {
  document.querySelector('#upload-cancel').addEventListener('click', removeEditWindow2);
};

const closeEditForm = () => {
  closeEditWindow();
  closeEditWindow2();
};
const openingUploadForm = () => {
  displayElementRemove('.img-upload__overlay', 'hidden');
  displayElementAdd('body', 'modal-open');
  closeEditForm();
  d(100)
  rescalingPhoto(100);
};

let removeEditWindow = null;
let removeEditWindow2 = null;

const removeEventListener = () => {
  document.addEventListener('keydown', removeEditWindow);
  document.querySelector('#upload-cancel').addEventListener('click', removeEditWindow2);
};
removeEditWindow2 = () => {
  displayElementAdd('.img-upload__overlay', 'hidden');
  displayElementRemove('body', 'modal-open');
  document.querySelector('.img-upload__preview2').src;
  cleaningEffects();
  removeEventListener();
};
removeEditWindow = function (evt) {
  if (isEscapeKey(evt)) {
    removeEditWindow2();
  }
};

export const uploadNewImage = () => {
  const fileInput = document.querySelector('#upload-file');
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    openingUploadForm();
    reader.onloadend = () => {
      document.querySelector('.img-upload__preview2').src = reader.result;
    }; reader.readAsDataURL(file);
  });
};
