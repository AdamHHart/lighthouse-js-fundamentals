function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear -= yearOfBirth;
  console.log(name + " is " + age + " years old.");

}
console.log(ageCalculator("Adam", 1994, 2021));
