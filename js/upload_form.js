import { displayElementAdd, displayElementRemove } from './util.js';
import { rescalingPhoto, defaultSettingsFilter } from './photo_resizing.js';
import {closeEditForm} from './close_form.js';

const openingUploadForm = () => {
  displayElementRemove('.img-upload__overlay', 'hidden');
  displayElementAdd('body', 'modal-open');
  closeEditForm();
  defaultSettingsFilter(100);
  rescalingPhoto(100);
};

export const uploadNewImage = () => {
  const fileInput = document.querySelector('#upload-file');
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    openingUploadForm();
    reader.onloadend = () => {
      document.querySelector('.img-upload__preview2').src = reader.result;
    }; reader.readAsDataURL(file);
  });
};
