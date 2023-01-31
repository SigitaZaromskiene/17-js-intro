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

// function twoSort(s) {
//   const sorted = s.sort()[0].split("");
//   const splited = sorted.join("***");
//   console.log(splited);
// }

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

// const num = [22, 4, 7, 85, 412];

// const max = Math.max(...num);
// console.log(max);

// const array = [true, true, true, false, true, true, true];

// function countSheeps(arrayOfSheep) {
//   let sum = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       sum++;
//     }
//   }
//   return sum;
// }
//   for (let sheep of arrayOfSheep) {
//     let sum = 0;
//     if (sheep === true) {
//       console.log();
//       return (sum += 1);
//     }

// console.log(countSheeps(array));

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(21));

// function solution(nums) {
//   if (nums !== null) {
//     return nums.sort((a, b) => a - b);
//   } else {
//     return [];
//   }
// }

// console.log(solution([1, 2, 3, 10, 5]));
// console.log(solution(null));

// function likes(names) {
//   if (names.length === 0) {
//     return `no one likes this`;
//   } else if (names.length === 1) {
//     return `${names} likes this`;
//   } else if (names.length > 1 && names.length <= 3) {
//     const withoutLast = names.slice(0, -1);
//     const withSpaces = withoutLast.toString().replaceAll(",", ", ");
//     const lastName = names.slice(-1);
//     return `${withSpaces} and ${lastName} like this`;
//   } else if (names.length >= 4) {
//     const sliceTwo = names.slice(0, 2);
//     const sliceToString = sliceTwo.toString().replaceAll(",", ", ");
//     const leftNamesLength = names.slice(2).length;
//     return `${sliceToString} and ${leftNamesLength} others like this`;
//   }
// }
// console.log(likes(["Alex", "Jacob", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function getAge(inputString) {
//   return parseInt(inputString);
// }

// console.log(getAge("465 years old"));

// function minMax(arr) {
//   const newArr = [];
//   const min = Math.min(...arr);
//   console.log(min);
//   const max = Math.max(...arr);
//   console.log(max);
//   newArr.push(min, max);
//   return newArr;
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   console.log(indexOfMin);
//   console.log([...numbers.slice(0, indexOfMin)]);
//   console.log([...numbers.slice(indexOfMin + 1)]);

//   //   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// const rps = (p1, p2) => {
//   const p = "paper";
//   const s = "scissors";
//   const r = "rock";
//   if (p1 === s && p2 === p) {
//     return "Player 1 won!";
//   } else if (p1 === p && p2 === s) {
//     return "Player 2 won!";
//   } else if (p1 === s && p2 === r) {
//     return "Player 2 won!";
//   } else if (p1 === r && p2 === s) {
//     return "Player 1 won!";
//   } else if (p1 === r && p2 === p) {
//     return "Player 1 won!";
//   } else if (p1 === p && p2 === r) {
//     return "Player 2 won!";
//   } else
//     (p1 === p && p2 === p) || (p1 === r && p2 === r) || (p1 === s && p2 === s);
//   return "Draw!";
// };

// console.log(rps("rock", "scissors"));
// console.log(rps("paper", "rock"));
// console.log(rps("rock", "paper"));
// console.log(rps("scissors", "rock"));
// console.log(rps("paper", "scissors"));
// console.log(rps("scissors", "paper"));

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// function singleQuotes(name) {
//   const newName = (name = "'" + name + "'");
//   console.log(newName);
//   return `Name, ${newName} in a single quotes`;
// }

// console.log(singleQuotes("Jonas"));

// function countBy(x, n) {
//   const sum = x * n - x;
//   return sum;
// }

// console.log(countBy(1, 10));

// function countBy(x, n) {
//   const z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

// console.log(countBy(1, 10));

// function findSmallestInt(args) {
//   let smallest = args[0];
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] < smallest) smallest = args[i];
//   }
//   return smallest;
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8]));

// function findNeedle(haystack) {
//   const needle = haystack.filter((word) => word === "needle");
//   const position = haystack.indexOf("needle");
//   console.log(needle, position);
// }

// const haystac = [
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ];

// console.log(haystac);

// const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   for (var i = begin; i <= end; i += step) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(sequenceSum(1, 5, 1));
// console.log(sequenceSum(1, 5, 3));

