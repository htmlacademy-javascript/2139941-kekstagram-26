import { changeSliderSettings } from './slider.js';
export const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

export const cleanEffects = () => {
  for (let i = 0; i < effects.length; i++) {
    document.querySelector('.img-upload__preview').classList.remove(effects[i]);
  }
};

export const replacPhotoEffects = () => {
  const elements = document.querySelectorAll('.effects__radio');
  for (let i = 0; i < effects.length; i++) {
    const element = elements[i];
    element.addEventListener('click', () => {
      cleanEffects();
      document.querySelector('.img-upload__preview').classList.add(effects[i]);
      changeSliderSettings(effects[i]);
    });
  }
};
