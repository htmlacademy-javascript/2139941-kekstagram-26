const imagePreview = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const effects = [
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

const steps = [
  0.1,
  0.1,
  1,
  0.1,
  0.1,
];

const minValueSliders = [
  0,
  0,
  0,
  0,
  1,
];

const maxValueSliders = [
  1,
  1,
  100,
  3,
  3,
];

const nameEffects = [
  'grayscale',
  'sepia',
  'invert',
  'blur',
  'brightness',
];

const signEffects = [
  '',
  '',
  '%',
  'px',
  '',
];

export const createSlider = () => {
  noUiSlider.create(slider, {
    animate: true,
    start: 1,
    range: {
      'min': 0,
      'max': 1,
    },
  });
};

const changeSliderOptions = (start, min, max, step) => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    animate: true,
    start: start,
    connect: 'lower',
    range: {
      'min': min,
      'max': max,
    },
    step: step,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });
};

export const defaultSettingsSlider = () => {
  slider.classList.add('hidden');
  imagePreview.style.filter = null;
  effectLevel.value = null;
};

const changeSliderValue = (effect, index) => {
  slider.noUiSlider.on('update', () => {
    imagePreview.style.filter = `${effect}(${slider.noUiSlider.get()}${index})`;
    effectLevel.value = slider.noUiSlider.get();
  });
};

export const changeSliderSettings = (effect) => {
  for (let i = 0; i < effects.length; i++) {
    if (effect === 'effects__preview--none') {
      defaultSettingsSlider();
      break;
    }
    if (effect === effects[i]) {
      slider.noUiSlider.set(maxValueSliders[i]);
      changeSliderOptions(maxValueSliders[i], minValueSliders[i], maxValueSliders[i], steps[i]);
      changeSliderValue(nameEffects[i], signEffects[i]);
      break;
    }
  }
};
