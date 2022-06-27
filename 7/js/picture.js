import {photos} from './data.js';

const template = document.querySelector('#picture').content;

const a = template.querySelector('.picture')

const img = template.querySelector('.picture__img');

const likes = template.querySelector('.picture__likes');

const comments = template.querySelector('.picture__comments');

export const displayUserPhotos = (Array) => {
  likes.textContent = Array.likes;
  img.src = Array.url;
  const commentsLength = Array.comments;
  comments.textContent = commentsLength.length;
  const fragment = document.createDocumentFragment();
  fragment.appendChild(a);
  return fragment
};
