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

export const changeSliderSettings = (effect) => {
  if (effect === 'effects__preview--none') {
    document.querySelector('.img-upload__preview').style.filter = null;
    slider.noUiSlider.set(100);
    document.querySelector('.effect-level__slider').classList.add('hidden');
  }
  if (effect === 'effects__preview--chrome') {
    slider.noUiSlider.set(1);
    document.querySelector('.effect-level__slider').classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      animate: true,
      start: 1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 1,
      },
      step: 0.1,
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
    slider.noUiSlider.on('update', () => {
      document.querySelector('.img-upload__preview').style.filter = `grayscale(${slider.noUiSlider.get()})`;
      document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
    });
  }
  if (effect === 'effects__preview--sepia') {
    slider.noUiSlider.set(1);
    document.querySelector('.effect-level__slider').classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      animate: true,
      start: 1,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 1,
      },
      step: 0.1,
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
    slider.noUiSlider.on('update', () => {
      document.querySelector('.img-upload__preview').style.filter = `grayscale(${slider.noUiSlider.get()})`;
      document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
    });
  }
  if (effect === 'effects__preview--marvin') {
    slider.noUiSlider.set(100);
    document.querySelector('.effect-level__slider').classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      animate: true,
      start: 100,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 100,
      },
      step: 1,
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
    slider.noUiSlider.on('update', () => {
      document.querySelector('.img-upload__preview').style.filter = `invert(${slider.noUiSlider.get()}%)`;
      document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
    });
  }
  if (effect === 'effects__preview--phobos') {
    slider.noUiSlider.set(3);
    document.querySelector('.effect-level__slider').classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      animate: true,
      start: 3,
      connect: 'lower',
      range: {
        'min': 0,
        'max': 3,
      },
      step: 0.1,
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
    slider.noUiSlider.on('update', () => {
      document.querySelector('.img-upload__preview').style.filter = `blur(${slider.noUiSlider.get()}px)`;
      document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
    });
  }
  if (effect === 'effects__preview--heat') {
    slider.noUiSlider.set(3);
    document.querySelector('.effect-level__slider').classList.remove('hidden');
    slider.noUiSlider.updateOptions({
      animate: true,
      start: 3,
      connect: 'lower',
      range: {
        'min': 1,
        'max': 3,
      },
      step: 0.1,
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
    slider.noUiSlider.on('update', () => {
      document.querySelector('.img-upload__preview').style.filter = `brightness(${slider.noUiSlider.get()})`;
      document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
    });
  }
};

export const defaultSettingsSlider = () => {
  document.querySelector('.effect-level__slider').classList.add('hidden');
  slider.noUiSlider.set(100);
  document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
  document.querySelector('.img-upload__preview').style.filter = null;
};
