import { clearFormAfter } from './mistakes.js';
import { cleanEffects } from './effects_photo.js';
import { isEscapeKey } from './util.js';
import { displayElementAdd, displayElementRemove } from './util.js';


let editFormKeydownHandler = null;
let editFormClickHandler = null;

export const closeEditWindow = () => {
  document.addEventListener('keydown', editFormKeydownHandler);
};

const closeEditWindow2 = () => {
  document.querySelector('#upload-cancel').addEventListener('click', editFormClickHandler);
};

export const closeEditForm = () => {
  closeEditWindow();
  closeEditWindow2();
};

export const removeEventKeydown = () => {
  document.removeEventListener('keydown', editFormKeydownHandler);
};
const removeEventClick = () => {
  document.querySelector('#upload-cancel').removeEventListener('click', editFormClickHandler);
};

const removeEventListener = () => {
  removeEventKeydown();
  removeEventClick();
};

editFormClickHandler = () => {
  if (!document.querySelector('.img-upload__overlay').classList.contains('hidden')) {
    displayElementAdd('.img-upload__overlay', 'hidden');
    displayElementRemove('body', 'modal-open');
    cleanEffects();
    removeEventListener();
    clearFormAfter();
  }
};

editFormKeydownHandler = function (evt) {
  if (isEscapeKey(evt)) {
    editFormClickHandler();
  }
};

