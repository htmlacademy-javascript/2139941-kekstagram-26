import { isEscapeKey } from './util.js';
import {clearFormAfter} from './mistakes.js';
const form = document.querySelector('.img-upload__overlay');
const error = document.querySelector('#error1');
const success = document.querySelector('.success');
let errorClickHandler = null;
let errorKeydownHandler = null;
let successClickHandler = null;
let successKeydownHandler = null;

const closeErrorKeydown = () => {
  document.addEventListener('keydown', errorKeydownHandler);
};
const closeErrorClick = () => {
  document.addEventListener('click', errorClickHandler);
};

const removeErrorKeydown = () => {
  document.removeEventListener('keydown', errorKeydownHandler);
};
const removeErrorClick = () => {
  document.removeEventListener('click', errorClickHandler);
};

errorKeydownHandler = () => {
  if (isEscapeKey) {
    error.classList.add('hidden');
    form.classList.remove('hidden');
    removeErrorKeydown();
  }
};

errorClickHandler = (evt) => {
  if (evt.target === error) {
    error.classList.add('hidden');
    form.classList.remove('hidden');
    removeErrorClick();
  }
};

export const closeErrorWindow = () => {
  closeErrorKeydown();
  closeErrorClick();
  document.querySelector('#upload-submit').disabled = false;
};


const closeSuccessKeydown = () => {
  document.addEventListener('keydown', successKeydownHandler);
};
const closeSuccessClick = () => {
  document.addEventListener('click', successClickHandler);
};

const removeSuccessKeydown = () => {
  document.removeEventListener('keydown', successKeydownHandler);
};
const removeSuccessClick = () => {
  document.removeEventListener('click', successClickHandler);
};

successKeydownHandler = () => {
  if (isEscapeKey) {
    success.classList.add('hidden');
    removeSuccessKeydown();
  }
};

successClickHandler = (evt) => {
  if (evt.target === success) {
    success.classList.add('hidden');
    removeSuccessClick();
  }
};

export const closeSuccessWindow = () => {
  closeSuccessKeydown();
  closeSuccessClick();
  clearFormAfter();
};
