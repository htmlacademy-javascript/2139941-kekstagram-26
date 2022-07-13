import { cleaningEffects } from './effects_photo.js';
import { defaultSettingsFilter } from './photo_resizing.js';
import { defaultSettingsSlider } from './slider.js';
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
