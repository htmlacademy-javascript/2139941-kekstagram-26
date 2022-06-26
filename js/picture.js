import {photos} from './data.js';

const template = document.querySelector('#picture').content;

const img = template.querySelector('.picture__img');

img.src = photos[0].url;

const likes = template.querySelector('.picture__likes');

likes.textContent = photos[0].likes;

const comments = template.querySelector('.picture__comments');

const commentsLength = photos[0].comments;

comments.textContent = commentsLength.length;

export const picture = document.createDocumentFragment(template);
