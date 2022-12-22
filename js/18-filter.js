const numbers = [-1, -2, -5, 8, 7];
const negative = [];

for (const number of numbers) {
  if (number < 0) {
    negative.push(number);
  }
}

console.log(negative);

const la = numbers.filter((a) => a < 0);
console.log(la);
