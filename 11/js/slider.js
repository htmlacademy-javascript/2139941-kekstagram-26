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
  slider.noUiSlider.on('update', () => {
    console.log(slider.noUiSlider.get());
  });
};
export const dd = (effect) => {
  if (effect === 'effects__preview--none') {  }
  if (effect === 'effects__preview--chrome') {
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
    document.querySelector('.img-upload__preview').style.filter = `grayscale${slider.noUiSlider.get()}`;
  }
  if (effect === 'effects__preview--sepia') {
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
    document.querySelector('.img-upload__preview').style.filter = `grayscale${slider.noUiSlider.get()}`;
  }
  if (effect === 'effects__preview--marvin') {
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
    document.querySelector('.img-upload__preview').style.filter = `invert${slider.noUiSlider.get()}%`;
  }
  if (effect === 'effects__preview--phobos') {
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
    document.querySelector('.img-upload__preview').style.filter = `blur${slider.noUiSlider.get()}px`;
  }
  if (effect === 'effects__preview--heat') {
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
    document.querySelector('.img-upload__preview').style.filter = `brightness${slider.noUiSlider.get()}`;

  }
};


