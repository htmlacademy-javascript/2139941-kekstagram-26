const NUMBOR = 6
function vozvratchisla(from, before)
{ 
    let proverka
     if (from>NUMBOR || before<NUMBOR )
     {proverka = 'Нет такого числа в диапазоне'}
     else {proverka = 'Число есть в диапазоне, '+ NUMBOR}
return proverka
}
vozvratchisla(2,5)




function examination(lineNumber, maximumLength)
{
    let comparison=lineNumber<=maximumLength
    return comparison
}

examination(21,20)


