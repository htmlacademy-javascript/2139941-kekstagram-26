export function generateRandomInteger (from, to) {
  if(!Number.isInteger(from)){
    throw new Error(`not a number ${from}`);
  }
  if(!Number.isInteger(to)){
    throw new Error(`not a number ${to}`);
  }
  if(from < 0){
    throw new Error(`from must be positive ${from}`);
  }
  if(from > to){
    throw new Error(`from must be in order ${from},${to}`);
  }
  return Math.floor(Math.random() * (to - from) + from);
};

export const gerRandomItem = (items) => items[generateRandomInteger(0, items.length)];

export const generateArray = (length, generator) => Array.from({length},(_,ix) => generator(ix));

export const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};
