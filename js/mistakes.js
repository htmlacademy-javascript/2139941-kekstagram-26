import { cleaningEffects } from './effects_photo.js';
import { defaultSettingsFilter } from './photo_resizing.js';
import { defaultSettingsSlider } from './slider.js';
import { validateAllHashTags } from './pristine.js';
import {createLoader} from './fetch.js';
export const handlingError = (button, error) => {
  document.querySelector(button).addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    document.querySelector(error).classList.add('hidden');
    document.querySelector('#upload-submit').disabled = false;
  });
};
export const clearFormAfterSubmit = () => {
  document.querySelector('#success__button').addEventListener('click', () => {
    document.querySelector('.success').classList.add('hidden');
    document.querySelector('#upload-submit').disabled = false;
    cleaningEffects();
    defaultSettingsFilter(100);
    document.querySelector('.text__hashtags').value = '';
    document.querySelector('.text__description').value = '';
    document.querySelector('#effect-none').checked = true;
    document.querySelector('#upload-file').value = '';
    defaultSettingsSlider();
  });
};

export const workingErrorForm = (status) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector(status).classList.remove('hidden');
};

export const sentDate = () => {
  document.querySelector('#upload-select-image').addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validateAllHashTags(document.querySelector('.text__hashtags').value) === false) {
      workingErrorForm('#error3');
    }
    else {
      document.querySelector('#upload-submit').disabled = true;
      createLoader();
    }
  });
};
