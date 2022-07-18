const MAX_PHOTO_SIZE = 100;
const MIN_PHOTO_SIZE = 25;
const STEP_PHOTO_SIZE = 25;

export const setDefaultSettingsFilter = (index) => {
  document.querySelector('.scale__control--value').value = `${index}%`;
  document.querySelector('.img-upload__preview').style.transform = `scale(${index / MAX_PHOTO_SIZE})`;
};

export const rescalPhoto = (index) => {
  const photoClickHandler = (evt) => {
    if (evt.target === document.querySelector('.scale__control--smaller')) {
      if (index > MIN_PHOTO_SIZE) {
        index = index - STEP_PHOTO_SIZE;
        setDefaultSettingsFilter(index);
      }
    }
    if (evt.target === document.querySelector('.scale__control--bigger')) {
      if (index < MAX_PHOTO_SIZE) {
        index = index + STEP_PHOTO_SIZE;
        setDefaultSettingsFilter(index);
      }
    }
  };
  document.querySelector('.img-upload__scale').addEventListener('click', photoClickHandler);
};
