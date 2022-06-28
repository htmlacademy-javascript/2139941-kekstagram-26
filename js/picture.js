const getPhotoUrlById = (id)=>`/photos/${id}.png`;
const setAnchorHref = (a, href) => {
  a.href = href;
};
const setImgSrc = (img, src) => {
  img.src = src;
};
const setImgAlt = (img, text)=>{
  img.alt = text;
};
const setImg = (img, src, text)=>{
  setImgAlt(img,text);
  setImgSrc(img,src);
};
const setElementText = (element, text) => {
  element.innerText = text;
};

const makePhotoFromItem = (template, item)=>{
  const {
    id,
    url,
    description,
    likes,
    comments
  } = item;
  setAnchorHref(template.querySelector('.picture'),getPhotoUrlById(id));

  setImg(template.querySelector('.picture__img'), url, description);

  setElementText(template.querySelector('.picture__likes'), likes);

  setElementText(template.querySelector('.picture__comments'), comments.length);
  return template;
};

/**
 * @callback PhotoCollector
 * @param {DocumentFragment} fragment
 * @param {any} item
 */
/**
 *
 * @param {HTMLTemplateElement} template
 * @returns {PhotoCollector}
 */
const createCollectPhotos = (template) => (fragment, item) => {
  fragment.append(makePhotoFromItem(template.content.cloneNode(true), item));
  return fragment;
};

/**
 *
 * @param {any[]} items
 * @param {HTMLTemplateElement} template
 * @returns
 */
export const displayUserPhotos = (items, template) => items.reduce(createCollectPhotos(template), document.createDocumentFragment());
