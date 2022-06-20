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

const comments = [];

const photoInformation = [];

function generateRandomInteger (from, to) {
  if (from > to) {
    [from, to] = [to, from];
  }
  return Math.floor(Math.random() * ((to + 1) - from) + from);
}

const sortingRandomNumber = function() {
  return Math.random() - 0.5;
};

const creationPhotoInformation = function() {
  for (let j = 0; j <= 24; j++) {  
    const BLACK_BOX = [];
    BLACK_BOX.push({id : j + 1});
    BLACK_BOX.sort(sortingRandomNumber);}
  for (let i = 0; i <= 24; i++) {
    photoInformation.push({id : i + 1});
    photoInformation[i].url = (`photos/${i + 1}.jpg`);
    photoInformation[i].description = (POST_DESCRIPTIONS[i]);
    photoInformation[i].likes = (generateRandomInteger(15,200));
    comments.push(BLACK_BOX[i]);
    comments[i].avatar = (`img/avatar-${generateRandomInteger(1,6)}.svg`);
    comments[i].message = (POST_MESSAGES[(generateRandomInteger(1,6) - 1)]);
    comments[i].name = (USER_NAMES[(generateRandomInteger(1,8) - 1)]);
    photoInformation[i].comments = comments[i];}
  return photoInformation;
};
creationPhotoInformation();

/*
function examination(lineNumber, maximumLength)
{
  let comparison=lineNumber<=maximumLength
  return comparison
};
examination(21,20);
*/
