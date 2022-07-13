let slider = 0;

export const createSlider = (element) => {
  slider = element;
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
  document.querySelector('.effect-level__slider').classList.remove('hidden');
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

const changeSliderValue = (effect, index) => {
  slider.noUiSlider.on('update', () => {
    document.querySelector('.img-upload__preview').style.filter = `${effect}(${slider.noUiSlider.get()}${index})`;
    document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
  });
};

export const changeSliderSettings = (effect) => {
  if (effect === 'effects__preview--none') {
    document.querySelector('.img-upload__preview').style.filter = null;
    document.querySelector('.effect-level__value').value = 0;
    document.querySelector('.effect-level__slider').classList.add('hidden');
  }
  if (effect === 'effects__preview--chrome') {
    slider.noUiSlider.set(1);
    changeSliderOptions(1, 0, 1, 0.1);
    changeSliderValue('grayscale','');

  }
  if (effect === 'effects__preview--sepia') {
    slider.noUiSlider.set(1);
    changeSliderOptions(1, 0, 1, 0.1);
    changeSliderValue('sepia','');
  }
  if (effect === 'effects__preview--marvin') {
    slider.noUiSlider.set(100);
    changeSliderOptions(100, 0, 100, 1);
    changeSliderValue('invert','%');
  }
  if (effect === 'effects__preview--phobos') {
    slider.noUiSlider.set(3);
    changeSliderOptions(3, 0, 3, 0.1);
    changeSliderValue('blur','px');
  }
  if (effect === 'effects__preview--heat') {
    slider.noUiSlider.set(3);
    changeSliderOptions(3, 1, 3, 0.1);
    changeSliderValue('brightness','');
  }
};

export const defaultSettingsSlider = () => {
  document.querySelector('.effect-level__slider').classList.add('hidden');
  slider.noUiSlider.set(100);
  document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
  document.querySelector('.img-upload__preview').style.filter = null;
};
