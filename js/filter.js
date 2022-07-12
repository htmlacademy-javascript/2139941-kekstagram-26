import { randomNumberFilter } from './util.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './big_picture.js';
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

const filter = [
  '#filter-default',
  '#filter-random',
  '#filter-discussed',
];
export const filterUserPhoto = (array) => {
  let arr = 0;
  const a = filterRandomPhoto(array);
  const b = filterMostPopular(array);
  if (document.querySelector('#filter-default').classList.contains('img-filters__button--active')) {
    arr = array;
  }
  if (document.querySelector('#filter-random').classList.contains('img-filters__button--active')) {
    arr = a;
  }
  if (document.querySelector('#filter-discussed').classList.contains('img-filters__button--active')) {
    arr = b;
  }
  return arr;
};

export const test = (photos) => {
  const filters = document.querySelectorAll('.img-filters__button');
  for (let i = 0; i < filter.length; i++) {
    filters[i].addEventListener('click', () => {
      filters.forEach((n) => n.classList.remove('img-filters__button--active'));
      document.querySelector(filter[i]).classList.add('img-filters__button--active');
      document.querySelectorAll('.picture').forEach((e) => e.remove());
      const a = filterUserPhoto(photos);
      document
        .querySelector('.pictures.container')
        .append(displayUserPhotos(a,
          document.querySelector('#picture')
        ));
      displayBigPhoto(a);
    });
  }
};
