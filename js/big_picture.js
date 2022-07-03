import { setImgSrc, setElementText } from './picture.js';
import { MAX_LENGTH_PHOTOS } from './data.js'
import { isEscapeKey } from './util.js'
import { displayGroupPhotos, uploadingBatchPhotos } from './comments.js'

export const displayElementRemove = (element, display) => {
  document.querySelector(element).classList.remove(display)
};
export const displayElementAdd = (element, display) => {
  document.querySelector(element).classList.add(display)
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
  template.querySelector('.social__comment').classList.add('hidden')
  return template
};
const createCollectComment = (template) => (fragment, item) => {
  fragment.append(commentBigPhoto(template.content.cloneNode(true), item))
  return fragment
};

const displayUserComment = (item, template) => item.reduce(createCollectComment(template), document.createDocumentFragment());
let showCommentHanler = null
export const displayBigPhoto = (item) => {
  const photoButton = document.querySelectorAll('.picture')
  for (let j = 0; j < photoButton.length; j++) {
    photoButton[j].addEventListener('click', function (evt) {
      evt.preventDefault();
      displayElementRemove('.big-picture', 'hidden');
      makeBigPhotoFromItem(item[j]);
      document.querySelector('.social__comments')
        .append(displayUserComment(item[j].comments, document.querySelector('#social')));
      displayElementAdd('body', 'modal-open');
      showCommentHanler = uploadingBatchPhotos(item[j].comments);
      addDiologClose();
    })
  }
};
let removeBigPhoto = null
let removeBigPhoto2 = null
const removeEventListener = () => {
  document.removeEventListener('keydown', removeBigPhoto2)
  document.querySelector('.big-picture__cancel').removeEventListener('click', removeBigPhoto)
}
removeBigPhoto = () => {
    displayElementAdd('.big-picture', 'hidden');
    displayElementRemove('body', 'modal-open');
    document.querySelectorAll('.social__comment').forEach(e => e.remove());
if(typeof showCommentHanler === 'function') {
  showCommentHanler()
};
    removeEventListener();
}
removeBigPhoto2 = function (evt) {
  if (isEscapeKey(evt)) {
    removeBigPhoto()
  }
}

const closeBigPhoto = () => {
  document.addEventListener('keydown', removeBigPhoto2)
}

const closeBigPhoto2 = () => {
  document.querySelector('.big-picture__cancel').addEventListener('click', removeBigPhoto)
}

export const addDiologClose = () => {
  closeBigPhoto();
  closeBigPhoto2();
}
