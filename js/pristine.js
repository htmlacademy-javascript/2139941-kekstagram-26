const MAX_NUMBAR_HASHTAGS = 5;
const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const createValidator = () => {
  const alreadySeen = new Set();
  return (token) => {
    token = token.toUpperCase();
    if (alreadySeen.has(token)) {
      return false;
    }
    alreadySeen.add(token);
    return reg.test(token);
  };
};

export const validateAllHashTags = (line) => {
  if (line === '') { return true;}
  else {
    const tokens = line.split(' ');
    const valid = tokens.length <= MAX_NUMBAR_HASHTAGS;
    if (!valid) {
      return false;
    }

    return tokens.every(createValidator());
  }
};
