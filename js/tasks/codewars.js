// function accum(s) {
//   //   const split = s.split("-");
//   //   console.log(split);
//   for (let i = 0; i < s.length; i++) {
//     console.log(
//       s
//         .split("")
//         .map((a) => a[i] + a[i + 1])
//         .join("-")
//     );
//   }
// }

// console.log(accum("bcdsd"));

//

// function remove(x) {
//   const split = x.split("");
//   console.log(split);
//   const replace = x.replaceAll("ą", "a");
//   const replace1 = x.replaceAll("ć", "c");
//   console.log(replace1);
// }

// remove("Jędrzej Błądziński");

// const namas = "namas";
// const ats = namas.splice(1);

// function getGrade(s1, s2, s3) {
//   avg = (s1 + s2 + s3) / 3;
//   if (avg < 60) return "F";
//   else if (avg < 70) return "D";
//   else if (avg < 80) return "C";
//   else if (avg < 90) return "B";
//   else return "A";
// }

// console.log(getGrade(70, 70, 100));

// function mad(a, b) {
//   let sum = 0;
//   let sumSq = 0;

//   for (const sq of a) {
//     console.log((sum = +(sq ** 2)));
//   }

//   for (const cu of b) {
//     console.log((sumSq = +(cu ** 3)));
//   }

//   if (sum > sumSq) {
//     return true;
//   } else {
//     return false;
//   }
// }

// mad([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]);

// function arrayMadness(a, b) {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0, { length } = a; i < length; ++i) {
//     sum1 += a[i] ** 2;
//   }
//   for (let i = 0, { length } = b; i < length; ++i) {
//     sum2 += b[i] ** 3;
//   }
//   return sum1 > sum2;
// }
// function sortArray(array) {
//   const odd = array.filter((a) => a % 2 !== 0);
//   console.log(odd);
//   const sorted = odd.sort((a, b) => a - b);
//   console.log(sorted);
//   console.log(array.map((x) => (x % 2 ? sorted.shift() : x)));
//   //   const sort = odd.sort((c, b) => c - b);
//   //   return array.push(sort);
// }

// sortArray([5, 3, 2, 8, 1, 4]);

// function highAndLow(numbers) {
//   const toNum = numbers.split(" ").map((a) => Number(a));
//   console.log(toNum);
//   const max = Math.max.apply(Math, toNum);
//   const min = Math.min.apply(Math, toNum);

//   console.log(max, min);
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

// function fakeBin(x) {
//   return x.filter(function (a, i) {
//     return i % 2 === 0;
//   });
// }

// console.log(fakeBin(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// function ab(x) {
// const string = String(x).split("");
// console.log(string);

// const result = string.map((x) => String(x ** 2)
// console.log(result);
// for (num of string) {
//   let double = num ** 2;
//   console.log(String(double));
// }
// console.log(double);
// }
//   const numArr = String(x).split("");
//   const dounbledArr = numArr.map((num) => {
//     return String(Number(num) ** 2);
//   });
//   console.log(dounbledArr);
//   return Number(dounbledArr.join(""));
// }

// console.log(ab(9199)

// function count(number) {
//   if (number.length > 0) {
//     let sum = 0;
//     for (const num of number) {
//       sum += num;
//     }
//     return sum;
//   } else {
//     return 0;
//   }
// }

// console.log(count([1, 5.2, 4, 0, -1]));

// const arr = [2, 4, 7, 8];

// const arr1 = ["2", "4", "7"];

// console.log(Math.max.apply(Math, arr1));

// function arry(numbers) {
//   const small = numbers.sort((a, b) => a - b);
//   const min = small.splice(0, 2);
//   return min.reduce((acc, a) => acc + a, 0);
// }

// arry([19, 5, 42, 2, 77]);

// function filter_list(l) {
//   return l.filter((a) => a !== "string");
//   console.log(l);
// }
// filter_list([1, 2, "a", "b"]);

// function checkForFactor(base, factor) {
//   const sum = base * factor;
//   if (sum % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// checkForFactor(10, 2);

// function alphabetPosition(text) {
//   const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
//   const toLow = text.toLowerCase();

//   const al = toLow
//     .split("")

//     .filter((char) => /[a-zA-Z]/.test(char))
//     .map((x) => alpha.indexOf(x) + 1);

//   console.log(al);
// }

// alphabetPosition("The sunset sets at twelve o' clock.");

// function getCount(str) {
//   const stringA = str
//     .split("")
//     .filter(
//       (a) => a === "a" || a === "e" || a === "i" || (a === "o") | (a === "u")
//     ).length;
//   console.log(stringA);
// }
// getCount("abracadabra");

// function digitize(n) {
//   const reversed = String(n)
//     .split("")
//     .reverse()
//     .map((a) => Number(a));
//   console.log(reversed);
// }
// digitize(35231);

// function friend(friends) {
//   const only4 = friends.filter((a) => a.length === 4);
//   console.log(only4);
// }

// friend[("Ryan", "Kieran", "Mark")];

// var uniqueInOrder = function (iterable) {
//   const result = [];

//   const split = iterable
//     .replace(/\s+|\,|\.|\_|\-|\:|\(|\)|\/|\\/g, "")
//     .split("");
//   console.log(split);
//   for (let i = 0; i < split.length; i++) {
//     if (split[i] !== split[i + 1]) {
//       result.push(split[i]);
//     }
//   }
//   return result;
// };

// uniqueInOrder("AAAABBBCCDAABBB");
// console.log(uniqueInOrder("1122333"));

// function expandedForm(num) {
//   const toStr = String(num);
//   const sliced = toStr.slice(0, 1);
//   const slicedAfter = toStr.slice(1);
//   const slicedAfter1 = toStr.slice(1).length;

//   console.log(toStr);
//   console.log(sliced);
//   console.log(slicedAfter1);
//   if (toStr[1] <= 5) {
//     console.log(`${sliced} + ${slicedAfter}`);
//   }
// }

// expandedForm(70304);

// function doubleChar(str) {
//   let splited = str.split("");
//   console.log(splited);

//   return splited.map((a) => a + a).join("");
// }

// console.log(doubleChar("String"));

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let age = dadYearsOld - sonYearsOld * 2;
//   while (age >= 0) {
//     return age;
//   }
//   return +Math.abs(age);
// }

function twoSort(s) {
  const sorted = s.sort()[0].split("");
  const splited = sorted.join("***");
  console.log(splited);
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
