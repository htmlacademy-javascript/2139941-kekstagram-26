const NUMBER_FOR_RANDOM = 0.5;
export const isEscapeKey = (evt) => evt.key === 'Escape';

export const randomNumberFilter = () => (Math.random() - NUMBER_FOR_RANDOM);

export const displayElementRemove = (element, display) => {
  document.querySelector(element).classList.remove(display);
};

export const displayElementAdd = (element, display) => {
  document.querySelector(element).classList.add(display);
};