// var humanYearsCatYearsDogYears = function (humanYears) {
//   let catYears = 0;
//   let dogYears = 0;
//   if (humanYears === 1) {
//     console.log(catYears);
//     return [humanYears, catYears + 15, dogYears + 15];
//   } else if (humanYears === 2) {
//     return [humanYears, catYears + 9, dogYears + 9];
//   } else {
//     return [humanYears, catYears + 4, dogYears + 4];
//   }
// };

// console.log(humanYearsCatYearsDogYears(1));
// console.log(humanYearsCatYearsDogYears(2));

// function isPangram(string) {
//   for (let lete of "abcdefghijklmnopqrstuvwxyz") {
//     if (!string.includes(lete)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("The own fox jumps."));
// console.log(isPangram("This is not a pangram."));

// function removeUrlAnchor(url) {
//   //   const splited = url.split("");
//   //   if (splited.includes("#")) {
//   //     const index = splited.indexOf("#");
//   //     const last = url.slice(index);

//   //     return url.replace(last, "");
//   //   }
//   //   return url;

//   return url.split("#")[0];
// }

// console.log(removeUrlAnchor("www.codewars.com#about"));
// console.log(removeUrlAnchor("www.codewars.com/katas/"));

// function sumArray(array) {
//   if (array === null || array.length <= 1) {
//     return 0;
//   } else {
//     const sorted = array.sort((a, b) => a - b);
//     const result = sorted.slice(1, -1);
//     const sum = result.reduce((acc, a) => a + acc, 0);
//     return sum;
//   }
// }

// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([]));
// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray(null));

// const marks = [2, 5, 8, 9];
// const num = [1, 88, 22, 2];
// const drinks = [2, 2, 3, 5];

// const result = 5 > 4 ? "pomidoras" : "bandykite dar karta";
// const result1 = 5 < 4 ? "pomidoras" : "bandykite dar karta";
// const result2 = 5 === 4 ? "pomidoras" : "bandykite dar karta";
// const result3 = 5 !== 4 ? "pomidoras" : "bandykite dar karta";
// const result4 = 5 >= 4 ? "pomidoras" : "bandykite dar karta";
// console.log(result, result1, result2, result3, result4);

// let sum = 0;
// for (let mark of marks) {
//   sum += mark;
// }
// console.log(sum);

// let su = 0;
// for (let i = 0; i < num.length; i++) {
//   su += num[i];
// }
// console.log(su);

// console.log(drinks.reduce((acc, drink) => acc + drink, 0));
// let s = 0;
// drinks.forEach((a) => {
//   s += a;
// });
// console.log(s);

const fruits = ["apple", "orange", "bannana"];
// const names = ["Sigita", "Gerda", "Diana"];
// const cities = ["Kaunas", "Vilnius", "Siauliai"];

// // console.log(fruits.length);

// const news = fruits.reverse("").join("," + " ");
// // console.log(news);

// const city = cities.join(" ");
// // console.log(city);

// const ages1 = [5, 4, 6, 8, 9];

// console.log(ages1.length);

// const [age] = ages;
// console.log(age);

// const summ = age[0] - age[1] + age[2] - age[3] + age[4];
// console.log(summ);

// const songs = [
//   [1, 2, 3, 4, 5],
//   [5, 6, 2, 1, 1],
//   [6, 6, 5, 2, 1, 1],
// ];

// console.log(songs[0].length);
// const houses = [
//   [4, 4, 5, 3, 2],
//   [2, 2, 3, 3, 5],
//   [1, 1, 1, 2, 3],
// ];

// let sum = 0;
// for (let i = 574; i < 815; i++) {
//   sum += i;
// }

// console.log(sum);

// const back = function (word) {
//   let reversed = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
//   }

//   return reversed;
// };

// console.log(back("abcdef"));

// const sent = function (word) {
//   let newW = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     newW += word[i];
//   }
//   return newW;
// };

// console.log(sent("alus"));

// const newSent = function (word) {
//   let new1 = "";
//   for (let i = 0; i < word.length; i++) {
//     new1 = word[i] + new1;
//   }
//   return new1;
// };

// console.log(newSent("alus"));

// const inter = function (first, second, divider) {
//   let count = 0;
//   for (let i = first; i <= second; i++) {
//     if (i % divider === 0) {
//       console.log(i);
//       count = count + i;
//     }
//   }
//   return count;
// };
// console.log(inter(0, 11, 3));
// console.log(inter(0, 11, 5));
// console.log(inter(0, 11, 7));

// function empty() {
//   console.log(false);
// }

// empty();

// function empty(num1, num2) {
//   const sum = num1 * num2;
//   console.log(sum);
//   return sum;
// }

