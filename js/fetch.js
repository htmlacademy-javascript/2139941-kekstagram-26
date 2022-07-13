import { validateAllHashTags } from './pristine.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto  } from './creation_big_picture.js';
import { filterUserPhoto, test } from './filter.js';
const workingErrorForm = (status) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector(status).classList.remove('hidden');
};

const createLoader = () => {
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
      test(photos);
      document
        .querySelector('.pictures.container')
        .append(displayUserPhotos(filterUserPhoto(photos),
          document.querySelector('#picture')
        ));
      displayBigPhoto(filterUserPhoto(photos));
    })
    .catch(() => { document.querySelector('#error2').classList.remove('hidden'); });
};
