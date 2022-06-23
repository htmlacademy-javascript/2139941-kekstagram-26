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

const MAX_LENGHT_PHOTOS = 25;

function generateRandomInteger (from, to) {
  if(!Number.isInteger(from)){
    throw new Error(`not a number ${from}`);
  }
  if(!Number.isInteger(to)){
    throw new Error(`not a number ${to}`);
  }
  if(from < 0){
    throw new Error(`from must be possitive ${from}`);
  }
  if(from > to){
    throw new Error(`from must be in order ${from},${to}`);
  }
  return Math.floor(Math.random() * (to - from) + from);
}

const gerRandomItem = (items) => items[generateRandomInteger(0, items.length)];

const generateArray = (length, generator) => Array.from({length},(_,ix) => generator(ix));

const creationNewComment = (index) => {
  return {
    id: index * 10000 + generateRandomInteger(1,999),
    avatar: (`img/avatar-${generateRandomInteger(1, 6)}.svg`),
    message: gerRandomItem(POST_MESSAGES),
    name: gerRandomItem(USER_NAMES),
  };};

const createPhotoRecord = (index) => {
  const number = index + 1;
  return {
    id: number,
    url: (`photos/${number}.jpg`),
    description:  gerRandomItem(POST_DESCRIPTIONS),
    likes: (generateRandomInteger(15, 200)),
    comments: generateArray(generateRandomInteger(1,25),creationNewComment),
  };};

const photos =  generateArray(MAX_LENGHT_PHOTOS,createPhotoRecord);
