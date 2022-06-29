const setPhotoUrlByid = (id) => {
  `photos/${id}.ping`;
};

const setAnchorHref = (a, href) => {
a.href = href;
};

export const setImgSrc = (img, src, text) =>{
img.src = src;
img.alt = text
};

export const setElementText = (element, text) => {
element.innerText = text;
};

const makePhotoFromItem = (template, item) => {
const {
id,
url,
description,
likes,
comments
} = item;
template.querySelector('.picture__img').classList.add(id)
setAnchorHref(template.querySelector('.picture'),setPhotoUrlByid);
setImgSrc(template.querySelector('.picture__img'),url);
setElementText(template.querySelector('.picture__likes'),likes);
setElementText(template.querySelector('.picture__comments'),comments.length);
return template
};

const createCollectPhotos = (template) => (fragment, item) => {
fragment.append(makePhotoFromItem(template.content.cloneNode(true),item))
return fragment
};

export const displayUserPhotos = (item, template) => item.reduce(createCollectPhotos(template),document.createDocumentFragment());
