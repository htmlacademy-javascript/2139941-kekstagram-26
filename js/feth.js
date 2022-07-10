fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error('a')
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts));


fetch('https://26.javascript.pages.academy/kekstagram/data', {
  method: 'POST',
  headers: {},
  body: JSON.stringify(post)
})
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error('a');
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
