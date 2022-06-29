import {setImgSrc,setElementText} from './picture.js';

const displayElementremove = (element, display) => {
  document.querySelector(element).classList.remove(display)
};
const displayElementadd = (element, display) => {
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
  setImgSrc(document.querySelector('.big-picture__img'),url);
  setElementText(document.querySelector('.likes-count'),likes);
  setElementText(document.querySelector('.comments-count'),comments.length);
  setElementText(document.querySelector('.social__caption'),description);
};

const commentBigPhoto = (item) => {
const {
id,
avatar,
message,
name
} = item;
setImgSrc(document.querySelector('.social__picture'),avatar, name);
setElementText(document.querySelector('.social__text'),message);
};
const createCollectComment  = (item) => {
  commentBigPhoto(document.querySelector('li','.social__comment').cloneNode(true), item)
};

const displayUserComment = (item) => item.reduce(createCollectComment(item),document.createDocumentFragment());

export const displayBigPhoto = (item) => {
  document.querySelector('.pictures.container').addEventListener('click',function (evt) {
  evt.preventDefault();
  const index = document.querySelector('.picture__img').id - 1
  displayElementremove('.big-picture','hidden');
  makeBigPhotoFromItem(item[index]);
  displayUserComment(item[index].comments)
  displayElementadd('.social__comment-count','hidden');
  displayElementadd('.comments-loader','hidden');
  displayElementadd('body', 'modal-open');
})};

export const removeBigPhoto = () => {
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    displayElementadd('.big-picture','hidden');
    displayElementremove('body', 'modal-open')}});
document.querySelector('.big-picture__cancel').addEventListener('click', function () {
  displayElementadd('.big-picture','hidden');
  displayElementremove('body', 'modal-open');
});};
