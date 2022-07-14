import { defaultSettingsSlider } from './slider.js';
import { cleaningEffects } from './effects_photo.js';
import { isEscapeKey } from './util.js';
import { displayElementAdd, displayElementRemove } from './util.js';

let hiddenEditForm = null;
let hiddenEditForm2 = null;

const closeEditWindow = () => {
  document.addEventListener('keydown', hiddenEditForm);
};

const closeEditWindow2 = () => {
  document.querySelector('#upload-cancel').addEventListener('click', hiddenEditForm2);
};

export const closeEditForm = () => {
  closeEditWindow();
  closeEditWindow2();
  defaultSettingsSlider();
};

const removeEventListener = () => {
  document.removeEventListener('keydown', hiddenEditForm);
  document.querySelector('#upload-cancel').removeEventListener('click', hiddenEditForm2);
};


hiddenEditForm2 = () => {
  displayElementAdd('.img-upload__overlay', 'hidden');
  displayElementRemove('body', 'modal-open');
  cleaningEffects();
  removeEventListener();
};

hiddenEditForm = function (evt) {
  if (isEscapeKey(evt)) {
    hiddenEditForm2();
  }
};

export const lockButtonEsc = () => {
  document.querySelector('.text__hashtags').addEventListener('focus', () => {
    document.removeEventListener('keydown', hiddenEditForm);
  }
  );
  document.querySelector('.text__hashtags').addEventListener('blur', () => {
    document.addEventListener('keydown', hiddenEditForm);
  }
  );
  document.querySelector('.text__description').addEventListener('focus', () => {
    document.removeEventListener('keydown', hiddenEditForm);
  }
  );
  document.querySelector('.text__description').addEventListener('blur', () => {
    document.addEventListener('keydown', hiddenEditForm);
  }
  );
};
