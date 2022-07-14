const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}/;
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
    const valid = tokens.length <= 5;
    if (!valid) {
      return false;
    }

    return tokens.every(createValidator());
  }
};