// empty(1, 2);

// function skaitmenuKiekisSkaiciuje(num) {
//   if (typeof num !== "number") {
//     return `Pateikta netinkamo tipo reikšmė.`;
//   } else {
//     const sum = String(num).length;
//     return sum;
//   }
// }

// console.log(skaitmenuKiekisSkaiciuje(5));
// console.log(skaitmenuKiekisSkaiciuje(37060123456));
// console.log(skaitmenuKiekisSkaiciuje("hh"));

// function didziausiasSkaiciusSarase(num) {
//   if (!Array.isArray(num)) {
//     return `Pateikta netinkamo tipo reikšmė.`;
//   } else if (num.length === 0) {
//     return `Tuscias`;
//   } else {
//     let max = 0;
//     for (let ma of num) {
//       max = ma > max ? ma : max;
//     }
//     return max;
//   }
// }
// console.log(didziausiasSkaiciusSarase([1]));
// console.log(didziausiasSkaiciusSarase([]));

// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));

// console.log(didziausiasSkaiciusSarase("pomidor"));

// function isrinktiRaides(text, letter) {
//   if (typeof text !== "string") {
//     return `Pirmasis kintamasis yra netinkamo tipo.`;
//   } else if (text.length >= 100 && text.length === 0) {
//     return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`;
//   } else if (typeof letter !== "number") {
//     return `Antrasis kintamasis yra netinkamo tipo`;
//   } else if (letter === 0) {
//     return `Antrasis kintamasis turi būti didesnis už nulį`;
//   } else if (letter > text.length) {
//     return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį`;
//   } else {
//     const sliced = text.slice(letter);
//     return sliced;
//   }
// }

// console.log(isrinktiRaides("abcdefg", 2));
// console.log(isrinktiRaides("abc", 4));
// console.log(isrinktiRaides("abc", 0));
// console.log(isrinktiRaides(1561, 2));

// function dalyba(num1, num2) {
//   if (
//     num1 <= 0 ||
//     typeof num1 !== "number" ||
//     !isFinite(num1) ||
//     num1 % 1 !== 0
//   ) {
//     return `num1 is not valid`;
//   } else if (
//     num2 <= 0 ||
//     typeof num2 !== "number" ||
//     !isFinite(num1) ||
//     num2 % 1 !== 0
//   ) {
//     return `num2 is not valid`;
//   } else {
//     return num1 / num2;
//   }
// }

// console.log(dalyba(4, 2));
// console.log(dalyba(40, 10));
// console.log(dalyba(-4, 2));
// console.log(dalyba(4, -2));
// console.log(dalyba(null, 2));
// console.log(dalyba(4, NaN));
// console.log(dalyba(NaN, null));
// console.log(dalyba(NaN, NaN));
// console.log(dalyba("laba", null));
// console.log(dalyba(4, true));
// console.log(dalyba(4.2, null));
// console.log(dalyba(4, 33.33));
// console.log(dalyba(0, 33.33));
// console.log(dalyba(4, 0));
// /**p yra sutrump */

// const p = 3.14;
// const pp = p;
// /**
//  *
//  * @param {number} sveikasis sk
//  * @param {*number} b
//  * @returns
//  */
// function sum(a, b) {
//   return a + b;
// }

// const capitals = function (word) {
//   let newA = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toUpperCase() == word[i]) console.log(word[i]);
//   }
// };

// console.log(capitals("CodEWaRs"));

// const capitals = function (word) {
//   let caps = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };

// console.log(capitals("CodEWaRs"));

// const arr = (N) => {
//   let newARR = [];
//   for (let i = 0; i < N; i++) {
//     newARR.push(i);
//   }
//   return newARR;
// };
// /* the numbers 0 to N-1 */

// console.log(arr(5));

// function checkExam(array1, array2) {
//   let sum = 0;
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       console.log(array1[i]);
//       console.log(array2[i]);
//       sum += 4;
//     } else if (array1[i] === "" || array2[i] === "") {
//       sum += 0;
//     } else if (array1[i] !== array2[i]) {
//       sum -= 1;
//     }
//   }
//   return sum > 0 ? sum : 0;
//   //  } else if (array1[i] !== array2[i]) {
//   //     return (sum -= 1);
//   //   }
//   //   console.log(sum);
//   // }
// }

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));

