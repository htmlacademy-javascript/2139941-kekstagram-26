const NUMBER = 5;
function vozvratchisla(from, before)
{
  let proverka
  if (from>NUMBER || before<NUMBER )
  {proverka = 'Нет такого числа в диапазоне'}
  else {proverka = `Число есть в диапазоне, ${NUMBER}`}
  return proverka
};
vozvratchisla(2,5);

function examination(lineNumber, maximumLength)
{
  let comparison=lineNumber<=maximumLength
  return comparison
};
examination(21,20);
