import { setImgSrc, setElementText } from './picture.js';
import { uploadingBatchPhotos } from './comments.js';
import {addDialogClose} from './close_big_picture.js';
import { displayElementAdd, displayElementRemove } from './util.js';
export let showCommentHangler = null;
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
