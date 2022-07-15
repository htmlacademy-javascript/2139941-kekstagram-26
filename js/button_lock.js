import { removeEventKeydown, closeEditWindow } from './close_form.js';
const hashtagFocusHangler = () => {
  document.querySelector('.text__hashtags').addEventListener('focus',removeEventKeydown);
};
const hashtagBlurHangler = () => {
  document.querySelector('.text__hashtags').addEventListener('blur',closeEditWindow);
};
const descriptionFocusHangler = () => {
  document.querySelector('.text__description').addEventListener('focus',removeEventKeydown);
};
const descriptionBlurHangler = () => {
  document.querySelector('.text__description').addEventListener('blur',closeEditWindow);
};

export const lockButtonEsc = () => {
  hashtagFocusHangler();
  hashtagBlurHangler();
  descriptionFocusHangler();
  descriptionBlurHangler();
};
