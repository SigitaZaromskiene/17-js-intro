function sum(from, to) {
  if (typeof from !== "number") {
    return "Error, added text is not a number";
  }
  if (typeof to !== "number") {
    return "Error, added text is not a number";
  }
  if (!isFinite(from)) {
    return "Error, added text should have numbers";
  }
  if (!isFinite(to)) {
    return "Error, added text should have numbers";
  }
  if (from % 1 !== 0) {
    return "Error, this number should be without comma";
  }
  if (to % 1 !== 0) {
    return "Error, this number should be without comma";
  }

  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sum(0, 0));
console.log(sum(0, 4));
console.log(sum("la", 4));
console.log(sum(5.5, 4));
console.log(sum(0, 100));
console.log(sum(574, 815));
console.log(sum(-50, 50));
console.log(sum(-70, 30));
