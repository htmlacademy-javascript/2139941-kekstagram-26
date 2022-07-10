const lineOfHash = "#dd1 #dd2 #input #value";

const reg = /#(A-Za-zа-яА-Я)+/;
const createValidator = () => {
  const alreadySeen = new Set();
  return (token) => {
    if (alreadySeen.has(token)) {
      return false;
    }
    alreadySeen.add(token);
    return reg.test(token);
  };
};

const validateAllHashTags = (line) => {
  const tokens = line.split(" ");
  const valid = tokens.length <= 5;
  if(!valid){
    return false;
  }

  return tokens.every(createValidator());
};

validateAllHashTags(lineOfHash)
