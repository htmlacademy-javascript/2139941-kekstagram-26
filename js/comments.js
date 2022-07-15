import { displayElementAdd, displayElementRemove } from './util.js';
const NUMBER_COMMENTS = 5;
const INITIAL_NUMBER_COMMENTS = 10;
const createCounter = (index) => {
  let counter = index;
  return () => {
    const result = counter;
    counter += NUMBER_COMMENTS;
    return result;
  };
};

const createRemove = (counter, array) => () => {
  const box = counter();
  if (box < array.length) {
    for (let i = box-NUMBER_COMMENTS; i < box; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    document.querySelector('.comments-count2').textContent = `${box} из`;
    displayElementRemove('.comments-loader', 'hidden');
  }
  else {
    document.querySelector('.comments-count2').textContent = `${array.length} из`;
    for (let i = box-NUMBER_COMMENTS; i < array.length; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    displayElementAdd('.comments-loader', 'hidden');
  }
};

export const displayGroupComments = (array) => {
  const counter = createCounter(INITIAL_NUMBER_COMMENTS);
  const commentClickHangler = createRemove(counter, array);
  document.querySelector('.comments-loader').addEventListener('click', commentClickHangler);
  return () => {
    document.querySelector('.comments-loader').removeEventListener('click', commentClickHangler);
  };
};

export const uploadBatchComments = (array) => {
  if (NUMBER_COMMENTS >= array.length) {
    document.querySelector('.comments-count2').textContent = `${array.length} из`;
    for (let i = 0; i < array.length; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    displayElementAdd('.comments-loader', 'hidden');
  } else {
    for (let i = 0; i < NUMBER_COMMENTS; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    document.querySelector('.comments-count2').textContent = `${NUMBER_COMMENTS} из`;
    displayElementRemove('.comments-loader', 'hidden');
  }
  return displayGroupComments(array);
};