// function shortcut(string) {
//   return string
//     .replaceAll("e", "")
//     .replaceAll("e", "")
//     .replaceAll("i", "")
//     .replaceAll("o", "")
//     .replaceAll("u", "");
// }
// //   let letters = ["a", "e", "i", "o", "u"];
// //   for (let i = 0; i < string.length; i++) {
// //     if (string[i] === letters[i]) {
// //       console.log(string.slice(letters));
// //     }
// //   }
// //   return string;
// // }

// console.log(shortcut("hello"));

// function persistence(num) {
//   if (num.toString().length === 1) {
//     return 0;
//   } else {
//     const splited = num.toString();
//     let sum = 1;
//     for (let i = 0; i < splited.length; i++) {
//       console.log(splited[i]);
//       sum = splited[i] * sum;
//     }
//     return sum;
//   }
// }

// function persistence(num) {
//   var times = 0;

//   num = num.toString();
//   console.log(num);

//   while (num.length > 1) {
//     num = num
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a * b)
//       .toString();
//     console.log(num);
//     times++;
//   }

//   return times;
// }
// console.log(persistence(39));
// console.log(persistence(3));

// function smallEnough(a, limit) {
//   // return a.every((a) => a <= limit);

//   return Math.max(...a) < limit;
// }

// console.log(smallEnough([66, 101], 200));
// console.log(smallEnough([3, 0, 3, 4, 7, 4, 0, 7, 6, 5, 3], 4));

// function sumDigits(number) {
//   const abs = Math.abs(number);
//   const splited = abs.toString().split("");
//   const result = splited.map((a) => Number(a)).reduce((acc, a) => acc + a);
//   return result;
// }

// console.log(sumDigits(10));
// console.log(sumDigits(99));
// console.log(sumDigits(-32));

// function getDivisorsCnt(n) {
//   let div = 0;
//   for (let i = 1; i <= n; i++) if (n % i == 0) div++;
//   return div;
// }

// console.log(getDivisorsCnt(4));

//

// const multiTable = (number) => {
//   let table = "";

//   for (let i = 1; i <= 10; i++) {
//     table += `${i} * ${number} = ${i * number}\n`;
//   }

//   return table;
// };

// console.log(multiTable(5));

// function findOdd(arr) {
//   const find1 = arr.find((item, index) =>
//     arr.filter((el) => console.log(el == item))
//   );

//   console.log(find1);
// }

// console.log(findOdd([1, 0, 1, 0, 0]));

// arr.filter((el) => el == item).length % 2);

// function cockroachSpeed(s) {
//   const sec = 3600;
//   console.log(sec);
//   const cm = s / 100000;
//   console.log(cm);
// }

// cockroachSpeed(1.08);

// function printerError(s) {
//   const length = s.length;
//   const filtered = s.split("");
//   const filt = filtered.filter(
//     (a) =>
//       a === "a" ||
//       a === "b" ||
//       a === "c" ||
//       a === "d" ||
//       a === "e" ||
//       a === "f" ||
//       a === "g" ||
//       a === "h" ||
//       a === "i" ||
//       a === "j" ||
//       a === "k" ||
//       a === "l" ||
//       a === "m"
//   );
//   const errorRate = Number(length) - Number(filt.length);
//   return `${errorRate}/${length}`;
// }

