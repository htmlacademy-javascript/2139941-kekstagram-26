const NAME = ['Вася','Кекс', 'Ульдир', 'Гулдан', 'Аня', 'Повета', 'Ирган', 'Пехтор'];
const MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const DESCRIPTION= ['Я отдыхаю','Веселье!','Жара','Улетное спасение','Котофото','Какой я красавец','Круче просто нету','Что-то непонятное',
  'Увидемся завтра','Непоймаешь','Вот это хвост','А я сегодня мышку сьел','Вернулся от киски','Нечего себе','Мурки','Эпичный прыжок','Только встал','А тебе слабо?',
  'Потягушки','Наверное это про меня','Самый улетный кот на свете','Сейчас бы поесть','Спал весь день','Ночная охота','Неуловимый'];
const userProfile = [];

function earchRandomNumber(from, before)
{let NUMBER = Math.floor(Math.random()*(before+1));
  if(from>before){
    const g = from;
    from = before;
    before = g;
  }
  let randomNumber;
  while (from>NUMBER)
  {NUMBER = Math.floor(Math.random()*(before+1));}
  randomNumber = NUMBER;
  return randomNumber;}

const  creatingNewId = function(){
  for(let i=0;i<=24;i++){
    userProfile.push({id : i+1});}
  return userProfile;
};
const creatingNewUrl = function(){
  for(let i=0;i<=24;i++){
  userProfile[i].url = (`photos/${i+1}.jpg`);}
  return userProfile;
};
const creatingNewDescription = function(){
  for(let i=0;i<=24;i++){
    userProfile[i].DESCRIPTION = (DESCRIPTION[i]);}
      return userProfile;
};
const creatingNewLikes= function(){
  for(let i=0;i<=24;i++){
    userProfile[i].likes = (earchRandomNumber(15,200));}
      return userProfile;
};
const comments = [];
const creatingCommentsId = function(){
  for(let i=0;i<=24;i++){
    comments.push({id : (3*i+1)*earchRandomNumber(23,25)});}
      return comments;
};

const creatingCommentsAvatar = function(){
  for(let i=0;i<=24;i++){
    comments[i].avatar =(`img/avatar-${earchRandomNumber(1,6)}.svg`);}
      return comments;};
const creatingCommentsMessage = function(){
  for(let i=0;i<=24;i++){
    comments[i].MESSAGE =(MESSAGE[(earchRandomNumber(1,6)-1)]);}
      return comments;
};
const creatingCommentsName = function(){
  for(let i=0;i<=24;i++){
    comments[i].NAME =(NAME[(earchRandomNumber(1,8)-1)]);}
      return comments;
};
const creatingNewComments = function(){
  for(let i=0;i<=24;i++){
    userProfile[i].comments =(comments[i]);}
      return userProfile;};
const creationUserProfile = function(){
  creatingNewId();
  creatingNewUrl();
  creatingNewDescription();
  creatingNewLikes();
  creatingCommentsId();
  creatingCommentsAvatar();
  creatingCommentsMessage();
  creatingCommentsName();
  creatingNewComments();
}; //основной массив с профилями

creationUserProfile();

/*
function examination(lineNumber, maximumLength)
{
  let comparison=lineNumber<=maximumLength
  return comparison
};
examination(21,20);
*/
