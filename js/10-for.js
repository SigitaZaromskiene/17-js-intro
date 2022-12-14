for (let i = 5; i <= 10; i++) {
  console.log("dirbu", 10);
}

for (let i = 0; i <= 10; i++) {
  console.log("dirbu", 0);
}

for (let i = -10; i <= -5; i++) {
  console.log("dirbu", -1);
}

for (let i = 10; i >= 5; i--) {
  console.log("dirbu", i);
}

console.clear();

const marks = [10, 2, 8, 4, 6];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
const av = sum / marks.length;
console.log(av);

// -----------

function marksAv(marksArray) {
  let sum = 0;

  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  return sum / marksArray.length;
}

const student1 = {
  name: "Aliza",
  marks: [2, 7, 8, 10],
};

const student2 = {
  name: "Linas",
  marks: [7, 7, 6, 10],
};

const vidurkis1 = marksAv(student1.marks);
const vidurkis2 = marksAv(student2.marks);

console.log(`${student1.name} vidurkis yra ${vidurkis1}`);