// function printerError(s) {
//   // your code
//   var count = 0;
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] > "l") {
//       count++;
//       console.log(count);
//     }
//   }
//   return count + "/" + s.length;
// }

// console.log(printerError("aaaxbbbbyyhwawiwjjlljwwm"));

// function enough(cap, on, wait) {
//   const howManyInBus = cap - on;
//   if (howManyInBus >= wait) {
//     return 0;
//   } else {
//     return wait - howManyInBus;
//   }
// }

// console.log(enough(100, 60, 50));

// function domainName(url) {
//   url = url.replace("https://", "");
//   url = url.replace("http://", "");
//   url = url.replace("www.", "");
//   return url.split(".")[0];
// }

// console.log(domainName("https://www.cnet.com"));

// function descendingOrder(n) {
//   const splited = n.toString().split("");
//   console.log(splited);

//   const s = splited
//     .sort((a, b) => a - b)
//     .reverse()
//     .join("");

//   return Number(s);
// }

// console.log(descendingOrder(1021));

// function replace(s) {
//   return s.replace(/[aeiou]/gi, "");
// }

// console.log(replace("!Hi! Hi!"));

// function areYouPlayingBanjo(name) {
//   const first = name.slice(0, 1);
//   console.log(first);
//   if (first === "R" || first === "r") {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Adam"));

// function stray(numbers) {
//   const sorted = numbers.sort();
//   console.log(sorted);

//   if (numbers[1] !== numbers[0]) {
//     return numbers[0];
//   } else {
//     return numbers.length - 1;
//   }
// }
//   let i = 0;

//   let notEven = numbers.find((el) => el !== i);
//   const newI = (notEven = i);
//   console.log(newI);
//   //   numbers.forEach((element) => {
//   //     element > i ? element === i : i;
//   //     console.log(element);
//   //   });

// function stray1(numbers) {
//   // numbers = numbers.sort((a, b) => a - b);
//   //   numbers.sort();
//   //   console.log(numbers);
//   //   if (numbers[0] !== numbers[1]) {
//   //     return numbers[0];
//   //   } else {
//   //     return numbers[numbers.length - 1];
//   //   }
//   // }
//   const ats = numbers.filter((a) => a !== numbers[0]);
//   return ats[0];
// }
// console.log(stray1([17, 17, 3, 17, 17, 17, 17]));

// function remove(string) {
//   if (string.includes("!")) {
//     return string.slice(0, -1);
//   } else {
//     return string;
//   }
// }

// console.log(remove("Hi!"));
// console.log(remove("Hi"));

// function findMultiples(int, limit) {
//   let result = [];

//   for (let i = int; i <= limit; i +init = int) result.push(i);

//   return result;
// }

// console.log(findMultiples(5, 25));

// function findUniq(arr) {
//   arr.sort((a, b) => a - b);

//   if (arr[0] === arr[1]) {
//     return arr[arr.length - 1];
//   } else {
//     return arr[0];
//   }
// }
// // console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));

// console.log(findUniq([3, -10, 3, 3, 3]));

// function duplicateEncode(word) {
//   let newArr = "";

//   for (let i = 0; i < word.length; i++) {
//     if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//       newArr += "(";
//     } else newArr += ")";
//   }
//   return newArr;
// }
// console.log(duplicateEncode("recede"));

// const sen = "reda valgo";
// const spl = sen.split("");
// console.log(lastIndexOf(spl[0]));

// function isIsogram(str) {
//   const splited = str.toLowerCase();
//   const spl = splited.split("");
//   const sorted = spl.sort();
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] == sorted[i + 1]) return false;
//   }
//   return true;
// }

//   str = str.toLowerCase();
//   let i, j;
//   for (i = 0; i < str.length; ++i) {
//     for (j = i + 1; j < str.length; ++j) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));

// function duplicateCount(text) {
//   let splited = text.toLowerCase().split("").sort();
//   console.log(splited);
//   let iCount = [];
//   for (let i = 0; i < splited.length; i++) {
//     if (splited[i] === splited[i + 1]) iCount.push(splited[i]);
//   }
//   return iCount.length;
// }

// console.log(duplicateCount("aabbcde"));

function sumStr(a, b) {
  if (a.lenght || b.length === 0) {
    return 0;
  }
  return String(Number(a) + Number(b));
}

// console.log(sumStr("4", "5"));

// function solution(string) {
//   let splitStr = string.split("");
//   let newStr = "";
//   splitStr.forEach((e) => {
//     if (e === e.toUpperCase()) newStr += " " + e;
//     else newStr += e;
//   });
//   return newStr;
// }

// console.log(solution("camelCasing")); //success = "camel Casing"
// console.log(solution("camelCasingTest"));

//

// function disemvowel(str) {
//   let str1 = str.replace(/A|E|I|O|U|a|e|i|o|u/g, "");
//   return str1;
// }

//   console.log(str);
//   const newStr = str
//     .replaceAll("i", "")
//     .replaceAll("e", "")
//     .replaceAll("o", "")
//     .replaceAll("u", "")
//     .replaceAll("e", "");
//   return newStr;
// }

//

// function openOrSenior(data) {
//   let output = [];
//   for (let i = 0; i < data.length; i++) {
//     const [age, hand] = data[i];
//     age >= 55 && hand > 7 ? output.push("Senior") : output.push("Open");
//   }
//   return output;
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// function dutyFree(normPrice, discount, hol) {
//   const price = (normPrice * discount) / 100;
//   const till = hol / price;
//   const rounded = Math.floor(till);
//   console.log(rounded);
// }

// console.log(dutyFree(12, 50, 1000));

// function capitalize(s) {
//   const odd = s
//     .split("")
//     .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
//     .join("");
//   const even = s
//     .split("")
//     .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
//     .join("");
//   return [even, odd];
// }

