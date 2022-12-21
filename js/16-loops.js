// tevas-- -for;
// vaikai -- while, for of, for in, for each
// next level - map, filter, sort

// const marks = [2, 4, 5, 10, 6];

// let sum = 0;
// for (let iFor = 0; iFor < marks.length; iFor++) {
//   sum += marks[iFor];
// }

// // while
// let iWhile = 0;
// let iWhileSum = 0;
// while (iWhile < marks.length) {
//   const mark = marks[iWhile];
//   iWhileSum += mark;
//   iWhile++;
// }

// // for of
// let forSum = 0;
// for (const mov of marks) {
//   forSum += mov;
// }

// console.log(forSum / marks.length);

// // for in ne array

// // foreach
// let sumForEach = 0;
// const forEach = marks.forEach(function (mov) {
//   sumForEach += mov;
// });
// console.log(sumForEach);

// let sumForEach1 = 0;
// const forEach1 = marks.forEach((mov) => (sumForEach1 += mov));
// console.log(sumForEach1);

// // for in

// // per objekta tik

// const user = {
//   name: "Petras",
//   age: 58,
//   number: 13,
//   children: 2,
// };

// let sum1 = 0;
// for (const key in user) {
//   const value = user[key];
//   if (typeof value === "number") sum1 += value;
// }

// console.log(sum1);

const age = [2, 4, 6];
let sumFor = 0;
for (let i = 0; i < age.length; i++) {
  console.log((sumFor += age[i]));
}
let whle = 0;
let sumWhile = 0;
while (whle < age.length) {
  console.log((sumWhile += age[whle]));
  whle++;
}

let sumFor1 = 0;
for (const mov of age) {
  return (sumFor1 += mov);
}

const ages1 = [2, 4, 6];

ages1.forEach(function (age, i) {
  console.log(age);
  console.log(`On ${i + 1} gets ${age}`);
});
