
export const createSlider = (element, effect) => {
  const slider = document.querySelector('.effect-level__slider')
  noUiSlider.create(slider, {
    start: 1,
    range: {
      'min': 0,
      'max': 1,
    },
  });
  slider.noUiSlider.on('update', (...rest) => {
    document.querySelector('.effect-level__value').value = slider.noUiSlider.get();
  })
  element.addEventListener('change', (evt) => {
    if (effect === 'effects__preview--none') { slider.noUiSlider.destroy() }
    if (effect === 'effects__preview--chrome') {
      noUiSlider.create(slider,{
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
              return value.toFixed(0)
            }
            return value.toFixed(1)
          },
          from: function (value) {
            return parseFloat(value)
          }
        }
      })
  document.querySelector('.img-upload__preview').style.filter = `grayscale${slider.noUiSlider.get()}`
    }
    if (effect === 'effects__preview--sepia') {
      noUiSlider.create(slider,{
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
            return value.toFixed(0)
          }
          return value.toFixed(1)
        },
        from: function (value) {
          return parseFloat(value)
        }
      }
    })
document.querySelector('.img-upload__preview').style.filter = `grayscale${slider.noUiSlider.get()}`}
if (effect === 'effects__preview--marvin') {
  noUiSlider.create(slider,{
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
        return value.toFixed(0)
      }
      return value.toFixed(1)
    },
    from: function (value) {
      return parseFloat(value)
    }
  }
})
document.querySelector('.img-upload__preview').style.filter = `invert${slider.noUiSlider.get()}%`}
if (effect === 'effects__preview--phobos') {
  noUiSlider.create(slider,{
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
        return value.toFixed(0)
      }
      return value.toFixed(1)
    },
    from: function (value) {
      return parseFloat(value)
    }
  }
})
document.querySelector('.img-upload__preview').style.filter = `blur${slider.noUiSlider.get()}px`}
if (effect === 'effects__preview--heat') {
  noUiSlider.create(slider,{
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
        return value.toFixed(0)
      }
      return value.toFixed(1)
    },
    from: function (value) {
      return parseFloat(value)
    }
  }
})
document.querySelector('.img-upload__preview').style.filter = `brightness${slider.noUiSlider.get()}`}
})
}


