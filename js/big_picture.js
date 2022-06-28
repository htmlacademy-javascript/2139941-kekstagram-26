import {setImgSrc,setElementText} from './picture.js';

const searchElement = (element) => {
  document.querySelector(element)
};
const displayElementremove = (element, display) => {
  searchElement(element).classList.remove(display)
};
const displayElementadd = (element, display) => {
  searchElement(element).classList.add(display)
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

export const displayBigPhoto = (item) => {
  document.querySelector('.pictures.container').addEventListener('click',function (evt) {
  evt.preventDefault();
  displayElementremove('.big-picture','hidden')
  makeBigPhotoFromItem(item)
  displayElementremove('.social__comment-count','hidden')
  displayElementremove('.comments-loader','hidden')
  displayElementadd('.body', '.modal-open')
})};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    displayElementadd('.big-picture','hidden');
    displayElementremove('.body', '.modal-open')}});
document.querySelector('.big-picture__cancel').addEventListener('click', function () {
  displayElementadd('.big-picture','hidden');
  displayElementremove('.body', '.modal-open');
});
