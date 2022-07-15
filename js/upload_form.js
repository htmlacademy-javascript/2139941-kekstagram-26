import { displayElementAdd, displayElementRemove } from './util.js';
import { rescalingPhoto, setDefaultSettingsFilter } from './photo_resizing.js';
import {closeEditForm} from './close_form.js';
import {STANDARD_FILTER_VALUE} from './mistakes.js';
const  INITIAL_PHOTO_SIZE = 100;

const openUploadForm = () => {
  displayElementRemove('.img-upload__overlay', 'hidden');
  displayElementAdd('body', 'modal-open');
  closeEditForm();
  setDefaultSettingsFilter(STANDARD_FILTER_VALUE);
  rescalingPhoto(INITIAL_PHOTO_SIZE);
};

const formChangeHandler = (evt) => {
  const reader = new FileReader();
  const file = evt.target.files[0];
  reader.onloadend = () => {
    document.querySelector('.img-upload__preview2').src = reader.result;
  }; reader.readAsDataURL(file);
  openUploadForm();
};

export const uploadNewImage = () => {
  const fileInput = document.querySelector('#upload-file');
  fileInput.addEventListener('change', formChangeHandler);
};
