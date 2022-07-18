import { removeEventKeydown, closeEditWindow } from './close_form.js';
const hashtagFocusHandler = () => {
  document.querySelector('.text__hashtags').addEventListener('focus',removeEventKeydown);
};
const hashtagBlurHandler = () => {
  document.querySelector('.text__hashtags').addEventListener('blur',closeEditWindow);
};
const descriptionFocusHandler = () => {
  document.querySelector('.text__description').addEventListener('focus',removeEventKeydown);
};
const descriptionBlurHandler = () => {
  document.querySelector('.text__description').addEventListener('blur',closeEditWindow);
};

export const lockButtonEsc = () => {
  hashtagFocusHandler();
  hashtagBlurHandler();
  descriptionFocusHandler();
  descriptionBlurHandler();
};