// console.log(capitalize("abcdef"));

// function distinct(a) {
//   const set = new Set(a);
//   return [...set];
// }

// console.log(distinct([1, 2, 2, 2]));

// function hello(name) {
//   const new1 = name.toLowerCase();
//   const first = new1.slice(0, 1).toUpperCase();

//   name = first + new1.slice(1);

//   return name.length > 1 ? `Hello, ${name}!` : `Hello, World!`;
// }

// console.log(hello("aLice"));

// function feast(beast, dish) {
//   if (
//     beast.slice(0, 1) === dish.slice(0, 1) &&
//     beast.slice(-1) === dish.slice(-1)
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(feast("great blue heron", "garlic naan"));

// const isAnagram = function (test, original) {
//   const test1 = test.toLowerCase().split("").sort();
//   const test2 = original.toLowerCase().split("").sort();
//   return test1.join("") === test2.join("");

//   // return test1 === test2 ? true : false;
// };

// console.log(isAnagram("foefet", "toffee"));
// console.log(isAnagram("Buckethead", "DeathCubeK"));
// console.log(isAnagram("dumble", "bumble"));

// function solve(s) {
//   const upper = s.split("").filter((a) => a === a.toUpperCase());
//   const lower = s.split("").filter((a) => a === a.toLowerCase());
//   if (upper.length > lower.length) {
//     return s.toUpperCase();
//   } else {
//     return s.toLowerCase();
//   }
// }
// if (upper.length === lower.length) s.toLowerCase();

// console.log(upper, lower);

// console.log(solve("code"));
// console.log(solve("CODe"));

// var number = function (array) {
//   const newA = [];
//   if (array.length === 0) {
//     return [];
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       newA.push(`${i + 1}: ${array[i]}`);
//     }
//   }
//   return newA;
// };

// // console.log(number(["a", "b", "c"]));

// function DNAStrand(dna) {
//   let newA = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       newA += "T";
//     }
//     if (dna[i] === "T") {
//       newA += "A";
//     }
//     if (dna[i] === "G") {
//       newA += "C";
//     }
//     if (dna[i] === "C") {
//       newA += "G";
//       console.log(newA);
//     }
//   }
//   return newA;
// }
// if (dna[i] === "T") newA.push(dna[i]);
// console.log(newA);
// if (dna[i] === "C") dna[i] = "G";
// if (dna[i] === "G") dna[i] = "C";

// let a = splited.filter((a) => a === "A");
// let t = splited.filter((a) => a === "T");
// let c = splited.filter((a) => a === "C");
// const g = splited.filter((a) => a === "G");

// console.log(new1.push(a));
// const t = splited.find((a) => a === "T").replaceAll("T", "A");
// const a = splited.find((a) => a === "T").replaceAll("A", "T");
// console.log(t);
// const c = splited.find((a) => a === "C").replaceAll("G", "C");
// const g = splited.find((a) => a === "G").replaceAll("C", "G");
// new1.push(a);
// new1.push(t);
// new1.push(c);
// new1.push(g);

//

// function take(arr, n) {
//   return arr.slice(0, n);
// }

// console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

// function longest(s1, s2) {
//   let new1 = [];
//   const sorted1 = s1.split("").sort();
//   const sorted2 = s2.split("").sort();
//   const two = sorted1 + sorted2;
//   const rep = two.replaceAll(",", "");

//   for (let i = 0; i < rep.length; i++) {
//     if (!new1.includes(rep[i])) {
//       new1.push(rep[i]);
//     }
//   }
//   return new1.sort().join("");
// }

// console.log(longest("aretheyhere", "yestheyarehere"));

// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [231, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );
// function stringClean(s) {
//   const a = s.replace(/\d+/g, "");
//   return a;
// }

// console.log(stringClean("(E3at m2e2!!)"));

// function arithmetic(a, b, operator) {
//   if ((operator = "add")) {
//     return a + b;
//   }
//   if ((operator = "subtract")) {
//     console.log(typeof a);
//   }
//   if ((operator = "multiply")) {
//     return a * b;
//   }
//   if ((operator = "divide")) {
//     return a / b;
//   }
// }

// console.log(arithmetic(8, 2, "subtract"));

// function xor(a, b) {
// if (a=== true && b === true){
//   return true
// }
// if (a=== true && b === false){
//   return true
// }
// if (a=== false && b === true){
//   return true
// }
