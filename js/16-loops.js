// tevas-- -for;
// vaikai -- while, for of, for in, for each
// next level - map, filter, sort

const marks = [2, 4, 5, 10, 6];

let sum = 0;
for (let iFor = 0; iFor < marks.length; iFor++) {
  sum += marks[iFor];
}

// while
let iWhile = 0;
let iWhileSum = 0;
while (iWhile < marks.length) {
  const mark = marks[iWhile];
  iWhileSum += mark;
  iWhile++;
}

// for of
let forSum = 0;
for (const mov of marks) {
  forSum += mov;
}

console.log(forSum / marks.length);

// for in ne array

// foreach
let sumForEach = 0;
const forEach = marks.forEach(function (mov) {
  sumForEach += mov;
});
console.log(sumForEach);

let sumForEach1 = 0;
const forEach1 = marks.forEach((mov) => (sumForEach1 += mov));
console.log(sumForEach1);
