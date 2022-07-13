import { setImgSrc, setElementText } from './picture.js';
import { isEscapeKey } from './util.js';
import { uploadingBatchPhotos } from './comments.js';

let removeBigPhoto = null;
let removeBigPhoto2 = null;
export const displayElementRemove = (element, display) => {
  document.querySelector(element).classList.remove(display);
};

export const displayElementAdd = (element, display) => {
  document.querySelector(element).classList.add(display);
};

const closeBigPhoto = () => {
  document.addEventListener('keydown', removeBigPhoto2);
};

const closeBigPhoto2 = () => {
  document.querySelector('.big-picture__cancel').addEventListener('click', removeBigPhoto);
};

const addDialogClose = () => {
  closeBigPhoto();
  closeBigPhoto2();
};

const makeBigPhotoFromItem = (item) => {
  const {
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
    avatar,
    message,
    name
  } = item;
  setImgSrc(template.querySelector('.social__picture'), avatar, name);
  setElementText(template.querySelector('.social__text'), message);
  template.querySelector('.social__comment').classList.add('hidden');
  return template;
};

const createCollectComment = (template) => (fragment, item) => {
  fragment.append(commentBigPhoto(template.content.cloneNode(true), item));
  return fragment;
};

const displayUserComment = (item, template) => item.reduce(createCollectComment(template), document.createDocumentFragment());
let showCommentHangler = null;
export const displayBigPhoto = (item) => {
  const photoButton = document.querySelectorAll('.picture');
  for (let j = 0; j < photoButton.length; j++) {
    photoButton[j].addEventListener('click', (evt) => {
      evt.preventDefault();
      displayElementRemove('.big-picture', 'hidden');
      makeBigPhotoFromItem(item[j]);
      document.querySelector('.social__comments')
        .append(displayUserComment(item[j].comments, document.querySelector('#social')));
      displayElementAdd('body', 'modal-open');
      showCommentHangler = uploadingBatchPhotos(item[j].comments);
      addDialogClose();
    });
  }
};

const removeEventListener = () => {
  document.removeEventListener('keydown', removeBigPhoto2);
  document.querySelector('.big-picture__cancel').removeEventListener('click', removeBigPhoto);
};

removeBigPhoto = () => {
  displayElementAdd('.big-picture', 'hidden');
  displayElementRemove('body', 'modal-open');
  document.querySelectorAll('.social__comment').forEach((e) => e.remove());
  if (typeof showCommentHangler === 'function') {
    showCommentHangler();
  }
  removeEventListener();
};

removeBigPhoto2 = function (evt) {
  if (isEscapeKey(evt)) {
    removeBigPhoto();
  }
};


