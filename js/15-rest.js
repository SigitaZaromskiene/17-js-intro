const marks = [10, 6, 8, 7];

const [first, second, ...allothers] = marks;
console.log(first, allothers);

marks.forEach(function (age, i) {
  console.log(age);
  console.log(`On ${i + 1} gets ${age}`);
});

for (const [i, mark] of marks.entries()) {
  console.log(`On ${i + 1} gets ${mark}`);
}

const girl = {
  name: "Sigita",
  age: 14,
  home: 15,
};

const entries = Object.entries(girl);
for (const [key, value] of entries) {
  //   console.log(key, value);
}

const key = Object.keys(girl);
for (const values of key) {
  console.log(values);
}
