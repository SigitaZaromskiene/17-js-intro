console.log("array");

// ------------- ND-----------------

const fruits = ["apples", "oranges", "bananas", "pears", "limes"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

const sports = ["basketball", "football", "golf", "hokey", "jogging"];
console.log(sports[0], sports[1], sports[2], sports[3], sports[4]);

const animals = ["dogs", "monkeys", "lions", "cats", "tigers"];

const comma = ",";
const space = " ";
let list = `Animals list:`;

list += animals[4] + comma + space;
list += animals[3] + comma + space;
list += animals[2] + comma + space;
list += animals[1] + comma + space;
list += animals[0] + comma + space;
console.log(list);

animals.map((animal) => {
  console.log(animal);
});

const expenses = [22, 5, 6, 87, 5];
console.log(expenses[0], expenses[1], expenses[2], expenses[3], expenses[4]);
const logic =
  expenses[0] - expenses[1] + (expenses[2] - expenses[3]) + expenses[4];
console.log(logic);

const tips = [2, 3, 6, 8, 1];
console.log(tips);

const days = [6, 7, 16, 22, 29];
console.log(days);

const expenses1 = [22, 5, 6, 87, 5];
let sum = 0;
sum += expenses[0]++;
sum += expenses[1]++;
sum += expenses[2]++;
sum += expenses[3]++;
sum += expenses[4]++;
console.log(sum);

const sports1 = ["basketball", "football", "golf", "hokey", "jogging"];
const separator = " ";
console.log(
  `${sports[0]}${separator}${sports[1]}${separator}${sports[2]}${separator}${sports[3]}${separator}${sports[4]}`
);

let sentance = "My favourite sports are:";

sentance += separator + sports[0];
sentance += separator + sports[1];
sentance += separator + sports[2];
sentance += separator + sports[3];
sentance += separator + sports[4];
console.log(sentance);
