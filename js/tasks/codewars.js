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

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("45385593107843568"));
