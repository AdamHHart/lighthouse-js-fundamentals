function howManyHundreds(num) {
  let rounded = num / 100;
  return Math.floor(rounded);
}

console.log(howManyHundreds(866))
console.log(howManyHundreds(1234))
console.log(howManyHundreds(333))