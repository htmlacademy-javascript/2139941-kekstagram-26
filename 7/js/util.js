export function generateRandomInteger (from, to) {
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
