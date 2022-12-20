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

// function getSum(pin) {
//   const newArr = [];
//   const plus = pin.filter((number) => number > 0);

//   const plusReduce = plus.length;

//   newArr.push(plusReduce);

//   const minus = pin.filter((number) => number < 0);
//   const minusReduce = minus.reduce((acc, num) => acc + num, 0);

//   newArr.push(minusReduce);
//   console.log(newArr);
// }

// console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// function busStop(busy) {
//   let sum = 0;
//   let out = 0;
//   const busArray = busy.flat();
//   const people = busArray.filter((a, i) => i % 2 === 0);
//   const peopleOut = busArray.filter((a, i) => i % 2 !== 0);
//   console.log(people, peopleOut);
//   const peopleOutSum = peopleOut.reduce((acc, a) => (out += a), 0);
//   const peopleSum = people.reduce((acc, a) => (sum += a), 0);
//   console.log(peopleOutSum);

// return peopleSum - peopleOutSum;

// console.log(busArray).map((people) => people[0]);
//   console.log(busArray);
// }

// busStop([
//   [10, 0],
//   [3, 5],
//   [5, 8],
// ]);

// function open(input) {
//   const newA = [];

//   const arrayAge = input.flat();
//   const arrayFilyter = arrayAge.filter((a, i) => i % 2 === 0);
//   const canPlay = arrayAge.filter((a, i) => i % 2 !== 0);
//   console.log(canPlay);

//   const can = canPlay.map((canPlay) => canPlay > 7);
//   console.log(can);

//   const can1 = arrayFilyter.map((arrayFilyter) => arrayFilyter > 55);
//   console.log(can1);
//   for (let i = 1; i < input.length + 1; i++) {
//     if (can[i] === true && can1[i] === true) {
//       newA.push("Senior");
//     } else {
//       newA.push("Open");
//     }
//   }
//   return newA;
// }
// console.log(open([45, 12], [55, 21], [19, -2], [104, 20]));
