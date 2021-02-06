const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(8));
console.log(isEven(13));
//OR

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

