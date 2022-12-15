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

function divNoRemainder(numStart, numEnd, divider) {
  let numCounter = 0;
  for (let i = numStart; i <= numEnd; i++) {
    if (i % divider === 0) {
      numCounter++;
      // console.log(i);
    }
  }
  console.log(
    `Skaičių intervale tarp ${numStart} ir ${numEnd}, besidalijančių be liekanos iš ${divider} yra ${numCounter} vienetai.`
  );
}

const dividers = [3, 5, 7];
function nCalls(numStart, numEnd, dividers) {
  for (let i = 0; i < dividers.length; i++) {
    divNoRemainder(numStart, numEnd, dividers[i]);
  }
}

nCalls(0, 11, dividers);
nCalls(8, 31, dividers);
nCalls(-18, 18, dividers);

console.log(nCalls(0, 11, dividers));
