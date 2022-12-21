const marks = [10, 2, 8, 4, 6];
marks[0] = 11;
console.log(marks);

const map = marks.map((mark) => mark * 2);
console.log(map);

const a = marks.slice();
console.log(a);

const age = [1, 55, 4];

const newA = [...age];

const aa = (newA[1] = 5);
console.log(aa);
console.log(age, newA);
