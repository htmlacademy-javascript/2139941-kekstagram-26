import {displayElementRemove, displayElementAdd} from './big_picture.js'
import {isEscapeKey} from './util.js'
import {cleaningEffects} from './effects_photo.js'
const openingUploadForm = () => {
//displayElementRemove('.img-upload__overlay','hidden')
displayElementAdd('body', 'modal-open');
}


export const closeEditWindow = () => {
  document.addEventListener('keydown', function (evt) {
    if (isEscapeKey(evt)) {
      displayElementAdd('.img-upload__overlay', 'hidden');
      displayElementRemove('body', 'modal-open')
      cleaningEffects()
    }})}
export const closeEditWindow2 = () => {
  document.querySelector('#upload-cancel').addEventListener('click', function () {
    displayElementAdd('.img-upload__overlay', 'hidden');
    displayElementRemove('body', 'modal-open');
    cleaningEffects()
 })}
export const uploadPhoto  = () => {
  if(document.querySelector('#upload-file').id === 'upload-file'){openingUploadForm()}}


