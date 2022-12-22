// const marks = [10, 2, 8, 4, 6];
// marks[0] = 11;
// console.log(marks);

// const map = marks.map((mark) => mark * 2);
// console.log(map);

// const a = marks.slice();
// console.log(a);

// const age = [1, 55, 4];

// const newA = [...age];

// const aa = (newA[1] = 5);
// console.log(aa);
// console.log(age, newA);

console.clear();

const kiausiniai = [2, 4, 6, 8, 10];
// const eggs = [3,5,7,9,10];

const newKiausiniai = [];
for (const kaina of kiausiniai) {
  newKiausiniai.push(kaina * 1.5);
}

console.log(newKiausiniai);
// --------

function pr(price) {
  return price * 1.5;
}

const didKaina = [10, 20, 50];
const mazKaina = [];

for (const kaina of didKaina) {
  mazKaina.push(pr(kaina));
}

// ----------------

const retail1 = didKaina.map((a) => a * 1.5);
const retail2 = didKaina.map(pr);
console.log(retail1, retail2);
