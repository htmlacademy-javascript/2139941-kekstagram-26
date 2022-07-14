import { randomNumberFilter } from './util.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './creation_big_picture.js';
import { debounce } from './debouncing.js';

const filters = [
  '#filter-default',
  '#filter-random',
  '#filter-discussed',
];

const RERENDER_DELAY = 500;

const filterMostPopular = (array1) => {
  const array = [...array1];
  const sort = array.sort((a, b) => a.comments.length > b.comments.length ? 1 : -1);
  return sort;
};

const filterRandomPhoto = (array1) => {
  const array = [...array1];
  const mixing = array.sort(randomNumberFilter);
  const sort = mixing.slice(array.length - 10);
  return sort;
};

export const filterUserPhoto = (array) => {
  let boxArroy = 0;
  const a = filterRandomPhoto(array);
  const b = filterMostPopular(array);
  if (document.querySelector('#filter-default').classList.contains('img-filters__button--active')) {
    boxArroy = array;
  }
  if (document.querySelector('#filter-random').classList.contains('img-filters__button--active')) {
    boxArroy = a;
  }
  if (document.querySelector('#filter-discussed').classList.contains('img-filters__button--active')) {
    boxArroy = b;
  }
  return boxArroy;
};

const loadingFilteredImages = (array) => {
  document.querySelectorAll('.picture').forEach((e) => e.remove());
  const newArroy = filterUserPhoto(array);
  document
    .querySelector('.pictures.container')
    .append(displayUserPhotos(newArroy,
      document.querySelector('#picture')
    ));
  displayBigPhoto(newArroy);
};

export const filteringNewArray = (photos) => {
  const filter = document.querySelectorAll('.img-filters__button');
  for (let i = 0; i < filters.length; i++) {
    filter[i].addEventListener('click', () => {
      filter.forEach((n) => n.classList.remove('img-filters__button--active'));
      document.querySelector(filters[i]).classList.add('img-filters__button--active');
      debounce(loadingFilteredImages(photos),RERENDER_DELAY);
    });
  }
};

