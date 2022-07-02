import { setImgSrc, setElementText } from './picture.js';
import {MAX_LENGHT_PHOTOS} from './data.js';
import {isEscapeKey} from './util.js';
const displayElementremove = (element, display) => {
  document.querySelector(element).classList.remove(display);
};
const displayElementadd = (element, display) => {
  document.querySelector(element).classList.add(display);
};
const makeBigPhotoFromItem = (item) => {
  const {
    id,
    url,
    description,
    likes,
    comments
  } = item;
  setImgSrc(document.querySelector('.big-picture__img').children[0], url);
  setElementText(document.querySelector('.likes-count'), likes);
  setElementText(document.querySelector('.comments-count'), comments.length);
  setElementText(document.querySelector('.social__caption'), description);
};

const commentBigPhoto = (template, item) => {
  const {
    id,
    avatar,
    message,
    name
  } = item;
  setImgSrc(template.querySelector('.social__picture'), avatar, name);
  setElementText(template.querySelector('.social__text'), message);
  return template;
};
const createCollectcomment = (template) => (fragment, item) => {
  fragment.append(commentBigPhoto(template.content.cloneNode(true), item));
  return fragment;
};

const displayUsercomment = (item, template) => item.reduce(createCollectcomment(template), document.createDocumentFragment());

export const displayBigPhoto = (item) => {
  const photoButton = document.querySelectorAll('.picture');
  for (let j = 0; j < MAX_LENGHT_PHOTOS; j++) {
    photoButton[j].addEventListener('click', (evt) => {
      evt.preventDefault();
      displayElementremove('.big-picture', 'hidden');
      makeBigPhotoFromItem(item[j]);
      document.querySelector('.social__comments')
        .append(displayUsercomment(item[j].comments, document.querySelector('#social')));
      displayElementadd('body', 'modal-open');
    });
  }
};
const closeBigPhoto = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      displayElementadd('.big-picture', 'hidden');
      displayElementremove('body', 'modal-open');
      document.querySelectorAll('.social__comment').forEach((e)=>e.remove());
    }});};
const closeBigPhoto2 = () => {
  document.querySelector('.big-picture__cancel').addEventListener('click', () => {
    displayElementadd('.big-picture', 'hidden');
    displayElementremove('body', 'modal-open');
    document.querySelectorAll('.social__comment').forEach((e)=>e.remove());
  });};
export const removeBigPhoto = () => {
  closeBigPhoto();
  document.removeEventListener('keydown', closeBigPhoto());
  closeBigPhoto2();
  document.querySelector('.big-picture__cancel').removeEventListener('click', closeBigPhoto2());
};
