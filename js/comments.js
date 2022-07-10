import { displayElementRemove, displayElementAdd } from './big_picture.js';

const createCounter = (index) => {
  let counter = index;
  return () => {
    const result = counter;
    counter += 5;
    return result;
  };
};

const createRemove = (counter, array) => () => {
  const box = counter();
  if (box < array.length) {
    for (let i = box-5; i < box; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    document.querySelector('.comments-count2').textContent = `${box} из`;
    displayElementRemove('.comments-loader', 'hidden');
  }
  else {
    document.querySelector('.comments-count2').textContent = `${array.length} из`;
    for (let i = box-5; i < array.length; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    displayElementAdd('.comments-loader', 'hidden');
  }
};

export const displayGroupPhotos = (array) => {
  const counter = createCounter(10);
  const hangler = createRemove(counter, array);
  document.querySelector('.comments-loader').addEventListener('click', hangler);
  return () => {
    document.querySelector('.comments-loader').removeEventListener('click', hangler);
  };
};

export const uploadingBatchPhotos = (array) => {
  if (5 >= array.length) {
    document.querySelector('.comments-count2').textContent = `${array.length} из`;
    for (let i = 0; i < array.length; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    displayElementAdd('.comments-loader', 'hidden');
  } else {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    document.querySelector('.comments-count2').textContent = `${5} из`;
    displayElementRemove('.comments-loader', 'hidden');
  }
  return displayGroupPhotos(array);
};


