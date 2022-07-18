import { isEscapeKey } from './util.js';
import { displayElementAdd, displayElementRemove } from './util.js';
let bigPhotoClickHandler = null;
let bigPhotoKeydownHandler = null;

const closeBigPhoto = () => {
  document.addEventListener('keydown', bigPhotoKeydownHandler);
};

const closeBigPhoto2 = () => {
  document.querySelector('.big-picture__cancel').addEventListener('click', bigPhotoClickHandler);
};
export const addDialogClose = () => {
  closeBigPhoto();
  closeBigPhoto2();
};

const removeEventKeydown = () => {
  document.removeEventListener('keydown', bigPhotoKeydownHandler);
};
const removeEventClick = () => {
  document.querySelector('.big-picture__cancel').removeEventListener('click', bigPhotoClickHandler);
};
bigPhotoClickHandler = () => {
  displayElementAdd('.big-picture', 'hidden');
  displayElementRemove('body', 'modal-open');
  document.querySelectorAll('.social__comment').forEach((e) => e.remove());
  removeEventKeydown();
  removeEventClick();
};

bigPhotoKeydownHandler = function (evt) {
  if (isEscapeKey(evt)) {
    bigPhotoClickHandler();
  }
};
