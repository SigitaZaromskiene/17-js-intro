// function sum(from, to) {
//   if (typeof from !== "number") {
//     return "Error, added text is not a number";
//   }
//   if (typeof to !== "number") {
//     return "Error, added text is not a number";
//   }
//   if (!isFinite(from)) {
//     return "Error, added text should have numbers";
//   }
//   if (!isFinite(to)) {
//     return "Error, added text should have numbers";
//   }
//   if (from % 1 !== 0) {
//     return "Error, this number should be without comma";
//   }
//   if (to % 1 !== 0) {
//     return "Error, this number should be without comma";
//   }

//   let sum = 0;
//   for (let i = from; i <= to; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // console.log(sum(0, 0));
// console.log(sum(0, 4));
// console.log(sum("la", 4));
// console.log(sum(5.5, 4));
// console.log(sum(0, 100));
// console.log(sum(574, 815));
// console.log(sum(-50, 50));
// console.log(sum(-70, 30));

// 2.

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("labas"));

// 3

// function divNoRemainder(numStart, numEnd, divider) {
//   let numCounter = 0;
//   for (let i = numStart; i <= numEnd; i++) {
//     if (i % divider === 0) {
//       numCounter++;
//       // console.log(i);
//     }
//   }
//   console.log(
//     `Skaičių intervale tarp ${numStart} ir ${numEnd}, besidalijančių be liekanos iš ${divider} yra ${numCounter} vienetai.`
//   );
// }

// const dividers = [3, 5, 7];
// function nCalls(numStart, numEnd, dividers) {
//   for (let i = 0; i < dividers.length; i++) {
//     divNoRemainder(numStart, numEnd, dividers[i]);
//   }
// }

// nCalls(0, 11, dividers);
// nCalls(8, 31, dividers);
// nCalls(-18, 18, dividers);

// console.log(nCalls(0, 11, dividers));
// function digitalRoot(n) {
//   const sum = n
//     .toString()
//     .split("")
//     .map(Number)
//     .reduce(function (acc, a) {
//       return acc + a;
//     }, 0);
//   console.log(sum);
// }

//   console.log(sum);
//   n.reduce(function (acc, n) {
//     return acc + n;
//   }, 0);
// }}

// function digitalRoot(n) {
//   const sum = n.toString().split("");

//   if (sum.length > 1) {
//     return sum.reduce(function (acc, a) {
//       return Number(acc) + Number(a);
//     }, 0);
//   } else {
//     return n;
//   }
// }
// console.log(digitalRoot(1522));

// function digitalRooByAurimas(number) {
//   while (number > 9) {
//     const digitsArr = number.toString().split("");
//     number = digitsArr.reduce((acc, curr) => Number(acc) + Number(curr), 0);
//   }

//   return number;
// }

// console.log(digitalRooByAurimas(942));

// function XO(str) {
//   const string = str.toLowerCase().split("");

//   const o = string.filter((x) => x === "o").length;
//   const x = string.filter((x) => x == "x").length;

//   //   if (o === x || (!o && !x)) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return o === x || (!o && !x);
// }

// XO("Ooxpx");
// console.log(XO("ooxx"));
// console.log(XO("oozxx"));

//   if (str.indexOf("o").length === str.indexOf("x").length) {
//     return true;
//   } else {
//     return false;
//   }

// console.log(XO("oooxx"));

// function smash(year) {
//   const yearsString = year.toString();
//   const age = yearsString.slice(0, -2);
//   console.log(age);

//   if (yearsString.includes("00")) {
//     return +age;
//   } else {
//     return +age + 1;
//   }
// }
// console.log(smash(1700));
// console.log(smash(1750));

// function find(array) {
//   if (array.length > 0) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
//   } else return 0;
// }
// console.log(find([1, 2, 3]));
// console.log(find([1, 2, 3, 4, 5]));

// function hero(b, d) {
//   return b * 2 >= d;
// }

// console.log(hero(2, 3));
function sol(a, b) {
  const string = a.slice(-2);
  console.log(string);
  if (string === b) {
    return true;
  } else return false;
}

sol("abc", "bc");
