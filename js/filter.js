import { randomNumberFilter } from './util.js';
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

const sortingDefaultPhoto = (array1) => {
  const array = [...array1];
  return array;
};

const rr = (array, filter, mode) => {
  document.querySelector(filter).addEventListener('click', (evt) => {
    let arr = mode(array)
    document.querySelectorAll('.img-filters__button').forEach(n => n.classList.remove('img-filters__button--active'))
    document.querySelector(filter).classList.add('img-filters__button--active')
    return arr
  })
}

export const filterUserPhoto = (array) => {
  let arr = array
  rr(array, '#filter-default', sortingDefaultPhoto)
  rr(array, '#filter-random', filterRandomPhoto)
  rr(array, '#filter-discussed', filterMostPopular)
  return arr
}
