import { isEscapeKey } from './util.js';
import { displayElementAdd, displayElementRemove } from './util.js';
import {showCommentHangler} from './creation_big_picture.js';
let removeBigPhoto = null;
let removeBigPhoto2 = null;

const closeBigPhoto = () => {
  document.addEventListener('keydown', removeBigPhoto2);
};

const closeBigPhoto2 = () => {
  document.querySelector('.big-picture__cancel').addEventListener('click', removeBigPhoto);
};
export const addDialogClose = () => {
  closeBigPhoto();
  closeBigPhoto2();
};

const removeEventListener = () => {
  document.removeEventListener('keydown', removeBigPhoto2);
  document.querySelector('.big-picture__cancel').removeEventListener('click', removeBigPhoto);
};

removeBigPhoto = () => {
  displayElementAdd('.big-picture', 'hidden');
  displayElementRemove('body', 'modal-open');
  document.querySelectorAll('.social__comment').forEach((e) => e.remove());
  if (typeof showCommentHangler === 'function') {
    showCommentHangler();
  }
  removeEventListener();
};

removeBigPhoto2 = function (evt) {
  if (isEscapeKey(evt)) {
    removeBigPhoto();
  }
};
