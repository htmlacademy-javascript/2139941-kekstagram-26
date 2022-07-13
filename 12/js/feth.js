import { validateAllHashTags } from './pristine.js';
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

