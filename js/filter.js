import { randomNumberFilter } from './util.js';
import { displayUserPhotos } from './picture.js';
import { displayBigPhoto } from './creation_big_picture.js';
import { debounce } from './debouncing.js';

const imgFilter = 'img-filters__button--active';

const filters = [
  '#filter-default',
  '#filter-random',
  '#filter-discussed',
];

const RERENDER_DELAY = 500;
const NUMBER_DISPLAYED_ACCOUNTS = 10;

const filterMostPopular = (array) => {
  const accounts = [...array];
  const mostPopulars = accounts.sort((a, b) => a.comments.length < b.comments.length ? 1 : -1);
  return mostPopulars;
};

const filterRandomPhoto = (array) => {
  const accounts = [...array];
  const randomAccounts = accounts.sort(randomNumberFilter);
  const numderRandomAccounts = randomAccounts.slice(accounts.length - NUMBER_DISPLAYED_ACCOUNTS);
  return numderRandomAccounts;
};

export const filterUserPhoto = (array) => {
  let filterUsers = array;
  if (document.querySelector('#filter-random').classList.contains(imgFilter)) {
    filterUsers = filterRandomPhoto(array);
  }
  if (document.querySelector('#filter-discussed').classList.contains(imgFilter)) {
    filterUsers = filterMostPopular(array);
  }
  return filterUsers;
};

const loadingFilteredImages = (array) => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
  const filterUsers = filterUserPhoto(array);
  document
    .querySelector('.pictures.container')
    .append(displayUserPhotos(filterUsers,
      document.querySelector('#picture')
    ));
  displayBigPhoto(filterUsers);
};

const delayLoadingFilteredImages = debounce(loadingFilteredImages,RERENDER_DELAY);

export const filteringNewArray = (photos) => {
  const filter = document.querySelectorAll('.img-filters__button');
  for (let i = 0; i < filters.length; i++) {
    filter[i].addEventListener('click', () => {
      filter.forEach((n) => n.classList.remove(imgFilter));
      document.querySelector(filters[i]).classList.add(imgFilter);
      delayLoadingFilteredImages(photos);
    });
  }
};

