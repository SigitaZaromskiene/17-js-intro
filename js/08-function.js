// const savikaina1 = 10;
// const savikaina2 = 20;
// const savikaina3 = 100;

// function coof(proc) {
//   return 1 + proc / 100;
// }

// function salesPrice(cost) {
//   const tax = 20;
//   const margin = 30;

//   const taxCoof = coof(tax);
//   const marginCoof = coof(margin);

//   return cost * taxCoof * marginCoof;
// }

// const price1 = salesPrice(savikaina1);
// const price2 = salesPrice(savikaina2);
// const price3 = salesPrice(savikaina3);

// console.log(savikaina1, "-->", price1);
// console.log(savikaina2, "-->", price2);
// console.log(savikaina3, "-->", price3);

// console.log("---------------");

// const student1 = [10, 2, 8, 4, 6];
// const student2 = [6, 7, 8, 9, 10];
// const student3 = [1, 3, 5, 7, 9];

// function listAverage(marks) {
//   const count = marks.length;
//   let sum = 0;
//   let index = 0;

//   sum += marks[index++];
//   sum += marks[index++];
//   sum += marks[index++];
//   sum += marks[index++];
//   sum += marks[index++];

//   return sum / count;
// }

// const average1 = listAverage(student1); // 6
// const average2 = listAverage(student2); // 8
// const average3 = listAverage(student3); // 5

// console.log(average1);
// console.log(average2);
// console.log(average3);

// ------ND-------

// const tusciaFuncija = function () {
//   return false;
// };

// console.log(tusciaFuncija());

// function daugyba(a, b) {
//   let sum = a * b;
//   return sum;
// }
// console.log(daugyba(1, 2));
// console.log(daugyba(3, 2));
// console.log(daugyba(1, 3));

// function skaitmenuKiekisSkaiciuje(number) {
//   if (typeof number !== "number") {
//     console.log("Pateikta netinkamo tipo reikšmė.");
//   } else {
//     const sum = number.toString().length;
//     return sum;
//   }
// }

// console.log(skaitmenuKiekisSkaiciuje(5));
// console.log(skaitmenuKiekisSkaiciuje(781));
// console.log(skaitmenuKiekisSkaiciuje(37060123456));
// console.log(skaitmenuKiekisSkaiciuje(true));
// console.log(skaitmenuKiekisSkaiciuje("asd"));

// function didziausiasSkaiciusSarase(parameter) {
//   if (typeof parameter !== "object") {
//     console.log("Pateikta netinkamo tipo reikšmė");
//   } else if (parameter.length <= 0) {
//     console.log("Pateiktas sąrašas negali būti tuščias");
//   } else {
//     let max = Math.max(...parameter);
//     return max;
//   }
// }

// console.log(didziausiasSkaiciusSarase([1]));
// console.log(didziausiasSkaiciusSarase([1, 2, 3]));
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
// console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
// console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
// console.log(didziausiasSkaiciusSarase("pomidoras"));
// console.log(didziausiasSkaiciusSarase([]));

function isrinktiRaides(text, number) {
  if (typeof text === "string") {
    console.log(text);
  } else {
    console.log("Pirmasis kintamasis yra netinkamo tipo.");
  }
  if (text !== " " || text.length > 100) {
    console.log(text);
  } else {
    console.log("Pirmojo kintamojo reikšmė yra netinkamo dydžio");
  }
  if (typeof number === "number") {
    console.log(number);
  } else {
    console.log("Antrasis kintamasis yra netinkamo tipo");
  }

  if (number > 0) {
    console.log(number);
  } else {
    console.log("Antrasis kintamasis turi būti didesnis už nulį");
  }
  if (number > text.length) {
    console.log(number);
  } else {
    console.log(
      "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį"
    );
  }

  //   let newStr = "";
  //   for (let i = 0; i < text.length; i = i + 2) {
  //     newStr += text[i];
  //     console.log(newStr);
  //   }
}

//   const f = text.split("-");
//   console.log(f);
//   const result = f.join().toString();
//   return result;
// }

console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));
