import { displayElementRemove, displayElementAdd } from './big_picture.js'
import { isEscapeKey } from './util.js'
import { cleaningEffects } from './effects_photo.js'

const openingUploadForm = () => {
  displayElementRemove('.img-upload__overlay', 'hidden')
  displayElementAdd('body', 'modal-open');
  closeEditForm()
}

let removeEditWindow = null
let removeEditWindow2 = null

const removeEventListener = () => {
  document.addEventListener('keydown', removeEditWindow)
  document.querySelector('#upload-cancel').addEventListener('click', removeEditWindow2)
}
removeEditWindow2 = () => {
  displayElementAdd('.img-upload__overlay', 'hidden');
  displayElementRemove('body', 'modal-open')
  cleaningEffects()
  removeEventListener()
}
removeEditWindow = function (evt) {
  if (isEscapeKey(evt)) {
    removeEditWindow2()
  }
}
const closeEditWindow = () => {
  document.addEventListener('keydown', removeEditWindow)
}

const closeEditWindow2 = () => {
  document.querySelector('#upload-cancel').addEventListener('click', removeEditWindow2)
}

const closeEditForm = () => {
  closeEditWindow()
  closeEditWindow2()
}

export const uploadPhoto = () => {
  if (document.querySelector('#upload-file').id === 'upload-file') { openingUploadForm() }
}
