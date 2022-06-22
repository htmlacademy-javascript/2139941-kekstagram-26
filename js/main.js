const USER_NAMES = [
  'Вася',
  'Кекс',
  'Ульдир',
  'Гулдан',
  'Аня',
  'Повета',
  'Ирган',
  'Пехтор',
];

const POST_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const POST_DESCRIPTIONS = [
  'Я отдыхаю',
  'Веселье!',
  'Жара',
  'Улетное спасение',
  'Котофото',
  'Какой я красавец',
  'Круче просто нету',
  'Что-то непонятное',
  'Увидемся завтра',
  'Непоймаешь',
  'Вот это хвост',
  'А я сегодня мышку сьел',
  'Вернулся от киски',
  'Нечего себе',
  'Мурки',
  'Эпичный прыжок',
  'Только встал','А тебе слабо?',
  'Потягушки',
  'Наверное это про меня',
  'Самый улетный кот на свете',
  'Сейчас бы поесть',
  'Спал весь день',
  'Ночная охота',
  'Неуловимый',
];

const photoInformation = []; // массив для сбора данных по фото
const BLACK_BOX = []; // место хранения промежуточных данных
const comments = []; // массив дл я сбора данных по коментариям
function generateRandomInteger (from, to) {
  if (from > to) {
    [from, to] = [to, from];
  }
  return Math.floor(Math.random() * ((to + 1) - from) + from);
}   // генератор случайных чисел

const sortingRandomNumber = function() {
  return Math.random() - 0.5;
}; // генератор числа для сортировки

const creationPhotoInformation = function(index, namber) {
  photoInformation.push({id : namber});
  photoInformation[index].url = (`photos/${namber}.jpg`);
  photoInformation[index].description = (POST_DESCRIPTIONS[generateRandomInteger(0,24)]);
  photoInformation[index].likes = (generateRandomInteger(15, 200));
  return photoInformation;
}; // функция для генерации данных для фото

const creatingStorageLocation = function(index) {
  BLACK_BOX.push({id : index + 1});
  BLACK_BOX.sort(sortingRandomNumber);
  return BLACK_BOX;
};// функция для сортировки айди, чтобы и не повторялись и  были случайными

const creationNewComment = function(index){
  comments.push(BLACK_BOX[index]);
  comments[index].avatar = (`img/avatar-${generateRandomInteger(1, 6)}.svg`);
  comments[index].message = (POST_MESSAGES[(generateRandomInteger(1, 6) - 1)]);
  comments[index].name = (USER_NAMES[(generateRandomInteger(1, 8) - 1)]);
  return comments;
}; // функция для генерации данных для коментария

Array.from({length: 25},function creationPhotoInformations() {
  creationPhotoInformation(photoInformation.length, photoInformation.length + 1);}); // генерация в photoInformation массива из 25, фотографий

Array.from({length: 25},function creatingTemporaryStorage() {
  creatingStorageLocation(BLACK_BOX.length);}); // генерация в BLACK_BOX 25 id и сортировка их в случайном порядке

Array.from({length: 25},function creationNewComments() {
  creationNewComment(comments.length);}); // генерация в comments массив из 25 коментариев

const arrPhotoInformations = photoInformation.map((el, i) => {
  return {...el, comments: comments[i] };
}); // создание массива с данными и фото и коментария к ней, хранится в arrPhotoInformations    сам пока не изучил map и spread operator
// сегодня буду читать о нем, это мне  подсказали не знал как без фор скрестить 2 массива

/*
function examination(lineNumber, maximumLength)
{
  let comparison=lineNumber<=maximumLength
  return comparison
};
examination(21,20);
*/
