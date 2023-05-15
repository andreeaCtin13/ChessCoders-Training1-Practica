/**************
 * EXERCISE 1 *
 **************/

// const persons = [
//   {
//     id: 1,
//     firstName: "Michael",
//     lastName: "Scott",
//     age: 45,
//   },
//   {
//     id: 2,
//     firstName: "Fred",
//     lastName: "Flinstone",
//     age: 40,
//   },
//   {
//     id: 3,
//     lastName: "Batman",
//     age: 29,
//   },
//   {
//     id: 4,
//     firstName: "Donald",
//     lasName: "Duck",
//     age: 16,
//   },
//   {
//     id: 5,
//     firstName: "Scooby",
//     lastName: "Doo",
//     age: 9,
//   },
//   {
//     id: 6,
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 500,
//   },
//   {
//     id: 7,
//     firstName: "Wonder",
//     lastName: "Woman",
//     age: 24,
//   },
// ];

// /**
//  * 0. Add a new entry to the array:
//  *  {
//  *    firstName: 'Jerry',
//  *    lastName: 'Mouse',
//  *    age: 6
//  *  }
//  * 1. Sort the array based on person's age (ascending)
//  * 2. Create a function called getById which accepts id as argument and returns the object with the corresponding id. If a person with the specified id does not exist in the array, return an empty object
//  * 3. Based on persons array, create a new array which will also include the fullName for each person, which will have the following format: 'firstName lastName'
//  * 4. Based on persons array, create a new array which will include only those persons whose age is an even number
//  */

// /* SOLUTIONS:*/
// /* 0 */
// persons.push({
//   id: 8,
//   firstName: "Andreea",
//   lastName: "Constantin",
//   age: 20,
// });

// console.log(persons);
// /* 1 */
// persons.sort((a, b) => (a.age > b.age ? 1 : b.age > a.age ? -1 : 0));
// console.log(persons);

// /* 2 */
// function getById(id) {
//   persons.forEach((pers) => {
//     if (pers.id === id) {
//       let obj = {
//         id: pers.id,
//         firstName: pers.firstName,
//         lastName: pers.lasName,
//         age: pers.age,
//       };
//       return obj;
//     }
//   });
//   return {};
// }
// let haha = getById(8);
// console.log(getById(99));
// /* 3 */
// let names = [];
// persons.forEach((pers) => {
//   names.push(pers.firstName + " " + pers.lastName);
// });
// console.log(names);

// /* 4 */
// let age = persons.filter((pers) => pers.age % 2 === 0);
// console.log(age);

// /**************
//  * EXERCISE 2 *
//  **************/

// const ledger = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   "abc",
//   false,
//   "",
//   0,
//   1,
//   "def",
//   99,
//   9,
//   66,
//   "xfz",
//   "abc",
//   "65",
//   "66",
// ];

// /**
//  * 1. Create new array which will only include the numbers from ledger array
//  * 2. Remove duplicates from ledger array. Use strict equality.
//  * 3. Shuffle the array (sort the elements in random order)
//  */

// /* 1 */
// let numberLedger = ledger.filter((number) =>
//   typeof number === "number" ? true : false
// );

// console.log(numberLedger);

// /* 2 */

// let unique = ledger.filter((value, index, array) => {
//   return array.indexOf(value) === index;
// });
// console.log(unique);

// /* 3 */
// function shuffle(array) {
//   let j, x, i;
//   for (i = array.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * (i + 1));
//     x = array[i];
//     array[i] = array[j];
//     array[j] = x;
//   }
//   return array;
// }
// console.log(shuffle(ledger));
// /**************
//  * EXERCISE 3 *
//  **************/

// const company = {
//   name: "Chess Coders",
//   caen_code: "6201",
//   caen_desc: "Activitati de realizare a software-ului la comanda",
//   founders: ["Bogdan", "Tiberiu", "Victor"],
//   slogan: "Always a move ahead",
// };

// const personal_info = {
//   Bogdan: {
//     name: "Bogdan Posedaru",
//     age: 33,
//   },
//   Tiberiu: {
//     name: "Tiberiu Georgescu",
//     age: 32,
//   },
//   Victor: {
//     name: "Victor Ocnarescu",
//     age: 33,
//   },
//   Voldemort: {
//     name: "Lord Voldemort",
//     age: 999,
//   },
// };

// /**
//  * 1. Add a new key to company object, called "since_year", with value 2018
//  * 2. Create an array which will include all keys from the company object ("name", "caen_code", ...)
//  * 3. Create a method called getFounder which takes the founder's first name as an argument and returns an object with the founder's full name and age (taken from personal_info). If no founder with that name, return an empty object
//  */

// /* 1 */

// company.since_year = 2018;
// console.log(company);

// /* 2 */

// const keys = [...Object.keys(company)];
// console.log(keys);

// /* 3 */

// company.getFounder = function (name) {
//   if (personal_info[name]) {
//     return personal_info[name];
//   } else {
//     return {};
//   }
// };
// let founder = company.getFounder("Bogdan");
// console.log(founder);
// let pseudoFounder = company.getFounder("Bogdn");
// console.log(pseudoFounder);
