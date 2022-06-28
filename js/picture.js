const setPhotoUrlByid = (id) => {
  `photos/${id}.ping`;
};

const setAnchorHref = (a, href) => {
a.href = href;
};

const setImgSrc = (img, src) =>{
img.src = src;
};

const setElementText = (element, text) => {
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
