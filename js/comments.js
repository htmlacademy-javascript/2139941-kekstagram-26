import { displayElementRemove, displayElementAdd } from './big_picture.js'


export const uploadingBatchPhotos = (array) => {
  if (5 >= array.length) {
    document.querySelector('.comments-count2').textContent = `${array.length} из`
    for (let i = 0; i < array.length; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden')
    }
    displayElementAdd('.comments-loader', 'hidden')
  } else {
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden')
    }
    document.querySelector('.comments-count2').textContent = `${5} из`
    displayElementRemove('.comments-loader', 'hidden')
  }
  return displayGroupPhotos(array)
}

const createRemove = (counter, array) => (evt) => {
  let box = counter()
  let boxes = array.length
  if (box < boxes) {console.log(box)
    for (let i = 0; i < box; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden')
    };
    document.querySelector('.comments-count2').textContent = `${box} из`;
    displayElementRemove('.comments-loader', 'hidden')
  }
  if (box >= boxes) {console.log(box)
    document.querySelector('.comments-count2').textContent = `${boxes} из`;
    for (let i = 0; i < boxes; i++) {
      document.querySelectorAll('.social__comment')[i].classList.remove('hidden')
    };
    displayElementAdd('.comments-loader', 'hidden')
  }
}

export const displayGroupPhotos = (array) => {
  const createCounter = (index) => {
    let counter = index;
    return () => {
      const result = counter;
      counter += 5
      return result
    }
  }
  const counter = createCounter(10)
  const hangler = createRemove(counter, array)
  document.querySelector('.comments-loader').addEventListener('click', hangler)
  return () => {
    document.querySelector('.comments-loader').removeEventListener('click', hangler)
  }
}
