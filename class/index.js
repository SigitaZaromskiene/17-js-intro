import Studentas from "./Student.js";

// const Student = require("./Student");
const petras = new Studentas("Petras", 2000, false);
const maryte = new Studentas("Maryte", 1986, true);

console.log(petras.name, petras.marks, petras.age, petras.isVedes, maryte.name);
