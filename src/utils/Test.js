const endOfExercise = () => console.log("-".repeat(100) + "\n");

// 1. Print number 1 to 10
console.log("1. Print number 1 to 10");
Array(10).forEach((val, index) => console.log(`Number: ${index + 1}`));
endOfExercise();

// 2. Print odd number less than 100
console.log("2. Print odd number less than 100");
Array.from({ length: 100 }, (item, index) => {
  if ((index + 1) % 2 !== 0) {
    console.log(`Odd Number: ${index + 1}`);
  }
});
endOfExercise();

// 3. Print the multiplication table with 7
console.log("3. Print the multiplication table with 7");
Array.from({ length: 10 }, (item, index) => {
  console.log(`7 x ${index + 1} = ${7 * (index + 1)}`);
});
endOfExercise();

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log("4. Print all the multiplication tables with numbers from 1 to 10");
Array.from({ length: 10 }, (item, index) => {
  console.log(`Multiplication table of ${index + 1}`);
  Array.from({ length: 10 }, (item2, index2) => {
    console.log(`${index + 1} x ${index2 + 1} = ${(index + 1) * (index2 + 1)}`);
  });
});
endOfExercise();

// 5. Calculate the sum of numbers from 1 to 10
console.log("5. Calculate the sum of numbers from 1 to 10");
let sum = 0;
Array.from({ length: 10 }, (item, index) => {
  sum += index + 1;
});
console.log(`Sum: ${sum}`);
endOfExercise();

// 6. Calculate 10!
console.log("6. Calculate 10!");
const factorial = Array.from({ length: 10 }, (item, index) => index + 1).reduce(
  (acc, curr) => acc * curr,
  1
);
console.log(`10! = ${factorial}`);
endOfExercise();

// 7. Calculate the sum of even numbers greater than 10 and less than 30
console.log(
  "7. Calculate the sum of even numbers greater than 10 and less than 30"
);
let sumEven = 0;
Array.from({ length: 30 }, (item, index) => {
  if (index > 10 && index < 30 && index % 2 === 0) {
    sumEven += index;
  }
});
console.log(`Sum of even numbers greater than 10 and less than 30: ${sumEven}`);
endOfExercise();

// 8. Create a function that will convert from Celsius to Fahrenheit
console.log(
  "8. Create a function that will convert from Celsius to Fahrenheit"
);
const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
console.log(`25 Celsius to Fahrenheit is: ${celsiusToFahrenheit(25)}`);
endOfExercise();

// 9. Create a function that will convert from Fahrenheit to Celsius
console.log(
  "9. Create a function that will convert from Fahrenheit to Celsius"
);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;
console.log(`100 Fahrenheit to Celsius is: ${fahrenheitToCelsius(100)}`);
endOfExercise();

// 10. Calculate the sum of numbers in an array of numbers
console.log("10. Calculate the sum of numbers in an array of numbers");
const numbers = Array.from({ length: 10 }, (item, index) => index + 1);
const sumArray = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of numbers in an array: ${sumArray}`);
endOfExercise();

// 11. Calculate the average of numbers in an array of numbers
console.log("11. Calculate the average of numbers in an array of numbers");
const averageArray = sumArray / numbers.length;
console.log(`Average of numbers in an array: ${averageArray}`);
endOfExercise();
