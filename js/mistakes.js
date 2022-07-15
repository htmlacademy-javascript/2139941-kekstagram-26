import { cleanEffects } from './effects_photo.js';
import { setDefaultSettingsFilter } from './photo_resizing.js';
import { defaultSettingsSlider } from './slider.js';
import { validateAllHashTags } from './pristine.js';
import { createLoader } from './fetch.js';

export const STANDARD_FILTER_VALUE = 100;

export const sendError = (button, error) => {
  document.querySelector(button).addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    document.querySelector(error).classList.add('hidden');
    document.querySelector('#upload-submit').disabled = false;
  });
};

export const clearFormAfter = () => {
  cleanEffects();
  setDefaultSettingsFilter(STANDARD_FILTER_VALUE);
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  document.querySelector('#effect-none').checked = true;
  document.querySelector('#upload-file').value = '';
  defaultSettingsSlider();
  document.querySelector('#upload-submit').disabled = false;
};

const FormClickHandler = () => {
  document.querySelector('.success').classList.add('hidden');
  document.querySelector('#upload-submit').disabled = false;
  clearFormAfter();
};

export const clearFormAfterSubmit = () => {
  document.querySelector('#success__button').addEventListener('click', FormClickHandler);
};

export const workErrorForm = (status) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector(status).classList.remove('hidden');
};

const imageSubmitHandler = (evt) => {
  evt.preventDefault();
  if (validateAllHashTags(document.querySelector('.text__hashtags').value) === false) {
    workErrorForm('#error3');
  }
  else {
    document.querySelector('#upload-submit').disabled = true;
    createLoader();
  }
};

export const sentDate = () => {
  document.querySelector('#upload-select-image').addEventListener('submit', imageSubmitHandler);
};
