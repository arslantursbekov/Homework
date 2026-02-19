let a = prompt();
const sumDigitsShort = (num) => String(num).split('').reduce((sum, digit) => sum + +digit, 0);

console.log(sumDigitsShort(a));
