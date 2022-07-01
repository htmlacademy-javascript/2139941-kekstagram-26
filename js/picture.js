const setPhotoUrlByid = (id) => {
  ``;
};

const setAnchorHref = (a, href) => {
a.href = href;
};

export const setImgSrc = (img, src, text, id) =>{
img.src = src;
img.alt = text
img.id = id
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
setAnchorHref(template.querySelector('.picture'),setPhotoUrlByid);
setImgSrc(template.querySelector('.picture__img'),url, description, id);
setElementText(template.querySelector('.picture__likes'),likes);
setElementText(template.querySelector('.picture__comments'),comments.length);
return template
};

const createCollectPhotos = (template) => (fragment, item) => {
fragment.append(makePhotoFromItem(template.content.cloneNode(true),item))
return fragment
};

export const displayUserPhotos = (item, template) => item.reduce(createCollectPhotos(template),document.createDocumentFragment());
