// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

const array = [5, 9, 4, 6, 8];

const newArray = array.map((num) => num * num);
console.log("original array: ");
console.log(array);
console.log("squared array: ");
console.log(newArray);

//

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

// function grade(score) {
//   return score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 70
//     ? "C"
//     : score >= 60
//     ? "D"
//     : "F";
// }
// const marks = 92;
// console.log(grade(marks));

//

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {
//   companyName: "Toyota",
//   model: "Suv",
//   year: 2021,
// };

// console.log(car);

// function toChangeCarYear(x) {
//   return (x.year = 2022);
// }

// const changedYear = toChangeCarYear(car);
// console.log("changed year: " + changedYear);

// function useDestructuring({ model, year }) {
//   console.log("By destructuring:");
//   console.log(`Model: ${model}`);
//   console.log(`Year: ${year}`);
// }
// console.log(useDestructuring(car));

//

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// const array = [4, 5, 78, 3, 9, 34, 56];

// function checkPrime(number) {
//   if (number <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % 2 === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     }
//   }
// }
// const newArray = array.filter((num) => checkPrime(num));

// console.log("Original Array: ");
// console.log(array);
// console.log("Filtered Array: ");
// console.log(newArray);

//

// Q5 -  State different use cases of map, filter and reduce functions.

// Map - transforming data

// const array = [1, 2, 3, 4, 5];
// const squaredNumbers = array.map((num) => num * num);
// console.log(squaredNumbers);

// // Filter - selecting subset

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// // Filter - removing invalid data

// const scores = [85, 92, 45, 75, 60];
// const passingScores = scores.filter((score) => score >= 70);
// console.log(passingScores);

// Reduce - summing values

// const numbers = [1, 2, 3, 4, 5, 6];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// // Reduce - flattering array

// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const flattened = arrays.reduce((acc, curr) => acc.concat(curr, []));
// console.log(flattened);

//

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchData() {
//   try {
//     const response = await fetch("htps://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     console.log(data[3].title);
//     console.log(data[4].title);
//     console.log(data[5].title);
//     console.log(data[6].title);
//     console.log(data[7].title);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// fetchData();

//

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing

// const person = {
//   name: "hello",
//   address: {
//     city: "up",
//     country: "India",
//   },
// };

// const phoneNumber = person.contact?.phone;
// console.log(`phone number: ${phoneNumber}`);
