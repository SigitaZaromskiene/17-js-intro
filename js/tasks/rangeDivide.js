// function rangeDivide(from, to, divider) {
//   if (
//     !isFinite(from) ||
//     !isFinite(to) ||
//     typeof from != "number" ||
//     typeof to !== "number" ||
//     from % 1 !== 0 ||
//     to % 1 !== 0
//   ) {
//     return "error";
//   }

//   let count = 0;
//   for (let i = from; i <= to; i++) {
//     if (i % divider === 0) {
//       count++;
//     }
//   }
//   return `Skaiciu intervale tarp ${from} ir ${to} besidalinanciu be liekanos is ${divider} yra ${count} vnt.`;
// }
// console.log(rangeDivide(0, 11, 3));
// console.log(rangeDivide(0, [11, 2], 3));
// console.log(
//   rangeDivide(0, 11, 5),
//   "Skaiciu intervale tarp 0 ir 11 besidalinanciu be liekanos is 5 yra 3 vnt."
// );
// console.log(
//   rangeDivide(0, 11, 7),
//   "Skaiciu intervale tarp 0 ir 11 besidalinanciu be liekanos is 7 yra 2 vnt."
// );

function getSum(pin) {
  const newArr = [];
  const plus = pin.filter((number) => number > 0);

  const plusReduce = plus.length;

  newArr.push(plusReduce);

  const minus = pin.filter((number) => number < 0);
  const minusReduce = minus.reduce((acc, num) => acc + num, 0);

  newArr.push(minusReduce);
  console.log(newArr);
}

console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
