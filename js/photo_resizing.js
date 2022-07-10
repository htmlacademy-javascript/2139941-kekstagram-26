export const d = (index) => {
  document.querySelector('.scale__control--value').value = `${index}%`;
  document.querySelector('.img-upload__preview').style.transform = `scale(${index / 100})`;
};

export const rescalingPhoto = (index) => {
  document.querySelector('.scale__control--bigger').addEventListener('click', function () {
    if (index < 100) {
      index = index + 25;
      d(index);
    }
  });
  document.querySelector('.scale__control--smaller').addEventListener('click', function () {
    if (index > 25) {
      index = index - 25;
      d(index);
    }
  });
  return index;
};
