const form2 = document.querySelector('.img-upload__form')
const pristine = new Pristine(form2)

form2.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log(isValid);
  } else {
    console.log(isValid);
  }
});
