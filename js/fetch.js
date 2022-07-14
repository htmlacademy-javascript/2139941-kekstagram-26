import { workingErrorForm } from './mistakes.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto  } from './creation_big_picture.js';
import { filterUserPhoto, filteringNewArray } from './filter.js';

export const createLoader = () => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body: new FormData(document.querySelector('.img-upload__form')),
  })
    .then((response) => {
      if (response.ok) {
        workingErrorForm('.success');
      } else {
        workingErrorForm('#error1');
      }
    })
    .catch(() => {
      workingErrorForm('#error1');
    });
};

export const qetDate = () => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      document.querySelector('#error2').classList.remove('hidden');
    })
    .then((response) => response.json())
    .then((photos) => {
      filteringNewArray(photos);
      document
        .querySelector('.pictures.container')
        .append(displayUserPhotos(filterUserPhoto(photos),
          document.querySelector('#picture')
        ));
      displayBigPhoto(filterUserPhoto(photos));
    })
    .catch(() => { document.querySelector('#error2').classList.remove('hidden'); });
};
