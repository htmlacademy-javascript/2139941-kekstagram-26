export const defaultSettingsFilter = (index) => {
  document.querySelector('.scale__control--value').value = `${index}%`;
  document.querySelector('.img-upload__preview').style.transform = `scale(${index / 100})`;
};

export const rescalingPhoto = (index) => {
  document.querySelector('.scale__control--bigger').addEventListener('click', () => {
    if (index < 100) {
      index = index + 25;
      defaultSettingsFilter(index);
    }
  });
  document.querySelector('.scale__control--smaller').addEventListener('click', () => {
    if (index > 25) {
      index = index - 25;
      defaultSettingsFilter(index);
    }
  });
  return index;
};
